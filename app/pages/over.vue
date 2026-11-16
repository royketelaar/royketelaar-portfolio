<template>
  <div>
    <PageIntro :kicker="`03 — ${t(copy.about.kicker)}`" :lede="t(copy.about.lede)">
      {{ t(copy.about.title) }}
    </PageIntro>

    <div class="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.7fr)]">
      <div class="max-w-2xl space-y-5 text-lg leading-relaxed text-pretty">
        <p>{{ t(copy.about.p1) }}</p>
        <p>{{ t(copy.about.p2) }}</p>
        <p>{{ t(copy.about.p3) }}</p>
      </div>
      <SitePortrait />
    </div>

    <section class="mt-20" aria-labelledby="vaardigheden">
      <h2 id="vaardigheden" class="text-3xl">{{ t(copy.about.skills) }}</h2>
      <div class="mt-8 grid gap-10 md:grid-cols-3">
        <section v-for="group in skillGroups" :key="group.id">
          <h3 class="text-2xl">{{ t(group.title) }}</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="item in group.items" :key="textOf(item, lang)" class="flex gap-3">
              <span
                aria-hidden="true"
                class="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>{{ textOf(item, lang) }}</span>
            </li>
          </ul>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { copy, skillGroups, textOf } from '~/data/site'

const { t, lang } = useSite()

usePageMeta(
  () => t(copy.seo.aboutTitle),
  () => t(copy.seo.aboutDescription)
)
</script>
