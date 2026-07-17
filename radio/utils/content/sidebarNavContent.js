import {
  // Cog6ToothIcon,
  // KeyIcon,
  // UserPlusIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'
import { BookOpenIcon } from '@heroicons/react/24/solid'
import {
  InstagramIcon,
  SoundcloudIcon,
  SpotifyIcon,
} from '@/utils/visit_icons/visit_icons'

export const sidebarNavigation = [
  { name: 'About DnB', href: '/about-dnb', icon: BookOpenIcon },
  // { name: 'Login', href: '/login', icon: KeyIcon }, // Nova ikona za Login
  // { name: 'Register', href: '/register', icon: UserPlusIcon }, // Ikona za Register

  { name: 'Contact', href: '/contact', icon: PhoneIcon },
]

export const sidebarSecondNavigation = [
  {
    id: 1,
    name: 'Instagram',
    href: 'https://www.instagram.com/cycleradio.dnb/',
    initial: 'P',
    current: false,
    icon: InstagramIcon,
  },
  {
    id: 2,
    name: 'Soundcloud',
    href: '#',
    initial: 'P',
    current: false,
    icon: SoundcloudIcon,
  },
  {
    id: 3,
    name: 'Spotify',
    href: '#',
    initial: 'T',
    current: false,
    icon: SpotifyIcon,
  },
]
