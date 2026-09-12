import type { MetadataRoute } from "next";
import { artworks } from "@/data/artworks";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const updatedAt = new Date();
  const routes = ["", "/gallery", "/commissions", "/about", "/contact"];

  return [
    ...routes.map((route) => ({
      url: new URL(route || "/", baseUrl).toString(),
      lastModified: updatedAt,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/commissions" ? 0.9 : 0.7,
    })),
    ...artworks.map((artwork) => ({
      url: new URL(`/gallery/${artwork.slug}`, baseUrl).toString(),
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: artwork.featured ? 0.8 : 0.6,
      images: [new URL(artwork.images[0].src, baseUrl).toString()],
    })),
  ];
}
