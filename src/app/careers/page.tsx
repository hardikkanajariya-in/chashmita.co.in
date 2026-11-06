import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { CareersApplicationForm } from "@/components/careers/CareersApplicationForm";
import { FORMS_CONFIG } from "@/config/forms";

export const metadata = createPageMetadata({
  title: "Careers",
  description:
    "Join Chashmita Engineers Pvt. Ltd. Opportunities for project engineers, CCTV technicians, electrical supervisors, and industrial automation professionals.",
  path: "/careers/",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers & Engineering Opportunities"
        title="Build industrial systems with us"
        description="Chashmita Engineers is always on the lookout for ambitious project engineers, commissioning technicians, and industrial automation professionals."
      />

      {/* KPI Overview Strip */}
      <section className="border-b border-ink bg-paper-2 py-6">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Work Culture
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                Technical Mastery
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                OEM Associations
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                Philips & Bosch
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Project Scale
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                Turnkey Industrial
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Recruitment Desk
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-accent">
                {FORMS_CONFIG.careersEmail}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Section */}
      <section className="section-pad bg-paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Column: Authentic Archival Mandate & Opportunities */}
            <div className="space-y-8 lg:col-span-5">
              <Reveal>
                <div className="spec-card p-6 sm:p-8">
                  <span className="font-outlier text-xs font-semibold uppercase tracking-widest text-accent">
                    Engineering Induction
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                    Join Our Evolving Engineering Team
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Chashmita Engineers, an evolving organization, is always on
                    the lookout for project and technical professionals including
                    marketing and field service engineers who are enthusiastic and
                    dynamic.
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    If you have a passion for engineering excellence, rigorous
                    safety standards, and precision execution on industrial sites,
                    we are just the place for you.
                  </p>

                  <div className="mt-6 border-t border-rule pt-6">
                    <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                      Active Technical Disciplines
                    </span>
                    <ul className="mt-3 space-y-2.5 font-outlier text-xs text-ink/80">
                      <li className="flex items-center gap-2">
                        <span className="text-accent font-bold">✓</span>
                        <span>Turnkey Electrical EPC & Substation Engineers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent font-bold">✓</span>
                        <span>Industrial CCTV & Surveillance Systems Technicians</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent font-bold">✓</span>
                        <span>Public Address & Industrial Intercom Specialists</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent font-bold">✓</span>
                        <span>Philips & Bosch Certified Commissioning Teams</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent font-bold">✓</span>
                        <span>Tender Commercials & Industrial Marketing Executives</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>

              {/* Direct HR Application Card */}
              <Reveal delay={80}>
                <div className="border border-ink bg-paper-2 p-6 sm:p-8">
                  <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                    Direct Resume Submissions
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-ink">
                    Direct Email Submissions
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    You can also email your updated resume with your current CTC,
                    notice period, and key industrial project experience directly to:
                  </p>
                  <a
                    href={`mailto:${FORMS_CONFIG.careersEmail}`}
                    className="mt-4 inline-block font-outlier text-base font-bold text-accent underline underline-offset-4 hover:text-ink"
                  >
                    {FORMS_CONFIG.careersEmail}
                  </a>
                  <p className="mt-3 font-outlier text-xs text-muted">
                    Registered Office: 403-B Alkapuri Arcade, R.C. Dutt Road,
                    Vadodara - 390 005
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="spec-card p-6 sm:p-10">
                  <div className="border-b border-rule pb-5">
                    <span className="font-outlier text-xs font-semibold uppercase tracking-widest text-accent">
                      Application Portal
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-bold text-ink">
                      Candidate Application Form
                    </h2>
                    <p className="mt-1 text-xs text-muted">
                      Fill in the required details below to facilitate your
                      application with our technical management desk.
                    </p>
                  </div>

                  <div className="mt-6">
                    <CareersApplicationForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

