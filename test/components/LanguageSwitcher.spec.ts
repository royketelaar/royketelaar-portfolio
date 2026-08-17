import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

const mount = () => mountSuspended(LanguageSwitcher, { attachTo: document.body })

describe('LanguageSwitcher', () => {
  it('renders one link per language with lang and hreflang', async () => {
    const wrapper = await mount()
    const links = wrapper.findAll('a')

    expect(links.map((l) => l.text())).toEqual(['Nederlands', 'Frysk', 'English'])
    expect(links.map((l) => l.attributes('href'))).toEqual(['/', '/fy', '/en'])
    expect(links.map((l) => l.attributes('lang'))).toEqual(['nl', 'fy', 'en'])
    expect(links.map((l) => l.attributes('hreflang'))).toEqual(['nl', 'fy', 'en'])
  })

  it('marks only the active language with aria-current', async () => {
    const wrapper = await mount()
    const current = wrapper.findAll('a[aria-current="true"]')

    expect(current).toHaveLength(1)
    expect(current[0]?.text()).toBe('Nederlands')
  })

  it('is a labelled navigation landmark with a labelled disclosure button', async () => {
    const wrapper = await mount()

    expect(wrapper.find('nav').attributes('aria-label')).toBe('Taal')
    expect(wrapper.find('summary').attributes('aria-label')).toBe('Taal: Nederlands')
    expect(wrapper.find('details').element.open).toBe(false)
  })

  it('shows decorative flags next to the names', async () => {
    const wrapper = await mount()
    const flags = wrapper.findAll('img')

    expect(flags.map((f) => f.attributes('src'))).toEqual([
      '/flags/nl.svg',
      '/flags/nl.svg',
      '/flags/fy.svg',
      '/flags/en.svg'
    ])
    expect(flags.every((f) => f.attributes('alt') === '')).toBe(true)
  })

  it('closes on Escape and returns focus to the button', async () => {
    const wrapper = await mount()
    const details = wrapper.find('details')
    details.element.open = true

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await wrapper.vm.$nextTick()

    expect(details.element.open).toBe(false)
    expect(document.activeElement).toBe(wrapper.find('summary').element)
  })
})
