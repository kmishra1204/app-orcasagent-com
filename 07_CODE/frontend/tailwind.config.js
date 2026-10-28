/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: {
          light: '#0F1D2E',
          dark: '#E8EDF4',
        },
        brass: {
          light: '#9A6410',
          dark: '#E2A64A',
        },
        teal: {
          light: '#0D7A72',
          dark: '#3CC4B8',
        },
        rose: {
          light: '#B4235A',
          dark: '#F06C9B',
        },
        paper: {
          light: '#F2F4F7',
          dark: '#0B1420',
        },
        line: {
          light: '#D9DFE7',
          dark: '#24344A',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-brass': 'pulseBrass 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseBrass: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(154, 100, 16, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(154, 100, 16, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
