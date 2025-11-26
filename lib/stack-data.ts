export interface StackItem {
  name: string
  description: string
  url: string
  category: 'hardware' | 'software'
}

export const hardwareStack: StackItem[] = [
  {
    name: 'Logitech MX Keys Mini',
    description: 'Minimalist wireless keyboard with smart backlighting',
    url: 'https://www.logitech.com/en-us/products/keyboards/mx-keys-mini.html',
    category: 'hardware'
  },
  {
    name: 'Razer Orochi V2',
    description: 'Ultra-lightweight wireless gaming mouse',
    url: 'https://www.razer.com/gaming-mice/razer-orochi-v2',
    category: 'hardware'
  },
  {
    name: 'LG 27" 27GN880-B',
    description: 'QHD IPS gaming monitor with ergonomic stand',
    url: 'https://www.lg.com/us/monitors/lg-27gn880-b-gaming-monitor',
    category: 'hardware'
  },
  {
    name: 'Garmin Forerunner 965',
    description: 'Premium GPS running smartwatch with AMOLED display',
    url: 'https://www.garmin.com/en-US/p/882611',
    category: 'hardware'
  },
  {
    name: 'Shokz OpenRun Pro 2',
    description: 'Premium bone conduction sports headphones',
    url: 'https://shokz.com/products/openrun-pro-2',
    category: 'hardware'
  },
  {
    name: 'Jabra Elite 3',
    description: 'Compact true wireless earbuds with great sound',
    url: 'https://www.jabra.com/bluetooth-headsets/jabra-elite-3',
    category: 'hardware'
  },
  {
    name: 'Scrikss Matri-X Grey',
    description: 'Beautifully designed mechanical pen',
    url: 'https://shop.scrikss.com.tr/detay/-matri-x-mekanik-kursun-kalem-07-mm-gri-91086',
    category: 'hardware'
  },
]

export const softwareStack: StackItem[] = [
  {
    name: 'Cursor',
    description: 'AI-powered code editor for productivity',
    url: 'https://cursor.sh/',
    category: 'software'
  },
  {
    name: 'Evernote',
    description: 'Note-taking and organization app',
    url: 'https://evernote.com/',
    category: 'software'
  },
  {
    name: 'Strava',
    description: 'Fitness tracking and social network for athletes',
    url: 'https://www.strava.com/',
    category: 'software'
  },
  {
    name: 'Proshot',
    description: 'Professional camera app with manual controls',
    url: 'https://www.riseupgames.com/proshot/',
    category: 'software'
  },
  {
    name: 'Unfold',
    description: 'Story editor for creating beautiful social content',
    url: 'https://unfold.com/',
    category: 'software'
  },
  {
    name: 'Mojo',
    description: 'Animated story editor for social media',
    url: 'https://mojo-app.com/',
    category: 'software'
  },
  {
    name: 'Zen Browser',
    description: 'Privacy-focused browser with productivity features',
    url: 'https://zen-browser.app/',
    category: 'software'
  },
  {
    name: 'Bitwarden',
    description: 'Open-source password manager',
    url: 'https://bitwarden.com/',
    category: 'software'
  },
  {
    name: 'TickTick',
    description: 'Task manager and to-do list app',
    url: 'https://ticktick.com/',
    category: 'software'
  },
]

