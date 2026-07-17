// app/providers.jsx ili .tsx
'use client'

import { CycleProvider } from '@/components/CycleProvider/CycleProvider'
import { PlaybackProvider } from '@/components/PlaybackProvider/PlaybackProvider'

export function Providers({ children }) {
  return (
    <CycleProvider>
      <PlaybackProvider>{children}</PlaybackProvider>
    </CycleProvider>
  )
}
