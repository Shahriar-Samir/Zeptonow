
import daisyui from 'daisyui'

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
        font1: ["font1"],
        font2: ["font2"],
        font3: ["font3"],
        font4: ["font4"],
        font5: ["font5"],
      },
    },
  },
  plugins: [daisyui],
  daisyui:{
    themes:['light']
  }
}

export default styleExports;