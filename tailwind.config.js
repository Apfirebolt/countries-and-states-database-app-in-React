module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light': '#F6F4F0',
        'primary': '#D7BE79',
        'secondary': '#4DA1A9',
        'dark': '#2E5077',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}