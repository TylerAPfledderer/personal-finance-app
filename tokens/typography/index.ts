import type { ThemeConfig } from "tailwindcss/types/config";

export const fontFamily: ThemeConfig["fontFamily"] = {
  body: "'Public Sans', sans-serif",
};

export const fontSize: ThemeConfig["fontSize"] = {
  "preset-1": [
    "2rem",
    {
      lineHeight: "120%",
      fontWeight: "bold",
    },
  ],
  "preset-2": [
    "1.25rem",
    {
      lineHeight: "120%",
      fontWeight: "bold",
    },
  ],
  "preset-3": [
    "1rem",
    {
      lineHeight: "150%",
      fontWeight: "bold",
    },
  ],
  "preset-4": [
    "0.875rem",
    {
      lineHeight: "150%",
      fontWeight: "400",
    },
  ],
  "preset-4-bold": [
    "0.875rem",
    {
      lineHeight: "150%",
      fontWeight: "bold",
    },
  ],
  "preset-5": [
    "0.75rem",
    {
      lineHeight: "150%",
      fontWeight: "400",
    },
  ],
  "preset-5-bold": [
    "0.75rem",
    {
      lineHeight: "150%",
      fontWeight: "bold",
    },
  ],
};
