import * as fs from "fs";
import * as path from "path";

// Document interface matching the raw output
interface NormalizedDocument {
  id: string;
  sourceFile: string;
  url: string | null;
  title: string;
  content: string;
  pageType: string;
  metadata: Record<string, any>;
}

// Repetitive marketing phrases to strip from contents
const REPETITIVE_MARKETING_PHRASES = [
  "March Ahead Towards Your लक्ष्य",
  "Dakbangla Road, Opp. Omar Girls High School, Chanakya Nagar, Begusarai, Bihar – 851101",
  "Dakbangla Road, Opp. Omar Girls High School, Chanakya Nagar, Begusarai, Bihar - 851101",
  "Dakbangla Road, Begusarai, Bihar – 851101",
  "Dakbangla Road, Begusarai, Bihar - 851101",
  "Walk-In Center Address: Dakbangla Road, Begusarai, Bihar",
  "Call Our Helpline: +91-6206323869",
  "Visit Our Programs: Explore LakshyaMarch Programs",
  "Success doesn't require changing your city; it requires upgrading your strategy and guidance.",
  "Join Begusarai's most result-oriented institute. Free counselling, expert mentorship, and a proven path to IITs and medical colleges.",
  "A Revolution in Education is Taking Shape in Begusarai",
  "March Ahead Towards Your",
  "Hi, I am interested in LakshyaMarch (School/Coaching)."
];

// Log buckets for script run statistics
const stats = {
  totalInput: 0,
  totalOutput: 0,
  emptyRemoved: 0,
  exactDuplicatesRemoved: 0,
  nearDuplicatesRemoved: 0,
  seoReductions: 0,
  removedTitles: [] as string[],
  duplicateLogs: [] as string[],
  nearDuplicateLogs: [] as string[],
  seoLogs: [] as string[],
};

