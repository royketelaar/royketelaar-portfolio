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
    '@nuxt/hints',
    '@nuxtjs/i18n'
  ],

  i18n: {
    defaultLocale: 'nl',
    strategy: 'prefix_except_default',
    baseUrl: 'https://royketelaar.nl',
    locales: [
      { code: 'nl', language: 'nl-NL', name: 'Nederlands', file: 'nl.json' },
      { code: 'fy', language: 'fy-NL', name: 'Frysk', file: 'fy.json' },
      { code: 'en', language: 'en', name: 'English', file: 'en.json' }
    ],
    // The visitor picks the language; no redirect, no cookie (WCAG 3.2.5).
    detectBrowserLanguage: false
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
