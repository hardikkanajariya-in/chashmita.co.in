import Image from "next/image";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { asset } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Prestigious and documented projects including GMDC e-despatch and Gujarat RTO check post automation.",
  path: "/projects/",
});

const gmdcDetail = `The Government of Gujarat and its Dept. of Mines, as part of an e-Governance project, took initiative to maintain lignite mines and ensure accurate dispatches while stopping unauthorized access. The project computerizes lignite mines at Mata-No-Madh in Kutch. Vehicle data is updated at token gate and head office levels for traceability. The automated system targets automation, transaction management, detection of unauthorized access, leakage capture and real-time monitoring. RFID smart cards validate trucks; CCTV captures transactions alongside weighbridges, barriers and wireless networked computers.`;

const checkPostDetail = `The Government of Gujarat Dept. of Transport initiated automation across RTO weighbridge check posts for overweight commercial vehicles. Data for Gujarat and neighbouring states is updated at check post and head office levels. Ten administrative buildings and 53 lanes include lane PCs linked to weighbridges, barriers, smart card readers and large figure displays, with video capture of number plates and automated penalty processing when parameters fail.`;

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Projects"
        title="Prestigious projects"
        description="Project narratives and photographs from the company profile."
      />
      <section className="section-pad">
        <Container className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="spec-card grid min-w-0 lg:grid-cols-12"
            >
              {project.image ? (
                <div className="relative min-h-[14rem] lg:col-span-4">
                  <Image
                    src={asset(project.image)}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="p-8 lg:col-span-8 lg:p-10">
                <dl className="grid gap-2 text-sm text-muted sm:grid-cols-2">
                  {project.client ? (
                    <>
                      <dt className="font-medium text-ink">Client</dt>
                      <dd>{project.client}</dd>
                    </>
                  ) : null}
                  {project.industry ? (
                    <>
                      <dt className="font-medium text-ink">Industry</dt>
                      <dd>{project.industry}</dd>
                    </>
                  ) : null}
                  {project.location ? (
                    <>
                      <dt className="font-medium text-ink">Location</dt>
                      <dd>{project.location}</dd>
                    </>
                  ) : null}
                </dl>
                <h2 className="mt-6 font-display text-title text-ink">
                  {project.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {project.slug === "gmdc-e-despatch"
                    ? gmdcDetail
                    : project.slug === "gujarat-rto-check-post"
                      ? checkPostDetail
                      : project.summary}
                </p>
                {project.scope ? (
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    <span className="font-medium text-ink">Scope: </span>
                    {project.scope}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
