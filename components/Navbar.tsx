"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { navLinks, companyInfo } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname  = usePathname();
  const navRef    = useRef<HTMLElement>(null);
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close everything on route change */
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  /* close dropdown when clicking outside */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openDelay  = (label: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenDropdown(label);
  };
  const closeDelay = () => {
    timerRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_1px_12px_rgba(3,85,188,0.10)] border-b border-brand-blue/10"
            : "bg-white/96 backdrop-blur-lg border-b border-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between h-[68px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Mech-E-Tron — Home">
            <div className="relative h-12 w-44 -ml-4">
              <Image
                src={companyInfo.logoNavbar}
                alt="Mech-E-Tron Logo"
                fill
                sizes="176px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-0.5 text-sm" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              const isOpen   = openDropdown === link.label;

              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => openDelay(link.label)}
                    onMouseLeave={closeDelay}
                  >
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenDropdown(isOpen ? null : link.label); }
                        if (e.key === "Escape") setOpenDropdown(null);
                      }}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-lg font-medium transition-colors duration-150 ${
                        isActive
                          ? "text-brand-blue bg-brand-blue/5"
                          : "text-brand-ink/70 hover:text-brand-ink hover:bg-black/[0.04]"
                      }`}
                    >
                      {link.label}
                      <svg
                        width="10" height="6" viewBox="0 0 10 6" fill="none"
                        aria-hidden="true"
                        className={`transition-transform duration-200 mt-px ${isOpen ? "rotate-180 text-brand-blue" : "text-brand-ink/40"}`}
                      >
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Dropdown panel */}
                    <div
                      onMouseEnter={() => openDelay(link.label)}
                      onMouseLeave={closeDelay}
                      className={`absolute top-[calc(100%+8px)] left-0 z-50 transition-all duration-200 origin-top-left ${
                        isOpen
                          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-xl border border-black/[0.07] shadow-[0_8px_32px_rgba(3,85,188,0.14)] p-1.5 min-w-[240px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-brand-blue/5 transition-colors group"
                          >
                            <span className="text-xl leading-none w-7 text-center">{child.icon}</span>
                            <div className="min-w-0">
                              <div className={`font-medium text-sm leading-tight ${
                                pathname === child.href ? "text-brand-blue" : "text-brand-ink group-hover:text-brand-blue"
                              } transition-colors`}>
                                {child.label}
                              </div>
                              {child.desc && (
                                <div className="text-[11px] text-brand-muted mt-0.5">{child.desc}</div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-brand-blue bg-brand-blue/5"
                      : "text-brand-ink/70 hover:text-brand-ink hover:bg-black/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`tel:${companyInfo.phone}`}
              className="hidden xl:flex items-center gap-1.5 text-sm font-medium text-brand-ink/60 hover:text-brand-blue transition-colors px-3 py-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {companyInfo.phone}
            </a>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20Mech-E-Tron%20courses`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] px-4 py-2 rounded-lg transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.557 4.116 1.534 5.845L.062 23.438a.5.5 0 00.6.6l5.637-1.473A11.949 11.949 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.028-1.382l-.36-.214-3.732.975.998-3.636-.234-.373A9.818 9.818 0 0112 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.429-4.39 9.818-9.818 9.818z"/>
              </svg>
              WhatsApp
            </a>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2">
              Book a Demo
            </Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-black/[0.05] transition-colors"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-0.5 bg-brand-ink rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-0.5 bg-brand-ink rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-brand-ink rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-brand-ink/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[min(360px,92vw)] bg-white shadow-2xl transition-transform duration-300 flex flex-col ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* panel header */}
          <div className="flex items-center justify-between px-5 h-[68px] border-b border-black/[0.06] flex-shrink-0">
            <div className="relative h-8 w-32">
              <Image src={companyInfo.logoNavbar} alt="Mech-E-Tron" fill sizes="128px" className="object-contain object-left" />
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/[0.06] text-brand-ink transition-colors"
              aria-label="Close navigation menu"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* nav links */}
          <nav className="flex-1 overflow-y-auto py-3 px-3" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive   = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              const isExpanded = mobileExpanded === link.label;

              if (link.children) {
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                        isActive ? "text-brand-blue bg-brand-blue/5" : "text-brand-ink hover:bg-black/[0.04]"
                      }`}
                    >
                      {link.label}
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        aria-hidden="true"
                        className={`transition-transform duration-200 text-brand-muted ${isExpanded ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="ml-2 pl-4 border-l-2 border-brand-blue/15 py-1 space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                              pathname === child.href
                                ? "text-brand-blue bg-brand-blue/5 font-medium"
                                : "text-brand-ink/70 hover:text-brand-ink hover:bg-black/[0.04]"
                            }`}
                          >
                            <span className="text-base w-6 text-center leading-none">{child.icon}</span>
                            <div>
                              <div className="font-medium">{child.label}</div>
                              {child.desc && <div className="text-[11px] text-brand-muted">{child.desc}</div>}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-brand-blue bg-brand-blue/5"
                      : "text-brand-ink hover:bg-black/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* panel footer CTAs */}
          <div className="flex-shrink-0 p-4 border-t border-black/[0.06] space-y-2">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20Mech-E-Tron%20courses`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ebe5d] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.557 4.116 1.534 5.845L.062 23.438a.5.5 0 00.6.6l5.637-1.473A11.949 11.949 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.028-1.382l-.36-.214-3.732.975.998-3.636-.234-.373A9.818 9.818 0 0112 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.429-4.39 9.818-9.818 9.818z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center w-full py-3 rounded-lg btn-primary font-semibold text-sm"
            >
              Book a Free Demo
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center justify-center gap-1.5 w-full py-2.5 text-sm text-brand-muted hover:text-brand-blue transition-colors font-medium"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
