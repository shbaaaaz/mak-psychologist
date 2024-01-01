import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        flip: 'flip 2s ease-in-out infinite'
      },
      keyframes: {
        flip: {
          '0%': {transform: 'rotateY(0)'},
          '100%': {transform: 'rotateY(360deg)'}
        }
      }
    },
  },
  plugins: [],
}
export default config
