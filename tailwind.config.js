/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "title-primary": "var(--text-title-primary)",
        "title-secondary": "var(--text-title-secondary)",

        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",

        "bg-theme": "var(--bg-primary)",
        "bg-primary": "var(--bg-primary)",

        // "bg-secondary-light": rgb(212, 212, 212),
        // "bg-secondary-dark": rgb(34, 34, 34),

        "bg-secondary": 'var(--bg-secondary)',
        "bg-third": 'var(--bg-third)'

      },
    },
  },
  plugins: [require("daisyui")],
}

