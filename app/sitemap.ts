import { MetadataRoute } from "next";
import { courses, services, projects, blogPosts } from "@/lib/data";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mechetron.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE,                   lastModified: new Date(), priority: 1.0,  changeFrequency: "daily"   as const },
    { url: `${BASE}/about`,        lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" as const },
    { url: `${BASE}/courses`,      lastModified: new Date(), priority: 0.9,  changeFrequency: "weekly"  as const },
    { url: `${BASE}/summer-camp`,  lastModified: new Date(), priority: 0.9,  changeFrequency: "weekly"  as const },
    { url: `${BASE}/services`,     lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" as const },
    { url: `${BASE}/projects`,     lastModified: new Date(), priority: 0.8,  changeFrequency: "monthly" as const },
    { url: `${BASE}/schools`,      lastModified: new Date(), priority: 0.9,  changeFrequency: "monthly" as const },
    { url: `${BASE}/gallery`,      lastModified: new Date(), priority: 0.6,  changeFrequency: "weekly"  as const },
    { url: `${BASE}/testimonials`, lastModified: new Date(), priority: 0.6,  changeFrequency: "monthly" as const },
    { url: `${BASE}/blog`,         lastModified: new Date(), priority: 0.7,  changeFrequency: "weekly"  as const },
    { url: `${BASE}/contact`,      lastModified: new Date(), priority: 0.9,  changeFrequency: "yearly"  as const },
    { url: `${BASE}/privacy`,      lastModified: new Date(), priority: 0.2,  changeFrequency: "yearly"  as const },
    { url: `${BASE}/terms`,        lastModified: new Date(), priority: 0.2,  changeFrequency: "yearly"  as const },
    { url: `${BASE}/products/arduino-uno-learning-board`, lastModified: new Date(), priority: 0.85, changeFrequency: "monthly" as const },
  ];

  const courseRoutes = courses.map((c) => ({
    url: `${BASE}/courses/${c.slug}`,
    lastModified: new Date(),
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: new Date(),
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: new Date(),
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  const blogRoutes = blogPosts.map((b) => ({
    url: `${BASE}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    priority: 0.65,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticRoutes,
    ...courseRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}
