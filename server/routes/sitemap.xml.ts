import { siteUrl } from '~/data/site'

const groups = [
  ['/', '/en', '/fy'],
  ['/projecten', '/en/projects', '/fy/projekten'],
  ['/over', '/en/about', '/fy/oer'],
  ['/lab', '/en/lab', '/fy/lab'],
  ['/contact', '/en/contact', '/fy/kontakt']
]

const languages = ['nl', 'en', 'fy']

function absolute(path: string) {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`
}

export default defineEventHandler((event) => {
  const urls = groups.flatMap((alts) =>
    alts.map((path) => {
      const alternates = alts
        .map((alt, index) => {
          const lang = languages[index] ?? 'nl'
          return `<xhtml:link rel="alternate" hreflang="${lang}" href="${absolute(alt)}"/>`
        })
        .join('')
      const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${absolute(alts[0] ?? '/')}"/>`
      return `<url><loc>${absolute(path)}</loc>${alternates}${xDefault}</url>`
    })
  )

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>'
  ].join('')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return xml
})
