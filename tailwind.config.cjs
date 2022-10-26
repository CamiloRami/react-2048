/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "grey": "#f5f5f5",
      "tile-2": "#E9FF70",
      "tile-4": "#FFD670",
      "tile-8": "#FFA670",
      "tile-16": "#FF7070",
      "tile-32": "#FF70D6",
      "tile-64": "#7070FF",
      "tile-128": "#70FFD6",
      "tile-256": "#70FF70",
      "tile-512": "#0F4C5C",
      "tile-1024": "#E36414",
      "tile-2048": "#FB8B24",
      "tile-4096": "#9A031E",
      "tile-8192": "#5F0F40",
    },
    extend: {},
  },
  plugins: [],
}