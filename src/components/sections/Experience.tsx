import { companyIntro, strengths } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section className="bg-graphite py-16 text-ivory lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Experience"
            title="Project execution and support"
            description="Engineering leadership, commissioning and maintenance capabilities documented in the company profile."
            className="[&_h2]:text-ivory [&_p]:text-ivory/75 [&_span]:text-copper"
          />
        </div>
        <div className="space-y-8 lg:col-span-7">
          <ul className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <li
                key={item}
                className="border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-ivory/85"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-ivory/70">
            {companyIntro.paragraphs[3]}
          </p>
        </div>
      </Container>
    </section>
  );
}
