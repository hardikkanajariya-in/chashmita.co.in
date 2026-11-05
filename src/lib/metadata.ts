import type { Metadata } from "next";
import { site } from "./site";

type PageMetaInput = {
  title: string;
  description?: string;
  path: string;
};

export function createPageMetadata({
  title,
  description = site.description,
  path,
}: PageMetaInput): Metadata {
  const url = `${site.url}${path}`;
  return {
    title: `${title} | ${site.shortName}`,
    description,
    openGraph: {
      title: `${title} | ${site.shortName}`,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
    },
  };
}
