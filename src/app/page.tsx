import { Hero } from "@/components/sections/Hero";
import { CompanyIntroduction } from "@/components/sections/CompanyIntroduction";
import { Capabilities } from "@/components/sections/Capabilities";
import { Industries } from "@/components/sections/Industries";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Experience } from "@/components/sections/Experience";
import { PrincipalsSection } from "@/components/sections/Principals";
import { ClientsSection } from "@/components/sections/Clients";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { createPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: site.shortName,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntroduction />
      <Capabilities />
      <Industries />
      <FeaturedProjects />
      <Experience />
      <PrincipalsSection />
      <ClientsSection />
      <ContactCTA />
    </>
  );
}
