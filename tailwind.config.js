/** @type {import('tailwindcss').Config} */
import Settings from "./src/settings/settings.json";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...Settings.colors,
      },
    },
  },
  plugins: [],
};
