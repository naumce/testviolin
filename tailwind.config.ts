import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0F1419',
          light: '#1A2530',
          dark: '#2D1B2E',
        },
        ivory: {
          DEFAULT: '#FAF8F5',
          light: '#FFFFFF',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#DDB956',
          dark: '#C19B2B',
        },
        'warm-neutral': '#4A4A48',
        burgundy: '#8B4049',
        teal: '#5B8A8F',
      },
    },
  },
} satisfies Config;
