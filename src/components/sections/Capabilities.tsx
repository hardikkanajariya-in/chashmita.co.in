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
    <section className="border-y border-border bg-surface py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Engineering scope"
            description="End-to-end execution aligned with the company’s documented turnkey role and areas of operation."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
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
                      "w-full border px-4 py-4 text-left transition-[border-color,background-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? "border-cobalt/50 bg-surface-alt shadow-sm"
                        : "border-border bg-white hover:border-cobalt/30",
                    )}
                  >
                    <span className="font-display text-xs font-semibold text-amber">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block font-display text-base font-semibold text-ink">
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="relative overflow-hidden border border-border bg-brand lg:col-span-7 lg:min-h-[28rem]">
            <div className="absolute inset-0 image-zoom">
              <Image
                key={current.image}
                src={asset(current.image)}
                alt=""
                fill
                className="image-zoom-inner object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative flex h-full flex-col justify-end bg-gradient-to-t from-brand via-brand/85 to-brand/20 p-8 text-white lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
                {String(active + 1).padStart(2, "0")} — Capability detail
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                {current.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85">
                {current.detail}
              </p>
              <div className="section-rule mt-8 w-24" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
