import { INSTITUTE, FOUNDER } from "@/lib/siteData";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": INSTITUTE.name,
    "url": "https://lakshyamarch.com",
    "logo": "https://lakshyamarch.com/logo.png", // Placeholder, check for actual logo
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": `+91-${INSTITUTE.primaryPhone}`,
      "contactType": "admissions",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": INSTITUTE.address.line1,
      "addressLocality": INSTITUTE.address.city,
      "addressRegion": INSTITUTE.address.state,
      "postalCode": INSTITUTE.address.pin,
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": FOUNDER.name,
      "jobTitle": "Founder",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "IIT Kharagpur"
      }
    },
    "description": INSTITUTE.tagline,
    "sameAs": [
      "https://www.facebook.com/lakshyamarch",
      "https://www.instagram.com/lakshyamarch",
      "https://www.youtube.com/@lakshyamarch"
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": INSTITUTE.name,
    "image": "https://lakshyamarch.com/logo.png",
    "@id": "https://lakshyamarch.com",
    "url": "https://lakshyamarch.com",
    "telephone": `+91-${INSTITUTE.primaryPhone}`,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": INSTITUTE.address.line1,
      "addressLocality": INSTITUTE.address.city,
      "addressRegion": INSTITUTE.address.state,
      "postalCode": INSTITUTE.address.pin,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.4184, // Begusarai coordinates
      "longitude": 86.1272
    },
    "areaServed": [INSTITUTE.address.city, "Bihar"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "19:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.2",
      "reviewCount": "107",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationData, localBusinessData]) }}
    />
  );
}
