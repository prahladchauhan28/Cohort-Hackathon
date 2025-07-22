import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


export default defineConfig(() => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./client"),
      "@shared": path.resolve(process.cwd(), "./shared"),
    },
  },
}));