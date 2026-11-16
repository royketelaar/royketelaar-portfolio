import { copy, isLocale, projects, tx, type LocaleCode } from '~/data/site'

export function useSite() {
  const { locale } = useI18n()
  const lang = computed<LocaleCode>(() => (isLocale(locale.value) ? locale.value : 'nl'))
  const t = (value: Parameters<typeof tx>[0]) => tx(value, lang.value)

  return { lang, t, copy, projects }
}
