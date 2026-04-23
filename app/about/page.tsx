import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";
import { stats, companyInfo } from "@/lib/data";

/* ── SEO ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "About Us | Mech-E-Tron — S.T.E.M Robotics",
  description:
    "Learn about Mech-E-Tron, South India's AICRA certified robotics and STEM education platform. Meet our team including an IAF-trained drone instructor. Based in Chennai, Hyderabad and Tirupati.",
  keywords: [
    "about Mech-E-Tron",
    "AICRA District Coordinator",
    "STEM robotics India",
    "IAF drone instructor",
    "robotics education Hyderabad",
    "robotics education Chennai",
    "MSME robotics India",
    "ISO certified robotics",
  ],
  alternates: { canonical: "https://mechetron.com/about" },
  openGraph: {
    title: "About Us | Mech-E-Tron — S.T.E.M Robotics",
    description:
      "AICRA certified robotics & STEM education in South India. Trained by IAF officers. 10,000+ students. Chennai, Hyderabad, Tirupati.",
    url: "https://mechetron.com/about",
  },
};

/* ── Partner logos for trusted-by strip ────────────────────── */
const trustedPartners = [
  "Kendriya Vidyalaya",
  "VIT University",
  "JNTU Hyderabad",
  "BITS Pilani",
  "NIT Warangal",
  "St. Mary's School",
  "Narayana Schools",
  "Osmania University",
  "DPS Hyderabad",
  "Ryan International",
];

/* ── Credentials ───────────────────────────────────────────── */
const credentials = [
  { label: "AICRA",        sub: "District Coordinator",       icon: "🏛️" },
  { label: "Skill India",  sub: "Ministry MoU Partner",       icon: "🇮🇳" },
  { label: "MSME",         sub: "Registered Organisation",    icon: "🏢" },
  { label: "ISO 9001:2015",sub: "Quality Certified",          icon: "✅" },
  { label: "DGCA",         sub: "Drone Compliance",           icon: "✈️" },
];

/* ── Core values ───────────────────────────────────────────── */
const coreValues = [
  {
    icon: "⚙️",
    title: "Hardware-First",
    body: "We believe you can't learn engineering on a screen. Every lesson involves real physical components that students build, break, and fix.",
  },
  {
    icon: "🤝",
    title: "No Student Left Behind",
    body: "Our 1:6 mentor-to-student ratio ensures that every learner — beginner or advanced — gets the personal attention they deserve.",
  },
  {
    icon: "🚀",
    title: "Innovation for All",
    body: "We make high-end technology — like 3D printing, AI, and drone builds — fully accessible to school students from Grade 3 onwards.",
  },
];

