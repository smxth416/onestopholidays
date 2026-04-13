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
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-8 pt-8">
        <Link
          to="/destinations"
          className="inline-flex items-center gap-3 text-on-surface/70 hover:text-secondary font-label text-sm uppercase tracking-widest transition-colors group"
        >
          <span className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/10 transition-all">
            <ArrowLeft className="w-4 h-4" />
          </span>
          Back to Destinations
        </Link>
      </div>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="aspect-[4/5] rounded-[20px] overflow-hidden">
            <img src={dest.img} alt={dest.name} className="w-full h-full object-cover" />
          </div>
          <div className="py-4 lg:py-8">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">{dest.category}</span>
            <h1 className="font-headline text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mt-4 mb-6">{dest.name}</h1>
            <p className="font-body text-xl text-on-surface/70 leading-relaxed mb-8">{dest.longDesc}</p>

            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-on-surface/60">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-label text-sm">{dest.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface/60">
                <Calendar className="w-5 h-5 text-secondary" />
                <span className="font-label text-sm">Best: {dest.bestTime}</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface/60">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="font-label text-sm">{dest.category}</span>
              </div>
            </div>

            <div className="flex items-end gap-4 mb-10">
              <div>
                <span className="font-label text-xs text-on-surface/50 uppercase tracking-widest">Starting From</span>
                <p className="font-headline text-5xl text-secondary mt-1">{dest.price}</p>
              </div>
              <span className="font-label text-xs text-on-surface/40 pb-2">per person</span>
            </div>

            <button className="bg-secondary text-on-secondary px-12 py-4 rounded-full font-label text-sm font-bold tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all">
              Book This Experience
            </button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="min-h-screen flex flex-col justify-center py-24">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">What Awaits</span>
            <h2 className="font-headline text-5xl mt-4">Experience Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dest.highlights.map((h, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-[16px] p-8 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-secondary" />
                </span>
                <p className="font-body text-lg text-on-surface/80 leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="min-h-screen flex flex-col justify-center py-24">
        <div className="max-w-5xl mx-auto px-8 w-full">
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">Your Journey</span>
            <h2 className="font-headline text-5xl mt-4">Day-by-Day Itinerary</h2>
          </div>
          <div className="space-y-0">
            {dest.itinerary.map((item, i) => (
              <div key={i} className="relative flex gap-8">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label text-xs font-bold flex-shrink-0">
                    {item.day.replace("Day ", "")}
                  </div>
                  {i < dest.itinerary.length - 1 && (
                    <div className="w-px flex-1 bg-outline-variant/20 my-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-10">
                  <span className="font-label text-xs uppercase tracking-widest text-secondary">{item.day}</span>
                  <h3 className="font-headline text-2xl mt-1 mb-2">{item.title}</h3>
                  <p className="font-body text-lg text-on-surface/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="min-h-screen flex flex-col justify-center py-24">
        <div className="max-w-4xl mx-auto px-8 w-full">
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">What's Included</span>
            <h2 className="font-headline text-5xl mt-4">Package Inclusions</h2>
          </div>
          <div className="bg-surface-container-lowest rounded-[20px] p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dest.inclusions.map((inc, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-body text-lg text-on-surface/80">{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-screen flex flex-col justify-center py-24">
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
