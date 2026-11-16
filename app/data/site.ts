/**
 * All editorial copy and project data lives here.
 * needsReview: true shows a star on the site. Replace that copy, then set the flag to false.
 * Languages: nl (default), en, fy. Roy: the Frisian still needs a human read.
 */

export type LocaleCode = 'nl' | 'en' | 'fy'

export type L = Record<LocaleCode, string>

export const localeCodes = ['nl', 'en', 'fy'] as const

export const projectKinds = ['client', 'own', 'experiment', 'earlier'] as const

export type ProjectKind = (typeof projectKinds)[number]

export type ProjectFilter = ProjectKind | 'all'

const l = (nl: string, en: string, fy: string): L => ({ nl, en, fy })

export const siteUrl = 'https://royketelaar.nl'

export const person = {
  name: 'Roy Ketelaar',
  jobTitle: 'Front-end developer',
  email: 'royketelaar@gmail.com',
  emailAlt: 'info@royketelaar.nl',
  url: siteUrl,
  github: 'https://github.com/royketelaar',
  x: 'https://x.com/royketelaar',
  xHandle: '@royketelaar',
  linkedin: 'https://www.linkedin.com/in/roy-ketelaar-36821b6b/',
  location: l('Fryslân, Nederland', 'Friesland, the Netherlands', 'Fryslân, Nederlân'),
  region: 'Fryslân',
  country: 'NL'
}

export interface Project {
  slug: string
  kind: ProjectKind
  featured?: boolean
  needsReview?: boolean
  title: string
  summary: L
  stack?: string[]
  live?: string
  repo?: string
}

