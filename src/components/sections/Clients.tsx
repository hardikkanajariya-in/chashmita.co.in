import Link from "next/link";
import {
  clientGroups,
  customerHighlights,
  consultantApprovals,
} from "@/data/clients";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function ClientsSection() {
  return (
    <section className="border-t border-border bg-surface py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Clients"
            title="Customers and consultants"
            description="Representative approvals and customers from the about page, with sector-wise lists documented on the customer list page."
          />
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal delay={80}>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                Consultant approvals
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {consultantApprovals.map((name) => (
                  <li
                    key={name}
                    className="bg-white px-3 py-1.5 text-sm text-ink ring-1 ring-border transition hover:ring-cobalt/40"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                Customers referenced in profile
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {customerHighlights.map((name) => (
                  <li
                    key={name}
                    className="bg-white px-3 py-1.5 text-sm text-ink ring-1 ring-border transition hover:ring-cobalt/40"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="mt-8 text-sm text-ink-muted">
            {clientGroups.length} industry groupings with detailed customer and
            consultant names are listed on the{" "}
            <Link
              href="/clients/"
              className="font-semibold text-cobalt underline-offset-2 hover:text-brand hover:underline"
            >
              clients page
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
