export const site = {
  name: "Chashmita Engineers Pvt. Ltd.",
  shortName: "Chashmita Engineers",
  url: "https://chashmita.co.in",
  established: 1990,
  tagline: "Engineering systems. Delivering certainty.",
  description:
    "Turnkey design, engineering, supply, installation, testing, commissioning and maintenance for electrical, lighting, communication and CCTV systems across industrial sectors.",
} as const;

export function asset(path: string) {
  return `/images/site/${path}`;
}

export const contact = {
  company: "CHASHMITA ENGINEERS PVT. LTD.",
  lines: ["403-B ALKAPURI ARCADE,", "R.C.DUTT ROAD,", "BARODA-390 005"],
  city: "Vadodara (Baroda)",
  phones: ["0265 2355309", "0265 2337025"],
  phoneDisplay: ["+91 0265 2355309", "+91 0265 2337025"],
  fax: "0265-2337025",
  emails: ["info@chashmita.com", "chashmita@icenet.net"],
} as const;
