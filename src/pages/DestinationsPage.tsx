import { useState } from "react";
import { SmoothLink as Link } from "@/components/SmoothLink";
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
    <main>
      {/* Hero & Filter */}
      <section className="pt-32 pb-8 px-8 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-10">
            Curated <br />
            <span className="italic text-primary">Escapes.</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 py-8 border-t border-outline-variant/20">
            <span className="font-label text-xs uppercase tracking-widest text-outline mr-4">Filter By Experience</span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 rounded-full font-label text-sm transition-all shadow-sm ${activeFilter === f
                  ? "bg-secondary text-on-secondary shadow-md hover:shadow-lg"
                  : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-high border border-outline-variant/30"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="flex flex-col justify-center px-8 w-full">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((dest) => (
            <div key={dest.name} className="group relative bg-white rounded-[24px] shadow-sm hover:shadow-xl border border-outline-variant/10 overflow-hidden transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden m-2 rounded-[18px]">
                <img alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={dest.img} />
              </div>
              <div className="p-6 pt-3">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-headline text-2xl text-primary">{dest.name}</h3>
                  <span className="font-label text-[10px] font-bold px-3 py-1.5 bg-secondary-container text-on-secondary-container rounded-full tracking-widest">FROM {dest.price}</span>
                </div>
                <p className="font-serif-display text-base text-on-surface-variant mb-6 line-clamp-3 leading-relaxed">{dest.desc}</p>
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="block w-full py-3 rounded-full border border-outline-variant/50 text-on-surface font-label text-[11px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="min-h-screen flex flex-col justify-center py-24">
        <div className="max-w-4xl mx-auto px-8 w-full">
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
