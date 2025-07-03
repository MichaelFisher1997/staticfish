/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#0d4f4f',
        'coral-accent': '#ff6b6b',
        'neutral-dark-gray': '#374151', // Tailwind's gray-700
      },
      fontFamily: {
        // You can replace these with your chosen web fonts
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
