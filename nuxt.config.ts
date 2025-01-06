import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/tailwind.css"],

  typescript: {
    typeCheck: true,
    tsConfig: {
      include: ["env.d.ts"],
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-svgo",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: {
    dirs: [
      {
        path: "~/components/ui/fields",
        prefix: "Ui",
      },
      {
        path: "~/components",
        ignore: ["**/*.story.vue"],
      },
    ],
  },

  svgo: {
    global: false,
    componentPrefix: "icon",
  },

  supabase: {
    redirect: false,
  },
});
