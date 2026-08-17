export type ShowreelLogo = {
  src: string
  width: number
  height: number
  /** Light artwork that needs a dark background chip. */
  dark?: boolean
}

export type ShowreelItem = {
  name: string
  logo?: ShowreelLogo
  href?: string
}

export type ShowreelGroup = {
  key: 'zzp' | 'snakeware' | 'accell'
  items: ShowreelItem[]
}

export const showreelGroups: ShowreelGroup[] = [
  {
    key: 'zzp',
    items: [
      {
        name: 'Verkeersschool Miranda',
        logo: { src: '/logos/verkeersschool-miranda.png', width: 360, height: 82 },
        href: 'https://rijdenbijmiranda.nl'
      },
      {
        name: 'Skyler',
        logo: { src: '/logos/skyler.svg', width: 150, height: 40 },
        href: 'https://skyler-app.netlify.app'
      }
    ]
  },
  {
    key: 'snakeware',
    items: [
      {
        name: 'Waker Cyber Security',
        logo: { src: '/logos/waker.svg', width: 180, height: 38, dark: true },
        href: 'https://waker.nl'
      },
      {
        name: 'Lankhorst Engineered Products',
        logo: { src: '/logos/lankhorst-ep.svg', width: 263, height: 54 },
        href: 'https://www.lankhorst-ep.com'
      },
      {
        name: 'Autojobs',
        logo: { src: '/logos/autojobs.svg', width: 176, height: 48 },
        href: 'https://autojobs.nl'
      },
      {
        name: 'Royal Coster Diamonds',
        logo: { src: '/logos/royal-coster-diamonds.svg', width: 128, height: 49 },
        href: 'https://www.royalcoster.com'
      },
      {
        name: 'VIAC',
        logo: { src: '/logos/viac.svg', width: 188, height: 76 },
        href: 'https://www.viac.nl'
      },
      {
        name: 'Fortadio',
        logo: { src: '/logos/fortadio.svg', width: 132, height: 39, dark: true },
        href: 'https://www.fortadio.com'
      },
      {
        name: 'Meyra',
        logo: { src: '/logos/meyra.png', width: 195, height: 65 },
        href: 'https://www.meyra.nl'
      }
    ]
  },
  {
    key: 'accell',
    items: [
      {
        name: 'Batavus',
        logo: { src: '/logos/batavus.svg', width: 651, height: 155 },
        href: 'https://batavus.com'
      },
      {
        name: 'Sparta',
        logo: { src: '/logos/sparta.svg', width: 2519, height: 305 },
        href: 'https://spartabikes.com'
      },
      {
        name: 'Raleigh',
        logo: { src: '/logos/raleigh.png', width: 400, height: 46 },
        href: 'https://raleigh.co.uk'
      },
      {
        name: 'Lapierre',
        logo: { src: '/logos/lapierre.svg', width: 266, height: 21 },
        href: 'https://lapierrebikes.com'
      },
      {
        name: 'Ghost',
        logo: { src: '/logos/ghost.svg', width: 248, height: 29 },
        href: 'https://ghost-bikes.com'
      },
      {
        name: 'Haibike',
        logo: { src: '/logos/haibike.svg', width: 158, height: 16 },
        href: 'https://haibike.com'
      },
      {
        name: 'Winora',
        logo: { src: '/logos/winora.svg', width: 142, height: 28 },
        href: 'https://www.winora.com'
      },
      {
        name: 'XLC',
        logo: { src: '/logos/xlc.png', width: 400, height: 64 },
        href: 'https://xlc-parts.com'
      }
    ]
  }
]
