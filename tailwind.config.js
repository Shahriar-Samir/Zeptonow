import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
const styleExports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        poppins: ["var(--font-poppins)"],
        font1: ["font1","sans-serif"],
        font1: ["font2","sans-serif"],
        font1: ["font3","sans-serif"],
        font1: ["font4","sans-serif"],
        font1: ["font5","sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

export default styleExports;