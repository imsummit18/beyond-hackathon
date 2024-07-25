import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'rgba(163, 180, 249, 0.40)',
        backgroundSidebar: 'rgba(161, 161, 163, 0.10)',
        input: '#414145',
        ring: 'var(--ring)',
        background: '#EEE',
        gray: '#171D21',
        darkgray: '#0B202B',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#293772',
          lighter: '#6187FF', //TODO: light is already in use
          foreground: '#A3B4F9',
          normal: '#0232DE',
          light: '#F9CCC3',
          darker: '#B0442F',
          medium: '#4567F3',
          ultralight: '#A3B4F9',
          extralight: '#EEF1FF',
          500: "#1A2147"

        },
        secondary: {
          DEFAULT: '#F0B441',
          foreground: 'hsl(var(--secondary-foreground))',
          light: '#F9F1E1',
          ultralight: '#E7E9EA',
          500: "#CAA857"
        },
        
        green: {
          light: '#B3BABD',
          dark: '#081820',
          normal: "#0B7552"
        },
        table: {
          normal: '#07131A',
        },
        grey: {
          normal: '#414145',
          light: '#707073',
          dark: '#121217',
          logogrey: '#AAB1B0',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'h sl(var(--destructive-foreground))',
          500:"#901B1E"
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: '#414145',
          foreground: '#707073',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'rgba(161, 161, 163, 0.10)',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        wixMadeForText: ['--font-wixMadeForText'],
        arabicFont: ['--font-arabicFont'],
      },
      boxShadow: {
        input: '0px 3px 2px 0px rgba(0, 0, 0, 0.10) inset',
        sidebar: '4px 4px 6px 0px rgba(106, 40, 28, 0.20)',
        container: '0px 4px 15px 0px rgba(0, 0, 0, 0.25)',
        modal: '0px 10px 50px 0px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        xsm: '450px',
        laptop: '950px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
