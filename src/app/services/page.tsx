import { areasOfOperation, coreCapabilities } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Turnkey engineering services and areas of operation for electrical, lighting, communication and security systems.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Turnkey engineering and system integration"
        description="Design through commissioning and maintenance — aligned with the company profile and areas of operation."
      />
      <section className="border-b border-border bg-ivory py-14 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Execution scope"
            title="Core capabilities"
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {coreCapabilities.map((item) => (
              <li
                key={item.title}
                className="border border-border bg-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-graphite">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="py-14 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Areas of operation"
            title="Systems and solutions"
            description="As listed on the company areas-of-operation page."
          />
          <ul className="mt-10 columns-1 gap-8 text-sm leading-relaxed text-muted sm:columns-2 lg:columns-3">
            {areasOfOperation.map((area) => (
              <li key={area} className="mb-3 break-inside-avoid pl-4">
                <span className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:bg-copper">
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
