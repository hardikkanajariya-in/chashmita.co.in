import { principals } from "@/data/principals";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Principals",
  description:
    "Principal manufacturers and technical associations documented in the Chashmita Engineers profile.",
  path: "/principals/",
});

export default function PrincipalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Principals"
        title="Principal relationships"
        description="Product scopes and technical associations as published on the company principals page and profile."
      />
      <section className="py-14 lg:py-20">
        <Container>
          <ul className="divide-y divide-border border border-border bg-white">
            {principals.map((item) => (
              <li
                key={item.name}
                className="grid gap-4 p-6 lg:grid-cols-12 lg:gap-8 lg:p-8"
              >
                <h2 className="font-display text-lg font-semibold text-graphite lg:col-span-5">
                  {item.name}
                </h2>
                <div className="lg:col-span-7">
                  <p className="text-sm leading-relaxed text-muted">
                    {item.scope}
                  </p>
                  {item.note ? (
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {item.note}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
            Principal listings follow the original website wording, including
            historical names (for example Bosch Security Systems, formerly
            Philips India Limited). Confirm current commercial arrangements
            directly with the company for active projects.
          </p>
        </Container>
      </section>
    </>
  );
}
