import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
