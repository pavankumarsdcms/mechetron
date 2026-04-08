import Link from "next/link";
import { courses, services, projects, blogPosts } from "@/lib/data";

export const metadata = {
  title: "Sitemap — Mech-E-Tron",
  description: "A full directory of all pages on the Mech-E-Tron website.",
};

function SitemapGroup({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-brand-dark mb-4 border-b border-black/5 pb-2">
        {title}
      </h2>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-brand-ink/75 hover:text-brand-dark transition flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  return (
    <>
      <section className="relative bg-brand-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative container-x py-16 max-w-3xl">
          <div className="badge-dark">Site Directory</div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-bold">Sitemap</h1>
          <p className="mt-4 text-white/60">All pages on the Mech-E-Tron website.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <SitemapGroup
              title="Main Pages"
              links={[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/schools", label: "For Schools" },
                { href: "/gallery", label: "Student Gallery" },
                { href: "/testimonials", label: "Testimonials" },
              ]}
            />

            <SitemapGroup
              title="Courses"
              links={[
                { href: "/courses", label: "All Courses" },
                ...courses.map((c) => ({
                  href: `/courses/${c.slug}`,
                  label: c.title,
                })),
              ]}
            />

            <SitemapGroup
              title="Engineering Projects"
              links={[
                { href: "/projects", label: "All Projects" },
                ...projects.map((p) => ({
                  href: `/projects/${p.slug}`,
                  label: p.title,
                })),
              ]}
            />

            <SitemapGroup
              title="Services"
              links={[
                { href: "/services", label: "All Services" },
                ...services.map((s) => ({
                  href: `/services/${s.slug}`,
                  label: s.title,
                })),
              ]}
            />

            <SitemapGroup
              title="Blog & Resources"
              links={[
                { href: "/blog", label: "Blog Listing" },
                ...blogPosts.map((b) => ({
                  href: `/blog/${b.slug}`,
                  label: b.title,
                })),
              ]}
            />

            <SitemapGroup
              title="Legal & Utility"
              links={[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms & Conditions" },
                { href: "/sitemap-page", label: "HTML Sitemap" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
