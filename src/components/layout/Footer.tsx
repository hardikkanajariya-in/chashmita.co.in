import Link from "next/link";
import { coreCapabilities } from "@/data/services";
import { mainNav } from "@/data/navigation";
import { contact, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-white">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="font-display text-lg font-semibold">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
              Turnkey engineering for electrical, lighting, communication and
              security systems — from design through commissioning and service.
            </p>
            <div className="section-rule mt-6 w-12" />
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turquoise">
              Navigation
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition-colors hover:text-amber"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turquoise">
              Capabilities
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-white/75">
              {coreCapabilities.slice(0, 6).map((cap) => (
                <li key={cap.title}>{cap.title}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turquoise">
              Contact
            </p>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-white/80">
              <p>
                {contact.company}
                <br />
                {contact.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <p>
                Phone:{" "}
                {contact.phoneDisplay.map((p) => (
                  <span key={p} className="block">
                    {p}
                  </span>
                ))}
              </p>
              <p>Fax: +91 {contact.fax}</p>
              <p>
                {contact.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-white transition hover:text-amber"
                  >
                    {email}
                  </a>
                ))}
              </p>
            </address>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/55">
          © 2026 {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
