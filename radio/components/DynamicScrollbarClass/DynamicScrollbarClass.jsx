'use client'

import { useEffect } from 'react'
import { useCycleContext } from '../CycleProvider/CycleProvider'
import { scrollbarColors } from '@/utils/mode_check/mode_check'

export default function DynamicScrollbarClass() {
  const cycle = useCycleContext()

  useEffect(() => {
    const html = document.documentElement

    html.classList.remove(
      'scrollbar-thumb-green-500',
      'scrollbar-thumb-pink-500',
      'scrollbar-thumb-blue-500',
      'scrollbar-thumb-red-500',
      'scrollbar-thin',
      'scrollbar-track-black',
    )

    html.classList.add(
      scrollbarColors[cycle] ?? scrollbarColors.default,
      'scrollbar-thin',
      'scrollbar-track-black',
    )
  }, [cycle])

  return null
}
