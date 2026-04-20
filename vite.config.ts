import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const port = Number(process.env.PORT) || 5173;

export default defineConfig({
  // 👇 CLAVE para GitHub Pages (cambiar si tu repo tiene otro nombre)
  base: "/MundoJurasico/",

  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },

  root: path.resolve(__dirname),

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
},

  server: {
    port,
    host: true,
    fs: {
      strict: false,
    },
  },

  preview: {
    port,
    host: true,
  },
});