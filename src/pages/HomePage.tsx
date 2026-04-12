import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Cinematic wide shot of a luxury overwater villa in Maldives during sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYu9bPzFIIyyx8i_UpEjb0SMZYQv_SQHK6nzgvE40ODmYq3kzxV-VWE_9MpjUbYTcopntz3ruIFwQ6vB-J-2kOAuhMO8UgiRwZGdDsAe3lk9oNQYAAKKS0YFA25Tu4EsHIUSD4fQavFC3OOfEteB5eEQbovyyXEBswt4rcH_IXKBjlnNlcUO95PEr5GCmy3fJoeOYSogACg8zD5LBZNTKJA39DJ2v1xhI887B1sH6whH_cxjjy0cwdfigijzuHtQDiJxnuCHZZ094" />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h1 className="text-white font-headline text-7xl md:text-8xl leading-[0.9] tracking-tighter mb-8 italic">
              Curating Journeys <br />Beyond the Ordinary.
            </h1>
            <p className="text-white/80 text-xl md:text-2xl max-w-xl mb-12 font-light leading-relaxed">
              Experience the art of bespoke travel with One Stop Holidays. We transform your dreams into perfectly choreographed itineraries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/destinations" className="bg-secondary text-on-secondary px-10 py-4 rounded-full font-label text-sm font-extrabold tracking-widest uppercase editorial-shadow hover:bg-secondary/90 transition-all">
                Explore Destinations
              </Link>
              <button className="border border-white/30 text-white backdrop-blur-md px-10 py-4 rounded-full font-label text-sm font-extrabold tracking-widest uppercase hover:bg-white/10 transition-all">
                View Packages
              </button>
            </div>
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl border-t border-white/20 pt-8">
              <div>
                <p className="text-white font-headline text-4xl">5000+</p>
                <p className="text-white/60 font-label text-xs uppercase tracking-widest mt-1">Travellers</p>
              </div>
              <div>
                <p className="text-white font-headline text-4xl">50+</p>
                <p className="text-white/60 font-label text-xs uppercase tracking-widest mt-1">Destinations</p>
              </div>
              <div>
                <p className="text-white font-headline text-4xl">10+</p>
                <p className="text-white/60 font-label text-xs uppercase tracking-widest mt-1">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <span className="font-label text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">The Curator's Standard</span>
              <h2 className="text-on-surface font-headline text-5xl leading-tight">Why travelers trust our expert curation.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "verified_user", title: "Unrivaled Expertise", desc: "A decade of forging global partnerships to bring you exclusive access and insights." },
              { icon: "diamond", title: "Luxury Bespoke", desc: "No templates. Every itinerary is hand-crafted to align with your personal travel philosophy." },
              { icon: "support_agent", title: "Concierge Support", desc: "Travel with confidence with our 24/7 dedicated support team at your fingertips." },
              { icon: "celebration", title: "Authentic Roots", desc: "Proudly serving Rajkot with local intimacy and a global perspective." },
            ].map((item) => (
              <div key={item.title} className="bg-surface-container-lowest p-8 rounded-[20px] editorial-shadow group hover:bg-surface-bright transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-secondary-container">{item.icon}</span>
                </div>
                <h3 className="font-headline text-2xl mb-4">{item.title}</h3>
                <p className="text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="font-label text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">World-Class Selections</span>
            <h2 className="text-on-surface font-headline text-6xl italic mb-6">Featured Escapes</h2>
            <p className="text-on-surface-variant font-light text-lg">Hand-picked destinations that define luxury and serenity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Goa", tag: "Coastal Luxury", price: "₹45,000", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcv6rs8I3zqx-wkyOWO4DaL8H8A--GG3I_w7KhpUyNGNwxrscXdoVNdniv9a5Dmzr23Gb0sxc6HvaWbCOo4k5kdKYegborB1HuY07VyC3fbkS-GFvuShofoZ5pFVTmJNWzbm5ELGN2_beHEaWU3UVKUZZ9AQccAhXS9wMW_a55lk_0HJ9j8iEKKN974C8sNPzvWDG2aN4iyQP7J1R7eJreDaSYY056fBTQFWe6syzEuz7yVBIY_nd38LhS06Z53RoHzFu3i6FYBZM" },
              { name: "Dubai", tag: "Urban Opulence", price: "₹85,000", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9sgUnEP9O4o2qRZDidt8sVElKyekPVlbFqMtQe6f1tb7H6xRCzFxx1lCg3YKT4PnGKwQdpptKhHCpZyu-RnqElWPLcFG_K5lNBxlsOa8qYA_sEMXnSA0qb6kImu6BtSTZCRgb0utaV76yr0gbIHPZZE8Z32NQqgHyXKgXMDNu_AxrysMrQlN91LTo0R4sHNHOuwUG9WsaaTExOcvP_ln5BE-QV7S-3FQ9M_Zz1bV5QZDDeaM0R8tpoYWBPxOh-ZiNkNh4_l2tEGY" },
              { name: "Maldives", tag: "Private Island", price: "₹1,20,000", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrLEuBGB4-WOZJw_wcxD4lrfHHP3FhPHl3KsgV8vzJhezKvvTnShqrL2uRDcO8CKJQ7zKAZEpgf4lI8SZFAPAmIIvRjs8IIg-eRoiGKlE3Cx3QnGZCYc9bsJMU24vjW219olAabdJSoKDdjkWxIvamLUSRfyuxU2yxlCzybbMGkXC9IJSYr2fYoUJlqvXNGQMuvZ2RVhhO3axCnEM32jsFWfwWmLWm35C1qFlCwEYM1b5LIWIIF3hKSaU5T9LqdRhDy9q5EohRCM8" },
              { name: "Kashmir", tag: "Eternal Heaven", price: "₹55,000", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDobEc45AC6O8QAzkMvHJQ60RbV0Cl7mgOSyen7sTrR1ylP2uTfWjlPcTO4JRrybrpjd8Kq9ldHUuXM6z3LB0XzHhTjoqWz6pvwyrmSU5-c3PLz0ickFO28btHLuUsEQKcviQPCw0CV1Bosel5QIJ7fjfVN0ktab0hnWDnsgvmuwaGp6DJN7zx24VwaL6gd_VAFj_WS03WUctmguCoZKSnTHXhJN9vthhJ24mIn_BD3aoN2bEKeev8MA1N90v8-lemTsPd9ZV07kFk" },
              { name: "Manali", tag: "Mountain Retreat", price: "₹38,000", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJSggVRXbD5zMqSMZSQ7xvh0jNea2RHy1aebHSh2Ezbi2uXl2ibyfHrFdXGAbYEqVZj0_EXtBWhvrDWNgPy0mkc8x0ZHmwYtY_4Bu-fDHgQakkL-X-29Zq46K1SjS5AVGdSXx3pY9l3LoauTK3WVrjbE8rNlohmNgQHq6BtCjt_PqiyCf4xBvNz2NBCqs8oJpp217zehsRDQyJxGyxE7OgpRHiecb9ZXwUG1L_IHSJVZUyFqo1pXkP088zehVh3n_7TJ6cNMfiz2E" },
              { name: "Rajasthan", tag: "Royal Heritage", price: "₹62,000", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIvan-0Jl6_0zqEWSaQDCmkeMjyUJFu-Gz3xa13SreSCI6xupsIo55tCdrUCtGaGc-x_fdywDZP9ukfC1xSXlX3dqCcaUpokM2BUbG9of-nsqrEKyo1IluQTH39VzEZSaJb_SHqlLzWrHO61ra993jM5-2qvbNxHhAQoTNCZv5JQuTP-Ti6Rl5Yl-oNTkhiAk-Cfy1PfAcb_GrlASp1cRGmZxMk7RfnrNJmZxb2lXHizJKhIu-E3mS1K-MNe_ezciHpdUVnj4_iPw" },
            ].map((dest) => (
              <div key={dest.name} className="group relative overflow-hidden rounded-[20px] h-[500px] editorial-shadow">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={dest.name} src={dest.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-8 w-full">
                  <span className="bg-secondary-container text-on-secondary-container font-label text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">{dest.tag}</span>
                  <h3 className="text-white font-headline text-3xl mb-1">{dest.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-white/80 font-label text-sm uppercase">Starting from {dest.price}</p>
                    <span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform">arrow_forward_ios</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-container-high relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 -mr-20 -mt-20">
          <span className="material-symbols-outlined text-[300px]">format_quote</span>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
            <div className="lg:col-span-4">
              <span className="font-label text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Kind Words</span>
              <h2 className="text-on-surface font-headline text-5xl leading-tight">Stories from our travelers in Rajkot.</h2>
            </div>
            <div className="lg:col-span-8 flex overflow-x-auto pb-12 gap-8 snap-x no-scrollbar">
              <div className="min-w-[400px] bg-surface-container-lowest p-10 rounded-[20px] editorial-shadow snap-start">
                <div className="flex text-secondary mb-6">
                  {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                </div>
                <p className="font-headline text-2xl italic leading-relaxed mb-8">"Their attention to detail for our Maldives honeymoon was impeccable. Truly a one-stop boutique experience right here in Rajkot."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Pragnesh Shah" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtJ2ntWcDeeS3lUg8fz1Q7Pp8t9T0LCPogC2TFj2YjfkNL-XF1uzTRq2wXL7V50n35z1Q5NvsUQHsi__rW6lh_tCbAXZO8SMRoexQvouFp0PeWKmIOgTLg_p-gRExeji69u8G4xWzucLI99O6esk-TYPNYMOXx7XIYISQKBHZJeZ1bcqLiFu1bS17KZbnYtRgc0rOC4pHccMUlygScqW44dNIbdrIXKbvTlcydMSe-ztqm27PUqP2njZlSbdME_ocvsPXM_DrTad0" />
                  </div>
                  <div>
                    <h4 className="font-label text-sm font-bold uppercase tracking-widest text-on-surface">Pragnesh Shah</h4>
                    <p className="font-label text-xs text-on-surface-variant">Business Owner, Rajkot</p>
                  </div>
                </div>
              </div>
              <div className="min-w-[400px] bg-surface-container-lowest p-10 rounded-[20px] editorial-shadow snap-start">
                <div className="flex text-secondary mb-6">
                  {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                </div>
                <p className="font-headline text-2xl italic leading-relaxed mb-8">"One Stop Holidays managed our extended family trip to Kashmir perfectly. The local guides they provided were exceptional."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Meera Vora" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW9-PDgiNY-Oro9oJZVyQebkCi_0_wH9dhCZ6aKl1gZQttzMlcZdQJbhvEWW9hKkTarLaSVpiaRPc5NiPYLonT5tHbpqHNQ2UzpnMrR0OqQ8I11OKDDjzRNe-zn0UCVNBjWBVwvcTc9tY9V4P1fLagtBgDTWl0AtsMtd8Nh8o1oX6ir9ernIuENxPddrg9xebQiO8tWV3tjimgiGu4R1VdojG3-L3kc3K5aEBLi9NCxgRRPr4XWN9_xs63d4N6SUGD_aR7YAXv5E4" />
                  </div>
                  <div>
                    <h4 className="font-label text-sm font-bold uppercase tracking-widest text-on-surface">Meera Vora</h4>
                    <p className="font-label text-xs text-on-surface-variant">Educator, Rajkot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
