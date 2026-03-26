import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FDF2F2',
          100: '#FCE8E8',
          200: '#FDEDED',
          300: '#F8E0E0',
          400: '#F2CECE',
          500: '#E8ADAD',
        },
        charcoal: {
          700: '#3D3D3D',
          800: '#2D2D2D',
          900: '#1A1A1A',
        },
        roseGold: '#C8A89A',
        roseGoldLight: '#E8D5CE',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
