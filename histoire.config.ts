import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import { HstNuxt } from "@histoire/plugin-nuxt";

export default defineConfig({
  plugins: [HstVue(), HstNuxt()],
  setupFile: "/utils/histoire-setup.ts",
  storyMatch: ["**/*.story.vue"],
  vite: {
    publicDir: "./public",
  },
});
