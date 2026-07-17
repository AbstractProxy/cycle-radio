import { metadata } from '@/utils/seo/seoMetadata/seoMetadata'
import Script from 'next/script'
import AppWrapper from '@/components/AppWrapper/AppWrapper'
import '@/styles/tailwind.css'
import { Providers } from './providers'

export { metadata }

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scrollbar-thin  scrollbar-track-black`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
        />
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RadioStation',
            name: 'Cycle DNB Radio',
            url: 'https://cycle-radio.com',
            sameAs: [
              'https://www.instagram.com/cycleradio',
              'https://www.youtube.com/@cycleradio',
              'https://www.twitter.com/cycleradio',
            ],
            logo: 'https://cycle-radio.com/poster.png',
            description:
              'Cycle DNB Radio is a 24/7 online drum and bass radio station, streaming liquid, neurofunk, jungle and underground DnB.',
            broadcastFrequency: 'Online',
            genre: ['Drum and Bass', 'Liquid DnB', 'Neurofunk', 'Jungle'],
            potentialAction: {
              '@type': 'ListenAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://cycle-radio.com',
              },
            },
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'RS',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Worldwide',
            },
          })}
        </Script>
      </head>
      <body className="flex min-h-full  bg-black">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VBS4B2297C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-VBS4B2297C');
  `}
        </Script>

        <Providers>
          <AppWrapper>
            <div className="w-full">{children}</div>
          </AppWrapper>
        </Providers>
      </body>
    </html>
  )
}
