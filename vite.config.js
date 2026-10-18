import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ramyajulian/",
  server: {
    host: true,
    port: 5174,
    allowedHosts: true,
  },
});
