/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  important: true,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      fredoka: ["Fredoka"],
      fredokaOne: ["Fredoka One"],
    },
  },
  daisyui: {
    themes: [
      {
        kakebo: {
          primary: "#274873",

          secondary: "#2D2E40",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#2EA658",

          warning: "#F27B13",

          error: "#F20505",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
