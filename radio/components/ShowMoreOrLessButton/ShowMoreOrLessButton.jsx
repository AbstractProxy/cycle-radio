'use client'

import { useMode } from '@/utils/mode_check/mode_check'
import { useEffect, useState } from 'react'

export default function ShowMoreOrLessButton({ isExpanded, setIsExpanded }) {
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

  const buttonColor = mode
    ? 'text-green-500 hover:text-green-700'
    : 'text-pink-500 hover:text-pink-700'

  return (
    <button
      type="button"
      className={`mt-2 hidden text-sm font-bold leading-6 ${buttonColor} lg:inline-block`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? 'Show less' : 'Show more'}
    </button>
  )
}
