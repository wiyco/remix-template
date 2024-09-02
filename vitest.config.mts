/** @see {@link https://vitejs.dev/guide/api-javascript#mergeconfig} */
import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";

import viteConfig from "./vite.config.mjs";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      include: [
        "test/**/*.test.{js,ts,jsx,tsx}",
        "app/**/*.test.{js,ts,jsx,tsx}",
      ],
      globals: true,
    },
  })
);
