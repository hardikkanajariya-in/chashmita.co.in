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
    <section className="section-pad border-t border-ink bg-paper">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Customers and consultants"
            title="Approvals and references"
            description="Representative approvals and customers from the about page, with sector-wise lists documented on the customer list page."
          />
        </Reveal>
        <div className="mt-10 grid min-w-0 gap-10 lg:grid-cols-2">
          <Reveal delay={70}>
            <div className="min-w-0">
              <h3 className="font-display text-title text-ink">
                Consultant approvals
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {consultantApprovals.map((name) => (
                  <li
                    key={name}
                    className="border border-ink bg-plate px-3 py-1.5 text-sm text-ink"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="min-w-0">
              <h3 className="font-display text-title text-ink">
                Customers referenced in profile
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {customerHighlights.map((name) => (
                  <li
                    key={name}
                    className="border border-ink bg-plate px-3 py-1.5 text-sm text-ink"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <p className="mt-8 text-sm text-muted">
            {clientGroups.length} industry groupings with detailed customer and
            consultant names are listed on the{" "}
            <Link
              href="/clients/"
              className="font-medium text-ink underline decoration-accent underline-offset-[0.2em]"
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
