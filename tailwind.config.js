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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
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
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      borderRadius: {
        'pill': '9999px',
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