import { ContactEnquiryForm } from "@/components/contact/ContactEnquiryForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { contact } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Chashmita Engineers Pvt. Ltd. in Vadodara (Baroda) for engineering enquiries.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Office and enquiries"
        description="Details verified from the published contact page of the prior website."
      />
      <section className="section-pad">
        <Container className="grid min-w-0 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <h2 className="font-display text-title text-ink">
              {contact.company}
            </h2>
            <address className="mt-4 space-y-4 text-sm not-italic leading-relaxed text-muted">
              <p>
                {contact.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <div>
                <p className="font-medium text-ink">Phone</p>
                {contact.phoneDisplay.map((phone) => (
                  <p key={phone}>{phone}</p>
                ))}
              </div>
              <div>
                <p className="font-medium text-ink">Fax</p>
                <p>+91 {contact.fax}</p>
              </div>
              <div>
                <p className="font-medium text-ink">Email</p>
                {contact.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-ink underline decoration-rule underline-offset-[0.2em] hover:decoration-accent"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </address>
          </div>
          <div className="spec-card p-8 lg:col-span-7 lg:p-10">
            <h2 className="font-display text-title text-ink">
              Send an enquiry
            </h2>
            <p className="mt-2 text-sm text-muted">
              This form opens your email client addressed to{" "}
              {contact.emails[0]}, suitable for static hosting without a
              backend.
            </p>
            <div className="mt-8">
              <ContactEnquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
