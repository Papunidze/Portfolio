import { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#B8390E",
          DEFAULT: "#DC4731",
          dark: "#3B0918",
        },
        secondary: {
          light: "#F9F9FB",
          DEFAULT: "#FFFFF5",
          dark: "#F1F1F1",
        },
        backgrounds: {
          primary: "#fff",
          secondary: "#fafafa",
        },
        typography: {
          primary: "rgb(23, 23, 23)",
          secondary: "rgb(102, 102, 102)",
        },
        border: {
          primary: "rgb(235, 235, 235)",
          secondary: "rgb(201, 201, 201)",
        },
      },
    },

    backgroundImage: {
      "gradient-1": "linear-gradient(to top left, #DC4731, #3B0918)",
      "gradient-2": "linear-gradient(to top left, #1B314D, #2C4669)",
      "gradient-3": "linear-gradient(to top left, #FEFBF5, #edf2fb)",
      "gradient-4": "linear-gradient(to top left, #d7e3fc, #FEFBF5)",
    },
  },
  plugins: [typography],
} satisfies Config;
