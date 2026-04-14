const ContactPage = () => {
  return (
    <main>
      {/* Contact Form Hero */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="font-headline text-7xl md:text-8xl leading-none text-primary -tracking-wider">
              Let's start your <br /> <span className="italic text-secondary">next chapter.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
              Our curators are ready to design a journey as unique as you are. Share your vision, and we'll handle the rest.
            </p>
            <div className="flex items-center gap-4 py-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary-container text-on-secondary-container">
                <span className="material-symbols-outlined">edit_note</span>
              </div>
              <span className="font-label text-xs uppercase tracking-[0.2em] font-bold text-secondary">Consultation Request</span>
            </div>
          </div>
          {/* Form Card */}
          <div className="bg-surface-container-lowest rounded-lg p-10 shadow-sm border border-outline-variant/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant px-4">Your Name</label>
                  <input className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-secondary/30 focus:bg-white transition-all outline-none" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant px-4">Email Address</label>
                  <input className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-secondary/30 focus:bg-white transition-all outline-none" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant px-4">Desired Destination</label>
                <input className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-secondary/30 focus:bg-white transition-all outline-none" placeholder="E.g. Amalfi Coast, Japan, Iceland" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant px-4">Your Vision</label>
                <textarea className="w-full bg-surface-container-high border-none rounded-[2rem] px-6 py-4 focus:ring-2 focus:ring-secondary/30 focus:bg-white transition-all outline-none resize-none" placeholder="Tell us about the trip of your dreams..." rows={4}></textarea>
              </div>
              <button className="w-full bg-secondary text-on-secondary py-5 rounded-full font-label text-sm uppercase tracking-[0.2em] font-bold hover:bg-on-secondary-container transition-all shadow-lg shadow-secondary/20 active:scale-95" type="submit">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Office Details */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1 space-y-6">
              <h2 className="font-headline text-5xl text-primary">The Rajkot <br /><span className="italic">Headquarters</span></h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Nestled in the heart of Gujarat's vibrant hub, our office serves as the engine room for your global adventures.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-8 rounded-lg space-y-4 border border-outline-variant/5">
                <span className="material-symbols-outlined text-secondary text-4xl">location_on</span>
                <h3 className="font-label text-xs uppercase tracking-widest font-bold text-on-surface-variant">Address</h3>
                <p className="font-headline text-2xl text-on-surface">104-108 Platinum Plaza,<br />Astron Chowk, Tagor Road,<br />Rajkot, Gujarat 360001</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-lg space-y-4 border border-outline-variant/5">
                <span className="material-symbols-outlined text-secondary text-4xl">call</span>
                <h3 className="font-label text-xs uppercase tracking-widest font-bold text-on-surface-variant">Phone</h3>
                <p className="font-headline text-2xl text-on-surface">+91 281 245 8741<br />+91 98765 43210</p>
                <p className="font-label text-xs text-on-surface-variant/60">Mon - Sat: 10:00 AM - 7:00 PM</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-lg space-y-4 border border-outline-variant/5 sm:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="space-y-2">
                  <span className="material-symbols-outlined text-secondary text-4xl">mail</span>
                  <h3 className="font-label text-xs uppercase tracking-widest font-bold text-on-surface-variant">Email</h3>
                  <p className="font-headline text-2xl text-on-surface">concierge@onestopholidays.com</p>
                </div>
                <button className="mt-6 md:mt-0 font-label text-xs uppercase tracking-widest border border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-all">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Map Block */}
            <div className="relative h-[400px] lg:h-auto rounded-[24px] overflow-hidden shadow-xl border border-outline-variant/10">
              <img className="w-full h-full object-cover" alt="Map of Rajkot showing One Stop Holidays office location" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMomNobCsTyVZDyTe4U1gE-0d9We_uRqWORsAj71BelfXQvjNt18XkxUP_rvOZQQnPywAf_Et3ZasZAC_OKL8s0R9hsDMtubxIp83E1yuSqMb-JUfDgZKVQu8sYX46rc3L2bJ_fjKX0aTjuDQhjMEnN8HnJnZxUuRAOr5rhQOK_Mpp7M195MtfA2liQEyhSZWJuYzYwrz4fkQPPNOLj14Viw1rM9eA2BV93P4aWlqadfiuxpXufuctDLLS_okinW_P-gpHtaulZJk" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-12 h-12 bg-secondary rounded-full animate-ping opacity-25"></div>
                  <div className="relative bg-secondary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="material-symbols-outlined">travel_explore</span>
                  </div>
                  <div className="absolute top-full mt-4 bg-white px-6 py-3 rounded-2xl shadow-xl border border-outline-variant/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-headline text-lg text-primary">One Stop Holidays</p>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">22.3039° N, 70.8022° E</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-[16px] border border-white/40 shadow-xl">
                <div className="space-y-1.5">
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Geo-Location</p>
                  <p className="font-headline text-2xl text-primary">Rajkot, India</p>
                </div>
              </div>
            </div>

            {/* Content Block */}
            <div className="bg-white rounded-[24px] p-12 md:p-16 flex flex-col justify-center relative overflow-hidden shadow-xl border border-outline-variant/10">
              <div className="absolute right-0 top-0 w-full h-full opacity-[0.03] pointer-events-none">
                <img className="w-full h-full object-cover grayscale" alt="Topographical map pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Igz0oW4xJWM4gWfDUySRCRwjRILwgfF2x7Kecjdbq3jDUnq4PcTQsX8tc450Tumm-McQdy6RfZw2x9xBtFIgoRPHCtECMOU9_Ed6vYDNavcw-a1_AabTGyAEGnJ26Ghmy4HfGkI23wXY-j58Nn_AbtMua0E8OSXJj8dSdSDBIYm4vJXU6l7YFdaapD4jcoILt0tMMAhwPLj_PvFReKXl6_KMDw19PPnMxDipzOl0AU-HXvZcOLG2M9EIb1yLd7FDrpgOCowjEBA" />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">Our Physical Space</span>
                  <h3 className="font-headline text-5xl md:text-6xl text-primary leading-[1.1] -tracking-[0.02em]">
                    Visit our studio and <br /><span className="italic text-secondary">experience the curation.</span>
                  </h3>
                </div>
                <p className="text-on-surface-variant font-serif-display text-xl leading-relaxed max-w-md">
                  Witness the art of travel planning first-hand. Our studio is designed to inspire your next great adventure through sensory storytelling and personalized consultation.
                </p>
                <div className="pt-2">
                  <a className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-label text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-primary/90 transition-all shadow-lg" href="https://maps.google.com/?q=22.3039,70.8022" target="_blank" rel="noopener noreferrer">
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
