import { useState, useMemo } from "react";
import { SmoothLink as Link } from "@/components/SmoothLink";
import { OptimizedImage } from "@/components/OptimizedImage";
import { destinations } from "@/data/destinations";

const DestinationsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Collections");

  const filters = ["All Collections", "Mountain Retreats", "Coastal Luxury", "Desert Safari", "International Gems"];

  const filtered = useMemo(() => {
    return activeFilter === "All Collections"
      ? destinations
      : destinations.filter((d) => d.category === activeFilter);
  }, [activeFilter]);

  const faqs = [
    { q: "What is the best time to book international packages?", a: "We recommend booking at least 3-4 months in advance for premium destinations like the Maldives or Dubai to ensure luxury villa availability and the most competitive flight rates." },
    { q: "Do you offer customized itinerary planning?", a: "Absolutely. Our concierge team specializes in bespoke travel arrangements, allowing you to tailor every meal, excursion, and transfer to your specific preference." },
    { q: "What safety protocols are in place for mountain treks?", a: "For destinations like Manali and Kashmir, we provide certified guides, emergency communication equipment, and health assessments to ensure a secure yet exhilarating adventure." },
  ];

  return (
    <main className="bg-white">
      {/* Hero & Filter */}
      <section className="pt-24 md:pt-32 pb-8 px-6 md:px-8 w-full bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-8 md:mb-10 text-primary">
            Curated <br />
            <span className="italic text-secondary">Escapes.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-6 py-8 border-t border-outline-variant/20">
            <span className="font-label text-[10px] md:text-xs uppercase tracking-[0.2em] text-outline-variant font-bold">Filter By Experience</span>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 md:px-6 py-2 rounded-full font-label text-[10px] md:text-sm transition-all shadow-sm border ${activeFilter === f
                    ? "bg-secondary text-on-secondary shadow-md border-secondary"
                    : "bg-white text-on-surface hover:bg-zinc-50 border-outline-variant/30"
                    } `}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="flex flex-col justify-center px-6 md:px-8 w-full bg-white" style={{ contain: 'paint' }}>
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((dest) => (
            <Link
              key={dest.name}
              to={`/destinations/${dest.slug}`}
              className="group relative rounded-[28px] bg-white border border-zinc-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full cursor-pointer transform-gpu"
              style={{ contain: 'layout paint' }}
            >
                <OptimizedImage
                  src={dest.img}
                  alt={dest.name}
                  className="transition-transform duration-700 group-hover:scale-110"
                  containerClassName="aspect-[4/3] m-2 rounded-[22px] flex-shrink-0"
                />
              <div className="p-6 md:p-8 pt-4 flex flex-col flex-grow text-center">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-2">{dest.category}</span>
                <h3 className="font-headline text-2xl md:text-3xl text-primary mb-3">{dest.name}</h3>
                <p className="font-body text-sm text-on-surface-variant/80 leading-relaxed flex-grow mb-8 mx-auto line-clamp-3">{dest.desc}</p>
                <div className="mt-auto">
                  <span className="block w-full py-4 rounded-full border border-zinc-100 text-primary font-label text-[10px] uppercase tracking-[0.2em] font-bold group-hover:bg-primary group-hover:text-white transition-all text-center">
                    Explore Journey
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col justify-center py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 w-full">
          <div className="text-center mb-12 md:mb-20">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">Inquiries</span>
            <h2 className="font-headline text-3xl md:text-5xl mt-4 text-primary">Traveler Essentials</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-[24px] p-6 md:p-8 border border-outline-variant/10 bg-zinc-50/30" style={{ contain: 'content' }}>
                <h3 className="font-headline text-xl md:text-2xl mb-4 text-primary">{faq.q}</h3>
                <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-16 text-center">
            <p className="font-label text-sm text-on-surface-variant">Still have questions? <a className="text-secondary font-bold underline underline-offset-4 decoration-secondary/30 hover:decoration-secondary" href="#">Connect with a Curator</a></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationsPage;
