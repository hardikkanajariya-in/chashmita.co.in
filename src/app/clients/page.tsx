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
        eyebrow="Clients"
        title="Customers and consultants"
        description="Names reproduced from the customer list and about pages of the original site."
      />
      <section className="border-b border-border bg-ivory py-12">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-lg font-semibold text-graphite">
              Consultant approvals (about page)
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {consultantApprovals.map((name) => (
                <li
                  key={name}
                  className="bg-white px-3 py-1.5 text-sm ring-1 ring-border"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-graphite">
              Customers referenced in profile
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {customerHighlights.map((name) => (
                <li
                  key={name}
                  className="bg-white px-3 py-1.5 text-sm ring-1 ring-border"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="py-14 lg:py-20">
        <Container className="space-y-12">
          {clientGroups.map((group) => (
            <div key={group.id} id={group.id}>
              <h2 className="font-display text-xl font-semibold text-graphite">
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
