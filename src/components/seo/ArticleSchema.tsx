import React from 'react';
import { INSTITUTE } from '@/lib/siteData';

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  takeaways?: string[];
}

export default function ArticleSchema({ 
  title, 
  description, 
  url, 
  imageUrl = "https://lakshyamarch.com/og-image.jpg", 
  datePublished, 
  dateModified, 
  authorName,
  authorUrl,
  takeaways
}: ArticleSchemaProps) {
  const articleData: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": authorName,
      ...(authorUrl ? { "url": authorUrl } : {})
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": INSTITUTE.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://lakshyamarch.com/lm_logo.jpeg"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    ...(takeaways && takeaways.length > 0 ? { "abstract": takeaways.join(" ") } : {})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
}
