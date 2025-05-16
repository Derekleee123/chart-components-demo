import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "@mui/material",
        "@mui/x-charts",
      ],
      output: {
        globals: {
          react: "React",
          "@mui/material": "@mui/material",
          "@mui/x-charts": "@mui/x-charts",
        },
      },
    },
  },
});
