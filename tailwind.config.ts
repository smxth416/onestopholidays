import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#000d74",
          foreground: "#ffffff",
          container: "#1e2a8a",
          "fixed": "#dfe0ff",
          "fixed-dim": "#bcc2ff",
        },
        secondary: {
          DEFAULT: "#006c4e",
          foreground: "#ffffff",
          container: "#83f5c6",
          "fixed": "#86f8c9",
          "fixed-dim": "#68dbae",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Material Design surface tokens
        surface: {
          DEFAULT: "#FFFFFF",
          dim: "#FFFFFF",
          bright: "#FFFFFF",
          "container-lowest": "#FFFFFF",
          "container-low": "#FFFFFF",
          "container": "#FFFFFF",
          "container-high": "#FFFFFF",
          "container-highest": "#FFFFFF",
          variant: "#FFFFFF",
        },
        "on-surface": {
          DEFAULT: "#1b1c1a",
          variant: "#454652",
        },
        "on-primary": {
          DEFAULT: "#ffffff",
          container: "#8c98fb",
          fixed: "#000a64",
          "fixed-variant": "#303c9b",
        },
        "on-secondary": {
          DEFAULT: "#ffffff",
          container: "#007151",
          fixed: "#002115",
          "fixed-variant": "#00513a",
        },
        tertiary: {
          DEFAULT: "#202220",
          container: "#363735",
          fixed: "#e3e2df",
          "fixed-dim": "#c7c7c3",
        },
        "on-tertiary": {
          DEFAULT: "#ffffff",
          container: "#a0a09d",
          fixed: "#1b1c1a",
          "fixed-variant": "#464744",
        },
        outline: {
          DEFAULT: "#767683",
          variant: "#c6c5d4",
        },
        "inverse-surface": "#2f312e",
        "inverse-on-surface": "#f2f1ed",
        "inverse-primary": "#bcc2ff",
        "surface-tint": "#4a55b4",
        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
        },
        "on-error": {
          DEFAULT: "#ffffff",
          container: "#93000a",
        },
        "on-background": "#1b1c1a",
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      fontFamily: {
        headline: ["Instrument Serif", "serif"],
        "serif-display": ["Instrument Serif", "serif"],
        body: ["Noto Serif", "serif"],
        label: ["Manrope", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        ping: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        "text-shine": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        fly: {
          "from": { transform: "translateY(0.1em)" },
          "to": { transform: "translateY(-0.1em)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "text-shine": "text-shine 5s linear infinite",
        fly: "fly 0.6s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
