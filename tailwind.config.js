/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // MercadoCentral dark theme palette
        gold: {
          DEFAULT: '#F0A500',
          light: '#FFD060',
          dark: '#C98A00',
        },
        teal: {
          DEFAULT: '#00C9B1',
          light: '#33D7C4',
          dark: '#009B89',
        },
        ink: {
          DEFAULT: '#0A0E14',
          2: '#0F1520',
          card: '#141C28',
          card2: '#1B2540',
        },
        accent: {
          red: '#FF4D4D',
          green: '#22D07A',
          blue: '#3B8BFF',
          orange: '#FF7A30',
          purple: '#9B6DFF',
        },
        muted: '#7A8899',
        textmain: '#EDF0F4',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'ticker-scroll': 'tickerScroll 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        tickerScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
