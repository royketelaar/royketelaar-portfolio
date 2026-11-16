import { copy, siteUrl, tx } from '~/data/site'

export function usePageMeta(
  title: MaybeRefOrGetter<string>,
  description: MaybeRefOrGetter<string>
) {
  const { locale } = useI18n()
  const image = `${siteUrl}/og.png`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: () => tx(copy.seo.imageAlt, locale.value),
    ogSiteName: 'Roy Ketelaar',
    twitterCard: 'summary_large_image',
    twitterImage: image,
    twitterSite: '@royketelaar'
  })
}
