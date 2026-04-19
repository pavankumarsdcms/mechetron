"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { stemModulesData as d, GradeBand } from "@/lib/data/stem-modules";

/* ── Grade-band color map ──────────────────────────────────── */
const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; activeBg: string }> = {
  green:  { bg: "bg-green-50",  border: "border-green-200",  text: "text-green-700",  badge: "bg-green-100 text-green-800 border-green-200",  activeBg: "bg-green-500" },
  blue:   { bg: "bg-blue-50",   border: "border-blue-200",   text: "text-blue-700",   badge: "bg-blue-100 text-blue-800 border-blue-200",   activeBg: "bg-blue-500" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", badge: "bg-purple-100 text-purple-800 border-purple-200", activeBg: "bg-purple-500" },
  teal:   { bg: "bg-teal-50",   border: "border-teal-200",   text: "text-teal-700",   badge: "bg-teal-100 text-teal-800 border-teal-200",   activeBg: "bg-teal-500" },
  orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", badge: "bg-orange-100 text-orange-800 border-orange-200", activeBg: "bg-orange-500" },
  red:    { bg: "bg-red-50",    border: "border-red-200",    text: "text-red-700",    badge: "bg-red-100 text-red-800 border-red-200",    activeBg: "bg-red-500" },
};

/* ── Helper: count all projects in a grade band ────────────── */
function projectCount(band: GradeBand): number {
  return band.categories.reduce((sum, cat) => sum + cat.projects.length, 0);
}

/* Compute grade groups once — outside render to avoid hydration mismatches */
function buildGradeGroups(items: { tech: string; grades: string }[]) {
  const groups: { grades: string; techs: string[] }[] = [];
  const seen: Record<string, number> = {};
  for (const item of items) {
    if (seen[item.grades] === undefined) {
      seen[item.grades] = groups.length;
      groups.push({ grades: item.grades, techs: [item.tech] });
    } else {
      groups[seen[item.grades]].techs.push(item.tech);
    }
  }
  return groups;
}

const gradeGroups = buildGradeGroups(d.techProgression);

export default function StemModulesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main>
      {/* ── Section 1: Hero ──────────────────────────────────── */}
      <section className="relative bg-brand-ink overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="absolute inset-0 circuit-bg pointer-events-none opacity-40" />
        <div className="glow-orb w-[500px] h-[500px] bg-brand-blue/15 -top-40 -right-40" />
        <div className="glow-orb w-[400px] h-[400px] bg-brand-deep/20 -bottom-20 -left-20" />

        <div className="relative container-x py-24 lg:py-32 max-w-4xl">
          <div className="badge-dark mb-5 inline-flex">{d.hero.badge}</div>
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-white leading-[1.06] animate-fade-in-up">
            {d.hero.headline}
          </h1>
          <p className="mt-4 text-xl lg:text-2xl font-display font-semibold text-brand-accent animate-fade-in-up animate-delay-100">
            {d.hero.subheadline}
          </p>
          <p className="mt-6 text-lg text-white/55 leading-relaxed max-w-2xl animate-fade-in-up animate-delay-100">
            {d.hero.body}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up animate-delay-200">
            {d.hero.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className={cta.href.startsWith("#") ? "btn-primary px-8 py-3.5 text-base font-bold" : "btn-dark border-white/20 px-8 py-3.5 text-base"}
              >
                {cta.label}
              </Link>
            ))}
          </div>

          {/* AICRA info callout */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/50">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            MechEtron is an official implementation partner of AICRA — All India Council for Robotics &amp; Automation
          </div>
        </div>
      </section>

      {/* ── Section 2: About India STEM Lab ───────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow mb-3">India STEM Lab</div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-6">
                {d.aboutISL.heading}
              </h2>
              <p className="text-brand-muted leading-relaxed text-base lg:text-lg">
                {d.aboutISL.body}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {d.aboutISL.stats.map((stat) => (
                <div key={stat.label} className="card border-brand-blue/10 text-center p-6 hover:border-brand-blue/30 transition-all hover:-translate-y-1">
                  <div className="text-3xl font-display font-extrabold text-brand-blue mb-2">{stat.number}</div>
                  <div className="text-sm text-brand-muted font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Who It's For ──────────────────────────── */}
      <section className="py-20 bg-brand-surface">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow mb-3">Who It&apos;s For</div>
            <h2 className="text-h2 font-display font-bold text-brand-ink">
              Designed for the Entire School Ecosystem
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.objectives.map((obj) => (
              <div key={obj.role} className="card border-brand-blue/10 hover:border-brand-blue/30 hover:-translate-y-1.5 hover:shadow-card-hover transition-all text-center p-6">
                <div className="text-4xl mb-4">{obj.icon}</div>
                <h3 className="font-display font-bold text-brand-ink mb-2">{obj.role}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Technology Progression ─────────────────── */}
      <section className="py-20 bg-brand-ink relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="glow-orb w-96 h-96 bg-brand-blue/15 -top-20 -right-20" />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow-white mb-3">Curriculum</div>
            <h2 className="text-h2 font-display font-bold text-white">
              What Students Learn — Grade by Grade
            </h2>
            <p className="mt-4 text-white/55 leading-relaxed">
              Explore, Create, Innovate: Future Awaits!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gradeGroups.map((group, i) => (
              <div key={i} className="group relative card-glass p-6 border border-white/10 hover:border-brand-blue/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(3,85,188,0.15)] hover:-translate-y-1.5 overflow-hidden rounded-2xl cursor-default">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl group-hover:bg-brand-accent/20 transition-colors duration-700" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-brand-blue/20 transition-all duration-700 delay-100" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-brand-blue group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-brand-accent transition-colors duration-300">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </svg>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-brand-blue/10 text-brand-accent border border-brand-accent/20 px-3 py-1 text-xs font-bold font-mono uppercase tracking-wider backdrop-blur-md group-hover:border-brand-accent/40 transition-colors">
                      {group.grades}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2 flex-1">
                    {group.techs.map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/60 flex-shrink-0 group-hover:bg-brand-accent transition-colors" />
                        <span className="text-white/80 font-display font-semibold text-sm leading-snug group-hover:text-white transition-colors">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/50 group-hover:bg-brand-accent animate-pulse-soft" />
                    <span className="text-xs text-brand-blue/80 font-semibold tracking-wide uppercase group-hover:text-brand-accent/90 transition-colors">
                      {group.techs.length} {group.techs.length === 1 ? "Module" : "Modules"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Grade-wise Project Explorer ────────────── */}
      <section id="grade-modules" className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow mb-3">Project Modules</div>
            <h2 className="text-h2 font-display font-bold text-brand-ink">
              Grade-wise Project Modules
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Official AICRA curriculum — 6 grade bands, 20+ technology domains
            </p>
          </div>

          {/* Desktop tabs */}
          <div className="hidden lg:flex gap-2 mb-8 border-b border-brand-blue/10 pb-4 overflow-x-auto">
            {d.gradeBands.map((band, i) => {
              const colors = colorMap[band.colorClass] || colorMap.blue;
              const isActive = activeTab === i;
              return (
                <button
                  key={band.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-lg font-display font-semibold text-sm transition-all whitespace-nowrap ${
                    isActive
                      ? `${colors.activeBg} text-white shadow-glow-sm`
                      : "text-brand-ink/70 hover:bg-black/[0.04]"
                  }`}
                >
                  {band.label}
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-brand-blue/10 text-brand-blue"
                  }`}>
                    {projectCount(band)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile accordion */}
          <div className="lg:hidden space-y-3 mb-8">
            {d.gradeBands.map((band, i) => {
              const colors = colorMap[band.colorClass] || colorMap.blue;
              const isActive = activeTab === i;
              return (
                <div key={band.id}>
                  <button
                    onClick={() => setActiveTab(isActive ? -1 : i)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-lg font-display font-semibold text-sm transition-all ${
                      isActive
                        ? `${colors.activeBg} text-white`
                        : `${colors.bg} ${colors.text} ${colors.border} border`
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {band.label}
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                        isActive ? "bg-white/20 text-white" : "bg-white/80 text-inherit"
                      }`}>
                        {projectCount(band)}
                      </span>
                    </span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {isActive && (
                    <div className="mt-2">
                      <GradePanelContent band={band} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop panel */}
          <div className="hidden lg:block">
            {activeTab >= 0 && activeTab < d.gradeBands.length && (
              <GradePanelContent band={d.gradeBands[activeTab]} />
            )}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ──────────────────────────────── */}
      <section className="py-20 bg-brand-surface">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow mb-3">Benefits</div>
            <h2 className="text-h2 font-display font-bold text-brand-ink">
              What Schools Get with India STEM Lab
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {d.benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 items-start card border-brand-blue/10 p-5">
                <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span className="text-brand-body text-sm">{benefit}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-brand-muted mt-8">
            Source: AICRA India STEM Lab Program. MechEtron is an authorized implementation partner.
          </p>
        </div>
      </section>

      {/* ── Section 6b: ISL Certificate Showcase ──────────────── */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="eyebrow mb-3">Certification</div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-2">
              AICRA India STEM Lab Certificates
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Students completing ISL modules receive official AICRA-recognized certificates valid for career advancement and higher education.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style.png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(1).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(2).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(3).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(4).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(5).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(6).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(7).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(8).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(9).png",
            ].map((file, i) => (
              <div key={i} className="relative aspect-[1.414/1] rounded-lg overflow-hidden border border-brand-blue/10 shadow-card hover:shadow-glow-sm transition-all hover:scale-[1.02] bg-brand-tint">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/isl%20images/${file}`}
                  alt={`AICRA ISL Certificate ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-brand-muted mt-6 italic">
            Source: AICRA India STEM Lab Program. MECH-ε-TRON™ is an authorized implementation partner.
          </p>
        </div>
      </section>

      {/* ── Section 7: CTA Banner ────────────────────────────── */}
      <section className="py-20">
        <div className="container-x">
          <div className="relative rounded-xl2 overflow-hidden">
            <div className="absolute inset-0 bg-brand-blue" />
            <div className="absolute inset-0 gradient-blue opacity-90" />
            <div className="absolute inset-0 circuit-bg opacity-100" />
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="glow-orb w-72 h-72 bg-white/10 -top-20 -right-20" />
            <div className="glow-orb w-72 h-72 bg-brand-deep/20 -bottom-20 -left-20" />
            <div className="absolute bottom-4 right-6 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-lg pointer-events-none" />
            <div className="absolute top-4 left-6 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-lg pointer-events-none" />

            <div className="relative px-8 py-14 lg:px-16 lg:py-20">
              <div className="badge-dark inline-flex mb-5">Start your journey</div>
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-white leading-tight max-w-2xl">
                Ready to Bring STEM to Your School?
              </h2>
              <p className="mt-5 text-white/65 text-lg max-w-xl leading-relaxed">
                Contact MechEtron to set up India STEM Lab at your institution.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn bg-white text-brand-blue hover:bg-white/90 font-display font-bold px-8 py-3.5 rounded-btn shadow-glow-sm transition-all hover:-translate-y-0.5"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/schools"
                  className="btn-dark border-white/20 px-8 py-3.5 text-base hover:bg-white/20"
                >
                  Learn About Schools Program
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Grade Panel Content (lazy-rendered) ────────────────────── */
function GradePanelContent({ band }: { band: GradeBand }) {
  const colors = colorMap[band.colorClass] || colorMap.blue;
  return (
    <div className={`rounded-card p-6 lg:p-8 ${colors.bg} ${colors.border} border`}>
      <div className="mb-6">
        <span className={`inline-flex items-center rounded-pill ${colors.badge} border px-3 py-1 text-xs font-semibold mb-3`}>
          {band.tagline}
        </span>
        <p className="text-sm text-brand-muted leading-relaxed">{band.description}</p>
      </div>

      {band.categories.map((cat) => (
        <div key={cat.name} className="mb-8 last:mb-0">
          <h4 className="font-display font-bold text-brand-ink text-lg mb-4 flex items-center gap-2">
            {cat.name}
            <span className="text-xs font-semibold text-brand-muted bg-white rounded-pill px-2 py-0.5">
              {cat.projects.length} projects
            </span>
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {cat.projects.map((proj) => (
              <div key={proj.name} className="bg-white rounded-lg p-4 border border-black/[0.06] hover:shadow-card transition-shadow">
                <div className="font-semibold text-brand-ink text-sm mb-1">{proj.name}</div>
                <p className="text-xs text-brand-muted leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
