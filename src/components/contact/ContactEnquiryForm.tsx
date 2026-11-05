"use client";

import { useState } from "react";
import { contact } from "@/lib/site";
import { cn } from "@/lib/cn";
import { CtaArrow } from "@/components/ui/ButtonLink";

/**
 * Static-hosting enquiry form. Submits via mailto (no server required).
 * For hosted form endpoints (Formspree, Netlify Forms, etc.), replace handleSubmit
 * with a POST to your configured endpoint.
 */
export function ContactEnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(
      `Enquiry from ${name || "website visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    );
    const mailto = `mailto:${contact.emails[0]}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  }

  const fieldClass = (field: string, valid: boolean) =>
    cn(
      "field-input w-full bg-white px-4 py-3 text-sm text-ink",
      touched[field] && !valid && "border-red-600",
    );

  const emailValid = email.includes("@") && email.includes(".");

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {submitted ? (
        <p
          className="border border-turquoise/40 bg-surface-alt px-4 py-3 text-sm text-ink"
          role="status"
        >
          Opening your email client to send the enquiry to {contact.emails[0]}.
          If it did not open, email us directly.
        </p>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Name</span>
          <input
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            className={fieldClass("name", name.trim().length > 0)}
            autoComplete="name"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Email</span>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            className={fieldClass("email", emailValid)}
            autoComplete="email"
            aria-invalid={touched.email && !emailValid}
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">Phone</span>
        <input
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="field-input w-full bg-white px-4 py-3 text-sm text-ink"
          autoComplete="tel"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">Requirement</span>
        <textarea
          required
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          className={fieldClass("message", message.trim().length > 0)}
        />
      </label>
      <button
        type="submit"
        className="group inline-flex items-center gap-2 bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1e4a6b] active:scale-[0.98]"
      >
        Send enquiry
        <CtaArrow className="text-white" />
      </button>
    </form>
  );
}
