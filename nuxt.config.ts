// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-studio'
  ],

  studio: {
    route: '/admin',
    repository: {
      provider: 'github',
      owner: 'royketelaar',
      repo: 'royketelaar-portfolio',
      branch: 'master'
    }
  }
})
