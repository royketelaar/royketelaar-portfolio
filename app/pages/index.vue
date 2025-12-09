<template>
  <main v-if="home" class="h-screen">
    <nuxt-img
      src="/background.jpg"
      alt="Background"
      class="background-image"
      quality="80"
      format="webp"
    />
    <div v-if="home" class="content">
      <nuxt-img src="/avatar.jpg" alt="Avatar" class="avatar" />
      <content-renderer :value="home" class="text-content" />
      <div class="actions">
        <div class="main-actions">
          <a href="mailto:info@royketelaar.nl">
            <button class="button" type="button">Get in touch!</button>
          </a>
          <a
            href="https://github.com/royketelaar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <icon
              name="uil:github"
              class="icon"
              aria-hidden="true"
              focusable="false"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/roy-ketelaar-36821b6b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <icon
              name="entypo-social:linkedin"
              class="icon"
              aria-hidden="true"
              focusable="false"
            />
          </a>
        </div>
        <div class="legal-links">
          <a
            href="/algemene-voorwaarden.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Algemene Voorwaarden (PDF)"
            class="link"
          >
            Algemene Voorwaarden
          </a>
          <a
            href="/privacy-verklaring.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Privacy Verklaring (PDF)"
            class="link"
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

<style lang="scss">
.background-image {
  @apply fixed w-screen h-screen object-cover;
}

.content {
  @apply relative top-32 rounded-2xl text-stone-950 bg-stone-50 bg-opacity-80 p-8 pt-48 mx-8 mb-64 md:px-16 md:pb-16 md:mx-16 lg:pt-16 xl:max-w-4xl xl:mx-auto;
}

.text-content {
  @apply lg:w-2/3 lg:pr-4;
}

.avatar {
  @apply absolute rounded-full w-56 h-56 transform -translate-x-1/2 -top-16 left-1/2 lg:top-0 lg:left-auto lg:right-0 lg:transform-none lg:w-64 lg:h-64 lg:m-8;
}

h1 {
  @apply font-black text-4xl text-center mb-1 lg:text-left font-serif;
}

h2 {
  @apply text-xl text-center mb-6 lg:text-left;
}

h3 {
  @apply font-bold mt-4 mb-1;
}

p {
  @apply text-stone-950 mb-4;
}

ul {
  @apply list-disc list-inside;
}

.actions {
  @apply flex flex-col items-start mt-12;
}

.main-actions {
  @apply flex items-center;
}

.button {
  @apply bg-red-900 text-white py-2 px-4 rounded-lg mr-4;
}

.icon {
  @apply mx-2 w-6 h-6;
}

.legal-links {
  @apply flex gap-4 mt-6;
}

.link {
  @apply text-red-900 underline hover:text-red-700 transition-colors;
}

/* Add fade transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
