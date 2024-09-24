import LayoutWrapper from '@/components/LayoutWrapper/LayoutWrapper'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'Cycle FM',
    default: 'Cycle FM',
  },
  description:
    'Conversations with the most tragically misunderstood people of our time.',
}

export default function RootLayout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}
