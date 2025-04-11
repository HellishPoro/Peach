import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/base/variables" as *;`,
      },
    },
  },
});