// 1. LOAD DOCUMENTS
function loadDocuments(filePath: string): NormalizedDocument[] {
  console.log(`Loading raw documents from ${filePath}...`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Input file not found at path: ${filePath}`);
  }
  const data = fs.readFileSync(filePath, "utf-8");
  const docs = JSON.parse(data) as NormalizedDocument[];
  stats.totalInput = docs.length;
  return docs;
}

// Clean repetitive marketing phrases and excess whitespace
function cleanTextContent(content: string): string {
  let cleaned = content;
  for (const phrase of REPETITIVE_MARKETING_PHRASES) {
    // Escape regex characters
    const escaped = phrase.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(escaped, "gi");
    cleaned = cleaned.replace(regex, " ");
  }
  cleaned = cleaned.replace(/\s+/g, " ");
  return cleaned.trim();
}

// 2. REMOVE EMPTY AND BOILERPLATE DOCUMENTS
function removeEmptyDocuments(docs: NormalizedDocument[]): NormalizedDocument[] {
  console.log("Filtering empty, near-empty, or mostly boilerplate documents...");
  const result: NormalizedDocument[] = [];
  
  for (const doc of docs) {
    const cleanedContent = cleanTextContent(doc.content);
    
    // Check if remaining content has at least 100 meaningful characters
    if (cleanedContent.length < 100) {
      stats.emptyRemoved++;
      stats.removedTitles.push(`${doc.title} (Reason: content length ${cleanedContent.length} < 100 characters)`);
      continue;
    }

    // Check if content is mostly just boilerplate links or contact lists
    const lowercase = cleanedContent.toLowerCase();
    const hasLotsOfBoilerplate = 
      lowercase.includes("all day, 8:00 am") && 
      lowercase.includes("primary phone") &&
      cleanedContent.length < 250;
      
    if (hasLotsOfBoilerplate) {
      stats.emptyRemoved++;
      stats.removedTitles.push(`${doc.title} (Reason: mostly boilerplate contact data)`);
      continue;
    }

    // Update document content to be the cleaned content
    doc.content = cleanedContent;
    result.push(doc);
  }
  
  return result;
}

// 3. DETECT EXACT DUPLICATES
function removeDuplicates(docs: NormalizedDocument[]): NormalizedDocument[] {
  console.log("Checking for exact duplicates...");
  const seenContents = new Set<string>();
  const result: NormalizedDocument[] = [];
  
  for (const doc of docs) {
    // Standardize comparison by removing spacing and lowercase
    const normalizedText = doc.content.toLowerCase().replace(/\s+/g, "");
    
    if (seenContents.has(normalizedText)) {
      stats.exactDuplicatesRemoved++;
      stats.duplicateLogs.push(`Removed duplicate of: "${doc.title}" (URL: ${doc.url})`);
      continue;
    }
    
    seenContents.add(normalizedText);
    result.push(doc);
  }
  
  return result;
}

// Shingle generation for Jaccard Similarity (uses 3-word shingles)
function getShingles(text: string, n = 3): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 0);
    
  const shingles = new Set<string>();
  for (let i = 0; i <= words.length - n; i++) {
    shingles.add(words.slice(i, i + n).join(" "));
  }
  return shingles;
}

// Calculate Jaccard Similarity score
function calculateJaccard(text1: string, text2: string): number {
  const shingles1 = getShingles(text1);
  const shingles2 = getShingles(text2);
  
  if (shingles1.size === 0 || shingles2.size === 0) return 0;
  
  let intersection = 0;
  for (const s of shingles1) {
    if (shingles2.has(s)) {
      intersection++;
    }
  }
  
  const union = shingles1.size + shingles2.size - intersection;
  return intersection / union;
}

// 4. DETECT NEAR-DUPLICATES (Similarity > 90%)
function deduplicateNearMatches(docs: NormalizedDocument[]): NormalizedDocument[] {
  console.log("Analyzing content for near-duplicates (Similarity threshold > 90%)...");
  const result: NormalizedDocument[] = [];
  
  // Sort docs by content length descending, so we prioritize keeping the most informative version
  const sortedDocs = [...docs].sort((a, b) => b.content.length - a.content.length);
  
  for (const doc of sortedDocs) {
    let isNearDuplicate = false;
    
    for (const existingDoc of result) {
      // Avoid comparing SEO templates during this phase
      if (doc.pageType === "SEO content" || existingDoc.pageType === "SEO content") {
        continue;
      }
      
      const similarity = calculateJaccard(doc.content, existingDoc.content);
      
      if (similarity > 0.90) {
        isNearDuplicate = true;
        stats.nearDuplicatesRemoved++;
        stats.nearDuplicateLogs.push(
          `Merged/Removed near-duplicate: "${doc.title}" (Length: ${doc.content.length}) with more informative: "${existingDoc.title}" (Length: ${existingDoc.content.length}) [Similarity: ${(similarity * 100).toFixed(1)}%]`
        );
        break;
      }
    }
    
    if (!isNearDuplicate) {
      result.push(doc);
    }
  }
  
  // Restore original ordering logic by matching path/id
  return result;
}

// 5. COLLAPSE SEO-GENERATED LOCATION PAGES INTO TEMPLATES
function collapseSeoTemplates(docs: NormalizedDocument[]): NormalizedDocument[] {
  console.log("Collapsing SEO location pages into dynamic templates...");
  const nonSeoDocs = docs.filter((d) => d.pageType !== "SEO content");
  const seoDocs = docs.filter((d) => d.pageType === "SEO content");

  if (seoDocs.length === 0) {
    return docs;
  }

  // Group SEO documents by sourceFile template path
  // Expected paths:
  // - src/app/seo/general/[location]/page.tsx
  // - src/app/seo/neet/[location]/page.tsx
  // - src/app/seo/iit-jee/[location]/page.tsx
  const seoGroups: Record<string, NormalizedDocument[]> = {};
  
  for (const doc of seoDocs) {
    const templateKey = doc.sourceFile || "unknown-seo";
    if (!seoGroups[templateKey]) {
      seoGroups[templateKey] = [];
    }
    seoGroups[templateKey].push(doc);
  }

  const collapsedTemplates: NormalizedDocument[] = [];

  for (const [templateFile, groupDocs] of Object.entries(seoGroups)) {
    if (groupDocs.length === 0) continue;

    // Determine template type from path
    let templateType = "general";
    if (templateFile.includes("neet")) templateType = "neet";
    else if (templateFile.includes("iit-jee")) templateType = "iit-jee";

    // Grab first doc as base representation
    const baseDoc = groupDocs[0];
    const originalLocationName = baseDoc.metadata.location || "Begusarai";

    // Generalize content and title by replacing specific location names with a generic placeholder
    // e.g. "Begusarai" or "Matihani" -> "[Location]"
    const generalizedContent = baseDoc.content
      .replace(new RegExp(originalLocationName, "g"), "[Location]")
      .replace(new RegExp(originalLocationName.toLowerCase(), "g"), "[location]");
      
    const generalizedTitle = baseDoc.title
      .replace(new RegExp(originalLocationName, "g"), "[Location]")
      .replace(new RegExp(originalLocationName.toLowerCase(), "g"), "[location]");

    // Collect all location metadata from the grouped pages
    const coveredLocations = groupDocs.map((d) => ({
      name: d.metadata.location,
      url: d.url,
      id: d.id,
    }));

    // Create the collapsed template document
    const templateDoc: NormalizedDocument = {
      id: `seo-template-${templateType}`,
      sourceFile: templateFile,
      url: `https://lakshyamarch.com/seo/${templateType}/[location]`,
      title: generalizedTitle,
      content: generalizedContent,
      pageType: "SEO content",
      metadata: {
        templateType,
        totalLocationsCovered: coveredLocations.length,
        locations: coveredLocations,
        description: baseDoc.metadata.description
          ? baseDoc.metadata.description.replace(new RegExp(originalLocationName, "g"), "[Location]")
          : `Best ${templateType === "general" ? "coaching" : templateType.toUpperCase() + " coaching"} for students across regional locations.`,
      },
    };

    collapsedTemplates.push(templateDoc);
    stats.seoReductions += groupDocs.length - 1;
    stats.seoLogs.push(
      `Collapsed ${groupDocs.length} location pages for template "${templateFile}" into a single optimized template with ID: "${templateDoc.id}".`
    );
  }

  return [...nonSeoDocs, ...collapsedTemplates];
}

