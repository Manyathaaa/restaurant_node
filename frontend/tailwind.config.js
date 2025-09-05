/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef7ee",
          100: "#fdedd3",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
        border: "#e5e7eb", // custom border color
        background: "#f9fafb", // light background
        foreground: "#1f2937", // dark text color
      },
    },
  },
  plugins: [],
};
