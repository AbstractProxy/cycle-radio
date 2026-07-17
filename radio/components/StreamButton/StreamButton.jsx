import Link from 'next/link'
import React from 'react'
import { useCycleContext } from '../CycleProvider/CycleProvider'
import { getCycleColor } from '@/utils/mode_check/mode_check'

export default function StreamButton({ url, icon, label }) {
  const cycle = useCycleContext()
  const { color } = getCycleColor(cycle, true)

  return (
    <div className="flex items-center">
      <Link
        href={url}
        className={`${color} flex items-center text-xl font-bold transition-transform duration-200 hover:scale-105 hover:shadow-lg`}
      >
        {React.cloneElement(icon, {
          className:
            'mr-2 h-6 w-6 text-slate-200 transition-transform duration-200 hover:rotate-12',
        })}
        {label}
      </Link>
    </div>
  )
}
//OK
