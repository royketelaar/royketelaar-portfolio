<template>
  <footer class="border-t border-line" :aria-label="t(copy.footer.label)">
    <div
      class="mx-auto grid max-w-[70rem] gap-8 px-5 py-10 text-sm text-muted md:grid-cols-[1.4fr_1fr_1fr] md:px-8"
    >
      <div>
        <p class="font-serif text-2xl tracking-[-0.03em] text-ink">{{ person.name }}</p>
        <p class="mt-2">{{ t(person.location) }}</p>
        <p class="mt-4 max-w-sm">{{ t(copy.footer.colophon) }}</p>
      </div>
      <nav :aria-label="t(copy.footer.legal)">
        <ul class="space-y-2">
          <li>
            <a class="text-link text-ink" :href="legalHref('terms', lang)" :hreflang="lang">
              {{ t(copy.footer.terms) }}
            </a>
          </li>
          <li>
            <a class="text-link text-ink" :href="legalHref('privacy', lang)" :hreflang="lang">
              {{ t(copy.footer.privacy) }}
            </a>
          </li>
        </ul>
      </nav>
      <p class="max-w-xs">{{ t(copy.footer.themeNote) }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { copy, legalHref, person } from '~/data/site'

const { t, lang } = useSite()
</script>
