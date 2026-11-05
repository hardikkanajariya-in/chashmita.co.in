import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand via-[#1a4563] to-cobalt py-16 text-white lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, rgba(32,166,166,0.15) 50%, transparent 100%)",
        }}
      />
      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Have an engineering requirement?
              </h2>
              <p className="mt-3 text-base text-white/85">
                Reach our Vadodara office for project enquiries, commissioning
                support or service contracts.
              </p>
            </div>
            <ButtonLink href="/contact/" variant="accent">
              Get in touch
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
