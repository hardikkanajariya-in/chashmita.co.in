export type PrincipalRecord = {
  name: string;
  scope: string;
  note?: string;
};

/** From o_p.htm and about.htm — presented as documented company relationships. */
export const principals: PrincipalRecord[] = [
  {
    name: "M/s Motor Industries Co. Ltd. (Bosch Security Systems; formerly Philips India Limited)",
    scope:
      "Electronics security systems — CCTV, access control, communication, perimeter protection, intrusion detection",
  },
  {
    name: "M/s. Philips India Ltd., GE Lighting & Bajaj Electrical Ltd.",
    scope: "Lighting systems",
  },
  {
    name: "DNH, Norway",
    scope: "Speakers",
  },
  {
    name: "FITRE, Italy",
    scope: "Communication systems",
  },
  {
    name: "Philips",
    scope: "Design software and technical support for lighting, communication and CCTV systems",
    note: "Referenced in company profile for design support and service training.",
  },
  {
    name: "Bosch",
    scope: "Technical assistance and design support; design software",
    note: "Referenced in company profile alongside project execution.",
  },
  {
    name: "Sartorius",
    scope: "Technical assistance and design support",
    note: "Referenced in company profile.",
  },
  {
    name: "R. Stahl",
    scope: "Technical assistance, design support and design software",
    note: "Referenced in company profile.",
  },
];

export const sidebarPrincipalNames = [
  "M/s Motor Industries Co. Ltd.",
  "M/s. Philips India Ltd. GE Lighting & Bajaj Electrical Ltd.",
  "DNH, Norway",
  "FITRE, Italy",
] as const;
