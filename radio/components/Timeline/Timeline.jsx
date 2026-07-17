'use client'

import { motion } from 'framer-motion'
import { timelineDataSeo } from '@/utils/seo/content/timelineDataSeo'
import { getCycleColor } from '@/utils/mode_check/mode_check'
import Image from 'next/image'

export default function Timeline({ cycle }) {
  const { color } = getCycleColor(cycle)

  const MotionImage = motion(Image)

  return (
    <section
      className="bg-black py-6 text-white"
      aria-label="Timeline of Drum and Bass evolution with key genres and history"
    >
      <div className="mx-auto  max-w-6xl  px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">
          The Evolution of Drum & Bass
        </h2>
        <div className="space-y-12 border-l border-white/20 pl-6">
          {timelineDataSeo.map((item, index) => (
            <motion.div
              key={index}
              id={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <p className={`text-md font-semibold uppercase ${color}`}>
                {item.year}
              </p>
              <h3 className="mt-1 text-3xl font-bold">{item.title}</h3>
              <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center">
                {item.image && (
                  <MotionImage
                    src={item.image}
                    alt={`${item.title} genre illustration`}
                    width={1024}
                    height={469}
                    className="max-h-[250px] w-full rounded-xl object-cover shadow-xl transition-transform duration-300 hover:scale-105 md:w-1/2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    loading="lazy"
                  />
                )}

                <p className="text-gray-300 md:w-1/2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
