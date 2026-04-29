import { Send, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <main className="bg-white">
      {/* Contact Form Hero */}
      <section className="min-h-[90dvh] md:min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl leading-none text-primary -tracking-wider">
              Let's start your <br /> <span className="italic text-secondary">next chapter.</span>
            </h1>
            <p className="text-on-surface-variant text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Our curators are ready to design a journey as unique as you are. Share your vision, and we'll handle the rest.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 py-2 md:py-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-secondary/10 text-secondary border border-secondary/20">
                <span className="material-symbols-outlined text-xl md:text-2xl">edit_note</span>
              </div>
              <span className="font-label text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-secondary">Consultation Request</span>
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[32px] md:rounded-[48px] p-2 md:p-4 border border-outline-variant/15"
          >
            <div className="bg-white rounded-[28px] md:rounded-[40px] p-8 md:p-12 border border-outline-variant/10 shadow-sm">
              <form className="space-y-10 md:space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="space-y-3 md:space-y-4 border-b border-outline-variant/15 pb-2 focus-within:border-secondary transition-colors">
                    <label className="font-label text-[9px] uppercase tracking-[0.25em] text-on-surface-variant/60 font-bold block">Your Name</label>
                    <input 
                      className="w-full bg-transparent border-none p-0 text-lg md:text-xl font-headline text-primary placeholder:text-on-surface-variant/20 focus:ring-0 transition-all outline-none" 
                      placeholder="John Doe" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-3 md:space-y-4 border-b border-outline-variant/15 pb-2 focus-within:border-secondary transition-colors">
                    <label className="font-label text-[9px] uppercase tracking-[0.25em] text-on-surface-variant/60 font-bold block">Email Address</label>
                    <input 
                      className="w-full bg-transparent border-none p-0 text-lg md:text-xl font-headline text-primary placeholder:text-on-surface-variant/20 focus:ring-0 transition-all outline-none" 
                      placeholder="john@example.com" 
                      type="email" 
                    />
                  </div>
                </div>
                
                <div className="space-y-3 md:space-y-4 border-b border-outline-variant/15 pb-2 focus-within:border-secondary transition-colors">
                  <label className="font-label text-[9px] uppercase tracking-[0.25em] text-on-surface-variant/60 font-bold block">Desired Destination</label>
                  <input 
                    className="w-full bg-transparent border-none p-0 text-lg md:text-xl font-headline text-primary placeholder:text-on-surface-variant/20 focus:ring-0 transition-all outline-none" 
                    placeholder="E.g. Amalfi Coast, Japan, Iceland" 
                    type="text" 
                  />
                </div>

                <div className="space-y-3 md:space-y-4 border-b border-outline-variant/15 pb-2 focus-within:border-secondary transition-colors">
                  <label className="font-label text-[9px] uppercase tracking-[0.25em] text-on-surface-variant/60 font-bold block">Your Vision</label>
                  <textarea 
                    className="w-full bg-transparent border-none p-0 text-lg md:text-xl font-headline text-primary placeholder:text-on-surface-variant/20 focus:ring-0 transition-all outline-none resize-none min-h-[60px]" 
                    placeholder="Tell us about the trip of your dreams..." 
                    rows={1}
                  ></textarea>
                </div>

                <div className="pt-4 flex justify-center">
                  <button 
                    className="group relative w-full sm:w-fit min-w-[240px] md:min-w-[280px] bg-secondary text-white py-5 px-16 rounded-full font-label text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-extrabold transition-all duration-500 active:scale-[0.95] overflow-hidden flex items-center justify-center shadow-lg shadow-secondary/10" 
                    type="submit"
                  >
                    <div className="flex items-center justify-center transition-all duration-500 group-hover:translate-x-[4.5rem]">
                      <div className="relative group-hover:animate-fly transition-all duration-500 group-hover:rotate-45 group-hover:scale-125">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                        </svg>
                      </div>
                      <span className="ml-4 transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-20 whitespace-nowrap">Send Inquiry</span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Details */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Get in Touch</span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">The Rajkot <br /><span className="italic">Headquarters</span></h2>
              <p className="font-body text-base text-on-surface/50 leading-relaxed max-w-md mx-auto lg:mx-0">
                Nestled in the heart of Gujarat's vibrant hub, our office serves as the engine room for your global adventures.
              </p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {/* Email Card */}
              <a 
                href="mailto:admin@onestopholidays.co"
                className="group bg-white rounded-[32px] p-2 border border-outline-variant/15 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="bg-white rounded-[26px] p-8 h-full border border-outline-variant/10 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-secondary w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-label text-[10px] uppercase tracking-widest font-bold text-on-surface/30">Email</h3>
                    <p className="font-headline text-xl md:text-2xl text-primary group-hover:text-secondary transition-colors">admin@onestopholidays.co</p>
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href="https://wa.me/919213692135"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-[32px] p-2 border border-outline-variant/15 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="bg-white rounded-[26px] p-8 h-full border border-outline-variant/10 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-secondary w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-label text-[10px] uppercase tracking-widest font-bold text-on-surface/30">Phone</h3>
                    <p className="font-headline text-xl md:text-2xl text-primary group-hover:text-secondary transition-colors">+91 92136-92135</p>
                    <p className="font-label text-[9px] text-on-surface/40 uppercase tracking-widest font-medium">Mon - Sat: 10:00 AM - 7:30 PM</p>
                  </div>
                </div>
              </a>

              {/* Address Card */}
              <div className="sm:col-span-2 bg-white rounded-[32px] p-2 border border-outline-variant/15">
                <div className="bg-white rounded-[26px] p-8 h-full border border-outline-variant/10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-label text-[10px] uppercase tracking-widest font-bold text-on-surface/30">Address</h3>
                    <p className="font-headline text-xl md:text-2xl text-primary leading-snug">The City Center, Raiya Rd, Nehru Nagar, Rajkot, Gujarat 360007</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Map Block */}
            <div className="relative min-h-[400px] lg:min-h-full rounded-[32px] md:rounded-[48px] overflow-hidden border border-outline-variant/20 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.4420827746094!2d70.77964007533662!3d22.299114479687415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca27353a70f1%3A0x6cac395ba6a6d915!2sThe%20City%20Center%2C%20339%2C%20Raiya%20Rd%2C%20Nehru%20Nagar%2C%20Rajkot%2C%20Gujarat%20360007!5e0!3m2!1sen!2sin!4v1777388521245!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Content Block */}
            <div className="bg-white rounded-[32px] md:rounded-[40px] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden shadow-xl border border-outline-variant/10">
              <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
                <img className="w-full h-full object-cover grayscale" alt="Topographical map pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Igz0oW4xJWM4gWfDUySRCRwjRILwgfF2x7Kecjdbq3jDUnq4PcTQsX8tc450Tumm-McQdy6RfZw2x9xBtFIgoRPHCtECMOU9_Ed6vYDNavcw-a1_AabTGyAEGnJ26Ghmy4HfGkI23wXY-j58Nn_AbtMua0E8OSXJj8dSdSDBIYm4vJXU6l7YFdaapD4jcoILt0tMMAhwPLj_PvFReKXl6_KMDw19PPnMxDipzOl0AU-HXvZcOLG2M9EIb1yLd7FDrpgOCowjEBA" />
              </div>
              <div className="relative z-10 space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Our Physical Space</span>
                  <h3 className="font-headline text-4xl md:text-6xl text-primary leading-[1.1] -tracking-[0.02em]">
                    Visit our studio and <br /><span className="italic text-secondary">experience the curation.</span>
                  </h3>
                </div>
                <p className="text-on-surface/50 font-body text-base md:text-lg leading-relaxed max-w-md">
                  Witness the art of travel planning first-hand. Our studio is designed to inspire your next great adventure through sensory storytelling and personalized consultation.
                </p>
                <div className="pt-2">
                  <a 
                    className="inline-flex bg-primary text-white px-10 py-4 rounded-full font-label text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-primary/90 transition-all shadow-lg active:scale-95" 
                    href="https://maps.app.goo.gl/9rAx8fo1jWcXaofy9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
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

