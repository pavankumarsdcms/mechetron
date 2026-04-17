"use client";
import { useState } from "react";

interface Props {
  courseName: string;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

const inputCls = "w-full px-4 py-2 text-sm border border-black/10 rounded-lg outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/20 transition-colors";

export default function CourseEnquiryForm({ courseName }: Props) {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: courseName,
    message: `Hi, I'm interested in the ${courseName} course.`,
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData((d) => ({ ...d, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      const res = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _subject: `Course Enquiry: ${courseName}` }),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
    } catch {
      setError("Failed to send enquiry. Please try WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="p-6 rounded-xl bg-brand-success/5 border border-brand-success/20 text-center">
        <div className="text-2xl mb-2">✅</div>
        <h4 className="font-bold text-brand-ink">Enquiry Sent!</h4>
        <p className="text-xs text-brand-muted mt-1">We'll contact you soon.</p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-card bg-white border border-brand-blue/10 shadow-card">
      <h3 className="text-lg font-display font-bold text-brand-ink mb-4">Quick Enquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex flex-col gap-1.5">
          <label htmlFor="ceq-name" className="text-xs font-medium text-brand-ink/70">Name <span className="text-brand-alert">*</span></label>
          <input id="ceq-name" type="text" required placeholder="Your name" className={inputCls} value={data.name} onChange={set("name")} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="ceq-email" className="text-xs font-medium text-brand-ink/70">Email <span className="text-brand-alert">*</span></label>
          <input id="ceq-email" type="email" required placeholder="you@example.com" className={inputCls} value={data.email} onChange={set("email")} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="ceq-phone" className="text-xs font-medium text-brand-ink/70">Phone <span className="text-brand-alert">*</span></label>
          <input id="ceq-phone" type="tel" required placeholder="+91 98765 43210" className={inputCls} value={data.phone} onChange={set("phone")} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="ceq-message" className="text-xs font-medium text-brand-ink/70">Message</label>
          <textarea id="ceq-message" rows={3} placeholder="Any questions?" className={`${inputCls} resize-none`} value={data.message} onChange={set("message")} />
        </div>

        {error && <p className="text-xs text-brand-alert text-center">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-2 text-sm disabled:opacity-70">
          {loading ? "Sending…" : "Send Enquiry"}
        </button>
      </form>
    </div>
  );
}
