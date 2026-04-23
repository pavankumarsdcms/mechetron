"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import TrustStrip from "@/components/TrustStrip";
import CTABanner from "@/components/CTABanner";
import { galleryItems } from "@/lib/data";
import Image from "next/image";

const categories = ["All", "Arduino", "Robotics", "Drones", "IoT", "3D Printing"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <main>
      <PageHero
        title="Student Innovation Gallery"
        subtitle="Witness the creativity of our young engineers through robots, drones, and connected devices built at Mech-E-Tron."
        badge="Hall of Fame"
      />

      <TrustStrip />

      <Section className="bg-brand-surface">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-pill font-bold transition-all duration-300 text-sm ${
                activeFilter === cat 
                  ? "bg-brand-blue text-white shadow-glow-sm scale-110" 
                  : "bg-white text-brand-muted hover:text-brand-blue border border-brand-blue/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
          {filteredItems.map((item, i) => (
            <div key={`${activeFilter}-${i}`} className="group relative rounded-card overflow-hidden border border-brand-blue/10 shadow-card hover:shadow-glow-sm transition-all duration-500 animate-fade-in">
               <div className="aspect-[3/4] relative">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs uppercase tracking-widest text-brand-blue font-bold mb-1">{item.category}</div>
                  <h3 className="text-lg font-display font-bold leading-tight mb-1">{item.title}</h3>
                  <p className="text-xs text-white/50">By {item.student}</p>
               </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner 
        title="Want to see your project here?"
        subtitle="Join our next cohort, build something amazing, and show it off to the world."
        cta1={{ label: "View Courses", href: "/courses" }}
        cta2={{ label: "Book a Demo", href: "/contact" }}
      />
    </main>
  );
}
