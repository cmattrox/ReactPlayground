module.exports = {
  purge: ['./src/**/*.{js,jsx.ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        lightest: '#D1D5DB',
        lighter: '#4F71B5',
        light: '##3E5A93',
        DEFAULT: '#3E5A93',
        dark: '#2F446F',
        darker: '#202E4B',
        darkest: '#111827',
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      divideStyle: ['hover', 'focus'],
    },
  },
  plugins: [],
}
