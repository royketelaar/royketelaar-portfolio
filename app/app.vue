<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { person, siteUrl } from '~/data/site'

const head = useLocaleHead({ dir: true, lang: true, seo: true })

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  jobTitle: person.jobTitle,
  url: person.url,
  email: person.email,
  image: `${siteUrl}/avatar.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressRegion: person.region,
    addressCountry: person.country
  },
  sameAs: [person.github, person.x, person.linkedin]
}

useHead(() => ({
  htmlAttrs: {
    lang: head.value.htmlAttrs?.lang
  },
  link: head.value.link ?? [],
  meta: head.value.meta ?? [],
  script: [
    {
      key: 'ld-person',
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schema)
    }
  ]
}))
</script>
