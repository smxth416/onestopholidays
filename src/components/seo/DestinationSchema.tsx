import type { Destination } from "@/data/destinations";

import { getDestinationCanonical } from "@/lib/seo";

type Props = {
  destination: Destination;
  canonicalUrl?: string;
};

const toDays = (duration: string) => {
  const match = duration.match(/(\d+)\s*Days?/i);
  return match ? Number(match[1]) : undefined;
};

const toNights = (duration: string) => {
  const match = duration.match(/(\d+)\s*Nights?/i);
  return match ? Number(match[1]) : undefined;
};

export const DestinationSchema = ({ destination, canonicalUrl }: Props) => {
  const canonical = canonicalUrl ?? getDestinationCanonical(destination);
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${destination.name} Tour Packages from Rajkot`,
    description: destination.longDesc,
    url: canonical,
    inLanguage: "en",
    provider: {
      "@type": "TravelAgency",
      name: "One Stop Holidays",
      url: "https://onestopholidays.co",
    },
    areaServed: "IN",
    category: destination.category,
    travelDestination: {
      "@type": "City",
      name: destination.name,
    },
    ...(toDays(destination.duration) ? { numberOfDays: toDays(destination.duration) } : {}),
    ...(toNights(destination.duration) ? { numberOfNights: toNights(destination.duration) } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be exact; inject as raw JSON.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

