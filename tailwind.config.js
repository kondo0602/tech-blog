/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e2e8f0", // slate-200
        secondary: "#94a3b8", // slate-400
        backgroundPale: "#1e293b", // slate-700
        backgroundBase: "#020617", // slate-950
        accent: "#f59e0b", // yellow-500
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
