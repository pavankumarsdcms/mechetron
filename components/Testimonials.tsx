import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {testimonials.map((t) => (
        <div key={t.name} className="card hover-lift">
          <div className="flex gap-0.5 text-brand-yellow">
            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          </div>
          <p className="mt-4 text-sm text-brand-ink/80 leading-relaxed">"{t.quote}"</p>
          <div className="mt-6 flex items-center gap-3 pt-4 border-t border-black/5">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-orange to-brand-yellow grid place-items-center text-white text-sm font-bold">
              {t.name[0]}
            </div>
            <div>
              <div className="font-semibold text-sm">{t.name}</div>
              <div className="text-xs text-brand-ink/55">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
