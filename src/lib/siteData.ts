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
export const FACULTY = [
  {
    name: "Rajesh Nayan",
    subject: "Mathematics",
    role: "Senior Faculty",
    image: "/images/teachers/rajesh_nayan.webp",
    qual: "B.Tech NIT Allahabad (16 yrs exp)",
    prev: "ex-Bansal Classes Kota/Jaipur",
    usp: "Best mentorship, guidance and disciplinarian with caring attitude.",
  },
  {
    name: "M.P.B Sir",
    subject: "Mathematics",
    role: "Senior Faculty",
    image: "/images/teachers/mpb_sir.webp",
    qual: "Madras University, Chennai",
    prev: "",
    usp: "Hard Work Meets Accountability: Elite Mentorship for High Achievers.",
  },
  {
    name: "L.K.P. Sir",
    subject: "Physics",
    role: "Senior Faculty",
    image: "/images/teachers/lkp_sir.webp",
    qual: "B.Tech, M.I.T. Muzaffarpur",
    prev: "",
    usp: "Hard Work Meets Accountability: Elite Mentorship for High Achievers.",
  },
  {
    name: "Shiv Kumar",
    subject: "Chemistry",
    role: "Senior Faculty",
    image: "",
    qual: "M.Sc Chemistry, IIT Dhanbad",
    prev: "ex-Biome Ranchi, Chem Academy Delhi",
    usp: "Passionate about Chemistry. Uses mind maps, mnemonics, visualization.",
  },
  {
    name: "Chandan Kumar",
    subject: "Physics",
    role: "Faculty",
    image: "",
    qual: "B.Tech, NIT Agartala",
    prev: "3 years at LM",
    usp: "'Give me a chance, I'll make you fall in love with Physics.'",
  },
  {
    name: "Aditya Kumar",
    subject: "Chemistry",
    role: "Faculty",
    image: "",
    qual: "B.Tech, NIT Patna",
    prev: "3.5 years exp",
    usp: "Passionate faculty. Here to guide, support, and inspire students.",
  },
  {
    name: "Nitish Sharma",
    subject: "Biology",
    role: "Faculty",
    image: "",
    qual: "AIR-82 in GATE-XL, 5 years exp",
    prev: "3.5 years at LM",
    usp: "One of finest Biology faculty for NEET. Clear concepts & guidance for competitions.",
  },
  {
    name: "Rahul Kumar",
    subject: "Biology",
    role: "Faculty",
    image: "",
    qual: "M.Sc Biotechnology, CUSB",
    prev: "4 years exp",
    usp: "Passionate faculty. Here to guide, support, and inspire students.",
  },
  {
    name: "Gautam Ishwar",
    subject: "Physics & Mathematics",
    role: "Junior Wing Faculty",
    image: "/images/teachers/gautam_ishwar.webp",
    qual: "B.Tech, BEU Patna",
    prev: "3 years exp",
    usp: "Passionate faculty. Here to guide, support, and inspire students.",
  },
];

