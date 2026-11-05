import Link from "next/link";
import { clientGroups, customerHighlights, consultantApprovals } from "@/data/clients";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ClientsSection() {
  return (
    <section className="border-t border-border bg-ivory py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Clients"
          title="Customers and consultants"
          description="Representative approvals and customers from the about page, with sector-wise lists documented on the customer list page."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-graphite">
              Consultant approvals
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {consultantApprovals.map((name) => (
                <li
                  key={name}
                  className="bg-white px-3 py-1.5 text-sm text-graphite ring-1 ring-border"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-graphite">
              Customers referenced in profile
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {customerHighlights.map((name) => (
                <li
                  key={name}
                  className="bg-white px-3 py-1.5 text-sm text-graphite ring-1 ring-border"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-sm text-muted">
          {clientGroups.length} industry groupings with detailed customer and
          consultant names are listed on the{" "}
          <Link href="/clients/" className="font-semibold text-navy underline-offset-2 hover:underline">
            clients page
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
