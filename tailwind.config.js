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
      },
      boxShadow: {
        'elevated': 'var(--shadow-elevated)',
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