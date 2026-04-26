import { useEffect, useLayoutEffect } from 'react';

// SSR-safe layout effect that prevents hydration warnings
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
