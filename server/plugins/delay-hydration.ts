/**
 * Loads the client JS only after the page is fully loaded, the largest contentful
 * paint has been presented (PerformanceObserver, 1 s fallback) and the browser is
 * idle. Nothing on this page needs JS to render, so the images no longer compete
 * with ~110 KB of scripts (or the ~200 KB Studio prefetch). Nuxt Studio still
 * activates once the JS runs.
 * Only active in production builds; dev keeps the normal script tags for HMR.
 */
const ENTRY_SCRIPT = /<script type="module" src="([^"]+)" crossorigin><\/script>/
const SCRIPT_HINT = /<link rel="(modulepreload|prefetch)" as="script" crossorigin href="([^"]+)">/g

const idleLoader = (entry: string, hints: [rel: string, href: string][]) =>
  `<script>addEventListener('load',function(){var d=false;` +
  `var i=function(){var h=document.head;${JSON.stringify(hints)}.forEach(function(c){var l=document.createElement('link');l.rel=c[0];l.as='script';l.href=c[1];l.crossOrigin='anonymous';h.appendChild(l)});` +
  `var s=document.createElement('script');s.type='module';s.src=${JSON.stringify(entry)};s.crossOrigin='anonymous';h.appendChild(s)};` +
  `var g=function(){if(d)return;d=true;(window.requestIdleCallback||setTimeout)(i,{timeout:2000})};` +
  `requestAnimationFrame(function(){requestAnimationFrame(function(){` +
  `try{new PerformanceObserver(g).observe({type:'largest-contentful-paint',buffered:true})}catch(e){g()}` +
  `setTimeout(g,1000)})})})</script>`

const delayScripts = (html: string) => {
  const entry = html.match(ENTRY_SCRIPT)?.[1]
  if (!entry) return html
  const hints = [...html.matchAll(SCRIPT_HINT)].map((m): [string, string] => [
    m[1] ?? '',
    m[2] ?? ''
  ])
  return html.replace(SCRIPT_HINT, '').replace(ENTRY_SCRIPT, idleLoader(entry, hints))
}

export default defineNitroPlugin((nitro) => {
  if (import.meta.dev) return
  nitro.hooks.hook('render:html', (html) => {
    html.head = html.head.map(delayScripts)
  })
})
