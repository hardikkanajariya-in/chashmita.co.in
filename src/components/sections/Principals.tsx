import { principals, sidebarPrincipalNames } from "@/data/principals";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function PrincipalsSection() {
  const featured = principals.slice(0, 4);

  return (
    <section className="section-pad bg-plate">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Principal ties"
            title="Technical associations"
            description="Principal relationships and product scopes as listed in the company profile. Additional multinationals referenced for design support appear on the principals page."
          />
        </Reveal>
        <div className="mt-12 grid min-w-0 gap-6 lg:grid-cols-2">
          {featured.map((item, index) => (
            <Reveal key={item.name} delay={index * 70}>
              <article className="spec-card h-full p-6 lg:p-8">
                <h3 className="font-display text-title text-ink">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.scope}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <ul className="mt-10 flex flex-wrap gap-2 border-t border-rule pt-8">
            {sidebarPrincipalNames.map((name) => (
              <li
                key={name}
                className="border border-ink bg-paper px-4 py-2 text-sm text-ink"
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
