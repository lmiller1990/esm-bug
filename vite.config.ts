import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

import { CypressEsm } from "@cypress/vite-plugin-cypress-esm";

export default defineConfig({
  plugins: [vue(), CypressEsm()],
});
