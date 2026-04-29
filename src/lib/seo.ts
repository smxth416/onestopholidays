import type { Destination } from "@/data/destinations";

const SITE_ORIGIN = "https://onestopholidays.co";

export const destinationMetadata = (city: string, canonicalSlug: string = city) => ({
  title: `${city} Tour Packages from Rajkot | One Stop Holidays`,
  description: `Book your ${city} international journey from Rajkot, Gujarat. Expertly curated itineraries with local support and transparent pricing.`,
  alternates: { canonical: `${SITE_ORIGIN}/blog/${canonicalSlug.toLowerCase()}` },
});

export const applyDestinationSEO = (destination: Destination) => {
  const meta = destinationMetadata(destination.name, destination.slug);

  document.title = meta.title;

  // Update (or create) the canonical link tag for SPA navigations.
  const canonicalUrl = meta.alternates.canonical;
  let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = canonicalUrl;

  // Update the meta description as well so it matches the canonical page.
  let descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement("meta");
    descriptionMeta.name = "description";
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.content = meta.description;

  return {
    ...meta,
    canonical: canonicalUrl,
  };
};

export const getDestinationCanonical = (destination: Destination) =>
  destinationMetadata(destination.name, destination.slug).alternates.canonical;

