"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navLinks, companyInfo } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-ink/95 backdrop-blur-xl border-b border-white/8 shadow-[0_2px_30px_rgba(0,0,0,0.4)]"
          : "bg-brand-ink/80 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="h-9 w-9 rounded-tag bg-brand-blue grid place-items-center text-white font-display font-bold text-sm transition-all group-hover:shadow-glow-sm group-hover:scale-105">
            M
          </div>
          <span className="font-display font-bold text-lg text-white">
            Mech-E-<span className="gradient-text">Tron</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-tag transition-all relative ${
                  active
                    ? "text-brand-nav bg-brand-nav/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-nav rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={`https://wa.me/${companyInfo.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20Mech-E-Tron%20courses`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark text-xs px-4 py-2 border-white/10"
          >
            💬 WhatsApp
          </a>
          <Link href="/contact" className="btn-primary text-sm">
            Book a Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-tag hover:bg-white/8 transition text-white"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current rounded transition-all origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 bg-current rounded transition-all ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 bg-current rounded transition-all origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-brand-ink/98 backdrop-blur-xl border-t border-white/5 transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x py-4 flex flex-col gap-1">
          {navLinks.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`py-3 px-4 rounded-tag font-medium transition-all ${
                  active
                    ? "text-brand-nav bg-brand-nav/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <div className="flex gap-3 mt-4 pt-4 border-t border-white/8">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-1 text-sm justify-center"
            >
              💬 WhatsApp
            </a>
            <Link href="/contact" className="btn-primary flex-1 text-sm justify-center">
              Book a Demo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
