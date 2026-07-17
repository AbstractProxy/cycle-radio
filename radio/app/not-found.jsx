'use client'
import { Waveform } from '@/components/Waveform'
import PageWrapper from '@/components/PageWrapper/PageWrapper'
import { useCycleContext } from '@/components/CycleProvider/CycleProvider'
import StreamLink from '@/components/HomeLink/StreamLink'
import { getCycleColor } from '@/utils/mode_check/mode_check'

export default function NotFound() {
  const cycle = useCycleContext()
  const { color } = getCycleColor(cycle)

  return (
    <>
      <Waveform
        className="absolute left-0 top-0 h-20 w-full"
        isSidebarHidden={true}
      />

      <PageWrapper>
        <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center px-4 sm:px-6 lg:px-0">
          <p className={`${color} font-mono text-4xl leading-7`}>404</p>
          <h1 className="mt-4 text-lg font-bold text-slate-200">
            Page not found
          </h1>
          <p className="mt-2 text-base leading-7 text-slate-200">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <StreamLink color={getCycleColor(cycle, true).color} />
        </div>
      </PageWrapper>
    </>
  )
}
