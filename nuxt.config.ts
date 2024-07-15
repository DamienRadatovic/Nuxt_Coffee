// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@pinia/nuxt',],
  css: ['~/assets/scss/main.scss'],
  typescript: {
    typeCheck: true,
    strict: false,
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})