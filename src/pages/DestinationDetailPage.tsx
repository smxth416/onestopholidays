import { useParams } from "react-router-dom";
import { SmoothLink as Link } from "@/components/SmoothLink";
import { ArrowLeft, Calendar, Clock, MapPin, Check } from "lucide-react";
import { destinations } from "@/data/destinations";

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
    <main>
      {/* 100vh Minimalistic Hero */}
      <section className="h-screen max-h-screen flex flex-col justify-center px-12 md:px-16 lg:px-20 py-12 relative overflow-hidden">
        {/* Integrated Back Button */}
        <div className="absolute top-24 left-12 lg:left-20">
          <Link
            to="/destinations"
            className="group flex items-center gap-2 text-on-surface/40 hover:text-secondary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-label text-xs uppercase tracking-widest">Collections</span>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contained Image */}
          <div className="relative aspect-square lg:aspect-[4/5] max-h-[60vh] rounded-[24px] overflow-hidden shadow-xl">
            <img src={dest.img} alt={dest.name} className="w-full h-full object-cover" />
          </div>

          {/* Minimalist Tech/Details */}
          <div className="max-w-xl">
            <header className="mb-8">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-3 block">
                {dest.category}
              </span>
              <h1 className="font-headline text-5xl md:text-6xl text-on-surface tracking-tight leading-tight">
                {dest.name}
              </h1>
            </header>

            <p className="font-body text-lg text-on-surface/60 leading-relaxed mb-10">
              {dest.longDesc}
            </p>

            <div className="flex flex-wrap gap-10 mb-12 py-6 border-y border-outline-variant/15">
              <div className="flex items-center gap-3">
                <Clock className="w-4.5 h-4.5 text-secondary/70" />
                <span className="font-label text-xs tracking-wide text-on-surface/80">{dest.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4.5 h-4.5 text-secondary/70" />
                <span className="font-label text-xs tracking-wide text-on-surface/80">Best: {dest.bestTime}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4.5 h-4.5 text-secondary/70" />
                <span className="font-label text-xs tracking-wide text-on-surface/80">{dest.category.split(' ')[0]}</span>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full bg-primary text-white py-5 rounded-full font-label text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all shadow-md active:scale-[0.99]">
                Get a free quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="h-screen flex flex-col justify-center pt-4 pb-12">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">What Awaits</span>
            <h2 className="font-headline text-5xl mt-4">Experience Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dest.highlights.map((h, i) => (
              <div key={i} className="rounded-[16px] p-8 flex items-start gap-4 border border-outline-variant/5 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-secondary" />
                </span>
                <p className="font-body text-lg text-on-surface/80 leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="flex flex-col justify-center py-12 overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 w-full relative">
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary font-bold">Your Journey</span>
            <h2 className="font-headline text-5xl md:text-6xl mt-4 text-[#1a1a1a]">Day-by-Day Itinerary</h2>
          </div>

          <div className="relative w-full">
            {dest.itinerary.map((item, i) => {
              const isEven = i % 2 === 0;
              const isLast = i === dest.itinerary.length - 1;

              return (
                <div key={i} className="relative w-full flex flex-col items-center md:block mb-8 md:mb-16 group">
                  
                  {/* The Box - In front */}
                  <div className={`w-[92%] md:w-[55%] rounded-[20px] px-6 pt-6 pb-6 shadow-sm border border-outline-variant/10 hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative bg-white ${isEven ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"}`} style={{ zIndex: 10 }}>

                    {/* Day Badge Inside */}
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                      <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold whitespace-nowrap">{item.day}</span>
                    </div>

                    {/* Content */}
                    <h3 className="font-headline text-xl mb-3 text-center leading-snug text-[#1a1a1a]">{item.title}</h3>
                    <ul className="space-y-1.5 mt-2">
                      {item.description.split(/\.\s+/).filter(Boolean).map((point, pi) => (
                        <li key={pi} className="flex items-start gap-2.5 text-left">
                          <span className="mt-[0.5rem] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          <span className="text-sm text-on-surface/70 leading-relaxed">
                            {point.endsWith(".") ? point : `${point}.`}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* The Connecting Path for Desktop - Behind the card */}
                  {!isLast && (
                    <svg className="hidden md:block absolute w-full h-[80px] top-[100%] left-0 pointer-events-none -mt-2" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 0 }}>
                      <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(0,0,0,0.15)" />
                          <stop offset="50%" stopColor="rgba(0,0,0,0.3)" />
                          <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
                        </linearGradient>
                      </defs>
                      <style>
                        {`
                          @keyframes flow {
                            to { stroke-dashoffset: -20; }
                          }
                          .animated-path {
                            animation: flow 1s linear infinite;
                          }
                        `}
                      </style>
                      {isEven ? (
                        <path className="animated-path" d="M 27.5 0 C 27.5 60, 72.5 40, 72.5 100" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
                      ) : (
                        <path className="animated-path" d="M 72.5 0 C 72.5 60, 27.5 40, 27.5 100" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
                      )}
                    </svg>
                  )}

                  {/* The Connecting Path for Mobile */}
                  {!isLast && (
                    <div className="md:hidden w-px h-8 bg-gradient-to-b from-black/0 via-black/20 to-black/0 mt-2"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="min-h-screen flex flex-col justify-center py-12 border-y border-outline-variant/10">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">Details</span>
            <h2 className="font-headline text-5xl mt-4">Inclusions & Exclusions</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Inclusions */}
            <div className="rounded-[24px] p-8 md:p-12 shadow-sm border border-outline-variant/10">
              <h3 className="font-headline text-3xl mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-lg font-bold">✓</span>
                What's Included
              </h3>
              <div className="space-y-4">
                {dest.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-lg text-on-surface/80">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {dest.exclusions ? (
              <div className="rounded-[24px] p-8 md:p-12 shadow-sm border border-outline-variant/10">
                <h3 className="font-headline text-3xl mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 text-lg font-bold">×</span>
                  What's Excluded
                </h3>
                <div className="space-y-4">
                  {dest.exclusions.map((exc, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-5 h-5 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5 font-bold">✖</span>
                      <span className="font-body text-lg text-on-surface/80">{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-surface-container-low/50 rounded-[24px] p-8 md:p-12 border border-outline-variant/10 flex items-center justify-center">
                <p className="font-body text-lg text-on-surface/50 text-center">Comprehensive package. Additional bespoke exclusions may apply based on personalization.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center w-full">
          <h2 className="font-headline text-5xl mb-6">Ready to Experience {dest.name}?</h2>
          <p className="font-body text-xl text-on-surface/60 mb-10 max-w-2xl mx-auto">
            Let our travel curators craft a personalized itinerary tailored to your preferences. Every detail, handled.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-secondary text-on-secondary px-12 py-4 rounded-full font-label text-sm font-bold tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all"
            >
              Enquire Now
            </Link>
            <Link
              to="/destinations"
              className="px-12 py-4 rounded-full border border-outline-variant text-on-surface font-label text-sm uppercase tracking-widest hover:bg-surface-container-high transition-all"
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
