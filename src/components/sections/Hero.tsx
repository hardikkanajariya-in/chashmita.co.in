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
    const delay = reduced ? 0 : 120;
    const t = window.setTimeout(() => setImageReady(true), delay);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-alt">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-cobalt/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 bg-turquoise/10 blur-3xl"
      />
      <Container className="relative grid gap-10 py-14 lg:grid-cols-12 lg:items-end lg:gap-10 lg:py-20">
        <div className="lg:col-span-5 lg:pb-4">
          <p
            className="hero-enter mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-turquoise"
            style={{ "--hero-delay": "80ms" } as CSSProperties}
          >
            Established {site.established}
          </p>
          <h1
            className="hero-enter font-display text-4xl font-semibold leading-[1.02] text-ink sm:text-5xl lg:text-[3.35rem]"
            style={{ "--hero-delay": "160ms" } as CSSProperties}
          >
            {site.tagline}
          </h1>
          <p
            className="hero-enter mt-6 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg"
            style={{ "--hero-delay": "240ms" } as CSSProperties}
          >
            Turnkey design, engineering, supply, installation, testing,
            commissioning and maintenance for industrial electrical, lighting,
            communication and CCTV systems.
          </p>
          <div
            className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--hero-delay": "320ms" } as CSSProperties}
          >
            <ButtonLink href="/services/" variant="accent">
              Explore our capabilities
            </ButtonLink>
            <ButtonLink href="/contact/" variant="secondary">
              Contact us
            </ButtonLink>
          </div>
        </div>
        <div className="relative lg:col-span-7">
          <div
            className={`hero-image-wrap relative aspect-[4/3] bg-brand/5 lg:aspect-[16/11] ${imageReady ? "is-ready" : ""}`}
          >
            <div className="absolute inset-0 z-10 border border-white/40 mix-blend-overlay" />
            <Image
              src={asset("photo5.jpg")}
              alt="Industrial CCTV and check post installation"
              fill
              className="hero-image-scale object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-brand/80 to-transparent p-5 text-sm text-white">
              R.T.O. check post installation — company project photograph
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
