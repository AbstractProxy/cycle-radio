import Link from 'next/link'
export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="border-t border-gray-500 bg-black py-10 sm:py-16 sm:pb-32 lg:hidden">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
        <p className="mt-2 flex justify-center text-base leading-7 text-slate-200 lg:line-clamp-4">
          © {year} All rights reserved. Cycle FM
          <span className="ml-2 text-sm text-gray-400">
            Logo by{' '}
            <Link
              href="https://www.instagram.com/zollner.maja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-slate-400"
            >
              Maja Zollner
            </Link>
          </span>
        </p>
      </div>
    </footer>
  )
}
