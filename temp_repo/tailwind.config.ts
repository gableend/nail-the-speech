import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
        // --- The Knot Inspired Brand Colors ---
        'brand-primary': '#e84f98', // The Knot's signature pink
        'brand-secondary': '#f6ac0a', // Warm gold/amber
        'brand-accent': '#a3caf1', // Soft blue accent
        'brand-sage': '#618f7f', // Sage green
        'brand-blush': '#e1a1d2', // Soft pink

        // --- Light Mode Palette (The Knot Style) ---
        'light': {
          'bg': '#fbf7f4', // Warm cream background
          'bg-subtle': '#f8f4f0', // Slightly warmer cream
          'bg-muted': '#f0ebe6', // Warm muted background
          'text-primary': '#11110f', // Very dark brown/black
          'text-secondary': '#8a847c', // Muted brown
          'text-muted': '#cfcac1', // Light brown
          'border': '#e8e1d8', // Warm border
          'border-muted': '#f0ebe6', // Very light warm border
        },

        // --- Dark Mode Palette (Sophisticated Dark) ---
        'dark': {
          'bg': '#1a1614', // Dark warm background
          'bg-subtle': '#2a241f', // Dark warm slate
          'bg-muted': '#3a342c', // Medium warm slate
          'text-primary': '#fbf7f4', // Warm light text
          'text-secondary': '#cfcac1', // Light warm text
          'text-muted': '#8a847c', // Medium warm text
          'border': '#3a342c', // Dark warm border
          'border-muted': '#2a241f', // Darker warm border
        },

        // --- Functional Colors (Wedding Theme) ---
        'success': '#618f7f', // Sage green
        'warning': '#f6ac0a', // Gold
        'error': '#d97077', // Soft red
        'info': '#a3caf1', // Soft blue

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config
