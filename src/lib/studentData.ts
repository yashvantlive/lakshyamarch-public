// This file is generated dynamically from C:\Users\IT CARE\Downloads\student-lm

export interface NeetResult {
  id: string;
  year: number;
  name: string;
  score: string | null;
  marks: number | null;
  fullMarks: number;
  air: number | null;
  college: string | null;
  image: string;
  isTopper: boolean;
  badge: string | null;
}

export interface JeeResult {
  id: string;
  year: number;
  name: string;
  percentile: number | null;
  stat: string;
  examType: string;
  rank: string | null;
  college: string | null;
  image: string;
  isTopper: boolean;
  badge: string | null;
  jeeAdvanced?: string | null;
}

export interface BoardResult {
  id: string;
  year: number;
  name: string;
  percentage: string;
  value: number;
  class: number;
  board: string;
  image: string;
  isTopper: boolean;
}

export const RESULTS_NEET: NeetResult[] = [
  {
    "id": "neet-2025-001",
    "year": 2025,
    "name": "Aradhya Bharti",
    "score": "619/720",
    "marks": 619,
    "fullMarks": 720,
    "air": 499,
    "college": "ABVIMS, Delhi",
    "image": "/images/students/coaching/neet/aradhya.webp",
    "isTopper": true,
    "badge": "AIR 499 · Topper 2025"
  },
  {
    "id": "neet-2025-002",
    "year": 2025,
    "name": "Aditi Kumari",
    "score": "577/720",
    "marks": 577,
    "fullMarks": 720,
    "air": null,
    "college": "GMC Korba, Chhatisgarh",
    "image": "/images/students/coaching/neet/aditi.webp",
    "isTopper": false,
    "badge": null
  },
  {
    "id": "neet-2025-003",
    "year": 2025,
    "name": "Puja Kumari",
    "score": "538/720",
    "marks": 538,
    "fullMarks": 720,
    "air": null,
    "college": "ANMMCH, Gaya",
    "image": "/images/students/coaching/neet/puja.webp",
    "isTopper": false,
    "badge": null
  },
  {
    "id": "neet-2025-004",
    "year": 2025,
    "name": "Alok Kumar",
    "score": "527/720",
    "marks": 527,
    "fullMarks": 720,
    "air": null,
    "college": "ZMC, Mizoram",
    "image": "/images/students/coaching/neet/alok.webp",
    "isTopper": false,
    "badge": null
  },
  {
    "id": "neet-2025-009",
    "year": 2025,
    "name": "Ariba",
    "score": "509/720",
    "marks": 509,
    "fullMarks": 720,
    "air": null,
    "college": "GDCH, Nalanda (BDS)",
    "image": "/images/students/coaching/neet/ariba.webp",
    "isTopper": false,
    "badge": null
  },
  {
    "id": "neet-2025-005",
    "year": 2025,
    "name": "Ranjita Ranjan",
    "score": "461/720",
    "marks": 461,
    "fullMarks": 720,
    "air": null,
    "college": "NMCH, Patna",
    "image": "/images/students/coaching/neet/ranjita.webp",
    "isTopper": false,
    "badge": null
  },
  {
    "id": "neet-2025-010",
    "year": 2025,
    "name": "Nidhi",
    "score": null,
    "marks": null,
    "fullMarks": 720,
    "air": null,
    "college": "AIIMS Raipur (Nursing)",
    "image": "",
    "isTopper": false,
    "badge": null
  },
  {
    "id": "neet-2024-006",
    "year": 2024,
    "name": "Abhijeet",
    "score": "685/720",
    "marks": 685,
    "fullMarks": 720,
    "air": null,
    "college": "PMCH Patna",
    "image": "/images/students/coaching/neet/abhijeet.webp",
    "isTopper": true,
    "badge": "LM Topper 2024"
  },
  {
    "id": "neet-2024-007",
    "year": 2024,
    "name": "Pallavi Kumari",
    "score": "665/720",
    "marks": 665,
    "fullMarks": 720,
    "air": null,
    "college": "ANMMCH Gaya",
    "image": "/images/students/coaching/neet/pallavi.webp",
    "isTopper": false,
    "badge": null
  },
  {
    "id": "neet-2022-008",
    "year": 2022,
    "name": "Richa Singh",
    "score": "633/720",
    "marks": 633,
    "fullMarks": 720,
    "air": null,
    "college": "NMCH, Patna",
    "image": "/images/students/coaching/neet/richa_singh.webp",
    "isTopper": true,
    "badge": "LM Topper 2022"
  }
];

