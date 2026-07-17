'use client'
import { Waveform } from '@/components/Waveform'
import PageWrapper from '@/components/PageWrapper/PageWrapper'
import { useCycleContext } from '@/components/CycleProvider/CycleProvider'
import StreamLink from '@/components/HomeLink/StreamLink'
import { getCycleColor } from '@/utils/mode_check/mode_check'

export default function ThankYouClient() {
  const cycle = useCycleContext()
  const { color } = getCycleColor(cycle)

  return (
    <>
      <Waveform className="absolute left-0 top-0 h-20 w-full" />
      <PageWrapper>
        <div className="relative flex w-full max-w-4xl flex-col items-center text-center">
          <p
            className={`${color}
             text-balance text-4xl font-semibold tracking-tight sm:text-5xl`}
          >
            Thank you for your feedback{' '}
            <span className="text-slate-200">!</span>
          </p>
          <h1 className="mt-4 text-lg font-bold text-slate-200">
            We’ve received your message and will get back to you as soon as
            possible.
          </h1>

          <StreamLink color={getCycleColor(cycle, true).color} />
        </div>
      </PageWrapper>
    </>
  )
}
