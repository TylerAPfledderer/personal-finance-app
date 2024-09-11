import type { Config } from "tailwindcss";
import { colors } from "./tokens/colors";
import { fontFamily, fontSize } from "./tokens/typography";

export default {
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
  },
  plugins: [],
} satisfies Config;
