export interface Block {
  english: string;
  hindi: string;
}

export interface District {
  english: string;
  hindi: string;
  blocks: Block[];
}

export const districtData: District[] = [
  {
    english: "Begusarai",
    hindi: "बेगूसराय",
    blocks: [
      { english: "Begusarai", hindi: "बेगूसराय" },
      { english: "Matihani", hindi: "मटिहानी" },
      { english: "Shamho Akha Kurha", hindi: "शाम्हो अकहा कुरहा" },
      { english: "Birpur", hindi: "बीरपुर" },
      { english: "Barauni", hindi: "बरौनी" },
      { english: "Teghra", hindi: "तेघड़ा" },
      { english: "Bhagwanpur", hindi: "भगवानपुर" },
      { english: "Mansoorchak", hindi: "मंसूरचक" },
      { english: "Bachhwara", hindi: "बछवाड़ा" },
      { english: "Cheria Bariarpur", hindi: "चेरिया बरियारपुर" },
      { english: "Chhaurahi", hindi: "छौड़ाही" },
      { english: "Khodabandpur", hindi: "खोदावंदपुर" },
      { english: "Balia", hindi: "बलिया" },
      { english: "Dandari", hindi: "दंडारी" },
      { english: "Sahebpur Kamal", hindi: "साहबपुर कमाल" },
      { english: "Bakhri", hindi: "बखरी" },
      { english: "Nawkothi", hindi: "नावकोठी" },
      { english: "Garhpura", hindi: "गढ़पुरा" },
    ],
  },
  {
    english: "Khagaria",
    hindi: "खगड़िया",
    blocks: [
      { english: "Khagaria", hindi: "खगड़िया" },
      { english: "Gogri", hindi: "गोगरी" },
      { english: "Alauli", hindi: "अलौली" },
      { english: "Chautham", hindi: "चौथम" },
      { english: "Mansi", hindi: "मानसी" },
      { english: "Beldaur", hindi: "बेलदौर" },
      { english: "Parbatta", hindi: "परबत्ता" },
    ],
  },
  {
    english: "Lakhisarai",
    hindi: "लखीसराय",
    blocks: [
      { english: "Lakhisarai / Sadar Lakhisarai", hindi: "सदर लखीसराय" },
      { english: "Barahiya", hindi: "बड़हिया" },
      { english: "Pipariya", hindi: "पिपरिया" },
      { english: "Halsi", hindi: "हलसी" },
      { english: "Channan", hindi: "चानन" },
      { english: "Ramgarh Chowk", hindi: "रामगढ़ चौक" },
      { english: "Surajgarha", hindi: "सूर्यगढ़ा" },
    ],
  },
  {
    english: "Samastipur",
    hindi: "समस्तीपुर",
    blocks: [
      { english: "Samastipur", hindi: "समस्तीपुर" },
      { english: "Dalsinghsarai", hindi: "दलसिंहसराय" },
      { english: "Rosera", hindi: "रोसड़ा" },
      { english: "Pusa", hindi: "पूसा" },
      { english: "Sarairanjan", hindi: "सरायरंजन" },
      { english: "Tajpur", hindi: "ताजपुर" },
      { english: "Patori", hindi: "पटोरी" },
      { english: "Hasanpur", hindi: "हसनपुर" },
      { english: "Bibhutpur", hindi: "विभूतिपुर" },
      { english: "Bithan", hindi: "बिथान" },
      { english: "Kalyanpur", hindi: "कल्याणपुर" },
      { english: "Warisnagar", hindi: "वारिसनगर" },
      { english: "Khanpur", hindi: "खानपुर" },
      { english: "Singhia", hindi: "सिंघिया" },
      { english: "Morwa", hindi: "मोरवा" },
      { english: "Vidyapatinagar", hindi: "विद्यापतिनगर" },
      { english: "Mohanpur", hindi: "मोहनपुर" },
      { english: "Shivajinagar", hindi: "शिवाजीनगर" },
      { english: "Shahpur Patori", hindi: "शाहपुर पटोरी" },
      { english: "Musrigharari", hindi: "मुसरीघरारी" },
    ],
  },
];
