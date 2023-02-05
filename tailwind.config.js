/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        "blog-black-700": "#2B2B2B",
        "blog-blue-200": "#3096F5",
        "blog-blue-100": "#32BBF6",
        "blog-blue-300": "#29579C",
        "blog-grey-200": "#A9A8A8",
        "blog-grey-100": "#B6B5B5",
        "blog-grey-300": "#616161",
        "blog-primary": "#0D5BD3",
        "blog-secondary": "#07B2FA",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
