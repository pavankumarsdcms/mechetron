import Link from "next/link";
import { companyInfo, courses, services } from "@/lib/data";

export default function Footer() {
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
            <div className="h-9 w-9 rounded-tag bg-brand-blue grid place-items-center font-display font-bold text-sm text-white group-hover:shadow-glow-sm transition">
              M
            </div>
            <span className="font-display font-bold text-lg text-white">
              Mech-E-<span className="gradient-text">Tron</span>
            </span>
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
            <li>
              <Link href="/courses" className="hover:text-brand-blue transition-colors">
                All Courses
              </Link>
            </li>
            {courses.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="hover:text-brand-blue transition-colors">
                  {c.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/schools" className="hover:text-brand-blue transition-colors font-semibold">
                For Schools →
              </Link>
            </li>
          </ul>
        </div>

        {/* Services & Projects */}
        <div>
          <h4 className="font-display font-semibold mb-6 text-white text-sm uppercase tracking-wider">
            Solutions
          </h4>
          <ul className="space-y-3 text-sm text-white/40 mb-8">
            <li><Link href="/services" className="hover:text-brand-blue transition-colors">Engineering Services</Link></li>
            <li><Link href="/projects" className="hover:text-brand-blue transition-colors">Student Projects</Link></li>
            <li><Link href="/products/arduino-uno-learning-board" className="hover:text-brand-blue transition-colors">Shop Hardware</Link></li>
          </ul>
          <h4 className="font-display font-semibold mb-4 text-white text-sm uppercase tracking-wider">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-white/40">
            <li><Link href="/about"   className="hover:text-brand-blue transition-colors">Our Story</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-blue transition-colors">Gallery</Link></li>
            <li><Link href="/blog"    className="hover:text-brand-blue transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold mb-6 text-white text-sm uppercase tracking-wider">
            Get in Touch
          </h4>
          <div className="space-y-4 text-sm text-white/40">
            <p className="leading-relaxed">
              📍 {companyInfo.address.line1},<br />
              {companyInfo.address.line2},<br />
              {companyInfo.address.line3}<br />
              <span className="text-white/25">Pin: {companyInfo.address.pincode}</span>
            </p>
            <p>
              📱{" "}
              <a href={`tel:${companyInfo.phone}`} className="hover:text-brand-blue transition-colors text-white/60 font-medium">
                {companyInfo.phone}
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
