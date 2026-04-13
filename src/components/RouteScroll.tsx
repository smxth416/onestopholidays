import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This runs exactly after React has completed unmounting the old page and mounting the new page.
    // Using a micro-timeout or just calling it directly ensures it attaches perfectly to the new render cycle.
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [pathname]);

  return null;
}
