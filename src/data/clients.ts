export type ClientGroup = {
  id: string;
  sector: string;
  names: string[];
};

/** Customer and consultant lists from c_l.htm (spellings preserved where they are proper names). */
export const clientGroups: ClientGroup[] = [
  {
    id: "1",
    sector: "Power sector",
    names: [
      "Gujarat Electricity Board",
      "National Thermal Power Corporation",
      "Delhi Vidyut Board",
      "Tata Electric Co.",
      "Bombay Suburban Electric Corporation",
      "Ahmedabad Electricity Corporation",
      "Haryana power Gas Corpn. Ltd.",
      "Power Grid Corporation",
      "Gujarat Industrial Power Corpn. Ltd.",
    ],
  },
  {
    id: "2",
    sector: "Fertilizer sector",
    names: [
      "Gujarat State Fertilizer & Chemicals Ltd.",
      "Gujarat Narmada Valley Fertilizers Co. Ltd.",
      "Krishak Bharti Co-operative Ltd.",
      "Indian Farmers & Fertilizers Co. Ltd.",
      "Rashtriya Chemicals & Fertilizers",
      "Zuari Chemicals & Fertilizers",
    ],
  },
  {
    id: "3",
    sector: "Chemical sector",
    names: [
      "Gujarat Alkalies & Chemicals Ltd.",
      "Narmada Chematur Petrochemicals Ltd.",
      "Tata Chemicals",
      "Deepak Nitrite Ltd.",
      "Ashok Organic",
      "Godrej Soaps Ltd. (Gujarat Godrej)",
      "Indian Rayons",
    ],
  },
  {
    id: "4",
    sector: "Oil & gas industry sector",
    names: [
      "Indian Oil Corpn. Ltd.",
      "Bharat Petroleum Corpn. Ltd.",
      "Oil & Natural Gas Commission",
      "Indian Oil Petrons Ltd.",
      "Gujarat Petronet, Dahej",
      "Shell LNG, Hazira",
    ],
  },
  {
    id: "5",
    sector: "Petrochemicals sector",
    names: ["Indian Petrochemicals Corpn. Ltd", "Relaiance", "Bayer ABS"],
  },
  {
    id: "6",
    sector: "Glass industry sector",
    names: ["Gujarat Guardian", "Gujarat Glass", "Videocon Narmada Glass"],
  },
  {
    id: "7",
    sector: "Cement sector",
    names: [
      "Ultratech Cement (L&T Cement)",
      "Vikram Cement",
      "J.K. Cement",
      "Associated Cement Co.",
    ],
  },
  {
    id: "8",
    sector: "Mining sector",
    names: [
      "Gujarat Mineral Development Corpn.",
      "National Mineral Development Corpn.",
      "Hutty Gold Mines",
      "Jaduguda Uranium Mines",
    ],
  },
  {
    id: "9",
    sector: "Transport sector",
    names: [
      "National Highway Authority of India (through L&T)",
      "Baroda-Halol Highway through Punj Lloyd",
      "Western Railway",
    ],
  },
  {
    id: "10",
    sector: "Government sector",
    names: [
      "Transport Department, Govt. of Gujarat",
      "Gujarat Administration Dept. of Gujarat Secretariat",
    ],
  },
  {
    id: "11",
    sector: "Steel sector",
    names: [
      "Steelco Gujarat",
      "KYCR Steel Industries, Bangladesh",
      "Yesu Steel Co., Ethiopia",
    ],
  },
  {
    id: "12",
    sector: "EPC contractors",
    names: [
      "Siemens",
      "L & T",
      "Toyo Engg.",
      "ABB",
      "Alstom",
      "Integra Hindustan",
    ],
  },
  {
    id: "13",
    sector: "Consultants",
    names: [
      "Engineers India Ltd.",
      "Projects Development India Ltd.",
      "UHDE India",
      "Tecnimont ICB",
      "Toyo Engineering",
      "Desin",
      "Development Consultants Ltd.",
      "H & G",
      "Fichtner",
      "TCE",
    ],
  },
];

export const consultantApprovals = [
  "EIL",
  "PDIL",
  "Tecnimont",
  "Toyo Engineering",
  "UHDE India",
  "DCPL",
  "Desin",
] as const;

export const customerHighlights = [
  "IOCL",
  "IPCL",
  "BPCL",
  "RELIANCE",
  "BHEL",
  "NTPC",
  "ABB",
  "GEB",
  "GSFC",
  "IFFCO",
  "KRICHCO",
] as const;
