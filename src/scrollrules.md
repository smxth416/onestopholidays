# Complete Lenis Smooth Scroll Implementation Prompt

## Overview
Implement a production-ready Lenis smooth scroll system with React Router integration, featuring instant navigation on route changes, manual RAF loop control, and comprehensive scroll state management.

---

## 1. Dependencies Required

```json
{
  "dependencies": {
    "lenis": "^1.3.21",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1"
  }
}
```

Install with: `npm install lenis react-router-dom`

---

## 2. Core Provider Implementation

### File: `src/providers/SmoothScrollProvider.tsx`

**Requirements:**
- Create a React Context provider wrapping Lenis instance
- Implement manual RequestAnimationFrame loop with delta-based timing
- Expose real-time scroll metrics: `scroll`, `velocity`, `progress`, `direction`, `isScrolling`
- Provide control methods: `pause()`, `resume()`, `scrollTo()`, `lock()`, `unlock()`
- Use `useLayoutEffect` for client-side initialization (SSR-safe with isomorphic helper)
- Memoize context value to prevent unnecessary re-renders
- Clean up RAF loop and Lenis instance on unmount

**Lenis Configuration:**
```typescript
{
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Framer-like deceleration
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
  ...options // Allow override via props
}
```

**Key Implementation Details:**
- Store Lenis instance in both state (`lenis`) and ref (`lenisRef`) for stability
- Use `JSON.stringify(options)` to stabilize options dependency
- Attach scroll event listener: `lenisInstance.on("scroll", handleScroll)`
- Update `isScrolling` state when `Math.abs(velocity) > 0.1`
- `lock()` must: stop Lenis, add `lenis-stopped` class to body, set `overflow: hidden`
- `unlock()` must: start Lenis, remove `lenis-stopped` class, reset overflow

**RAF Loop Pattern:**
```typescript
const animate = useCallback((time: number) => {
  if (lenisRef.current) {
    lenisRef.current.raf(time);
  }
  requestRef.current = requestAnimationFrame(animate);
}, []);

// Start in useLayoutEffect
requestRef.current = requestAnimationFrame(animate);

// Cleanup
return () => {
  if (requestRef.current) cancelAnimationFrame(requestRef.current);
  lenisInstance.destroy();
};
```

---

## 3. Custom Hook

### File: `src/hooks/useSmoothScroll.ts`

**Requirements:**
- Export `useSmoothScroll()` hook that accesses `SmoothScrollContext`
- Throw error if used outside provider: `"useSmoothScroll must be used within a SmoothScrollProvider"`
- Return full context value with TypeScript types

**TypeScript Interface:**
```typescript
export interface SmoothScrollContextValue {
  lenis: Lenis | null;
  scroll: number;
  velocity: number;
  progress: number;
  isScrolling: boolean;
  direction: number;
  pause: () => void;
  resume: () => void;
  scrollTo: (target: string | HTMLElement | number, options?: Record<string, unknown>) => void;
  lock: () => void;
  unlock: () => void;
}
```

---

## 4. Router Integration - Instant Scroll on Navigation

### File: `src/components/ScrollToTop.tsx`

**Critical Behavior:**
- **MUST scroll to top IMMEDIATELY on route change** (no animation)
- Use `{ immediate: true }` option to bypass smooth scroll
- Fallback to native `window.scrollTo(0, 0)` if Lenis not ready
- Listen to `pathname` changes from `useLocation()`

**Implementation:**
```typescript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); // INSTANT scroll
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
};
```

**Why This Works:**
- `{ immediate: true }` bypasses Lenis animation, causing instant jump
- Executes BEFORE page content renders due to effect timing
- User sees new page already scrolled to top
- **This solves the "scroll continues but click redirects" requirement**

---

## 5. App Structure

### File: `src/App.tsx`

**Provider Hierarchy (CRITICAL ORDER):**
```tsx
<SmoothScrollProvider>
  <BrowserRouter>
    <ScrollToTop /> {/* Must be inside Router, outside Routes */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* ... other routes */}
    </Routes>
  </BrowserRouter>
</SmoothScrollProvider>
```

**Rules:**
- `SmoothScrollProvider` wraps entire app (outermost)
- `ScrollToTop` must be inside `BrowserRouter` but outside `Routes`
- All navigation links use React Router's `<Link>` component

---

## 6. CSS Styles

### File: `src/index.css`

**Required Lenis Classes:**
```css
/* Lenis smooth scrolling styles */
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
```

**Body Styles:**
```css
body {
  overflow-x: hidden; /* Prevent horizontal scroll */
  font-family: 'Your Font', sans-serif;
}
```

**Optional Page Transition:**
```css
.page-transition {
  animation: pageFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@keyframes pageFadeIn {
  from {
    opacity: 0;
    transform: scale(1.02);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
}
```

---

## 7. Navigation Component Pattern

### Example: `src/components/Navbar.tsx`

**Requirements:**
- Use `<Link>` from `react-router-dom` for all navigation
- Use `useLocation()` to detect active route
- Apply active styles based on `pathname` comparison
- **DO NOT** use `onClick` handlers for navigation (let React Router handle it)

