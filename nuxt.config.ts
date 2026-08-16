// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-10',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 5
  },
  nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-studio',
    '@nuxt/hints'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  icon: {
    // Inline SVGs at build time; no icon requests at runtime.
    mode: 'svg',
    clientBundle: {
      scan: true
    }
  },

  studio: {
    repository: {
      provider: 'github',
      owner: 'royketelaar',
      repo: 'royketelaar-portfolio',
      branch: 'master'
    }
  }
})
