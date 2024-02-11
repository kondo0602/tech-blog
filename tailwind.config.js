/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
	theme: {
		extend: {
      colors: {
	  			primary: "#e2e8f0", // slate-200
	  			secondary: "#64748b", // slate-500
					background: "#020617" // slate-950
      },
    },
	},
	plugins: [],
};
