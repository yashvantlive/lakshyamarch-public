/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  LAKSHYAMARCH (LM) EDUCATION — COMPLETE DATA             ║
 * ║  Single Source of Truth for Coaching & School            ║
 * ╚══════════════════════════════════════════════════════════╝
 */

export const INSTITUTE = {
  name: "LakshyaMarch Education",
  shortName: "LM",
  headerName: "LM Lakshyamarch",
  tagline: "A Revolution in Education is Taking Shape in Begusarai",
  tagline2: "March Ahead Towards Your लक्ष्य",
  established: 2019,
  integratedSchoolName: "LM Integrated School",
  address: {
    line1: "Dakbangla Road, Opp. Omar Girls High School",
    city: "Begusarai",
    state: "Bihar",
    pin: "851101",
    full: "Dakbangla Road, Opp. Omar Girls High School, Chanakya Nagar, Begusarai, Bihar – 851101",
  },
  phones: ["7296050207", "6206323869", "8603793869"],
  primaryPhone: "6206323869",
  email: "lakshyamarch@gmail.com",
  schoolEmail: "lmintegratedschoolbgs@gmail.com",
  whatsappNumber: "916206323869",
  whatsappMessage: "Hi, I am interested in LakshyaMarch (School/Coaching).",
  officeHours: "All Day, 8:00 AM – 7:00 PM",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.753070883985!2d86.14240007416193!3d25.41307492292524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f21bc6b8f5f8c9%3A0x59db1333945e8673!2sLM%20Coaching%20Institute%20-%20LakshyaMarch%20Begusarai%20%7C%20IIT-JEE%2C%20NEET-UG%20%7C%2011th%20%26%2012th%20Foundation%20Classes%20%7C%208th%2C%209th%20and%2010th!5e0!3m2!1sen!2sus!4v1775271323127!5m2!1sen!2sus",
  social: {
    coaching: {
      youtube: "https://youtube.com/@lakshyamarch",
      facebook: "https://facebook.com/lakshyamarch",
      instagram: "https://instagram.com/lakshyamarch",
      twitter: "https://x.com/LakshyaMarch",
    },
    school: {
      facebook: "https://facebook.com/lmintegratedschool",
      instagram: "https://instagram.com/lmintegratedschool",
    },
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Faculty", href: "/faculty" },
  { label: "Results", href: "/results" },
  { label: "Study Material", href: "/study-material" },
  { label: "Blog", href: "/blog" },
  { label: "Admission", href: "/admission" },
  { label: "YouTube", href: "/youtube" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOUNDER = {
  name: "Ram Kumar",
  nickname: "Ram Sir",
  image: "/images/founder/ram-sir.webp",
  designation: "Founder & Director",
  qualification: "B.Tech, IIT Kharagpur (1998–2002)",
  certification: "PMP from PMI, USA (2011)",
  message: "Our vision is to bring JEE & NEET-level coaching and disciplined schooling together under one roof in Begusarai, so students don't have to leave their home city for top-tier education.",
};

// ─── Programs & Batches ────────────────────────────────────
export const PROGRAMS = {
  school: {
    name: "School Preparation Courses",
    tagline: "Integrated Schooling for Excellence",
    description: "Begusarai's first integrated model combining CBSE/ICSE curriculum with IIT/NEET foundation. One fee, two benefits.",
    classes: ["6", "7", "8", "9", "10"],
    features: ["Integrated Coaching", "National Curriculum", "Daily DPPs", "Doubt Classes", "Mental Ability (MAT)", "Mental Health Support"],
    batches: [
      {
        id: "sch-6",
        name: "LakshyaMarch (Class 6)",
        target: "Class 6th CBSE/ICSE students",
        classes: ["6"],
        startDate: "02 Apr, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "sch-7",
        name: "LakshyaMarch (Class 7)",
        target: "Class 7th CBSE/ICSE students",
        classes: ["7"],
        startDate: "02 Apr, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "sch-8",
        name: "LakshyaMarch (Class 8)",
        target: "Class 8th CBSE/ICSE students",
        classes: ["8"],
        startDate: "02 Apr, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "sch-9",
        name: "LakshyaMarch (Class 9)",
        target: "Class 9th Board + Foundation",
        classes: ["9"],
        startDate: "02 Apr, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "sch-10",
        name: "LakshyaMarch (Class 10)",
        target: "Class 10th Board + Foundation",
        classes: ["10"],
        startDate: "02 Apr, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      }
    ]
  },
  coaching: {
    name: "Coaching & Competitive Wings",
    tagline: "Gateway to IITs & Medical Colleges",
    description: "Expert level mentorship for JEE (Main+Adv), NEET-UG and Olympiads by IIT/NIT alumni.",
    classes: ["7", "8", "9", "10", "10th NLQ", "11th JEE", "11th NEET", "12th JEE", "12th NEET", "Dropper JEE", "Dropper NEET"],
    courses: [
      { name: "IIT-JEE Main+Adv", target: "Engineering Aspirants" },
      { name: "NEET-UG Medical", target: "Medical Aspirants" },
      { name: "NTSE/Olympiads", target: "Foundation Students" },
      { name: "KVPY / Board Exams", target: "Academic Excellence" }
    ],
    batches: [
      {
        id: "fnd-7",
        name: "LakshyaMarch (Class 7)",
        target: "Target NTSE/Olympiads + Foundation",
        classes: ["7"],
        startDate: "02 Apr, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "fnd-8",
        name: "LakshyaMarch (Class 8)",
        target: "Target NTSE/Olympiads + Foundation",
        classes: ["8"],
        startDate: "02 Apr, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "fnd-9",
        name: "LakshyaMarch (Class 9)",
        target: "JEE/NEET Early Starter",
        classes: ["9"],
        startDate: "02 Apr, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "fnd-10",
        name: "LakshyaMarch (Class 10)",
        target: "JEE/NEET Strong Base",
        classes: ["10"],
        startDate: "02 Apr, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "nlq-10",
        name: "LakshyaMarch (Class 10 NLQ)",
        target: "NLQ Special Program",
        classes: ["10th NLQ"],
        startDate: "02 Apr, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "jee-11",
        name: "LakshyaMarch (Class 11)",
        target: "JEE Main+Adv Aspirants",
        classes: ["11th JEE"],
        startDate: "12 Mar, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "neet-11",
        name: "LakshyaMarch (Class 11)",
        target: "NEET-UG Medical Aspirants",
        classes: ["11th NEET"],
        startDate: "12 Mar, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "jee-12",
        name: "LakshyaMarch (Class 12)",
        target: "JEE Main+Adv Aspirants",
        classes: ["12th JEE"],
        startDate: "22 Mar, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "neet-12",
        name: "LakshyaMarch (Class 12)",
        target: "NEET-UG Medical Aspirants",
        classes: ["12th NEET"],
        startDate: "22 Mar, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "drop-jee",
        name: "LakshyaMarch (Droppers)",
        target: "JEE Target 2027",
        classes: ["Dropper JEE"],
        startDate: "20 May, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      },
      {
        id: "drop-neet",
        name: "LakshyaMarch (Droppers)",
        target: "NEET-UG Target 2027",
        classes: ["Dropper NEET"],
        startDate: "20 May, 2026",
        endDate: "31 Mar, 2027",
        price: null,
        originalPrice: null,
        discount: null,
        type: "OFFLINE"
      }
    ]
  }
};

// ─── Elite Faculty ─────────────────────────────────────────
export const FACULTY_COACHING = [
  {
    name: "Ram Kumar",
    subject: "Mathematics & Physics",
    role: "Founder & Director",
    image: "/images/founder/ram-sir.webp",
    qual: "B.Tech from IIT Kharagpur",
    prev: "7 years at LakshyaMarch",
    usp: "Empowering students with IIT Kharagpur academic rigor, deep conceptual clarity, and visionary mentorship.",
    linkedin: "https://www.linkedin.com/in/ram-kumar-54214814/",
    facebook: "",
    instagram: "",
    team: ["IIT-JEE", "NEET"],
  },
  {
    name: "Rajesh Nayan",
    subject: "Mathematics",
    role: "Senior Faculty",
    image: "/images/teachers/rajesh_nayan.webp",
    qual: "B.Tech NIT Allahabad (16 yrs exp)",
    prev: "ex-Bansal Classes Kota/Jaipur",
    usp: "Best mentorship, guidance and disciplinarian with caring attitude.",
    linkedin: "",
    facebook: "",
    team: ["IIT-JEE"],
  },
  {
    name: "Shiv Kumar",
    subject: "Chemistry",
    role: "Senior Faculty",
    image: "/images/teachers/shiv_kumar.webp",
    qual: "M.Sc Chemistry, IIT Dhanbad",
    prev: "ex-Biome Ranchi, Chem Academy Delhi",
    usp: "Passionate about Chemistry. Uses mind maps, mnemonics, visualization.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["IIT-JEE", "NEET"],
  },
  {
    name: "Chandan Kumar",
    subject: "Physics",
    role: "Senior Faculty",
    image: "/images/teachers/chandan_kumar.webp",
    qual: "B.Tech, NIT Agartala",
    prev: "3 years at LM",
    usp: "'Give me a chance, I'll make you fall in love with Physics.'",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["IIT-JEE", "NEET"],
  },
  {
    name: "Nitish Sharma",
    subject: "Biology",
    role: "Senior Faculty",
    image: "/images/teachers/nitish_sharma.webp",
    qual: "AIR-82 in GATE-XL, 5 years exp",
    prev: "3.5 years at LM",
    usp: "One of finest Biology faculty for NEET. Clear concepts & guidance for competitions.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["NEET"],
  },
  {
    name: "M.P.B Sir",
    subject: "Mathematics",
    role: "Senior Faculty",
    image: "/images/teachers/mpb_sir.webp",
    qual: "Madras University, Chennai",
    prev: "",
    usp: "Hard Work Meets Accountability: Elite Mentorship for High Achievers.",
    linkedin: "",
    facebook: "",
    team: ["IIT-JEE"],
  },
  {
    name: "Aditya Kumar",
    subject: "Chemistry",
    role: "Faculty",
    image: "/images/teachers/aditya_kumar.webp",
    qual: "B.Tech, NIT Patna",
    prev: "3.5 years exp",
    usp: "Fostering analytical thinking and breaking down complex chemical reactions.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["IIT-JEE", "NEET"],
  },
  {
    name: "L.K.P. Sir",
    subject: "Physics",
    role: "Faculty",
    image: "/images/teachers/lkp_sir.webp",
    qual: "B.Tech, M.I.T. Muzaffarpur",
    prev: "",
    usp: "Expert in making Physics intuitive. Inspiring students to think beyond formulas.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["IIT-JEE", "NEET"],
  },
  {
    name: "Rahul Kumar",
    subject: "Biology",
    role: "Faculty",
    image: "/images/teachers/rahul_kumar.webp",
    qual: "M.Sc Biotechnology, CUSB",
    prev: "4 years exp",
    usp: "Bringing biology to life with interactive teaching and deep conceptual clarity.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["NEET"],
  },
  {
    name: "Dipesh Kumar",
    subject: "Chemistry",
    role: "Faculty",
    image: "/images/teachers/dipesh.webp",
    qual: "M.Sc. Chemistry",
    prev: "",
    usp: "Deep understanding of chemical mechanisms. Makes learning interactive and fun.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["IIT-JEE", "NEET"],
  }
];

// ─── School Faculty ────────────────────────────────────────
export const FACULTY_SCHOOL = [
  {
    name: "Ram Kumar",
    subject: "Mathematics & Physics",
    role: "Founder & Director",
    image: "/images/founder/ram-sir.webp",
    qual: "B.Tech from IIT Kharagpur",
    prev: "7 years at LakshyaMarch",
    usp: "Empowering students with IIT Kharagpur academic rigor, deep conceptual clarity, and visionary mentorship.",
    linkedin: "https://www.linkedin.com/in/ram-kumar-54214814/",
    facebook: "",
    instagram: "",
    team: ["School"],
  },
  {
    name: "Dipesh Kumar",
    subject: "Chemistry",
    role: "Faculty",
    image: "/images/teachers/dipesh.webp",
    qual: "M.Sc. Chemistry",
    prev: "",
    usp: "Deep understanding of chemical mechanisms. Makes learning interactive and fun.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["School"],
  },
  {
    name: "L.K.P. Sir",
    subject: "Physics",
    role: "Faculty",
    image: "/images/teachers/lkp_sir.webp",
    qual: "B.Tech, M.I.T. Muzaffarpur",
    prev: "",
    usp: "Expert in making Physics intuitive. Inspiring students to think beyond formulas.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["School"],
  },
  {
    name: "Rahul Kumar",
    subject: "Biology",
    role: "Faculty",
    image: "/images/teachers/rahul_kumar.webp",
    qual: "M.Sc Biotechnology, CUSB",
    prev: "4 years exp",
    usp: "Bringing biology to life with interactive teaching and deep conceptual clarity.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["School"],
  },
  {
    name: "M.P.B Sir",
    subject: "Mathematics",
    role: "Senior Faculty",
    image: "/images/teachers/mpb_sir.webp",
    qual: "Madras University, Chennai",
    prev: "",
    usp: "Hard Work Meets Accountability: Elite Mentorship for High Achievers.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["School"],
  },
  {
    name: "Gautam Ishwar",
    subject: "Physics & Mathematics",
    role: "Faculty",
    image: "/images/teachers/gautam_ishwar.webp",
    qual: "B.Tech, BEU Patna",
    prev: "3 years exp",
    usp: "Bridging the gap between Physics and Math. Empowering young minds with strong foundations.",
    linkedin: "https://www.linkedin.com/in/gautamishwar007/",
    facebook: "",
    instagram: "",
    team: ["School"],
  },
  {
    name: "Yashvant Kumar",
    subject: "Computer Science",
    role: "Faculty",
    image: "/images/teachers/yashvant_kumar.webp",
    qual: "B.Tech Mechanical Engineering",
    prev: "",
    usp: "Bringing logic and algorithms to life. Expert in modern tech stack and problem solving.",
    linkedin: "https://www.linkedin.com/in/yashvantlive/",
    facebook: "",
    instagram: "",
    team: ["School"],
  },
  {
    name: "Ramayan Kumar",
    subject: "English",
    role: "Faculty",
    image: "/images/teachers/ramayan_kumar.webp",
    qual: "M.A. English",
    prev: "",
    usp: "Master of grammar and vocabulary. Enhancing communication skills effortlessly.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["School"],
  },
  {
    name: "Rajesh Kumar",
    subject: "Social Science",
    role: "Faculty",
    image: "/images/teachers/rajesh_sst.webp",
    qual: "B.A. History & B.Ed (CTE Bhagalpur)",
    prev: "",
    usp: "Connecting the past and present. Makes social studies engaging and memorable.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["School"],
  },
  {
    name: "Shashi Bhushan Singh",
    subject: "Hindi",
    role: "Faculty",
    image: "",
    qual: "BA Hindi Honours",
    prev: "",
    usp: "Instilling love for our mother tongue. Expert in literature and grammar.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["School"],
  },
  {
    name: "Manoj Kumar",
    subject: "Mathematics",
    role: "Faculty",
    image: "",
    qual: "M.Sc Mathematics",
    prev: "",
    usp: "Clear concepts, brilliant execution. Helping students excel in competitive exams.",
    linkedin: "",
    facebook: "",
    instagram: "",
    team: ["School"],
  }
];

// ─── Results Showcase (Moved to studentData.ts) ────────────
export * from "./studentData";


// ─── Highlights / USPs ──────────────────────────────────────
export const HIGHLIGHTS = [
  "AC Classrooms & Hostel facility",
  "Regular PTM & Doubt Solving sessions",
  "NMTC 2025 hosted at LM",
  "IIT/NEET selections every year since inception (2019)",
  "No local-level faculty — all IIT/NIT qualified",
  "Well-disciplined environment with No Compromise policy",
];

// ─── Standard Classes List ──────────────────────────────────
export const ALL_CLASSES = Array.from(new Set([
  ...PROGRAMS.school.classes,
  ...PROGRAMS.coaching.classes
])).sort((a, b) => {
  const isDropperA = a.toLowerCase().includes("dropper");
  const isDropperB = b.toLowerCase().includes("dropper");
  if (isDropperA && !isDropperB) return 1;
  if (!isDropperA && isDropperB) return -1;

  const numA = parseInt(a.replace(/\D/g, '')) || 0;
  const numB = parseInt(b.replace(/\D/g, '')) || 0;
  return numA - numB;
});


// ─── Footer Content (PW Style) ─────────────────────────────
export const FOOTER_CONTENT = {
  knowAbout: "LakshyaMarch (LM) Education is Bihar's premier educational ecosystem, established in 2019 with a vision to bring premier JEE & NEET results to Begusarai. We offer an integrated schooling model from Class 6 to 10 and high-end competitive coaching for IIT-JEE and NEET (Class 7 to 12 + Droppers), ensuring that students have access to top-tier academic resources without having to leave their hometown.",
  standOut: "We stand out because our faculty consists entirely of experienced IIT and NIT alumni who follow a 'No Compromise' policy on discipline and conceptual depth. Our unique integrated model provides students with built-in self-study hours and expert mentorship, significantly reducing the stress of separate school and coaching travels.",
  focusAreas: "Our key focus areas include building a strong foundation from Class 8, utilizing mind maps and visualization for complex concepts, and maintaining a rigorous test-series-driven assessment system. We aim to bridge the gap between local schooling and national competitive ranks, making excellence accessible to every deserving student in the region.",
  difference: "What makes us different is our commitment to quality over quantity. Unlike traditional centers, we emphasize personalized doubt-clearing sessions and a well-disciplined environment that fosters academic growth. Our 'One Fee, Two Benefits' integrated program is a pioneer in Begusarai, offering a complete, stress-free educational package under one roof."
};



// Helper
export const whatsappLink = (msg?: string) =>
  `https://wa.me/${INSTITUTE.whatsappNumber}?text=${encodeURIComponent(msg ?? INSTITUTE.whatsappMessage)}`;
