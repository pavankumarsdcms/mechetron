"use client";
import { useState } from "react";
import { blogPosts } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${parseInt(d)} ${MONTHS[parseInt(m) - 1]} ${y}`;
}

const categories = ["All", "STEM Education", "Arduino", "Robotics", "Projects"];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts = activeFilter === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <main>
      <PageHero
        title="Mech-E-Tron Blog"
        subtitle="Insights, guides, and updates from the world of robotics and STEM."
        badge="Knowledge Hub"
      />

      <Section className="bg-brand-surface">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-pill font-bold transition-all duration-300 text-sm ${
                activeFilter === cat 
                  ? "bg-brand-blue text-white shadow-glow-sm" 
                  : "bg-white text-brand-muted hover:text-brand-blue border border-brand-blue/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-card overflow-hidden border border-brand-blue/5 hover:border-brand-blue/20 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
            >
              <div className="aspect-video relative overflow-hidden">
                 <Image
                    src={post.image}
                    alt={`${post.title} — Mech-E-Tron Blog`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
                 <div className="absolute top-3 left-3">
                    <span className="badge-dark">{post.category}</span>
                 </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-brand-muted mb-2">{formatDate(post.date)}</div>
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
