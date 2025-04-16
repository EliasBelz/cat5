import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        mar: 'var(--font-markazi)',
        out: 'var(--font-outfit)',
        pet: 'var(--font-petrona)',
        aleo: 'var(--font-aleo)',
        any: 'var(--font-anybody)',
        monoton: 'var(--font-monoton)',
        goldman: 'var(--font-goldman)',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, var(--foreground) 0%, #000000 100%)',
      },
      animation: {
        shine: 'shine 10s infinite linear',
        pause: 'pause 3s infinite linear',
        pulseTitle: 'pulseTitle 3s infinite ease-in-out',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pause: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        pulseTitle: {
          '0%, 100%': { transform: 'scale(1.05)', opacity: '1' },
          '50%': { transform: 'scale(1.0)', opacity: '0.95' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
