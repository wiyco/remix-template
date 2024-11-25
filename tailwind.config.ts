import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "1/1": "1 / 1",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "19/10": "19 / 10",
        "3/4": "3 / 4",
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
