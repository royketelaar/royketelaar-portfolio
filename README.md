# Roy Ketelaar

Persoonlijke site van Roy Ketelaar, front-end developer in Fryslân. Statische Nuxt 4-site: Vue 3, TypeScript, Tailwind CSS en bun. Nederlands is de standaardtaal, met Frysk en English op een eigen URL.

## Draaien

```bash
bun install
bun run dev
```

De site staat dan op `http://localhost:3000`.

```bash
bun run test
bun run lint
bun run typecheck
bun run generate
```

`bun run generate` schrijft een statische site naar `.output/public`. Bekijken:

```bash
bun run preview
```

## Inhoud aanpassen

Alle tekst, projecten, vaardigheden en het homelab staan in [`app/data/site.ts`](app/data/site.ts).

- Elke tekst heeft `nl`, `en` en `fy`.
- `needsReview: true` zet een ster op de site. Pas de tekst aan en zet de vlag op `false`.
- `featured: true` toont een project op de homepage.
- `live` en `repo` zijn optioneel. Privé-repo’s krijgen geen link.
- `stack` is een lijst tags, alleen invullen als die klopt.
- Zet `kind` op `client`, `own`, `experiment` of `earlier`. Dat is het filter op de werkpagina.

Navigatie, SEO-titels en de voettekst zitten in hetzelfde bestand, onder `copy`.

## Talen en URL’s

| Taal | Code | Voorbeeld |
| --- | --- | --- |
| Nederlands | `nl` | `/projecten` |
| English | `en` | `/en/projects` |
| Frysk | `fy` | `/fy/projekten` |

Geen automatische taalwissel en geen taalcookie. Het Frysk is een concept en moet nog door Roy worden nagelezen.

## Publiceren

Elke host die statische bestanden serveert is genoeg. Publish-map: `.output/public`. Build: `bun run generate`.

Op Netlify: build command `bun install && bun run generate`, publish directory `.output/public`. `public/_headers` zet een paar beveiligingsheaders; andere hosts negeren dat bestand.

De canonieke URL is `https://royketelaar.nl`. Sitemap: `/sitemap.xml`.

## Thema

Donker of licht volgt eerst het systeem. Een gekozen thema blijft in `localStorage` onder de sleutel `theme`. Geen cookie, geen analytics.

De privacyverklaring zegt nu dat de site geen cookies en geen vergelijkbare technieken gebruikt. `localStorage` voor het thema is functioneel en stuurt niets naar een server. Als die zin letterlijk zo moet blijven, haal de thema-opslag weg of werk de verklaring bij.

## Nog invullen

Sterren op de site, en deze lijst:

- **Daniël Nauta** — omschrijving en eventuele URL. `danielnauta.nl` is een geparkeerd domein van ZeeDesign, daarom niet gelinkt.
- **Mongkhon Thai Massage** — naam, plaats, omschrijving, URL. Niet gelinkt aan mongkholthai.nl; de spelling wijkt af.
- **Thaise massage** — klopt `https://www.thaise-massage.nl` (Patcha, Spijkenisse)?
- **WSTM** — omschrijving en URL.
- **Martina Ketelaar** — klopt `https://martinaketelaar.nl` nog bij de frontend- en backend-repo?
- **Bike Fit Studio** — komen de prototypes uit 2019 nog overeen met `https://www.bikefitstudio.nl`?
- **GTA Leeuwarden, Skyler, Startpunt, StreamRank, stream-sort** — wat het is, en een URL als die er is.
- **PeopleTree** — komt `https://peopletree.nl` nog uit het werk van 2019?
- **Agilized, Tinycare, iHuman** — oudere hackathon- of schoolprojecten, geen publieke repo gevonden. Omschrijving aanvullen of de kaarten weghalen.
- **Niche Plus** — geen URL. `nicheplus.nl` is een Wix-site, daarom niet als live link gezet.
- **Bootsma Hofstra** — geen URL. `bootsmahofstra.nl` stuurt door naar een andere site, daarom niet gelinkt.
- **Motiestemmer** — gelinkt naar `https://www.motiestemmer.nl`. Dat domein resolvde niet bij de bouw (16 november 2026).
- **Minecraft** — publiek adres. `minecraft.royketelaar.nl` bestaat in DNS, maar er kwam geen webpagina terug.
- **Stack-tags** — alleen gezet waar de stack publiek vaststaat. De rest kun je in `stack` zetten.
- **Frysk** — helemaal nalopen.
- **Privacy-PDF** — thema in `localStorage` vermelden, of de zin over “geen vergelijkbare technieken” laten zoals hij is en de opslag schrappen.
- **Jaartallen en opdrachtgevers** — bewust weggelaten. Niet invullen met een gok.

`public/background.jpg` wordt niet geladen. `public/avatar.jpg` is het portret. `rateyourday` (leeg Rails-project uit 2014) staat niet op de site.

## Stack

Nuxt 4, Vue 3, TypeScript, Tailwind CSS v4 (`@tailwindcss/vite`), `@nuxtjs/i18n`, `@nuxtjs/color-mode`, zelf gehoste lettertypen via Fontsource, bun. Klassen worden door Prettier met `prettier-plugin-tailwindcss` gesorteerd.
