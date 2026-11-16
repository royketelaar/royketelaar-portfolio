<template>
  <article
    :id="project.slug"
    class="flex h-full scroll-mt-28 flex-col border border-line-strong bg-panel p-5"
    :class="project.featured ? 'border-t-4 border-t-accent' : ''"
  >
    <div class="flex items-baseline justify-between gap-4">
      <p class="font-serif text-3xl text-accent italic" aria-hidden="true">{{ number }}</p>
      <p class="text-sm tracking-[0.14em] text-muted uppercase">{{ t(kindLabel) }}</p>
    </div>
    <h2 class="mt-5 text-3xl">{{ project.title }}</h2>
    <p class="mt-3 text-pretty text-muted">{{ t(project.summary) }}</p>
    <p v-if="project.needsReview" class="mt-3 text-sm font-bold text-clay">
      * {{ t(copy.review.short) }}
    </p>
    <p v-if="project.stack?.length" class="mt-4 text-sm tracking-wide text-muted">
      {{ project.stack.join(' · ') }}
    </p>
    <p v-if="project.live || project.repo" class="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6">
      <ExternalLink v-if="project.live" :href="project.live">{{
        t(copy.project.live)
      }}</ExternalLink>
      <ExternalLink v-if="project.repo" :href="project.repo">{{
        t(copy.project.code)
      }}</ExternalLink>
    </p>
  </article>
</template>

<script setup lang="ts">
import { copy, projectIndex, type Project } from '~/data/site'

const props = defineProps<{ project: Project }>()
const { t } = useSite()

const number = computed(() => String(projectIndex(props.project.slug)).padStart(2, '0'))

const kindLabel = computed(() => {
  if (props.project.kind === 'client') return copy.filters.client
  if (props.project.kind === 'own') return copy.filters.own
  if (props.project.kind === 'experiment') return copy.filters.experiment
  return copy.filters.earlier
})
</script>
