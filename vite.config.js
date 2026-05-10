import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/momen-portfolio/",
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

      // Data & config (new locations)
      "@constants":     path.resolve(__dirname, "src/constants"),
      "@locales":       path.resolve(__dirname, "src/locales"),

      // Assets & styles
      "@assets":        path.resolve(__dirname, "src/assets"),
      "@styles":        path.resolve(__dirname, "src/styles"),

      // Legacy aliases → kept for backward compatibility during transition
      "@routes":        path.resolve(__dirname, "src/app/routes"),
      "@layouts":       path.resolve(__dirname, "src/app/layouts"),
      "@constant":      path.resolve(__dirname, "src/constants"),
    },
  },
});
