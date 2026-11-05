import { companyIntro } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Company background, leadership and service capabilities of Chashmita Engineers Pvt. Ltd.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Engineering company profile"
        description={`Established in ${companyIntro.established}. ${companyIntro.summary}`}
      />
      <section className="section-pad">
        <Container className="max-w-3xl space-y-6 text-base leading-relaxed text-muted">
          {companyIntro.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Container>
      </section>
    </>
  );
}
