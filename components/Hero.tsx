"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { stats } from "@/lib/data";

const INTERVAL = 5000;

const slides = [
  {
    id: "main",
    badge: "Trusted by 120+ Schools Across India",
    headline: ["Hands-On", "Robotics"],
    headlineAccent: "Robotics",
    subtext: "Train the next generation of engineers through real robots, real code, and real projects — for students, schools, and engineering aspirants.",
    cta1: { label: "Explore Courses", href: "/courses" },
    cta2: { label: "Book a Free Demo", href: "/contact" },
    image: "/images/robotics-lab.webp",
    imageAlt: "Students building robots at Mech-E-Tron lab",
    imageCaption: "Build. Code. Innovate.",
    floatLabel: "Live Cohort",
    floatTitle: "Robotics Bootcamp",
    floatSub: "Starts every month",
    floatValue: "₹1,600",
    topBadge: "🏆 OTBI Incubated",
    orb1: "bg-brand-dark/30",
    orb2: "bg-brand-accent/20",
  },
  {
    id: "competitions",
    badge: "National & International Events",
    headline: ["Win at", "Robotics Competitions"],
    headlineAccent: "Robotics Competitions",
    subtext: "Dedicated competition coaching for WRO, RoboLeague, AICRA & Smart India Hackathon. Our students consistently finish on the podium.",
    cta1: { label: "Register Now →", href: "/courses/robotics-competitions" },
    cta2: { label: "View All Courses", href: "/courses" },
    image: "/images/robotic compititons.jpeg",
    imageAlt: "Students competing in robotics events",
    imageCaption: "Compete. Win. Repeat.",
    floatLabel: "Competition Prep",
    floatTitle: "WRO · RoboLeague · AICRA",
    floatSub: "6-week intensive",
    floatValue: "₹2,500",
    topBadge: "🥇 50+ Competitions",
    orb1: "bg-brand-accent/20",
    orb2: "bg-brand-dark/25",
  },
  {
    id: "arduino",
    badge: "Best Selling Starter Kit",
    headline: ["30+ Projects.", "1 Arduino Kit."],
    headlineAccent: "1 Arduino Kit.",
    subtext: "The Mech-E-Tron Arduino UNO Learning Board gives you every component, step-by-step project guides, and 3 months of free mentor support.",
    cta1: { label: "Buy Arduino Kit →", href: "/products/arduino-uno-learning-board" },
    cta2: { label: "Learn More", href: "/courses/arduino-embedded" },
    image: "/images/arduino-kit.webp",
    imageAlt: "Arduino UNO Learning Board with components",
    imageCaption: "Everything in the box.",
    floatLabel: "Arduino Kit",
    floatTitle: "UNO Learning Board",
    floatSub: "Delivered in 3–5 days",
    floatValue: "₹1,799",
    topBadge: "⭐ Best Seller",
    orb1: "bg-brand-dark/20",
    orb2: "bg-brand-light/20",
  },
  {
    id: "summer-camp",
    badge: "Registration Open — Summer 2026",
    headline: ["Robotics", "Summer Camp"],
    headlineAccent: "Summer Camp",
    subtext: "15 & 30-day intensive robotics camps in Chennai, Hyderabad & Tirupati. Every student builds their own working robot + professional certification.",
    cta1: { label: "Enroll Now →", href: "/summer-camp" },
    cta2: { label: "View Batches", href: "/summer-camp#batches" },
    image: "/images/stem-school.webp",
    imageAlt: "Children building robots at summer camp",
    imageCaption: "A Summer of Innovation.",
    floatLabel: "Summer 2026",
    floatTitle: "Robotics Camp",
    floatSub: "May & June Batches",
    floatValue: "₹2,299",
    topBadge: "🔥 Selling Fast",
    orb1: "bg-brand-orange/20",
    orb2: "bg-brand-blue/15",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const [paused, setPaused] = useState(false);
  // Track which images have been "revealed" (for lazy-loading)
  const [loaded, setLoaded] = useState<Set<number>>(new Set([0]));
  const currentRef = useRef(current);
  currentRef.current = current;

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setTimerKey((k) => k + 1);
    // Preload the next slide's image
    setLoaded((prev) => new Set(prev).add(i));
  }, []);

  const goPrev = () => goTo((currentRef.current - 1 + slides.length) % slides.length);
  const goNext = () => goTo((currentRef.current + 1) % slides.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const next = (currentRef.current + 1) % slides.length;
      setCurrent(next);
      setTimerKey((k) => k + 1);
      setLoaded((prev) => new Set(prev).add(next));
    }, INTERVAL);
    return () => clearInterval(id);
  }, [timerKey, paused]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-70 pointer-events-none" />
      <div className="absolute inset-0 circuit-bg opacity-100 pointer-events-none" />
      <div className={`glow-orb w-[600px] h-[600px] ${slide.orb1} -top-20 -right-40 transition-all duration-1000`} />
      <div className={`glow-orb w-[500px] h-[500px] ${slide.orb2} -bottom-20 -left-20 transition-all duration-1000`} />

      {/* Animated scan line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent pointer-events-none"
        style={{ animation: "scan-line 8s linear infinite", top: 0 }}
      />

      <div className="container-x relative py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px]">

          {/* Left: Text */}
          <div key={slide.id} className="animate-fade-in-up flex flex-col justify-center min-h-[420px]">
            {/* Badge */}
            <div className="inline-flex self-start items-center gap-2 rounded-pill border border-brand-accent/30 bg-brand-dark/10 px-4 py-1.5 text-xs font-semibold text-brand-accent uppercase tracking-widest mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              {slide.badge}
            </div>

            {/* H1 */}
            <div className="min-h-[130px] sm:min-h-[160px] flex flex-col justify-end">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1]">
                {slide.headline[0]}
                <br />
                <span className="gradient-text">{slide.headlineAccent}</span>
              </h1>
            </div>

            {/* Subhead */}
            <div className="min-h-[84px] flex items-center mt-6">
              <p className="text-lg text-white/60 max-w-lg leading-relaxed">
                {slide.subtext}
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={slide.cta1.href} className="btn-primary shadow-glow">
                {slide.cta1.label}
              </Link>
              <Link href={slide.cta2.href} className="btn-dark">
                {slide.cta2.label}
              </Link>
            </div>

            {/* Stats strip — 2×2 on mobile, 4-col on sm+ */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 pt-8 border-t border-white/[0.08]">
              {stats.map((s) => (
                <div key={s.label} className="group">
                  <div className="text-2xl font-display font-bold gradient-text group-hover:scale-105 transition-transform inline-block">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Carousel controls */}
            <div className="mt-8 flex items-center gap-3">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
                    i === current ? "w-16 bg-white/20" : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                >
                  {i === current && (
                    <span
                      key={`${current}-${timerKey}`}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #0355BC, #1DA5FA)",
                        animation: paused ? "none" : `progress-fill ${INTERVAL}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              ))}

              <div className="ml-4 flex gap-2">
                <button
                  onClick={goPrev}
                  aria-label="Previous slide"
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next slide"
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Pause indicator */}
              {paused && (
                <span className="ml-2 text-white/30 text-xs">⏸ paused</span>
              )}
            </div>
          </div>

          {/* Right: Visual — only render image when slide has been loaded */}
          <div className="relative animate-fade-in-up animate-delay-300 h-full flex items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl2 overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(3,85,188,0.20)]">
              {slides.map((s, i) => (
                loaded.has(i) ? (
                  <Image
                    key={s.id}
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className={`object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                    priority={i === 0}
                  />
                ) : null
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/10 to-transparent" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-dark/20 blur-[60px] rounded-full" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Mech-E-Tron Lab</p>
                <p className="text-white font-display font-semibold">{slide.imageCaption}</p>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -left-5 glass border-neon p-4 min-w-[190px] animate-float shadow-glow-sm">
              <div className="eyebrow-white mb-1">{slide.floatLabel}</div>
              <p className="font-display font-semibold text-white text-sm leading-snug">{slide.floatTitle}</p>
              <p className="text-white/40 text-xs mt-0.5">{slide.floatSub}</p>
              <p className="text-brand-accent font-bold text-sm mt-1.5">{slide.floatValue}</p>
            </div>

            {/* Top badge */}
            <div className="absolute -top-3 -right-3 badge-brand animate-fade-in-up animate-delay-500 shadow-glow-sm">
              {slide.topBadge}
            </div>

            {/* Decorative corners */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-brand-dark/40 rounded-br-xl pointer-events-none" />
            <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-brand-dark/40 rounded-tl-xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
