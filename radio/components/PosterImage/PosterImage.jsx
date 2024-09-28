import Image from 'next/image'
import Link from 'next/link'
import posterImage from '@/images/poster.png'
import neurofunkPoster from '@/images/neurofunkPoster.png'
import { getCycle } from '@/utils/mode_check/mode_check'

export default function PosterImage() {
  const cycle = getCycle()
  return (
    <Link
      href="/"
      className="relative mx-auto mt-6 block w-48 overflow-hidden bg-slate-200 transition-colors duration-500 sm:w-64 lg:w-auto"
      aria-label="Homepage"
    >
      <div className="h-full w-full bg-black p-6 transition-colors duration-500">
        <Image
          className="w-full"
          src={cycle === 'neurofunk' ? neurofunkPoster : posterImage}
          alt=""
          sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
          priority
        />
      </div>
      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 transition-colors duration-500 sm:rounded-xl lg:rounded-2xl" />
    </Link>
  )
}
