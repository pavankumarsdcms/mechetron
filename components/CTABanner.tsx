import Link from "next/link";
import { companyInfo } from "@/lib/data";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  cta1?: { label: string; href: string };
  cta2?: { label: string; href: string };
}

export default function CTABanner({
  title = "Ready to build the future?",
  subtitle = "Talk to our mentors and find the right program for you, your child, or your school.",
  primaryLabel,
  primaryHref,
  cta1,
  cta2,
}: CTABannerProps) {
  const waUrl = `https://wa.me/${companyInfo.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20Mech-E-Tron%20courses`;

  const btn1 = cta1 || { label: primaryLabel || "Book a Free Demo", href: primaryHref || "/contact" };
  const btn2 = cta2 || null;

  return (
    <section className="py-20">
      <div className="container-x">
        <div className="relative rounded-xl2 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-brand-blue" />
          <div className="absolute inset-0 gradient-blue opacity-90" />

          {/* Pattern overlays */}
          <div className="absolute inset-0 circuit-bg opacity-100" />
          <div className="absolute inset-0 grid-bg opacity-60" />

          {/* Glow orbs */}
          <div className="glow-orb w-72 h-72 bg-white/10 -top-20 -right-20" />
          <div className="glow-orb w-72 h-72 bg-brand-deep/20 -bottom-20 -left-20" />

          {/* Corner accents */}
          <div className="absolute bottom-4 right-6 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-lg pointer-events-none" />
          <div className="absolute top-4 left-6 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-lg pointer-events-none" />

          {/* Content */}
          <div className="relative px-8 py-14 lg:px-16 lg:py-20">
            <div className="badge-dark inline-flex mb-5">Start your journey</div>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white leading-tight max-w-2xl">
              {title}
            </h2>
            <p className="mt-5 text-white/65 text-lg max-w-xl leading-relaxed">{subtitle}</p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={btn1.href}
                className="btn bg-white text-brand-blue hover:bg-white/90 font-display font-bold px-8 py-3.5 rounded-btn shadow-glow-sm transition-all hover:-translate-y-0.5"
              >
                {btn1.label}
              </Link>
              
              {btn2 ? (
                <Link
                  href={btn2.href}
                  className="btn-dark border-white/20 px-8 py-3.5 text-base hover:bg-white/20"
                >
                  {btn2.label}
                </Link>
              ) : (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark border-white/20 px-8 py-3.5 text-base hover:bg-white/20"
                >
                  💬 Chat on WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
