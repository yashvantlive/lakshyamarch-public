import { RESULTS_NEET, RESULTS_JEE, RESULTS_BOARD } from "./studentData";

export interface SuccessStory {
  id: string;
  slug: string;
  studentId: string | string[]; // Maps to RESULTS_NEET or RESULTS_JEE IDs (single or multiple for sibling duos)
  title: string;
  titleHindi: string;
  excerpt: string;
  excerptHindi: string;
  content: string; // HTML (English)
  contentHindi: string; // HTML (Hindi)
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

export interface StudentProfile {
  id: string;
  name: string;
  image: string;
  college: string | null;
  score: string | null;
  year: number;
  category: string;
}

// Helper to resolve student profiles from their IDs
export function resolveStudentProfiles(studentId: string | string[]): StudentProfile[] {
  const ids = Array.isArray(studentId) ? studentId : [studentId];
  const profiles: StudentProfile[] = [];
  
  for (const id of ids) {
    // 1. Search in NEET
    const neet = RESULTS_NEET.find(s => s.id === id);
    if (neet) {
      profiles.push({
        id: neet.id,
        name: neet.name,
        image: neet.image,
        college: neet.college,
        score: neet.score || neet.badge,
        year: neet.year,
        category: "NEET"
      });
      continue;
    }
    
    // 2. Search in JEE
    const jee = RESULTS_JEE.find(s => s.id === id);
    if (jee) {
      profiles.push({
        id: jee.id,
        name: jee.name,
        image: jee.image,
        college: jee.college,
        score: jee.stat || jee.badge,
        year: jee.year,
        category: "JEE"
      });
      continue;
    }

    // 3. Search in Board
    const allBoardArrays = Object.values(RESULTS_BOARD);
    let board: any = undefined;
    for (const arr of allBoardArrays) {
      if (Array.isArray(arr)) {
        board = arr.find((s: any) => s.id === id);
        if (board) break;
      }
    }

    if (board) {
      profiles.push({
        id: board.id,
        name: board.name,
        image: board.image,
        college: `${board.board} Board (${board.class}th)`,
        score: board.percentage,
        year: board.year,
        category: "Board"
      });
    }
  }
  
  return profiles;
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-001",
    slug: "aradhya-bharti-neet-air-499-journey",
    studentId: "neet-2025-001",
    title: "How Aradhya Bharti Secured AIR 499 in NEET 2025 from Begusarai",
    titleHindi: "बेगूसराय से आराध्या भारती ने NEET 2025 में AIR 499 कैसे प्राप्त किया",
    excerpt: "Discover the disciplined preparation strategy that helped Aradhya crack one of India's toughest medical entrance exams without leaving her hometown.",
    excerptHindi: "जानिए उस अनुशासित तैयारी की रणनीति के बारे में जिसने आराध्या को बिना अपना गृहनगर छोड़े भारत की सबसे कठिन चिकित्सा प्रवेश परीक्षाओं में से एक को पास करने में मदद की।",
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
      <p>Her journey is a testament to the fact that quality education is now accessible in Begusarai. Her AIR 499 rank is not just a number, it's a milestone for the entire region.</p>
    `,
    contentHindi: `
      <h2>एक सपने की शुरुआत</h2>
      <p>आराध्या भारती हमेशा से जानती थीं कि वह एक डॉक्टर बनना चाहती हैं। लेकिन बेगूसराय के कई छात्रों की तरह, उन्हें एक विकल्प का सामना करना पड़ा: अन्य शहरों के लिए निकलें या घर पर रहें। उन्होंने लक्ष्यमार्च को चुना, और उस फैसले ने पूरा अंतर पैदा कर दिया।</p>
      
      <blockquote>"लक्ष्यमार्च ने मुझे उसी स्तर का अनुशासन और अध्ययन सामग्री दी जो प्रमुख राष्ट्रीय संस्थानों में पाई जाती है, लेकिन मेरे घर के आराम और माता-पिता के समर्थन के साथ।" — आराध्या भारती</blockquote>
      
      <h3>तैयारी की रणनीति</h3>
      <p>आराध्या ने 14 घंटे के कड़े शेड्यूल का पालन किया। उन्होंने एनसीईआरटी के शब्द-दर-शब्द विश्लेषण पर भारी ध्यान केंद्रित किया। उनकी रणनीति में शामिल थे:</p>
      <ul>
        <li>लक्ष्यमार्च द्वारा प्रदान की जाने वाली दैनिक अभ्यास समस्याएं (DPPs)।</li>
        <li>गति और सटीकता बनाने के लिए साप्ताहिक मॉक टेस्ट।</li>
        <li>वरिष्ठ संकाय के साथ व्यक्तिगत शंका-निवारण सत्र।</li>
      </ul>
      
      <h3>स्थानीय स्तर पर राष्ट्रीय रैंक</h3>
      <p>उनकी यात्रा इस बात का प्रमाण है कि गुणवत्तापूर्ण शिक्षा अब बेगूसराय में भी सुलभ है। उनकी AIR 499 रैंक केवल एक संख्या नहीं है, यह पूरे क्षेत्र के लिए एक मील का पत्थर है।</p>
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
    studentId: "jee-2024-011",
    title: "Akhnavya's Double JEE Main Success: Path to NIT Trichy",
    titleHindi: "अखनव्या की दोहरी JEE Main सफलता: NIT त्रिची का मार्ग",
    excerpt: "Qualifying JEE Main twice is a rare achievement. Read how Akhnavya secured NIT Patna in 2023 and went on to claim NIT Trichy in 2024.",
    excerptHindi: "JEE Main को दो बार क्वालीफाई करना एक दुर्लभ उपलब्धि है। जानिए कैसे अखनव्या ने 2023 में NIT पटना और फिर 2024 में NIT त्रिची में अपना स्थान सुरक्षित किया।",
    content: `
      <h2>A Story of Double Success</h2>
      <p>Akhnavya's journey is truly exceptional. He qualified JEE Main twice: securing NIT Patna in 2023, and then going on to achieve 99.35 percentile to secure NIT Trichy in 2024.</p>
      
      <h3>The LakshyaMarch Advantage</h3>
      <p>The integrated schooling model allowed Akhnavya to save 4 hours of travel time every day, which he channeled into solving advanced-level mathematics problems and refining his rank.</p>
      
      <ul>
        <li><strong>2023 Achievement:</strong> JEE Main Qualified (NIT Patna)</li>
        <li><strong>2024 Achievement:</strong> 99.35 Percentile (NIT Trichy)</li>
        <li><strong>Mentorship:</strong> Directed under Ram Sir's core guidance</li>
      </ul>
    `,
    contentHindi: `
      <h2>दोहरी सफलता की एक कहानी</h2>
      <p>अखनव्या की यात्रा वास्तव में असाधारण है। उन्होंने दो बार JEE Main क्वालीफाई किया: 2023 में NIT पटना में प्रवेश सुनिश्चित किया, और फिर 2024 में 99.35 percentile प्राप्त करके NIT त्रिची में प्रवेश पाया।</p>
      
      <h3>लक्ष्यमार्च का लाभ</h3>
      <p>एकीकृत स्कूली शिक्षा मॉडल ने अखनव्या को हर दिन यात्रा के 4 घंटे बचाने की अनुमति दी, जिसे उन्होंने उन्नत स्तर की गणित की समस्याओं को हल करने और अपनी रैंक को सुधारने में लगाया।</p>
      
      <ul>
        <li><strong>2023 की उपलब्धि:</strong> JEE Main क्वालिफाइड (NIT पटना)</li>
        <li><strong>2024 की उपलब्धि:</strong> 99.35 पर्सेंटाइल (NIT त्रिची)</li>
        <li><strong>परामर्श:</strong> राम सर के मुख्य मार्गदर्शन के तहत निर्देशित</li>
      </ul>
    `,
    image: null,
    author: "LakshyaMarch Editorial",
    category: "JEE",
    year: 2024,
    seo: {
      title: "Akhnavya JEE Main Double Success Story | NIT Trichy | LakshyaMarch",
      description: "How Akhnavya qualified JEE Main twice, securing NIT Patna in 2023 and NIT Trichy in 2024 with 99.35 percentile under LakshyaMarch Begusarai mentorship.",
      focusKeyword: "JEE Main Success Story Begusarai",
    },
  },
  {
    id: "story-003",
    slug: "abhijeet-neet-685-marks-topper-story",
    studentId: "neet-2024-006",
    title: "Abhijeet's Historic 685/720 in NEET 2024: Bridging the Local-National Gap",
    titleHindi: "NEET 2024 में अभिजीत के ऐतिहासिक 685/720 अंक: स्थानीय-राष्ट्रीय अंतर को पाटना",
    excerpt: "Abhijeet proved that Begusarai can produce medical toppers at the national level. Read his full preparation journey here.",
    excerptHindi: "अभिजीत ने साबित कर दिया कि बेगूसराय भी राष्ट्रीय स्तर पर मेडिकल टॉपर्स तैयार कर सकता है। उनकी पूरी तैयारी की यात्रा यहाँ पढ़ें।",
    content: `
      <h2>Setting a New Benchmark</h2>
      <p>When Abhijeet scored 685 out of 720 in NEET 2024, it was headlines across Bihar. His journey at LakshyaMarch began in the 11th standard, where his raw potential was refined by IITian mentors.</p>
      
      <h3>Expert Mentorship</h3>
      <p>Under the guidance of Shiv Kumar Sir (IIT Dhanbad) and the Biology faculty, Abhijeet mastered the art of eliminating wrong options in NEET exams.</p>
    `,
    contentHindi: `
      <h2>एक नया बेंचमार्क स्थापित करना</h2>
      <p>जब अभिजीत ने NEET 2024 में 720 में से 685 अंक हासिल किए, तो यह पूरे बिहार में सुर्खियां बन गया। लक्ष्यमार्च में उनकी यात्रा 11वीं कक्षा से शुरू हुई, जहाँ उनकी प्रतिभा को आईआईटी के शिक्षकों ने निखारा।</p>
      
      <h3>विशेषज्ञ मेंटरशिप</h3>
      <p>शिव कुमार सर (IIT धनबाद) और बायोलॉजी फैकल्टी के मार्गदर्शन में, अभिजीत ने NEET परीक्षाओं में गलत विकल्पों को बाहर करने की कला में महारत हासिल की।</p>
    `,
    image: null,
    author: "LakshyaMarch Editorial",
    category: "NEET",
    year: 2024,
    seo: {
      title: "Abhijeet NEET 685 Marks Success Story | Topper 2024 | LakshyaMarch",
      description: "The inspiring story of Abhijeet who scored 685/720 in NEET 2024 from LakshyaMarch Begusarai. Verified preparation strategy inside.",
      focusKeyword: "Abhijeet NEET Topper Begusarai",
    },
  },
  {
    id: "story-004",
    slug: "achyut-jee-main-99-51-percentile-success",
    studentId: "jee-2026-015",
    title: "Achyut's Legendary Jump: From 79.27%ile to 99.51%ile in JEE Main 2026",
    titleHindi: "अच्युत की ऐतिहासिक छलांग: JEE Main 2026 में 79.27%ile से 99.51%ile तक",
    excerpt: "Cracking JEE is a journey of resilience. Read how Achyut transformed his Session 1 score of 79.27%ile to a stellar 99.51%ile in Session 2 through LakshyaMarch's expert mentorship.",
    excerptHindi: "JEE क्रैक करना दृढ़ संकल्प की यात्रा है। जानिए कैसे अच्युत ने लक्ष्यमार्च के विशेषज्ञ मार्गदर्शन में सेशन 1 के 79.27%ile को सेशन 2 में 99.51%ile में बदल दिया।",
    content: `
      <h2>The Turnaround: A Lesson in Resilience</h2>
      <p>Achyut's journey in JEE Main 2026 is one of the most inspiring stories of academic turnaround. In his first session, Achyut scored a total of <strong>79.27 percentile</strong>. Many students would lose hope, but with the support of LakshyaMarch's expert faculty and his own relentless efforts, Achyut achieved a phenomenal <strong>99.51 percentile</strong> in Session 2.</p>

      <h3>Session-Wise Comparison</h3>
      <p>His improvement across all subjects is a testament to the structured guidance at LakshyaMarch:</p>
      <table class="min-w-full border-collapse border border-ink-200 my-4 text-sm text-left">
        <thead>
          <tr class="bg-ink-100">
            <th class="border border-ink-200 px-4 py-2 font-bold text-ink-900">Subject</th>
            <th class="border border-ink-200 px-4 py-2 font-bold text-ink-900">Session 1</th>
            <th class="border border-ink-200 px-4 py-2 font-bold text-ink-900">Session 2 (Final)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-ink-200 px-4 py-2 font-semibold">Mathematics</td>
            <td class="border border-ink-200 px-4 py-2">44.46 %ile</td>
            <td class="border border-ink-200 px-4 py-2 font-bold text-brand-green-700">96.91 %ile</td>
          </tr>
          <tr class="bg-ink-50/50">
            <td class="border border-ink-200 px-4 py-2 font-semibold">Physics</td>
            <td class="border border-ink-200 px-4 py-2">85.85 %ile</td>
            <td class="border border-ink-200 px-4 py-2 font-bold text-brand-green-700">99.84 %ile</td>
          </tr>
          <tr>
            <td class="border border-ink-200 px-4 py-2 font-semibold">Chemistry</td>
            <td class="border border-ink-200 px-4 py-2">71.67 %ile</td>
            <td class="border border-ink-200 px-4 py-2 font-bold text-brand-green-700">99.73 %ile</td>
          </tr>
          <tr class="bg-ink-100 font-bold">
            <td class="border border-ink-200 px-4 py-2">Total Score</td>
            <td class="border border-ink-200 px-4 py-2 text-brand-red-600">79.27 %ile</td>
            <td class="border border-ink-200 px-4 py-2 text-brand-green-700">99.51 %ile</td>
          </tr>
        </tbody>
      </table>

      <h3>Guidance, Doubt Support & Mock Practice</h3>
      <p>The turning point for Achyut was the focused doubt support and guidance after Session 1. Mentored closely by Ram Sir (IIT Kharagpur alumnus), he targeted his weakest area—Mathematics—which saw a staggering jump from <strong>44.46%ile to 96.91%ile</strong>. Intensive mock testing, personal error analysis, and dedicated physics & chemistry mentorship helped him achieve a near-perfect <strong>99.84%ile in Physics</strong> and <strong>99.73%ile in Chemistry</strong>.</p>
    `,
    contentHindi: `
      <h2>बदलाव: दृढ़ संकल्प का एक सबक</h2>
      <p>JEE Main 2026 में अच्युत की यात्रा शैक्षणिक बदलाव की सबसे प्रेरक कहानियों में से एक है। अपने पहले सत्र में, अच्युत ने कुल <strong>79.27 percentile</strong> स्कोर किया। कई छात्र उम्मीद खो देते, लेकिन लक्ष्यमार्च के विशेषज्ञ शिक्षकों के समर्थन और उनके अपने अथक प्रयासों से, अच्युत ने सेशन 2 में <strong>99.51 percentile</strong> हासिल किया।</p>

      <h3>सत्र-वार तुलना</h3>
      <p>सभी विषयों में उनका सुधार लक्ष्यमार्च में व्यवस्थित मार्गदर्शन का प्रमाण है:</p>
      <table class="min-w-full border-collapse border border-ink-200 my-4 text-sm text-left">
        <thead>
          <tr class="bg-ink-100">
            <th class="border border-ink-200 px-4 py-2 font-bold text-ink-900">विषय</th>
            <th class="border border-ink-200 px-4 py-2 font-bold text-ink-900">सेशन 1</th>
            <th class="border border-ink-200 px-4 py-2 font-bold text-ink-900">सेशन 2 (अंतिम)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-ink-200 px-4 py-2 font-semibold">गणित (Mathematics)</td>
            <td class="border border-ink-200 px-4 py-2">44.46 %ile</td>
            <td class="border border-ink-200 px-4 py-2 font-bold text-brand-green-700">96.91 %ile</td>
          </tr>
          <tr class="bg-ink-50/50">
            <td class="border border-ink-200 px-4 py-2 font-semibold">भौतिकी (Physics)</td>
            <td class="border border-ink-200 px-4 py-2">85.85 %ile</td>
            <td class="border border-ink-200 px-4 py-2 font-bold text-brand-green-700">99.84 %ile</td>
          </tr>
          <tr>
            <td class="border border-ink-200 px-4 py-2 font-semibold">रसायन विज्ञान (Chemistry)</td>
            <td class="border border-ink-200 px-4 py-2">71.67 %ile</td>
            <td class="border border-ink-200 px-4 py-2 font-bold text-brand-green-700">99.73 %ile</td>
          </tr>
          <tr class="bg-ink-100 font-bold">
            <td class="border border-ink-200 px-4 py-2">कुल स्कोर (Total)</td>
            <td class="border border-ink-200 px-4 py-2 text-brand-red-600">79.27 %ile</td>
            <td class="border border-ink-200 px-4 py-2 text-brand-green-700">99.51 %ile</td>
          </tr>
        </tbody>
      </table>

      <h3>मार्गदर्शन, शंका समाधान और मॉक अभ्यास</h3>
      <p>अच्युत के लिए महत्वपूर्ण मोड़ सेशन 1 के बाद मिला ध्यान और डाउट सपोर्ट था। राम सर (IIT खड़गपुर के पूर्व छात्र) द्वारा बारीकी से निर्देशित होकर, उन्होंने अपने सबसे कमजोर क्षेत्र—गणित—को लक्षित किया, जिसमें <strong>44.46%ile से 96.91%ile</strong> का भारी उछाल देखा गया। सघन मॉक टेस्ट और भौतिकी एवं रसायन शास्त्र में निरंतर मार्गदर्शन ने उन्हें भौतिकी में <strong>99.84%ile</strong> और रसायन शास्त्र में <strong>99.73%ile</strong> का स्कोर दिलाया।</p>
    `,
    image: null,
    author: "LakshyaMarch Editorial",
    category: "JEE",
    year: 2026,
    seo: {
      title: "Achyut JEE Main Success Story | 79.27%ile to 99.51%ile | LakshyaMarch",
      description: "How Achyut made a historic jump from 79.27%ile in Session 1 to 99.51%ile in Session 2 of JEE Main 2026 under the mentorship of LakshyaMarch Begusarai.",
      focusKeyword: "Achyut JEE Success Story Begusarai",
    },
  },
  {
    id: "story-005",
    slug: "sister-duos-nurturing-medical-dreams-begusarai",
    studentId: ["neet-2024-007", "neet-2025-003"],
    title: "Double Triumph: The Inspiring Story of Sisters Pallavi & Puja Cracking NEET",
    titleHindi: "दोहरी सफलता: NEET क्रैक करने वाली दो बहनों पल्लवी और पूजा की प्रेरक कहानी",
    excerpt: "From the same household to the same medical college—ANMMCH Gaya. Read the remarkable journey of Pallavi and Puja Kumari, and how their legacy inspires more sibling duos at LakshyaMarch.",
    excerptHindi: "एक ही घर से एक ही मेडिकल कॉलेज—ANMMCH गया तक। पल्लवी और पूजा कुमारी की असाधारण यात्रा और लक्ष्यमार्च में भाई-बहनों की प्रेरणा के बारे में विस्तार से पढ़ें।",
    content: `
      <h2>Back-to-Back Medical Selections</h2>
      <p>At LakshyaMarch, academic success is becoming a family tradition. One of the most inspiring examples is of two sisters, <strong>Pallavi Kumari</strong> and <strong>Puja Kumari</strong>, who achieved back-to-back selections in the prestigious NEET-UG examination.</p>

      <p>Pallavi Kumari cracked NEET in 2024 with a score of <strong>665/720</strong>, securing admission to <strong>ANMMCH, Gaya</strong>. Following her sister's footsteps, Puja Kumari qualified in NEET 2025 with a score of <strong>538/720</strong>, securing admission to the very same college—<strong>ANMMCH, Gaya</strong>.</p>

      <blockquote>"Watching my elder sister Pallavi study night and day under LakshyaMarch's guidance gave me the roadmap. When she qualified, I knew that if I followed the same mentoring and put in the effort, I would make it too." — Puja Kumari</blockquote>

      <h3>How One Sister Inspired the Other</h3>
      <p>The journey of Pallavi and Puja is a masterclass in domestic inspiration. In 2023-24, Pallavi paved the path with strict self-discipline and regular practice under the supervision of senior faculty members Chandan Sir and Shiv Kumar Sir. Her selection motivated Puja, who saw that clearing NEET did not require going to distant hubs like Kota. By adopting the same routine, study material, and doubt clearing sessions at the Begusarai center, Puja matched her sister's feat the very next year.</p>

      <h3>The Sibling Legacy Continues</h3>
      <p>This double triumph has created a powerful wave of trust in Begusarai. Inspired by Pallavi and Puja's journey, multiple pairs of siblings and sisters are currently studying at LakshyaMarch, nurturing their medical and engineering dreams together. Parents appreciate that the safe, competitive, and highly disciplined local environment allows siblings to support each other without the pressure of migrating to distant coaching hubs.</p>
    `,
    contentHindi: `
      <h2>एक ही घर से लगातार दो मेडिकल चयन</h2>
      <p>लक्ष्यमार्च में, शैक्षणिक सफलता अब एक पारिवारिक परंपरा बनती जा रही है। इसका सबसे प्रेरक उदाहरण दो बहनों - <strong>पल्लवी कुमारी</strong> और <strong>पूजा कुमारी</strong> का है, जिन्होंने प्रतिष्ठित NEET-UG परीक्षा में लगातार दो वर्षों में सफलता हासिल की है।</p>

      <p>बड़ी बहन पल्लवी कुमारी ने NEET 2024 में <strong>720 में से 665 अंक</strong> हासिल किए और <strong>ANMMCH, गया</strong> में अपनी सीट पक्की की। अपनी बहन के पदचिह्नों पर चलते हुए, पूजा कुमारी ने NEET 2025 में <strong>720 में से 538 अंक</strong> प्राप्त किए और उसी कॉलेज—<strong>ANMMCH, गया</strong> में प्रवेश हासिल किया।</p>

      <blockquote>"अपनी बड़ी बहन पल्लवी को लक्ष्यमार्च के मार्गदर्शन में दिन-रात पढ़ते हुए देखना मेरे लिए एक स्पष्ट मार्गदर्शिका थी। जब उन्होंने सफलता पाई, तो मुझे विश्वास हो गया कि यदि मैं भी उसी अनुशासन और मार्गदर्शन का पालन करूँगी, तो मैं भी सफल हो जाऊँगी।" — पूजा कुमारी</blockquote>

      <h3>कैसे एक बहन बनी दूसरी की प्रेरणा</h3>
      <p>पल्लवी और पूजा की यात्रा घरेलू प्रेरणा की एक अनूठी मिसाल है। 2023-24 में, पल्लवी ने वरिष्ठ शिक्षकों के मार्गदर्शन में स्व-अनुशासन और नियमित मॉक प्रैक्टिस के माध्यम से राह बनाई। उनके चयन ने पूजा को प्रेरित किया, जिन्होंने देखा कि नीट पास करने के लिए कोटा या पटना जैसे दूर के शहरों में जाने की आवश्यकता नहीं है। बेगूसराय केंद्र में उसी दिनचर्या, अध्ययन सामग्री और व्यक्तिगत संदेह निवारण सत्रों को अपनाकर, पूजा ने अगले ही वर्ष अपनी बहन की सफलता को दोहराया।</p>

      <h3>भाई-बहनों की विरासत जारी है</h3>
      <p>इस दोहरी सफलता ने बेगूसराय के अभिभावकों में एक गहरा विश्वास पैदा किया है। पल्लवी और पूजा की इस यात्रा से प्रेरित होकर, वर्तमान में भाई-बहनों और बहनों की कई जोड़ियाँ लक्ष्यमार्च में एक साथ मेडिकल और इंजीनियरिंग के अपने सपनों को साकार करने के लिए पढ़ रही हैं। अभिभावकों को यह पसंद आ रहा है कि घर पर ही सुरक्षित, प्रतिस्पर्धी और अत्यधिक अनुशासित माहौल मिलने से उनके बच्चे कोटा या पटना जैसी जगहों पर जाए बिना एक-दूसरे के संबल बनकर उत्कृष्ट परिणाम दे रहे हैं।</p>
    `,
    image: null,
    author: "LakshyaMarch Editorial",
    category: "NEET",
    year: 2025,
    seo: {
      title: "Sisters Pallavi & Puja NEET Success Story | Sibling Duos | LakshyaMarch",
      description: "Read the inspiring sibling success story of sisters Pallavi and Puja Kumari cracking NEET back-to-back (2024 & 2025) to join ANMMCH Gaya from LakshyaMarch Begusarai.",
      focusKeyword: "NEET Sibling Success Story Begusarai",
    },
  },
];
