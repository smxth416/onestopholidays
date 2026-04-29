🌍 ONE STOP HOLIDAYS — SEO & CONTENT MASTER PLAN
Target: International Tourism Packages | Location: Rajkot, Gujarat
Domain: onestopholidays.co | Strategy: 100vh Minimalist Design
1. PROJECT ARCHITECTURE & TECH STACK
Framework: Next.js 14+ (App Router)

Styling: Tailwind CSS (referencing global.css or index.css for brand variables).

Layout Constraint: Strict 100vh sections for all main pages.

Visuals: No raster images. All visuals use SVG illustrations, CSS-drawn shapes, or glassmorphism effects.

File Structure (New Additions)
Plaintext
/app
  /blog
    page.tsx                        ← Minimalist Grid (The 10 Destinations)
    /[slug]
      page.tsx                      ← Individual Destination Detailed Guide
/components
  /seo
    DestinationSchema.tsx           ← JSON-LD for Tourism/Product
    FAQSchema.tsx                   ← JSON-LD for FAQPage
/lib
  seo.ts                            ← Global Metadata & Canonical Generator
2. KEYWORD MAPPING & DESTINATION TARGETING
The strategy focuses on "Rajkot to [Destination]" search intent to capture high-intent local travelers.

Destination	Primary Keyword (Rajkot Focus)	Search Intent
Dubai	"Dubai tour packages from Rajkot"	Transactional
Bali	"Bali honeymoon packages Rajkot"	Commercial
Singapore & Malaysia	"Singapore Malaysia tour from Rajkot"	Transactional
Vietnam	"Vietnam travel agency in Rajkot"	Investigation
Euro Trio	"Europe tour packages from Rajkot Gujarat"	High-Value
Hong Kong & Macau	"Hong Kong Disneyland packages Rajkot"	Family-Focus
Thailand (Ultimate)	"Thailand full circuit tour from Rajkot"	Transactional
Thailand (Highlights)	"Cheap Thailand packages from Rajkot"	Budget/Value
Sri Lanka	"Sri Lanka wellness retreat Rajkot"	Lifestyle
Spiritual Circuit	"Kashi Ayodhya tour package from Rajkot"	Spiritual/Group
3. BLOG HUB PAGE: /blog (100vh GRID)
Design Directive: Minimalist list or bento-grid layout. No images—use CSS gradients and SVG icons representing each country (e.g., Burj Khalifa SVG for Dubai).

Section 1: Hero (100vh)
H1: "Explore the World from Rajkot"

Typography: Syne (Display), DM Sans (Body).

Brand Colors: Derived from index.css (e.g., --brand-primary).

Content: "Handcrafted international journeys curated for the travelers of Rajkot."

Section 2: Destination Grid (100vh)
Layout: 10-card bento grid or paginated CSS scroll-snap list.

Interaction: Hovering over a card reveals a "View Itinerary" SVG arrow.

Content: Each card displays: SVG Icon + Destination Name + Duration (e.g., 6 Days) + One-line USP.

4. BLOG INDIVIDUAL PAGE: /[slug] (100vh SCROLL-SNAP)
Layout: Every section is exactly min-height: 100vh.

Section 1: Destination Hero
H1: "[Destination] Tour Packages from Rajkot"

Background: CSS-generated glassmorphism panel.

Breadcrumb: Home > Destinations > [Destination]

Section 2: The Itinerary Highlights
H2: "Your [Destination] Journey at a Glance"

Content: A vertical CSS timeline showing days.

Example (Dubai): "Day 1: Desert Safari | Day 5: Burj Khalifa & Architecture."

Section 3: Rajkot-Specific Logistics
H2: "Traveling from Rajkot to [Destination]"

Content: Information on flights from Hirasar (Rajkot) Airport (HSR) or Ahmedabad (AMD) connections.

Section 4: FAQ & Local Context
H2: "Common Questions for Rajkot Travelers"

Questions: "Do I need a visa from India?", "Best time to visit?", "Vegetarian food availability?"

5. TECHNICAL SEO & AUTHORITY BUILDING
seo.ts Implementation
TypeScript
export const destinationMetadata = (city: string) => ({
  title: `${city} Tour Packages from Rajkot | One Stop Holidays`,
  description: `Book your ${city} international journey from Rajkot, Gujarat. Expertly curated itineraries with local support and transparent pricing.`,
  alternates: { canonical: `https://onestopholidays.co/blog/${city.toLowerCase()}` },
});
JSON-LD Schema (LocalBusiness + Organization)
JSON
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "One Stop Holidays",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "The City Center, Raiya Rd, Nehru Nagar",
    "addressLocality": "Rajkot",
    "addressRegion": "Gujarat",
    "postalCode": "360007",
    "addressCountry": "IN"
  },
  "telephone": "+91 92136-92135",
  "url": "https://onestopholidays.co"
}
6. BACKLINK & AUTHORITY BUILDING STRATEGY
Tier 1: Consistent NAP (Name, Address, Phone) on JustDial Rajkot, Sulekha Rajkot, and Google Business Profile.

Tier 2: Guest posts on Gujarat-centric travel blogs or lifestyle portals in Ahmedabad and Rajkot.

Tier 3: "The Rajkot Traveler’s 2026 Guide to International Holidays"—a downloadable resource to earn natural links from local news portals like Divya Bhaskar (digital).

Social: Instagram/LinkedIn posts targeting "Rajkot Travelers" with clean, minimalist SVG carousels.

✅ IMPLEMENTATION CHECKLIST
Strict 100vh: Use h-screen or min-h-[100dvh] on all section wrappers.

No Images: Use lucide-react icons or custom SVGs in /components/icons.

Local Context: Ensure every destination page mentions "Rajkot" in the H1 and first paragraph.

Speed: Ensure LCP < 2.0s by preloading brand fonts in the layout.tsx.