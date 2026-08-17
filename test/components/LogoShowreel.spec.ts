import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import LogoShowreel from '~/components/LogoShowreel.vue'
import { showreelGroups } from '~/data/showreel'

const allItems = showreelGroups.flatMap((group) => group.items)

describe('LogoShowreel', () => {
  it('is a labelled section with one heading per group', async () => {
    const wrapper = await mountSuspended(LogoShowreel)
    const section = wrapper.find('section')

    expect(section.attributes('aria-labelledby')).toBe(wrapper.find('h2').attributes('id'))
    expect(wrapper.find('h2').text()).toBe('Merken en klanten waar ik voor werkte')
    expect(wrapper.findAll('h3').map((h) => h.text())).toEqual([
      "Als zzp'er",
      'Bij Snakeware',
      'Bij Accell Group'
    ])
  })

  it('renders every logo as a lazy, sized image named after the brand', async () => {
    const wrapper = await mountSuspended(LogoShowreel)
    const images = wrapper.findAll('img')
    const withLogo = allItems.filter((item) => item.logo)

    expect(images).toHaveLength(withLogo.length)
    expect(images.map((img) => img.attributes('alt'))).toEqual(withLogo.map((item) => item.name))
    for (const img of images) {
      expect(img.attributes('loading')).toBe('lazy')
      expect(Number(img.attributes('width'))).toBeGreaterThan(0)
      expect(Number(img.attributes('height'))).toBeGreaterThan(0)
    }
  })

  it('falls back to the brand name as text when there is no logo', async () => {
    const wrapper = await mountSuspended(LogoShowreel)
    const withoutLogo = allItems.filter((item) => !item.logo)

    for (const item of withoutLogo) {
      expect(wrapper.text()).toContain(item.name)
    }
  })

  it('links only the items that have a href, opening in a new tab', async () => {
    const wrapper = await mountSuspended(LogoShowreel)
    const links = wrapper.findAll('a')
    const linked = allItems.filter((item) => item.href)

    expect(links.map((a) => a.attributes('href'))).toEqual(linked.map((item) => item.href))
    for (const [index, link] of links.entries()) {
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('rel')).toBe('noopener noreferrer')
      expect(link.attributes('aria-label')).toBe(`${linked[index]?.name} (opent in een nieuw tabblad)`)
    }
  })
})
