import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/momen-portfolio/",
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets/index.js"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
