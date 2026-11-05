import Image from "next/image";
import { companyIntro } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { asset } from "@/lib/site";

export function CompanyIntroduction() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] max-h-[32rem] overflow-hidden">
            <Image
              src={asset("photo3.jpg")}
              alt="CCTV controls installation at LNG Hazira project"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 38vw"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Company"
            title={companyIntro.headline}
            description={`Established in ${companyIntro.established}. ${companyIntro.summary}`}
          />
        </div>
      </Container>
    </section>
  );
}
