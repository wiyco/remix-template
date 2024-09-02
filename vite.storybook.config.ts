import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Using Storybook with Remix / avoid the following error:
 * Error: The Remix Vite plugin requires the use of a Vite config file
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  process.env = { ...process.env, ...env };
  return {
    plugins: [tsconfigPaths()],
  };
});
