import type { Config } from 'tailwindcss'

export default {
  content: [
    "./tokens/**/*.vue",
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./components/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

