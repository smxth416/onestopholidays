import { SmoothLink as Link } from "@/components/SmoothLink";
import { destinations } from "@/data/destinations";

const SitemapPage = () => {
  const mainPages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "All Destinations", path: "/destinations" },
    { name: "Blog (SEO Hub)", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const legalPages = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  return (
    <main>
      <section className="min-h-screen pt-32 pb-24 px-8">
        <div className="max-w-6xl mx-auto w-full">
          <span className="font-label text-sm tracking-[0.3em] uppercase text-secondary font-bold">Navigation</span>
          <h1 className="font-serif-display text-6xl md:text-7xl text-primary mt-4 mb-20 leading-tight italic">Sitemap</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            
            {/* Main Sections */}
            <div>
              <h2 className="font-label text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-8 pb-4 border-b border-outline-variant/10">Main Directory</h2>
              <ul className="space-y-4">
                {mainPages.map((page) => (
                  <li key={page.path}>
                    <Link to={page.path} className="font-serif-display text-2xl text-primary hover:text-secondary transition-colors duration-300">
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations + Blog */}
            <div className="lg:col-span-1">
              <h2 className="font-label text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-8 pb-4 border-b border-outline-variant/10">Destinations</h2>
              <ul className="grid grid-cols-1 gap-4">
                {destinations.map((dest) => (
                  <li key={dest.slug}>
                    <Link to={`/destinations/${dest.slug}`} className="font-serif-display text-xl text-primary/80 hover:text-secondary transition-colors duration-300">
                      {dest.name} — <span className="text-sm font-label uppercase tracking-widest text-outline-variant">{dest.category}</span>
                    </Link>
                    <div className="mt-1 text-sm">
                      <Link to={`/blog/${dest.slug}`} className="font-label text-sm text-secondary/80 hover:text-secondary transition-colors duration-300 underline underline-offset-4">
                        Blog: {dest.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Compliance */}
            <div>
              <h2 className="font-label text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-8 pb-4 border-b border-outline-variant/10">Legal & Support</h2>
              <ul className="space-y-4">
                {legalPages.map((page) => (
                  <li key={page.path}>
                    <Link to={page.path} className="font-serif-display text-2xl text-primary hover:text-secondary transition-colors duration-300">
                      {page.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="https://wa.me/919213692135" className="font-serif-display text-2xl text-primary hover:text-secondary transition-colors duration-300">
                    WhatsApp Support
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Branding */}
          <div className="mt-32 pt-12 border-t border-outline-variant/10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden mb-6 opacity-40 hover:opacity-100 transition-opacity">
              <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <p className="font-label text-[10px] uppercase tracking-[0.4em] text-outline-variant">
              Curated Globally. Managed from Rajkot.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SitemapPage;