export const projects: Project[] = [
  {
    slug: 'plastic-protocols',
    kind: 'own',
    featured: true,
    title: 'Plastic Protocols',
    stack: ['Nuxt 4', 'Vue', 'TypeScript', 'Tailwind', 'bun'],
    repo: 'https://github.com/royketelaar/plastic-protocols',
    summary: l(
      'Een rustige, bronvermeldende site over micro- en nanoplastics: wat het is, wat we er echt over weten, en kleine veranderingen die je blootstelling verlagen. Nuxt 4, zeven talen.',
      'A calm, sourced site about micro- and nanoplastics: what they are, what we actually know, and small changes that lower your exposure. Nuxt 4, seven languages.',
      'In rêstige, boarnefermeldende side oer mikro- en nanoplastyk: wat it is, wat wy der echt oer witte, en lytse feroarings dy’t dyn bleatstelling ferleegje. Nuxt 4, sân talen.'
    )
  },
  {
    slug: 'motiestemmer',
    kind: 'own',
    featured: true,
    title: 'Motiestemmer',
    live: 'https://www.motiestemmer.nl',
    summary: l(
      'Stem anoniem op echte moties van de Tweede Kamer en zie daarna welke fractie het dichtst bij jouw keuzes ligt.',
      'Vote anonymously on real motions from the Dutch House of Representatives, then see which party sits closest to your choices.',
      'Stim anonym op echte moasjes fan de Twadde Keamer en sjoch dêrnei hokker fraksje it dichtst by dyn karren leit.'
    )
  },
  {
    slug: 'rijdenbijmiranda',
    kind: 'client',
    featured: true,
    title: 'Rijden bij Miranda',
    live: 'https://rijdenbijmiranda.nl',
    summary: l(
      'Website voor Verkeersschool Miranda in Burgwerd.',
      'Website for driving school Verkeersschool Miranda in Burgwerd.',
      'Webside foar Ferkearsskoalle Miranda yn Burgwerd.'
    )
  },
  {
    slug: 'niche-plus',
    kind: 'client',
    title: 'Niche Plus',
    summary: l(
      'Site voor digital agency Niche Plus.',
      'Site for digital agency Niche Plus.',
      'Side foar digital agency Niche Plus.'
    )
  },
  {
    slug: 'bootsmahofstra',
    kind: 'client',
    title: 'Bootsma Hofstra',
    summary: l(
      'Website voor boekhoudingskantoor Bootsma Hofstra.',
      'Website for accounting firm Bootsma Hofstra.',
      'Webside foar boekhâldkantoar Bootsma Hofstra.'
    )
  },
  {
    slug: 'snake-shop',
    kind: 'client',
    title: 'Snake-shop',
    stack: ['Vue'],
    summary: l(
      'Webshop-opdracht, gemaakt in de context van Snakeware.',
      'A webshop assignment, made in the context of Snakeware.',
      'Webshop-opdracht, makke yn it ramt fan Snakeware.'
    )
  },
  {
    slug: 'danielnauta-site',
    kind: 'client',
    needsReview: true,
    title: 'Daniël Nauta',
    summary: l(
      'Aanvullen: korte omschrijving van danielnauta-site.',
      'Fill in: a short description of danielnauta-site.',
      'Oanfolje: koarte omskriuwing fan danielnauta-site.'
    )
  },
  {
    slug: 'mongkhon-thai-massage',
    kind: 'client',
    needsReview: true,
    title: 'Mongkhon Thai Massage',
    summary: l(
      'Aanvullen: website voor een Thaise massagesalon. Naam en plaats zijn nog niet bevestigd.',
      'Fill in: a website for a Thai massage salon. Name and place are not confirmed yet.',
      'Oanfolje: webside foar in Taiske massagesalon. Namme en plak binne noch net befêstige.'
    )
  },
  {
    slug: 'thaise-massage',
    kind: 'client',
    needsReview: true,
    title: 'Thaise massage',
    live: 'https://www.thaise-massage.nl',
    summary: l(
      'Waarschijnlijk de site van Patcha Thaise Massage in Spijkenisse. Even checken of dit jouw werk is.',
      'Likely the site of Patcha Thaise Massage in Spijkenisse. Please confirm this is your work.',
      'Nei alle gedachten de side fan Patcha Thaise Massage yn Spijkenisse. Kontrolearje efkes oft dit dyn wurk is.'
    )
  },
  {
    slug: 'wstm-website',
    kind: 'client',
    needsReview: true,
    title: 'WSTM',
    summary: l(
      'Aanvullen: korte omschrijving van wstm-website.',
      'Fill in: a short description of wstm-website.',
      'Oanfolje: koarte omskriuwing fan wstm-website.'
    )
  },
  {
    slug: 'martinaketelaar',
    kind: 'client',
    needsReview: true,
    title: 'Martina Ketelaar',
    live: 'https://martinaketelaar.nl',
    summary: l(
      'Website bij Martina Ketelaar Fotografie. Er zijn een frontend- en een backend-repo. Even checken of de live site nog dit werk is.',
      'Website for Martina Ketelaar Fotografie. There is a frontend repo and a backend repo. Please confirm the live site is still this work.',
      'Webside by Martina Ketelaar Fotografie. Der binne in frontend- en in backend-repo. Kontrolearje oft de live side noch dit wurk is.'
    )
  },
  {
    slug: 'bikefitstudio',
    kind: 'client',
    needsReview: true,
    title: 'Bike Fit Studio',
    live: 'https://www.bikefitstudio.nl',
    summary: l(
      'Prototypes uit 2019 voor Bike Fit Studio in Heerenveen. Even checken of de live site nog uit dit werk komt.',
      '2019 prototypes for Bike Fit Studio in Heerenveen. Please confirm the live site still comes from this work.',
      'Prototypes út 2019 foar Bike Fit Studio yn It Hearrenfean. Kontrolearje oft de live side noch út dit wurk komt.'
    )
  },
  {
    slug: 'gta-leeuwarden',
    kind: 'experiment',
    needsReview: true,
    title: 'GTA Leeuwarden',
    summary: l(
      'Aanvullen: wat gta-leeuwarden is. Geen publieke omschrijving gevonden.',
      'Fill in: what gta-leeuwarden is. No public description turned up.',
      'Oanfolje: wat gta-leeuwarden is. Gjin publike omskriuwing fûn.'
    )
  },
  {
    slug: 'skyler',
    kind: 'experiment',
    needsReview: true,
    title: 'Skyler',
    summary: l(
      'Aanvullen: korte omschrijving van skyler.',
      'Fill in: a short description of skyler.',
      'Oanfolje: koarte omskriuwing fan skyler.'
    )
  },
  {
    slug: 'startpunt',
    kind: 'experiment',
    needsReview: true,
    title: 'Startpunt',
    summary: l(
      'Aanvullen: korte omschrijving van startpunt.',
      'Fill in: a short description of startpunt.',
      'Oanfolje: koarte omskriuwing fan startpunt.'
    )
  },
  {
    slug: 'streamrank',
    kind: 'experiment',
    needsReview: true,
    title: 'StreamRank',
    summary: l(
      'Aanvullen: experiment rond het rangschikken van streams. De repo geeft geen verdere publieke uitleg.',
      'Fill in: an experiment around ranking streams. The repository has no further public description.',
      'Oanfolje: eksperimint om it rangskikken fan streams hinne. De repo jout gjin fierdere publike útlis.'
    )
  },
  {
    slug: 'stream-sort',
    kind: 'experiment',
    needsReview: true,
    title: 'stream-sort',
    summary: l(
      'Aanvullen: hoort waarschijnlijk bij StreamRank. Korte omschrijving nog invullen.',
      'Fill in: probably related to StreamRank. Short description still missing.',
      'Oanfolje: heart nei alle gedachten by StreamRank. Koarte omskriuwing noch ynfolje.'
    )
  },
  {
    slug: 'shop',
    kind: 'earlier',
    title: 'Shop',
    stack: ['Vue'],
    repo: 'https://github.com/royketelaar/shop',
    summary: l(
      'Openbaar Vue-shopproject. Een vroege oefening, geen live winkel.',
      'Public Vue shop project. An early exercise, not a live store.',
      'Iepenbiere Vue-shopprojekt. In betide oefening, gjin live winkel.'
    )
  },
  {
    slug: 'peopletree',
    kind: 'earlier',
    needsReview: true,
    title: 'PeopleTree',
    live: 'https://peopletree.nl',
    summary: l(
      'Ouder front-endwerk uit 2019 rond PeopleTree. Even checken of de live site nog uit dit werk komt.',
      'Older front-end work from 2019 around PeopleTree. Please confirm the live site still comes from this work.',
      'Alder front-endwurk út 2019 om PeopleTree hinne. Kontrolearje oft de live side noch út dit wurk komt.'
    )
  },
  {
    slug: 'agilized',
    kind: 'earlier',
    needsReview: true,
    title: 'Agilized',
    summary: l(
      'Aanvullen: ouder hackathon- of schoolproject. Geen publieke repo meer gevonden.',
      'Fill in: an older hackathon or school project. No public repository turned up.',
      'Oanfolje: alder hackathon- of skoalprojekt. Gjin publike repo mear fûn.'
    )
  },
  {
    slug: 'tinycare',
    kind: 'earlier',
    needsReview: true,
    title: 'Tinycare',
    summary: l(
      'Aanvullen: ouder hackathon- of schoolproject. Geen publieke repo meer gevonden.',
      'Fill in: an older hackathon or school project. No public repository turned up.',
      'Oanfolje: alder hackathon- of skoalprojekt. Gjin publike repo mear fûn.'
    )
  },
  {
    slug: 'ihuman',
    kind: 'earlier',
    needsReview: true,
    title: 'iHuman',
    summary: l(
      'Aanvullen: ouder hackathon- of schoolproject. Geen publieke repo meer gevonden.',
      'Fill in: an older hackathon or school project. No public repository turned up.',
      'Oanfolje: alder hackathon- of skoalprojekt. Gjin publike repo mear fûn.'
    )
  }
]

