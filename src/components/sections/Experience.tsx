import { companyIntro, strengths } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Experience() {
  return (
    <section className="relative overflow-hidden bg-brand py-16 text-white lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-cobalt/30 blur-3xl"
      />
      <Container className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="Experience"
            title="Project execution and support"
            description="Engineering leadership, commissioning and maintenance capabilities documented in the company profile."
            className="[&_h2]:text-white [&_p]:text-white/80 [&_span]:text-turquoise"
          />
        </Reveal>
        <div className="space-y-8 lg:col-span-7">
          <ul className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item, index) => (
              <li key={item}>
                <Reveal delay={index * 70}>
                  <div className="card-lift h-full border border-white/15 bg-white/10 p-5 text-sm leading-relaxed text-white/90">
                    {item}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={200}>
            <p className="text-sm leading-relaxed text-white/75">
              {companyIntro.paragraphs[3]}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
