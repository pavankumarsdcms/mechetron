const partners = [
  "DPS Hyderabad",
  "Ryan International",
  "Kendriya Vidyalaya",
  "VIT University",
  "JNTU Hyderabad",
  "BITS Pilani",
  "NIT Warangal",
  "St. Mary's School",
  "Narayana Schools",
  "Osmania University",
];

export default function TrustStrip() {
  return (
    <section
      className="py-10 border-y border-white/5 bg-brand-ink/80 overflow-hidden relative"
      aria-label="Trusted partners"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-ink to-transparent z-10 pointer-events-none" />

      <p className="text-center text-[11px] font-display font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
        Trusted by leading schools &amp; institutions
      </p>

      {/* Single set of logos duplicated once — second set is decorative (aria-hidden) */}
      <div className="flex w-max animate-marquee gap-0" style={{ willChange: "transform" }}>
        {partners.map((name) => (
          <div key={name} className="flex items-center gap-3 mx-8 whitespace-nowrap">
            <div className="h-8 px-4 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white/40 text-xs font-display font-semibold hover:text-white/70 hover:border-brand-blue/30 transition-colors cursor-default">
              {name}
            </div>
          </div>
        ))}
        {/* Duplicate for seamless loop — hidden from assistive tech */}
        {partners.map((name) => (
          <div key={`dup-${name}`} className="flex items-center gap-3 mx-8 whitespace-nowrap" aria-hidden="true">
            <div className="h-8 px-4 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white/40 text-xs font-display font-semibold">
              {name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
