/**
 * Renders the legal documents in this folder to PDF in /public.
 * Run: bun run docs:pdf
 * Needs Google Chrome; override the path with CHROME_PATH.
 */
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'
import puppeteer from 'puppeteer-core'

const here = import.meta.dirname
const chromePath =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const documents = [
  { source: 'algemene-voorwaarden.html', output: 'algemene-voorwaarden.pdf', label: 'Algemene voorwaarden' },
  { source: 'privacyverklaring.html', output: 'privacy-verklaring.pdf', label: 'Privacyverklaring' }
]

const footerTemplate = (label: string) => `
  <div style="width:100%;margin:0 20mm;display:flex;justify-content:space-between;
              font-family:'Avenir Next','Helvetica Neue',sans-serif;font-size:7.5pt;color:#78716c;">
    <span>Roy Ketelaar · ${label} · versie augustus 2026</span>
    <span>pagina <span class="pageNumber"></span> van <span class="totalPages"></span></span>
  </div>`

const browser = await puppeteer.launch({ executablePath: chromePath, headless: true })

for (const doc of documents) {
  const page = await browser.newPage()
  await page.goto(pathToFileURL(resolve(here, doc.source)).href, { waitUntil: 'networkidle0' })
  await page.pdf({
    path: resolve(here, '../../public', doc.output),
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: footerTemplate(doc.label),
    margin: { top: '22mm', right: '20mm', bottom: '24mm', left: '20mm' }
  })
  await page.close()
  console.log(`✓ public/${doc.output}`)
}

await browser.close()
