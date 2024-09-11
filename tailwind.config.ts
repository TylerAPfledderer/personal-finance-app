import type { Config } from "tailwindcss";
import { colors } from "./tokens/colors";

export default {
  content: [
    "./tokens/**/*.vue",
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./components/**/*.vue",
  ],
  theme: {
    colors,
  },
  plugins: [],
} satisfies Config;
