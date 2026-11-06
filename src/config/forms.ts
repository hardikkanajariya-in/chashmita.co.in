/**
 * Central Form Configuration & Service Keys
 * 
 * Replace placeholder strings with your actual keys below,
 * or configure NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY and NEXT_PUBLIC_RECAPTCHA_SITE_KEY in .env
 */
export const FORMS_CONFIG = {
  // Web3Forms Access Key
  web3formsAccessKey:
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY",

  // Google reCAPTCHA v3 Public Site Key
  recaptchaSiteKey:
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "YOUR_RECAPTCHA_V3_SITE_KEY",

  // Endpoints
  web3formsEndpoint: "https://api.web3forms.com/submit",

  // Form submission subjects
  enquirySubject: "New Project Enquiry from Chashmita Engineers Website",
  careerSubject: "New Career Application from Chashmita Engineers Website",

  // Email fallbacks
  contactEmail: "info@chashmita.com",
  careersEmail: "jobs@chashmita.com",
} as const;

