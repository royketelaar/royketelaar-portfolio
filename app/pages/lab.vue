<template>
  <div>
    <PageIntro :kicker="`04 — ${t(copy.labPage.kicker)}`" :lede="t(copy.labPage.lede)">
      {{ t(copy.labPage.title) }}
    </PageIntro>

    <div class="mt-12">
      <article
        v-for="(item, index) in lab"
        :key="item.id"
        class="border-t border-line-strong py-10 md:grid md:grid-cols-[6rem_1fr] md:gap-8"
      >
        <p class="font-serif text-4xl text-accent italic" aria-hidden="true">
          {{ String(index + 1).padStart(2, '0') }}
        </p>
        <div>
          <h2 class="text-4xl">{{ t(item.title) }}</h2>
          <p class="mt-4 max-w-2xl text-lg leading-relaxed text-pretty">{{ t(item.body) }}</p>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li
              v-for="fact in item.facts"
              :key="fact"
              class="border border-line-strong px-3 py-1 text-sm"
            >
              {{ fact }}
            </li>
          </ul>
          <p v-if="item.note" class="mt-6 max-w-2xl text-sm font-bold text-clay">
            * {{ t(item.note) }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { copy, lab } from '~/data/site'

const { t } = useSite()

usePageMeta(
  () => t(copy.seo.labTitle),
  () => t(copy.seo.labDescription)
)
</script>
