"use client";

import Image from "next/image";
import Link from "next/link";
import { woodenDiyData as wd } from "@/lib/data/wooden-diy";

export default function WoodenDiyPage() {
  return (
    <main className="bg-white">
      {/* ── Section 1: Hero ─────────────────────────────────── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#fbf6ef]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wooden-diy/hero.webp"
            alt="Wooden DIY Models Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-pill bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6">
              {wd.hero.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-ink mb-6 leading-tight">
              {wd.hero.headline}
            </h1>
            <p className="text-xl text-brand-muted font-medium mb-4">
              {wd.hero.subheadline}
            </p>
            <p className="text-brand-body leading-relaxed mb-8 max-w-2xl">
              {wd.hero.body}
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {wd.hero.tags.map((tag) => (
                <span key={tag} className="bg-white border border-amber-200/50 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                  ✓ {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={wd.hero.ctas[0].href} className="btn-primary px-8 py-3.5 shadow-glow">
                {wd.hero.ctas[0].label}
              </Link>
              <Link href={wd.hero.ctas[1].href} className="btn-outline px-8 py-3.5 bg-white">
                {wd.hero.ctas[1].label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: What Makes These Models Special? ───────── */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-display font-bold text-brand-ink">
              What Makes These Models Special?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wd.highlights.map((item) => (
              <div key={item.title} className="card border-amber-100 bg-[#fdfaf5] hover:border-amber-300 transition-all text-center p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-brand-ink mb-2">{item.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Our Models Range ──────────────────────── */}
      <section className="py-20 bg-brand-surface border-y border-amber-100">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-display font-bold text-brand-ink mb-4">
              Our Models Range
            </h2>
            <p className="text-brand-muted">Explore our current collection of wooden DIY vehicles.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {wd.models.map((model) => (
              <div key={model.id} className="card p-0 overflow-hidden border-brand-blue/10 flex flex-col h-full bg-white transition-transform hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-video bg-amber-50 border-b border-brand-blue/5">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-amber-900/5 items-center justify-center flex -z-10">
                    <span className="text-amber-800/20 font-bold text-xl">{model.name}</span>
                  </div>
                  {model.badge && (
                    <div className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {model.badge}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-bold text-brand-ink mb-1">{model.name}</h3>
                  <p className="text-sm text-brand-blue font-semibold mb-3">{model.tagline}</p>
                  <p className="text-sm text-brand-muted mb-6 flex-grow">{model.description}</p>
                  
                  <div className="flex items-center justify-between border-t border-brand-blue/5 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-brand-muted">Difficulty:</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded bg-${model.difficultyColor}-100 text-${model.difficultyColor}-800 border border-${model.difficultyColor}-200`}>
                        {model.difficulty}
                      </span>
                    </div>
                    <Link href="/contact" className="text-sm font-semibold text-brand-blue hover:text-brand-ink transition-colors">
                      Enquire →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: How to Build Your Model ───────────────── */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-display font-bold text-brand-ink mb-4">
              How to Build Your Model
            </h2>
          </div>
          
          <div className="relative">
            {/* Desktop continuous line */}
            <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-amber-100" />
            
            <div className="grid lg:grid-cols-4 gap-8">
              {wd.assemblySteps.map((step) => (
                <div key={step.step} className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-50 border-4 border-white shadow-sm flex items-center justify-center text-xl font-display font-bold text-amber-700 mb-6 z-10 relative">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-brand-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed px-4">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Why Choose MechEtron Wooden Kits ──────── */}
      <section className="py-20 bg-[#f9f5f0]">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-card border border-amber-200/50 bg-amber-100 flex items-center justify-center">
              <Image
                src="/images/wooden-diy/assembly.webp"
                alt="Assembly Process"
                fill
                className="object-cover z-10"
              />
              <span className="text-amber-800/30 font-display font-bold text-2xl px-8 text-center absolute">
                Assembly Process<br />Placeholder
              </span>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-8">
                Why Choose MechEtron Wooden Kits
              </h2>
              <ul className="space-y-4">
                {wd.whyChoose.map((point) => (
                  <li key={point} className="flex gap-4 p-4 rounded-xl bg-white border border-amber-100 shadow-sm">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span className="text-brand-body text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Experience Block ──────────────────────── */}
      <section className="py-24 bg-brand-ink relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex flex-wrap justify-center pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent"></div>
        </div>
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="text-amber-400 text-6xl font-serif leading-none mb-4">&quot;</div>
          <p className="text-2xl md:text-4xl font-display font-medium text-white leading-snug mb-8">
            Experience engineering in action. Every build becomes a journey of discovery.
          </p>
        </div>
      </section>

      {/* ── Section 7: Gallery ───────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {['hero.webp', 'classic-suv.webp', 'off-road-pickup.webp', 'premium-explorer.webp', 'assembly.webp', 'collection.webp'].map((img) => (
            <div key={img} className="relative aspect-square bg-[#fbf6ef] border border-black/5 overflow-hidden group">
              <Image
                src={`/images/wooden-diy/${img}`}
                alt="Gallery preview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 z-10"
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs text-amber-800/30 font-medium">
                {img}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 8: Mission Statement ─────────────────────── */}
      <section className="py-24 bg-white text-center">
        <div className="container-x max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-brand-ink mb-6">Our Mission</h2>
          <p className="text-lg text-brand-muted leading-relaxed mb-10">
            {wd.mission}
          </p>
          <Link href="/products" className="btn-outline font-semibold">
            Explore All Products
          </Link>
        </div>
      </section>

      {/* ── Section 9: CTA Banner ────────────────────────────── */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
        <div className="container-x relative text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 shadow-sm">
            {wd.cta.heading}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 font-medium">
            {wd.cta.subheading}
          </p>
          <Link href={wd.cta.button.href} className="inline-block bg-white text-brand-blue hover:text-brand-ink px-8 py-3.5 rounded-lg font-bold transition-colors shadow-lg">
            {wd.cta.button.label}
          </Link>
        </div>
      </section>
    </main>
  );
}
