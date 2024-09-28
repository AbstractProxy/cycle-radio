import { getCycle } from '@/utils/mode_check/mode_check'
import '@/styles/tailwind.css'

export default function LayoutWrapper({ children }) {
  const cycle = getCycle()

  console.log('Cycle: ', cycle)
  const scrollColor =
    cycle === 'neurofunk'
      ? 'scrollbar-thumb-green-500'
      : 'scrollbar-thumb-pink-500'

  return (
    <html
      lang="en"
      className={`${cycle} scrollbar-thin ${scrollColor}  scrollbar-track-black`}
    >
      <body className="flex min-h-full  bg-black">
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
        />
        <div className="w-full">{children}</div>
      </body>
    </html>
  )
}
