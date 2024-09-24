export default function FooterWrapper({ children }) {
  return (
    <footer className="border-t border-gray-500 bg-black py-10  sm:py-16 sm:pb-32 lg:hidden">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
        {children}
      </div>
    </footer>
  )
}
//OK
