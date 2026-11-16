import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-12-10',
  devtools: { enabled: false },

  css: [
    '@fontsource/atkinson-hyperlegible/400.css',
    '@fontsource/atkinson-hyperlegible/700.css',
    '@fontsource/fraunces/600.css',
    '@fontsource/fraunces/600-italic.css',
    '~/assets/css/main.css'
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  modules: ['@nuxt/eslint', '@nuxtjs/color-mode', '@nuxtjs/i18n'],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    storageKey: 'theme',
    dataValue: 'theme'
  },

  i18n: {
    defaultLocale: 'nl',
    strategy: 'prefix_except_default',
    baseUrl: 'https://royketelaar.nl',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: false,
    customRoutes: 'config',
    locales: [
      { code: 'nl', language: 'nl-NL', name: 'Nederlands' },
      { code: 'fy', language: 'fy-NL', name: 'Frysk' },
      { code: 'en', language: 'en', name: 'English' }
    ],
    pages: {
      projecten: {
        en: '/projects',
        fy: '/projekten'
      },
      over: {
        en: '/about',
        fy: '/oer'
      },
      lab: {
        en: '/lab',
        fy: '/lab'
      },
      contact: {
        en: '/contact',
        fy: '/kontakt'
      }
    }
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        { name: 'theme-color', content: '#f3efe4', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#12140e', media: '(prefers-color-scheme: dark)' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },

  nitro: {
    prerender: {
      routes: ['/', '/sitemap.xml'],
      crawlLinks: true
    }
  },

  typescript: {
    strict: true
  }
})
