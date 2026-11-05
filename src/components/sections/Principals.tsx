import { principals, sidebarPrincipalNames } from "@/data/principals";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PrincipalsSection() {
  const featured = principals.slice(0, 4);

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Principals"
          title="Technical associations"
          description="Principal relationships and product scopes as listed in the company profile. Additional multinationals referenced for design support appear on the principals page."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featured.map((item) => (
            <article
              key={item.name}
              className="border border-border p-6 lg:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-graphite">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.scope}
              </p>
            </article>
          ))}
        </div>
        <ul className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          {sidebarPrincipalNames.map((name) => (
            <li
              key={name}
              className="border border-border bg-ivory px-4 py-2 text-xs font-medium text-graphite"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
