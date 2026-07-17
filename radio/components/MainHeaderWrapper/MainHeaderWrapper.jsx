'use client'

import { getCycleColor } from '@/utils/mode_check/mode_check'
import { useCycleContext } from '../CycleProvider/CycleProvider'

export default function MainHeaderWrapper({ children }) {
  const cycle = useCycleContext()

  const { scroll } = getCycleColor(cycle)

  return (
    <header
      className={`${scroll} bg-black scrollbar-thin scrollbar-track-black  lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120`}
    >
      {children}
    </header>
  )
}
