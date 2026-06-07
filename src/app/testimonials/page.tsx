import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";
import { INSTITUTE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Student Reviews & Testimonials | LakshyaMarch Begusarai",
  description:
    "Read real success stories and reviews from students of LakshyaMarch Education Begusarai. See why we are the highest-rated coaching for JEE and NEET.",
  keywords: [
    "LakshyaMarch reviews",
    "coaching testimonials Begusarai",
    "student feedback LakshyaMarch",
    "best JEE coaching reviews",
    "NEET result testimonials Bihar",
  ],
  alternates: { canonical: "/testimonials" },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": INSTITUTE.name,
  "url": "https://lakshyamarch.com",
  "logo": "https://lakshyamarch.com/lm_logo.jpeg",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "128"
  }
};

const GOOGLE_REVIEWS = [
  {
    _id: "g1",
    name: "Aditya Singh",
    content: "Yahan 8th, 9th, 10th foundation class bhi hoti hai jo students ko early stage se taiyaar karti hai. Begusarai mein itni quality education kam jagah milti hai. Begusarai ke students ko zaroor LakshyaMarch join karna chahiye.",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g2",
    name: "Tutu",
    content: "LakshyaMarch Begusarai ka sabse trusted IIT JEE aur NEET UG coaching center hai. Yahan ke faculty members highly experienced hain aur Begusarai se bahar ke hain, jo ek alag professional touch deta hai. Foundation classes for class 8, 9, 10 bhi bahut structured hain. Begusarai mein quality education ke liye LM ek milestone hai.",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g4",
    name: "Sudhanshu Ranjan",
    content: "I joined LakshyaMarch Education, Begusarai for NEET preparation and my experience has been really good. Teachers are supportive, classes are regular, and doubts are cleared properly. The study environment is serious and motivating for students preparing for IIT-JEE & NEET.\n\nOne thing I liked most is that they focus on every student personally and conduct regular tests which helps a lot in preparation. If anyone is looking for a good NEET or IIT-JEE coaching in Begusarai, especially near Chanakya Nagar, LakshyaMarch is definitely a good option.",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g3",
    name: "Samit Kumar",
    content: "Lakshay march coaching is a super coaching for IIT and nit I am very vary greatful for mr Ram Kumar sir for starting revolution in filed of education",
    rating: 4,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g5",
    name: "jugnu Singh",
    content: "Producing result from average students is quite challenging..but LM has shown if you are determined enough, then in LM environment it is possible you will get very good results...come and see yourself. They also have Boys and Girls hostel facilty.",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g6",
    name: "Raj Aryan",
    content: "The facility provided at City like Begusarai is admirable. Thanks to all who take this initiative where living cost is also too low. I believe this coaching system is going to produce some unbelievable results.",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g7",
    name: "Arvind Kumar",
    content: "Best institute in begusarai. Best faculties are provided here and had given result many a times in Jee and Neet.",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g8",
    name: "Aaditya Raj",
    content: "LM(LakshyaMarch) is the 1st Institute in Begusarai for JEE/NEET. It is the best institute and best faculty teacher in all subjects.",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g9",
    name: "Randhir Kumar",
    content: "Lakash march institute most famous institute all over the bihar.founder of. Lm er ram Kumar sir produce many doctors and engineer and also having well skilled person having much more tool and techniques how to makequlified engineer and doctors",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g10",
    name: "RAJ ARYAN",
    content: "I am an IITian and I took coaching from kota . I visited this coaching at begusarai for search of the best education available in my local areas so one has not to move to bigger city like kota and delhi to study for entrance test . LM Education covers all basis to prepare for IITJEE . Be it faculty or facility all are good . Completion of syllabus and doubt solving of students on time is the two main aspects pillars of IITJEE preparation .Lacking of Those two aspects of bihar based coaching leads to bad results in these examination .",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g11",
    name: "Jitendra Kumar",
    content: "Mile stone of education having potential of quilty.of education no other institutions not only in begusarai all over the Bihar . backbone of foundation any typeo of competition .I. Am greatfu to ram sir for this act .",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g12",
    name: "Rituraj Kumar",
    content: "LM, established in 2019, and is one of the rising institute in Begusarai/Bihar for IIT JEE/NEET preparation..and Foundation (8th to 10th)",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g13",
    name: "RAM JEEVAN KUMAR",
    content: "LM is the one of the most famous institute in bihar, having the high potential of education with quality, discipline and also produce a number of doctors engineer within five years.",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "g14",
    name: "shravan kumar",
    content: "Producing result from average students is quite challenging ....but lm has show if u are determined enough. Then in lm environment it is possible you will get very good results...come a d see yourself. The also have boys and girls hostel facilities.",
    rating: 5,
    studentClass: "Google Review",
    createdAt: new Date().toISOString(),
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <TestimonialsClient initialTestimonials={GOOGLE_REVIEWS} />
    </>
  );
}
