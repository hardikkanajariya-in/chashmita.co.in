import { principals } from "@/data/principals";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Principals",
  description:
    "Principal manufacturers, certified design software, and technical associations documented in the Chashmita Engineers profile.",
  path: "/principals/",
});

// Helper to determine the technical domain tag for each principal
function getDomainTag(scope: string, name: string): string {
  if (name.includes("Stahl")) return "Explosion-Proof Systems";
  if (name.includes("Sartorius")) return "Electronic Weighing & Precision";
  if (name.includes("DNH")) return "Industrial Acoustics & Speakers";
  if (name.includes("FITRE")) return "Plant Telephony & Intercoms";
  if (scope.toLowerCase().includes("security") || scope.toLowerCase().includes("cctv"))
    return "CCTV & Security Telemetry";
  if (scope.toLowerCase().includes("lighting")) return "Industrial & Hazardous Area Lighting";
  if (scope.toLowerCase().includes("software")) return "Technical Design & Modeling";
  return "Engineering Systems";
}

export default function PrincipalsPage() {
  return (
    <>
      <PageHero
        kicker="Our Principals"
        title="Our principals"
        description="Principal manufacturers, design software, and technical support documented in the company records."
      />

      {/* Highlights Strip */}
      <section className="border-b border-ink bg-paper-2 py-6">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Manufacturers
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                8 Companies
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Origins
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                India · Europe · Norway
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Engineering Support
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                OEM Software
              </p>
            </div>
            <div>
              <span className="font-outlier text-xs uppercase tracking-wider text-muted">
                Field Servicing
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                Certified Engineers
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Principals Grid */}
      <section className="section-pad bg-paper">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {principals.map((item, index) => {
              const tag = getDomainTag(item.scope, item.name);
              const indexStr = String(index + 1).padStart(2, "0");

              return (
                <Reveal key={item.name} delay={index * 60}>
                  <article className="spec-card flex h-full flex-col justify-between p-6 sm:p-8 transition-shadow duration-[var(--dur-short)]">
                    <div>
                      {/* Top Bar: Index & Domain Tag */}
                      <div className="flex items-center justify-between border-b border-rule pb-4">
                        <span className="font-outlier text-xs font-semibold text-accent">
                          REF // {indexStr}
                        </span>
                        <span className="border border-ink/15 bg-paper px-2.5 py-0.5 font-outlier text-xs text-muted">
                          {tag}
                        </span>
                      </div>

                      {/* Principal Title */}
                      <h2 className="mt-5 font-display text-title leading-snug text-ink">
                        {item.name}
                      </h2>

                      {/* Scope Description */}
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {item.scope}
                      </p>
                    </div>

                    {/* Bottom Metadata / Note */}
                    <div className="mt-6 border-t border-rule/60 pt-4">
                      {item.note ? (
                        <p className="font-outlier text-xs leading-relaxed text-accent">
                          ★ {item.note}
                        </p>
                      ) : (
                        <p className="font-outlier text-xs text-muted/80">
                          Verified OEM technical alliance & equipment integration
                        </p>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Technical Integrity Notice */}
          <Reveal delay={200} className="mt-14">
            <div className="border border-ink bg-paper-2 p-6 sm:p-8">
              <span className="font-outlier text-xs uppercase tracking-widest text-accent">
                Technical Governance Notice
              </span>
              <p className="mt-2 max-w-4xl text-sm leading-relaxed text-muted">
                Principal listings reflect published engineering relationships,
                including historical brand evolutions (e.g. Bosch Security Systems,
                formerly Philips India Limited). Engineering certifications, design software
                licenses, and active commercial frameworks are confirmed directly on a
                project-by-project basis.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
