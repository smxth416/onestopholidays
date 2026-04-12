import { useState } from "react";
import { Link } from "react-router-dom";
import { destinations } from "@/data/destinations";

const DestinationsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Collections");

  const filters = ["All Collections", "Mountain Retreats", "Coastal Luxury", "Desert Safari", "International Gems"];

  const filtered = activeFilter === "All Collections"
    ? destinations
    : destinations.filter((d) => d.category === activeFilter);

  const faqs = [
    { q: "What is the best time to book international packages?", a: "We recommend booking at least 3-4 months in advance for premium destinations like the Maldives or Dubai to ensure luxury villa availability and the most competitive flight rates." },
    { q: "Do you offer customized itinerary planning?", a: "Absolutely. Our concierge team specializes in bespoke travel arrangements, allowing you to tailor every meal, excursion, and transfer to your specific preference." },
    { q: "What safety protocols are in place for mountain treks?", a: "For destinations like Manali and Kashmir, we provide certified guides, emergency communication equipment, and health assessments to ensure a secure yet exhilarating adventure." },
  ];

  return (
    <main className="pt-24">
      {/* Hero & Filter */}
      <section className="min-h-[409px] flex flex-col justify-end px-8 max-w-7xl mx-auto pb-12">
        <h1 className="font-headline text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-12">
          Curated <br />
          <span className="italic text-primary">Escapes</span>
        </h1>
        <div className="flex flex-wrap items-center gap-4 py-8 border-t border-outline-variant/20">
          <span className="font-label text-xs uppercase tracking-widest text-outline mr-4">Filter By Experience</span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full font-label text-sm transition-all ${
                activeFilter === f
                  ? "bg-secondary text-on-secondary"
                  : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-8 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <div key={dest.name} className="group relative bg-surface-container-lowest rounded-DEFAULT overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img alt={dest.name} className="w-full h-full object-cover rounded-[12px] m-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] transition-transform duration-700 group-hover:scale-110" src={dest.img} />
              </div>
              <div className="p-8 pt-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-3xl">{dest.name}</h3>
                  <span className="font-label text-xs font-bold px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full">FROM {dest.price}</span>
                </div>
                <p className="font-body text-lg text-on-surface/70 mb-6 leading-relaxed">{dest.desc}</p>
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="block w-full py-4 rounded-full border border-outline-variant text-on-surface font-label text-xs uppercase tracking-widest hover:bg-primary-container hover:text-on-primary hover:border-transparent transition-all text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">Inquiries</span>
            <h2 className="font-headline text-5xl mt-4">Traveler Essentials</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-DEFAULT p-8">
                <h3 className="font-headline text-2xl mb-4">{faq.q}</h3>
                <p className="font-body text-lg text-on-surface/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="font-label text-sm text-on-surface-variant">Still have questions? <a className="text-secondary font-bold underline underline-offset-4 decoration-secondary/30 hover:decoration-secondary" href="#">Connect with a Curator</a></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationsPage;
