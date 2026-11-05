import { principals, sidebarPrincipalNames } from "@/data/principals";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function PrincipalsSection() {
  const featured = principals.slice(0, 4);

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Principals"
            title="Technical associations"
            description="Principal relationships and product scopes as listed in the company profile. Additional multinationals referenced for design support appear on the principals page."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featured.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <article className="card-lift h-full border border-border bg-surface p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.scope}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <ul className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
            {sidebarPrincipalNames.map((name) => (
              <li
                key={name}
                className="border border-border bg-surface-alt px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-cobalt/40 hover:text-brand"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
