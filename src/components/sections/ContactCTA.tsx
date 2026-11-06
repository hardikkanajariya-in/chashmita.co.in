import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { contact } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export function ContactCTA() {
  return (
    <section className="band-ink relative overflow-hidden border-t-[3px] border-accent py-16 lg:py-24">
      {/* Subtle architectural grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal>
          <div className="grid min-w-0 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Headline & Engineering Context */}
            <div className="min-w-0 lg:col-span-7">
              <div className="inline-flex items-center gap-2 border border-paper/20 bg-paper/5 px-3 py-1 font-outlier text-xs uppercase tracking-widest text-paper/85">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Direct Engineering Desk · Vadodara HQ</span>
              </div>

              <h2 className="mt-5 font-display text-section leading-tight text-paper">
                Engineering requirement or upcoming project?
              </h2>

              <p className="lead mt-4 text-paper/80">
                Consult with our engineering leads for turnkey electrical,
                industrial lighting, plant communications, CCTV surveillance, or
                Philips-trained service contracts.
              </p>

              {/* Capability highlights */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  "Turnkey Design & Commissioning",
                  "Philips-Trained Support",
                  "Vadodara, Gujarat & Pan-India Scope",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="border border-paper/15 bg-paper/[0.04] px-3 py-1.5 font-outlier text-xs text-paper/75"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Interactive Spec Card */}
            <div className="min-w-0 lg:col-span-5">
              <div className="border border-paper/20 bg-paper/5 p-6 backdrop-blur-xs transition-[border-color,box-shadow] duration-[var(--dur-short)] hover:border-paper/40 sm:p-8">
                <div className="flex items-center justify-between border-b border-paper/15 pb-4">
                  <div>
                    <p className="font-display text-sm font-semibold text-paper">
                      Vadodara Central Office
                    </p>
                    <p className="font-outlier text-xs text-paper/60">
                      R.C. Dutt Road, Alkapuri
                    </p>
                  </div>
                  <span className="border border-accent/40 bg-accent/10 px-2 py-0.5 font-outlier text-xs text-accent">
                    EST. 1990
                  </span>
                </div>

                <div className="mt-6 space-y-4 text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <div className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wider text-paper/50">
                        Phone Enquiries
                      </span>
                      <div className="mt-0.5 flex flex-wrap gap-x-3">
                        {contact.phoneDisplay.map((p) => (
                          <a
                            key={p}
                            href={`tel:${p.replace(/\s|\+/g, "")}`}
                            className="font-outlier text-paper/90 underline decoration-paper/30 underline-offset-[0.2em] transition-[color,text-decoration-color] duration-[var(--dur-short)] hover:text-paper hover:decoration-accent"
                          >
                            {p}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <div className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wider text-paper/50">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${contact.emails[0]}`}
                        className="mt-0.5 block font-outlier text-paper/90 underline decoration-paper/30 underline-offset-[0.2em] transition-[color,text-decoration-color] duration-[var(--dur-short)] hover:text-paper hover:decoration-accent"
                      >
                        {contact.emails[0]}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <ButtonLink
                    href="/contact/"
                    variant="onInk"
                    className="w-full justify-between"
                  >
                    <span>Initiate project enquiry</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="cta-arrow h-4 w-4 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.47-3.47a.75.75 0 1 1 1.06-1.06l4.773 4.773a.748.748 0 0 1 0 1.014l-4.773 4.773a.75.75 0 1 1-1.06-1.06l3.47-3.47H3.75A.75.75 0 0 1 3 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
