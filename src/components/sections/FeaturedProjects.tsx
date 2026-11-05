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
    <section className="section-pad border-t border-ink bg-paper-2">
      <Container>
        <Reveal>
          <div className="flex min-w-0 flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              kicker="Project index"
              title="Selected work"
              description="Documented projects from the company profile, scope and clients as originally published."
            />
            <ButtonLink href="/projects/" variant="ghost">
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
              className="filter-chip px-4 py-2 text-sm font-medium text-ink"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <ul className="relative mt-12 space-y-10 lg:space-y-12">
          {filtered.length === 0 ? (
            <li className="spec-card p-8 text-sm text-muted">
              No featured projects in this category. View the{" "}
              <Link
                href="/projects/"
                className="font-medium text-ink underline decoration-accent underline-offset-[0.2em]"
              >
                full project list
              </Link>
              .
            </li>
          ) : (
            filtered.map((project) => {
              const meta = [project.client, project.industry, project.location]
                .filter(Boolean)
                .join(", ");
              return (
                <li key={project.slug} className="spec-card grid min-w-0 lg:grid-cols-12">
                  <div className="relative min-h-[16rem] min-w-0 lg:col-span-5">
                    {project.image ? (
                      <Image
                        src={asset(project.image)}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 42vw"
                      />
                    ) : null}
                  </div>
                  <div className="flex min-w-0 flex-col justify-center p-8 lg:col-span-7 lg:p-10">
                    {meta ? (
                      <p className="text-sm font-medium text-muted">{meta}</p>
                    ) : null}
                    <h3 className="mt-3 font-display text-title text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>
                    {project.scope ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        <span className="font-medium text-ink">Scope: </span>
                        {project.scope}
                      </p>
                    ) : null}
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </Container>
    </section>
  );
}
