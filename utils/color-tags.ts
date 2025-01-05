export const colorTags: Array<{
  name: Capitalize<string>;
  value: string;
  hueCSSVar: `var(--colors-${string})`;
  disabled?: boolean;
}> = [
  {
    name: "Green",
    value: "green",
    hueCSSVar: "var(--colors-green)",
  },
  {
    name: "Yellow",
    value: "yellow",
    hueCSSVar: "var(--colors-yellow)",
    disabled: true,
  },
  {
    name: "Cyan",
    value: "cyan",
    hueCSSVar: "var(--colors-cyan)",
  },
  {
    name: "Navy",
    value: "navy",
    hueCSSVar: "var(--colors-navy)",
    disabled: true,
  },
  {
    name: "Red",
    value: "red",
    hueCSSVar: "var(--colors-red)",
    disabled: true,
  },
  {
    name: "Purple",
    value: "purple",
    hueCSSVar: "var(--colors-purple)",
  },
  {
    name: "Turqoise",
    value: "turqoise",
    hueCSSVar: "var(--colors-turqoise)",
  },
  {
    name: "Brown",
    value: "brown",
    hueCSSVar: "var(--colors-brown)",
  },
  {
    name: "Magenta",
    value: "magenta",
    hueCSSVar: "var(--colors-magenta)",
  },
  {
    name: "Blue",
    value: "blue",
    hueCSSVar: "var(--colors-blue)",
  },
  {
    name: "Navy Grey",
    value: "navy-grey",
    hueCSSVar: "var(--colors-navy-grey)",
  },
  {
    name: "Army Green",
    value: "army-green",
    hueCSSVar: "var(--colors-army-green)",
  },
  {
    name: "Pink",
    value: "pink",
    hueCSSVar: "var(--colors-pink)",
  },
  {
    name: "Gold",
    value: "gold",
    hueCSSVar: "var(--colors-gold)",
  },
  {
    name: "Orange",
    value: "orange",
    hueCSSVar: "var(--colors-orange)",
  },
];
