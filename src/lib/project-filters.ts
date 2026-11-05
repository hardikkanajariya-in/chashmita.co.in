import type { ProjectRecord } from "@/data/projects";

export type ProjectFilter = {
  id: string;
  label: string;
  match: (project: ProjectRecord) => boolean;
};

export const projectFilters: ProjectFilter[] = [
  { id: "all", label: "All projects", match: () => true },
  {
    id: "government",
    label: "Government",
    match: (p) => Boolean(p.industry?.toLowerCase().includes("government")),
  },
  {
    id: "transport",
    label: "Transport",
    match: (p) => Boolean(p.industry?.toLowerCase().includes("transport")),
  },
  {
    id: "oil-gas",
    label: "Oil and gas",
    match: (p) => Boolean(p.industry?.toLowerCase().includes("oil and gas")),
  },
  {
    id: "power",
    label: "Power",
    match: (p) => p.industry === "Power",
  },
  {
    id: "mining",
    label: "Mining",
    match: (p) => Boolean(p.industry?.toLowerCase().includes("mining")),
  },
];

export function filterProjects(
  projects: ProjectRecord[],
  filterId: string,
): ProjectRecord[] {
  const filter =
    projectFilters.find((f) => f.id === filterId) ?? projectFilters[0];
  return projects.filter(filter.match);
}
