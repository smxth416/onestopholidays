const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="min-h-[80dvh] md:h-screen pt-24 md:pt-20 flex flex-col justify-center overflow-hidden px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.1] mb-6 md:mb-8 -tracking-[0.02em]">
              Curating Journeys <br /><span className="italic text-secondary">With Soul.</span>
            </h1>
            <div className="pr-0 md:pr-4">
              <p className="font-serif-display text-lg lg:text-2xl leading-relaxed text-on-surface-variant/80 mb-6">
                One Stop Holidays wasn't born in a boardroom; it was conceived on the winding trails of the Himalayas and the quiet streets of hidden European villages.
              </p>
              <p className="font-serif-display text-lg lg:text-2xl leading-relaxed text-on-surface-variant/80">
                We believe that travel is the ultimate catalyst for personal growth, weaving together stories, cultures, and breathtaking landscapes into unforgettable experiences.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg aspect-square rounded-[32px] overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" alt="Luxury vintage explorer desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS-7-RTNXslWNf7EelL1VsCBU2v_mUH7VRs5m-8nlSwcgnr6fJSpB9J47jY5TqLL9ad4alidUm7azP-MBZSSRbG6Y1M2uTTwz2qH92RLTvxp-RIorX8SUDNaPMSX9zHMBKLmpzGAXQ_gRj5kgQXT1h302VhQFVKEVrpofOcuqiO0QA-QyrvNTD2YKMPUgd39RH7tlnxF0eXKWlBF9fGAg30wGReaAV9YagV9hzbmOF8t1hliThR0iDSB4qZqjdAErGMOk6WGG0uGk" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 px-6 md:px-8 border-y border-outline-variant/10 bg-white">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Mission Card */}
          <div className="p-8 md:p-10 rounded-[32px] bg-white border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500">
            <h2 className="font-serif-display text-3xl text-primary mb-8 font-semibold italic">Our Mission</h2>
            <ul className="space-y-6">
              {[
                { icon: "explore", color: "blue", text: "To empower travelers to discover the world with ease and elegance through personalized itineraries." },
                { icon: "flight_takeoff", color: "green", text: "To deliver comprehensive immigration solutions that transform complex preparations into seamless journeys." },
                { icon: "support_agent", color: "purple", text: "To commit to unparalleled customer satisfaction by providing responsive, 24/7 support and personalized service." }
              ].map((item) => (
                <li key={item.icon} className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-${item.color}-50 flex items-center justify-center flex-shrink-0 border border-${item.color}-100`}>
                    <span className={`material-symbols-outlined text-${item.color}-600 text-2xl`}>{item.icon}</span>
                  </div>
                  <p className="text-sm md:text-base text-on-surface-variant/80 leading-relaxed pt-2">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card */}
          <div className="p-8 md:p-10 rounded-[32px] bg-white border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500">
            <h2 className="font-serif-display text-3xl text-primary mb-8 font-semibold italic">Our Vision</h2>
            <ul className="space-y-6">
              {[
                { icon: "emoji_events", color: "amber", text: "To become the global standard in bespoke travel, recognized for our integrity and quality." },
                { icon: "rocket_launch", color: "cyan", text: "Evolving with cutting-edge innovation, integrating the latest technology for smarter travel solutions." },
                { icon: "verified", color: "rose", text: "To achieve a future where our brand represents uncompromising excellence and reliability in every journey." }
              ].map((item) => (
                <li key={item.icon} className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-${item.color}-50 flex items-center justify-center flex-shrink-0 border border-${item.color}-100`}>
                    <span className={`material-symbols-outlined text-${item.color}-600 text-2xl`}>{item.icon}</span>
                  </div>
                  <p className="text-sm md:text-base text-on-surface-variant/80 leading-relaxed pt-2">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 md:py-32 px-6 md:px-8 overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-20 text-center">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary font-bold">Our Legacy</span>
            <h2 className="font-serif-display text-4xl md:text-6xl mt-4 text-primary">The Journey So Far</h2>
          </div>
          
          <div className="space-y-12 md:space-y-16 relative before:absolute before:inset-0 before:ml-[1.125rem] md:before:ml-auto md:before:mr-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/40 before:to-transparent">
            
            {[
              { year: "2014", title: "The Inception", desc: "Started as a boutique consultation agency in Rajkot, focusing on highly customized experiential holiday packages." },
              { year: "2017", title: "Expanding Horizons", desc: "Launched full-suite immigration and student visa services, bridging the gap between temporary travel and permanent relocation." },
              { year: "2020", title: "Digital Transformation", desc: "Introduced end-to-end digital booking and virtual consultations, ensuring global travel remained accessible." },
              { year: "2023", title: "Global Footprint", desc: "Opened our official Canada branch, solidifying our international presence and enabling direct support for overseas clients." },
            ].map((item, i) => (
              <div key={item.year} className={`relative flex items-center justify-between md:justify-normal group ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border-[3px] border-secondary absolute left-0 md:left-1/2 -translate-x-px md:-translate-x-1/2 z-10 shadow-lg group-hover:scale-125 transition-transform duration-500`}>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
                <div className={`w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-8 text-left md:text-right' : 'md:pl-8 text-left'}`}>
                  <div className="p-6 md:p-8 rounded-[28px] bg-white border border-outline-variant/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <span className="font-serif-display text-3xl md:text-4xl text-secondary mb-2 block italic">{item.year}</span>
                    <h3 className="font-serif-display text-xl md:text-2xl text-primary mb-3 font-bold">{item.title}</h3>
                    <p className="font-serif-display text-base md:text-lg text-on-surface-variant/80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-32 px-6 md:px-8 border-t border-outline-variant/10 bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-10 md:mb-16 text-center">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary font-bold">Impact</span>
            <h2 className="font-serif-display text-3xl md:text-6xl mt-3 md:mt-4 text-primary">A Decade of Crafting Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">

            {[
              { icon: "history_edu", val: "10+", label: "Years of Heritage", desc: "A decade spent perfecting the art of bespoke itineraries." },
              { icon: "travel_explore", val: "500+", label: "Destinations Mapped", desc: "From polar expeditions to private island retreats." },
              { icon: "verified_user", val: "98%", label: "Guest Satisfaction", desc: "Our travelers return for the sights and the seamless care." }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-row md:flex-col items-center md:text-center gap-6 md:gap-0 px-4 md:px-12 py-6 md:py-10">
                <div className="md:mb-6 inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-white text-secondary shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-2xl md:text-4xl">{stat.icon}</span>
                </div>
                <div className="flex flex-col md:items-center">
                  <div className="font-serif-display text-4xl md:text-7xl text-primary font-bold italic">{stat.val}</div>
                  <div className="font-label text-[9px] md:text-[10px] uppercase tracking-widest text-secondary font-bold md:mb-4">{stat.label}</div>
                  <p className="hidden md:block font-serif-display text-lg text-on-surface-variant/70 leading-relaxed">{stat.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 md:py-32 px-6 md:px-8 border-t border-outline-variant/10 bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12 md:mb-16 text-center">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary font-bold">Global Presence</span>
            <h2 className="font-serif-display text-3xl md:text-5xl mt-3 md:mt-4 text-primary">Our Operational Hubs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            
            <div className="p-8 md:p-12 rounded-[32px] md:rounded-[40px] relative overflow-hidden group hover:shadow-2xl transition-all duration-700 border border-outline-variant/10 flex flex-col bg-white">
              <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-[0.15] md:opacity-[0.08] group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <img src="https://flagcdn.com/ca.svg" alt="Canada Flag" className="w-16 md:w-32 h-auto drop-shadow-2xl rounded-sm object-cover" />
              </div>
              <div className="relative z-10">
                <div className="mb-6 md:mb-8 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/10 text-secondary">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">public</span>
                </div>
                <h3 className="font-serif-display text-3xl md:text-5xl text-primary mb-1 md:mb-2 italic">Canada</h3>
                <p className="font-label text-[10px] tracking-widest uppercase text-secondary font-bold mb-8 md:mb-10">Registered Office</p>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-4 md:gap-5">
                    <span className="material-symbols-outlined text-lg md:text-xl text-secondary mt-1 bg-zinc-50 p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-sm">location_on</span>
                    <div>
                      <p className="font-label font-bold text-primary mb-0.5 md:mb-1 tracking-wider text-[9px] md:text-[10px] uppercase opacity-40">Surrey Branch</p>
                      <p className="font-serif-display text-lg md:text-xl text-on-surface-variant leading-relaxed">Unit 201, 7380 King George Blvd<br/>Surrey, BC V3W 5A5</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-5">
                    <span className="material-symbols-outlined text-lg md:text-xl text-secondary mt-1 bg-zinc-50 p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-sm">call</span>
                    <div>
                      <p className="font-label font-bold text-primary mb-0.5 md:mb-1 tracking-wider text-[9px] md:text-[10px] uppercase opacity-40">Contact</p>
                      <a href="tel:+16045550198" className="font-serif-display text-lg md:text-xl text-on-surface-variant hover:text-secondary transition-colors">+1 (604) 555-0198</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 rounded-[32px] md:rounded-[40px] relative overflow-hidden group hover:shadow-2xl transition-all duration-700 border border-outline-variant/10 flex flex-col bg-white">
              <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-[0.15] md:opacity-[0.08] group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-16 md:w-32 h-auto drop-shadow-2xl rounded-sm object-cover" />
              </div>
              <div className="relative z-10">
                <div className="mb-6 md:mb-8 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/10 text-secondary">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">public</span>
                </div>
                <h3 className="font-serif-display text-3xl md:text-5xl text-primary mb-1 md:mb-2 italic">India</h3>
                <p className="font-label text-[10px] tracking-widest uppercase text-secondary font-bold mb-8 md:mb-10">Corporate Office</p>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-4 md:gap-5">
                    <span className="material-symbols-outlined text-lg md:text-xl text-secondary mt-1 bg-zinc-50 p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-sm">location_on</span>
                    <div>
                      <p className="font-label font-bold text-primary mb-0.5 md:mb-1 tracking-wider text-[9px] md:text-[10px] uppercase opacity-40">Rajkot Hub</p>
                      <p className="font-serif-display text-lg md:text-xl text-on-surface-variant leading-relaxed">301 Silver Plaza, Kalawad Road<br/>Rajkot, Gujarat 360005</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-5">
                    <span className="material-symbols-outlined text-lg md:text-xl text-secondary mt-1 bg-zinc-50 p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-sm">call</span>
                    <div>
                      <p className="font-label font-bold text-primary mb-0.5 md:mb-1 tracking-wider text-[9px] md:text-[10px] uppercase opacity-40">Contact</p>
                      <a href="tel:+919213692135" className="font-serif-display text-lg md:text-xl text-on-surface-variant hover:text-secondary transition-colors">+91 92136-92135</a>
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
