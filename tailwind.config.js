/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#7bbde0",
          secondary: "#e5ccff",
          accent: "#ee74f2",
          neutral: "#221D34",
          "base-100": "#FFFFFF",
          info: "#4EBDDF",
          success: "#2FD0AA",
          warning: "#F1AB27",
          error: "#F7222C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
