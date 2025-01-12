import type { Config } from "tailwindcss";
import { colors } from "./tokens/colors";
import { fontFamily, fontSize } from "./tokens/typography";
import { withTV } from "tailwind-variants/transformer";

export default withTV<Config>({
  content: [
    "./tokens/**/*.vue",
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./components/**/*.vue",
  ],
  theme: {
    colors,
    fontFamily,
    fontSize,
    extend: {
      screens: {
        "2xl": "1440px",
      },
      spacing: {
        500: "40px",
        400: "32px",
        300: "24px",
        250: "20px",
        200: "16px",
        150: "12px",
        100: "8px",
        50: "4px",
      },
    },
  },
  plugins: [],
});
