// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "@pinia/nuxt",
  ],
  ui: {
    icons: ["mingcute"],
  },
  css: ["~/assets/css/global.css"],
  routeRules: {
    "/": { prerender: true },
    "/upload": { ssr: false },
    "/photos": { ssr: false },
    "/settings": { ssr: false },
  },
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
        name: "English",
      },
      {
        code: "zh",
        iso: "zh-CN",
        file: "zh.json",
        name: "简体中文",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "en",
      alwaysRedirect: false,
      redirectOn: "root",
    },
    skipSettingLocaleOnNavigate: true,
  },
  experimental: {
    viewTransition: true,
  },
});
