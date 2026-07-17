'use client'

import DynamicScrollbarClass from '../DynamicScrollbarClass/DynamicScrollbarClass'

export default function AppWrapper({ children }) {
  return (
    <>
      <DynamicScrollbarClass />
      {children}
    </>
  )
}
