'use client'
import { useState } from 'react'
import AboutParagraph from '../AboutParagraph/AboutParagraph'
import AboutHeading from '../AboutHeading/AboutHeading'
import ExpandButton from '../ExpandButton/ExpandButton'

export function AboutSection(props) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <AboutHeading />
      <AboutParagraph isExpanded={isExpanded} />
      <ExpandButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </section>
  )
}

//OK
