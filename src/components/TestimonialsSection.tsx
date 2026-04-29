import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  rating: number;
  className?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Their attention to detail for our Maldives honeymoon was impeccable. Truly a one-stop boutique experience right here in Rajkot.",
    author: "Pragnesh Shah",
    role: "Business Owner, Rajkot",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtJ2ntWcDeeS3lUg8fz1Q7Pp8t9T0LCPogC2TFj2YjfkNL-XF1uzTRq2wXL7V50n35z1Q5NvsUQHsi__rW6lh_tCbAXZO8SMRoexQvouFp0PeWKmIOgTLg_p-gRExeji69u8G4xWzucLI99O6esk-TYPNYMOXx7XIYISQKBHZJeZ1bcqLiFu1bS17KZbnYtRgc0rOC4pHccMUlygScqW44dNIbdrIXKbvTlcydMSe-ztqm27PUqP2njZlSbdME_ocvsPXM_DrTad0",
    rating: 5,
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    quote: "One Stop Holidays managed our extended family trip to Kashmir perfectly. The local guides they provided were exceptional.",
    author: "Meera Vora",
    role: "Educator, Rajkot",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW9-PDgiNY-Oro9oJZVyQebkCi_0_wH9dhCZ6aKl1gZQttzMlcZdQJbhvEWW9hKkTarLaSVpiaRPc5NiPYLonT5tHbpqHNQ2UzpnMrR0OqQ8I11OKDDjzRNe-zn0UCVNBjWBVwvcTc9tY9V4P1fLagtBgDTWl0AtsMtd8Nh8o1oX6ir9ernIuENxPddrg9xebQiO8tWV3tjimgiGu4R1VdojG3-L3kc3K5aEBLi9NCxgRRPr4XWN9_xs63d4N6SUGD_aR7YAXv5E4",
    rating: 5,
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    quote: "The personalized itinerary for our Europe tour was amazing. Every detail was handled with care.",
    author: "Rajesh Mehta",
    role: "Entrepreneur, Rajkot",
    image: "https://i.pravatar.cc/150?u=rajesh",
    rating: 5,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    quote: "Found them extremely professional. They understood our needs perfectly and delivered beyond expectations.",
    author: "Anjali Patel",
    role: "Doctor, Rajkot",
    image: "https://i.pravatar.cc/150?u=anjali",
    rating: 5,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    quote: "Best travel agency in Rajkot. Their global network is impressive and they ensure a seamless experience.",
    author: "Suresh Bhai",
    role: "Industrialist, Rajkot",
    image: "https://i.pravatar.cc/150?u=suresh",
    rating: 5,
    className: "lg:col-span-2 lg:row-span-1",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        <div className="mb-12 md:mb-16">
          <span className="font-label text-secondary font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block">
            Kind Words
          </span>
          <h2 className="text-on-surface font-headline text-4xl md:text-5xl leading-tight max-w-2xl">
            Stories from our travelers <br className="hidden md:block" />in Rajkot.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-[20px] editorial-shadow bg-white flex flex-col justify-between group hover:bg-surface-bright transition-all duration-500 hover:-translate-y-1 ${testimonial.className}`}
            >
              <div>
                <div className="flex text-secondary mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                      className="fill-secondary"
                    />
                  ))}
                </div>
                <p className="font-headline text-2xl italic leading-relaxed mb-8 text-on-surface">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={testimonial.author}
                    src={testimonial.image}
                    decoding="async"
                  />
                </div>
                <div>
                  <h4 className="font-label text-sm font-bold uppercase tracking-widest text-on-surface">
                    {testimonial.author}
                  </h4>
                  <p className="font-label text-xs text-on-surface-variant">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Logo Card */}
          <div className="lg:col-span-1 lg:row-span-1 p-0 rounded-[20px] bg-white flex items-center justify-center border border-zinc-200 overflow-hidden group hover:border-secondary transition-all duration-500">
            <img 
              src="/logo.jpeg" 
              alt="One Stop Holidays Logo" 
              className="w-full h-full object-contain p-16 group-hover:scale-110 transition-transform duration-700" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
