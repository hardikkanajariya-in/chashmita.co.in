"use client";

import { useState } from "react";
import { contact } from "@/lib/site";

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    );
    const mailto = `mailto:${contact.emails[0]}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  }

  const fieldClass =
    "w-full border border-border bg-white px-4 py-3 text-sm text-graphite outline-none ring-navy/30 transition focus:ring-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-graphite">Name</span>
          <input
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            autoComplete="name"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-graphite">Email</span>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
            autoComplete="email"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-graphite">Phone</span>
        <input
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={fieldClass}
          autoComplete="tel"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-graphite">Requirement</span>
        <textarea
          required
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={fieldClass}
        />
      </label>
      <button
        type="submit"
        className="inline-flex bg-navy px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-graphite"
      >
        Send enquiry
      </button>
    </form>
  );
}
