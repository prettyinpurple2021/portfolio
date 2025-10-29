const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // add more paths here if needed (for example, "./components/**/*.{js,ts,jsx,tsx}")
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7f13ec",
        "background-light": "#f7f6f8",
        "background-dark": "#191022",
        'brand-pink': 'var(--color-brand-pink)',
        'brand-pink-2': 'var(--color-brand-pink-2)', 
        'brand-purple': 'var(--color-brand-purple)',
        'brand-teal': 'var(--color-brand-teal)',
        'brand-black': 'var(--color-brand-black)',
        'brand-gray': 'var(--color-brand-gray)',
        'brand-muted': 'var(--color-brand-muted)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
        orbitron: ['var(--font-orbitron)', ...defaultTheme.fontFamily.sans],
        playfair: ['var(--font-playfair)', ...defaultTheme.fontFamily.serif],
        montserrat: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
        "display": ["var(--font-spline-sans)", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'elevated': 'var(--shadow-elevated)',
        'holographic': '0 0 20px rgba(192, 132, 252, 0.3), 0 0 40px rgba(20, 184, 166, 0.2)',
        'glow-purple': '0 0 20px rgba(192, 132, 252, 0.4)',
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.4)',
      },
      backgroundImage: {
        'holographic-gradient': 'linear-gradient(135deg, #ffd6f0 0%, #e8d5ff 50%, #dae9ff 100%)',
        'sparkle-gradient': 'linear-gradient(45deg, #c084fc 0%, #ec4899 25%, #14b8a6 50%, #8b5cf6 75%, #c084fc 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 3s infinite',
        'gradient-animation': 'gradient-animation 4s ease-in-out infinite',
        'holographic-bg': 'holographic-bg 4s linear infinite',
        'holo-border-anim': 'holo-border-anim 3s linear infinite',
        'background-pan': 'background-pan 10s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-150%) translateY(-150%) rotate(45deg)' },
          '100%': { transform: 'translateX(150%) translateY(150%) rotate(45deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': {
              opacity: '0.2',
              transform: 'scale(0.5) rotate(0deg)',
          },
          '50%': {
              opacity: '1',
              transform: 'scale(1.5) rotate(180deg)',
          },
        },
        'gradient-animation': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'holographic-bg': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'holo-border-anim': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '200% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'background-pan': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      borderRadius: {
        'pill': '9999px',
        "lg": "1rem",
        "xl": "1.5rem",
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [require('daisyui')],
}