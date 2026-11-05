export type IndustrySector = {
  id: string;
  name: string;
  image?: string;
};

/** Sector names from the original site navigation (orphan \"Sector\" entry omitted). */
export const industrySectors: IndustrySector[] = [
  { id: "power", name: "Power", image: "layout_16.jpg" },
  { id: "fertilizers", name: "Fertilizers", image: "layout_17.jpg" },
  { id: "chemicals", name: "Chemicals", image: "layout_18.jpg" },
  { id: "oil-gas", name: "Oil and gas", image: "layout_19.jpg" },
  { id: "petrochemicals", name: "Petrochemicals", image: "layout_20.jpg" },
  { id: "glass", name: "Glass", image: "layout_21.jpg" },
  { id: "cement", name: "Cement", image: "layout_22.jpg" },
  { id: "mining", name: "Mining", image: "layout_05.jpg" },
  { id: "transportation", name: "Transportation", image: "layout_06.jpg" },
  { id: "government", name: "Government", image: "layout_07.jpg" },
  { id: "steel", name: "Steel", image: "layout_08.jpg" },
  {
    id: "epc-consultants",
    name: "EPC contractors and consultants",
    image: "layout_09.jpg",
  },
];
