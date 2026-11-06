import { FORMS_CONFIG } from "@/config/forms";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

let scriptLoadingPromise: Promise<void> | null = null;

function loadRecaptchaScript(siteKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.grecaptcha) {
    return Promise.resolve();
  }

  if (scriptLoadingPromise) {
    return scriptLoadingPromise;
  }

  scriptLoadingPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(
      `script[src*="google.com/recaptcha/api.js"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("reCAPTCHA script failed to load")));
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google reCAPTCHA v3"));
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
}

/**
 * Execute client-side Google reCAPTCHA v3 token generation.
 * If the key is the default placeholder or not set, client-side validation passes gracefully.
 */
export async function executeRecaptcha(action: string): Promise<string | null> {
  const siteKey = FORMS_CONFIG.recaptchaSiteKey;

  // If site key is placeholder or empty, skip client token generation without failing
  if (!siteKey || siteKey.startsWith("YOUR_")) {
    return null;
  }

  try {
    await loadRecaptchaScript(siteKey);

    return await new Promise<string | null>((resolve) => {
      if (!window.grecaptcha) {
        resolve(null);
        return;
      }

      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha!.execute(siteKey, { action });
          resolve(token);
        } catch {
          resolve(null);
        }
      });
    });
  } catch {
    return null;
  }
}

