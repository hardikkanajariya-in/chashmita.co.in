import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { asset } from "@/lib/site";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="border-t border-border bg-ivory py-16 lg:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Documented projects from the company profile — scope and clients as originally published."
          />
          <Link
            href="/projects/"
            className="text-sm font-semibold text-navy underline-offset-4 hover:underline"
          >
            Full project list
          </Link>
        </div>
        <ul className="mt-12 space-y-10 lg:space-y-14">
          {featured.map((project, index) => (
            <li
              key={project.slug}
              className="grid gap-8 border border-border bg-white lg:grid-cols-12 lg:gap-0"
            >
              <div
                className={`relative min-h-[16rem] lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
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
              <div
                className={`flex flex-col justify-center p-8 lg:col-span-7 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                  {[project.client, project.industry, project.location]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-graphite">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                {project.scope ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    <span className="font-semibold text-graphite">Scope: </span>
                    {project.scope}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
