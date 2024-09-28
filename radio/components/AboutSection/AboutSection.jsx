'use client'
import { useState } from 'react'
import AboutParagraph from '../AboutParagraph/AboutParagraph'
import AboutHeading from '../AboutHeading/AboutHeading'
import ExpandButton from '../ExpandButton/ExpandButton'

export function AboutSection() {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="mt-12  lg:block">
      <AboutHeading />
      <AboutParagraph isExpanded={isExpanded} />
      <ExpandButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </section>
  )
}
