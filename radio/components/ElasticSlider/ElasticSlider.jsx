import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

function ElasticSlider({
  cycle,
  defaultValue = 50,
  startingValue = 0,
  maxValue = 100,
  isStepped = false,
  stepSize = 1,
  onChange = () => {},
}) {
  const [value, setValue] = useState(defaultValue)
  const sliderRef = useRef(null)

  const clientX = useMotionValue(0)

  const scale = useMotionValue(1)

  const sliderFill =
    cycle === 'neurofunk'
      ? 'bg-green-500'
      : cycle === 'breakcore'
        ? 'bg-blue-500'
        : cycle === 'techstep'
          ? 'bg-red-500'
          : 'bg-pink-500'

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const handlePointerMove = (e) => {
    if (e.buttons > 0 && sliderRef.current) {
      const { left, width } = sliderRef.current.getBoundingClientRect()
      let newValue =
        startingValue +
        ((e.clientX - left) / width) * (maxValue - startingValue)

      if (isStepped) {
        newValue = Math.round(newValue / stepSize) * stepSize
      }

      newValue = Math.min(Math.max(newValue, startingValue), maxValue)
      setValue(newValue)
      onChange(newValue)
      clientX.jump(e.clientX)
    }
  }

  const handlePointerDown = (e) => {
    handlePointerMove(e)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const getRangePercentage = () => {
    const totalRange = maxValue - startingValue
    if (totalRange === 0) return 0
    return ((value - startingValue) / totalRange) * 100
  }

  return (
    <>
      <motion.div
        onHoverStart={() => animate(scale, 1.2)}
        onHoverEnd={() => animate(scale, 1)}
        onTouchStart={() => animate(scale, 1.2)}
        onTouchEnd={() => animate(scale, 1)}
        style={{
          scale,
          opacity: useTransform(scale, [1, 1.2], [0.7, 1]),
        }}
        className="flex w-full touch-none select-none items-center justify-center gap-4"
      >
        <div
          ref={sliderRef}
          className="relative flex w-full max-w-xs flex-grow cursor-grab touch-none select-none items-center py-4"
          onPointerMove={handlePointerMove}
          onPointerDown={handlePointerDown}
        >
          <motion.div
            style={{
              height: useTransform(scale, [1, 1.2], [6, 12]),
            }}
            className="flex flex-grow"
          >
            <div className="relative h-full flex-grow overflow-hidden rounded-full bg-gray-400">
              <div
                className={`absolute h-full rounded-full ${sliderFill}`}
                style={{ width: `${getRangePercentage()}%` }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <p className="absolute mb-2 -translate-y-4 transform text-xs font-medium tracking-wide text-gray-400">
        {Math.round(value)}
      </p>
    </>
  )
}

export default React.memo(ElasticSlider)
