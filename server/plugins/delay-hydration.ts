/**
 * Loads the client JS only after the page is fully loaded and the browser is idle.
 * Nothing on this page needs JS to render, so the images no longer compete with
 * ~110 KB of scripts. Nuxt Studio still activates once the JS runs.
 * Only active in production builds; dev keeps the normal script tags for HMR.
 */
const ENTRY_SCRIPT = /<script type="module" src="([^"]+)" crossorigin><\/script>/
const MODULE_PRELOAD = /<link rel="modulepreload" as="script" crossorigin href="([^"]+)">/g

const idleLoader = (entry: string, chunks: string[]) =>
  `<script>addEventListener('load',function(){(window.requestIdleCallback||setTimeout)(function(){` +
  `var h=document.head;${JSON.stringify(chunks)}.forEach(function(c){var l=document.createElement('link');l.rel='modulepreload';l.href=c;l.crossOrigin='anonymous';h.appendChild(l)});` +
  `var s=document.createElement('script');s.type='module';s.src=${JSON.stringify(entry)};s.crossOrigin='anonymous';h.appendChild(s)})})</script>`

const delayScripts = (html: string) => {
  const entry = html.match(ENTRY_SCRIPT)?.[1]
  if (!entry) return html
  const chunks = [...html.matchAll(MODULE_PRELOAD)].flatMap((m) => m[1] ?? [])
  return html.replace(MODULE_PRELOAD, '').replace(ENTRY_SCRIPT, idleLoader(entry, chunks))
}

export default defineNitroPlugin((nitro) => {
  if (import.meta.dev) return
  nitro.hooks.hook('render:html', (html) => {
    html.head = html.head.map(delayScripts)
  })
})
