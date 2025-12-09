<template>
  <main v-if="home" class="min-h-screen py-32">
    <nuxt-img
      src="/background.jpg"
      alt=""
      class="fixed inset-0 h-screen w-screen object-cover"
      quality="85"
      sizes="100vw sm:100vw md:100vw"
      format="webp"
    />
    <div
      v-if="home"
      class="relative mx-8 rounded-2xl bg-stone-50 bg-opacity-80 p-8 pt-48 text-stone-950 md:mx-16 md:px-16 md:pb-16 lg:pt-16 xl:mx-auto xl:max-w-4xl"
    >
      <nuxt-img
        src="/avatar.jpg"
        alt=""
        class="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 transform rounded-full lg:left-auto lg:right-0 lg:top-0 lg:m-8 lg:h-64 lg:w-64 lg:transform-none"
        quality="85"
        width="224"
        height="224"
        fit="cover"
        format="webp"
      />
      <content-renderer
        :value="home"
        class="custom-typography lg:w-2/3 lg:pr-4"
      />
      <div class="mt-12 flex flex-col items-start">
        <div class="flex items-center">
          <a
            href="mailto:info@royketelaar.nl"
            class="mr-4 rounded-lg bg-red-900 px-4 py-3 text-white"
          >
            Get in touch!
          </a>
          <a
            href="https://github.com/royketelaar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <icon
              name="uil:github"
              class="mx-2 size-8"
              aria-hidden="true"
              focusable="false"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/roy-ketelaar-36821b6b/"
            target="_blank"
            rel="noopener noreferrer"
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
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Algemene Voorwaarden (PDF)"
            class="text-red-900 underline transition-colors hover:text-red-700"
          >
            Algemene Voorwaarden
          </a>
          <a
            href="/privacy-verklaring.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Privacy Verklaring (PDF)"
            class="text-red-900 underline transition-colors hover:text-red-700"
          >
            Privacy Verklaring
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const { data: home } = await useAsyncData(() =>
  queryCollection('content').path('/').first()
)

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
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
