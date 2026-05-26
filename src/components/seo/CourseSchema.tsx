import React from 'react';
import { INSTITUTE } from '@/lib/siteData';

interface CourseSchemaProps {
  courseName: string;
  description: string;
  providerName?: string;
  courseUrl: string;
}

export default function CourseSchema({ courseName, description, providerName = INSTITUTE.name, courseUrl }: CourseSchemaProps) {
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseName,
    "description": description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": providerName,
      "sameAs": "https://lakshyamarch.com"
    },
    "url": courseUrl,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Onsite",
      "location": {
        "@type": "Place",
        "name": INSTITUTE.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": INSTITUTE.address.line1,
          "addressLocality": INSTITUTE.address.city,
          "addressRegion": INSTITUTE.address.state,
          "postalCode": INSTITUTE.address.pin,
          "addressCountry": "IN"
        }
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }}
    />
  );
}
