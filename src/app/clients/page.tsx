import {
  clientGroups,
  consultantApprovals,
  customerHighlights,
} from "@/data/clients";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Clients",
  description:
    "Sector-wise customers, approved EPC contractors, and engineering consultants from the published Chashmita Engineers customer list.",
  path: "/clients/",
});

export default function ClientsPage() {
  const totalOrganizations = clientGroups.reduce(
    (acc, group) => acc + group.names.length,
    0,
  );

  return (
    <>
      <PageHero
        kicker="Customer & Consultant List"
        title="Customers and consultants"
        description="Government organizations, public sector undertakings, industrial enterprises, and approved consultants from our customer list."
      />

      {/* Stats Summary Strip */}
      <section className="border-b border-ink bg-paper-2 py-6">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Documented Clients
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                {totalOrganizations}+ Entities
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Industry Sectors
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                {clientGroups.length} Sectors
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Consultant Approvals
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                {consultantApprovals.length} Approved Agencies
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Government & PSUs
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                Gujarat & Pan-India
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Clients & Consultant Approvals Showcase */}
      <section className="border-b border-ink bg-plate py-10 lg:py-14">
        <Container className="space-y-10">
          {/* Key Customer Highlights */}
          <Reveal>
            <div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                    Customer Highlights
                  </span>
                  <h2 className="mt-1 font-display text-2xl text-ink">
                    Key Customers
                  </h2>
                </div>
                <span className="font-outlier text-xs text-muted">
                  Industrial & Government Undertakings
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                {customerHighlights.map((client) => (
                  <span
                    key={client}
                    className="spec-card inline-flex items-center px-4 py-2.5 font-outlier text-sm font-semibold tracking-wide text-ink transition-all duration-[var(--dur-short)] hover:shadow-[6px_6px_0_var(--color-ink)]"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Consultant Approvals */}
          <Reveal delay={100}>
            <div className="border-t border-rule pt-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                    Consultant Approvals
                  </span>
                  <h2 className="mt-1 font-display text-2xl text-ink">
                    Approved Consultants
                  </h2>
                </div>
                <span className="font-outlier text-xs text-muted">
                  Empanelled Engineering & Inspection Agencies
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                {consultantApprovals.map((consultant) => (
                  <span
                    key={consultant}
                    className="border border-ink bg-paper-2 px-4 py-2 font-outlier text-xs font-medium text-ink/90 transition-colors duration-[var(--dur-short)] hover:bg-ink hover:text-paper"
                  >
                    ✓ {consultant}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Sector Navigation Strip */}
      <section className="sticky top-[57px] z-10 border-b border-ink bg-paper/95 backdrop-blur-xs py-3">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="shrink-0 font-outlier text-xs font-semibold uppercase text-accent pr-2">
              Sectors:
            </span>
            {clientGroups.map((group) => (
              <a
                key={group.id}
                href={`#sector-${group.id}`}
                className="shrink-0 border border-rule bg-plate px-3 py-1 font-outlier text-xs text-muted transition-colors duration-[var(--dur-short)] hover:border-ink hover:text-ink active:bg-paper-2"
              >
                {group.sector.replace(" sector", "").replace(" industry", "")}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* All Sectors Detailed Grid */}
      <section className="section-pad bg-paper">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clientGroups.map((group, index) => (
              <Reveal key={group.id} delay={(index % 3) * 80}>
                <article
                  id={`sector-${group.id}`}
                  className="spec-card flex h-full flex-col justify-between p-6 sm:p-7 scroll-mt-28 transition-shadow duration-[var(--dur-short)] hover:shadow-[14px_14px_0_var(--color-ink)]"
                >
                  <div>
                    {/* Sector Header */}
                    <div className="flex items-center justify-between border-b border-rule pb-3.5">
                      <h3 className="font-display text-lg font-bold text-ink">
                        {group.sector}
                      </h3>
                      <span className="border border-ink/15 bg-paper px-2 py-0.5 font-outlier text-xs text-muted">
                        {group.names.length} Orgs
                      </span>
                    </div>

                    {/* Organization Names List */}
                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                      {group.names.map((name) => (
                        <li
                          key={name}
                          className="group flex items-start gap-2.5 transition-colors duration-[var(--dur-micro)] hover:text-ink"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-rule transition-colors duration-[var(--dur-micro)] group-hover:bg-accent"
                          />
                          <span className="min-w-0">{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Project Experience Notice */}
          <Reveal delay={150} className="mt-14">
            <div className="border border-ink bg-paper-2 p-6 sm:p-8">
              <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                Customer Listing Note
              </span>
              <p className="mt-2 max-w-4xl text-sm leading-relaxed text-muted">
                Names listed reflect project executions, supply contracts, or
                consultant approvals documented in the company records.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
