import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { contact } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export function ContactCTA() {
  return (
    <section className="band-ink section-pad border-t border-ink">
      <Container>
        <Reveal>
          <div className="flex min-w-0 flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0 max-w-xl">
              <h2 className="font-display text-section leading-none text-paper">
                Engineering requirement?
              </h2>
              <p className="lead mt-4 text-paper/95">
                Reach our Vadodara office for project enquiries, commissioning
                support or service contracts.
              </p>
              <p className="mt-4 text-sm text-paper/90">
                <a
                  href={`mailto:${contact.emails[0]}`}
                  className="underline decoration-paper/30 underline-offset-[0.2em] hover:decoration-accent"
                >
                  {contact.emails[0]}
                </a>
                ,{" "}
                <a
                  href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
                  className="underline decoration-paper/30 underline-offset-[0.2em] hover:decoration-accent"
                >
                  {contact.phoneDisplay[0]}
                </a>
              </p>
            </div>
            <ButtonLink href="/contact/" variant="onInk">
              Get in touch
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
