import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // output folder for the build
    emptyOutDir: true, // clear the output folder before building
  },
  // Define the public folder correctly
  publicDir: "public", // specify that Vite should use the /public directory for static files
});
