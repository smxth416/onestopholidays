import { useLocation } from "react-router-dom";
import { SmoothLink as Link } from "@/components/SmoothLink";
import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SmoothScrollContext } from "@/providers/SmoothScrollProvider";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollContext = useContext(SmoothScrollContext);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      scrollContext?.lock();
    } else {
      scrollContext?.unlock();
    }
    return () => {
      scrollContext?.unlock();
    };
  }, [isMenuOpen, scrollContext]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scrolled state
      setIsScrolled(currentScrollY > 20);

      // Determine visibility state
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide when scrolling down past a threshold
        setIsVisible(false);
      } else {
        // Show when scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/destinations", label: "Destinations" },
    { to: "/blog", label: "Blog" },
  ];

  const contactLink = { to: "/contact", label: "Contact" };

  return (
    <>
    <header 
      className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 transform ${
        isVisible || isMenuOpen ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg border-b border-outline-variant/10 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="One Stop Holidays" 
            className={`transition-all duration-500 group-hover:scale-105 ${
              isScrolled ? "h-10 md:h-12" : "h-12 md:h-16"
            } w-auto object-contain`}
          />
        </Link>

        {/* Center Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = currentPath === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                  isActive ? "text-primary" : "text-on-surface/40 hover:text-primary"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-5 right-5 h-[2px] bg-secondary rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Section - Contact (Desktop) & Menu (Mobile) */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <Link
              to={contactLink.to}
              className="relative group/contact px-10 py-3.5 rounded-[24px] font-label text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-700 active:scale-95 flex items-center justify-center isolate overflow-hidden"
            >
              {/* Liquid Glass Base - Adaptive Tint */}
              <div 
                className={`absolute inset-0 backdrop-blur-xl transition-all duration-700 ${
                  isScrolled 
                    ? "bg-primary/[0.05] group-hover/contact:bg-primary/[0.08]" 
                    : "bg-white/[0.03] group-hover/contact:bg-white/[0.08]"
                } group-hover/contact:backdrop-blur-2xl`} 
                style={{
                  boxShadow: isScrolled
                    ? 'inset 0 1px 1px rgba(0,0,0,0.1), inset 0 -1px 1px rgba(255,255,255,0.2)'
                    : 'inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(0,0,0,0.1)',
                }}
              />
              
              {/* Glowing Gradient Border (Adaptive Luminous Stroke) */}
              <div className="absolute inset-0 rounded-[24px] border-[0.5px] border-transparent transition-all duration-700 [mask-image:linear-gradient(white,white)]"
                   style={{
                     background: isScrolled
                       ? 'linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.05) 50%, rgba(26,26,26,0.3) 100%) border-box'
                       : 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.6) 100%) border-box'
                   }}>
              </div>

              {/* Dynamic Refraction / Reflection */}
              <div className="absolute inset-0 opacity-30 group-hover/contact:opacity-50 transition-opacity duration-1000">
                <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-[pulse_8s_infinite]" />
              </div>

              {/* Hover Glow Intensity */}
              <div className="absolute inset-0 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-700 shadow-[0_0_20px_rgba(255,255,255,0.15)]" />

              <span className="relative z-10 text-primary group-hover/contact:text-primary transition-colors duration-500">{contactLink.label}</span>
            </Link>
          </div>

          {/* Hamburger Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-primary relative z-[130]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
    </header>

    {/* Mobile Menu Overlay - Outside header to avoid transform issues */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed inset-0 bg-white z-[120] md:hidden overflow-y-auto"
        >
          <div className="min-h-full flex flex-col pt-32 pb-12 px-8">
            <div className="flex flex-col gap-6 mb-12">
              {[...links, contactLink].map((link, i) => {
                const isActive = currentPath === link.to;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-headline text-4xl flex items-center gap-3 ${
                        isActive ? "text-secondary italic" : "text-primary"
                      }`}
                    >
                      {link.label}
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary" />}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pt-8 border-t border-outline-variant/10"
            >
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface/30 font-bold mb-6">Connect with us</p>
              <div className="flex flex-col gap-5">
                <a href="https://wa.me/919213692135" className="flex items-center gap-3 text-primary font-bold group">
                  <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  WhatsApp Support
                </a>
                <a href="mailto:admin@onestopholidays.co" className="flex items-center gap-3 text-primary font-bold group">
                  <span className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary/60">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </span>
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
