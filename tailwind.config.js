/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { cat: ["Lora", "serif"] },
    extend: {},
  },
  plugins: [
    require("@catppuccin/tailwindcss")({ defaultFlavour: "mocha" }),
    require("@tailwindcss/forms"),
  ],
}
