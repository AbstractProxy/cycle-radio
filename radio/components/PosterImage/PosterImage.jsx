import Image from 'next/image'
import Link from 'next/link'
import posterImage from '@/images/poster.png'

export default function PosterImage() {
  return (
    <Link
      href="/"
      className="relative mx-auto block w-48 overflow-hidden  bg-slate-200 sm:w-64 lg:w-auto"
      aria-label="Homepage"
    >
      <div className="h-full w-full bg-black p-6">
        <Image
          className="w-full"
          src={posterImage}
          alt=""
          sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
          priority
        />
      </div>
      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
    </Link>
  )
}
