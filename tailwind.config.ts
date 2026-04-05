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
        'brand-secondary': '#da5389', // Warm pink
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
        'warning': '#e97f33', // Warm orange
        'error': '#d97077', // Soft red
        'info': '#a3caf1', // Soft blue

        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring))",
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive))",
          foreground: "rgb(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "rgb(var(--muted))",
          foreground: "rgb(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent))",
          foreground: "rgb(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "rgb(var(--popover))",
          foreground: "rgb(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "rgb(var(--card))",
          foreground: "rgb(var(--card-foreground))",
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
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config
