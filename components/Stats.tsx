import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="py-14 border-y border-white/5 bg-brand-ink relative overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="container-x relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center group">
              <div className="text-4xl lg:text-5xl font-display font-bold gradient-text tabular-nums">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-white/50 font-medium tracking-wide">
                {s.label}
              </div>
              {/* decorative line */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 w-px h-12 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
