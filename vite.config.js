import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // Served from the domain root on Vercel. Deep-link refreshes are handled by
  // the SPA rewrite in vercel.json, not by a static 404 fallback.
  base: "/",
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      // Root
      "@": path.resolve(__dirname, "src"),

      // App layer
      "@app":           path.resolve(__dirname, "src/app"),

      // Design system
      "@design-system": path.resolve(__dirname, "src/design-system"),

      // Feature areas
      "@components":    path.resolve(__dirname, "src/components"),
      "@pages":         path.resolve(__dirname, "src/pages"),
      "@hooks":         path.resolve(__dirname, "src/hooks"),

      // Data & config
      "@constants":     path.resolve(__dirname, "src/constants"),
      "@locales":       path.resolve(__dirname, "src/locales"),

      // Assets & styles
      "@assets":        path.resolve(__dirname, "src/assets"),
      "@styles":        path.resolve(__dirname, "src/styles"),
    },
  },
});
