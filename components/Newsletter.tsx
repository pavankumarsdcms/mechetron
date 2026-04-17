"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      const res = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "Newsletter Signup", list: "Newsletter" }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-brand-blue relative overflow-hidden py-16">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg fill="none" viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="newsletter-bg" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" stroke="white" strokeWidth="0.5" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#newsletter-bg)" />
        </svg>
      </div>

      <div className="container-x relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left text-white max-w-xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Stay Ahead in Tech</h2>
          <p className="text-white/80 text-lg">
            Join 5,000+ parents and students receiving weekly STEM tips, competition updates, and exclusive workshop discounts.
          </p>
        </div>

        <div className="w-full max-w-md">
          {status === "success" ? (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white text-center border border-white/20">
              <div className="text-3xl mb-2">🎉</div>
              <h3 className="text-xl font-bold">You're on the list!</h3>
              <p className="text-white/70 mt-1">Check your inbox for our latest STEM guide.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-xl bg-white text-brand-ink outline-none focus:ring-2 focus:ring-white/50 border-none shadow-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-brand-ink text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-ink/90 transition-all shadow-xl disabled:opacity-50"
              >
                {status === "loading" ? "Joining..." : "Subscribe"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="text-white font-medium mt-3 text-sm text-center">Something went wrong. Please try again.</p>
          )}
          <p className="text-white/50 text-[10px] uppercase tracking-widest text-center mt-4">
            Zero spam • Unsubscribe anytime • Proudly STEM-focused
          </p>
        </div>
      </div>
    </section>
  );
}
