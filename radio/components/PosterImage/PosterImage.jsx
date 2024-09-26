'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import posterImage from '@/images/poster.png'
import neurofunkPoster from '@/images/neurofunkPoster.png'
import { useMode } from '@/utils/mode_check/mode_check'

export default function PosterImage() {
  const isNeurofunk = useMode()
  const [mode, setMode] = useState(isNeurofunk)

  useEffect(() => {
    const checkAndSetMode = () => {
      setMode(isNeurofunk)
    }

    checkAndSetMode()

    const interval = setInterval(checkAndSetMode, 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Link
      href="/"
      className="relative mx-auto block w-48 overflow-hidden bg-slate-200 sm:w-64 lg:w-auto"
      aria-label="Homepage"
    >
      <div className="h-full w-full bg-black p-6">
        <Image
          className="w-full"
          src={mode ? neurofunkPoster : posterImage}
          alt=""
          sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
          priority
        />
      </div>
      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
    </Link>
  )
}
