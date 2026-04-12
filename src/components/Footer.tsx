import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full rounded-t-[20px] bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16 font-label text-sm tracking-wide text-primary-container">
        <div className="md:col-span-1">
          <div className="font-headline text-xl text-primary-container mb-6">One Stop Holidays</div>
          <p className="text-on-surface/70 mb-8 leading-relaxed">
            Crafting bespoke travel experiences for the modern soul seeker. Every journey is a story waiting to be told.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-secondary transition-colors">public</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-secondary transition-colors">share</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-on-surface uppercase tracking-widest text-xs">Explore</h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface/70 hover:underline decoration-secondary underline-offset-4" to="/destinations">Destinations</Link></li>
            <li><a className="text-on-surface/70 hover:underline decoration-secondary underline-offset-4" href="#">Private Charters</a></li>
            <li><a className="text-on-surface/70 hover:underline decoration-secondary underline-offset-4" href="#">The Journal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-on-surface uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4">
            <li><Link className="text-secondary font-bold" to="/about">About Us</Link></li>
            <li><a className="text-on-surface/70 hover:underline decoration-secondary underline-offset-4" href="#">Sitemap</a></li>
            <li><a className="text-on-surface/70 hover:underline decoration-secondary underline-offset-4" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface/70 hover:underline decoration-secondary underline-offset-4" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-on-surface uppercase tracking-widest text-xs">Connect</h4>
          <p className="text-on-surface/70 mb-4 italic">Rajkot Office</p>
          <p className="text-on-surface/70 mb-6">hello@onestopholidays.com<br />+91 (0) 281 4455 6677</p>
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-secondary"></div>
            <span className="text-xs uppercase font-bold text-secondary">Inquire Now</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface/50 text-[10px] uppercase tracking-[0.2em]">
        <span>© 2024 One Stop Holidays. Rajkot, India.</span>
        <div className="flex gap-6">
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
