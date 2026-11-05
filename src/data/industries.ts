export type IndustrySector = {
  id: string;
  name: string;
  image?: string;
};

/** Sector names from the original site navigation (orphan \"Sector\" entry omitted). */
export const industrySectors: IndustrySector[] = [
  { id: "power", name: "Power", image: "industry-power.jpg" },
  { id: "fertilizers", name: "Fertilizers", image: "industry-fertilizers.jpg" },
  { id: "chemicals", name: "Chemicals", image: "industry-chemicals.jpg" },
  { id: "oil-gas", name: "Oil and gas", image: "industry-oil-gas.jpg" },
  { id: "petrochemicals", name: "Petrochemicals", image: "industry-petrochemicals.jpg" },
  { id: "glass", name: "Glass", image: "industry-glass.jpg" },
  { id: "cement", name: "Cement", image: "industry-cement.jpg" },
  { id: "mining", name: "Mining", image: "industry-mining.jpg" },
  { id: "transportation", name: "Transportation", image: "industry-transportation.jpg" },
  { id: "government", name: "Government", image: "industry-government.jpg" },
  { id: "steel", name: "Steel", image: "industry-steel.jpg" },
  {
    id: "epc-consultants",
    name: "EPC contractors and consultants",
    image: "industry-epc.jpg",
  },
];
