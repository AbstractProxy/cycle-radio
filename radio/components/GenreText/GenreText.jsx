'use client'
import Image from 'next/image'
import { useCycleContext } from '../CycleProvider/CycleProvider'
import { motion } from 'framer-motion'
import { getCycleMeta } from '@/utils/mode_check/mode_check'
import React from 'react'

export default function GenreText() {
  const cycle = useCycleContext()

  const { genreSrc, genreAlt } = getCycleMeta(cycle)

  const variants = {
    default: {
      initial: { opacity: 0, y: 10, scale: 0.95, filter: 'blur(4px)' },
      animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, y: -10, scale: 0.95, filter: 'blur(4px)' },
    },
    breakcore: {
      initial: { opacity: 0, scale: 0.95, rotate: -3 },
      animate: {
        opacity: 1,
        scale: [1, 1.05, 1],
        rotate: [0, -1.5, 1.5, 0],
        transition: { duration: 0.6, repeat: 1 },
      },
      exit: { opacity: 0, scale: 0.9, rotate: 5 },
    },
    neurofunk: {
      initial: { opacity: 0, x: 30, textShadow: '0px 0px 0px #0f0' },
      animate: {
        opacity: 1,
        x: 0,
        textShadow: '0px 0px 12px #00ffcc',
      },
      exit: { opacity: 0, x: -30, textShadow: '0px 0px 0px #0f0' },
    },
    techstep: {
      initial: { opacity: 0, scale: 0.95, filter: 'blur(4px)' },
      animate: {
        opacity: 1,
        scale: [1, 1.015, 1],
        filter: ['blur(2px)', 'blur(0px)', 'blur(0px)'],
        x: [0, -1.5, 1.5, 0],
        transition: {
          duration: 0.9,
          ease: 'easeInOut',
          repeat: 1,
        },
      },
      exit: { opacity: 0, scale: 0.95, filter: 'blur(4px)' },
    },
  }

  const selectedVariant = variants[cycle] || variants['default']

  return (
    <div className="flex h-12 w-full items-center justify-center overflow-hidden lg:justify-end">
      <motion.div
        key={cycle}
        initial={selectedVariant.initial}
        animate={selectedVariant.animate}
        exit={selectedVariant.exit}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="text-4xl font-bold"
      >
        <h1 className="sr-only">
          Drum and Bass Subgenres – Liquid, Neurofunk, Jungle & More | Cycle DNB
        </h1>
        <Image
          src={genreSrc}
          alt={genreAlt}
          className="h-[40px] w-[100px] lg:h-[60px] lg:w-[150px]"
          width={150}
          height={60}
        />
      </motion.div>
    </div>
  )
}