export interface SkillGroup {
  id: string
  title: L
  items: Array<L | string>
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'build',
    title: l('Bouwen', 'Building', 'Bouwe'),
    items: ['JavaScript', 'TypeScript', 'Vue 3', 'Nuxt 4', 'Tailwind CSS', 'HTML', 'SCSS', 'bun']
  },
  {
    id: 'quality',
    title: l('Kwaliteit', 'Quality', 'Kwaliteit'),
    items: [
      l('Toegankelijkheid (WCAG)', 'Accessibility (WCAG)', 'Tagonklikheid (WCAG)'),
      'European Accessibility Act',
      'SEO',
      'Playwright'
    ]
  },
  {
    id: 'practice',
    title: l('Manier van werken', 'Way of working', 'Wize fan wurkjen'),
    items: ['UI/UX-design', 'Design thinking', 'Scrum']
  }
]

export interface LabItem {
  id: string
  title: L
  body: L
  facts: string[]
  note?: L
}

export const lab: LabItem[] = [
  {
    id: 'media',
    title: l('Mediaserver', 'Media server', 'Mediaserver'),
    body: l(
      'Thuis draait een Raspberry Pi 4B als mediaserver. Jellyfin om te kijken, Seerr om te kiezen wat erop komt, en de *arr-apps eromheen. Het verkeer gaat via ProtonVPN.',
      'At home, a Raspberry Pi 4B runs as a media server. Jellyfin for watching, Seerr for choosing what goes on it, and the *arr apps around them. Traffic goes through ProtonVPN.',
      'Thús draait in Raspberry Pi 4B as mediaserver. Jellyfin om te sjen, Seerr om te kiezen wat derop komt, en de *arr-apps deromhinne. It ferkear giet fia ProtonVPN.'
    ),
    facts: ['Raspberry Pi 4B', 'Jellyfin', 'Seerr', '*arr', 'ProtonVPN']
  },
  {
    id: 'minecraft',
    title: l('Minecraft', 'Minecraft', 'Minecraft'),
    body: l(
      'Voor vrienden draait een Minecraft-server op een VPS bij Hetzner. De domeinen horen bij royketelaar.nl.',
      'A Minecraft server for friends runs on a Hetzner VPS. The domains sit under royketelaar.nl.',
      'Foar freonen draait in Minecraft-server op in VPS by Hetzner. De domeinen hearre by royketelaar.nl.'
    ),
    facts: ['Hetzner', 'VPS', 'royketelaar.nl'],
    note: l(
      'Aanvullen: het publieke adres. minecraft.royketelaar.nl bestaat in DNS, maar er kwam geen webpagina terug, dus er staat nog geen link.',
      'Fill in: the public address. minecraft.royketelaar.nl exists in DNS, but no web page answered, so it is not linked yet.',
      'Oanfolje: it publike adres. minecraft.royketelaar.nl bestiet yn DNS, mar der kaam gjin webside werom, dus der stiet noch gjin keppeling.'
    )
  },
  {
    id: 'research',
    title: l('Cashbox en Aurum', 'Cashbox and Aurum', 'Cashbox en Aurum'),
    body: l(
      'Cashbox en Aurum zijn persoonlijke hulpmiddelen waarmee ik ASX-microcaps onderzoek. Een eigen project naast het webwerk. Geen advies, en op deze site geen posities of cijfers.',
      'Cashbox and Aurum are personal tools I use to research ASX microcaps. A side project next to the web work. Not advice, and this site shows no positions or figures.',
      'Cashbox en Aurum binne persoanlike helpmiddels dêr’t ik ASX-microcaps mei ûndersykje. In eigen projekt njonken it webwurk. Gjin advys, en op dizze side gjin posysjes of sifers.'
    ),
    facts: ['Cashbox', 'Aurum', 'ASX']
  }
]

