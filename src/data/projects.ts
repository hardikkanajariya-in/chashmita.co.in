export type ProjectRecord = {
  slug: string;
  title: string;
  client?: string;
  industry?: string;
  location?: string;
  scope?: string;
  summary: string;
  image?: string;
  featured?: boolean;
};

export const projects: ProjectRecord[] = [
  {
    slug: "gmdc-e-despatch",
    title: "E-Despatch System — GMDC",
    client: "Gujarat Mineral Development Corporation (GMDC)",
    industry: "Mining / Government",
    location: "Mata-No-Madh, Kutch, Gujarat",
    featured: true,
    image: "photo6.jpg",
    summary:
      "E-governance initiative by the Government of Gujarat Department of Mines to computerize lignite mines, validate dispatches and reduce unauthorized access using RFID, CCTV, weighbridges and integrated transaction capture.",
    scope:
      "Integrated e-despatch with static weighbridges, weigh-in-motion platforms, CCTV, RFID readers, smart card readers, barriers and wireless networked computers at transaction points.",
  },
  {
    slug: "gujarat-rto-check-post",
    title: "Check Post Automation / Integrated Highway Check Post",
    client: "Transport Department, Government of Gujarat (RTO)",
    industry: "Transport / Government",
    location: "Gujarat",
    featured: true,
    image: "photo5.jpg",
    summary:
      "Automation of RTO weighbridge check posts to monitor commercial vehicle weight, capture violations and improve revenue collection across Gujarat highways.",
    scope:
      "Lane-level PCs integrated with weighbridges, barriers, smart card readers, video capture and penalty processing across multiple check posts.",
  },
  {
    slug: "lng-hazira-cctv",
    title: "CCTV controls — LNG Hazira Project",
    client: "Shell LNG, Hazira",
    industry: "Oil and gas",
    location: "Hazira, Gujarat",
    featured: true,
    image: "photo3.jpg",
    summary:
      "CCTV control installation as executed for the LNG Hazira project (as documented on the company areas-of-operation page).",
  },
  {
    slug: "lng-hazira-praesideo",
    title: "Praesideo announcement system — LNG Hazira Project",
    client: "Shell LNG, Hazira",
    industry: "Oil and gas",
    location: "Hazira, Gujarat",
    image: "photo4.jpg",
    summary:
      "Praesideo announcement system controls as installed in the LNG Hazira project.",
  },
  {
    slug: "power-plant-high-mast",
    title: "High mast installation in a power plant",
    industry: "Power",
    image: "photo1.jpg",
    summary:
      "High mast lighting installation at a power plant (project photograph from company profile).",
  },
  {
    slug: "rto-check-post-wiring",
    title: "R.T.O. check post job",
    industry: "Transport",
    image: "photo6.jpg",
    summary: "CCTV and automation wiring for an RTO check post installation.",
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
