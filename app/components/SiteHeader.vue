<template>
  <div class="sticky top-0 z-30">
    <div class="h-1 bg-accent" />
    <header class="border-b border-line bg-canvas/90 backdrop-blur-md">
      <div
        class="mx-auto flex max-w-[70rem] flex-wrap items-center gap-x-4 gap-y-1 px-5 py-2 md:px-8"
      >
        <NuxtLink
          :to="localePath('/')"
          class="font-serif text-xl tracking-[-0.03em]"
          :aria-current="route.path === localePath('/') ? 'page' : undefined"
        >
          {{ person.name }}
        </NuxtLink>
        <nav
          class="order-last flex w-full gap-1 sm:order-none sm:w-auto"
          :aria-label="t(copy.nav.label)"
        >
          <NuxtLink
            v-for="item in items"
            :key="item.to"
            :to="localePath(item.to)"
            class="inline-flex min-h-11 items-center px-2"
            :class="
              route.path === localePath(item.to)
                ? 'font-bold underline decoration-accent decoration-2 underline-offset-8'
                : 'hover:text-accent'
            "
            :aria-current="route.path === localePath(item.to) ? 'page' : undefined"
          >
            {{ t(item.label) }}
          </NuxtLink>
        </nav>
        <div class="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { copy, person } from '~/data/site'

const { t } = useSite()
const localePath = useLocalePath()
const route = useRoute()

const items = [
  { to: '/projecten', label: copy.nav.work },
  { to: '/over', label: copy.nav.about },
  { to: '/lab', label: copy.nav.lab },
  { to: '/contact', label: copy.nav.contact }
]
</script>
