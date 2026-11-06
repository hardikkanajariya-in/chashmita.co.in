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
  specifications?: string[];
};

export const projects: ProjectRecord[] = [
  {
    slug: "gmdc-e-despatch",
    title: "E-Despatch System — GMDC",
    client: "Gujarat Mineral Development Corporation (GMDC)",
    industry: "Mining / Government",
    location: "Mata-No-Madh, Kutch, Gujarat",
    featured: true,
    image: "project-gmdc-mining.jpg",
    summary:
      "A visionary e-Governance project by the Government of Gujarat and its Dept. of Mines to computerize lignite mines at Mata-No-Madh in Kutch, ensuring accurate ore delivery and stopping leakage through unauthorized access via automated dispatch systems.",
    scope:
      "Integrated e-Despatch system functioning on RFID smart card technology, static weighbridges, weigh-in-motion platforms, CCTV truck image capture, high-performance dome cameras, wireless networking, and GNFC VSAT WAN connectivity.",
    specifications: [
      "RFID-based smart card validation for all customer truck transactions",
      "Fixed CCTV cameras capturing truck images at processing gates plus high-performance dome cameras for route monitoring",
      "HCL PC Servers at Mata-No-Madh site (NT platform) and Ahmedabad HO for database storage, MIS & video retrieval",
      "Wireless networking and GNFC VSAT WAN linking token gate to HO in real time",
      "Automated targets: Transaction management, unauthorized access detection, leakage capture, and real-time monitoring",
    ],
  },
  {
    slug: "gujarat-rto-check-post",
    title: "Check Post Automation / Integrated Highway Check Post Project",
    client: "Transport Department, Government of Gujarat (RTO)",
    industry: "Transport / Government",
    location: "Pan-Gujarat (10 Check Posts across 53 Lanes)",
    featured: true,
    image: "project-rto-checkpost.jpg",
    summary:
      "A landmark governance project by the Government of Gujarat and its Dept. of Transport to computerize all 10 Regional Transport Office (RTO) check posts across 53 dedicated lanes, automating overweight commercial vehicle detection and revenue collection.",
    scope:
      "Full hardware, software and networking integration across 10 administrative buildings and 53 lanes. Each lane equipped with dedicated PCs connected to static weighbridges, barriers, smart card readers, Large Figure Displays, and number-plate video cameras with automated penalty generation (completed within 3 minutes per vehicle).",
    specifications: [
      "10 RTO check posts and 53 dedicated lanes automated across Gujarat state borders",
      "Automated calculation of excess weight with simultaneous video camera rolling on vehicle number plates",
      "Automated penalty generation for overweight, invalid permits, or expired road taxes displayed on Large Figure Display units",
      "AMP multimode armored fiber-optic cabling (10x10 km) with CISCO 805/2601 routers and RAD leased-line modems",
      "Centralized Oracle Enterprise Server at Ahmedabad HO for consolidated and shift-wise collection tracking",
    ],
  },
  {
    slug: "lng-hazira-cctv",
    title: "CCTV Controls — LNG Hazira Project",
    client: "Shell LNG, Hazira",
    industry: "Oil and gas",
    location: "Hazira, Gujarat",
    featured: true,
    image: "project-lng-cctv.jpg",
    summary:
      "Comprehensive industrial CCTV control and surveillance telemetry installation executed for the LNG terminal facility at Hazira, Gujarat.",
    scope:
      "Centralized CCTV control consoles, telemetry monitors, and hazardous-area camera integration for operational terminal surveillance.",
  },
  {
    slug: "lng-hazira-praesideo",
    title: "Praesideo Announcement System — LNG Hazira Project",
    client: "Shell LNG, Hazira",
    industry: "Oil and gas",
    location: "Hazira, Gujarat",
    image: "project-lng-praesideo.jpg",
    summary:
      "Engineering, supply and commissioning of the Bosch Praesideo digital public address and plant emergency announcement system controls for the LNG Hazira project.",
    scope:
      "Digital acoustic zoning, emergency intercoms, and high-intelligibility announcement consoles integrated throughout plant operational zones.",
  },
  {
    slug: "power-plant-high-mast",
    title: "High Mast Installation in a Power Plant",
    client: "Regional Power Generation Authority",
    industry: "Power",
    image: "project-power-highmast.jpg",
    summary:
      "Turnkey supply, foundation, structural erection and commissioning of heavy industrial high mast floodlighting towers for power generation plant facilities.",
    scope:
      "Heavy-duty high mast lighting poles with automated motorized lowering mechanisms, floodlighting luminaires, and power control panels.",
  },
  {
    slug: "rto-check-post-wiring",
    title: "R.T.O. Check Post CCTV & Telemetry Wiring",
    client: "Transport Department, Government of Gujarat",
    industry: "Transport",
    image: "project-rto-checkpost.jpg",
    summary:
      "Structured cabling, instrumentation wiring, and CCTV camera signal transmission infrastructure deployed across border check post lanes.",
    scope:
      "Industrial electrical and sensor wiring linking static weighbridges, barrier gates, vehicle recognition cameras, and operator consoles.",
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
