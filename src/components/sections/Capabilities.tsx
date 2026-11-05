"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { coreCapabilities } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { asset } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Capabilities() {
  const [active, setActive] = useState(0);
  const current = coreCapabilities[active];

  const activate = useCallback((index: number) => setActive(index), []);

  return (
    <section className="section-pad border-y border-ink bg-paper">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="What we execute"
            title="Engineering scope"
            description="End-to-end execution aligned with the company documented turnkey role and areas of operation."
          />
        </Reveal>

        <div className="mt-12 grid min-w-0 gap-8 lg:grid-cols-12 lg:gap-10">
          <ul className="flex flex-col gap-2 lg:col-span-5">
            {coreCapabilities.map((item, index) => {
              const isActive = index === active;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    onMouseEnter={() => activate(index)}
                    onFocus={() => activate(index)}
                    onClick={() => activate(index)}
                    aria-pressed={isActive}
                    className={cn(
                      "spec-card w-full px-4 py-4 text-left active:translate-y-px",
                      isActive && "shadow-[14px_14px_0_var(--color-ink)]",
                    )}
                  >
                    <span className="font-outlier text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block font-display text-title text-ink">
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <figure className="photo-card relative min-w-0 lg:col-span-7 lg:min-h-[28rem]">
            <div className="relative min-h-[18rem] flex-1 lg:min-h-[24rem]">
              <Image
                key={current.image}
                src={asset(current.image)}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="space-y-2">
              <p className="font-outlier text-xs text-accent">
                {String(active + 1).padStart(2, "0")}
              </p>
              <p className="font-display text-title text-ink">{current.title}</p>
              <p className="text-sm leading-relaxed text-muted">
                {current.detail}
              </p>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
