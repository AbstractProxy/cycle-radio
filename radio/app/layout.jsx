import LayoutWrapper from '@/components/LayoutWrapper/LayoutWrapper'
import '@/styles/tailwind.css'
import { getCycle } from '@/utils/mode_check/mode_check'

const cycle = getCycle()

const favicon = cycle ? '/green-favicon.ico' : '/favicon.ico'
console.log('Favicon: ', favicon)

export const metadata = {
  title: {
    template: 'Cycle FM',
    default: 'Cycle FM',
  },
  description:
    'Conversations with the most tragically misunderstood people of our time.',
  icons: {
    icon: favicon,
  },
}

export default function RootLayout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}
