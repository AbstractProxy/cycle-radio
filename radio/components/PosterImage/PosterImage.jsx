'use client'

import React from 'react'
import Image from 'next/image'
import { useCycleContext } from '../CycleProvider/CycleProvider'
import { getCycleMeta } from '@/utils/mode_check/mode_check'

export default function PosterImage({ isContactPage }) {
  const cycle = useCycleContext()

  const { src } = getCycleMeta(cycle)

  const objectWidth = isContactPage ? 'lg:max-w-lg' : 'lg:w-auto'

  const width = 5553
  const height = 3682

  return (
    <div
      className={`relative mx-auto mt-16 block aspect-[5553/3682] w-48 overflow-hidden transition-colors duration-500 sm:w-64 lg:mt-6  ${objectWidth}`}
      aria-label="Homepage"
    >
      <div className="relative flex h-full w-full items-center justify-center bg-black p-2 transition-colors duration-500 lg:p-6">
        <Image
          className="h-auto max-w-full object-contain"
          src={src}
          alt={`${cycle} dnb poster`}
          sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
          priority
          width={width}
          height={height}
        />
      </div>
    </div>
  )
}
