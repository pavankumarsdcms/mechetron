"use client";
import { useState } from "react";
import Link from "next/link";
import { testimonials } from "@/lib/data";

const categories = ["All", "Students", "Parents", "Schools"];

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTestimonial = (t: any) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Students") return ["Student", "Beginner", "B.Tech", "Engineering"].some(kw => t.role.includes(kw));
    if (activeFilter === "Parents") return t.role.includes("Parent");
    if (activeFilter === "Schools") return ["School", "Principal"].some(kw => t.role.includes(kw));
    return true;
  };

  const filteredItems = testimonials.filter(filterTestimonial);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-brand-ink text-white overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="relative container-x max-w-4xl text-center">
          <div className="badge-dark mb-4">Community Feedback</div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
            Loved by <span className="text-brand-blue">Students</span>,<br/>Trusted by <span className="text-brand-orange">Schools</span>
          </h1>
          <p className="mt-6 text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            See how Mech-E-Tron is transforming STEM education across India through the voices of those who know us best.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b border-black/5 sticky top-20 z-20">
        <div className="container-x flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-pill font-bold transition-all duration-300 text-sm ${
                activeFilter === cat 
                  ? "bg-brand-blue text-white shadow-glow-sm" 
                  : "bg-brand-surface text-brand-muted hover:text-brand-blue border border-brand-blue/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-brand-surface min-h-[600px]">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((t, i) => (
              <div 
                key={t.name} 
                className="card bg-white shadow-card hover:shadow-glow-sm transition-all duration-500 flex flex-col animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 text-brand-orange text-sm mb-6">
                  {"★".repeat(t.rating)}
                </div>
                <blockquote className="text-brand-body leading-relaxed flex-1 italic">
                  "{t.quote}"
                </blockquote>
                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-brand-blue/5">
                  <div className="h-12 w-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-display font-bold text-brand-ink leading-none mb-1">{t.name}</div>
                    <div className="text-xs text-brand-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-surface">
        <div className="container-x text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">Join the Mech-E-Tron family</h2>
          <p className="mt-4 text-brand-ink/70 max-w-md mx-auto">
            10,000+ students, 120+ schools — and your story could be next.
          </p>
          <Link href="/contact" className="btn-primary mt-6 inline-flex">
            Book a Free Demo →
          </Link>
        </div>
      </section>
    </main>
  );
}
