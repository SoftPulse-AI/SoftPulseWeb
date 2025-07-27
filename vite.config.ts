import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react-swc";
import path from 'path';

export default defineConfig({
  base: '/', // Use '/' for root deployment or when using a custom domain
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
