import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

describe('LanguageSwitcher', () => {
  it('renders one link per language with lang and hreflang', async () => {
    const wrapper = await mountSuspended(LanguageSwitcher)
    const links = wrapper.findAll('a')

    expect(links.map((l) => l.text())).toEqual(['Nederlands', 'Frysk', 'English'])
    expect(links.map((l) => l.attributes('href'))).toEqual(['/', '/fy', '/en'])
    expect(links.map((l) => l.attributes('lang'))).toEqual(['nl', 'fy', 'en'])
    expect(links.map((l) => l.attributes('hreflang'))).toEqual(['nl', 'fy', 'en'])
  })

  it('marks only the active language with aria-current', async () => {
    const wrapper = await mountSuspended(LanguageSwitcher)
    const current = wrapper.findAll('a[aria-current="true"]')

    expect(current).toHaveLength(1)
    expect(current[0]?.text()).toBe('Nederlands')
  })

  it('is a labelled navigation landmark', async () => {
    const wrapper = await mountSuspended(LanguageSwitcher)

    expect(wrapper.find('nav').attributes('aria-label')).toBe('Taal')
  })
})
