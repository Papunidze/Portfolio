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
          primary: "rgb(6, 3, 24)",
          secondary: "rgb(102, 102, 102)",
        },
        border: {
          primary: "rgb(235, 235, 235)",
          secondary: "rgb(201, 201, 201)",
        },
        hover: {
          primary: "rgb(123, 113, 148)",
        },
      },
      fontFamily: {
        pacifico: ['"Pacifico"', "serif"],
      },
    },
  },
  plugins: [typography],
} satisfies Config;
