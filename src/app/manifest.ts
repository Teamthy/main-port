import type { MetadataRoute } from "next";
import { SITE } from "../data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} · AI red teaming and evaluation`,
    short_name: SITE.shortName,
    description: SITE.shortBio,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#000000",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
