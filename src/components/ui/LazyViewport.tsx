import React, { useState, useEffect, useRef } from "react";

interface LazyViewportProps {
  children: React.ReactNode;
  minHeight?: string;
  className?: string;
}

/**
 * High-performance deferred rendering component.
 * Ensures zero layout shifts via minHeight and implements
 * an IntersectionObserver with a 200px threshold.
 */
export const LazyViewport: React.FC<LazyViewportProps> = ({ 
  children, 
  minHeight = "300px",
  className = "" 
}) => {
  const [hasHydrated, setHasHydrated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasHydrated(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full ${className}`}
      style={{ minHeight: !hasHydrated ? minHeight : "auto" }}
    >
      {hasHydrated ? (
        children
      ) : (
        /* Fallback Shimmer Container */
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-900/5 to-zinc-900/10 animate-pulse rounded-[32px]" 
        />
      )}
    </div>
  );
};
