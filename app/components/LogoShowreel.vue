<template>
  <section :aria-labelledby="headingId" class="mt-12 border-t border-stone-900/10 pt-8">
    <h2 :id="headingId" class="text-xs font-semibold uppercase tracking-wider text-stone-600">
      {{ t('showreel.title') }}
    </h2>
    <div v-for="group in showreelGroups" :key="group.key" class="mt-5 md:flex md:items-baseline md:gap-6">
      <h3 class="mb-2 shrink-0 text-xs text-stone-600 md:mb-0 md:w-28">
        {{ t(`showreel.${group.key}`) }}
      </h3>
      <ul class="flex flex-wrap items-center gap-x-6 gap-y-3">
        <li v-for="item in group.items" :key="item.name" class="flex items-center">
          <component
            :is="item.href ? 'a' : 'span'"
            :href="item.href"
            :target="item.href ? '_blank' : undefined"
            :rel="item.href ? 'noopener noreferrer' : undefined"
            :aria-label="item.href ? t('showreel.link', { name: item.name }) : undefined"
            class="group/logo flex items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-900"
          >
            <img
              v-if="item.logo"
              :src="item.logo.src"
              :alt="item.name"
              :width="item.logo.width"
              :height="item.logo.height"
              loading="lazy"
              decoding="async"
              class="h-auto max-h-6 w-auto max-w-28 object-contain opacity-70 brightness-75 grayscale transition group-hover/logo:opacity-100 group-hover/logo:brightness-100 group-hover/logo:grayscale-0 group-focus-visible/logo:opacity-100 group-focus-visible/logo:brightness-100 group-focus-visible/logo:grayscale-0 md:max-h-7 md:max-w-40"
              :class="item.logo.dark ? 'rounded bg-stone-800 px-2 py-1' : ''"
            />
            <span v-else class="text-sm font-semibold text-stone-600 group-hover/logo:text-stone-950">
              {{ item.name }}
            </span>
          </component>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { showreelGroups } from '~/data/showreel'

const { t } = useI18n()
const headingId = useId()
</script>