**Pattern:**
```tsx
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav>
      <Link 
        to="/" 
        className={isActive("/") ? "active" : ""}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className={isActive("/about") ? "active" : ""}
      >
        About
      </Link>
    </nav>
  );
};
```

---

## 8. Advanced Usage Examples

### Programmatic Scrolling
```tsx
const { scrollTo } = useSmoothScroll();

// Scroll to element (smooth)
scrollTo("#section-id");

// Scroll to position (smooth)
scrollTo(500);

// Scroll with custom options
scrollTo("#target", { offset: -100, duration: 2 });

// Instant scroll
scrollTo(0, { immediate: true });
```

### Lock/Unlock Scroll (for modals)
```tsx
const { lock, unlock } = useSmoothScroll();

// Open modal
const openModal = () => {
  lock(); // Prevents scrolling
  setModalOpen(true);
};

// Close modal
const closeModal = () => {
  unlock(); // Re-enables scrolling
  setModalOpen(false);
};
```

### Access Scroll Data
```tsx
const { scroll, velocity, progress, isScrolling, direction } = useSmoothScroll();

// Use in effects or render
useEffect(() => {
  console.log("Current scroll position:", scroll);
  console.log("Scroll velocity:", velocity);
  console.log("Scroll progress (0-1):", progress);
  console.log("Is currently scrolling:", isScrolling);
  console.log("Direction (1=down, -1=up):", direction);
}, [scroll, velocity, progress, isScrolling, direction]);
```

---

## 9. Critical Behaviors Checklist

✅ **Smooth scrolling on wheel/touch input**
- Lenis handles this automatically with configured easing

✅ **Instant scroll to top on route change**
- `ScrollToTop` component with `{ immediate: true }`

✅ **Navigation interrupts ongoing scroll**
- React Router navigation triggers `pathname` change
- `useEffect` in `ScrollToTop` fires immediately
- `lenis.scrollTo(0, { immediate: true })` cancels current animation

✅ **No scroll jank or layout shift**
- Manual RAF loop ensures consistent frame timing
- `html.lenis { height: auto }` prevents height conflicts

✅ **Works with React Router navigation**
- All `<Link>` components work seamlessly
- Browser back/forward buttons trigger scroll reset

✅ **SSR-safe (if needed)**
- Isomorphic layout effect helper
- Null checks for `lenis` instance

✅ **Performance optimized**
- Memoized context value
- Ref-based RAF loop
- Throttled state updates (velocity > 0.1 threshold)

---

## 10. Common Pitfalls to Avoid

❌ **Don't use `<a href>` tags** - Use `<Link to>` instead
❌ **Don't call `window.scrollTo()` directly** - Use `lenis.scrollTo()`
❌ **Don't forget `{ immediate: true }` in ScrollToTop** - Navigation will feel sluggish
❌ **Don't place ScrollToTop outside BrowserRouter** - Won't have access to `useLocation()`
❌ **Don't forget to cleanup RAF loop** - Memory leak
❌ **Don't modify scroll-behavior in CSS** - Conflicts with Lenis

---

## 11. Testing Checklist

- [ ] Smooth scroll works on mouse wheel
- [ ] Smooth scroll works on trackpad
- [ ] Smooth scroll works on touch devices
- [ ] Clicking nav link instantly scrolls to top
- [ ] Clicking nav link during scroll interrupts animation
- [ ] Browser back button scrolls to top
- [ ] Browser forward button scrolls to top
- [ ] No console errors on mount/unmount
- [ ] No memory leaks (check DevTools Performance)
- [ ] Works on all target browsers

---

## 12. File Structure Summary

```
src/
├── providers/
│   └── SmoothScrollProvider.tsx  (Context + Lenis setup)
├── hooks/
│   └── useSmoothScroll.ts        (Hook to access context)
├── components/
│   ├── ScrollToTop.tsx           (Route change handler)
│   └── Navbar.tsx                (Example navigation)
├── App.tsx                       (Provider hierarchy)
└── index.css                     (Lenis CSS classes)
```

---

## 13. Final Implementation Notes

**This implementation guarantees:**
1. **Buttery smooth scrolling** with Framer-like easing
2. **Instant navigation** - clicks override ongoing scroll
3. **Zero layout shift** - proper height management
4. **Full React Router integration** - works with all navigation patterns
5. **Production-ready** - memoized, optimized, SSR-safe
6. **Extensible** - easy to add scroll-triggered animations

**The key to instant navigation:** The `{ immediate: true }` flag in `ScrollToTop` bypasses Lenis animation, causing an instant jump. This is triggered by React Router's `pathname` change, which fires before the new page renders. The user perceives instant navigation even if they were mid-scroll.

---

## 14. Copy-Paste Quick Start

1. Install: `npm install lenis react-router-dom`
2. Copy `SmoothScrollProvider.tsx` to `src/providers/`
3. Copy `useSmoothScroll.ts` to `src/hooks/`
4. Copy `ScrollToTop.tsx` to `src/components/`
5. Add Lenis CSS to `src/index.css`
6. Wrap app in `App.tsx` with correct hierarchy
7. Replace all `<a>` tags with `<Link>` components
8. Test navigation during scroll

**Done!** You now have production-grade smooth scrolling with instant navigation.
