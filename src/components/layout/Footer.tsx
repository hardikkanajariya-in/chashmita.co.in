import Link from "next/link";
import { coreCapabilities } from "@/data/services";
import { mainNav } from "@/data/navigation";
import { contact, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="band-ink border-t border-ink">
      <Container className="section-pad">
        {/* Top Branded Statement & Operational Badges */}
        <div className="flex flex-col gap-6 border-b border-paper/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-outlier text-xs uppercase tracking-widest text-accent">
              Industrial Turnkey Engineering
            </span>
            <p className="mt-2 font-display text-2xl text-paper sm:text-3xl lg:text-4xl">
              {site.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-outlier text-paper/70">
            <span className="border border-paper/15 bg-paper/5 px-2.5 py-1">
              Vadodara HQ
            </span>
            <span className="border border-paper/15 bg-paper/5 px-2.5 py-1">
              Est. {site.established}
            </span>
            <span className="border border-paper/15 bg-paper/5 px-2.5 py-1">
              Philips-Trained Engineers
            </span>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Company Profile */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-4">
            <p className="font-display text-title text-paper">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/75">
              Turnkey design, engineering, supply, installation, testing,
              commissioning and lifecycle maintenance for electrical, lighting,
              communication and CCTV systems across Gujarat and pan-India.
            </p>
            <p className="mt-4 font-outlier text-xs text-paper/55">
              Govt. & Industrial Registered Contractor · RTO & Mining Experience
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="min-w-0 lg:col-span-2">
            <p className="text-sm font-semibold tracking-wide text-paper/90">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block text-paper/75 underline decoration-paper/20 underline-offset-[0.2em] transition-[color,text-decoration-color,transform] duration-[var(--dur-short)] hover:translate-x-0.5 hover:text-paper hover:decoration-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="min-w-0 lg:col-span-3">
            <p className="text-sm font-semibold tracking-wide text-paper/90">
              Capabilities
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {coreCapabilities.slice(0, 6).map((cap) => (
                <li key={cap.title}>
                  <Link
                    href="/services/"
                    className="inline-block text-paper/75 underline decoration-paper/20 underline-offset-[0.2em] transition-[color,text-decoration-color,transform] duration-[var(--dur-short)] hover:translate-x-0.5 hover:text-paper hover:decoration-accent"
                  >
                    {cap.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="min-w-0 lg:col-span-3">
            <p className="text-sm font-semibold tracking-wide text-paper/90">
              Vadodara Office
            </p>
            <address className="mt-4 space-y-3.5 text-sm not-italic leading-relaxed text-paper/80">
              <p className="text-paper/75">
                <span className="font-medium text-paper">
                  {contact.company}
                </span>
                <br />
                {contact.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <div className="space-y-1">
                <span className="block font-outlier text-xs uppercase tracking-wider text-paper/50">
                  Telephone
                </span>
                {contact.phoneDisplay.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s|\+/g, "")}`}
                    className="block font-outlier text-paper/85 underline decoration-paper/25 underline-offset-[0.2em] transition-[color,text-decoration-color] duration-[var(--dur-short)] hover:text-paper hover:decoration-accent"
                  >
                    {p}
                  </a>
                ))}
              </div>
              <div className="space-y-1">
                <span className="block font-outlier text-xs uppercase tracking-wider text-paper/50">
                  Email
                </span>
                {contact.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block font-outlier text-paper/85 underline decoration-paper/25 underline-offset-[0.2em] transition-[color,text-decoration-color] duration-[var(--dur-short)] hover:text-paper hover:decoration-accent"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-paper/15 pt-6 text-xs text-paper/70 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://niftysolutions.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-paper underline decoration-paper/40 underline-offset-[0.25em] transition-[color,text-decoration-color] duration-[var(--dur-short)] hover:text-accent hover:decoration-accent"
            >
              Nifty Solutions
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