// ─── Results Showcase ──────────────────────────────────────
export const RESULTS_NEET = [
  {
    id: "neet-2025-001",
    year: 2025,
    name: "Aradhya Bharti",
    score: "619/720",
    marks: 619,
    fullMarks: 720,
    air: 499,
    college: "ABVIMS, Delhi",
    image: "/images/students/coaching/neet/aradhya.webp",
    isTopper: true,
    badge: "AIR 499 · Topper 2025"
  },
  {
    id: "neet-2025-002",
    year: 2025,
    name: "Aditi Kumari",
    score: "577/720",
    marks: 577,
    fullMarks: 720,
    air: null,
    college: "GMC Korba, Chhatisgarh",
    image: "/images/students/coaching/neet/aditi.webp",
    isTopper: false,
    badge: null
  },
  {
    id: "neet-2025-003",
    year: 2025,
    name: "Puja Kumari",
    score: "538/720",
    marks: 538,
    fullMarks: 720,
    air: null,
    college: "ANMMCH, Gaya",
    image: "/images/students/coaching/neet/puja.webp",
    isTopper: false,
    badge: null
  },
  {
    id: "neet-2025-004",
    year: 2025,
    name: "Alok Kumar",
    score: "527/720",
    marks: 527,
    fullMarks: 720,
    air: null,
    college: "ZMC, Mizoram",
    image: "/images/students/coaching/neet/alok.webp",
    isTopper: false,
    badge: null
  },
  {
    id: "neet-2025-005",
    year: 2025,
    name: "Ranjita Ranjan",
    score: "461/720",
    marks: 461,
    fullMarks: 720,
    air: null,
    college: "NMCH, Patna",
    image: "/images/students/coaching/neet/ranjita.webp",
    isTopper: false,
    badge: null
  },
  {
    id: "neet-2024-001",
    year: 2024,
    name: "Abhijeet",
    score: "685/720",
    marks: 685,
    fullMarks: 720,
    air: null,
    college: "PMCH Patna",
    image: "/images/students/coaching/neet/abhijeet.webp",
    isTopper: true,
    badge: "LM Topper 2024"
  },
  {
    id: "neet-2024-002",
    year: 2024,
    name: "Pallavi Kumari",
    score: "665/720",
    marks: 665,
    fullMarks: 720,
    air: null,
    college: "ANMMCH, Gaya",
    image: "/images/students/coaching/neet/pallavi.webp",
    isTopper: false,
    badge: null
  },
  {
    id: "neet-2022-001",
    year: 2022,
    name: "Richa Singh",
    score: "633/720",
    marks: 633,
    fullMarks: 720,
    air: null,
    college: null,
    image: "/images/students/coaching/neet/richa_singh.webp",
    isTopper: true,
    badge: "LM Topper 2022"
  },
];

