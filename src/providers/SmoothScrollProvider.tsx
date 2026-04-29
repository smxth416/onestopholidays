import React, { createContext, useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

export interface SmoothScrollContextValue {
  lenis: Lenis | null;
  scroll: number;
  velocity: number;
  progress: number;
  direction: number;
  isScrolling: boolean;
  pause: () => void;
  resume: () => void;
  scrollTo: (target: string | HTMLElement | number, options?: any) => void;
  lock: () => void;
  unlock: () => void;
}

export const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
  options?: any;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children, options }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const location = useLocation();
  
  // Real-time metrics
  const [scroll, setScroll] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Welfare Digital Config Standard
  const memoizedOptions = useMemo(() => ({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2, // Standard touch multiplier
    infinite: false,
    ...options
  }), [options]);

  // Route Handling: Force instant top on pathname change
  useEffect(() => {
    if (lenisRef.current) {
      // 1. Disable browser's native scroll restoration to prevent jumps
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      
      // 2. Kill all ongoing animations and momentum
      lenisRef.current.stop();
      
      // 3. Force absolute zero
      lenisRef.current.scrollTo(0, { 
        immediate: true,
        force: true // Force the scroll even if locked
      });

      // 4. Restart engine on the new page
      lenisRef.current.start();
    }
  }, [location.pathname]);

  useIsomorphicLayoutEffect(() => {
    const lenis = new Lenis(memoizedOptions);
    lenisRef.current = lenis;

    const handleScroll = (e: any) => {
      // Metric updates
      setScroll(e.scroll);
      setVelocity(e.velocity);
      setDirection(e.direction);
      setProgress(e.progress);
      setIsScrolling(Math.abs(e.velocity) > 0.1);
    };

    lenis.on('scroll', handleScroll);

    const animate = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [memoizedOptions]);

  const pause = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  const resume = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  const scrollTo = useCallback((target: string | HTMLElement | number, options?: any) => {
    lenisRef.current?.scrollTo(target, options);
  }, []);

  const lock = useCallback(() => {
    lenisRef.current?.stop();
    document.documentElement.classList.add('lenis-stopped');
    document.body.style.overflow = 'hidden';
  }, []);

  const unlock = useCallback(() => {
    lenisRef.current?.start();
    document.documentElement.classList.remove('lenis-stopped');
    document.body.style.overflow = '';
  }, []);

  const contextValue = useMemo(
    () => ({
      lenis: lenisRef.current,
      scroll,
      velocity,
      progress,
      direction,
      isScrolling,
      pause,
      resume,
      scrollTo,
      lock,
      unlock,
    }),
    [scroll, velocity, progress, direction, isScrolling, pause, resume, scrollTo, lock, unlock]
  );

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
