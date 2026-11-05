import { clientGroups, consultantApprovals, customerHighlights } from "@/data/clients";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Clients",
  description:
    "Sector-wise customers, EPC contractors and consultants from the published company customer list.",
  path: "/clients/",
});

export default function ClientsPage() {
  return (
    <>
      <PageHero
        kicker="Clients"
        title="Customers and consultants"
        description="Names reproduced from the customer list and about pages of the original site."
      />
      <section className="section-pad">
        <Container className="space-y-12">
          {clientGroups.map((group) => (
            <div key={group.id} id={group.id}>
              <h2 className="font-display text-title text-ink">
                {group.sector}
              </h2>
              <ul className="mt-4 columns-1 gap-x-8 text-sm leading-relaxed text-muted sm:columns-2 lg:columns-3">
                {group.names.map((name) => (
                  <li key={name} className="mb-2 break-inside-avoid">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-sm text-muted">
            Names indicate documented project experience at the time of
            publication on the prior website, not an assertion of ongoing
            engagement with every organization listed.
          </p>
        </Container>
      </section>
    </>
  );
}
