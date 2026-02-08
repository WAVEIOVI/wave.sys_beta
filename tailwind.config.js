/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          danger: {
            500: '#EF4444',
            600: '#DC2626',
            700: '#B91C1C',
          },
          accent: {
            cyan: '#06B6D4',
            amber: '#F59E0B',
          },
          steel: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
          },
          'cosmic-latte': '#FFF8E7',
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
          arabic: ['Cairo', 'Tajawal', 'ui-sans-serif'],
          azonix: ['Azonix', 'ui-sans-serif'], 
        },
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'spin-slow': 'spin 3s linear infinite',
        },
      },
    },
    plugins: [],
  }
