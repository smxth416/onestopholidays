import { useEffect, useMemo, type ReactNode } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, HelpCircle, Plane, Utensils } from "lucide-react";
import { motion } from "framer-motion";

import { SmoothLink as Link } from "@/components/SmoothLink";
import { destinations } from "@/data/destinations";
import { applyDestinationSEO, getDestinationCanonical } from "@/lib/seo";
import { DestinationSchema } from "@/components/seo/DestinationSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { OptimizedImage } from "@/components/OptimizedImage";

const RajkotLogistics = ({ destinationName }: { destinationName: string }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      <div className="rounded-[24px] border border-outline-variant/15 bg-white/70 backdrop-blur p-7">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
            <Plane className="w-5 h-5 text-secondary" />
          </div>
          <h3 className="font-headline text-2xl text-primary">From Hirasar (HSR)</h3>
        </div>
        <p className="font-body text-lg text-on-surface/60 leading-relaxed mt-4">
          Many international itineraries start via Rajkot connections. We coordinate your flight routing from{" "}
          <span className="font-semibold text-on-surface/80">Hirasar (HSR)</span> and handle transfers so your{" "}
          {destinationName} journey begins smoothly.
        </p>
      </div>

      <div className="rounded-[24px] border border-outline-variant/15 bg-white/70 backdrop-blur p-7">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
            <Plane className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-headline text-2xl text-primary">From Ahmedabad (AMD)</h3>
        </div>
        <p className="font-body text-lg text-on-surface/60 leading-relaxed mt-4">
          Prefer a broader schedule? We also arrange connection flights via{" "}
          <span className="font-semibold text-on-surface/80">Ahmedabad (AMD)</span> and coordinate onward transfers for a
          seamless arrival experience in {destinationName}.
        </p>
      </div>
    </div>
  );
};

const BlogDestinationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const destination = useMemo(() => destinations.find((d) => d.slug === slug), [slug]);

  const questions = useMemo(() => {
    if (!destination) return [];

    return [
      {
        q: "Do I need a visa from India?",
        a: "Visa requirements depend on your nationality and the destination. Share your passport details with our team and we’ll guide you through the correct process for your Rajkot-to-destination travel plan, including document readiness and timelines.",
      },
      {
        q: "Best time to visit?",
        a: `For ${destination.name}, we recommend traveling during ${destination.bestTime}. Planning in this window helps you enjoy the itinerary at its best while keeping your comfort high from Rajkot connections.`,
      },
      {
        q: "Vegetarian food availability?",
        a: `Yes. We plan vegetarian-friendly meals as part of your itinerary and coordinate dietary preferences in advance, so your ${destination.name} experience stays comfortable for travelers from Rajkot.`,
      },
    ];
  }, [destination]);

  useEffect(() => {
    if (!destination) return;

    applyDestinationSEO(destination);
  }, [destination]);

  const canonicalUrl = destination ? getDestinationCanonical(destination) : "";

  if (!destination) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="font-headline text-4xl mb-4">Blog Destination Not Found</h1>
          <Link to="/blog" className="text-secondary underline font-label">
            Back to Blog Hub
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Section 1: Destination Hero */}
      <section className="relative min-h-[90dvh] lg:h-[95dvh] flex items-center px-6 lg:px-12 pt-24 pb-12 overflow-hidden bg-white">
        {/* Very Subtle Structural Accents */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1400px] mx-auto w-full border border-outline-variant/10 rounded-[32px] md:rounded-[40px] p-6 md:p-10 lg:p-16 relative bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full space-y-8 md:space-y-10"
            >
              <div className="flex flex-col gap-6">
                <div>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-on-surface/30 hover:text-secondary transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-label text-[9px] uppercase tracking-[0.3em] font-bold">Back to Blog</span>
                  </Link>
                </div>

                <div className="inline-flex self-start items-center gap-2 text-on-surface/40 font-label text-[10px] uppercase tracking-[0.2em] border border-outline-variant/15 px-5 py-2.5 rounded-full">
                  <SmoothLinkBreadcrumb destinationName={destination.name} />
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] text-primary leading-[1.1] tracking-tight">
                  {destination.name} <span className="text-secondary italic font-normal">Tour Packages</span> from Rajkot
                </h1>

                <p className="font-body text-base md:text-lg text-on-surface/50 leading-relaxed max-w-xl">
                  Curated international journeys starting from Rajkot. Handcrafted by One Stop Holidays for a seamless travel experience.
                </p>
              </div>

              {/* Structured Wireframe Info Cards */}
              <div className="border-t border-outline-variant/10 pt-10 max-w-xs">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface/40 text-lg select-none">calendar_month</span>
                    <span className="font-label text-[10px] uppercase tracking-widest text-on-surface/30 font-bold">Best Time</span>
                  </div>
                  <div className="font-headline text-xl text-primary leading-tight">
                    {destination.bestTime}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-4 bg-secondary text-white px-14 py-5 rounded-full font-label text-[10px] font-bold tracking-[0.3em] uppercase hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-secondary/10"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Image Showcase - Framed Square */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-square w-full max-w-[460px] ml-auto"
            >
              <div className="absolute inset-0 border border-outline-variant/10 rounded-[32px] translate-x-4 translate-y-4 -z-10" />
              <div className="w-full h-full p-3 bg-white border border-outline-variant/10 rounded-[32px] overflow-hidden shadow-sm">
                <OptimizedImage
                  src={destination.img}
                  alt={destination.name}
                  className="w-full h-full object-cover rounded-[20px] grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
                  containerClassName="h-full rounded-[20px]"
                />
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Destination Guide */}
      <section className="py-32 px-6 lg:px-12 bg-white border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <span className="font-label text-[10px] uppercase tracking-[0.4em] text-secondary font-bold mb-4 block">
                Destination Guide
              </span>
              <h2 className="font-serif-display text-5xl md:text-6xl text-primary leading-tight">
                What to expect in {destination.name}
              </h2>
              <p className="font-body text-lg text-on-surface/50 mt-6 leading-relaxed">
                A curated overview for travelers from Rajkot, ensuring you're prepared for the ultimate experience.
              </p>

              <div className="mt-12 p-8 rounded-[32px] bg-secondary/5 border border-secondary/10">
                <h4 className="font-headline text-xl text-secondary mb-3">Expert Tip</h4>
                <p className="font-body text-on-surface/70 leading-relaxed italic">
                  "We recommend {destination.bestTime} for the most comfortable weather and vibrant local atmosphere."
                </p>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group rounded-[32px] border border-outline-variant/15 bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <h3 className="font-headline text-2xl text-primary mb-6">Top Highlights</h3>
                <ul className="space-y-4">
                  {destination.highlights.slice(0, 5).map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                      <p className="font-body text-base text-on-surface/70 leading-relaxed">{h}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div className="rounded-[32px] border border-outline-variant/15 bg-white p-8 shadow-sm">
                  <h3 className="font-headline text-xl text-primary mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">schedule</span>
                    Ideal Duration
                  </h3>
                  <p className="font-body text-base text-on-surface/60 leading-relaxed">
                    We've choreographed a balanced {destination.duration} tempo, allowing for both exploration and restorative gaps.
                  </p>
                </div>

                <div className="rounded-[32px] border border-outline-variant/15 bg-white p-8 shadow-sm">
                  <h3 className="font-headline text-xl text-primary mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">location_on</span>
                    Rajkot Context
                  </h3>
                  <p className="font-body text-base text-on-surface/60 leading-relaxed">
                    {destination.desc} Our local experts handle every transition so you can focus on the journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Rajkot-Specific Logistics */}
      <section className="flex items-center px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-10">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">
              Rajkot Connections
            </span>
            <h2 className="font-serif-display text-5xl mt-4 text-primary">Traveling from Rajkot to {destination.name}</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="font-body text-lg md:text-xl text-on-surface/60 leading-relaxed text-center">
              We plan your Rajkot routing with smart connections and clear handovers, so you can focus on the destination—not the logistics.
            </p>
          </div>

          <RajkotLogistics destinationName={destination.name} />
        </div>
      </section>

      {/* Section 4: FAQ & Local Context */}
      <section className="flex items-center px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">
              FAQ for Rajkot Travelers
            </span>
            <h2 className="font-serif-display text-5xl mt-4 text-primary">Common Questions for Rajkot Travelers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FaqCard
              icon={<HelpCircle className="w-5 h-5 text-secondary" />}
              title={questions[0]?.q ?? "Do I need a visa from India?"}
              answer={questions[0]?.a ?? ""}
            />
            <FaqCard
              icon={<Calendar className="w-5 h-5 text-secondary" />}
              title={questions[1]?.q ?? "Best time to visit?"}
              answer={questions[1]?.a ?? ""}
            />
            <FaqCard
              icon={<Utensils className="w-5 h-5 text-secondary" />}
              title={questions[2]?.q ?? "Vegetarian food availability?"}
              answer={questions[2]?.a ?? ""}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-lg text-on-surface/60 leading-relaxed">
              Want a tailored plan for your travel dates from Rajkot?{" "}
              <Link to="/contact" className="font-bold text-secondary underline underline-offset-4 decoration-secondary/30 hover:decoration-secondary">
                Talk to our curators.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

const FaqCard = ({ icon, title, answer }: { icon: ReactNode; title: string; answer: string }) => {
  return (
    <div className="rounded-[24px] border border-outline-variant/15 bg-white/70 backdrop-blur p-7 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-headline text-xl text-primary leading-snug">{title}</h3>
        </div>
      </div>
      <p className="font-body text-lg text-on-surface/60 leading-relaxed mt-4">{answer}</p>
    </div>
  );
};

const SmoothLinkBreadcrumb = ({ destinationName }: { destinationName: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Link to="/" className="hover:text-secondary transition-colors font-bold whitespace-nowrap">
        Home
      </Link>
      <span className="text-on-surface/20">/</span>
      <Link to="/blog" className="hover:text-secondary transition-colors font-bold whitespace-nowrap">
        Blog
      </Link>
      <span className="text-on-surface/20">/</span>
      <span className="text-on-surface/40 truncate max-w-[100px] md:max-w-none">{destinationName}</span>
    </div>
  );
};

export default BlogDestinationPage;

