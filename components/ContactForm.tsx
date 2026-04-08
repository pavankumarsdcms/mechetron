"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="card space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <input required placeholder="Full name" className="rounded-lg border border-black/10 px-4 py-3 text-sm" />
        <input required type="email" placeholder="Email" className="rounded-lg border border-black/10 px-4 py-3 text-sm" />
      </div>
      <input required placeholder="Phone / WhatsApp" className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm" />
      <select className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm bg-white">
        <option>I am a Student / Parent</option>
        <option>I represent a School</option>
        <option>I am an Engineering Student</option>
      </select>
      <textarea rows={4} placeholder="How can we help?" className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm" />
      <button className="btn-primary w-full">Send Inquiry</button>
      {sent && <p className="text-green-600 text-sm text-center">Thanks! We'll reach out within 24 hours.</p>}
    </form>
  );
}
