import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

// Normalize whitespaces, remove JSX/HTML artifacts
function cleanContent(text: string): string {
  if (!text) return "";
  let cleaned = text;
  
  // Replace HTML-style tags with spaces
  cleaned = cleaned.replace(/<\/?[a-zA-Z0-9]+(?:\s+[^>]*?)?>/g, " ");
  
  // Remove markdown links syntax e.g. [text](url) -> text
  cleaned = cleaned.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  
  // Remove JSX expressions like {" "} or {"text"}
  cleaned = cleaned.replace(/\{['"`](.*?)['"`]\}/g, "$1");
  
  // Remove empty curly brackets or curly variables
  cleaned = cleaned.replace(/\{.*?\}/g, " ");
  
  // Normalize whitespace (convert multiple spaces/newlines/tabs into a single space)
  cleaned = cleaned.replace(/\s+/g, " ");
  
  return cleaned.trim();
}

// Generate unique ID based on a string (e.g. file path + title)
function generateId(prefix: string, seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return `${prefix}-${Math.abs(hash).toString(36)}`;
}

// Map slug to title case location name
function slugToLocation(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Define the Document structure
interface NormalizedDocument {
  id: string;
  sourceFile: string;
  url: string | null;
  title: string;
  content: string;
  pageType: string;
  metadata: Record<string, any>;
}

// Config variables for logs
const logs = {
  discovered: [] as string[],
  extracted: [] as { file: string; type: string; title: string }[],
  skipped: [] as string[],
  failures: [] as { file: string; error: string }[],
};

// Resolve TS import path to actual file path
function resolveImportPath(currentFilePath: string, importPath: string): string | null {
  let resolved = "";
  if (importPath.startsWith("@/")) {
    resolved = path.resolve("src", importPath.substring(2));
  } else {
    resolved = path.resolve(path.dirname(currentFilePath), importPath);
  }

  const extensions = [".tsx", ".ts", "/index.tsx", "/index.ts"];
  for (const ext of extensions) {
    const fullPath = resolved + ext;
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }
  return null;
}

// Check if import should be skipped
function shouldSkipImport(resolvedPath: string): boolean {
  const lowercase = resolvedPath.toLowerCase();
  if (lowercase.includes("navbar") || lowercase.includes("footer")) return true;
  if (lowercase.includes("src/lib/")) return true; // processed separately
  if (lowercase.includes("src/hooks/")) return true;
  if (lowercase.includes("src/design-system/")) return true;
  if (lowercase.includes("layout.tsx") || lowercase.includes("layout.ts")) return true;
  if (lowercase.includes("globals.css")) return true;
  if (lowercase.includes("app/api/")) return true;
  return false;
}

// Convert a TS AST Node containing plain JS Literals into a JS Object
function astToValue(node: ts.Node): any {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  if (ts.isNumericLiteral(node)) {
    return Number(node.text);
  }
  if (node.kind === ts.SyntaxKind.TrueKeyword) {
    return true;
  }
  if (node.kind === ts.SyntaxKind.FalseKeyword) {
    return false;
  }
  if (node.kind === ts.SyntaxKind.NullKeyword) {
    return null;
  }
  if (ts.isArrayLiteralExpression(node)) {
    return node.elements.map(astToValue);
  }
  if (ts.isObjectLiteralExpression(node)) {
    const obj: any = {};
    for (const prop of node.properties) {
      if (ts.isPropertyAssignment(prop)) {
        let key = "";
        if (ts.isIdentifier(prop.name)) {
          key = prop.name.text;
        } else if (ts.isStringLiteral(prop.name)) {
          key = prop.name.text;
        }
        if (key) {
          obj[key] = astToValue(prop.initializer);
        }
      }
    }
    return obj;
  }
  return undefined;
}

// Extract variable value from TS file
function extractVariableFromAST(sourceFile: ts.SourceFile, varName: string): any {
  let result: any = undefined;
  
  function walk(node: ts.Node) {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === varName) {
      if (node.initializer) {
        result = astToValue(node.initializer);
      }
    }
    node.forEachChild(walk);
  }
  
  walk(sourceFile);
  return result;
}

// Extract all text and metadata from a page component and its imported client components
function extractPageContent(filePath: string): { texts: string[]; metadata: Record<string, any> } {
  const visited = new Set<string>();
  const collectedTexts: string[] = [];
  let metadata: Record<string, any> = {};

  function processFile(fileToProcess: string) {
    if (visited.has(fileToProcess)) return;
    visited.add(fileToProcess);

    const code = fs.readFileSync(fileToProcess, "utf-8");
    const sourceFile = ts.createSourceFile(fileToProcess, code, ts.ScriptTarget.Latest, true);

    // 1. Extract metadata if present
    function walkMetadata(node: ts.Node) {
      if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === "metadata") {
        if (node.initializer) {
          const val = astToValue(node.initializer);
          if (val) {
            metadata = { ...metadata, ...val };
          }
        }
      }
      node.forEachChild(walkMetadata);
    }
    walkMetadata(sourceFile);

    // 2. Extract texts and imported components
    const importsToVisit: string[] = [];

    function walkTextAndImports(node: ts.Node) {
      // Collect JsxText
      if (ts.isJsxText(node)) {
        const txt = node.text.trim();
        if (txt) {
          collectedTexts.push(txt);
        }
      } 
      // Collect specific string literals
      else if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
        const parent = node.parent;
        if (parent) {
          if (ts.isJsxAttribute(parent)) {
            const attrName = ts.isIdentifier(parent.name) ? parent.name.text : parent.name.getText(sourceFile);
            const targetAttrs = [
              "title", "lead", "eyebrow", "label", "message", "placeholder", 
              "alt", "eyebrowText", "accentWord", "text", "q", "a", "heading", "desc", "award", "rank"
            ];
            if (targetAttrs.includes(attrName) && node.text.trim()) {
              collectedTexts.push(node.text);
            }
          } else if (ts.isPropertyAssignment(parent)) {
            let propName = "";
            if (ts.isIdentifier(parent.name)) {
              propName = parent.name.text;
            } else if (ts.isStringLiteral(parent.name)) {
              propName = parent.name.text;
            }
            const targetProps = [
              "title", "lead", "description", "keywords", "message", "tagline", 
              "tagline2", "text", "q", "a", "heading", "body", "excerpt", 
              "name", "role", "qual", "prev", "usp", "college", "score", 
              "percentile", "award", "rank", "desc", "established", "address", "phone", "email"
            ];
            if (targetProps.includes(propName) && node.text.trim()) {
              collectedTexts.push(node.text);
            }
          } else if (ts.isJsxExpression(parent) && node.text.trim()) {
            collectedTexts.push(node.text);
          } else if (ts.isArrayLiteralExpression(parent)) {
            const grand = parent.parent;
            if (grand && (ts.isVariableDeclaration(grand) || ts.isPropertyAssignment(grand))) {
              let name = "";
              if (ts.isVariableDeclaration(grand) && ts.isIdentifier(grand.name)) {
                name = grand.name.text;
              } else if (ts.isPropertyAssignment(grand)) {
                if (ts.isIdentifier(grand.name)) name = grand.name.text;
                else if (ts.isStringLiteral(grand.name)) name = grand.name.text;
              }
              const targetContainers = [
                "points", "features", "highlights", "classes", "courses", 
                "keywords", "aboutFaqs", "homeFaqs", "faqs", "questions"
              ];
              if (targetContainers.some(tc => name.toLowerCase().includes(tc.toLowerCase())) && node.text.trim()) {
                collectedTexts.push(node.text);
              }
            }
          }
        }
      }
      // Follow imports
      else if (ts.isImportDeclaration(node)) {
        const moduleSpecifier = node.moduleSpecifier;
        if (ts.isStringLiteral(moduleSpecifier)) {
          const importPath = moduleSpecifier.text;
          if (importPath.startsWith("@/") || importPath.startsWith("./") || importPath.startsWith("../")) {
            importsToVisit.push(importPath);
          }
        }
      }

      node.forEachChild(walkTextAndImports);
    }

    walkTextAndImports(sourceFile);

    // Resolve and process imports
    for (const imp of importsToVisit) {
      const resolved = resolveImportPath(fileToProcess, imp);
      if (resolved && !shouldSkipImport(resolved)) {
        processFile(resolved);
      }
    }
  }

  processFile(filePath);
  return { texts: Array.from(new Set(collectedTexts)), metadata };
}

// Generate the final list of documents
function buildKnowledgeBase() {
  const documents: NormalizedDocument[] = [];
  const projectRoot = process.cwd();
  
  console.log("Starting project scan...");

  // Recursive traversal to discover all files in src/
  function walkDir(dir: string, fileList: string[] = []): string[] {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        walkDir(filePath, fileList);
      } else {
        fileList.push(filePath);
      }
    }
    return fileList;
  }

  const allFiles = walkDir(path.join(projectRoot, "src"));

  // Track discovered files and filters
  for (const filePath of allFiles) {
    const relativePath = path.relative(projectRoot, filePath).replace(/\\/g, "/");
    const ext = path.extname(filePath);
    
    if ([".ts", ".tsx", ".md", ".mdx", ".json"].includes(ext)) {
      logs.discovered.push(relativePath);
    }
  }

  // ─── 1. PROCESS STRUCTURED DATA FILES ─────────────────────
  
  const siteDataPath = path.join(projectRoot, "src/lib/siteData.ts");
  if (fs.existsSync(siteDataPath)) {
    try {
      const code = fs.readFileSync(siteDataPath, "utf-8");
      const sourceFile = ts.createSourceFile(siteDataPath, code, ts.ScriptTarget.Latest, true);

      // Extract Institute Info
      const institute = extractVariableFromAST(sourceFile, "INSTITUTE");
      if (institute) {
        const content = `Institute Name: ${institute.name} (${institute.shortName})
Tagline: ${institute.tagline}
Tagline 2: ${institute.tagline2}
Address: ${institute.address?.full}
Primary Phone: ${institute.primaryPhone}
Office Hours: ${institute.officeHours}
Emails: Coaching - ${institute.email}, School - ${institute.schoolEmail}
Established: ${institute.established}`;
        
        documents.push({
          id: "data-institute-info",
          sourceFile: "src/lib/siteData.ts",
          url: "https://lakshyamarch.com",
          title: "LakshyaMarch Institute Info",
          content: cleanContent(content),
          pageType: "general website information",
          metadata: { name: institute.name, established: institute.established, contact: institute.phones },
        });
        logs.extracted.push({ file: "src/lib/siteData.ts", type: "general website information", title: "LakshyaMarch Institute Info" });
      }

      // Extract Founder Info
      const founder = extractVariableFromAST(sourceFile, "FOUNDER");
      if (founder) {
        const content = `Founder: ${founder.name} (${founder.nickname})
Designation: ${founder.designation}
Qualifications: ${founder.qualification}
Certification: ${founder.certification}
Founder Message: ${founder.message}`;

        documents.push({
          id: "data-founder-info",
          sourceFile: "src/lib/siteData.ts",
          url: "https://lakshyamarch.com/about",
          title: "Founder Ram Sir Message",
          content: cleanContent(content),
          pageType: "general website information",
          metadata: { name: founder.name, designation: founder.designation },
        });
        logs.extracted.push({ file: "src/lib/siteData.ts", type: "general website information", title: "Founder Ram Sir Message" });
      }

      // Extract Programs Info
      const programs = extractVariableFromAST(sourceFile, "PROGRAMS");
      if (programs) {
        let contentStr = "";
        
        if (programs.school) {
          contentStr += `${programs.school.name} - ${programs.school.tagline}\nDescription: ${programs.school.description}\n`;
          contentStr += `Features: ${programs.school.features?.join(", ")}\n`;
          contentStr += "Batches:\n";
          programs.school.batches?.forEach((b: any) => {
            contentStr += `- ${b.name} (${b.target}). Start: ${b.startDate}, End: ${b.endDate}, Type: ${b.type}\n`;
          });
        }
        if (programs.coaching) {
          contentStr += `\n${programs.coaching.name} - ${programs.coaching.tagline}\nDescription: ${programs.coaching.description}\n`;
          contentStr += `Courses: ${programs.coaching.courses?.map((c: any) => `${c.name} (${c.target})`).join(", ")}\n`;
          contentStr += "Batches:\n";
          programs.coaching.batches?.forEach((b: any) => {
            contentStr += `- ${b.name} (${b.target}). Start: ${b.startDate}, End: ${b.endDate}, Type: ${b.type}\n`;
          });
        }

        documents.push({
          id: "data-programs-info",
          sourceFile: "src/lib/siteData.ts",
          url: "https://lakshyamarch.com/programs",
          title: "LakshyaMarch Programs & Batches",
          content: cleanContent(contentStr),
          pageType: "programs",
          metadata: { coursesCount: programs.coaching?.courses?.length || 0, classes: programs.school?.classes || [] },
        });
        logs.extracted.push({ file: "src/lib/siteData.ts", type: "programs", title: "LakshyaMarch Programs & Batches" });
      }

      // Extract Faculty Info
      const facultyList = extractVariableFromAST(sourceFile, "FACULTY");
      if (Array.isArray(facultyList)) {
        let contentStr = "LakshyaMarch Elite Faculty Members:\n";
        facultyList.forEach((f) => {
          contentStr += `- ${f.name} (${f.role}): Teaches ${f.subject}. Qualifications: ${f.qual}. Previous: ${f.prev}. USP: ${f.usp}. Teams: ${f.team?.join(", ")}.\n`;
        });

        documents.push({
          id: "data-faculty-info",
          sourceFile: "src/lib/siteData.ts",
          url: "https://lakshyamarch.com/faculty",
          title: "Faculty Profiles",
          content: cleanContent(contentStr),
          pageType: "faculty content",
          metadata: { facultyCount: facultyList.length },
        });
        logs.extracted.push({ file: "src/lib/siteData.ts", type: "faculty content", title: "Faculty Profiles" });
      }

      // Extract Results Info
      const resultsNeet = extractVariableFromAST(sourceFile, "RESULTS_NEET");
      const resultsJee = extractVariableFromAST(sourceFile, "RESULTS_JEE");
      const resultsBoard = extractVariableFromAST(sourceFile, "RESULTS_BOARD");
      
      let resultsStr = "LakshyaMarch Toppers & Academic Results:\n\nNEET Results:\n";
      if (Array.isArray(resultsNeet)) {
        resultsNeet.forEach((s) => {
          resultsStr += `- ${s.name} (${s.year}): Score ${s.score}. College: ${s.college || "N/A"}. Badge: ${s.badge || "N/A"}.\n`;
        });
      }
      resultsStr += "\nJEE Main & Advanced Results:\n";
      if (Array.isArray(resultsJee)) {
        resultsJee.forEach((s) => {
          resultsStr += `- ${s.name} (${s.year}): Percentile: ${s.percentile || s.stat}. College: ${s.college || "N/A"}. Badge: ${s.badge || "N/A"}.\n`;
        });
      }
      resultsStr += "\nBoard Exam Results:\n";
      if (resultsBoard) {
        if (Array.isArray(resultsBoard.cbse12)) {
          resultsStr += "CBSE Class 12 Toppers:\n";
          resultsBoard.cbse12.forEach((s: any) => {
            resultsStr += `- ${s.name} (${s.year}): Percentage: ${s.percentage}.\n`;
          });
        }
        if (Array.isArray(resultsBoard.cbse10)) {
          resultsStr += "CBSE Class 10 Toppers:\n";
          resultsBoard.cbse10.forEach((s: any) => {
            resultsStr += `- ${s.name} (${s.year}): Percentage: ${s.percentage}.\n`;
          });
        }
      }

      documents.push({
        id: "data-results-info",
        sourceFile: "src/lib/siteData.ts",
        url: "https://lakshyamarch.com/results",
        title: "Competitive and Board Exam Results",
        content: cleanContent(resultsStr),
        pageType: "results",
        metadata: { neetToppers: resultsNeet?.length || 0, jeeToppers: resultsJee?.length || 0 },
      });
      logs.extracted.push({ file: "src/lib/siteData.ts", type: "results", title: "Competitive and Board Exam Results" });

    } catch (e: any) {
      logs.failures.push({ file: "src/lib/siteData.ts", error: e.message });
    }
  }

  // Process success stories from stories.ts
  const storiesPath = path.join(projectRoot, "src/lib/stories.ts");
  if (fs.existsSync(storiesPath)) {
    try {
      const code = fs.readFileSync(storiesPath, "utf-8");
      const sourceFile = ts.createSourceFile(storiesPath, code, ts.ScriptTarget.Latest, true);
      const storiesList = extractVariableFromAST(sourceFile, "SUCCESS_STORIES");
      
      if (Array.isArray(storiesList)) {
        storiesList.forEach((story) => {
          documents.push({
            id: `story-${story.slug}`,
            sourceFile: "src/lib/stories.ts",
            url: `https://lakshyamarch.com/success-stories/${story.slug}`,
            title: story.title,
            content: cleanContent(story.content),
            pageType: "success stories",
            metadata: {
              slug: story.slug,
              excerpt: story.excerpt,
              category: story.category,
              year: story.year,
              author: story.author,
              studentId: story.studentId,
              seo: story.seo,
            },
          });
          logs.extracted.push({ file: "src/lib/stories.ts", type: "success stories", title: story.title });
        });
      }
    } catch (e: any) {
      logs.failures.push({ file: "src/lib/stories.ts", error: e.message });
    }
  }

  // Process blog data from blogData.ts
  const blogPath = path.join(projectRoot, "src/lib/blogData.ts");
  if (fs.existsSync(blogPath)) {
    try {
      const code = fs.readFileSync(blogPath, "utf-8");
      const sourceFile = ts.createSourceFile(blogPath, code, ts.ScriptTarget.Latest, true);
      const blogList = extractVariableFromAST(sourceFile, "BLOG_POSTS");

      if (Array.isArray(blogList)) {
        blogList.forEach((post) => {
          let contentStr = "";
          post.content?.forEach((section: any) => {
            if (section.heading) {
              contentStr += `${section.heading}\n`;
            }
            contentStr += `${section.body}\n\n`;
          });

          documents.push({
            id: `blog-${post.slug}`,
            sourceFile: "src/lib/blogData.ts",
            url: `https://lakshyamarch.com/blog/${post.slug}`,
            title: post.title,
            content: cleanContent(contentStr),
            pageType: "blogs",
            metadata: {
              slug: post.slug,
              description: post.description,
              keywords: post.keywords,
              category: post.category,
              date: post.date,
              readTime: post.readTime,
              author: post.author,
              authorRole: post.authorRole,
            },
          });
          logs.extracted.push({ file: "src/lib/blogData.ts", type: "blogs", title: post.title });
        });
      }
    } catch (e: any) {
      logs.failures.push({ file: "src/lib/blogData.ts", error: e.message });
    }
  }

  // Process contact / leadership data from contactData.ts
  const contactDataPath = path.join(projectRoot, "src/lib/contactData.ts");
  if (fs.existsSync(contactDataPath)) {
    try {
      const code = fs.readFileSync(contactDataPath, "utf-8");
      const sourceFile = ts.createSourceFile(contactDataPath, code, ts.ScriptTarget.Latest, true);
      const directorData = extractVariableFromAST(sourceFile, "DIRECTOR_DATA");
      const instValues = extractVariableFromAST(sourceFile, "INST_VALUES");

      let contactStr = "";
      if (directorData) {
        contactStr += `Leadership Desk Message:\nTitle: ${directorData.title}\nDirector: ${directorData.name}\nDesignation: ${directorData.designation}\nQualifications: ${directorData.qualification}\nCertification: ${directorData.certification}\nMessage: ${directorData.message}\n\n`;
      }
      if (instValues) {
        contactStr += "Institutional Core Values:\n";
        if (instValues.vision) contactStr += `- ${instValues.vision.title}: ${instValues.vision.text}\n`;
        if (instValues.mission) contactStr += `- ${instValues.mission.title}: ${instValues.mission.text}\n`;
        if (instValues.goal) contactStr += `- ${instValues.goal.title}: ${instValues.goal.text}\n`;
      }

      documents.push({
        id: "data-director-message",
        sourceFile: "src/lib/contactData.ts",
        url: "https://lakshyamarch.com/about",
        title: "Director Message and Institutional Values",
        content: cleanContent(contactStr),
        pageType: "general website information",
        metadata: { director: directorData?.name },
      });
      logs.extracted.push({ file: "src/lib/contactData.ts", type: "general website information", title: "Director Message & Values" });
    } catch (e: any) {
      logs.failures.push({ file: "src/lib/contactData.ts", error: e.message });
    }
  }

  // Process NCERT books data from ncertbookData.ts
  const ncertDataPath = path.join(projectRoot, "src/lib/ncertbookData.ts");
  if (fs.existsSync(ncertDataPath)) {
    try {
      const code = fs.readFileSync(ncertDataPath, "utf-8");
      const sourceFile = ts.createSourceFile(ncertDataPath, code, ts.ScriptTarget.Latest, true);
      const ncertFaqs = extractVariableFromAST(sourceFile, "NCERT_FAQS");
      const ncertRegistry = extractVariableFromAST(sourceFile, "NCERT_REGISTRY");

      let ncertStr = "NCERT Books and FAQ:\n\nFAQs:\n";
      if (Array.isArray(ncertFaqs)) {
        ncertFaqs.forEach((faq) => {
          ncertStr += `Q: ${faq.q}\nA: ${faq.a}\n\n`;
        });
      }
      if (Array.isArray(ncertRegistry)) {
        ncertRegistry.forEach((cls) => {
          ncertStr += `${cls.className} NCERT Textbooks:\n`;
          cls.subjects?.forEach((sub: any) => {
            ncertStr += `- Subject: ${sub.name}\n  Chapters:\n`;
            sub.books?.forEach((b: any) => {
              ncertStr += `    * ${b.name} (Download: ${b.url})\n`;
            });
          });
          ncertStr += "\n";
        });
      }

      documents.push({
        id: "data-ncert-books",
        sourceFile: "src/lib/ncertbookData.ts",
        url: "https://lakshyamarch.com/study-material/ncert",
        title: "NCERT Textbooks Study Material",
        content: cleanContent(ncertStr),
        pageType: "study material",
        metadata: { classesCount: ncertRegistry?.length || 0 },
      });
      logs.extracted.push({ file: "src/lib/ncertbookData.ts", type: "study material", title: "NCERT Books & FAQs" });
    } catch (e: any) {
      logs.failures.push({ file: "src/lib/ncertbookData.ts", error: e.message });
    }
  }

  // Process syllabus data from syllabusData.ts
  const syllabusDataPath = path.join(projectRoot, "src/lib/syllabusData.ts");
  if (fs.existsSync(syllabusDataPath)) {
    try {
      const code = fs.readFileSync(syllabusDataPath, "utf-8");
      const sourceFile = ts.createSourceFile(syllabusDataPath, code, ts.ScriptTarget.Latest, true);
      const syllabusData = extractVariableFromAST(sourceFile, "SYLLABUS_DATA");
      const officialBoards = extractVariableFromAST(sourceFile, "OFFICIAL_BOARDS");
      const syllabusFaqs = extractVariableFromAST(sourceFile, "SYLLABUS_FAQS");

      let syllabusStr = "Official Syllabus Trackers:\n\nSyllabus Info:\n";
      if (Array.isArray(syllabusData)) {
        syllabusData.forEach((cat) => {
          syllabusStr += `Category: ${cat.categoryName}\n`;
          cat.subjects?.forEach((sub: any) => {
            syllabusStr += `- Subject: ${sub.name}\n  Trackers:\n`;
            sub.trackers?.forEach((t: any) => {
              syllabusStr += `    * ${t.name}: ${t.url}\n`;
            });
          });
        });
      }
      
      syllabusStr += "\nOfficial Boards Info:\n";
      if (Array.isArray(officialBoards)) {
        officialBoards.forEach((board) => {
          syllabusStr += `- ${board.name}: Official site - ${board.url}\n`;
        });
      }

      syllabusStr += "\nSyllabus FAQs:\n";
      if (Array.isArray(syllabusFaqs)) {
        syllabusFaqs.forEach((faq) => {
          syllabusStr += `Q: ${faq.q}\nA: ${faq.a}\n\n`;
        });
      }

      documents.push({
        id: "data-syllabus",
        sourceFile: "src/lib/syllabusData.ts",
        url: "https://lakshyamarch.com/study-material/syllabus",
        title: "Official Exam Syllabus Trackers",
        content: cleanContent(syllabusStr),
        pageType: "study material",
        metadata: { categoriesCount: syllabusData?.length || 0 },
      });
      logs.extracted.push({ file: "src/lib/syllabusData.ts", type: "study material", title: "Syllabus Trackers & FAQs" });
    } catch (e: any) {
      logs.failures.push({ file: "src/lib/syllabusData.ts", error: e.message });
    }
  }

  // Process study material registry from studyMaterialRegistry.ts
  const registryPath = path.join(projectRoot, "src/lib/studyMaterialRegistry.ts");
  if (fs.existsSync(registryPath)) {
    try {
      const code = fs.readFileSync(registryPath, "utf-8");
      const sourceFile = ts.createSourceFile(registryPath, code, ts.ScriptTarget.Latest, true);
      const registryList = extractVariableFromAST(sourceFile, "STUDY_MATERIAL_REGISTRY");

      if (Array.isArray(registryList)) {
        let registryStr = "Daily Practice Problems (DPP) & Notes Registry:\n\n";
        registryList.forEach((cls) => {
          if (cls.subjects && cls.subjects.length > 0) {
            registryStr += `${cls.className} Study Files:\n`;
            cls.subjects.forEach((sub: any) => {
              registryStr += `- Subject: ${sub.name}\n`;
              sub.chapters?.forEach((ch: any) => {
                registryStr += `  * Chapter: ${ch.name}\n    Files:\n`;
                ch.files?.forEach((f: any) => {
                  registryStr += `      - ${f.name} (${f.type.toUpperCase()}). Added: ${f.addedAt}. Drive ID: ${f.driveId}\n`;
                });
              });
            });
            registryStr += "\n";
          }
        });

        documents.push({
          id: "data-study-material-registry",
          sourceFile: "src/lib/studyMaterialRegistry.ts",
          url: "https://lakshyamarch.com/study-material",
          title: "DPPs and Lecture Notes Registry",
          content: cleanContent(registryStr),
          pageType: "study material",
          metadata: { classesRegistered: registryList.map(c => c.className) },
        });
        logs.extracted.push({ file: "src/lib/studyMaterialRegistry.ts", type: "study material", title: "DPPs & Notes Registry" });
      }
    } catch (e: any) {
      logs.failures.push({ file: "src/lib/studyMaterialRegistry.ts", error: e.message });
    }
  }

  // ─── 2. PROCESS STATIC PAGES IN src/app/ ───────────────────
  
  for (const file of allFiles) {
    const relativePath = path.relative(projectRoot, file).replace(/\\/g, "/");
    
    // Process page components inside src/app/
    if (relativePath.startsWith("src/app/") && (relativePath.endsWith("page.tsx") || relativePath.endsWith("page.ts"))) {
      // Exclude template files / dynamic routes
      if (relativePath.includes("[location]") || relativePath.includes("[slug]")) {
        logs.skipped.push(relativePath);
        continue;
      }
      // Exclude technical pages/admin/auth/delete-account if they have no static user-facing marketing content
      if (relativePath.includes("admin/") || relativePath.includes("api/") || relativePath.includes("delete-account/")) {
        logs.skipped.push(relativePath);
        continue;
      }

      try {
        const { texts, metadata } = extractPageContent(file);
        
        // Skip pages with no content at all
        if (texts.length === 0 && !metadata.title) {
          logs.skipped.push(relativePath);
          continue;
        }

        // Determine URL path
        let urlPath = relativePath.substring("src/app".length);
        urlPath = urlPath.substring(0, urlPath.lastIndexOf("/page.tsx"));
        if (urlPath === "") urlPath = "/";
        const url = `https://lakshyamarch.com${urlPath}`;

        // Determine Page Title
        let title = metadata.title || "";
        if (typeof title === "object" && title.absolute) {
          title = title.absolute;
        } else if (typeof title === "object" && title.default) {
          title = title.default;
        }
        if (!title) {
          // Fallback title from directory name
          const dir = path.dirname(relativePath);
          const baseName = path.basename(dir);
          title = baseName === "app" ? "Home" : slugToLocation(baseName);
        }

        // Categorize pageType
        let pageType = "pages";
        if (relativePath.includes("blog/")) pageType = "blogs";
        else if (relativePath.includes("success-stories/")) pageType = "success stories";
        else if (relativePath.includes("testimonials/")) pageType = "testimonials";
        else if (relativePath.includes("study-material/") || relativePath.includes("notes/")) pageType = "study material";
        else if (relativePath.includes("results/") || relativePath.includes("results/")) pageType = "results";
        else if (relativePath.includes("faculty/")) pageType = "faculty content";
        else if (relativePath.includes("programs/")) pageType = "programs";
        else if (relativePath.includes("seo/")) pageType = "SEO content";

        const content = texts.join(" ");

        documents.push({
          id: generateId("page", url),
          sourceFile: relativePath,
          url,
          title,
          content: cleanContent(content),
          pageType,
          metadata: {
            description: metadata.description || "",
            keywords: metadata.keywords || [],
            openGraph: metadata.openGraph || null,
          },
        });
        logs.extracted.push({ file: relativePath, type: pageType, title });

      } catch (e: any) {
        logs.failures.push({ file: relativePath, error: e.message });
      }
    } else {
      // Non-page files
      if (!logs.skipped.includes(relativePath) && !logs.extracted.some(e => e.file === relativePath)) {
        // Only log files with targeting extensions as skipped
        const ext = path.extname(file);
        if ([".ts", ".tsx", ".md", ".mdx", ".json"].includes(ext)) {
          logs.skipped.push(relativePath);
        }
      }
    }
  }

  // ─── 3. DYNAMICALLY GENERATE SEO LOCATION PAGES ───────────
  
  const districtDataPath = path.join(projectRoot, "src/lib/districtData.ts");
  if (fs.existsSync(districtDataPath)) {
    try {
      const code = fs.readFileSync(districtDataPath, "utf-8");
      const sourceFile = ts.createSourceFile(districtDataPath, code, ts.ScriptTarget.Latest, true);
      const districts = extractVariableFromAST(sourceFile, "districtData");

      if (Array.isArray(districts)) {
        // Collect all slugs
        const locationSlugs: string[] = [];
        districts.forEach((dist) => {
          locationSlugs.push(dist.english.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
          dist.blocks?.forEach((block: any) => {
            // e.g. "Begusarai" or "Lakhisarai / Sadar Lakhisarai" -> extract first word / trim
            const cleanBlockName = block.english.split("/")[0].trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
            locationSlugs.push(cleanBlockName);
          });
        });

        // Filter duplicates
        const uniqueLocations = Array.from(new Set(locationSlugs));

        console.log(`Generating SEO location pages for ${uniqueLocations.length} locations...`);

        uniqueLocations.forEach((loc) => {
          const name = slugToLocation(loc);
          const isBegusarai = loc === "begusarai";

          // ─── A. General Location SEO Page ───
          const genTitle = isBegusarai
            ? `Best Coaching Institute in ${name} | LakshyaMarch Education`
            : `Best Coaching for ${name} Students | LakshyaMarch Education Begusarai`;
          const genDesc = isBegusarai
            ? `Looking for the best coaching in ${name}? LakshyaMarch Education provides top-tier IIT-JEE, NEET, and Foundation coaching with expert faculty and proven results.`
            : `From ${name}? Join LakshyaMarch Education in Begusarai for premium IIT-JEE & NEET coaching with top-tier hostel facilities and proven results.`;
          
          const genContent = `Best Coaching for ${name} Students. Why LakshyaMarch - #1 Coaching Institute.
Eyebrow: Why LakshyaMarch.
Lead: ${isBegusarai ? `Empowering ${name} students to achieve their dreams in IIT-JEE, NEET, and Board exams with proven methodology and top-tier faculty.` : `Just a short journey away, LakshyaMarch Education in Begusarai offers premium hostel facilities and a proven record of top results for students from ${name}.`}
Features:
- Expert Faculty: Highly experienced IIT/NIT teachers dedicated to student success in ${name}.
- Comprehensive Material: Updated study material, DPPs, and modules tailored for competitive exams.
- ${isBegusarai ? "Personalized Attention: Small batch sizes so every student in " + name + " gets the attention they need." : "Premium Hostel: Safe, secure, study-friendly hostel for students coming from " + name + "."}
- Proven Results: A consistent record of top IIT-JEE and NEET ranks from the ${name} region.
FAQs:
- Which is the best coaching choice for students in ${name}? LakshyaMarch Education is recognized as the premier choice for ${name} students, delivering consistent results in IIT-JEE, NEET, and Foundation courses.
- What courses does LakshyaMarch offer to students from ${name}? We offer targeted coaching for IIT-JEE (Main & Advanced), NEET-UG, and Foundation courses for Class 8, 9, and 10 students of ${name}.
- How do I enroll at LakshyaMarch? Students from ${name} can apply via the Admission page, or register for our Scholarship Exam to avail up to 100% fee waiver.`;

          documents.push({
            id: `seo-general-${loc}`,
            sourceFile: "src/app/seo/general/[location]/page.tsx",
            url: `https://lakshyamarch.com/seo/general/${loc}`,
            title: genTitle,
            content: cleanContent(genContent),
            pageType: "SEO content",
            metadata: { description: genDesc, location: name },
          });

          // ─── B. NEET Location SEO Page ───
          const neetTitle = isBegusarai
            ? `Best NEET Coaching in ${name} | LakshyaMarch Education`
            : `Best NEET Coaching for ${name} Students | LakshyaMarch Education Begusarai`;
          const neetDesc = isBegusarai
            ? `Achieve your dream of becoming a doctor with the best NEET coaching in ${name}. LakshyaMarch Education offers top faculty, NCERT-focused material, and a rigorous test series.`
            : `Dreaming of cracking NEET from ${name}? Join LakshyaMarch Education Begusarai for a competitive environment and dedicated hostel facilities for future doctors.`;
          
          const neetContent = `Best NEET Coaching for ${name} Students. NEET-UG Preparation.
Eyebrow: Why NEET Aspirants Choose Us.
Lead: ${isBegusarai ? `Empowering the future doctors of ${name}. Get the finest NCERT-based curriculum and a competitive environment to score 650+ in NEET.` : `Aiming for 650+ in NEET? Move to our Begusarai campus — a highly competitive environment, proven results, and premium hostel facilities for ${name} students.`}
Features:
- NCERT Focused: Line-by-line coverage of NCERT Biology, Physics, and Chemistry.
- ${isBegusarai ? "Expert Mentorship: Guidance from seasoned NEET educators and subject specialists." : "Hostel & Results: We produce doctors every year. Safe, dedicated hostels for " + name + " outstation students."}
- All-India Test Series: Benchmark your performance against aspirants across the country.
- Daily MCQ Practice: Structured daily Biology practice to sharpen accuracy for ${name} aspirants.
FAQs:
- Is LakshyaMarch Education the right choice for NEET aspirants from ${name}? Yes. We run specialized batches strictly aligned to the latest NTA NEET syllabus, ensuring maximum selections for students from ${name}.
- Do you provide NCERT based study material? Absolutely. Our material is designed to cover every concept, diagram, and summary of the NCERT textbooks.`;

          documents.push({
            id: `seo-neet-${loc}`,
            sourceFile: "src/app/seo/neet/[location]/page.tsx",
            url: `https://lakshyamarch.com/seo/neet/${loc}`,
            title: neetTitle,
            content: cleanContent(neetContent),
            pageType: "SEO content",
            metadata: { description: neetDesc, location: name },
          });

          // ─── C. IIT-JEE Location SEO Page ───
          const jeeTitle = isBegusarai
            ? `Best IIT JEE Coaching in ${name} | LakshyaMarch Education`
            : `Best IIT JEE Coaching for ${name} Students | LakshyaMarch Education Begusarai`;
          const jeeDesc = isBegusarai
            ? `Prepare for IIT-JEE (Main & Advanced) with Begusarai's leading institute. Expert IIT/NIT alumni faculty, daily DPPs, and top results in ${name}.`
            : `Engineering aspirant from ${name}? Prepare for IIT-JEE with experienced mentors at LakshyaMarch Begusarai. Premium hostel and competitive edge.`;
          
          const jeeContent = `Best IIT JEE Coaching for ${name} Students. IIT-JEE Main & Advanced Preparation.
Eyebrow: Elite Mentorship for Engineering Aspirants.
Lead: ${isBegusarai ? `Crack JEE Main & Advanced with mentors from IIT Kharagpur, IIT Dhanbad, and top NITs. A result-proven local environment in ${name}.` : `Aiming for IITs or top NITs? Join LakshyaMarch in Begusarai. We offer structured classrooms, top-tier study material, and safe boarding for students from ${name}.`}
Features:
- IIT/NIT Alumni Faculty: Learn directly from engineers who cracked the exam.
- Advanced Problem Solving: Focused modules covering advanced calculus, mechanics, and reaction mechanics.
- OMR Mock Tests: Weekly exams to build competitive speed and limit negative markings.
- Personal Doubt Solving: Clear concepts daily with same-day doubt desk access.
FAQs:
- What is the success rate of ${name} students in JEE? LakshyaMarch has a stellar record including 99.35 percentile in JEE Main and multiple IIT selections from the ${name} region.
- Can school students manage JEE coaching at LakshyaMarch? Yes, our integrated school model is specifically designed to cover board syllabus and JEE foundation together, saving time.`;

          documents.push({
            id: `seo-jee-${loc}`,
            sourceFile: "src/app/seo/iit-jee/[location]/page.tsx",
            url: `https://lakshyamarch.com/seo/iit-jee/${loc}`,
            title: jeeTitle,
            content: cleanContent(jeeContent),
            pageType: "SEO content",
            metadata: { description: jeeDesc, location: name },
          });
        });

        // Log count of generated SEO pages
        logs.extracted.push({
          file: "src/lib/districtData.ts (SEO generator)",
          type: "SEO content",
          title: `Generated ${uniqueLocations.length * 3} SEO landing pages`,
        });
      }
    } catch (e: any) {
      logs.failures.push({ file: "src/lib/districtData.ts", error: e.message });
    }
  }

  // Write the output to data/documents.json
  const outputDir = path.join(projectRoot, "data");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  
  const outputPath = path.join(outputDir, "documents.json");
  fs.writeFileSync(outputPath, JSON.stringify(documents, null, 2), "utf-8");
  
  console.log(`\nSuccessfully created knowledge base with ${documents.length} documents!`);
  
  // ─── 4. LOG OUT DETAILED STATISTICS & REPORT ────────────────
  console.log("\n==================================================");
  console.log("             KNOWLEDGE BASE BUILD LOGS");
  console.log("==================================================");
  console.log(`Discovered target files (.ts, .tsx, .md, .mdx, .json): ${logs.discovered.length}`);
  console.log(`Successfully parsed & extracted files/items: ${logs.extracted.length}`);
  console.log(`Skipped files (technical / layouts / utilities): ${logs.skipped.length}`);
  console.log(`Extraction failures: ${logs.failures.length}`);
  
  if (logs.failures.length > 0) {
    console.log("\nFailures Details:");
    logs.failures.forEach((f) => console.log(`- ${f.file}: ${f.error}`));
  }

  // Stats calculation
  const totalChars = documents.reduce((sum, doc) => sum + doc.content.length, 0);
  const avgChars = documents.length > 0 ? Math.round(totalChars / documents.length) : 0;
  
  const categoryBreakdown: Record<string, number> = {};
  documents.forEach((doc) => {
    categoryBreakdown[doc.pageType] = (categoryBreakdown[doc.pageType] || 0) + 1;
  });

  console.log("\n==================================================");
  console.log("             CONTENT STATISTICS");
  console.log("==================================================");
  console.log(`Total generated documents in database: ${documents.length}`);
  console.log(`Total content size: ${totalChars} characters`);
  console.log(`Average document content length: ${avgChars} characters`);
  console.log("\nCategory Breakdown:");
  Object.entries(categoryBreakdown).forEach(([cat, count]) => {
    console.log(`- ${cat}: ${count} documents`);
  });
  console.log("==================================================\n");
}

buildKnowledgeBase();
