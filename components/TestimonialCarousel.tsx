"use client";
import { useState, useEffect } from "react";
import { testimonials } from "@/lib/data";

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const count = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % count);
    }, 5000);
    return () => clearInterval(id);
  }, [count]);

  const prev = () => setActive((a) => (a - 1 + count) % count);
  const next = () => setActive((a) => (a + 1) % count);

  // Show 3 cards centered on active
  const visible = [-1, 0, 1].map((offset) => ({
    t: testimonials[(active + offset + count) % count],
    offset,
  }));

  return (
    <div className="relative">
      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 items-start">
        {visible.map(({ t, offset }) => (
          <div
            key={t.name}
            className={`card transition-all duration-300 flex flex-col ${
              offset === 0
                ? "border-brand-blue/30 shadow-glow-sm scale-100"
                : "opacity-60 scale-95 bg-brand-surface"
            }`}
          >
            {/* Stars */}
            <div className="flex gap-0.5 text-brand-yellow text-base mb-4">
              {"★".repeat(t.rating)}
            </div>

            {/* Quote */}
            <p className="text-sm text-brand-body leading-relaxed flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Person */}
            <div className="mt-5 flex items-center gap-3 pt-4 border-t border-black/5">
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-bold font-display flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#FF6A00,#FFB400)",
                }}
              >
                {t.name[0]}
              </div>
              <div>
                <div className="font-display font-semibold text-sm text-brand-ink">
                  {t.name}
                </div>
                <div className="text-xs text-brand-muted">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center"
          aria-label="Previous"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all ${
                i === active
                  ? "w-6 h-2 bg-brand-blue"
                  : "w-2 h-2 bg-brand-blue/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center"
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
}
