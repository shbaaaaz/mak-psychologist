import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
}
export default config
