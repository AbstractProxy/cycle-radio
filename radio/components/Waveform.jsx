'use client'
import { useEffect, useState, useId } from 'react'
import { useCycleContext } from './CycleProvider/CycleProvider'
import { usePlayBack } from './PlaybackProvider/PlaybackProvider'
import Sidebar from './Sidebar/Sidebar'
import { getGradientStops, randomBetween } from '@/utils/mode_check/mode_check'

const BARS = {
  total: 100,
  width: 2,
  gap: 2,
  minHeight: 40,
  maxHeight: 100,
}

export function Waveform({ isSidebarHidden, ...props }) {
  const cycle = useCycleContext()
  const { isPlaying } = usePlayBack()
  const id = useId()

  const initialHeights = Array.from(
    { length: BARS.total },
    randomBetween(BARS.minHeight, BARS.maxHeight),
  )
  const [animatedHeights, setAnimatedHeights] = useState(initialHeights)

  useEffect(() => {
    let frameId
    let timeoutId

    const animate = () => {
      setAnimatedHeights(
        Array.from(
          { length: BARS.total },
          randomBetween(BARS.minHeight, BARS.maxHeight, Math.random() * 1000),
        ),
      )

      timeoutId = setTimeout(() => {
        frameId = requestAnimationFrame(animate)
      }, 180)
    }

    if (isPlaying) {
      animate()
    }

    return () => {
      cancelAnimationFrame(frameId)
      clearTimeout(timeoutId)
    }
  }, [isPlaying])

  return (
    <div>
      <svg aria-hidden="true" {...props}>
        <defs>
          <linearGradient id={`${id}-fade`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="40%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          <linearGradient id={`${id}-gradient`}>
            {getGradientStops(cycle)}
          </linearGradient>
          <mask id={`${id}-mask`}>
            <rect width="100%" height="100%" fill={`url(#${id}-pattern)`} />
          </mask>
          <pattern
            id={`${id}-pattern`}
            width={BARS.total * BARS.width + BARS.total * BARS.gap}
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            {animatedHeights.map((height, index) => (
              <rect
                key={index}
                width={BARS.width}
                height={`${BARS.maxHeight}%`}
                x={BARS.gap * (index + 1) + BARS.width * index}
                y={0}
                fill={`url(#${id}-fade)`}
                style={{
                  transformOrigin: 'top',
                  transform: `scaleY(${height / BARS.maxHeight}) translateZ(0)`,
                  transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'transform',
                }}
              />
            ))}
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-gradient)`}
          mask={`url(#${id}-mask)`}
          opacity="0.25"
          style={{ transition: 'height 0.8s ease' }}
        />
      </svg>
      <div className="flex justify-end">
        {!isSidebarHidden && <Sidebar showOnDesktop={true} />}
      </div>
    </div>
  )
}
