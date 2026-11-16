import type { Project, ProjectFilter } from '~/data/site'

export function filterProjects(items: readonly Project[], filter: ProjectFilter): Project[] {
  if (filter === 'all') return [...items]
  return items.filter((item) => item.kind === filter)
}

export function isProjectFilter(value: unknown): value is ProjectFilter {
  return (
    value === 'all' ||
    value === 'client' ||
    value === 'own' ||
    value === 'experiment' ||
    value === 'earlier'
  )
}
