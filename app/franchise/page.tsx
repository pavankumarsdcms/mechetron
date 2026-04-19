import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";
import { franchiseData as fd } from "@/lib/data/franchise";

export const metadata: Metadata = {
  title: "TechnoXian Orbit Franchise | Partner with MechEtron",
  description:
    "Become a TechnoXian Orbit franchise partner. Run robotics clubs, sell DIY kits, host competitions, and earn up to ₹53L gross profit annually. India's gateway to global robotics innovation.",
  keywords: ["franchise", "TechnoXian Orbit", "robotics franchise India", "STEM franchise", "Abira Automation partner"],
};

export default function FranchisePage() {
  return (
    <main>
      {/* ── Section 1: Hero ─────────────────────────────────── */}
      <PageHero
        badge={fd.hero.badge}
        title={fd.hero.headline}
        subtitle={fd.hero.subheadline}
      >
        {fd.hero.ctas.map((cta, i) =>
          cta.disabled ? (
            <button
              key={i}
              disabled
              className="btn-dark border-white/20 px-8 py-3.5 text-base opacity-50 cursor-not-allowed"
            >
              {cta.label}
            </button>
          ) : (
            <Link key={i} href={cta.href} className="btn-primary px-8 py-3.5 text-base font-bold">
              {cta.label}
            </Link>
          )
        )}
      </PageHero>

      {/* Hero body strip */}
      <div className="bg-brand-tint border-b border-brand-blue/10">
        <div className="container-x py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-brand-muted leading-relaxed max-w-4xl text-base lg:text-lg">
            {fd.hero.body}
          </p>
          <div className="flex-shrink-0 text-sm font-semibold text-brand-blue bg-brand-blue/10 px-4 py-2 rounded-full">
            {fd.hero.website}
          </div>
        </div>
      </div>

      {/* ── Section 2: Three Zones ───────────────────────────── */}
      <Section
        title={fd.zones.heading}
        center
        className="bg-white"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {fd.zones.items.map((zone) => (
            <div key={zone.zone} className="card-hover text-center">
              <h3 className="text-xl font-display font-bold text-brand-ink mb-3 bg-brand-blue/5 rounded-t-lg py-3">
                {zone.zone}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed px-4 pb-4">
                {zone.description}
              </p>
            </div>
          ))}
        </div>

        {/* Kit categories */}
        <div className="mt-14 text-center">
          <p className="eyebrow mb-5">Kit Categories</p>
          <div className="flex flex-wrap justify-center gap-3">
            {fd.zones.kitCategories.map((cat) => (
              <span key={cat} className="badge-brand text-sm px-4 py-1.5">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Section 3: Business Model ────────────────────────── */}
      <Section
        title={fd.businessModel.heading}
        subtitle={fd.businessModel.body}
        center
        className="bg-brand-surface"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fd.businessModel.streams.map((stream) => (
            <div key={stream.title} className="card border-brand-blue/10 hover:border-brand-blue/30 transition-all">
              <div className="text-3xl mb-4">{stream.icon}</div>
              <h3 className="font-display font-bold text-brand-ink mb-2">
                {stream.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {stream.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Section 4: ROI Calculator ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              {fd.roi.heading}
            </h2>
            <p className="text-brand-muted">{fd.roi.subheading}</p>
          </div>

          {/* Base facts */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="badge text-sm px-5 py-2">
              📍 {fd.roi.franchiseBase.institutions}
            </div>
            <div className="badge text-sm px-5 py-2">
              📍 {fd.roi.franchiseBase.studentBase}
            </div>
          </div>

          {/* Revenue share badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {fd.roi.revenueShares.map((rs) => (
              <div
                key={rs.label}
                className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue rounded-pill px-4 py-1.5 text-sm font-semibold border border-brand-blue/20"
              >
                <span className="font-bold text-brand-blue">{rs.share}</span>
                {rs.label}
              </div>
            ))}
          </div>

          {/* ROI Table */}
          <div className="overflow-x-auto rounded-card border border-brand-blue/10 shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-ink text-white">
                  <th className="text-left px-5 py-4 font-display font-semibold">Revenue Stream</th>
                  <th className="text-left px-5 py-4 font-display font-semibold hidden md:table-cell">Target Group</th>
                  <th className="text-right px-5 py-4 font-display font-semibold hidden lg:table-cell">Count</th>
                  <th className="text-right px-5 py-4 font-display font-semibold hidden lg:table-cell">Avg Fee</th>
                  <th className="text-right px-5 py-4 font-display font-semibold">Gross (₹)</th>
                  <th className="text-right px-5 py-4 font-display font-semibold hidden md:table-cell">Share</th>
                  <th className="text-right px-5 py-4 font-display font-semibold">Profit (₹)</th>
                </tr>
              </thead>
              <tbody>
                {fd.roi.table.map((row, i) => {
                  if (row.isTotal) {
                    return (
                      <tr key="total" className="border-t-2 border-brand-blue bg-brand-blue/10">
                        <td colSpan={4} className="px-5 py-4 font-display font-bold text-brand-ink text-lg">
                          {row.stream}
                        </td>
                        <td className="hidden lg:table-cell" />
                        <td className="hidden md:table-cell" />
                        <td className="px-5 py-4 text-right">
                          <span className="text-brand-blue font-display font-extrabold text-xl">
                            {row.profit}
                          </span>
                        </td>
                      </tr>
                    );
                  }
                  return (
                    <tr
                      key={row.stream}
                      className={`border-t border-brand-blue/10 ${
                        i % 2 === 0 ? "bg-white" : "bg-brand-tint"
                      } hover:bg-brand-blue/5 transition-colors`}
                    >
                      <td className="px-5 py-4 text-brand-ink font-medium">{row.stream}</td>
                      <td className="px-5 py-4 text-brand-muted hidden md:table-cell">{row.targetGroup}</td>
                      <td className="px-5 py-4 text-brand-muted text-right hidden lg:table-cell">{row.count}</td>
                      <td className="px-5 py-4 text-brand-muted text-right hidden lg:table-cell">{row.avgFee}</td>
                      <td className="px-5 py-4 text-brand-body text-right font-medium">{row.gross}</td>
                      <td className="px-5 py-4 text-right hidden md:table-cell">
                        <span className="badge-brand text-xs">{row.sharePercent}</span>
                      </td>
                      <td className="px-5 py-4 text-brand-blue font-bold text-right">{row.profit}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 5: Investment Plans ──────────────────────── */}
      <section className="py-20 bg-brand-ink border-y border-white/10">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              {fd.investmentPlans.heading}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-14">
            {fd.investmentPlans.plans.map((plan) => {
              const isPremium = plan.badge === "Premium";
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-card p-8 border transition-all ${
                    isPremium
                      ? "bg-white border-brand-accent shadow-glow"
                      : "card-glass border-white/10"
                  }`}
                >
                  {isPremium && (
                    <div className="absolute -top-3 left-8">
                      <span className="inline-flex items-center gap-1.5 rounded-pill bg-brand-blue text-white px-4 py-1 text-xs font-bold uppercase tracking-wider shadow-glow-sm">
                        ⭐ {plan.badge}
                      </span>
                    </div>
                  )}

                  <h3 className={`text-2xl font-display font-bold mb-6 mt-2 ${isPremium ? "text-brand-ink" : "text-white"}`}>
                    {plan.name}
                  </h3>

                  <div className={`space-y-3 mb-6 text-sm ${isPremium ? "text-brand-body" : "text-white/70"}`}>
                    <div className="flex gap-3">
                      <span className="font-semibold w-28 flex-shrink-0">Space</span>
                      <span>{plan.space}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-semibold w-28 flex-shrink-0">Staff</span>
                      <span>{plan.staff}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-semibold w-28 flex-shrink-0">Layout</span>
                      <span>{plan.layout}</span>
                    </div>
                  </div>

                  <div className={`rounded-tag p-4 mb-6 space-y-2 text-sm ${isPremium ? "bg-brand-tint border border-brand-blue/10" : "bg-white/5"}`}>
                    {plan.breakdown.map((c) => (
                      <div key={c.label} className="flex justify-between">
                        <span className={isPremium ? "text-brand-muted" : "text-white/60"}>{c.label}</span>
                        <span className={`font-medium ${isPremium ? "text-brand-body" : "text-white/80"}`}>{c.amount}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`flex items-center justify-between rounded-tag px-4 py-3 mb-2 ${isPremium ? "bg-brand-blue/10 border border-brand-blue/20" : "bg-white/10"}`}>
                    <span className={`font-display font-bold ${isPremium ? "text-brand-ink" : "text-white"}`}>
                      Total Investment
                    </span>
                    <span className={`font-display font-extrabold text-xl ${isPremium ? "text-brand-blue" : "text-brand-accent"}`}>
                      {plan.total}
                    </span>
                  </div>

                  <div className={`flex items-center justify-between rounded-tag px-4 py-2 text-sm ${isPremium ? "text-brand-muted" : "text-white/50"}`}>
                    <span>Association Fee</span>
                    <span className="font-medium">{plan.associationFee}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Eligibility */}
          <div className="card-glass rounded-card p-8 border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-white font-display font-bold text-xl mb-6">
              Eligibility Requirements
            </h3>
            <ul className="space-y-3">
              {fd.investmentPlans.eligibility.map((req) => (
                <li key={req} className="flex gap-3 text-white/70 text-sm">
                  <span className="text-brand-accent mt-0.5 flex-shrink-0">✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 6: Support System ────────────────────────── */}
      <Section
        title={fd.support.heading}
        subtitle={fd.support.body}
        center
        className="bg-brand-surface"
      >
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {fd.support.types.map((type) => (
            <div key={type.title} className="card border-brand-blue/10 hover:border-brand-blue/30 transition-all">
              <h3 className="font-display font-bold text-brand-blue mb-2">{type.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-card border border-brand-blue/10 p-8 shadow-card max-w-4xl mx-auto">
          <h3 className="font-display font-bold text-brand-ink text-xl mb-6 text-center">
            Marketing Channels
          </h3>
          <ol className="grid md:grid-cols-2 gap-6">
            {fd.support.marketingChannels.map((ch) => (
              <li key={ch.number} className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold flex-shrink-0 text-sm">
                  {ch.number}
                </span>
                <div>
                  <h4 className="font-bold text-brand-ink text-sm mb-1">{ch.title}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">{ch.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ── Section 7: Team Structure ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-brand-ink mb-4">
              {fd.teamStructure.heading}
            </h2>
            <p className="text-brand-muted">{fd.teamStructure.subheading}</p>
          </div>

          {/* Org chart */}
          <div className="flex flex-col items-center gap-0 mb-14 max-w-md mx-auto">
            {/* Franchise Director */}
            <div className="bg-brand-blue text-white rounded-card px-8 py-4 font-display font-bold text-center shadow-glow w-full max-w-xs">
              {fd.teamStructure.hierarchy[0]}
            </div>
            <div className="w-px h-8 bg-brand-blue/30" />

            {/* HO Coordinator */}
            <div className="border-2 border-brand-blue/30 text-brand-blue rounded-card px-6 py-3 font-semibold text-sm text-center bg-brand-tint w-full max-w-xs">
              {fd.teamStructure.hierarchy[1]}
            </div>
            <div className="w-px h-8 bg-brand-blue/30" />

            {/* BDM + CSE */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="card border-brand-blue/20 text-center py-4 text-sm bg-brand-surface font-semibold text-brand-ink">
                {fd.teamStructure.hierarchy[2]}
              </div>
              <div className="card border-brand-blue/20 text-center py-4 text-sm bg-brand-surface font-semibold text-brand-ink">
                {fd.teamStructure.hierarchy[3]}
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card border-brand-blue/10">
              <h3 className="font-display font-bold text-brand-ink mb-4">Business Development Manager (BDM)</h3>
              <ul className="space-y-2">
                {fd.teamStructure.bdmRoles.map((r) => (
                  <li key={r} className="flex gap-2 text-sm text-brand-body">
                    <span className="text-brand-blue flex-shrink-0">●</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card border-brand-blue/10">
              <h3 className="font-display font-bold text-brand-ink mb-4">Client Support Executive (CSE)</h3>
              <ul className="space-y-2">
                {fd.teamStructure.cseRoles.map((r) => (
                  <li key={r} className="flex gap-2 text-sm text-brand-body">
                    <span className="text-brand-blue flex-shrink-0">●</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-brand-muted mt-8 max-w-xl mx-auto italic">
            {fd.teamStructure.note}
          </p>
        </div>
      </section>

      {/* ── Section 8: Membership ────────────────────────────── */}
      <section className="py-20 bg-brand-surface border-y border-brand-blue/5">
        <div className="container-x">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-2">
              {fd.membership.heading}
            </h2>
            <p className="text-brand-blue font-semibold mb-6">{fd.membership.subheading}</p>
            <p className="text-brand-muted leading-relaxed mb-8">{fd.membership.body}</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              {fd.membership.benefits.map((b) => (
                <div key={b} className="bg-white border border-brand-blue/10 rounded-lg py-3 px-4 flex items-center gap-3 text-sm shadow-sm text-left">
                  <span className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 font-bold">✓</span>
                  <span className="text-brand-ink font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: 12-Day Timeline ────────────────────────── */}
      <section className="py-20 bg-brand-ink relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="glow-orb w-96 h-96 bg-brand-blue/15 -bottom-20 -left-20" />
        <div className="container-x relative">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              {fd.timeline.heading}
            </h2>
          </div>

          {/* Desktop: horizontal stepper */}
          <div className="hidden lg:grid grid-cols-7 gap-0">
            {fd.timeline.steps.map((step, i) => (
              <div key={step.day} className="flex flex-col items-center text-center px-1">
                <div className="flex items-center w-full mb-4">
                  <div className={`flex-1 h-0.5 ${i === 0 ? "invisible" : "bg-brand-blue/30"}`} />
                  <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-display font-bold text-sm shadow-glow-sm flex-shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div className={`flex-1 h-0.5 ${i === fd.timeline.steps.length - 1 ? "invisible" : "bg-brand-blue/30"}`} />
                </div>
                <div className="text-brand-accent font-bold text-xs uppercase tracking-wider mb-1">{step.day}</div>
                <div className="font-display font-semibold text-white text-sm mb-1">{step.label}</div>
                <p className="text-[11px] text-white/40 leading-snug">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical stepper */}
          <div className="lg:hidden space-y-4">
            {fd.timeline.steps.map((step, i) => (
              <div key={step.day} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-display font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < fd.timeline.steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-brand-blue/30 mt-2" style={{ minHeight: "1.5rem" }} />
                  )}
                </div>
                <div className="pb-4">
                  <div className="text-brand-accent font-bold text-xs uppercase tracking-wider">{step.day}</div>
                  <div className="font-display font-semibold text-white mb-1">{step.label}</div>
                  <p className="text-sm text-white/50">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 10: CTA Footer ───────────────────────────── */}
      <CTABanner
        title={fd.cta.heading}
        subtitle={fd.cta.subheading}
        cta1={fd.cta.button}
      />
    </main>
  );
}
