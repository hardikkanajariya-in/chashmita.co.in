import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { financialsData } from "@/data/financials";
import { contact } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Financials",
  description:
    "Documented turnover figures, CRISIL financial rating, and statutory incorporation standing of Chashmita Engineers Pvt. Ltd.",
  path: "/financials/",
});

export default function FinancialsPage() {
  return (
    <>
      <PageHero
        kicker="Financial Details"
        title="Financials & rating"
        description="Audited turnover records, CRISIL rating certificate, and statutory details from the company archives."
      />

      {/* KPI Overview Strip */}
      <section className="border-b border-ink bg-paper-2 py-6">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Documented Turnover
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                {financialsData.turnoverInCrores}
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Credit Rating
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                {financialsData.ratingTitle}
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Incorporated Under
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                Companies Act 1956
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Track Record
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                Since 1986
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-pad bg-paper">
        <Container className="space-y-12">
          {/* Audited Turnover Spec Card */}
          <Reveal>
            <div className="spec-card p-6 sm:p-10">
              <div className="flex flex-col gap-2 border-b border-rule pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-outlier text-xs font-semibold uppercase tracking-widest text-accent">
                    Documented Turnover Record
                  </span>
                  <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">
                    Financial Year {financialsData.year}
                  </h2>
                </div>
                <span className="border border-ink bg-plate px-3.5 py-1 font-outlier text-sm font-bold text-ink">
                  OFFICIAL FILING
                </span>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <span className="block font-outlier text-xs uppercase tracking-wider text-muted">
                    Turnover in Numeric Figures
                  </span>
                  <p className="mt-1 font-display text-4xl font-bold text-ink sm:text-5xl">
                    {financialsData.turnoverNumeric}
                  </p>

                  <span className="mt-6 block font-outlier text-xs uppercase tracking-wider text-muted">
                    Verbatim Documented Words
                  </span>
                  <blockquote className="mt-1 border-l-2 border-accent pl-4 font-outlier text-base italic text-ink/90">
                    &ldquo;{financialsData.turnoverWords}&rdquo;
                  </blockquote>

                  <p className="mt-6 text-sm leading-relaxed text-muted">
                    Audited turnover record of Chashmita Engineers Pvt. Ltd. for the
                    financial year 2006–2007, reflecting execution of turnkey electrical,
                    instrumentation, and industrial communication projects.
                  </p>
                </div>

                <div className="border border-rule bg-plate p-6 lg:col-span-5">
                  <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                    Turnover Summary
                  </span>
                  <dl className="mt-4 space-y-3 font-outlier text-sm">
                    <div className="flex justify-between border-b border-rule/50 pb-2">
                      <dt className="text-muted">Fiscal Year:</dt>
                      <dd className="font-semibold text-ink">{financialsData.year}</dd>
                    </div>
                    <div className="flex justify-between border-b border-rule/50 pb-2">
                      <dt className="text-muted">Rupee Value:</dt>
                      <dd className="font-semibold text-ink">{financialsData.turnoverNumeric}</dd>
                    </div>
                    <div className="flex justify-between border-b border-rule/50 pb-2">
                      <dt className="text-muted">Equivalent:</dt>
                      <dd className="font-semibold text-accent">{financialsData.turnoverInCrores}</dd>
                    </div>
                    <div className="flex justify-between pt-1">
                      <dt className="text-muted">Execution Type:</dt>
                      <dd className="font-semibold text-ink">Turnkey EPC Scope</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CRISIL & Banking Verification Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* CRISIL Rating Card */}
            <Reveal delay={80}>
              <div className="spec-card flex h-full flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between border-b border-rule pb-4">
                    <span className="font-outlier text-xs font-semibold text-accent">
                      ACCREDITATION // 01
                    </span>
                    <span className="border border-ink/15 bg-paper px-2.5 py-0.5 font-outlier text-xs text-muted">
                      Rating Assessment
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-ink sm:text-2xl">
                    CRISIL Financial Rating
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="border border-ink bg-paper px-2.5 py-0.5 font-outlier text-xs font-bold text-accent">
                      RATING: {financialsData.ratingCode}
                    </span>
                    <span className="font-outlier text-xs text-muted">
                      Issued {financialsData.ratingAwardDate}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Evaluated under the{" "}
                    <strong>{financialsData.ratingScheme}</strong>.
                    The official assessment certified:{" "}
                    <em>&ldquo;{financialsData.ratingAssessment}&rdquo;</em>.
                  </p>

                  {/* Attached Document Action */}
                  <div className="mt-6 border border-rule bg-paper p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <span className="font-outlier text-xs font-semibold uppercase tracking-wider text-accent">
                          Attached Document File
                        </span>
                        <p className="truncate font-display text-sm font-bold text-ink">
                          {financialsData.certificateFileName}
                        </p>
                        <span className="font-outlier text-xs text-muted">
                          Official PDF Certificate Archive
                        </span>
                      </div>
                      <a
                        href={financialsData.certificatePdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-interact inline-flex shrink-0 items-center justify-center gap-2 border border-ink bg-ink px-4 py-2 font-outlier text-xs font-semibold uppercase tracking-wider text-paper transition-colors hover:bg-accent hover:border-accent"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        View / Download PDF
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-rule/60 pt-4 font-outlier text-xs text-muted">
                  ✓ Verified NSIC–CRISIL Document Attached
                </div>
              </div>
            </Reveal>

            {/* Statutory Corporate Details */}
            <Reveal delay={140}>
              <div className="spec-card flex h-full flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between border-b border-rule pb-4">
                    <span className="font-outlier text-xs font-semibold text-accent">
                      STATUTORY // 02
                    </span>
                    <span className="border border-ink/15 bg-paper px-2.5 py-0.5 font-outlier text-xs text-muted">
                      Legal Constitution
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-ink sm:text-2xl">
                    Corporate Constitution
                  </h3>

                  <div className="mt-4 space-y-2.5 text-sm text-muted">
                    <p>
                      <strong className="text-ink">Legal Name:</strong>{" "}
                      {contact.company}
                    </p>
                    <p>
                      <strong className="text-ink">Incorporation Date:</strong>{" "}
                      September 1990
                    </p>
                    <p>
                      <strong className="text-ink">Governing Law:</strong>{" "}
                      Companies Act, 1956
                    </p>
                    <p>
                      <strong className="text-ink">Predecessor Entity:</strong>{" "}
                      Chashmita Engineers Group (Operational since 1986)
                    </p>
                    <p>
                      <strong className="text-ink">Registered Office:</strong>{" "}
                      {contact.lines.join(" ")}
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-rule/60 pt-4 font-outlier text-xs text-muted">
                  ✓ Registered under Registrar of Companies, Gujarat
                </div>
              </div>
            </Reveal>
          </div>

          {/* Commercial Archival Notice */}
          <Reveal delay={200}>
            <div className="border border-ink bg-paper-2 p-6 sm:p-8">
              <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                Commercial Archival Notice
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The financial figures, CRISIL ratings, and statutory details presented
                here are reproduced from the verified official filings published by
                Chashmita Engineers Pvt. Ltd. Current audited balances, active bank
                guarantee lines, and refreshed project qualification credentials are
                provided to clients and procurement authorities upon formal tender enquiry.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

