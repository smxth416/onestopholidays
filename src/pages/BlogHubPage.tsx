import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { SmoothLink as Link } from "@/components/SmoothLink";
import { OptimizedImage } from "@/components/OptimizedImage";
import { destinations } from "@/data/destinations";

const BlogHubPage = () => {
  const topDestinations = useMemo(() => destinations, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center px-6 lg:px-12 pt-24 bg-white">
        {/* Subtle Structural Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-outline-variant/20 to-transparent" />
        
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-10"
          >
            
            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] text-primary leading-[1.1] tracking-tight">
              Explore the World <br />
              <span className="text-secondary italic font-normal">from Rajkot</span>
            </h1>
            
            <div className="max-w-2xl mx-auto pt-4">
              <p className="font-body text-xl md:text-2xl text-on-surface/40 leading-relaxed font-light">
                Handcrafted international journeys and expert travel insights curated specifically for the discerning travelers of Rajkot.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Decorative Corner Label */}
        <div className="absolute bottom-12 left-12 hidden lg:block">
          <div className="flex items-center gap-4 border-l border-outline-variant/30 pl-4">
            <span className="font-label text-[9px] uppercase tracking-widest text-on-surface/30 font-bold leading-tight">
              EST. 2024 <br /> RAJKOT, GUJARAT
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="flex items-center gap-3 text-on-surface/30">
            <span className="font-label text-[10px] uppercase tracking-widest font-bold">Discover More</span>
            <div className="w-px h-8 bg-outline-variant/30" />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white border-t border-outline-variant/10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {topDestinations.map((dest) => (
              <Link
                key={dest.name}
                to={`/blog/${dest.slug}`}
                className="group relative flex flex-col md:flex-row bg-white rounded-[40px] border border-outline-variant/15 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 p-4 md:p-6"
              >
                {/* Image Section */}
                <div className="relative w-full md:w-[380px] aspect-square md:aspect-square flex-shrink-0 rounded-[32px] overflow-hidden">
                  <OptimizedImage
                    src={dest.img}
                    alt={dest.name}
                    className="transition-transform duration-1000 group-hover:scale-110 object-cover w-full h-full"
                    containerClassName="w-full h-full"
                  />
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md text-white font-label text-[9px] uppercase tracking-widest font-bold border border-white/10">
                      #{dest.category.split(' ')[0].toLowerCase()}
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col justify-between py-6 md:py-4 px-2 md:px-10 flex-grow">
                  <div>
                    <h3 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.1] mb-6 group-hover:text-secondary transition-colors duration-500">
                      {dest.name}: A Journey through the <span className="italic">{dest.category.split(' ')[1] || 'Wonders'}</span>
                    </h3>
                    <p className="font-body text-base md:text-lg text-on-surface/50 leading-relaxed line-clamp-3 mb-8">
                      Experience {dest.name} through the eyes of our expert curators. Discover the hidden gems, exclusive flight connections from Rajkot, and local secrets that make this destination a masterpiece of travel.
                    </p>
                  </div>

                  {/* Footer Section */}
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/5">
                    <div>
                      <p className="font-label text-xs font-bold text-primary">By One Stop Holidays</p>
                      <p className="font-label text-[10px] text-on-surface/40 uppercase tracking-widest mt-0.5">March 11, 2024</p>
                    </div>

                    <div className="py-2 px-6 rounded-full bg-primary text-white font-label text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-secondary transition-all shadow-md group-hover:scale-105 duration-500">
                      Read More
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogHubPage;


