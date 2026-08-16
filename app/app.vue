<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
// Per-locale <html lang>, hreflang alternates and og:locale.
const head = useLocaleHead()

useHead(() => ({
  title: t('meta.title'),
  htmlAttrs: { lang: head.value.htmlAttrs?.lang },
  // Close to the average colour of /background.jpg, so there is no white flash.
  bodyAttrs: { class: 'bg-slate-500' },
  meta: [{ name: 'description', content: t('meta.description') }, ...(head.value.meta ?? [])],
  link: [
    ...(head.value.link ?? []),
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
  ]
}))
</script>
