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
      <section className="h-screen flex items-center px-8 border-y border-outline-variant/10">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="flex flex-col items-center text-center p-16 rounded-2xl border border-outline-variant/20 hover:shadow-xl hover:shadow-black/10 transition-shadow duration-300 bg-[#faf7f2]">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container text-secondary">
              <span className="material-symbols-outlined text-2xl">rocket_launch</span>
            </div>
            <h2 className="font-serif-display text-3xl text-primary mb-5">Our Mission</h2>
            <p className="font-serif-display text-lg text-on-surface-variant leading-relaxed">
              We empower travelers to discover the world with ease and elegance — turning complex preparations into seamless, memorable journeys through personalized itineraries and immigration solutions.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-16 rounded-2xl border border-outline-variant/20 hover:shadow-xl hover:shadow-black/10 transition-shadow duration-300 bg-[#faf7f2]">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container text-secondary">
              <span className="material-symbols-outlined text-2xl">travel_explore</span>
            </div>
            <h2 className="font-serif-display text-3xl text-primary mb-5">Our Vision</h2>
            <p className="font-serif-display text-lg text-on-surface-variant leading-relaxed">
              To be the global standard in bespoke travel — where every journey is shaped by personal aspiration and authentic cultural connection, with borders that feel fluid.
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
      <section className="h-screen flex flex-col justify-center px-8 border-t border-outline-variant/10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16 text-center">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary font-bold">The Pillars of Expertise</span>
            <h2 className="font-serif-display text-5xl md:text-6xl mt-4 text-primary">A Decade of Crafting Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">

            <div className="flex flex-col items-center text-center px-12 py-10 group hover:shadow-lg transition-shadow duration-300 rounded-[28px]">
              <div className="mb-5 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white text-secondary shadow-sm">
                <span className="material-symbols-outlined text-5xl">history_edu</span>
              </div>
              <div className="font-serif-display text-7xl text-primary mb-1">10+</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold mb-4">Years of Heritage</div>
              <p className="font-serif-display text-lg text-on-surface-variant leading-relaxed">A decade spent perfecting the art of bespoke itineraries across continents.</p>
            </div>

            <div className="flex flex-col items-center text-center px-12 py-10 group hover:shadow-lg transition-shadow duration-300 rounded-[28px]">
              <div className="mb-5 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white text-secondary shadow-sm">
                <span className="material-symbols-outlined text-5xl">travel_explore</span>
              </div>
              <div className="font-serif-display text-7xl text-primary mb-1">500+</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold mb-4">Destinations Mapped</div>
              <p className="font-serif-display text-lg text-on-surface-variant leading-relaxed">From polar expeditions to private island retreats, we know the terrain.</p>
            </div>

            <div className="flex flex-col items-center text-center px-12 py-10 group hover:shadow-lg transition-shadow duration-300 rounded-[28px]">
              <div className="mb-5 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white text-secondary shadow-sm">
                <span className="material-symbols-outlined text-5xl">verified_user</span>
              </div>
              <div className="font-serif-display text-7xl text-primary mb-1">98%</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold mb-4">Guest Satisfaction</div>
              <p className="font-serif-display text-lg text-on-surface-variant leading-relaxed">Our travelers return not just for the sights, but for the seamless care.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Global Offices replacing Local Roots */}
      <section className="h-screen flex flex-col justify-center py-16 px-8 border-t border-outline-variant/10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12 text-center">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary font-bold">Global Presence</span>
            <h2 className="font-serif-display text-4xl md:text-5xl mt-3 text-primary">Our Operational Hubs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-8 md:p-10 rounded-[28px] relative overflow-hidden group hover:shadow-xl transition-all duration-500 border border-outline-variant/20 flex flex-col justify-between">
              <div className="absolute -top-6 -right-6 md:top-6 md:right-6 opacity-[0.12] group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <img src="https://flagcdn.com/ca.svg" alt="Canada Flag" className="w-28 h-auto drop-shadow-xl rounded-sm object-cover" />
              </div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-2xl">public</span>
                </div>
                <h3 className="font-serif-display text-4xl text-primary mb-1">Canada</h3>
                <p className="font-label text-xs tracking-widest uppercase text-secondary font-bold mb-6">Registered Office</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-xl text-secondary mt-0.5 bg-surface-container-lowest p-1.5 rounded-full">location_on</span>
                    <div>
                      <p className="font-label font-bold text-primary mb-1 tracking-wider text-xs uppercase">Surrey Branch</p>
                      <p className="font-serif-display text-lg text-on-surface-variant leading-relaxed">Unit 201, 7380 King George Blvd<br/>Surrey, BC V3W 5A5</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-xl text-secondary mt-0.5 bg-surface-container-lowest p-1.5 rounded-full">call</span>
                    <div>
                      <p className="font-label font-bold text-primary mb-1 tracking-wider text-xs uppercase">Contact</p>
                      <p className="font-serif-display text-lg text-on-surface-variant">+1 (604) 555-0198</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-[28px] relative overflow-hidden group hover:shadow-xl transition-all duration-500 border border-outline-variant/20 flex flex-col justify-between">
              <div className="absolute -top-6 -right-6 md:top-6 md:right-6 opacity-[0.12] group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-28 h-auto drop-shadow-xl rounded-sm object-cover" />
              </div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-2xl">public</span>
                </div>
                <h3 className="font-serif-display text-4xl text-primary mb-1">India</h3>
                <p className="font-label text-xs tracking-widest uppercase text-secondary font-bold mb-6">Corporate Office</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-xl text-secondary mt-0.5 bg-surface-container-lowest p-1.5 rounded-full">location_on</span>
                    <div>
                      <p className="font-label font-bold text-primary mb-1 tracking-wider text-xs uppercase">Rajkot Hub</p>
                      <p className="font-serif-display text-lg text-on-surface-variant leading-relaxed">301 Silver Plaza, Kalawad Road<br/>Rajkot, Gujarat 360005</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-xl text-secondary mt-0.5 bg-surface-container-lowest p-1.5 rounded-full">call</span>
                    <div>
                      <p className="font-label font-bold text-primary mb-1 tracking-wider text-xs uppercase">Contact</p>
                      <p className="font-serif-display text-lg text-on-surface-variant">+91 98765 43210</p>
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
