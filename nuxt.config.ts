export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@wagmi/vue/nuxt'
  ],
  // No direct use of shadcn property; configure it within the module.
  plugins: ["~/app/plugin/useWagmi", "~/app/plugin/useVueQuery"],
},)
