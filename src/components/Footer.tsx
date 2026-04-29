import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { SmoothLink as Link } from "@/components/SmoothLink";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Destinations", to: "/destinations" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Sitemap", to: "/sitemap" },
];

const contactInfo = [
  {
    icon: <Mail size={16} className="text-secondary mt-0.5 shrink-0" />,
    text: "admin@onestopholidays.co",
    href: "mailto:admin@onestopholidays.co",
  },
  {
    icon: <Phone size={16} className="text-secondary mt-0.5 shrink-0" />,
    text: "+91 92136-92135",
    href: "https://wa.me/919213692135",
  },
  {
    icon: <MapPin size={16} className="text-secondary mt-0.5 shrink-0" />,
    label: "Office",
    text: "The City Center, Raiya Rd, Nehru Nagar, Rajkot, Gujarat 360007",
  },
];

const socialLinks = [
  { icon: <Instagram size={18} />, label: "Instagram", href: "https://instagram.com" },
  { icon: <Facebook size={18} />, label: "Facebook", href: "https://facebook.com" },
];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden mt-32 border-t border-outline-variant/15 flex flex-col bg-white"
    >
      {/* ── TAGLINE (top anchor) ─────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-14 pt-8 md:pt-10 pb-6 md:pb-8 border-b border-outline-variant/15 shrink-0 text-center md:text-left">
        <span className="font-label text-[10px] tracking-[0.3em] uppercase text-secondary font-bold">
          Crafting Bespoke Journeys
        </span>
        <h2 className="font-serif-display text-2xl md:text-5xl text-primary mt-3 md:mt-4 leading-tight max-w-2xl mx-auto md:mx-0">
          Every holiday is a story{" "}
          <span className="italic text-secondary">waiting to be told.</span>
        </h2>
      </div>

      {/* ── 4-COLUMN GRID (traditional layout) ───────────────── */}
      <div className="relative z-10 py-10 md:py-24">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

            {/* Brand */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left sm:col-span-2 lg:col-span-1">
              <Link
                to="/"
                className="inline-block mb-4 md:mb-6 group"
              >
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl overflow-hidden border border-outline-variant/10 group-hover:border-secondary transition-all mx-auto md:mx-0">
                  <img src="/logo.png" alt="One Stop Holidays" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

              </Link>
              <p className="text-on-surface/60 text-xs md:text-sm leading-relaxed max-w-xs mb-6 md:mb-8 font-label">
                Your dedicated travel partner from Rajkot, India — curating premium, personalised holidays across the globe.
              </p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-outline-variant/40 flex items-center justify-center text-on-surface/60 hover:text-secondary hover:border-secondary hover:bg-secondary/5 transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div className="text-center md:text-left pt-2 md:pt-0">
              <h4 className="font-label text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-3 md:mb-6">
                Explore
              </h4>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2 md:gap-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-label text-xs md:text-sm text-on-surface/80 hover:text-primary transition-colors duration-200 inline-flex items-center group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="text-center md:text-left pt-2 md:pt-0">
              <h4 className="font-label text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-3 md:mb-6">
                Legal
              </h4>
              <ul className="flex flex-wrap justify-center md:flex-col gap-x-8 gap-y-2 md:gap-y-4">
                {legalLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-label text-xs md:text-sm text-on-surface/80 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="text-center md:text-left pt-2 md:pt-0">
              <h4 className="font-label text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-3 md:mb-6">
                Connect
              </h4>
              <ul className="space-y-3 md:space-y-6">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                    <div className="shrink-0 w-8 h-8 rounded-full border border-outline-variant/40 flex items-center justify-center text-on-surface/70 scale-90 md:scale-100">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      {item.label && (
                        <span className="font-label text-[9px] font-bold uppercase tracking-widest text-secondary mb-0.5 md:mb-1">
                          {item.label}
                        </span>
                      )}
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-label text-xs md:text-sm text-on-surface/80 hover:text-primary transition-colors leading-relaxed"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="font-label text-xs md:text-sm text-on-surface/80 leading-relaxed max-w-[200px] md:max-w-none mx-auto md:mx-0">
                          {item.text}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── COPYRIGHT BAR (bottom anchor) ───────────────────── */}
      <div className="relative z-10 shrink-0 max-w-7xl mx-auto w-full px-6 md:px-14 py-8 md:py-10 mb-8 md:mb-0 border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-on-surface/60 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-label text-center">
        <span>
          © {new Date().getFullYear()} One Stop Holidays.
        </span>
        <p className="font-label text-[10px] md:text-[11px] tracking-widest text-on-surface/60 flex items-center gap-1">
          Site by : 
          <a 
            href="https://somethingmedia.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors duration-300 font-bold"
          >
            Somethingmedia
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
