import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          mathjs: ["mathjs"], // Add more chunks as needed
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed
  },
});
