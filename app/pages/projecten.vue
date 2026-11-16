<template>
  <div>
    <PageIntro :kicker="`02 — ${t(copy.workPage.kicker)}`" :lede="t(copy.workPage.lede)">
      {{ t(copy.workPage.title) }}
    </PageIntro>

    <div
      class="no-print mt-10 flex flex-wrap gap-2"
      role="group"
      :aria-label="t(copy.filters.label)"
    >
      <button
        v-for="item in filters"
        :key="item.id"
        type="button"
        class="min-h-11 cursor-pointer border px-3 text-sm"
        :class="
          kind === item.id
            ? 'border-accent bg-accent text-canvas'
            : 'border-line-strong bg-panel hover:border-accent'
        "
        :aria-pressed="kind === item.id"
        @click="setKind(item.id)"
      >
        {{ t(item.label) }}
        <span class="tabular-nums"> {{ counts[item.id] }}</span>
      </button>
    </div>

    <p class="mt-6 max-w-2xl text-sm text-muted">{{ t(copy.review.legend) }}</p>
    <p class="mt-2 text-sm text-muted">{{ visible.length }} {{ t(copy.filters.count) }}</p>

    <p v-if="visible.length === 0" class="mt-10 text-lg">{{ t(copy.filters.empty) }}</p>
    <div v-else class="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <ProjectCard v-for="project in visible" :key="project.slug" :project="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { copy, projects, type ProjectFilter } from '~/data/site'
import { filterProjects, isProjectFilter } from '~/utils/projects'

const { t } = useSite()
const route = useRoute()

usePageMeta(
  () => t(copy.seo.workTitle),
  () => t(copy.seo.workDescription)
)

const filters: Array<{
  id: ProjectFilter
  label: (typeof copy.filters)[keyof typeof copy.filters]
}> = [
  { id: 'all', label: copy.filters.all },
  { id: 'client', label: copy.filters.client },
  { id: 'own', label: copy.filters.own },
  { id: 'experiment', label: copy.filters.experiment },
  { id: 'earlier', label: copy.filters.earlier }
]

const counts = {
  all: projects.length,
  client: projects.filter((project) => project.kind === 'client').length,
  own: projects.filter((project) => project.kind === 'own').length,
  experiment: projects.filter((project) => project.kind === 'experiment').length,
  earlier: projects.filter((project) => project.kind === 'earlier').length
}

const kind = computed<ProjectFilter>(() => {
  const query = route.query.kind
  const value = Array.isArray(query) ? query[0] : query
  return isProjectFilter(value) ? value : 'all'
})

const visible = computed(() => filterProjects(projects, kind.value))

const setKind = async (next: ProjectFilter) => {
  await navigateTo(
    {
      path: route.path,
      query: next === 'all' ? {} : { kind: next },
      hash: route.hash
    },
    { replace: true }
  )
}
</script>
