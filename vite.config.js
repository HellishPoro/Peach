import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/base/variables";`,
      },
    },
  },
});