export const stackLine = ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind', 'bun']

export const copy = {
  skip: l('Ga naar de inhoud', 'Skip to content', 'Gean nei de ynhâld'),
  nav: {
    label: l('Hoofdnavigatie', 'Main', 'Haadnavigaasje'),
    work: l('Werk', 'Work', 'Wurk'),
    about: l('Over', 'About', 'Oer'),
    lab: l('Lab', 'Lab', 'Lab'),
    contact: l('Contact', 'Contact', 'Kontakt'),
    home: l('Home', 'Home', 'Thús')
  },
  lang: {
    label: l('Taal', 'Language', 'Taal')
  },
  theme: {
    toDark: l(
      'Schakel naar donkere modus',
      'Switch to dark mode',
      'Skeakelje nei de tsjustere modus'
    ),
    toLight: l(
      'Schakel naar lichte modus',
      'Switch to light mode',
      'Skeakelje nei de ljochte modus'
    ),
    dark: l('Donker', 'Dark', 'Tsjuster'),
    light: l('Licht', 'Light', 'Ljocht')
  },
  hero: {
    kicker: l(
      'Front-end developer · Fryslân',
      'Front-end developer · Friesland',
      'Front-end developer · Fryslân'
    ),
    line1: l('Websites die', 'Websites that', 'Websites dy’t'),
    em: l('logisch', 'make sense', 'logysk'),
    line2: l(' werken.', '.', ' wurkje.'),
    lede: l(
      'Ik ontwerp en bouw ze vanuit Fryslân: snel, vindbaar en toegankelijk. Nuxt, Vue en TypeScript, met oog voor WCAG.',
      'I design and build them from Friesland: fast, findable and accessible. Nuxt, Vue and TypeScript, with care for WCAG.',
      'Ik ûntwerp en bou se út Fryslân wei: fluch, te finen en tagonklik. Nuxt, Vue en TypeScript, mei each foar WCAG.'
    ),
    work: l('Bekijk het werk', 'View the work', 'Besjoch it wurk'),
    contact: l('Neem contact op', 'Get in touch', 'Nim kontakt op')
  },
  index: {
    title: l('Inhoud', 'Contents', 'Ynhâld'),
    work: l(
      'Sites, eigen projecten en eerder werk. Te filteren.',
      'Sites, own projects and earlier work. Filterable.',
      'Siden, eigen projekten en earder wurk. Te filterjen.'
    ),
    about: l(
      'Hoe ik werk, en de stack waar ik nu mee bouw.',
      'How I work, and the stack I build with now.',
      'Hoe’t ik wurkje, en de stack dêr’t ik no mei bou.'
    ),
    lab: l(
      'Mediaserver, Minecraft, en eigen onderzoek.',
      'Media server, Minecraft, and personal research.',
      'Mediaserver, Minecraft, en eigen ûndersyk.'
    ),
    contact: l('Mail, GitHub en X.', 'Email, GitHub and X.', 'E-post, GitHub en X.')
  },
  featured: {
    title: l('Gekozen werk', 'Selected work', 'Keazen wurk'),
    all: l('Alle projecten', 'All projects', 'Alle projekten')
  },
  filters: {
    label: l('Filter projecten', 'Filter projects', 'Filter projekten'),
    all: l('Alles', 'All', 'Alles'),
    client: l('Opdracht', 'Client work', 'Opdracht'),
    own: l('Eigen', 'Own', 'Eigen'),
    experiment: l('Experiment', 'Experiment', 'Eksperimint'),
    earlier: l('Eerder', 'Earlier', 'Earder'),
    empty: l(
      'Geen projecten in deze selectie.',
      'Nothing in this selection.',
      'Gjin projekten yn dizze seleksje.'
    ),
    count: l('projecten', 'projects', 'projekten')
  },
  review: {
    short: l('nog invullen', 'still to fill in', 'noch ynfolje'),
    legend: l(
      'Een ster betekent: deze regel is een placeholder, of Roy moet hem nog even checken.',
      'A star means this line is a placeholder, or Roy still needs to confirm it.',
      'In stjer betsjut: dizze rigel is in placeholder, of Roy moat him noch efkes kontrolearje.'
    )
  },
  project: {
    live: l('Bekijk de site', 'View the site', 'Besjoch de side'),
    code: l('Code', 'Code', 'Koade'),
    newTab: l('opent in een nieuw tabblad', 'opens in a new tab', 'iepenet yn in nij ljepblêd')
  },
  about: {
    kicker: l('Over', 'About', 'Oer'),
    title: l('Ik bouw het zelf.', 'I build it myself.', 'Ik bou it sels.'),
    lede: l(
      'Front-end developer in Fryslân, met een sterke focus op gebruiksvriendelijkheid en toegankelijkheid.',
      'Front-end developer in Friesland, with a strong focus on usability and accessibility.',
      'Front-end developer yn Fryslân, mei in sterke fokus op brûkersfreonlikheid en tagonklikheid.'
    ),
    p1: l(
      'Ik ontwerp en bouw websites die logisch werken voor de mensen die ze gebruiken, en die technisch kloppen: snel, goed vindbaar en toegankelijk volgens WCAG en de European Accessibility Act. Ik werk graag samen, van eerste idee tot een site die goed werkt en er goed uitziet.',
      'I design and build websites that make sense to the people who use them, and that are technically sound: fast, easy to find and accessible in line with WCAG and the European Accessibility Act. I enjoy working together, from the first idea to a site that works well and looks good.',
      'Ik ûntwerp en bou websiden dy’t logysk wurkje foar de minsken dy’t se brûke, en dy’t technysk doge: fluch, goed te finen en tagonklik neffens WCAG en de European Accessibility Act. Ik wurkje graach gear, fan earste idee oant in side dy’t goed wurket en der goed útsjocht.'
    ),
    p2: l(
      'Ik werk hands-on. Op dit moment bouw ik met Nuxt 4, Vue 3, TypeScript en Tailwind, en ik gebruik bun als package manager.',
      'I work hands-on. Right now I build with Nuxt 4, Vue 3, TypeScript and Tailwind, and I use bun as the package manager.',
      'Ik wurkje hands-on. Op dit stuit bou ik mei Nuxt 4, Vue 3, TypeScript en Tailwind, en ik brûk bun as package manager.'
    ),
    p3: l(
      'Naast websites sleutel ik aan eigen projecten, een homelab en een Minecraft-server voor vrienden.',
      'Alongside websites I tinker with my own projects, a homelab and a Minecraft server for friends.',
      'Njonken websiden knutselje ik oan eigen projekten, in homelab en in Minecraft-server foar freonen.'
    ),
    skills: l('Vaardigheden', 'Skills', 'Feardichheden'),
    portrait: l('Portret van Roy Ketelaar', 'Portrait of Roy Ketelaar', 'Portret fan Roy Ketelaar')
  },
  labPage: {
    kicker: l('Lab', 'Lab', 'Lab'),
    title: l('Thuis en ernaast.', 'At home, and on the side.', 'Thús en dernjonken.'),
    lede: l(
      'Geen dashboard met neppe uptime. Drie dingen die echt draaien of waar ik echt aan bouw.',
      'No dashboard of fake uptime. Three things that actually run, or that I actually build.',
      'Gjin dashboard mei neppige uptime. Trije dingen dy’t echt draaie of dêr’t ik echt oan bou.'
    )
  },
  workPage: {
    kicker: l('Werk', 'Work', 'Wurk'),
    title: l('Wat ik gemaakt heb.', 'What I have made.', 'Wat ik makke ha.'),
    lede: l(
      'Opdrachten, eigen projecten en eerder werk. Privé-repo’s linken niet door; alleen publieke sites en publieke code.',
      'Client work, own projects and earlier work. Private repositories are not linked; only public sites and public code.',
      'Opdrachten, eigen projekten en earder wurk. Privee-repo’s keppelje net troch; allinnich publike siden en publike koade.'
    )
  },
  contact: {
    kicker: l('Contact', 'Contact', 'Kontakt'),
    lede: l(
      'Het liefst per mail. Ik lees mee.',
      'Email is best. I do read it.',
      'It leafst fia de e-post. Ik lês mei.'
    ),
    also: l('Of via', 'Or via', 'Of fia'),
    elsewhere: l('Elders', 'Elsewhere', 'Oare plakken')
  },
  footer: {
    label: l('Voettekst', 'Footer', 'Fuottekst'),
    legal: l('Juridisch', 'Legal', 'Juridysk'),
    terms: l(
      'Algemene voorwaarden (PDF)',
      'Terms and conditions (PDF)',
      'Algemiene betingsten (PDF)'
    ),
    privacy: l('Privacyverklaring (PDF)', 'Privacy statement (PDF)', 'Privacyferklearring (PDF)'),
    colophon: l(
      'Gezet in Fraunces en Atkinson Hyperlegible.',
      'Set in Fraunces and Atkinson Hyperlegible.',
      'Set yn Fraunces en Atkinson Hyperlegible.'
    ),
    themeNote: l(
      'Je themakeuze blijft in deze browser staan. Geen cookie, geen analytics.',
      'Your theme choice stays in this browser. No cookie, no analytics.',
      'Dyn temakar bliuwt yn dizze browser stean. Gjin cookie, gjin analytics.'
    )
  },
  missing: {
    title: l('Deze pagina bestaat niet.', 'This page does not exist.', 'Dizze side bestiet net.'),
    body: l(
      'De link klopt niet, of de pagina is verplaatst.',
      'The link is wrong, or the page has moved.',
      'De keppeling kloppet net, of de side is ferpleatst.'
    ),
    other: l('Er ging iets mis.', 'Something went wrong.', 'Der gie wat mis.'),
    home: l('Terug naar home', 'Back home', 'Werom nei thús')
  },
  seo: {
    imageAlt: l(
      'Roy Ketelaar, front-end developer in Fryslân',
      'Roy Ketelaar, front-end developer in Friesland',
      'Roy Ketelaar, front-end developer yn Fryslân'
    ),
    homeTitle: l(
      'Roy Ketelaar — Front-end developer in Fryslân',
      'Roy Ketelaar — Front-end developer in Friesland',
      'Roy Ketelaar — Front-end developer yn Fryslân'
    ),
    homeDescription: l(
      'Roy Ketelaar is front-end developer in Fryslân. Websites die logisch werken: snel, vindbaar en toegankelijk, met Nuxt, Vue en TypeScript.',
      'Roy Ketelaar is a front-end developer in Friesland. Websites that make sense: fast, findable and accessible, with Nuxt, Vue and TypeScript.',
      'Roy Ketelaar is front-end developer yn Fryslân. Websides dy’t logysk wurkje: fluch, te finen en tagonklik, mei Nuxt, Vue en TypeScript.'
    ),
    workTitle: l('Werk — Roy Ketelaar', 'Work — Roy Ketelaar', 'Wurk — Roy Ketelaar'),
    workDescription: l(
      'Filterbaar overzicht van sites, eigen projecten en eerder werk van Roy Ketelaar.',
      'Filterable overview of sites, own projects and earlier work by Roy Ketelaar.',
      'Filterber oersjoch fan siden, eigen projekten en earder wurk fan Roy Ketelaar.'
    ),
    aboutTitle: l('Over — Roy Ketelaar', 'About — Roy Ketelaar', 'Oer — Roy Ketelaar'),
    aboutDescription: l(
      'Hoe Roy Ketelaar werkt: Nuxt 4, Vue 3, TypeScript, Tailwind en bun, met aandacht voor WCAG.',
      'How Roy Ketelaar works: Nuxt 4, Vue 3, TypeScript, Tailwind and bun, with care for WCAG.',
      'Hoe’t Roy Ketelaar wurket: Nuxt 4, Vue 3, TypeScript, Tailwind en bun, mei omtinken foar WCAG.'
    ),
    labTitle: l('Lab — Roy Ketelaar', 'Lab — Roy Ketelaar', 'Lab — Roy Ketelaar'),
    labDescription: l(
      'Homelab en eigen projecten van Roy Ketelaar: een mediaserver, Minecraft, en onderzoekstools.',
      'Homelab and side projects by Roy Ketelaar: a media server, Minecraft, and research tools.',
      'Homelab en eigen projekten fan Roy Ketelaar: in mediaserver, Minecraft, en ûndersyksark.'
    ),
    contactTitle: l('Contact — Roy Ketelaar', 'Contact — Roy Ketelaar', 'Kontakt — Roy Ketelaar'),
    contactDescription: l(
      'Mail Roy Ketelaar, of bekijk GitHub en X. Front-end developer in Fryslân.',
      'Email Roy Ketelaar, or find GitHub and X. Front-end developer in Friesland.',
      'Mail Roy Ketelaar, of sjoch op GitHub en X. Front-end developer yn Fryslân.'
    )
  }
}

export function isLocale(value: string): value is LocaleCode {
  return value === 'nl' || value === 'en' || value === 'fy'
}

export function tx(value: L, locale: string): string {
  return isLocale(locale) ? value[locale] : value.nl
}

export function textOf(value: L | string, locale: string): string {
  return typeof value === 'string' ? value : tx(value, locale)
}

export function legalHref(kind: 'terms' | 'privacy', locale: string): string {
  const code: LocaleCode = isLocale(locale) ? locale : 'nl'
  const suffix = code === 'nl' ? '' : `-${code}`
  const stem = kind === 'terms' ? 'algemene-voorwaarden' : 'privacy-verklaring'
  return `/${stem}${suffix}.pdf`
}

export function projectIndex(slug: string): number {
  const index = projects.findIndex((item) => item.slug === slug)
  return index === -1 ? 0 : index + 1
}