// 6. NORMALIZE TITLES AND URLS
function normalizeTitlesAndUrls(docs: NormalizedDocument[]): NormalizedDocument[] {
  console.log("Normalizing document titles and URLs...");
  for (const doc of docs) {
    // Clean Title: remove duplicate separators like "||" or "| |" or "- -"
    if (doc.title) {
      doc.title = doc.title
        .replace(/\|+/g, "|")
        .replace(/-+/g, "-")
        .replace(/\s*\|\s*\|\s*/g, " | ")
        .replace(/\s*-\s*-\s*/g, " - ")
        .replace(/\s+/g, " ")
        .trim();
        
      // Strip trailing separators
      if (doc.title.endsWith("|") || doc.title.endsWith("-")) {
        doc.title = doc.title.slice(0, -1).trim();
      }
    }

    // Clean URL: standard formatting
    if (doc.url) {
      doc.url = doc.url
        .replace(/([^:]\/)\/+/g, "$1") // Remove duplicate slashes except after http:
        .replace(/\s+/g, "")
        .trim();
        
      // Standardize trailing slashes: strip trailing slash except for root domain
      if (doc.url.endsWith("/") && doc.url !== "https://lakshyamarch.com/") {
        doc.url = doc.url.slice(0, -1);
      }
    }
  }
  return docs;
}

// 7. IMPROVE METADATA (Enrich with length, word count, priorities)
function enrichMetadata(docs: NormalizedDocument[]): NormalizedDocument[] {
  console.log("Enriching document metadata and assigning retrievalPriority...");
  
  const priorityMap: Record<string, number> = {
    "programs": 1.0,
    "study material": 1.0,
    "faculty content": 0.95,
    "results": 0.95,
    "success stories": 0.90,
    "testimonials": 0.90,
    "blogs": 0.80,
    "pages": 0.80,
    "SEO content": 0.20,
  };

  for (const doc of docs) {
    const contentLength = doc.content.length;
    const estimatedWordCount = doc.content.split(/\s+/).filter((w) => w.length > 0).length;
    
    // Retrieve assigned priority or fallback to standard page priority
    const priority = priorityMap[doc.pageType] !== undefined ? priorityMap[doc.pageType] : 0.80;

    doc.metadata = {
      ...doc.metadata,
      contentLength,
      estimatedWordCount,
      retrievalPriority: priority,
    };
  }

  return docs;
}

