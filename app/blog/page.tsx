import { blogPosts } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Mech-E-Tron Blog | Robotics & STEM Insights",
  description: "Read the latest about robotics competitions, STEM education, and engineering project tips from the experts at Mech-E-Tron.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        title="Mech-E-Tron Blog"
        subtitle="Insights, guides, and updates from the world of robotics and STEM."
        badge="Knowledge Hub"
      />

      <Section className="bg-brand-surface">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-card overflow-hidden border border-brand-blue/5 hover:border-brand-blue/20 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                 <img 
                    src={`/images/robotics-lab.webp`}
                    alt={post.title} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                 />
                 <div className="absolute top-3 left-3">
                    <span className="badge-dark">{post.category}</span>
                 </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-brand-muted mb-2">{new Date(post.date).toLocaleDateString()}</div>
                <h3 className="text-xl font-display font-bold text-brand-ink mb-3 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-brand-body leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="text-brand-blue font-bold text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner 
        title="Subscribe to our Newsletter"
        subtitle="Get STEM guides and robotics competition updates delivered to your inbox."
        cta1={{ label: "Subscribe", href: "#subscribe" }}
        cta2={{ label: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