/* ═══════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <main>

      {/* ══════════════════════════════════════════════════════
        SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <PageHero
        badge="About Mech-E-Tron"
        title="We Don't Just Teach Robotics. We Build the Engineers of Tomorrow."
        titleAccent="Engineers of Tomorrow."
        subtitle="Mech-E-Tron is South India's hands-on robotics and STEM education platform. From Grade 3 school students to final year engineering graduates, we give every learner real hardware, real guidance, and real confidence. Based in Chennai, Hyderabad, and Tirupati — going to World Robotics Championship Delhi 2025."
      >
        <Link href="/courses" className="btn-primary px-8 py-3.5">
          Explore Courses
        </Link>
        <Link href="/contact" className="btn-dark border-white/20 px-8 py-3.5">
          Book Free Demo
        </Link>
      </PageHero>

      {/* ══════════════════════════════════════════════════════
        SECTION 2 — OUR STORY (2-col: text left, image right)
      ══════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ── */}
          <div data-animate>
            <div className="eyebrow mb-3">Our Story</div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-6">
              Learn Robotics.{" "}
              <span className="gradient-text">Build Skills, Not Just Theory.</span>
            </h2>

            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between theoretical education and
                practical engineering, Mech-E-Tron provides hands-on robotics and STEM
                education for school and college students across South India.
              </p>
              <p>
                Based at the{" "}
                <strong className="text-brand-body">
                  Osmania Technology Business Incubator (OTBI)
                </strong>{" "}
                at Osmania University, we operate at the intersection of academia and
                industry. Our teaching staff includes experienced engineers and a{" "}
                <strong className="text-brand-body">
                  retired Indian Air Force officer
                </strong>{" "}
                who specialises in drone technology and advanced avionics.
              </p>
              <p>
                We are proud to be an{" "}
                <strong className="text-brand-body">MSME registered and ISO certified</strong>{" "}
                organisation. As a District Coordinator for{" "}
                <strong className="text-brand-body">AICRA</strong>, we work towards
                institutional collaborations to bring international standards of robotics
                to every classroom.
              </p>
              <p>
                Our students don&apos;t just study from books — they build real robots, win
                National WRC competitions, and develop career-ready skills in AI, IoT, and
                Embedded Systems.
              </p>
            </div>

            {/* ── 4 stats beneath the text ── */}
            <div className="flex flex-wrap gap-x-8 gap-y-6 mt-10 pt-8 border-t border-brand-blue/10">
              {stats.map((s) => (
                <div key={s.label} className="min-w-[110px]">
                  <div className="text-3xl font-display font-bold gradient-text tabular-nums">
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-brand-muted mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: image ── */}
          <div className="relative" data-animate data-delay="200">
            <div className="aspect-[4/5] rounded-xl2 overflow-hidden border border-brand-blue/10 shadow-glow">
              <Image
                src="/images/robotics-lab.webp"
                alt="Students learning robotics at Mech-E-Tron lab"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass border-brand-blue/20 p-5 max-w-[220px] shadow-glow-sm">
              <div className="text-3xl font-display font-bold gradient-text mb-1">2026</div>
              <p className="text-sm font-medium text-brand-body leading-tight">
                Shaping the Future of Robotics in India
              </p>
            </div>

            {/* WRC badge */}
            <div className="absolute -top-4 -left-4 bg-brand-blue text-white py-2 px-4 rounded-card shadow-glow text-xs font-display font-bold uppercase tracking-wide">
              🏆 WRC Delhi 2025
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
        SECTION 3 — TRUSTED BY (light-bg logo scroll strip)
      ══════════════════════════════════════════════════════ */}
      <section
        className="py-10 border-y border-gray-100 bg-brand-surface overflow-hidden relative"
        aria-label="Trusted by leading schools and institutions"
        data-animate
      >
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-surface to-transparent z-10 pointer-events-none" />

        <p className="text-center text-[11px] font-display font-bold uppercase tracking-[0.2em] text-brand-muted mb-6">
          Trusted by Leading Schools &amp; Institutions
        </p>

        <div
          className="flex w-max animate-marquee gap-0"
          style={{ willChange: "transform" }}
        >
          {/* First set */}
          {trustedPartners.map((name) => (
            <div key={name} className="flex items-center gap-3 mx-8 whitespace-nowrap">
              <div className="h-9 px-5 rounded border border-gray-200 bg-white flex items-center justify-center text-brand-muted text-xs font-display font-semibold hover:text-brand-blue hover:border-brand-blue/30 transition-colors cursor-default shadow-card">
                {name}
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {trustedPartners.map((name) => (
            <div
              key={`dup-${name}`}
              className="flex items-center gap-3 mx-8 whitespace-nowrap"
              aria-hidden="true"
            >
              <div className="h-9 px-5 rounded border border-gray-200 bg-white flex items-center justify-center text-brand-muted text-xs font-display font-semibold shadow-card">
                {name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
        SECTION 4 — CREDENTIALS STRIP
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-b border-gray-100" data-animate>
        <div className="container-x">
          <p className="text-center text-[11px] font-display font-bold uppercase tracking-[0.2em] text-brand-muted mb-10">
            Accreditations &amp; Credentials
          </p>

          <div className="flex flex-wrap justify-center items-stretch gap-px bg-gray-100 rounded-xl overflow-hidden border border-gray-100">
            {credentials.map((c, i) => (
              <div
                key={c.label}
                className={`flex-1 min-w-[160px] flex flex-col items-center justify-center gap-1.5 bg-white py-8 px-6 group hover:bg-brand-tint transition-colors${
                  i < credentials.length - 1 ? "" : ""
                }`}
              >
                <span className="text-3xl">{c.icon}</span>
                <span className="font-display font-black text-lg text-brand-ink group-hover:text-brand-blue transition-colors">
                  {c.label}
                </span>
                <span className="text-[11px] text-brand-muted text-center tracking-wide">
                  {c.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
        SECTION 5 — CORE VALUES (dark bg, 3 glass cards)
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-brand-ink relative overflow-hidden" data-animate>
        {/* Background decorations */}
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="absolute inset-0 circuit-bg opacity-30 pointer-events-none" />
        <div className="glow-orb w-96 h-96 bg-brand-blue/15 -top-32 -right-32" />
        <div className="glow-orb w-80 h-80 bg-brand-deep/20 -bottom-20 -left-20" />

        <div className="relative container-x">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow-white mb-4">Our Principles</div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-5">
              Our Core Values
            </h2>
            <div className="divider mx-auto mb-5" />
            <p className="text-white/55 text-lg leading-relaxed">
              The principles that guide every class, project, and service we offer.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <div
                key={v.title}
                className="card-glass-hover p-8 text-center group"
                data-animate
                data-delay={String(i * 100 + 100)}
              >
                {/* Icon in cyan circle */}
                <div className="w-14 h-14 rounded-full bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent/25 transition-colors">
                  <span className="text-2xl">{v.icon}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  {v.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
        SECTION 6 — CTA CARD (Be Part of Our Mission)
      ══════════════════════════════════════════════════════ */}
      <CTABanner
        title="Be part of our mission"
        subtitle="Join our community of 10,000+ students and innovators. Let's build the future of robotics together."
        cta1={{ label: "View Courses", href: "/courses" }}
        cta2={{ label: "Visit Our Lab", href: "/contact" }}
      />

      {/* ══════════════════════════════════════════════════════
        SECTION 7 — NEWSLETTER SIGNUP
        (Newsletter is rendered globally via layout.tsx — 
         this is a page-level in-page variant with extra detail)
      ══════════════════════════════════════════════════════ */}
      {/* Note: the global <Newsletter /> in layout.tsx renders below every page.
          The About page intentionally defers to the global newsletter rather than
          duplicating it, keeping the layout consistent with all other pages.   */}

    </main>
  );
}
