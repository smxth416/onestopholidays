import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const OptimizedImage = ({ src, alt, className = "", containerClassName = "" }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden bg-zinc-100 ${containerClassName}`}
      style={{ contain: 'paint' }}
    >
      {/* Skeleton / Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-secondary/20 border-t-secondary rounded-full animate-spin" />
          {/* Subtle shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.2,0,0,1)] transform-gpu will-change-[transform,opacity] ${
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.02] blur-xl"
        } ${className}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