export const RESULTS_JEE = [
  {
    id: "jee-2026-001",
    year: 2026,
    name: "Achyut",
    percentile: 99.51,
    stat: "99.51%",
    examType: "JEE Main",
    rank: null,
    college: null,
    image: "/images/students/coaching/jee/achyut.webp",
    isTopper: true,
    badge: "99.51 Percentile"
  },
  {
    id: "jee-2026-002",
    year: 2026,
    name: "Keshav Raj",
    percentile: 98.96,
    stat: "98.96%",
    examType: "JEE Main",
    rank: null,
    college: null,
    image: "/images/students/coaching/jee/keshav.webp",
    isTopper: true,
    badge: "98.96 Percentile"
  },
  {
    id: "jee-2026-003",
    year: 2026,
    name: "Rishi Raj",
    percentile: 98.90,
    stat: "98.90%",
    examType: "JEE Main",
    rank: null,
    college: null,
    image: "/images/students/coaching/jee/rishi.webp",
    isTopper: true,
    badge: "98.90 Percentile"
  },
  {
    id: "jee-2026-004",
    year: 2026,
    name: "Abhishek Anand",
    percentile: 97.92,
    stat: "97.92%",
    examType: "JEE Main",
    rank: null,
    college: null,
    image: "/images/students/coaching/jee/abhishek.webp",
    isTopper: false,
    badge: "97.92 Percentile"
  },
  {
    id: "jee-2026-005",
    year: 2026,
    name: "Aman Raj",
    percentile: 95.98,
    stat: "95.98%",
    examType: "JEE Main",
    rank: null,
    college: null,
    image: "/images/students/coaching/jee/aman.webp",
    isTopper: false,
    badge: "95.98 Percentile"
  },
  {
    id: "jee-2026-006",
    year: 2026,
    name: "Pragya",
    percentile: 94.58,
    stat: "94.58%",
    examType: "JEE Main",
    rank: null,
    college: null,
    image: "/images/students/coaching/jee/pragya.webp",
    isTopper: false,
    badge: "94.58 Percentile"
  },
  {
    id: "jee-2026-007",
    year: 2026,
    name: "Aadarsh",
    percentile: 93.65,
    stat: "93.65%",
    examType: "JEE Main",
    rank: null,
    college: null,
    image: "/images/students/coaching/jee/aadarsh.webp",
    isTopper: false,
    badge: "93.65 Percentile"
  },
  {
    id: "jee-2025-001",
    year: 2025,
    name: "Akhnavya",
    percentile: 99.35,
    stat: "99.35%",
    examType: "JEE Main",
    rank: null,
    college: "NIT Trichy",
    image: "/images/students/coaching/jee/akhnavya.webp",
    isTopper: true,
    badge: "99.35 Percentile"
  },
  {
    id: "jee-2025-002",
    year: 2025,
    name: "Ayush Kumar",
    percentile: 99.24,
    stat: "99.24%",
    examType: "JEE Main",
    rank: null,
    college: "IIT Bhilai",
    image: "/images/students/coaching/jee/ayush_kumar.webp",
    isTopper: true,
    badge: "99.24 Percentile"
  },
  {
    id: "jee-2025-003",
    year: 2025,
    name: "Saransh Vrat",
    percentile: 99,
    stat: "99.00%",
    examType: "JEE Main",
    rank: null,
    college: "NIT Durgapur",
    image: "",
    isTopper: true,
    badge: "99.00 Percentile"
  },
  {
    id: "jee-2025-004",
    year: 2025,
    name: "Yatharth Mishra",
    percentile: 98.9,
    stat: "98.90%",
    examType: "JEE Main",
    rank: null,
    college: "IIT Roorkee",
    image: "/images/students/coaching/jee/yatharth_mishra.webp",
    isTopper: false,
    badge: null
  },
  {
    id: "jee-2025-005",
    year: 2025,
    name: "Gangesh Kumar",
    percentile: 98.7,
    stat: "98.70%",
    examType: "JEE Main",
    rank: null,
    college: "IIT Bhilai",
    image: "/images/students/coaching/jee/gangesh_kumar.webp",
    isTopper: false,
    badge: null
  },
  {
    id: "jee-2025-006",
    year: 2025,
    name: "Kunal Kumar",
    percentile: 98.6,
    stat: "98.60%",
    examType: "JEE Main",
    rank: null,
    college: "NIT Jalandhar",
    image: "",
    isTopper: false,
    badge: null
  },
  {
    id: "jee-2025-007",
    year: 2025,
    name: "Madhav Kumar",
    percentile: 98.58,
    stat: "98.58%",
    examType: "JEE Main",
    rank: null,
    college: "NIT Silchar",
    image: "/images/students/coaching/jee/madhav_kumar.webp",
    isTopper: false,
    badge: null
  },
  {
    id: "jee-2025-008",
    year: 2025,
    name: "Abhay Kumar",
    percentile: 98.4,
    stat: "98.40%",
    examType: "JEE Main",
    rank: null,
    college: "IIT Hyderabad",
    image: "",
    isTopper: false,
    badge: null
  },
  {
    id: "jee-2025-009",
    year: 2025,
    name: "Ayush Shivam",
    percentile: 97.59,
    stat: "97.59%",
    examType: "JEE Main",
    rank: null,
    college: "VIT Chennai",
    image: "/images/students/coaching/jee/ayush_shivam.webp",
    isTopper: false,
    badge: null
  },
  {
    id: "jee-2025-010",
    year: 2025,
    name: "Mehul Anand",
    percentile: 95.16,
    stat: "95.16%",
    examType: "JEE Main",
    rank: null,
    college: null,
    image: "",
    isTopper: false,
    badge: null
  },
  {
    id: "jee-2025-011",
    year: 2025,
    name: "Jyoti Kumari",
    percentile: null,
    stat: "Rank 103",
    examType: "WB JEE",
    rank: "103 (General)",
    college: null,
    image: "",
    isTopper: false,
    badge: null
  },
  {
    id: "jee-2025-012",
    year: 2025,
    name: "Sarthak",
    percentile: null,
    stat: "Selected",
    examType: "JEE Main",
    rank: null,
    college: "IIIT Surat",
    image: "",
    isTopper: false,
    badge: null
  }
];

