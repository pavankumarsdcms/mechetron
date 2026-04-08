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
    <section className="py-10 border-y border-white/5 bg-brand-ink/80 overflow-hidden relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-ink to-transparent z-10 pointer-events-none" />

      <p className="text-center text-[11px] font-display font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
        Trusted by leading schools &amp; institutions
      </p>

      <div className="flex w-max animate-marquee gap-0">
        {/* Duplicate for seamless loop */}
        {[...partners, ...partners].map((name, i) => (
          <div
            key={i}
            className="flex items-center gap-3 mx-8 whitespace-nowrap"
          >
            {/* Logo placeholder — replace with <Image> when real logos available */}
            <div className="h-8 px-4 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white/40 text-xs font-display font-semibold hover:text-white/70 hover:border-brand-orange/30 transition-colors cursor-default">
              {name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
