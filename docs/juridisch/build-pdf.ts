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
  {
    source: 'algemene-voorwaarden.html',
    output: 'algemene-voorwaarden.pdf',
    footer: 'Roy Ketelaar · Algemene voorwaarden · versie augustus 2026',
    page: (n: string, total: string) => `pagina ${n} van ${total}`
  },
  {
    source: 'algemene-voorwaarden-en.html',
    output: 'algemene-voorwaarden-en.pdf',
    footer: 'Roy Ketelaar · Terms and conditions · version August 2026',
    page: (n: string, total: string) => `page ${n} of ${total}`
  },
  {
    source: 'algemene-voorwaarden-fy.html',
    output: 'algemene-voorwaarden-fy.pdf',
    footer: 'Roy Ketelaar · Algemiene betingsten · ferzje augustus 2026',
    page: (n: string, total: string) => `side ${n} fan ${total}`
  },
  {
    source: 'privacyverklaring.html',
    output: 'privacy-verklaring.pdf',
    footer: 'Roy Ketelaar · Privacyverklaring · versie augustus 2026',
    page: (n: string, total: string) => `pagina ${n} van ${total}`
  }
]

const pageNumber = '<span class="pageNumber"></span>'
const totalPages = '<span class="totalPages"></span>'

const footerTemplate = (doc: (typeof documents)[number]) => `
  <div style="width:100%;margin:0 20mm;display:flex;justify-content:space-between;
              font-family:'Avenir Next','Helvetica Neue',sans-serif;font-size:7.5pt;color:#78716c;">
    <span>${doc.footer}</span>
    <span>${doc.page(pageNumber, totalPages)}</span>
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
    footerTemplate: footerTemplate(doc),
    margin: { top: '22mm', right: '20mm', bottom: '24mm', left: '20mm' }
  })
  await page.close()
  console.log(`✓ public/${doc.output}`)
}

await browser.close()
