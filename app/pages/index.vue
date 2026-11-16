<template>
  <div>
    <section class="lg:flex lg:min-h-[calc(100svh-8rem)] lg:flex-col lg:justify-center">
      <div class="grid items-end gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
        <div class="rise">
          <p class="text-sm tracking-[0.16em] text-accent uppercase">
            01 — {{ t(copy.hero.kicker) }}
          </p>
          <h1 class="mt-5 text-[clamp(3.2rem,7.4vw,6.3rem)] leading-[0.96] tracking-[-0.04em]">
            <span class="block">{{ t(copy.hero.line1) }}</span>
            <span class="block">
              <em class="text-accent italic">{{ t(copy.hero.em) }}</em
              >{{ t(copy.hero.line2) }}
            </span>
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            {{ t(copy.hero.lede) }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink class="btn btn-primary" :to="localePath('/projecten')">
              {{ t(copy.hero.work) }}
            </NuxtLink>
            <NuxtLink class="btn btn-ghost" :to="localePath('/contact')">
              {{ t(copy.hero.contact) }}
            </NuxtLink>
          </div>
          <p class="mt-8 text-sm tracking-[0.08em] text-muted uppercase">
            {{ stackLine.join(' · ') }}
          </p>
        </div>
        <div class="rise rise-3">
          <SitePortrait priority />
        </div>
      </div>
    </section>

    <section class="mt-20 border-t border-line pt-12 md:mt-8" :aria-labelledby="indexTitle">
      <h2 :id="indexTitle" class="text-3xl">{{ t(copy.index.title) }}</h2>
      <ol class="mt-4">
        <li v-for="item in index" :key="item.to">
          <NuxtLink
            :to="localePath(item.to)"
            class="group grid grid-cols-[3.5rem_1fr] gap-4 border-b border-line py-6"
          >
            <span class="font-serif text-2xl text-accent italic">{{ item.index }}</span>
            <span>
              <span class="block text-3xl group-hover:text-accent">{{ t(item.title) }}</span>
              <span class="mt-2 block text-muted">{{ t(item.body) }}</span>
            </span>
          </NuxtLink>
        </li>
      </ol>
    </section>

    <section class="mt-20" aria-labelledby="gekozen-werk">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <h2 id="gekozen-werk" class="text-3xl">{{ t(copy.featured.title) }}</h2>
        <NuxtLink class="text-link" :to="localePath('/projecten')">{{
          t(copy.featured.all)
        }}</NuxtLink>
      </div>
      <ol class="mt-6">
        <li v-for="project in featured" :key="project.slug">
          <NuxtLink
            :to="localePath(`/projecten#${project.slug}`)"
            class="group grid gap-2 border-t border-line-strong py-6 md:grid-cols-[7rem_1fr_1.4fr] md:items-baseline"
          >
            <span class="font-serif text-2xl text-accent italic">
              {{ String(projectIndex(project.slug)).padStart(2, '0') }}
            </span>
            <span class="text-2xl group-hover:text-accent">{{ project.title }}</span>
            <span class="line-clamp-3 text-muted">{{ t(project.summary) }}</span>
          </NuxtLink>
        </li>
      </ol>
    </section>
  </div>
</template>

<script setup lang="ts">
import { copy, projectIndex, projects, stackLine } from '~/data/site'

const { t } = useSite()
const localePath = useLocalePath()

usePageMeta(
  () => t(copy.seo.homeTitle),
  () => t(copy.seo.homeDescription)
)

const indexTitle = 'inhoudsopgave'

const index = [
  { index: '02', to: '/projecten', title: copy.nav.work, body: copy.index.work },
  { index: '03', to: '/over', title: copy.nav.about, body: copy.index.about },
  { index: '04', to: '/lab', title: copy.nav.lab, body: copy.index.lab },
  { index: '05', to: '/contact', title: copy.nav.contact, body: copy.index.contact }
]

const featured = projects.filter((project) => project.featured)
</script>
