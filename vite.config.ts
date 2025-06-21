import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/sun-nxt-clone/",
  build: {
    outDir: "dist",
    assetsDir: "assets", // Ensure assets are properly placed
    minify: "esbuild",
    sourcemap: true,
  },
});
