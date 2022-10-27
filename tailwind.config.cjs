/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "black": "#000000",
      "gray-200": "#f7f7f7",
      "tile-2": "#FF8B1F",
      "tile-4": "#FF740A",
      "tile-8": "#F55E00",
      "tile-16": "#EB3300",
      "tile-32": "#D10700",
      "tile-64": "#9E001D",
      "tile-128": "#940025",
      "tile-256": "#85002C",
      "tile-512": "#7A0037",
      "tile-1024": "#700045",
      "tile-2048": "#54164F",
      "tile-4096": "#382B58",
      "tile-8192": "#1C4162",
    },
    extend: {},
  },
  plugins: [],
  safelist: [{
    pattern: /bg-tile-(2|4|8|16|32|64|128|256|512|1024|2048|4096|8192)/,
  }],
}