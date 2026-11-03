import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Apex custom domain on GitHub Pages — always serve from root.
  base: "/",
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, "index.html"),
        about: resolve(rootDir, "about.html"),
        privacy: resolve(rootDir, "privacy.html"),
        terms: resolve(rootDir, "terms.html"),
      },
    },
  },
});
