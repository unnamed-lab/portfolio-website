import meta from "@/lib/metadata";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: meta.title,
    short_name: meta.short_name,
    description: meta.desc,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: meta.theme,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
