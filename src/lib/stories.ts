export interface SuccessStory {
  id: string;
  slug: string;
  studentId: string; // Maps to RESULTS_NEET or RESULTS_JEE IDs
  title: string;
  excerpt: string;
  content: string; // Markdown or HTML
  image: string | null;
  author: string;
  category: "NEET" | "JEE" | "Board";
  year: number;
  seo: {
    title: string;
    description: string;
    focusKeyword: string;
    ogImage?: string;
  };
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-001",
    slug: "aradhya-bharti-neet-air-499-journey",
    studentId: "neet-2025-001",
    title: "How Aradhya Bharti Secured AIR 499 in NEET 2025 from Begusarai",
    excerpt: "Discover the disciplined preparation strategy that helped Aradhya crack one of India's toughest medical entrance exams without leaving her hometown.",
    content: `
      <h2>The Beginning of a Dream</h2>
      <p>Aradhya Bharti always knew she wanted to be a doctor. But like many students in Begusarai, she faced a choice: leave for other cities or stay home. She chose LakshyaMarch, and that decision made all the difference.</p>
      
      <blockquote>"LakshyaMarch gave me the same level of discipline and material that is found in premier national institutes, but with the comfort of my home and parents' support." — Aradhya Bharti</blockquote>
      
      <h3>Preparation Strategy</h3>
      <p>Aradhya followed a rigorous 14-hour schedule. She focused heavily on NCERT word-by-word analysis. Her strategy included:</p>
      <ul>
        <li>Daily Practice Problems (DPPs) provided by LM.</li>
        <li>Weekly Mock Tests to build speed and accuracy.</li>
        <li>Personalized doubt-clearing sessions with Senior Faculty.</li>
      </ul>
      
      <h3>Rank Math Optimized Content</h3>
      <p>Her journey is a testament to the face that quality education is now accessible in Begusarai. Her AIR 499 rank is not just a number, it's a milestone for the entire region.</p>
    `,
    image: null,
    author: "LakshyaMarch Editorial",
    category: "NEET",
    year: 2025,
    seo: {
      title: "Aradhya Bharti NEET AIR 499 Journey | Success Story | LakshyaMarch",
      description: "Read how Aradhya Bharti from Begusarai secured All India Rank 499 in NEET 2025. Her preparation tips, strategy, and success story at LakshyaMarch.",
      focusKeyword: "NEET Success Story Aradhya Bharti",
    },
  },
  {
    id: "story-002",
    slug: "akhnavya-jee-99-percentile-math-strategy",
    studentId: "jee-2025-001",
    title: "Akhnavya's 99.35 Percentile in JEE Main: The Math Prodigy's Secrets",
    excerpt: "Success in JEE requires more than just hard work; it requires a surgical focus on concepts. Read Akhnavya's story of triumph.",
    content: `
      <h2>Mastering the Numbers</h2>
      <p>Akhnavya's journey to a 99.35 percentile in JEE Main is a story of consistent effort and mathematical precision. Being a student at LakshyaMarch, he utilized every resource to its fullest.</p>
      
      <h3>The LakshyaMarch Advantage</h3>
      <p>The integrated schooling model allowed Akhnavya to save 4 hours of travel time every day, which he channeled into solving advanced-level mathematics problems.</p>
      
      <ul>
        <li><strong>Focus Keyword:</strong> JEE Main Success Strategy</li>
        <li><strong>Exam:</strong> JEE Main 2025</li>
        <li><strong>Achievement:</strong> 99.35 Percentile</li>
      </ul>
    `,
    image: null,
    author: "Ram Sir",
    category: "JEE",
    year: 2025,
    seo: {
      title: "Akhnavya JEE Main 99.35 Percentile Story | LakshyaMarch Begusarai",
      description: "How Akhnavya achieved a massive 99.35 percentile in JEE Main 2025. Explore his mathematics-focused preparation strategy and tips.",
      focusKeyword: "JEE Main Success Story Begusarai",
    },
  },
  {
    id: "story-003",
    slug: "abhijeet-neet-685-marks-topper-story",
    studentId: "neet-2024-001",
    title: "Abhijeet's Historic 685/720 in NEET 2024: Bridging the Local-National Gap",
    excerpt: "Abhijeet proved that Begusarai can produce medical toppers at the national level. Read his full preparation journey here.",
    content: `
      <h2>Setting a New Benchmark</h2>
      <p>When Abhijeet scored 685 out of 720 in NEET 2024, it was headlines across Bihar. His journey at LakshyaMarch began in the 11th standard, where his raw potential was refined by IITian mentors.</p>
      
      <h3>Expert Mentorship</h3>
      <p>Under the guidance of Shiv Kumar Sir (IIT Dhanbad) and the Biology faculty, Abhijeet mastered the art of eliminating wrong options in NEET exams.</p>
    `,
    image: null,
    author: "Editorial Team",
    category: "NEET",
    year: 2024,
    seo: {
      title: "Abhijeet NEET 685 Marks Success Story | Topper 2024 | LakshyaMarch",
      description: "The inspiring story of Abhijeet who scored 685/720 in NEET 2024 from LakshyaMarch Begusarai. Verified preparation strategy inside.",
      focusKeyword: "Abhijeet NEET Topper Begusarai",
    },
  },
];
