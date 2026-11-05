import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-ivory lg:py-20">
      <Container className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Have an engineering requirement?
          </h2>
          <p className="mt-3 text-base text-ivory/80">
            Reach our Vadodara office for project enquiries, commissioning
            support or service contracts.
          </p>
        </div>
        <ButtonLink
          href="/contact/"
          variant="secondary"
          className="border-ivory/30 bg-transparent text-ivory hover:border-white hover:bg-white/10"
        >
          Get in touch
        </ButtonLink>
      </Container>
    </section>
  );
}
