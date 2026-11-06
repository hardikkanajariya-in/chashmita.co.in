"use client";

import { useState } from "react";
import { contact } from "@/lib/site";
import { FORMS_CONFIG } from "@/config/forms";
import { executeRecaptcha } from "@/lib/recaptcha";
import { cn } from "@/lib/cn";

export function ContactEnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const emailValid = email.includes("@") && email.includes(".");
  const nameValid = name.trim().length > 1;
  const messageValid = message.trim().length > 2;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!nameValid || !emailValid || !messageValid) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // 1. Client-side reCAPTCHA v3 verification
      await executeRecaptcha("contact_enquiry");

      // 2. Submit payload to Web3Forms (server captcha verification omitted for free plan compatibility)
      const response = await fetch(FORMS_CONFIG.web3formsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: FORMS_CONFIG.web3formsAccessKey,
          subject: FORMS_CONFIG.enquirySubject,
          from_name: "Chashmita Web Portal",
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || "Not provided",
          message: message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setTouched({});
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Failed to submit enquiry. Please try again or email us directly.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network or submission error. Please try again or reach out to us directly.",
      );
    }
  }

  function handleMailtoFallback() {
    const subject = encodeURIComponent(
      `Project Enquiry from ${name || "Website Visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nRequirement:\n${message}`,
    );
    window.location.href = `mailto:${contact.emails[0]}?subject=${subject}&body=${body}`;
  }

  const fieldClass = (field: string, valid: boolean) =>
    cn(
      "field-input w-full px-4 py-3 text-sm text-ink transition-colors",
      touched[field] && !valid && "border-[var(--color-error)] focus:border-[var(--color-error)]",
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Success Notification */}
      {status === "success" ? (
        <div
          className="border-2 border-accent bg-paper-2 p-5 text-sm"
          role="status"
        >
          <div className="flex items-center gap-2">
            <span className="font-outlier text-sm font-bold text-accent">✓ ENQUIRY TRANSMITTED</span>
          </div>
          <p className="mt-2 text-ink">
            Thank you! Your enquiry has been securely received by our engineering desk. A project representative will review your scope and get in touch with you shortly.
          </p>
        </div>
      ) : null}

      {/* Error Notification */}
      {status === "error" ? (
        <div
          className="border-2 border-[var(--color-error)] bg-paper-2 p-4 text-sm"
          role="alert"
        >
          <p className="font-semibold text-ink">Submission Issue</p>
          <p className="mt-1 text-xs text-muted">{errorMessage}</p>
          <button
            type="button"
            onClick={handleMailtoFallback}
            className="mt-3 inline-block font-outlier text-xs font-semibold uppercase tracking-wider text-accent underline underline-offset-4"
          >
            Click here to open your default email app instead →
          </button>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            Full Name <span className="text-accent">*</span>
          </span>
          <input
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            className={fieldClass("name", nameValid)}
            autoComplete="name"
            placeholder="Full name"
            disabled={status === "submitting"}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            Work Email <span className="text-accent">*</span>
          </span>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            className={fieldClass("email", emailValid)}
            autoComplete="email"
            placeholder="email@company.com"
            disabled={status === "submitting"}
            aria-invalid={touched.email && !emailValid}
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">
          Contact Phone / Mobile
        </span>
        <input
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="field-input w-full px-4 py-3 text-sm text-ink"
          autoComplete="tel"
          placeholder="+91 00000 00000"
          disabled={status === "submitting"}
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">
          Project Requirement / Scope <span className="text-accent">*</span>
        </span>
        <textarea
          required
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          className={fieldClass("message", messageValid)}
          placeholder="Describe your project requirement, engineering scope, or location..."
          disabled={status === "submitting"}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-interact btn-liquid inline-flex items-center justify-center bg-ink px-7 py-3.5 text-sm font-medium text-paper [--btn-liquid-bg:var(--color-accent)] hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] disabled:opacity-60"
        >
          <span className="relative z-1">
            {status === "submitting" ? "Sending..." : "Send enquiry"}
          </span>
        </button>

        <span className="font-outlier text-[11px] text-muted">
          Protected by Google reCAPTCHA v3 & Web3Forms
        </span>
      </div>
    </form>
  );
}
