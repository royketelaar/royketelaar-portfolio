<template>
  <main v-if="home" class="relative min-h-screen py-32">
    <LanguageSwitcher />
    <div
      class="fixed inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundPlaceholder})` }"
      aria-hidden="true"
    >
      <nuxt-picture
        src="/background.jpg"
        alt=""
        class="contents"
        :img-attrs="{ class: 'h-full w-full object-cover', fetchpriority: 'low' }"
        quality="50"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
        densities="x1"
        format="avif,webp"
        :preload="{ fetchPriority: 'low' }"
      />
    </div>
    <div
      v-if="home"
      class="relative mx-8 rounded-2xl bg-stone-50 bg-opacity-80 p-8 pt-48 text-stone-950 md:mx-16 md:px-16 md:pb-16 lg:pt-16 xl:mx-auto xl:max-w-4xl"
    >
      <nuxt-picture
        src="/avatar.jpg"
        :alt="t('portrait')"
        class="contents"
        :img-attrs="{
          class:
            'absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 transform rounded-full lg:left-auto lg:right-0 lg:top-0 lg:m-8 lg:h-64 lg:w-64 lg:transform-none',
          fetchpriority: 'high'
        }"
        quality="60"
        width="224"
        height="224"
        sizes="224px lg:256px"
        fit="cover"
        format="avif,webp"
        :preload="{ fetchPriority: 'high' }"
      />
      <content-renderer :value="home" class="custom-typography lg:w-2/3 lg:pr-4" />
      <div class="mt-12 flex flex-col items-start">
        <div class="flex items-center">
          <a
            href="mailto:info@royketelaar.nl"
            class="mr-4 rounded-lg bg-red-900 px-4 py-3 text-white transition-colors hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          >
            {{ t('contact') }}
          </a>
          <a
            href="https://github.com/royketelaar/"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="t('github')"
            class="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          >
            <icon name="uil:github" class="mx-2 size-8" aria-hidden="true" focusable="false" />
          </a>
          <a
            href="https://www.linkedin.com/in/roy-ketelaar-36821b6b/"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="t('linkedin')"
            class="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          >
            <icon
              name="entypo-social:linkedin"
              class="mx-2 size-8"
              aria-hidden="true"
              focusable="false"
            />
          </a>
        </div>
        <div class="mt-6 flex gap-4">
          <a
            href="/algemene-voorwaarden.pdf"
            hreflang="nl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-sm text-red-900 underline transition-colors hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          >
            {{ t('terms') }}
          </a>
          <a
            href="/privacy-verklaring.pdf"
            hreflang="nl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-sm text-red-900 underline transition-colors hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          >
            {{ t('privacy') }}
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const { locale, t } = useI18n()

const { data: home } = await useAsyncData(
  () => `home-${locale.value}`,
  () => queryCollection('content').path(`/${locale.value}`).first()
)

// 32px blurred WebP of /background.jpg, shown until the real image loads.
const backgroundPlaceholder =
  'data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAAAwBQCdASogABgAPu1qrlCppaQiqAqpMB2JQBdmcBAUohR64x54WmZtsAQInSkn9VPzMAD+ufmFQLs6OOav4TOua10bhS19/7bbD8otopgP69EQixqPYUQQAEYFZXU3161pBjNZRimWphWEII8yhQddd4JbMX1Y5ojkHNVANIila06sVpnDtmttE8FVEfkOiVBCZojAAAA='

useSeoMeta({
  title: () => home.value?.title,
  description: () => home.value?.description
})
</script>

<style lang="scss" scoped>
.custom-typography {
  :deep(h1) {
    @apply mb-1 text-center font-serif text-4xl font-black lg:text-left;
  }

  :deep(h2) {
    @apply mb-6 text-center text-xl lg:text-left;
  }

  :deep(h3) {
    @apply mb-1 mt-4 font-bold;
  }

  :deep(p) {
    @apply mb-4 text-stone-950;
  }

  :deep(ul) {
    @apply list-inside list-disc;
  }
}
</style>
