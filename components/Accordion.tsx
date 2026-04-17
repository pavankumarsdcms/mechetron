"use client";
import { useState } from "react";

interface AccordionItem {
  title: string;
  body: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-brand-blue/10 rounded-xl overflow-hidden border border-brand-blue/10 shadow-sm bg-white">
      {items.map((item, i) => (
        <div key={i} className="transition-colors group outline-none">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={`w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 text-left transition-all ${
              open === i ? "bg-brand-blue/[0.03]" : "hover:bg-brand-blue/[0.01]"
            }`}
            aria-expanded={open === i}
          >
            <span className="font-display font-semibold text-brand-ink transition-colors flex items-center">
              <span className="text-brand-blue mr-4 font-mono text-xs opacity-60">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.title}
            </span>
            <span
              className={`text-brand-blue flex-shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </button>

          <div
            className={`transition-all duration-300 ease-in-out ${
              open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className={`px-6 md:px-20 pb-6 text-sm text-brand-body leading-relaxed max-w-2xl`}>
              {item.body}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
