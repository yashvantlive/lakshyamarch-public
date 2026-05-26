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
}

export default function ArticleSchema({ 
  title, 
  description, 
  url, 
  imageUrl = "https://lakshyamarch.com/og-image.jpg", 
  datePublished, 
  dateModified, 
  authorName 
}: ArticleSchemaProps) {
  const articleData = {
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
      "name": authorName
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": INSTITUTE.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://lakshyamarch.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
}
