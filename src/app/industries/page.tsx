import Image from "next/image";
import { industrySectors } from "@/data/industries";
import { clientGroups } from "@/data/clients";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { asset } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

const sectorIdMap: Record<string, string> = {
  power: "1",
  fertilizers: "2",
  chemicals: "3",
  "oil-gas": "4",
  petrochemicals: "5",
  glass: "6",
  cement: "7",
  mining: "8",
  transportation: "9",
  government: "10",
  steel: "11",
  "epc-consultants": "12",
};

export const metadata = createPageMetadata({
  title: "Industries",
  description:
    "Industrial sectors served by Chashmita Engineers across power, process, infrastructure and government projects.",
  path: "/industries/",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector experience"
        description="Industry groupings referenced in the company customer list and site navigation."
      />
      <section className="py-14 lg:py-20">
        <Container>
          <ul className="grid gap-10 lg:grid-cols-2">
            {industrySectors.map((sector) => {
              const groupId = sectorIdMap[sector.id];
              const clients =
                clientGroups.find((g) => g.id === groupId)?.names ?? [];
              const epcAndConsultants =
                sector.id === "epc-consultants"
                  ? [
                      ...clientGroups.find((g) => g.id === "12")!.names,
                      ...clientGroups.find((g) => g.id === "13")!.names,
                    ]
                  : clients;

              return (
                <li
                  key={sector.id}
                  id={sector.id}
                  className="grid gap-6 border border-border bg-white sm:grid-cols-5"
                >
                  <div className="relative min-h-[12rem] sm:col-span-2">
                    {sector.image ? (
                      <Image
                        src={asset(sector.image)}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="240px"
                      />
                    ) : null}
                  </div>
                  <div className="p-6 sm:col-span-3">
                    <h2 className="font-display text-xl font-semibold text-graphite">
                      {sector.name}
                    </h2>
                    <ul className="mt-4 space-y-1.5 text-sm text-muted">
                      {epcAndConsultants.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-12 max-w-2xl text-sm text-muted">
            Lists reflect names published on the original customer list page.
            They indicate project experience documented at the time of
            publication, not necessarily current commercial relationships.
          </p>
        </Container>
      </section>
    </>
  );
}
