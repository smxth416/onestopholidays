import { useParams } from "react-router-dom";
import { SmoothLink as Link } from "@/components/SmoothLink";
import { ArrowLeft, Calendar, Clock, MapPin, Check } from "lucide-react";
import { destinations } from "@/data/destinations";
import { motion } from "framer-motion";

const DestinationDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const dest = destinations.find((d) => d.slug === slug);

  if (!dest) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-headline text-4xl mb-4">Destination Not Found</h1>
          <Link to="/destinations" className="text-secondary underline font-label">Back to Destinations</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-12 md:py-20 flex flex-col justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Contained Image */}
          <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square w-full rounded-[32px] overflow-hidden shadow-2xl order-1 lg:order-1">
            <img src={dest.img} alt={dest.name} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div className="w-full lg:max-w-xl order-2 lg:order-2">
            <header className="mb-6 md:mb-8">
              <span className="font-label text-[10px] md:text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-3 block">
                {dest.category}
              </span>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-tight">
                {dest.name}
              </h1>
            </header>

            <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-8 md:mb-10">
              {dest.longDesc}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 mb-10 py-6 border-y border-outline-variant/15">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-secondary/70" />
                </div>
                <span className="font-label text-[10px] md:text-xs tracking-wide text-on-surface/80 font-bold">{dest.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-secondary/70" />
                </div>
                <span className="font-label text-[10px] md:text-xs tracking-wide text-on-surface/80 font-bold">{dest.bestTime}</span>
              </div>
              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-secondary/70" />
                </div>
                <span className="font-label text-[10px] md:text-xs tracking-wide text-on-surface/80 font-bold">{dest.category.split(' ')[0]}</span>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full bg-primary text-white py-5 rounded-full font-label text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all shadow-md active:scale-[0.99]">
                Request Bespoke Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="text-center mb-12 md:mb-20">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">What Awaits</span>
            <h2 className="font-headline text-3xl md:text-5xl mt-4 text-primary">Experience Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {dest.highlights.map((h, i) => (
              <div key={i} className="rounded-[24px] p-8 flex items-start gap-5 border border-outline-variant/10 shadow-sm bg-white hover:shadow-xl transition-all duration-500">
                <span className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-secondary/10">
                  <Check className="w-5 h-5 text-secondary" />
                </span>
                <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 w-full relative">
          <div className="text-center mb-16 md:mb-24">
            <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary font-bold">Your Journey</span>
            <h2 className="font-headline text-3xl md:text-6xl mt-4 text-primary">Day-by-Day Itinerary</h2>
          </div>

          <div className="relative w-full">
            {dest.itinerary.map((item, i) => {
              const isEven = i % 2 === 0;
              const isLast = i === dest.itinerary.length - 1;

              return (
                <div key={i} className="relative w-full flex flex-col items-center md:block mb-10 md:mb-20 group">
                  
                  {/* The Box */}
                  <div className={`w-full md:w-[60%] rounded-[32px] p-8 shadow-sm border border-outline-variant/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative bg-white ${isEven ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"}`} style={{ zIndex: 10 }}>

                    {/* Day Badge */}
                    <div className="flex justify-start md:justify-center w-full mb-6">
                      <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                        <span className="font-label text-[10px] md:text-xs uppercase tracking-widest text-secondary font-bold whitespace-nowrap">{item.day}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-headline text-xl md:text-2xl mb-4 text-left leading-tight text-primary font-bold italic">{item.title}</h3>
                    <ul className="space-y-3 mt-6 flex flex-col items-start">
                      {item.description.split(/\.\s+/).filter(Boolean).map((point, pi) => (
                        <li key={pi} className="flex items-start gap-3 text-left">
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-secondary mt-1.5 opacity-60"></span>
                          <span className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                            {point.endsWith(".") ? point : `${point}.`}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connecting Line (Desktop) */}
                  {!isLast && (
                    <svg className="hidden md:block absolute w-full h-[180px] top-[100%] left-0 pointer-events-none -mt-10" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 0 }}>
                      <motion.path 
                        d={isEven ? "M 30 0 C 30 50, 70 50, 70 100" : "M 70 0 C 70 50, 30 50, 30 100"} 
                        fill="none" 
                        stroke="rgba(0,108,78,0.25)" 
                        strokeWidth="1" 
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        animate={{ strokeDashoffset: [0, -8] }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ 
                          pathLength: { duration: 1.5, ease: "linear" },
                          opacity: { duration: 0.5 },
                          strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" }
                        }}
                      />
                    </svg>
                  )}

                  {/* Connecting Line (Mobile) */}
                  {!isLast && (
                    <div className="md:hidden w-0.5 h-10 bg-gradient-to-b from-secondary/20 via-secondary/40 to-secondary/20 mt-2 opacity-30"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-20 md:py-32 border-y border-outline-variant/10 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
          <div className="text-center mb-16 md:mb-20">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">Details</span>
            <h2 className="font-headline text-3xl md:text-5xl mt-4 text-primary">Inclusions & Exclusions</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Inclusions */}
            <div className="rounded-[32px] p-8 md:p-12 shadow-sm border border-outline-variant/10 bg-zinc-50/20">
              <h3 className="font-headline text-2xl md:text-3xl mb-8 flex items-center gap-4 text-primary">
                <span className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-xl font-bold border border-green-100">✓</span>
                What's Included
              </h3>
              <div className="space-y-4">
                {dest.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-base md:text-lg text-on-surface-variant">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {dest.exclusions ? (
              <div className="rounded-[32px] p-8 md:p-12 shadow-sm border border-outline-variant/10 bg-zinc-50/20">
                <h3 className="font-headline text-2xl md:text-3xl mb-8 flex items-center gap-4 text-primary">
                  <span className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 text-xl font-bold border border-rose-100">×</span>
                  What's Excluded
                </h3>
                <div className="space-y-4">
                  {dest.exclusions.map((exc, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-5 h-5 flex items-center justify-center text-rose-400 flex-shrink-0 mt-0.5 font-bold">✖</span>
                      <span className="font-body text-base md:text-lg text-on-surface-variant">{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-zinc-50/20 rounded-[32px] p-8 md:p-12 border border-outline-variant/10 flex items-center justify-center">
                <p className="font-body text-base md:text-lg text-on-surface-variant opacity-60 text-center italic">Comprehensive premium package. Additional personalization available upon request.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center w-full">
          <h2 className="font-headline text-4xl md:text-6xl mb-6 text-primary leading-tight">Ready to Experience <br/><span className="italic text-secondary">{dest.name}?</span></h2>
          <p className="font-body text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
            Let our travel curators craft a personalized itinerary tailored to your unique preferences. Every detail, handled with perfection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-secondary text-on-secondary px-12 py-5 rounded-full font-label text-xs font-bold tracking-[0.2em] uppercase hover:bg-secondary/90 active:scale-95 transition-all shadow-lg"
            >
              Enquire Now
            </Link>
            <Link
              to="/destinations"
              className="w-full sm:w-auto px-12 py-5 rounded-full border border-outline-variant/30 text-on-surface font-label text-xs uppercase tracking-[0.2em] font-bold hover:bg-zinc-50 transition-all"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationDetailPage;
