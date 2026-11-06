"use client";

import { useState } from "react";
import { FORMS_CONFIG } from "@/config/forms";
import { executeRecaptcha } from "@/lib/recaptcha";
import { cn } from "@/lib/cn";

export function CareersApplicationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [areaOfExperience, setAreaOfExperience] = useState("");
  const [pastExperience, setPastExperience] = useState("");
  const [remark, setRemark] = useState("");

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const emailValid = email.includes("@") && email.includes(".");
  const firstNameValid = firstName.trim().length > 0;
  const lastNameValid = lastName.trim().length > 0;
  const contactNoValid = contactNo.trim().length > 5;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      contactNo: true,
      areaOfExperience: true,
    });

    if (!firstNameValid || !lastNameValid || !emailValid || !contactNoValid) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // 1. Client-side reCAPTCHA v3 verification
      await executeRecaptcha("career_application");

      // 2. Submit payload to Web3Forms (server captcha verification omitted for free plan compatibility)
      const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
      const response = await fetch(FORMS_CONFIG.web3formsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: FORMS_CONFIG.web3formsAccessKey,
          subject: `${FORMS_CONFIG.careerSubject} - ${fullName}`,
          from_name: "Chashmita Careers Portal",
          name: fullName,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: contactNo.trim(),
          area_of_experience: areaOfExperience.trim() || "General Engineering",
          past_experience: pastExperience.trim() || "Not specified",
          remark: remark.trim() || "No additional remarks",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setContactNo("");
        setEmail("");
        setAreaOfExperience("");
        setPastExperience("");
        setRemark("");
        setTouched({});
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Unable to send your application. Please email your CV directly.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network connection error. You can email your CV directly to jobs@chashmita.com.",
      );
    }
  }

  function handleMailtoFallback() {
    const fullName = `${firstName} ${lastName}`.trim() || "Candidate";
    const subject = encodeURIComponent(`Career Application - ${fullName}`);
    const body = encodeURIComponent(
      `Candidate Name: ${fullName}\nContact No: ${contactNo}\nEmail ID: ${email}\nArea of Experience: ${areaOfExperience}\nPast Experience: ${pastExperience}\n\nRemarks:\n${remark}`,
    );
    window.location.href = `mailto:${FORMS_CONFIG.careersEmail}?subject=${subject}&body=${body}`;
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
            <span className="font-outlier text-sm font-bold text-accent">✓ APPLICATION LODGED</span>
          </div>
          <p className="mt-2 text-ink">
            Thank you! Your application details have been received by our HR & Technical Management desk. We will review your profile against active project mandates.
          </p>
        </div>
      ) : null}

      {/* Error Notification */}
      {status === "error" ? (
        <div
          className="border-2 border-[var(--color-error)] bg-paper-2 p-4 text-sm"
          role="alert"
        >
          <p className="font-semibold text-ink">Transmission Issue</p>
          <p className="mt-1 text-xs text-muted">{errorMessage}</p>
          <button
            type="button"
            onClick={handleMailtoFallback}
            className="mt-3 inline-block font-outlier text-xs font-semibold uppercase tracking-wider text-accent underline underline-offset-4"
          >
            Click here to email your resume directly to jobs@chashmita.com →
          </button>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            First Name <span className="text-accent">*</span>
          </span>
          <input
            required
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
            className={fieldClass("firstName", firstNameValid)}
            placeholder="First name"
            disabled={status === "submitting"}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            Last Name <span className="text-accent">*</span>
          </span>
          <input
            required
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, lastName: true }))}
            className={fieldClass("lastName", lastNameValid)}
            placeholder="Last name"
            disabled={status === "submitting"}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            Contact Number <span className="text-accent">*</span>
          </span>
          <input
            required
            type="tel"
            name="contactNo"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, contactNo: true }))}
            className={fieldClass("contactNo", contactNoValid)}
            placeholder="+91 00000 00000"
            disabled={status === "submitting"}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            E-mail ID <span className="text-accent">*</span>
          </span>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            className={fieldClass("email", emailValid)}
            placeholder="email@example.com"
            disabled={status === "submitting"}
            aria-invalid={touched.email && !emailValid}
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">
          Area of Experience / Primary Discipline
        </span>
        <select
          name="areaOfExperience"
          value={areaOfExperience}
          onChange={(e) => setAreaOfExperience(e.target.value)}
          className="field-input w-full px-4 py-3 text-sm text-ink"
          disabled={status === "submitting"}
        >
          <option value="">Select your engineering field</option>
          <option value="Turnkey Electrical Projects">Turnkey Electrical Projects & Substation EPC</option>
          <option value="Industrial Communication & PA Systems">Industrial Communication & PA / Intercom Systems</option>
          <option value="CCTV & Industrial Surveillance">CCTV & Integrated Security Systems</option>
          <option value="Industrial Lighting & Dialux Automation">Industrial Lighting & Dialux Automation</option>
          <option value="Testing & Commissioning">On-Site Testing, Commissioning & AMC</option>
          <option value="Project Marketing & Tendering">Project Marketing, Tendering & Commercials</option>
          <option value="IT Systems & Hardware Infrastructure">IT Systems & Field Hardware Infrastructure</option>
        </select>
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">
          Past Experience (Years & Past Organizations)
        </span>
        <input
          name="pastExperience"
          value={pastExperience}
          onChange={(e) => setPastExperience(e.target.value)}
          className="field-input w-full px-4 py-3 text-sm text-ink"
          placeholder="e.g. 5 years in industrial electrical EPC"
          disabled={status === "submitting"}
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">
          Remarks / Brief Candidate Summary
        </span>
        <textarea
          name="remark"
          rows={4}
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          className="field-input w-full px-4 py-3 text-sm text-ink"
          placeholder="Qualifications, certifications, current notice period, or notes..."
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
            {status === "submitting" ? "Submitting..." : "Submit application"}
          </span>
        </button>

        <span className="font-outlier text-[11px] text-muted">
          Protected by Google reCAPTCHA v3 & Web3Forms
        </span>
      </div>
    </form>
  );
}

