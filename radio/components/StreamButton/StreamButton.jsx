'use client'
import { useMode } from '@/utils/mode_check/mode_check'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function StreamButton({ url, icon, label, data, index }) {
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

  const linkColor = mode
    ? 'text-green-500 hover:text-green-700'
    : 'text-pink-500 hover:text-pink-700'

  return (
    <div className="flex items-center">
      <Link
        href={url}
        className={`flex items-center text-xl font-bold ${linkColor}  transition-transform duration-200 hover:scale-105  hover:shadow-lg`}
      >
        {React.cloneElement(icon, {
          className:
            'mr-2 h-6 w-6 text-slate-200 transition-transform duration-200 hover:rotate-12',
        })}
        {label}
      </Link>
      {index !== data.length - 1 && (
        <span
          aria-hidden="true"
          className="ml-2 text-sm font-bold text-slate-400"
        >
          /
        </span>
      )}
    </div>
  )
}
//OK
