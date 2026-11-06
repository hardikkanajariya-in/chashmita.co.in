import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { corporateIdentity, udyogRattanAward } from "@/data/certifications";
import { consultantApprovals } from "@/data/clients";

export const metadata = createPageMetadata({
  title: "Certifications & Awards",
  description:
    "ISO 9001:2000 quality certification, corporate quality policy, and national honors including the Udyog Rattan Award presented to Chashmita Engineers Pvt. Ltd.",
  path: "/certifications/",
});

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        kicker="Quality Standards & Industrial Recognition"
        title="Certifications & awards"
        description="ISO 9001:2000 quality framework, formal corporate Quality Policy, and national recognition including the Udyog Rattan Award."
      />

      {/* Highlights Strip */}
      <section className="border-b border-ink bg-paper-2 py-6">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Quality System
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                {corporateIdentity.isoCertification}
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                National Honor
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                Udyog Rattan
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Conferred By
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                IES & Governor
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Consultant Approvals
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                EIL · PDIL · UHDE
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Section */}
      <section className="section-pad bg-paper">
        <Container className="space-y-12">
          {/* ISO 9001 & Quality Policy */}
          <Reveal>
            <div className="spec-card p-6 sm:p-10">
              <div className="flex flex-col gap-2 border-b border-rule pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-outlier text-xs font-semibold uppercase tracking-widest text-accent">
                    Quality Management Framework
                  </span>
                  <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">
                    {corporateIdentity.isoCertification} Certification
                  </h2>
                </div>
                <span className="border border-ink bg-plate px-3 py-1 font-outlier text-xs font-bold text-ink">
                  ACCREDITED QUALITY SYSTEM
                </span>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-7">
                  <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                    Documented Corporate Quality Policy
                  </span>
                  <blockquote className="mt-2 border-l-2 border-accent pl-5 font-display text-lg leading-relaxed text-ink sm:text-xl">
                    &ldquo;{corporateIdentity.qualityPolicy}&rdquo;
                  </blockquote>

                  <p className="mt-6 text-sm leading-relaxed text-muted">
                    Formal ISO 9001:2000 quality management certification covering the
                    supply, installation, testing, commissioning, operation and maintenance
                    of industrial CCTV and communications systems.
                  </p>

                  {/* Attached ISO Certificate Action */}
                  <div className="mt-6 border border-rule bg-paper p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <span className="font-outlier text-xs font-semibold uppercase tracking-wider text-accent">
                          Attached Certificate File
                        </span>
                        <p className="truncate font-display text-sm font-bold text-ink">
                          {corporateIdentity.isoDetails.fileName}
                        </p>
                        <span className="font-outlier text-xs text-muted">
                          Certificate No: {corporateIdentity.isoDetails.certificateNumber} · {corporateIdentity.isoDetails.accreditationBody}
                        </span>
                      </div>
                      <a
                        href={corporateIdentity.isoDetails.pdfUrl}
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

                <div className="border border-rule bg-plate p-6 lg:col-span-5">
                  <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                    Compliance Credentials
                  </span>
                  <dl className="mt-4 space-y-3 font-outlier text-xs text-muted">
                    <div className="border-b border-rule/50 pb-2">
                      <dt className="text-muted/70">Standard:</dt>
                      <dd className="font-semibold text-ink">{corporateIdentity.isoDetails.standard}</dd>
                    </div>
                    <div className="border-b border-rule/50 pb-2">
                      <dt className="text-muted/70">Certificate No:</dt>
                      <dd className="font-semibold text-ink">{corporateIdentity.isoDetails.certificateNumber}</dd>
                    </div>
                    <div className="border-b border-rule/50 pb-2">
                      <dt className="text-muted/70">Auditing Body:</dt>
                      <dd className="font-semibold text-ink">{corporateIdentity.isoDetails.certifyingBody}</dd>
                    </div>
                    <div className="border-b border-rule/50 pb-2">
                      <dt className="text-muted/70">Accreditation:</dt>
                      <dd className="font-semibold text-ink">{corporateIdentity.isoDetails.accreditationBody}</dd>
                    </div>
                    <div>
                      <dt className="text-muted/70">Certified Scope:</dt>
                      <dd className="font-semibold text-ink">{corporateIdentity.isoDetails.scope}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Udyog Rattan Award & Citation */}
          <Reveal delay={80}>
            <div className="spec-card p-6 sm:p-10">
              <div className="flex flex-col gap-2 border-b border-rule pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-outlier text-xs font-semibold uppercase tracking-widest text-accent">
                    National Industrial Recognition
                  </span>
                  <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">
                    {udyogRattanAward.award}
                  </h2>
                </div>
                <span className="border border-accent/40 bg-accent/10 px-3 py-1 font-outlier text-xs font-semibold text-accent">
                  IES CITATION 2005
                </span>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
                {/* Historical Certificate Document Viewer */}
                <div className="lg:col-span-5">
                  <div className="border border-rule bg-paper p-3">
                    <div className="relative aspect-[360/540] w-full overflow-hidden border border-rule/60 bg-plate">
                      <Image
                        src={udyogRattanAward.imageUrl}
                        alt="Udyog Rattan Award and Excellence Award Official Citation Certificate"
                        width={360}
                        height={540}
                        className="h-full w-full object-contain"
                        priority
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between px-1">
                      <div>
                        <p className="font-outlier text-xs font-semibold text-ink">
                          {udyogRattanAward.fileName}
                        </p>
                        <span className="font-outlier text-[11px] text-muted">
                          Archival Citation Document
                        </span>
                      </div>
                      <a
                        href={udyogRattanAward.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-interact inline-flex items-center gap-1.5 border border-ink bg-ink px-3 py-1.5 font-outlier text-xs font-semibold uppercase tracking-wider text-paper transition-colors hover:bg-accent hover:border-accent"
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        View Full Size
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-sm leading-relaxed text-muted">
                    The prestigious <strong>Udyog Rattan Award</strong> and accompanying{" "}
                    <strong>Excellence Award</strong> were conferred upon Managing Director{" "}
                    <strong>Mr. S. Ramakrishnan</strong> and{" "}
                    <strong>Chashmita Engineers Pvt. Ltd.</strong> by the{" "}
                    <strong>Institute of Economic Studies (IES)</strong>.
                  </p>

                  <div className="mt-5 border border-rule bg-paper-2 p-4">
                    <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                      Presentation Ceremony
                    </span>
                    <p className="mt-1 text-sm text-ink/90">
                      Presented at a national seminar in Ahmedabad on{" "}
                      <strong>{udyogRattanAward.date}</strong>, held under the
                      Chairmanship of His Excellency{" "}
                      <strong>Shri Nawal Kishore Sharma</strong>, then Hon&apos;ble
                      Governor of Gujarat.
                    </p>
                  </div>

                  <div className="mt-5">
                    <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                      Official Citation Text
                    </span>
                    <blockquote className="mt-1 border-l-2 border-accent pl-4 font-outlier text-xs leading-relaxed italic text-ink/90">
                      &ldquo;{udyogRattanAward.citation}&rdquo;
                    </blockquote>
                  </div>

                  <div className="mt-6 border border-rule bg-plate p-5">
                    <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                      Citation Credentials
                    </span>
                    <dl className="mt-3 grid gap-3 sm:grid-cols-2 font-outlier text-xs text-muted">
                      <div className="border-b border-rule/50 pb-2 sm:border-b-0 sm:border-r sm:pr-3">
                        <dt className="text-muted/70">Award Name:</dt>
                        <dd className="font-semibold text-ink">{udyogRattanAward.award}</dd>
                      </div>
                      <div className="border-b border-rule/50 pb-2 sm:border-b-0">
                        <dt className="text-muted/70">Recipient:</dt>
                        <dd className="font-semibold text-ink">{udyogRattanAward.presentedTo}</dd>
                      </div>
                      <div className="border-b border-rule/50 pb-2 sm:border-b-0 sm:border-r sm:pr-3">
                        <dt className="text-muted/70">Enterprise:</dt>
                        <dd className="font-semibold text-ink">{udyogRattanAward.conferredToCompany}</dd>
                      </div>
                      <div>
                        <dt className="text-muted/70">Presiding Dignitary:</dt>
                        <dd className="font-semibold text-accent">Governor of Gujarat</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Corporate Vision & Mission */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision */}
            <Reveal delay={120}>
              <div className="spec-card flex h-full flex-col justify-between p-6 sm:p-8">
                <div>
                  <span className="font-outlier text-xs font-semibold uppercase tracking-widest text-accent">
                    Corporate Direction
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
                    Vision Statement
                  </h3>
                  <blockquote className="mt-4 border-l-2 border-accent pl-4 font-display text-base leading-relaxed text-ink/90 sm:text-lg">
                    &ldquo;{corporateIdentity.vision}&rdquo;
                  </blockquote>
                </div>
                <div className="mt-8 border-t border-rule/60 pt-4 font-outlier text-xs text-muted">
                  From the official corporate charter of Chashmita Engineers
                </div>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal delay={160}>
              <div className="spec-card flex h-full flex-col justify-between p-6 sm:p-8">
                <div>
                  <span className="font-outlier text-xs font-semibold uppercase tracking-widest text-accent">
                    Action Mandate
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
                    Mission Statement
                  </h3>
                  <blockquote className="mt-4 border-l-2 border-accent pl-4 font-display text-base leading-relaxed text-ink/90 sm:text-lg">
                    &ldquo;{corporateIdentity.mission}&rdquo;
                  </blockquote>
                </div>
                <div className="mt-8 border-t border-rule/60 pt-4 font-outlier text-xs text-muted">
                  Engineering excellence through tested technology deployment
                </div>
              </div>
            </Reveal>
          </div>

          {/* Major Consultant Approvals */}
          <Reveal delay={200}>
            <div className="border border-ink bg-plate p-6 sm:p-8">
              <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                Empanelled Authority
              </span>
              <h3 className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">
                Major Consultant Approvals & Pre-Qualifications
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                Chashmita Engineers has been scrutinized and approved by leading
                national and multinational project engineering consulting agencies:
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                {consultantApprovals.map((item) => (
                  <span
                    key={item}
                    className="border border-ink bg-paper-2 px-4 py-2 font-outlier text-xs font-semibold text-ink"
                  >
                    ✓ {item} Approved
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

