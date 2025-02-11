import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import ssr from "vite-plugin-ssr/plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), solid(), ssr()],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ["solid-js"],
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
  },
});
