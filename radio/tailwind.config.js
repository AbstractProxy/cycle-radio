const plugin = require('tailwindcss/plugin')
const typographyPlugin = require('@tailwindcss/typography')
const defaultTheme = require('tailwindcss/defaultTheme')

const customVariants = plugin(({ addVariant, e }) => {
  // addVariant("neurofunk", ".neurofunk &");
  addVariant('neurofunk', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const element = e(`neurofunk${separator}${className}`)
      return `.neurofunk .${element}`
    })
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
      },
    },
  },
  plugins: [customVariants, require('tailwind-scrollbar')],
}
