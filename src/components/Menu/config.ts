import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://schrute-exchange.vercel.app',
      },
      {
        label: 'Liquidity',
        href: 'https://schrute.vercel.app/#/pool',
      },
    ],
  },
  {
    label: 'Schrute Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Beets',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/schrutefarm',
      },
      {
        label: 'Docs',
        href: 'https://www.msnbc.com',
      },
      {
        label: 'Blog',
        href: 'https://schrutie.medium.com',
      },
    ],
  },
]

export default config
