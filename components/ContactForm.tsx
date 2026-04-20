"use client";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  role: string;
  message: string;
};

type FormErrors = Partial<FormData>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address.";
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^[+\d\s\-()]{7,15}$/.test(data.phone)) errors.phone = "Enter a valid phone number.";
  if (!data.message.trim()) errors.message = "Please tell us how we can help.";
  return errors;
}

const inputBase =
  "w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue/30";
const inputNormal = `${inputBase} border-black/10 focus:border-brand-blue/40`;
const inputError  = `${inputBase} border-brand-alert/50 bg-brand-alert/5 focus:border-brand-alert/60 focus:ring-brand-alert/20`;

export default function ContactForm() {
  const [data, setData] = useState<FormData>({
    name: "", email: "", phone: "", role: "I am a Student / Parent", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setData((d) => ({ ...d, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!id) throw new Error("Formspree ID not configured");
      const res = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _subject: `Contact Enquiry from ${data.name}` }),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setSent(true);
    } catch (err) {
      setErrors({ message: "Failed to send. Please try again or contact us via WhatsApp." });
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="card flex flex-col items-center justify-center py-12 gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-success/10 flex items-center justify-center text-3xl">✅</div>
        <h3 className="font-display font-semibold text-brand-ink text-lg">Message Sent!</h3>
        <p className="text-sm text-brand-muted max-w-xs">
          Thanks for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSent(false); setData({ name: "", email: "", phone: "", role: "I am a Student / Parent", message: "" }); }}
          className="btn-outline text-sm mt-2"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-xs font-medium text-brand-ink/70">
            Full Name <span className="text-brand-alert">*</span>
          </label>
          <input
            id="cf-name"
            value={data.name}
            onChange={set("name")}
            placeholder="Ravi Kumar"
            className={errors.name ? inputError : inputNormal}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
          />
          {errors.name && <p id="cf-name-err" className="text-xs text-brand-alert">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className="text-xs font-medium text-brand-ink/70">
            Email <span className="text-brand-alert">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            value={data.email}
            onChange={set("email")}
            placeholder="ravi@example.com"
            className={errors.email ? inputError : inputNormal}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
          />
          {errors.email && <p id="cf-email-err" className="text-xs text-brand-alert">{errors.email}</p>}
        </div>
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-phone" className="text-xs font-medium text-brand-ink/70">
          Phone / WhatsApp <span className="text-brand-alert">*</span>
        </label>
        <input
          id="cf-phone"
          value={data.phone}
          onChange={set("phone")}
          placeholder="+91 98765 43210"
          className={errors.phone ? inputError : inputNormal}
          aria-describedby={errors.phone ? "cf-phone-err" : undefined}
        />
        {errors.phone && <p id="cf-phone-err" className="text-xs text-brand-alert">{errors.phone}</p>}
      </div>

      {/* Role */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-role" className="text-xs font-medium text-brand-ink/70">
          I am a
        </label>
        <select
          id="cf-role"
          value={data.role}
          onChange={set("role")}
          className={inputNormal}
        >
          <option>I am a Student / Parent</option>
          <option>I represent a School</option>
          <option>I am an Engineering Student</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-xs font-medium text-brand-ink/70">
          How can we help? <span className="text-brand-alert">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={4}
          value={data.message}
          onChange={set("message")}
          placeholder="Tell us about your interest, batch preference, or any questions…"
          className={errors.message ? inputError : inputNormal}
          aria-describedby={errors.message ? "cf-msg-err" : undefined}
        />
        {errors.message && <p id="cf-msg-err" className="text-xs text-brand-alert">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
            </svg>
            Sending…
          </span>
        ) : "Send Inquiry"}
      </button>
    </form>
  );
}
