import { useLocation } from "react-router-dom";
import { SmoothLink as Link } from "@/components/SmoothLink";

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
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-[#242424]/95 backdrop-blur-md border border-white/5 shadow-2xl rounded-full p-1.5 flex items-center">
        {links.map((link) => {
          const isActive = currentPath === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-6 py-2.5 rounded-full text-[15px] tracking-wide transition-all duration-300 flex flex-col items-center ${
                isActive 
                  ? "text-white bg-white/10 font-semibold" 
                  : "text-white/60 hover:text-white font-medium"
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-1.5 w-4 h-[2px] bg-white rounded-full"></span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
