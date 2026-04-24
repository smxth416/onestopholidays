const AboutPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="h-screen max-h-screen pt-20 flex flex-col justify-center overflow-hidden px-8">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.1] mb-8 -tracking-[0.02em]">
              Curating Journeys <br /><span className="italic text-secondary">With Soul.</span>
            </h1>
            <div className="pr-0 md:pr-4">
              <p className="font-serif-display text-xl lg:text-2xl leading-relaxed text-on-surface-variant mb-6">
                One Stop Holidays wasn't born in a boardroom; it was conceived on the winding trails of the Himalayas and the quiet streets of hidden European villages.
              </p>
              <p className="font-serif-display text-xl lg:text-2xl leading-relaxed text-on-surface-variant">
                We believe that travel is the ultimate catalyst for personal growth, weaving together stories, cultures, and breathtaking landscapes into unforgettable experiences.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="w-full max-w-md lg:max-w-lg aspect-[2/2] rounded-[24px] overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" alt="Luxury vintage explorer desk with maps and compass" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS-7-RTNXslWNf7EelL1VsCBU2v_mUH7VRs5m-8nlSwcgnr6fJSpB9J47jY5TqLL9ad4alidUm7azP-MBZSSRbG6Y1M2uTTwz2qH92RLTvxp-RIorX8SUDNaPMSX9zHMBKLmpzGAXQ_gRj5kgQXT1h302VhQFVKEVrpofOcuqiO0QA-QyrvNTD2YKMPUgd39RH7tlnxF0eXKWlBF9fGAg30wGReaAV9YagV9hzbmOF8t1hliThR0iDSB4qZqjdAErGMOk6WGG0uGk" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-8 border-y border-outline-variant/10">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="p-12 md:p-16 border border-outline-variant/20 rounded-3xl relative overflow-hidden shadow-xl transform transition hover:-translate-y-2">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-[20px] bg-secondary-container text-secondary">
              <span className="material-symbols-outlined text-4xl">flag</span>
            </div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-primary mb-6">Our Mission</h2>
            <p className="font-serif-display text-xl text-on-surface-variant leading-relaxed">
              We empower travelers to discover the world with ease and elegance. By curating personalized itineraries and providing comprehensive immigration solutions, we transform complex preparations into seamless, memorable journeys.
            </p>
          </div>
          
          <div className="p-12 md:p-16 border border-outline-variant/20 rounded-3xl relative overflow-hidden shadow-xl transform transition hover:-translate-y-2">
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-[20px] bg-primary-container text-primary">
              <span className="material-symbols-outlined text-4xl">visibility</span>
            </div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-primary mb-6">Our Vision</h2>
            <p className="font-serif-display text-xl text-on-surface-variant leading-relaxed">
              To be the definitive global standard in bespoke travel and mobility. We envision a world where borders are fluid and every journey is crafted with profound attention to personal aspirations and authentic cultural connection.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-24 text-center">
            <span className="font-label text-sm tracking-[0.3em] uppercase text-secondary font-bold">Our Legacy</span>
            <h2 className="font-serif-display text-5xl md:text-6xl mt-4 text-primary">The Journey So Far</h2>
          </div>
          
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-[1.125rem] md:before:ml-auto md:before:mr-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/40 before:to-transparent">
            
            {[
              { year: "2014", title: "The Inception", desc: "Started as a boutique consultation agency in Rajkot, focusing on highly customized experiential holiday packages." },
              { year: "2017", title: "Expanding Horizons", desc: "Launched full-suite immigration and student visa services, bridging the gap between temporary travel and permanent relocation." },
              { year: "2020", title: "Digital Transformation", desc: "Introduced end-to-end digital booking and virtual consultations, ensuring global travel remained accessible." },
              { year: "2023", title: "Global Footprint", desc: "Opened our official Canada branch, solidifying our international presence and enabling direct support for overseas clients." },
            ].map((item, i) => (
              <div key={item.year} className={`relative flex items-center justify-between md:justify-normal group ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface border-[3px] border-secondary absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10 shadow-lg group-hover:scale-125 transition-transform duration-500`}>
                  <div className="w-2.5 h-2.5 bg-secondary-container rounded-full"></div>
                </div>
                <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] pl-6 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="p-8 rounded-[24px] shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <span className="font-serif-display text-4xl text-secondary mb-3 block">{item.year}</span>
                    <h3 className="font-serif-display text-2xl text-primary mb-3">{item.title}</h3>
                    <p className="font-serif-display text-lg text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-20 text-center">
            <span className="font-label text-sm tracking-[0.3em] uppercase text-secondary font-bold">The Pillars of Expertise</span>
            <h2 className="font-serif-display text-5xl md:text-6xl mt-4 text-primary">A Decade of Crafting Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-12 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-500 group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container text-secondary">
                <span className="material-symbols-outlined text-3xl">history_edu</span>
              </div>
              <div className="font-serif-display text-6xl text-primary mb-2">10+</div>
              <div className="font-label text-xs uppercase tracking-widest text-outline-variant font-bold">Years of Heritage</div>
              <p className="mt-6 font-serif-display text-xl text-on-surface-variant">A decade spent perfecting the art of bespoke itineraries across continents.</p>
            </div>
            <div className="bg-primary text-on-primary p-12 rounded-lg text-center transform md:-translate-y-8 shadow-xl">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-on-secondary">
                <span className="material-symbols-outlined text-3xl">travel_explore</span>
              </div>
              <div className="font-serif-display text-6xl text-white mb-2">500+</div>
              <div className="font-label text-xs uppercase tracking-widest text-secondary-container font-bold">Destinations Mapped</div>
              <p className="mt-6 font-serif-display text-xl opacity-80">From polar expeditions to private island retreats, we know the terrain.</p>
            </div>
            <div className="p-12 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-500 group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container text-secondary">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <div className="font-serif-display text-6xl text-primary mb-2">98%</div>
              <div className="font-label text-xs uppercase tracking-widest text-outline-variant font-bold">Guest Satisfaction</div>
              <p className="mt-6 font-serif-display text-xl text-on-surface-variant">Our travelers return not just for the sights, but for the seamless care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="h-screen max-h-screen pt-20 flex flex-col justify-center overflow-hidden px-8 border-t border-outline-variant/10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-xl">
              <span className="font-label text-sm tracking-[0.3em] uppercase text-secondary font-bold">Leadership</span>
              <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl mt-4 text-primary italic">The Curators.</h2>
            </div>
            <p className="font-serif-display text-xl lg:text-2xl text-on-surface-variant max-w-sm pb-2">
              Guided by travel visionaries who believe every holiday is a masterpiece in waiting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { name: "Vikram Shah", title: "Founder & Chief Architect", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq9txtDbrKF8rCZp6Zn3xaW7SUwn0-CTE8b614t7lgJkpJ6ClSQfXS2_QCCaOwxoLHeMxQKbCbWVxEGn8Her4v09qLFyAWppfvqu-bhsBh-IgomWm8wzkDsNMgnPQhW7ZU31XO8ISxqJ-S1B4qjatJ46U-zH7ppaOGR-cl9wUvJZ7bgQl7j4Jbew-_gdVZhNctYfxtOjNuMYATeCR7weecQbU4Ido4S8W6i4q2I2_RsxrpQI1dgbuEfUIQuzL3oJi8P2HbKUtMOYY" },
              { name: "Ananya Patel", title: "Director of Experiences", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWlesZm8g6GyNemVhVNCLshCcQFU-8jzw6yWSfdDlVi3UMxEqEstwUPKfZQF8SSxtJTSAfmGp3PTq9eJImxVzZbG6AEn3QVb7zWpTVg84dtn6sinJfC3Q20LKqZNXC3vbSCd8MGl2X92MW6_RfJzk45Udyb-7_UHSkYZ77tM8JJUvjTq4a_BpqRsHWIFTL3-9EgMW5E1FBOim_xpN7-DC8RtZkqRLW9vrD8Vr0095OJK3QYx64G7odKRemU34eDWIiHP7ooK17nfA" },
              { name: "Rohan Mehta", title: "Head of Logistics", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFsOiJgeYeew2CaXtcyIpdQZ03zPhR_R9FNUOxbngAiHX8jTuo7t_sIqOcmgG7pDdvlVByXtXbVYGrBAuQALH_R2xXqJOZ9d8ggafaMcs8fLONafQH9Y8gOVk1kop3GX_LNPs1W5l-MZA5y1A_dckjeK8yrekf7KM6_YY6fhwuQ0tDmL_OuUP_Xsi9fAXFXfuRrRB3J9dpQfgzetFB8qbeT2d0xStL_AYBppqiX3voXaQjzo3UReCDWHfYRF-eKK_c8tTfqjaKN4w" },
            ].map((person) => (
              <div key={person.name} className="group">
                <div className="aspect-square rounded-[24px] overflow-hidden mb-6 relative shadow-lg">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={person.name} src={person.img} />
                </div>
                <h3 className="font-serif-display text-2xl lg:text-3xl text-primary">{person.name}</h3>
                <p className="font-label text-[10px] lg:text-xs uppercase tracking-widest text-secondary font-bold mt-1">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices replacing Local Roots */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-20 text-center">
            <span className="font-label text-sm tracking-[0.3em] uppercase text-secondary font-bold">Global Presence</span>
            <h2 className="font-serif-display text-5xl md:text-6xl mt-4 text-primary">Our Operational Hubs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            <div className="p-10 md:p-14 rounded-[32px] relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-outline-variant/20 flex flex-col justify-between">
              <div className="absolute -top-6 -right-6 md:top-8 md:right-8 opacity-[0.15] group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <img src="https://flagcdn.com/ca.svg" alt="Canada Flag" className="w-32 md:w-36 h-auto drop-shadow-xl rounded-sm object-cover" />
              </div>
              <div className="relative z-10">
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">public</span>
                </div>
                <h3 className="font-serif-display text-5xl text-primary mb-2">Canada</h3>
                <p className="font-label text-sm tracking-widest uppercase text-secondary font-bold mb-10">Registered Office</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <span className="material-symbols-outlined text-xl text-secondary mt-1 bg-surface-container-lowest p-2 rounded-full">location_on</span>
                    <div>
                      <p className="font-label font-bold text-primary mb-1 tracking-wider text-xs uppercase">Surrey Branch</p>
                      <p className="font-serif-display text-xl text-on-surface-variant leading-relaxed">Unit 201, 7380 King George Blvd<br/>Surrey, BC V3W 5A5</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <span className="material-symbols-outlined text-xl text-secondary mt-1 bg-surface-container-lowest p-2 rounded-full">call</span>
                    <div>
                      <p className="font-label font-bold text-primary mb-1 tracking-wider text-xs uppercase">Contact</p>
                      <p className="font-serif-display text-xl text-on-surface-variant">+1 (604) 555-0198</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-14 rounded-[32px] relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-outline-variant/20 flex flex-col justify-between">
              <div className="absolute -top-6 -right-6 md:top-8 md:right-8 opacity-[0.15] group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-32 md:w-36 h-auto drop-shadow-xl rounded-sm object-cover" />
              </div>
              <div className="relative z-10">
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">public</span>
                </div>
                <h3 className="font-serif-display text-5xl text-primary mb-2">India</h3>
                <p className="font-label text-sm tracking-widest uppercase text-secondary font-bold mb-10">Corporate Office</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <span className="material-symbols-outlined text-xl text-secondary mt-1 bg-surface-container-lowest p-2 rounded-full">location_on</span>
                    <div>
                      <p className="font-label font-bold text-primary mb-1 tracking-wider text-xs uppercase">Rajkot Hub</p>
                      <p className="font-serif-display text-xl text-on-surface-variant leading-relaxed">301 Silver Plaza, Kalawad Road<br/>Rajkot, Gujarat 360005</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <span className="material-symbols-outlined text-xl text-secondary mt-1 bg-surface-container-lowest p-2 rounded-full">call</span>
                    <div>
                      <p className="font-label font-bold text-primary mb-1 tracking-wider text-xs uppercase">Contact</p>
                      <p className="font-serif-display text-xl text-on-surface-variant">+91 98765 43210</p>
                    </div>
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

export default AboutPage;