export const RESULTS_JEE: JeeResult[] = [
  {
    "id": "jee-2021-001",
    "year": 2021,
    "name": "Yatharth Mishra",
    "percentile": 98.9,
    "stat": "98.9%",
    "examType": "JEE Main",
    "rank": null,
    "college": "IIT Roorkee",
    "image": "/images/students/coaching/jee/yatharth_mishra.webp",
    "isTopper": true,
    "badge": "98.9 Percentile",
    "jeeAdvanced": "AIR 3479"
  },
  {
    "id": "jee-2021-002",
    "year": 2021,
    "name": "Gangesh Kumar",
    "percentile": 98.7,
    "stat": "98.7%",
    "examType": "JEE Main",
    "rank": null,
    "college": "IIT Bhilai",
    "image": "/images/students/coaching/jee/gangesh_kumar.webp",
    "isTopper": false,
    "badge": "98.7 Percentile",
    "jeeAdvanced": "AIR 15004 (EWS: 1968)"
  },
  {
    "id": "jee-2021-003",
    "year": 2021,
    "name": "Kunal Kumar",
    "percentile": 98.6,
    "stat": "98.6%",
    "examType": "JEE Main",
    "rank": null,
    "college": "NIT Jalandhar",
    "image": "",
    "isTopper": false,
    "badge": "98.6 Percentile",
    "jeeAdvanced": "AIR 15358 (OBC: 3287)"
  },
  {
    "id": "jee-2021-004",
    "year": 2021,
    "name": "Abhay Kumar",
    "percentile": 98.4,
    "stat": "98.4%",
    "examType": "JEE Main",
    "rank": null,
    "college": "IIT Hyderabad",
    "image": "",
    "isTopper": false,
    "badge": "98.4 Percentile",
    "jeeAdvanced": "AIR 20011 (OBC: 4588)"
  },
  {
    "id": "jee-2021-005",
    "year": 2021,
    "name": "Jyoti Kumari",
    "percentile": null,
    "stat": "103%",
    "examType": "WBJEE",
    "rank": "103 (General)",
    "college": null,
    "image": "",
    "isTopper": false,
    "badge": "103 Rank (WBJEE)",
    "jeeAdvanced": null
  }, {
    "id": "jee-2022-006",
    "year": 2022,
    "name": "Sarthak",
    "percentile": null,
    "stat": "Selected",
    "examType": "JEE Mains",
    "rank": null,
    "college": "IIIT Surat",
    "image": "",
    "isTopper": false,
    "badge": null,
    "jeeAdvanced": null
  },
  {
    "id": "jee-2022-007",
    "year": 2022,
    "name": "Amitabh Anand",
    "percentile": null,
    "stat": "Selected",
    "examType": "JEE Main",
    "rank": null,
    "college": "NIT Agartala",
    "image": "",
    "isTopper": false,
    "badge": null,
    "jeeAdvanced": null
  },
  {
    "id": "jee-2023-008",
    "year": 2023,
    "name": "Akhnavya",
    "percentile": 99.35,
    "stat": "99.35%",
    "examType": "JEE Main",
    "rank": null,
    "college": "NIT Patna",
    "image": "/images/students/coaching/jee/akhnavya.webp",
    "isTopper": true,
    "badge": "99.35 Percentile",
    "jeeAdvanced": null
  },
  {
    "id": "jee-2023-009",
    "year": 2023,
    "name": "Aayush Kumar",
    "percentile": 99.24,
    "stat": "99.24%",
    "examType": "JEE Main",
    "rank": null,
    "college": "IIT Bhilai",
    "image": "/images/students/coaching/jee/ayush_kumar.webp",
    "isTopper": false,
    "badge": "99.24 Percentile",
    "jeeAdvanced": null
  },
  {
    "id": "jee-2024-010",
    "year": 2024,
    "name": "Saransh Vrat",
    "percentile": 99.59,
    "stat": "99.59%",
    "examType": "JEE Main",
    "rank": null,
    "college": "NIT Durgapur",
    "image": "",
    "isTopper": true,
    "badge": "99.59 Percentile",
    "jeeAdvanced": null
  },
  {
    "id": "jee-2024-011",
    "year": 2024,
    "name": "Akhnavya",
    "percentile": 99.35,
    "stat": "99.35%",
    "examType": "JEE Main",
    "rank": null,
    "college": "NIT Trichy",
    "image": "/images/students/coaching/jee/akhnavya.webp",
    "isTopper": false,
    "badge": "99.35 Percentile",
    "jeeAdvanced": null
  },
  {
    "id": "jee-2024-012",
    "year": 2024,
    "name": "Madhav Kumar",
    "percentile": 98.58,
    "stat": "98.58%",
    "examType": "JEE Main",
    "rank": null,
    "college": "NIT Silchar",
    "image": "/images/students/coaching/jee/madhav_kumar.webp",
    "isTopper": false,
    "badge": "98.58 Percentile",
    "jeeAdvanced": null
  },
  {
    "id": "jee-2024-013",
    "year": 2024,
    "name": "Ayush Shivam",
    "percentile": 97.59,
    "stat": "97.59%",
    "examType": "JEE Main",
    "rank": null,
    "college": "VIT Chennai",
    "image": "/images/students/coaching/jee/ayush_shivam.webp",
    "isTopper": false,
    "badge": "97.59 Percentile",
    "jeeAdvanced": null
  },
  {
    "id": "jee-2024-014",
    "year": 2024,
    "name": "Mehul Anand",
    "percentile": 95.16,
    "stat": "95.16%",
    "examType": "JEE Main",
    "rank": null,
    "college": null,
    "image": "",
    "isTopper": false,
    "badge": "95.16 Percentile",
    "jeeAdvanced": null
  },
  {
    "id": "jee-2026-015",
    "year": 2026,
    "name": "Achyut",
    "percentile": 99.51,
    "stat": "99.51%",
    "examType": "JEE Main",
    "rank": null,
    "college": null,
    "image": "/images/students/coaching/jee/achyut.webp",
    "isTopper": true,
    "badge": "99.51 Percentile",
    "jeeAdvanced": null
  },
  {
    "id": "jee-2026-016",
    "year": 2026,
    "name": "Keshav Raj",
    "percentile": 98.96,
    "stat": "98.96%",
    "examType": "JEE Main",
    "rank": null,
    "college": null,
    "image": "/images/students/coaching/jee/keshav.webp",
    "isTopper": false,
    "badge": "98.96 Percentile",
    "jeeAdvanced": "AIR 10274 (OBC: 2485)"
  },
  {
    "id": "jee-2026-017",
    "year": 2026,
    "name": "Rishi Raj",
    "percentile": 98.9,
    "stat": "98.9%",
    "examType": "JEE Main",
    "rank": null,
    "college": null,
    "image": "/images/students/coaching/jee/rishi.webp",
    "isTopper": false,
    "badge": "98.9 Percentile",
    "jeeAdvanced": "AIR 11885 (EWS: 1550)"
  },
  {
    "id": "jee-2026-018",
    "year": 2026,
    "name": "Abhishek Anand",
    "percentile": 97.92,
    "stat": "97.92%",
    "examType": "JEE Main",
    "rank": null,
    "college": null,
    "image": "/images/students/coaching/jee/abhishek.webp",
    "isTopper": false,
    "badge": "97.92 Percentile",
    "jeeAdvanced": null
  },
  {
    "id": "jee-2026-019",
    "year": 2026,
    "name": "Aman Raj",
    "percentile": 95.98,
    "stat": "95.98%",
    "examType": "JEE Main",
    "rank": null,
    "college": null,
    "image": "/images/students/coaching/jee/aman.webp",
    "isTopper": false,
    "badge": "95.98 Percentile",
    "jeeAdvanced": null
  },
  {
    "id": "jee-2026-020",
    "year": 2026,
    "name": "nutan",
    "percentile": 94.77,
    "stat": "94.77%",
    "examType": "JEE Main",
    "rank": null,
    "college": null,
    "image": "/images/students/coaching/jee/nutan.webp",
    "isTopper": false,
    "badge": "94.77 Percentile",
    "jeeAdvanced": null
  },
  {
    "id": "jee-2026-021",
    "year": 2026,
    "name": "Pragya",
    "percentile": 94.58,
    "stat": "94.58%",
    "examType": "JEE Main",
    "rank": null,
    "college": null,
    "image": "/images/students/coaching/jee/pragya.webp",
    "isTopper": false,
    "badge": "94.58 Percentile",
    "jeeAdvanced": null
  },
  {
    "id": "jee-2026-022",
    "year": 2026,
    "name": "Aadarsh",
    "percentile": 93.65,
    "stat": "93.65%",
    "examType": "JEE Main",
    "rank": null,
    "college": null,
    "image": "/images/students/coaching/jee/aadarsh.webp",
    "isTopper": false,
    "badge": "93.65 Percentile",
    "jeeAdvanced": null
  }
];

export const RESULTS_BOARD: {
  cbse12: BoardResult[];
  bseb12: BoardResult[];
  icse12: BoardResult[];
  cbse10: BoardResult[];
  bseb10: BoardResult[];
  icse10: BoardResult[];
} = {
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
