"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { navLinks, companyInfo } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname  = usePathname();
  const navRef    = useRef<HTMLElement>(null);
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    timerRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <header
        suppressHydrationWarning
        className={`sticky top-0 z-50 w-full h-[70px] transition-all duration-300 flex items-center ${
          scrolled
            ? "bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)] border-b border-black/[0.05]"
            : "bg-white/98 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="container-x w-full flex items-center justify-between">

          {/* ── Logo (Left) ── */}
          <Link href="/" className="flex-shrink-0 flex items-center" aria-label="MECH-ε-TRON™ — Home">
            <img
              src={companyInfo.logoNavbar}
              alt={`${companyInfo.name} Logo`}
              style={{ height: '44px', width: 'auto' }}
              className="object-contain"
            />
          </Link>

          {/* ── Navigation (Center) ── */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = mounted && (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)));
              const isOpen   = mounted && openDropdown === link.label;

              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative py-4"
                    onMouseEnter={() => openDelay(link.label)}
                    onMouseLeave={closeDelay}
                  >
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                      className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-200 ${
                        isActive ? "text-brand-blue" : "text-brand-ink/80 hover:text-brand-blue"
                      }`}
                    >
                      {link.label}
                      <svg
                        width="10" height="6" viewBox="0 0 10 6" fill="none"
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Dropdown Panel */}
                    <div
                      className={`absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-200 ${
                        isOpen
                          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                          : "opacity-0 translate-y-2 scale-[0.98] pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-[10px] border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-2 min-w-[220px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-5 py-2.5 text-[14px] font-medium transition-all ${
                              mounted && pathname === child.href
                                ? "text-brand-blue bg-[#f5f7ff]"
                                : "text-brand-ink/70 hover:text-brand-blue hover:bg-[#f5f7ff]"
                            }`}
                          >
                            {child.label}
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
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    isActive ? "text-brand-blue" : "text-brand-ink/80 hover:text-brand-blue"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── CTA Button (Right) ── */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="btn-primary px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Free Demo
            </Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-ink"
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <div
        className={`fixed inset-0 z-[100] bg-brand-ink/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-[101] w-[280px] h-full bg-white shadow-2xl lg:hidden transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[70px] border-b border-black/[0.05]">
          <img
            src={companyInfo.logoNavbar}
            alt="Logo"
            style={{ height: '32px', width: 'auto' }}
          />
          <button onClick={() => setMobileOpen(false)} className="text-brand-ink">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <nav className="p-6 overflow-y-auto h-[calc(100%-70px)]">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full font-semibold text-brand-ink py-2"
                    >
                      {link.label}
                      <svg
                        width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                        className={`transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </button>
                    {mobileExpanded === link.label && (
                      <ul className="pl-4 space-y-2 border-l border-brand-blue/20 ml-1">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className="block py-2 text-sm text-brand-ink/60 hover:text-brand-blue">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={link.href} className="block py-2 font-semibold text-brand-ink">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="btn-primary w-full mt-8 py-3 rounded-xl justify-center shadow-glow-blue"
          >
            Book Free Demo
          </Link>
        </nav>
      </aside>
    </>
  );
}
