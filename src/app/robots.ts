import type { MetadataRoute } from "next";
import { SITE } from "../data/site";

const BASE = SITE.siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
