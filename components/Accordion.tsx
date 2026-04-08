"use client";
import { useState } from "react";

interface AccordionItem {
  title: string;
  body: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/5 rounded-card border border-white/8 overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="bg-white/3 backdrop-blur-sm">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left group"
            aria-expanded={open === i}
          >
            <span className="font-display font-semibold text-white/90 group-hover:text-white transition-colors text-sm">
              <span className="text-brand-orange mr-3 font-mono text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.title}
            </span>
            <span
              className={`text-brand-orange flex-shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              open === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-6 pb-5 text-sm text-white/55 leading-relaxed">
              {item.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
