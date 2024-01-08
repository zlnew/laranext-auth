import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#60a5fa',
          light: '#93c5fd',
          dark: '#2563eb'
        },
        fade: {
          DEFAULT: '#18181b',
          light: '#737373',
          dark: '#0a0a0a'
        },
        dark: '#0a0a0a',
        danger: '#f87171',
        success: '#4ade80'
      }
    }
  },
  plugins: [],
}
export default config
