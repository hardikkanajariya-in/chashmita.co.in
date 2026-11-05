"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { site, asset } from "@/lib/site";

export function Hero() {
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduced ? 0 : 100;
    const t = window.setTimeout(() => setImageReady(true), delay);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="band-paper border-b border-ink">
      <Container className="grid min-w-0 gap-10 py-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:py-14">
        <div className="min-w-0 lg:col-span-5 lg:pb-2">
          <p
            className="hero-enter mb-3 font-outlier text-sm text-muted"
            style={{ "--hero-delay": "60ms" } as CSSProperties}
          >
            Est. {site.established}
          </p>
          <h1
            className="hero-enter font-display text-display leading-none text-ink"
            style={{ "--hero-delay": "120ms" } as CSSProperties}
          >
            {site.tagline}
          </h1>
          <p
            className="hero-enter lead mt-5 text-muted"
            style={{ "--hero-delay": "180ms" } as CSSProperties}
          >
            Turnkey electrical, lighting, communication and CCTV systems for
            industrial projects.
          </p>
          <div
            className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--hero-delay": "240ms" } as CSSProperties}
          >
            <ButtonLink href="/services/" variant="primary">
              Explore capabilities
            </ButtonLink>
            <ButtonLink href="/contact/" variant="secondary">
              Contact us
            </ButtonLink>
          </div>
        </div>
        <figure
          className={`photo-card relative min-w-0 lg:col-span-7 ${imageReady ? "is-ready" : ""}`}
        >
          <div className="relative aspect-[4/3] min-h-[14rem] lg:aspect-[16/11]">
            <Image
              src={asset("photo5.jpg")}
              alt="Industrial CCTV and check post installation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
          </div>
          <figcaption>
            R.T.O. check post installation, company project photograph
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
