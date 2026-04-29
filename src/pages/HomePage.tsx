import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SmoothLink as Link } from "@/components/SmoothLink";
import { destinations } from "@/data/destinations";
import { useMemo, useEffect } from "react";
import { motion } from "framer-motion";

import { OptimizedImage } from "@/components/OptimizedImage";
import BentoGrid from "@/components/BentoGrid";

const HomePage = () => {
  // Memoize featured destinations to prevent recalculation during scroll-triggered re-renders
  const featuredDestinations = useMemo(() => [
    destinations.find(d => d.slug === "dubai-tour-packages-from-rajkot"),
    destinations.find(d => d.slug === "bali-tour-packages-from-rajkot"),
    destinations.find(d => d.slug === "thailand-tour-packages-from-rajkot"),
    destinations.find(d => d.slug === "euro-trio-tour-packages-from-rajkot"),
  ].filter(Boolean), []);

  // Preload featured images for instant display
  useEffect(() => {
    featuredDestinations.forEach((dest: any) => {
      if (dest.img) {
        const img = new Image();
        img.src = dest.img;
      }
    });
  }, [featuredDestinations]);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-between pt-32 md:pt-40 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="One Stop Holidays Hero" 
            src="/hero.webp" 
          />
          {/* Subtle Overlay for Readability */}
          <div className="absolute inset-0 bg-white/10 md:bg-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto pl-4 md:pl-8 pr-6 md:pr-12 w-full h-full flex flex-col justify-between md:justify-center">
          {/* Subtle Radial Glow behind content */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/[0.03] rounded-full blur-[100px] -z-10 pointer-events-none" />
          
          {/* Top Content: Headline, Description & Trust */}
          <div className="w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="font-body text-2xl md:text-5xl leading-tight tracking-tight mb-6 font-normal text-primary/80 max-w-[280px] md:max-w-[560px]"
            >
              Curating extraordinary journeys across the globe.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="text-on-surface/60 text-base md:text-lg mb-8 md:mb-10 font-normal leading-relaxed"
            >
              The art of refined travel, handcrafted for the discerning explorer.
            </motion.p>

            {/* Trust Element - Moved up for better visibility on mobile */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center gap-3 md:gap-4 py-2"
            >
              <div className="flex -space-x-2 md:-space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-zinc-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover grayscale" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-label text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/80 leading-none">Trusted by 5000+</span>
                <span className="font-label text-[8px] md:text-[9px] uppercase tracking-widest text-primary/60 mt-1">International Travellers</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Content: CTAs Side-by-Side */}
          <div className="w-full md:mt-10">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-row items-center gap-3 md:gap-4"
            >
              <a 
                href="https://wa.me/919213692135" 
                className="group relative flex items-center bg-secondary text-white p-1.5 pr-5 md:pr-8 rounded-full font-label text-[9px] md:text-[11px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] transition-all hover:bg-secondary/90 shadow-xl shadow-secondary/10 active:scale-95"
              >
                {/* Icon Circle */}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center mr-2 md:mr-4 transition-transform duration-500 group-hover:scale-110">
                  <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span>Enquire</span>
              </a>
              
              <Link 
                to="/destinations" 
                className="group flex items-center bg-white/40 backdrop-blur-sm border border-primary/20 text-primary/80 p-1.5 pr-5 md:pr-8 rounded-full font-label text-[9px] md:text-[11px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] transition-all hover:text-primary hover:border-primary/40 hover:bg-white/60 shadow-sm"
              >
                {/* Icon Circle */}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2 md:mr-4 transition-transform duration-500 group-hover:scale-110">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                  </svg>
                </div>
                <span>Explore</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="mb-12 md:mb-16">
            <div className="max-w-2xl">
              <span className="font-label text-secondary font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block">The Curator's Standard</span>
              <h2 className="text-on-surface font-headline text-4xl md:text-5xl leading-tight">Why travelers trust our expert curation.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "verified_user", title: "Unrivaled Expertise", desc: "A decade of forging global partnerships to bring you exclusive access and insights." },
              { icon: "diamond", title: "Luxury Bespoke", desc: "No templates. Every itinerary is hand-crafted to align with your personal travel philosophy." },
              { icon: "support_agent", title: "Concierge Support", desc: "Travel with confidence with our 24/7 dedicated support team at your fingertips." },
              { icon: "celebration", title: "Authentic Roots", desc: "Proudly serving Rajkot with local intimacy and a global perspective." },
            ].map((item) => (
              <div key={item.title} className="p-6 md:p-8 rounded-[24px] bg-zinc-50 border border-outline-variant/5 group hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-secondary-container">{item.icon}</span>
                </div>
                <h3 className="font-headline text-xl md:text-2xl mb-4 text-primary">{item.title}</h3>
                <p className="text-on-surface-variant/80 font-body text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-on-surface font-headline text-4xl md:text-6xl italic mb-4">Featured Escapes</h2>
            <p className="text-on-surface-variant/60 font-body text-base md:text-lg max-w-xl mx-auto">Hand-picked destinations that define luxury and serenity.</p>
          </div>

          {/* Flexible Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredDestinations.map((dest) => (
              <div key={dest.slug} className="group bg-white rounded-[28px] p-2 w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[2/3] flex flex-col border border-outline-variant/10 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-[22px] w-full h-full">
                  <OptimizedImage
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white font-label text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 z-10">
                    {dest.category}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
                    <h3 className="font-headline text-white text-xl md:text-2xl leading-tight">{dest.name}</h3>
                    <p className="font-body text-white/70 text-[11px] md:text-xs leading-relaxed line-clamp-2">{dest.desc}</p>
                    <Link
                      to={`/destinations/${dest.slug}`}
                      className="mt-3 w-full py-3 rounded-full bg-white text-primary font-label text-[10px] font-bold uppercase tracking-[0.2em] text-center hover:bg-secondary hover:text-white transition-all duration-300"
                    >
                      Book Journey
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BentoGrid />

      {/* Testimonials */}
      <TestimonialsSection />
    </main>
  );
};

export default HomePage;

