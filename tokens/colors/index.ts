import type { ThemeConfig } from "tailwindcss/types/config";

export const colors: ThemeConfig["colors"] = {
  beige: {
    100: "var(--colors-beige-100)",
    500: "var(--colors-beige-500)",
  },
  grey: {
    100: "var(--colors-grey-100)",
    300: "var(--colors-grey-300)",
    500: "var(--colors-grey-500)",
    900: "var(--colors-grey-900)",
  },
  green: "var(--colors-green)",
  yellow: "var(--colors-yellow)",
  cyan: "var(--colors-cyan)",
  navy: {
    DEFAULT: "var(--colors-navy)",
    grey: "var(--colors-navy-grey)",
  },
  red: "var(--colors-red)",
  purple: "var(--colors-purple)",
  pink: "var(--colors-pink)",
  turqoise: "var(--colors-turqoise)",
  brown: "var(--colors-brown)",
  magenta: "var(--colors-magenta)",
  blue: "var(--colors-blue)",
  "army-green": "var(--colors-army-green)",
  gold: "var(--colors-gold)",
  orange: "var(--colors-orange)",
  white: "var(--colors-white)",
};
