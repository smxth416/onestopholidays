import React, { createContext, useRef, useState, useMemo, useCallback } from 'react';
import Lenis from 'lenis';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

interface ScrollData {
  scroll: number;
  velocity: number;
  direction: number;
  progress: number;
}

interface SmoothScrollContextValue {
  scrollData: ScrollData;
  scrollTo: (target: number | string | HTMLElement, options?: { offset?: number; duration?: number }) => void;
  lock: () => void;
  unlock: () => void;
  pause: () => void;
  resume: () => void;
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  
  const [scrollData, setScrollData] = useState<ScrollData>({
    scroll: 0,
    velocity: 0,
    direction: 0,
    progress: 0,
  });

  useIsomorphicLayoutEffect(() => {
    // Initialize Lenis with premium settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing for liquid feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Listen to scroll events
    lenis.on('scroll', (e: any) => {
      setScrollData({
        scroll: e.scroll,
        velocity: e.velocity,
        direction: e.direction,
        progress: e.progress,
      });
    });

    // Manual RAF loop for 100% sync with frame budget
    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Control methods
  const scrollTo = useCallback((target: number | string | HTMLElement, options?: { offset?: number; duration?: number }) => {
    lenisRef.current?.scrollTo(target, options);
  }, []);

  const lock = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  const unlock = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  const pause = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  const resume = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      scrollData,
      scrollTo,
      lock,
      unlock,
      pause,
      resume,
      lenis: lenisRef.current,
    }),
    [scrollData, scrollTo, lock, unlock, pause, resume]
  );

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = () => {
  const context = React.useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within SmoothScrollProvider');
  }
  return context;
};
