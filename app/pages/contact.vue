<template>
  <div>
    <p class="text-sm tracking-[0.16em] text-accent uppercase">05 — {{ t(copy.contact.kicker) }}</p>
    <h1 class="mt-4 text-[clamp(1.7rem,5.4vw,4.4rem)] leading-[1.08] break-words">
      <a class="text-link decoration-2" :href="`mailto:${person.email}`">{{ person.email }}</a>
    </h1>
    <p class="mt-6 max-w-xl text-lg text-muted">{{ t(copy.contact.lede) }}</p>
    <p class="mt-3">
      {{ t(copy.contact.also) }}
      <a class="text-link" :href="`mailto:${person.emailAlt}`">{{ person.emailAlt }}</a>
    </p>
    <p class="mt-6 text-muted">{{ t(person.location) }}</p>

    <section class="mt-16" aria-labelledby="elders">
      <h2 id="elders" class="text-3xl">{{ t(copy.contact.elsewhere) }}</h2>
      <ul class="mt-6 space-y-3 text-2xl">
        <li>
          <ExternalLink :href="person.github">GitHub</ExternalLink>
        </li>
        <li>
          <ExternalLink :href="person.x">X {{ person.xHandle }}</ExternalLink>
        </li>
        <li>
          <ExternalLink :href="person.linkedin">LinkedIn</ExternalLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { copy, person } from '~/data/site'

const { t } = useSite()

usePageMeta(
  () => t(copy.seo.contactTitle),
  () => t(copy.seo.contactDescription)
)
</script>
