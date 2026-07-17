'use client'
import { useCycleContext } from '@/components/CycleProvider/CycleProvider'
import PageWrapper from '@/components/PageWrapper/PageWrapper'
import FramerHeader from '@/components/FramerHeader/FramerHeader'
import StreamLink from '@/components/HomeLink/StreamLink'
import Timeline from '@/components/Timeline/Timeline'
import { Waveform } from '@/components/Waveform'
import { getCycleColor } from '@/utils/mode_check/mode_check'

export default function AboutDNBClient() {
  const cycle = useCycleContext()

  return (
    <>
      <Waveform className="absolute left-0 top-0 h-20 w-full" />
      <PageWrapper>
        <div className="relative flex w-full max-w-6xl flex-col items-center text-center text-slate-200">
          <FramerHeader />
          <Timeline cycle={cycle} />
          <StreamLink color={getCycleColor(cycle, true).color} />
        </div>
      </PageWrapper>
    </>
  )
}
