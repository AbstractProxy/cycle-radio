'use client'

import { motion } from 'framer-motion'
import React from 'react'

function FramerHeader() {
  return (
    <div className="relative flex h-[60vh] items-center justify-center bg-cover bg-center text-white">
      <motion.div
        className="rounded-xl bg-black/50 p-6 text-center backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-bold md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          The Story of Drum & Bass
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          From underground clubs to worldwide waves.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default React.memo(FramerHeader)
