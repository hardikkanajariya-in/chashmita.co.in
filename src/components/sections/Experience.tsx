import { companyIntro, strengths } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Experience() {
  return (
    <section className="band-ink section-pad">
      <Container className="grid min-w-0 gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="min-w-0 lg:col-span-5">
          <SectionHeading
            kicker="Execution and service"
            title="Project delivery"
            description="Engineering leadership, commissioning and maintenance capabilities documented in the company profile."
            inverted
          />
        </Reveal>
        <div className="min-w-0 space-y-8 lg:col-span-7">
          <ol className="grid min-w-0 gap-4 sm:grid-cols-2">
            {strengths.map((item, index) => (
              <li key={item}>
                <Reveal delay={index * 60}>
                  <div className="spec-card h-full p-5 text-sm leading-relaxed text-ink">
                    <span className="font-outlier text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-ink">{item}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal delay={180}>
            <p className="text-sm leading-relaxed text-paper/90">
              {companyIntro.paragraphs[3]}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
