export default function LayoutWrapper({ children }) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className="flex min-h-full">
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
