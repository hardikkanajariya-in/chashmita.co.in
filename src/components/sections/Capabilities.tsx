import { coreCapabilities } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Capabilities() {
  return (
    <section className="border-y border-border bg-ivory py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Engineering scope"
          description="End-to-end execution aligned with the company’s documented turnkey role and areas of operation."
        />
        <ul className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {coreCapabilities.map((item, index) => (
            <li
              key={item.title}
              className="flex flex-col bg-ivory p-6 lg:min-h-[11rem]"
            >
              <span className="font-display text-sm font-semibold text-copper">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-graphite">
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
  );
}
