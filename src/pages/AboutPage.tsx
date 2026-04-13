const AboutPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">

            <h1 className="font-serif-display text-7xl md:text-8xl text-primary leading-[1.1] mb-8 -tracking-[0.02em]">
              Curating Journeys <br /><span className="italic text-secondary">With Soul.</span>
            </h1>
            <div className="max-w-xl">
              <p className="font-serif-display text-2xl leading-relaxed text-on-surface-variant mb-6">
                One Stop Holidays wasn't born in a boardroom; it was conceived on the winding trails of the Himalayas and the quiet streets of hidden European villages.
              </p>
              <p className="font-serif-display text-2xl leading-relaxed text-on-surface-variant">
                Our mission is to replace transactional travel with curated emotional discovery. We don't just book rooms; we orchestrate moments that linger in the memory long after the tan has faded.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover" alt="Luxury vintage explorer desk with maps and compass" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS-7-RTNXslWNf7EelL1VsCBU2v_mUH7VRs5m-8nlSwcgnr6fJSpB9J47jY5TqLL9ad4alidUm7azP-MBZSSRbG6Y1M2uTTwz2qH92RLTvxp-RIorX8SUDNaPMSX9zHMBKLmpzGAXQ_gRj5kgQXT1h302VhQFVKEVrpofOcuqiO0QA-QyrvNTD2YKMPUgd39RH7tlnxF0eXKWlBF9fGAg30wGReaAV9YagV9hzbmOF8t1hliThR0iDSB4qZqjdAErGMOk6WGG0uGk" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-20 text-center">
            <span className="font-label text-sm tracking-[0.3em] uppercase text-secondary font-bold">The Pillars of Expertise</span>
            <h2 className="font-serif-display text-5xl md:text-6xl mt-4 text-primary">A Decade of Crafting Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-12 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-500 group">
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
            <div className="bg-surface-container-lowest p-12 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-500 group">
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
      <section className="min-h-screen flex flex-col justify-center py-24 px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="font-label text-sm tracking-[0.3em] uppercase text-secondary font-bold">Leadership</span>
              <h2 className="font-serif-display text-5xl md:text-7xl mt-4 text-primary italic">The Curators.</h2>
            </div>
            <p className="font-serif-display text-2xl text-on-surface-variant max-w-sm">
              Guided by travel visionaries who believe every holiday is a masterpiece in waiting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Vikram Shah", title: "Founder & Chief Architect", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq9txtDbrKF8rCZp6Zn3xaW7SUwn0-CTE8b614t7lgJkpJ6ClSQfXS2_QCCaOwxoLHeMxQKbCbWVxEGn8Her4v09qLFyAWppfvqu-bhsBh-IgomWm8wzkDsNMgnPQhW7ZU31XO8ISxqJ-S1B4qjatJ46U-zH7ppaOGR-cl9wUvJZ7bgQl7j4Jbew-_gdVZhNctYfxtOjNuMYATeCR7weecQbU4Ido4S8W6i4q2I2_RsxrpQI1dgbuEfUIQuzL3oJi8P2HbKUtMOYY" },
              { name: "Ananya Patel", title: "Director of Experiences", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWlesZm8g6GyNemVhVNCLshCcQFU-8jzw6yWSfdDlVi3UMxEqEstwUPKfZQF8SSxtJTSAfmGp3PTq9eJImxVzZbG6AEn3QVb7zWpTVg84dtn6sinJfC3Q20LKqZNXC3vbSCd8MGl2X92MW6_RfJzk45Udyb-7_UHSkYZ77tM8JJUvjTq4a_BpqRsHWIFTL3-9EgMW5E1FBOim_xpN7-DC8RtZkqRLW9vrD8Vr0095OJK3QYx64G7odKRemU34eDWIiHP7ooK17nfA" },
              { name: "Rohan Mehta", title: "Head of Logistics", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFsOiJgeYeew2CaXtcyIpdQZ03zPhR_R9FNUOxbngAiHX8jTuo7t_sIqOcmgG7pDdvlVByXtXbVYGrBAuQALH_R2xXqJOZ9d8ggafaMcs8fLONafQH9Y8gOVk1kop3GX_LNPs1W5l-MZA5y1A_dckjeK8yrekf7KM6_YY6fhwuQ0tDmL_OuUP_Xsi9fAXFXfuRrRB3J9dpQfgzetFB8qbeT2d0xStL_AYBppqiX3voXaQjzo3UReCDWHfYRF-eKK_c8tTfqjaKN4w" },
            ].map((person) => (
              <div key={person.name} className="group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6 relative">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={person.name} src={person.img} />
                </div>
                <h3 className="font-serif-display text-3xl text-primary">{person.name}</h3>
                <p className="font-label text-xs uppercase tracking-widest text-secondary font-bold mt-1">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rajkot Office */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-surface-container-lowest p-4 rounded-lg shadow-2xl">
              <div className="aspect-video rounded-lg overflow-hidden grayscale contrast-125">
                <img className="w-full h-full object-cover" alt="Map of Rajkot city" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9mr1IKLdbqzcVKerR7LrSDwWcMZ7KdSBuI9yoa-sIyvHJyGv6yqLTxo3eM7i5Qzh_m2KNVKSk6gZUw1WG03Loy-rpCDtH-3Tuqj6vIAThM91xhYHfqe_c6vf4xJq_Vj3_2_zDJl73FoNN7wyRrt1WlL9NgYeEw2SFweg2Nv3Nj9D-Ldtm6pP7EaKhETIg52oVwuh0hhk0_jJp3Or9IDR2_-isMBqvVnaee9a15jf8y69-P3dqHkrtniIs1p62TBBfdT1txAQL9w8" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="font-label text-sm tracking-[0.3em] uppercase text-secondary font-bold">Local Roots</span>
            <h2 className="font-serif-display text-5xl md:text-6xl mt-4 mb-8 text-primary">Heart in Rajkot, Eyes on the World.</h2>
            <div className="space-y-6">
              <p className="font-serif-display text-2xl text-on-surface-variant leading-relaxed">
                Our headquarters in Rajkot serves as our design studio. Here, we blend Gujarati hospitality with global travel standards.
              </p>
              <div className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-lg">
                <span className="material-symbols-outlined text-secondary">location_on</span>
                <div>
                  <p className="font-label font-bold text-primary">The Travel Atelier</p>
                  <p className="font-serif-display text-lg text-on-surface-variant">301 Silver Plaza, Kalawad Road, Rajkot, Gujarat 360005</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-lg">
                <span className="material-symbols-outlined text-secondary">schedule</span>
                <div>
                  <p className="font-label font-bold text-primary">Consultation Hours</p>
                  <p className="font-serif-display text-lg text-on-surface-variant">Monday – Saturday: 10:00 AM – 7:00 PM</p>
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
