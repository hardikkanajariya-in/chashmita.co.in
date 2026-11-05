"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getFeaturedProjects } from "@/data/projects";
import { filterProjects, projectFilters } from "@/lib/project-filters";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { asset } from "@/lib/site";
import { cn } from "@/lib/cn";

export function FeaturedProjects() {
  const allFeatured = getFeaturedProjects();
  const [filterId, setFilterId] = useState("all");

  const visibleFilters = useMemo(
    () =>
      projectFilters.filter(
        (f) => f.id === "all" || allFeatured.some((p) => f.match(p)),
      ),
    [allFeatured],
  );

  const filtered = useMemo(
    () => filterProjects(allFeatured, filterId),
    [allFeatured, filterId],
  );

  return (
    <section className="border-t border-border bg-surface-alt py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Projects"
              title="Selected work"
              description="Documented projects from the company profile — scope and clients as originally published."
            />
            <ButtonLink href="/projects/" variant="ghost" showArrow>
              Full project list
            </ButtonLink>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {visibleFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={filterId === filter.id}
              onClick={() => setFilterId(filter.id)}
              className="filter-chip border border-border bg-white px-4 py-2 text-sm font-medium text-ink"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <ul className="relative mt-12 space-y-10 lg:space-y-14">
          {filtered.length === 0 ? (
            <li className="border border-border bg-white p-8 text-sm text-ink-muted">
              No featured projects in this category. View the{" "}
              <Link href="/projects/" className="font-semibold text-cobalt hover:underline">
                full project list
              </Link>
              .
            </li>
          ) : (
            filtered.map((project, index) => (
              <li
                key={project.slug}
                className={cn(
                  "filter-panel grid gap-8 border border-border bg-white lg:grid-cols-12 lg:gap-0",
                  "card-lift",
                )}
              >
                <div
                  className={`image-zoom relative min-h-[16rem] lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  {project.image ? (
                    <Image
                      src={asset(project.image)}
                      alt=""
                      fill
                      className="image-zoom-inner object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  ) : null}
                </div>
                <div
                  className={`flex flex-col justify-center p-8 lg:col-span-7 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turquoise">
                    {[project.client, project.industry, project.location]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {project.summary}
                  </p>
                  {project.scope ? (
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      <span className="font-semibold text-ink">Scope: </span>
                      {project.scope}
                    </p>
                  ) : null}
                </div>
              </li>
            ))
          )}
        </ul>
      </Container>
    </section>
  );
}
