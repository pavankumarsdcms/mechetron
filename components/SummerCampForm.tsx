"use client";
import { useState } from "react";
import { summerCamp } from "@/lib/data";

export default function SummerCampForm() {
  const [data, setData] = useState({
    name: "",
    parentName: "",
    email: "",
    phone: "",
    city: summerCamp.locations[0].name,
    batch: summerCamp.batches[0].name,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!id) throw new Error("Formspree ID not configured");
      const res = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _subject: `Summer Camp Registration — ${data.city} — ${data.batch}` }),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
    } catch (err) {
      setError("Registration failed. Please try WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="card-glass-white p-8 text-center border-2 border-brand-success/20">
        <div className="text-4xl mb-4">🚀</div>
        <h3 className="text-2xl font-display font-bold text-brand-ink">Form Received!</h3>
        <p className="text-brand-muted mt-2">Check your WhatsApp/Email soon for confirmation details and payment links.</p>
        <button 
          onClick={() => setSent(false)} 
          className="btn-outline mt-6"
        >
          Register Another Student
        </button>
      </div>
    );
  }

  return (
    <div id="register" className="card-glass-white border border-brand-blue/10 p-8 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue" />
      <h3 className="text-2xl font-display font-bold text-brand-ink mb-2">Advance Registration</h3>
      <p className="text-sm text-brand-muted mb-8 text-balance">Fill this form to block your seat. No immediate payment required.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="sc-name" className="text-[10px] uppercase font-bold text-brand-muted tracking-wider">Student Name</label>
            <input
              id="sc-name"
              type="text"
              required
              className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl outline-none focus:border-brand-blue/40"
              placeholder="Full Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="sc-parent" className="text-[10px] uppercase font-bold text-brand-muted tracking-wider">Parent/Guardian Name</label>
            <input
              id="sc-parent"
              type="text"
              required
              className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl outline-none focus:border-brand-blue/40"
              placeholder="Name"
              value={data.parentName}
              onChange={(e) => setData({ ...data, parentName: e.target.value })}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="sc-email" className="text-[10px] uppercase font-bold text-brand-muted tracking-wider">Email Address</label>
            <input
              id="sc-email"
              type="email"
              required
              className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl outline-none focus:border-brand-blue/40"
              placeholder="email@example.com"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="sc-phone" className="text-[10px] uppercase font-bold text-brand-muted tracking-wider">WhatsApp Number</label>
            <input
              id="sc-phone"
              type="tel"
              required
              className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl outline-none focus:border-brand-blue/40"
              placeholder="+91"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="sc-city" className="text-[10px] uppercase font-bold text-brand-muted tracking-wider">Select Location</label>
            <select
              id="sc-city"
              className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl outline-none focus:border-brand-blue/40"
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
            >
              {summerCamp.locations.map((loc) => (
                <option key={loc.name} value={loc.name}>{loc.name}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label htmlFor="sc-batch" className="text-[10px] uppercase font-bold text-brand-muted tracking-wider">Select Batch</label>
            <select
              id="sc-batch"
              className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl outline-none focus:border-brand-blue/40"
              value={data.batch}
              onChange={(e) => setData({ ...data, batch: e.target.value })}
            >
              {summerCamp.batches.map((batch) => (
                <option key={batch.id} value={batch.name}>{batch.name} ({batch.dates})</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="sc-message" className="text-[10px] uppercase font-bold text-brand-muted tracking-wider">Any Questions / Requests?</label>
          <textarea
            id="sc-message"
            rows={2}
            className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl outline-none focus:border-brand-blue/40 resize-none"
            placeholder="E.g. Group joining, specific queries..."
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center py-4 text-base shadow-glow mt-4"
        >
          {loading ? "Processing..." : "Block My Seat Now →"}
        </button>
        {error && <p className="text-xs text-brand-alert text-center mt-2">{error}</p>}
        <p className="text-[10px] text-center text-brand-muted uppercase tracking-widest mt-4">
          🔒 Secure Registration • Certified by Mech-ε-Tron
        </p>
      </form>
    </div>
  );
}
