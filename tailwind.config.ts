import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cobalt and cream direction adopted from the supplied PawBite reference.
        cream: '#F8F0E3',
        'cream-2': '#EFE3D1',
        forest: '#293DA6',
        'forest-deep': '#1F2C7C',
        'forest-mid': '#3449AF',
        terracotta: '#CC7959',
        'terracotta-dark': '#A74F2F',
        warmyellow: '#F5D778',
        pinky: '#EDBDAA',
        mint: '#C9D8B9',
        offwhite: '#FAFAFA',
        charcoal: '#2A2A2A',
        'cream-muted': '#D4CFC4',
      },
      borderRadius: {
        pill: '9999px',
      },
      boxShadow: {
        // Stacked drop shadow used on bouncy CTAs (Design 8 hybrid)
        stack: '0 8px 0 -2px #293DA6',
        'stack-sm': '0 4px 0 -2px #293DA6',
        soft: '0 12px 32px -8px rgba(41, 61, 166, 0.18)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;
