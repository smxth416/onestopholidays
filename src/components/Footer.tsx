import { Mail, Phone, MapPin, Globe, Share2 } from "lucide-react";
import { SmoothLink as Link } from "@/components/SmoothLink";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Destinations", to: "/destinations" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Sitemap", to: "/" },
];

const contactInfo = [
  {
    icon: <Mail size={16} className="text-secondary mt-0.5 shrink-0" />,
    text: "hello@onestopholidays.com",
    href: "mailto:hello@onestopholidays.com",
  },
  {
    icon: <Phone size={16} className="text-secondary mt-0.5 shrink-0" />,
    text: "+91 (0) 281 4455 6677",
    href: "tel:+912814455677",
  },
  {
    icon: <MapPin size={16} className="text-secondary mt-0.5 shrink-0" />,
    label: "Office",
    text: "301 Silver Plaza, Kalawad Road, Rajkot, Gujarat 360005",
  },
];

const socialLinks = [
  { icon: <Globe size={18} />, label: "Website", href: "#" },
  { icon: <Share2 size={18} />, label: "Share", href: "#" },
];

const Footer = () => {
  return (
    /* mx-4 / mb-4 / mt-20 gives the floating-card look with nav clearance */
    <footer
      className="relative overflow-hidden mt-32 border-t border-outline-variant/15 flex flex-col bg-white"
    >

      {/* ── TAGLINE (top anchor) ─────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 md:px-14 pt-10 pb-8 border-b border-outline-variant/15 shrink-0">
        <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary font-bold">
          Crafting Bespoke Journeys
        </span>
        <h2 className="font-serif-display text-4xl md:text-5xl text-primary mt-3 leading-snug max-w-lg">
          Every holiday is a story{" "}
          <span className="italic text-secondary">waiting to be told.</span>
        </h2>
      </div>

      {/* ── 4-COLUMN GRID (traditional layout) ───────────────── */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto w-full px-8 md:px-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                to="/"
                className="inline-block font-serif-display text-[1.75rem] font-bold mb-4 bg-[length:200%_auto] animate-text-shine bg-clip-text text-transparent bg-gradient-to-r from-primary-container via-secondary/80 to-primary-container hover:scale-105 transition-all duration-500 origin-left"
              >
                One Stop <span className="italic">Holidays</span>
              </Link>
              <p className="text-on-surface/60 text-sm leading-relaxed max-w-xs mb-6 font-label">
                Your dedicated travel partner from Rajkot, India — curating premium, personalised holidays across the globe.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface/50 hover:text-secondary hover:border-secondary transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-label text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5">
                Explore
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-label text-sm text-on-surface/60 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-label text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5">
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-label text-sm text-on-surface/60 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-label text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5">
                Connect
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {item.icon}
                    <div className="flex flex-col">
                      {item.label && (
                        <span className="font-label text-[10px] font-bold uppercase tracking-widest text-secondary mb-0.5">
                          {item.label}
                        </span>
                      )}
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-label text-sm text-on-surface/60 hover:text-primary transition-colors leading-relaxed"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="font-label text-sm text-on-surface/60 leading-relaxed">
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

      {/* ── WATERMARK (bottom decoration) ───────────────────── */}
      <div className="hidden lg:flex h-24 relative z-10 opacity-90 overflow-hidden px-14 shrink-0 transition-opacity duration-500">
        <TextHoverEffect text="ONE STOP HOLIDAYS" />
      </div>

      {/* ── COPYRIGHT BAR (bottom anchor) ───────────────────── */}
      <div className="relative z-10 shrink-0 max-w-7xl mx-auto w-full px-8 md:px-14 py-5 border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center gap-3 text-on-surface/40 text-[10px] uppercase tracking-[0.2em] font-label">
        <span>
          All Rights Reserved © {new Date().getFullYear()} One Stop Holidays. Rajkot, India.
        </span>
        <div className="flex items-center gap-5">
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <div className="w-px h-3 bg-on-surface/15" />
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
