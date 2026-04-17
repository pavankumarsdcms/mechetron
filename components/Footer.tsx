"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { companyInfo, courses, navLinks } from "@/lib/data";

export default function Footer() {
  const [locOpen, setLocOpen] = useState(false);

  return (
    <footer className="bg-brand-ink relative overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="glow-orb w-96 h-96 bg-brand-blue/10 -bottom-40 -left-20" />

      {/* Top divider with glow */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

      {/* Main footer */}
      <div className="relative container-x py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 mb-5 group">
            <div className="relative h-14 w-52 -ml-3">
              <Image
                src={companyInfo.logoFooter}
                alt={`${companyInfo.name} Logo`}
                fill
                sizes="208px"
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed">{companyInfo.tagline}</p>
          <p className="text-white/40 text-sm mt-3 leading-relaxed">
            Empowering future innovators through hands-on robotics &amp; STEM education at OTBI, Osmania University.
          </p>

          {/* Social */}
          <div className="flex gap-2 mt-6">
            {[
              { href: companyInfo.social.instagram, label: "Instagram", icon: "📷" },
              { href: companyInfo.social.youtube,   label: "YouTube",   icon: "▶️" },
              { href: companyInfo.social.twitter,   label: "Twitter/X", icon: "𝕏" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-tag border border-white/10 hover:border-brand-blue/40 hover:bg-brand-blue/10 grid place-items-center transition-all text-sm"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-display font-semibold mb-6 text-white text-sm uppercase tracking-wider">
            Courses
          </h4>
          <ul className="space-y-3 text-sm text-white/40">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="hover:text-brand-blue transition-colors">
                  {c.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/summer-camp" className="hover:text-brand-amber transition-colors font-bold text-brand-amber">
                Summer Camp 2026
              </Link>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-display font-semibold mb-6 text-white text-sm uppercase tracking-wider">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-white/40 mb-8">
            {navLinks.filter(l => !l.children && l.label !== "Home" && l.label !== "Contact us").map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-blue transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li><Link href="/schools" className="hover:text-brand-blue transition-colors">For Schools</Link></li>
            <li><Link href="/products/arduino-uno-learning-board" className="hover:text-brand-blue transition-colors">Shop Hardware</Link></li>
            <li><Link href="/blog" className="hover:text-brand-blue transition-colors">Blog</Link></li>
            <li className="pt-2">
              <span className="flex items-center gap-2 text-white/20">
                Certification
                <span className="text-[10px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded leading-none">Soon</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold mb-6 text-white text-sm uppercase tracking-wider">
            Get in Touch
          </h4>
          <div className="space-y-4 text-sm text-white/40">
            {/* Locations — accordion on mobile */}
            <div>
              <button
                onClick={() => setLocOpen((v) => !v)}
                className="flex items-center gap-2 w-full text-left md:cursor-default"
                aria-expanded={locOpen}
              >
                <span>📍</span>
                <span className="text-white/60 font-medium">Hyderabad · Chennai · Tirupati</span>
                <svg
                  width="12" height="8" viewBox="0 0 10 6" fill="none"
                  className={`ml-auto md:hidden transition-transform duration-200 ${locOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Expanded locations — always visible on md+, accordion on mobile */}
              <div className={`mt-2 pl-5 space-y-1 overflow-hidden transition-all duration-300 md:block ${locOpen ? "max-h-40" : "max-h-0 md:max-h-none"}`}>
                {companyInfo.locations.map((loc) => (
                  <p key={loc.city} className="text-white/25 text-xs leading-snug">
                    <span className="text-white/40 font-medium">{loc.city}</span> — {loc.address}
                  </p>
                ))}
              </div>
            </div>

            <p>
              📱{" "}
              <a href={`tel:${companyInfo.phone}`} className="hover:text-brand-blue transition-colors text-white/60 font-medium whitespace-nowrap">
                {companyInfo.phone}
              </a>
              <span className="mx-2 text-white/20">|</span>
              <a href={`tel:${companyInfo.phone2}`} className="hover:text-brand-blue transition-colors text-white/60 font-medium whitespace-nowrap">
                {companyInfo.phone2}
              </a>
            </p>
            <p>
              📧{" "}
              <a href={`mailto:${companyInfo.email}`} className="hover:text-brand-blue transition-colors text-white/60 font-medium">
                {companyInfo.email}
              </a>
            </p>
          </div>
          <Link href="/contact" className="btn-primary mt-8 text-sm inline-flex shadow-glow-sm w-full justify-center">
            Book a Demo
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5 py-8">
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <span>© {new Date().getFullYear()} Mech-E-Tron Robotics. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-white/50 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
