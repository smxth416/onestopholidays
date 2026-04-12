import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/destinations", label: "Destinations" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <Link to="/" className="text-2xl font-semibold tracking-tight text-primary-container font-headline">
          One Stop Holidays
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-headline text-lg antialiased transition-colors duration-300 ${
                currentPath === link.to
                  ? "text-secondary border-b border-secondary pb-1"
                  : "text-on-surface hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="bg-secondary text-on-secondary px-8 py-2.5 rounded-full font-label text-sm font-bold tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
