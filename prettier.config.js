/** @type {import("prettier").Config} */
const config = {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss'
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tailwindConfig: './tailwind.config.js',
  tailwindFunctions: ['clsx'],
}

export default config;
