import { describe, expect, it } from 'vitest'
import { localeCodes, projects, type L } from '~/data/site'
import { filterProjects } from '~/utils/projects'

const filled = (value: L) => localeCodes.every((code) => value[code].trim().length > 10)

describe('projects', () => {
  it('gives every project a unique slug and copy in nl, en and fy', () => {
    const slugs = projects.map((project) => project.slug)

    expect(new Set(slugs).size).toBe(slugs.length)
    expect(projects.every((project) => filled(project.summary))).toBe(true)
  })

  it('filters by kind and keeps the full list for all', () => {
    expect(filterProjects(projects, 'all')).toHaveLength(projects.length)

    const own = filterProjects(projects, 'own')

    expect(own.length).toBeGreaterThan(0)
    expect(own.every((project) => project.kind === 'own')).toBe(true)
    expect(filterProjects(projects, 'client').some((project) => project.kind === 'own')).toBe(false)
  })

  it('marks uncertain copy instead of inventing a finished description', () => {
    const open = projects.filter((project) => project.needsReview)

    expect(open.length).toBeGreaterThan(0)
    expect(
      open.every((project) =>
        /aanvullen|fill in|oanfolje|checken|confirm|kontrolearje/i.test(
          project.summary.nl + project.summary.en + project.summary.fy
        )
      )
    ).toBe(true)
  })
})
