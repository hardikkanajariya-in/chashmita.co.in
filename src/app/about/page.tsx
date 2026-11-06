import Link from "next/link";
import { companyIntro, strengths } from "@/data/company";
import { corporateIdentity, udyogRattanAward } from "@/data/certifications";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Company background, leadership and turnkey project capabilities of Chashmita Engineers Pvt. Ltd. (Est. 1990 / Group since 1986).",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Corporate Profile & Lineage"
        title="Engineering company profile"
        description="Turnkey electrical, industrial lighting, communications, and security systems engineering practice incorporated in September 1990 under the Companies Act, 1956."
      />

      {/* Metric Highlights Strip */}
      <section className="border-b border-ink bg-paper-2 py-6">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Group Inception
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                Since {companyIntro.groupFounding}
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Incorporation
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                Sept {companyIntro.established}
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Governing Law
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                Companies Act &apos;56
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Quality Framework
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                {corporateIdentity.isoCertification}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Narrative & Leadership Showcase */}
      <section className="section-pad bg-paper">
        <Container className="space-y-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Detailed Corporate Narrative */}
            <div className="min-w-0 lg:col-span-7 space-y-6 text-base leading-relaxed text-muted">
              <Reveal>
                <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                  Founding History & Turnkey Role
                </span>
                <h2 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
                  Pioneering Turnkey Engineering Capabilities
                </h2>
              </Reveal>

              {companyIntro.paragraphs.map((paragraph, index) => (
                <Reveal key={index} delay={index * 50}>
                  <p className="text-sm sm:text-base leading-relaxed text-muted">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Right: Leadership & Core Strengths Spec Cards */}
            <div className="min-w-0 lg:col-span-5 space-y-8">
              {/* Managing Director Leadership Spec Card */}
              <Reveal delay={100}>
                <div className="spec-card p-6 sm:p-8">
                  <div className="flex items-center justify-between border-b border-rule pb-3.5">
                    <span className="font-outlier text-xs font-semibold text-accent">
                      LEADERSHIP PROFILE
                    </span>
                    <span className="border border-ink/15 bg-paper px-2.5 py-0.5 font-outlier text-xs text-muted">
                      Managing Director
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-ink sm:text-2xl">
                    Mr. S. Ramakrishnan
                  </h3>
                  <p className="font-outlier text-xs font-medium text-accent mt-0.5">
                    Graduate Electrical Engineer · 34+ Years Engineering Experience
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Under his supervision and technical guidance, Chashmita Engineers
                    has executed complex turnkey contracts for India&apos;s leading
                    petrochemical complexes, oil refineries, fertilizer plants, and
                    power generation projects.
                  </p>

                  <div className="mt-6 border-t border-rule/60 pt-4">
                    <span className="font-outlier text-xs font-semibold uppercase tracking-wider text-ink">
                      Accolades:
                    </span>
                    <p className="mt-1 font-outlier text-xs text-muted">
                      Recipient of the <strong>Udyog Rattan Award</strong> conferred by the
                      Institute of Economic Studies (IES) under the Chairmanship of the
                      Hon&apos;ble Governor of Gujarat.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Core Strengths Card */}
              <Reveal delay={150}>
                <div className="border border-ink bg-plate p-6 sm:p-8">
                  <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                    Documented Attributes
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink">
                    Core Company Strengths
                  </h3>

                  <ul className="mt-4 space-y-3 font-outlier text-xs text-muted">
                    {strengths.map((str, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-accent font-bold">✓</span>
                        <span className="min-w-0 leading-relaxed">{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Fast Links to Accreditations & Financials */}
              <Reveal delay={200}>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/certifications/"
                    className="spec-card p-4 text-left transition-all hover:border-accent"
                  >
                    <span className="block font-outlier text-xs text-accent">
                      ACCREDITATIONS →
                    </span>
                    <span className="mt-1 block font-display text-sm font-bold text-ink">
                      ISO & Awards
                    </span>
                  </Link>
                  <Link
                    href="/financials/"
                    className="spec-card p-4 text-left transition-all hover:border-accent"
                  >
                    <span className="block font-outlier text-xs text-accent">
                      GOVERNANCE →
                    </span>
                    <span className="mt-1 block font-display text-sm font-bold text-ink">
                      CRISIL & Turnover
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