export const RESULTS_BOARD = {
  cbse12: [
    {
      id: "cbse12-2025-001",
      year: 2025,
      name: "Tannu Kumari",
      percentage: "92.20%",
      value: 92.2,
      class: 12,
      board: "CBSE",
      image: "",
      isTopper: true
    },
    {
      id: "cbse12-2025-002",
      year: 2025,
      name: "Pragya Kumari",
      percentage: "85.40%",
      value: 85.4,
      class: 12,
      board: "CBSE",
      image: "/images/students/coaching/boards/pragya_12th_cbse.webp",
      isTopper: false
    },
    {
      id: "cbse12-2025-003",
      year: 2025,
      name: "Aman Kumar",
      percentage: "84.00%",
      value: 84,
      class: 12,
      board: "CBSE",
      image: "",
      isTopper: false
    },
    {
      id: "cbse12-2025-004",
      year: 2025,
      name: "Nutan Kumari",
      percentage: "83.00%",
      value: 83,
      class: 12,
      board: "CBSE",
      image: "/images/students/coaching/boards/nutan.webp",
      isTopper: false
    }
  ],
  bseb12: [
    {
      id: "bseb12-2025-001",
      year: 2025,
      name: "Swarnim Roy",
      percentage: "87.80%",
      value: 87.8,
      class: 12,
      board: "BSEB",
      image: "",
      isTopper: false
    },
    {
      id: "bseb12-2025-002",
      year: 2025,
      name: "Astuti Kumari",
      percentage: "84.60%",
      value: 84.6,
      class: 12,
      board: "BSEB",
      image: "",
      isTopper: false
    },
    {
      id: "bseb12-2025-003",
      year: 2025,
      name: "Revati Raj",
      percentage: "84.00%",
      value: 84,
      class: 12,
      board: "BSEB",
      image: "",
      isTopper: false
    },
    {
      id: "bseb12-2025-004",
      year: 2025,
      name: "Anbhiti Kumari",
      percentage: "83.80%",
      value: 83.8,
      class: 12,
      board: "BSEB",
      image: "",
      isTopper: false
    }
  ],
  icse12: [],
  cbse10: [
    {
      id: "cbse10-2025-001",
      year: 2025,
      name: "Priyanshu Kumar",
      percentage: "98.00%",
      value: 98,
      class: 10,
      board: "CBSE",
      image: "",
      isTopper: true
    },
    {
      id: "cbse10-2025-002",
      year: 2025,
      name: "Ayush Kumar",
      percentage: "93.00%",
      value: 93,
      class: 10,
      board: "CBSE",
      image: "",
      isTopper: true
    },
    {
      id: "cbse10-2025-003",
      year: 2025,
      name: "Krish Kumar",
      percentage: "91.00%",
      value: 91,
      class: 10,
      board: "CBSE",
      image: "",
      isTopper: false
    },
    {
      id: "cbse10-2025-004",
      year: 2025,
      name: "Pragya Kumari",
      percentage: "85.40%",
      value: 85.4,
      class: 10,
      board: "CBSE",
      image: "",
      isTopper: false
    },
    {
      id: "cbse10-2025-005",
      year: 2025,
      name: "Abhimanyu Kumar",
      percentage: "83.00%",
      value: 83,
      class: 10,
      board: "CBSE",
      image: "",
      isTopper: false
    },
    {
      id: "cbse10-2025-006",
      year: 2025,
      name: "Ishu Kumar",
      percentage: "83.00%",
      value: 83,
      class: 10,
      board: "CBSE",
      image: "",
      isTopper: false
    }
  ],
  bseb10: [],
  icse10: [
    {
      id: "icse10-2025-001",
      year: 2025,
      name: "Arpit Bhardwaj",
      percentage: "96.80%",
      value: 96.8,
      class: 10,
      board: "ICSE",
      image: "",
      isTopper: true
    },
    {
      id: "icse10-2025-002",
      year: 2025,
      name: "Anjali Kumari",
      percentage: "92.00%",
      value: 92,
      class: 10,
      board: "ICSE",
      image: "",
      isTopper: true
    }
  ]
};

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
