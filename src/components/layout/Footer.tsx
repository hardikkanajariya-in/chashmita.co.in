import Link from "next/link";
import { coreCapabilities } from "@/data/services";
import { mainNav } from "@/data/navigation";
import { contact, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="band-ink border-t border-ink">
      <Container className="section-pad">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4 min-w-0">
            <p className="font-display text-title text-paper">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/75">
              Turnkey engineering for electrical, lighting, communication and
              security systems, from design through commissioning and service.
            </p>
          </div>
          <div className="lg:col-span-2 min-w-0">
            <p className="text-sm font-medium text-paper/85">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper/80 underline decoration-paper/25 underline-offset-[0.2em] transition hover:decoration-accent hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 min-w-0">
            <p className="text-sm font-medium text-paper/85">Capabilities</p>
            <ul className="mt-4 grid gap-2 text-sm text-paper/75">
              {coreCapabilities.slice(0, 6).map((cap) => (
                <li key={cap.title}>{cap.title}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 min-w-0">
            <p className="text-sm font-medium text-paper/85">Contact</p>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-paper/80">
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
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s|\+/g, "")}`}
                    className="block underline decoration-paper/30 underline-offset-[0.2em] hover:decoration-accent"
                  >
                    {p}
                  </a>
                ))}
              </p>
              <p>Fax: +91 {contact.fax}</p>
              <p>
                {contact.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block underline decoration-paper/30 underline-offset-[0.2em] hover:decoration-accent"
                  >
                    {email}
                  </a>
                ))}
              </p>
            </address>
          </div>
        </div>
        <p className="mt-12 border-t border-paper/15 pt-6 text-xs text-paper/75">
          © 2026 {site.name}.
        </p>
      </Container>
    </footer>
  );
}
