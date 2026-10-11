/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          deep: '#0A0E27',
          surface: '#111936',
          border: 'rgba(255, 255, 255, 0.12)',
          glass: 'rgba(255, 255, 255, 0.06)'
        },
        emergency: '#FF3B5C',
        warning: '#FF8C42',
        alert: '#FFD23F',
        safe: '#00D9A3',
        info: '#4DA8FF',
        ai: '#B388FF'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-breathe': 'glowBreathe 2.5s infinite alternate',
      },
      keyframes: {
        glowBreathe: {
          '0%': { boxShadow: '0 0 10px rgba(255, 59, 92, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(255, 59, 92, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
