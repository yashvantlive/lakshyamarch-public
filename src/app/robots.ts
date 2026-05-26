import { MetadataRoute } from "next";

const BASE_URL = "https://lakshyamarch.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/student", "/teacher", "/api", "/login", "/marketing/login"],
        crawlDelay: 2,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      }
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