// 8. GENERATE STATISTICS AND LOG REPORT
function generateStatistics(
  inputDocs: NormalizedDocument[],
  outputDocs: NormalizedDocument[]
) {
  stats.totalOutput = outputDocs.length;
  
  const totalChars = outputDocs.reduce((sum, doc) => sum + doc.content.length, 0);
  const avgChars = outputDocs.length > 0 ? Math.round(totalChars / outputDocs.length) : 0;
  
  const categoryBreakdown: Record<string, number> = {};
  outputDocs.forEach((doc) => {
    categoryBreakdown[doc.pageType] = (categoryBreakdown[doc.pageType] || 0) + 1;
  });

  console.log("\n==================================================");
  console.log("        OPTIMIZATION EXECUTION REPORT");
  console.log("==================================================");
  console.log(`Total input documents loaded:      ${stats.totalInput}`);
  console.log(`Empty/boilerplate removals:        ${stats.emptyRemoved}`);
  console.log(`Exact duplicate removals:          ${stats.exactDuplicatesRemoved}`);
  console.log(`Near-duplicate removals (>90%):    ${stats.nearDuplicatesRemoved}`);
  console.log(`SEO locations template reduction:  ${stats.seoReductions}`);
  console.log(`Total output documents saved:      ${stats.totalOutput}`);
  console.log("==================================================");
  
  if (stats.removedTitles.length > 0) {
    console.log("\nDiscarded Documents Details:");
    stats.removedTitles.forEach((t) => console.log(`- ${t}`));
  }

  if (stats.duplicateLogs.length > 0) {
    console.log("\nExact Duplicates Removed Logs:");
    stats.duplicateLogs.slice(0, 5).forEach((l) => console.log(`- ${l}`));
    if (stats.duplicateLogs.length > 5) {
      console.log(`  ... and ${stats.duplicateLogs.length - 5} more exact duplicate files`);
    }
  }

  if (stats.nearDuplicateLogs.length > 0) {
    console.log("\nNear-Duplicates Merged Logs:");
    stats.nearDuplicateLogs.slice(0, 5).forEach((l) => console.log(`- ${l}`));
    if (stats.nearDuplicateLogs.length > 5) {
      console.log(`  ... and ${stats.nearDuplicateLogs.length - 5} more near-duplicate files`);
    }
  }

  if (stats.seoLogs.length > 0) {
    console.log("\nSEO Collapsing Logs:");
    stats.seoLogs.forEach((l) => console.log(`- ${l}`));
  }

  console.log("\n==================================================");
  console.log("             OPTIMIZED CONTENT STATS");
  console.log("==================================================");
  console.log(`Total database size:              ${totalChars} characters`);
  console.log(`Average document content size:    ${avgChars} characters`);
  console.log("\nCategory breakdown in optimized database:");
  Object.entries(categoryBreakdown).forEach(([cat, count]) => {
    console.log(`- ${cat}: ${count} documents`);
  });
  console.log("==================================================\n");
}

// 9. SAVE OPTIMIZED DOCUMENTS
function saveDocuments(docs: NormalizedDocument[], filePath: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, JSON.stringify(docs, null, 2), "utf-8");
  console.log(`Optimized database successfully written to: ${filePath}`);
}

// MAIN RUNNER METHOD
function runOptimizationPipeline() {
  const inputPath = path.join(process.cwd(), "data/documents.json");
  const outputPath = path.join(process.cwd(), "data/optimized_documents.json");

  try {
    // Process steps sequentially
    let docs = loadDocuments(inputPath);
    
    docs = removeEmptyDocuments(docs);
    docs = removeDuplicates(docs);
    docs = deduplicateNearMatches(docs);
    docs = collapseSeoTemplates(docs);
    docs = normalizeTitlesAndUrls(docs);
    docs = enrichMetadata(docs);
    
    generateStatistics(loadDocuments(inputPath), docs);
    saveDocuments(docs, outputPath);
    
  } catch (err: any) {
    console.error(`Optimization failed: ${err.message}`);
    process.exit(1);
  }
}

runOptimizationPipeline();
