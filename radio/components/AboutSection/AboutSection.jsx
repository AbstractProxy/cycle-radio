import { TinyWaveFormIcon } from '../TinyWaveFormIcon'

export function AboutSection() {
  return (
    <section className="mt-12 lg:block">
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWaveFormIcon
          colors={['fill-slate-300', 'fill-gray-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5 text-slate-200">About</span>
      </h2>

      <p className="mt-2 text-base leading-7 text-slate-200">
        Cycle DNB Radio is a 24/7 <strong>drum and bass radio station</strong>{' '}
        broadcasting worldwide. Our mission is to deliver the purest forms of{' '}
        <strong>liquid</strong>, <strong>neurofunk</strong>,{' '}
        <strong>jungle</strong>, and <strong>breakcore DnB</strong>, carefully
        selected to guide you through immersive and evolving soundscapes.
        Whether you&apos;re into smooth rhythms or raw, high-energy beats, our{' '}
        <strong>online DnB stream</strong> offers a seamless flow of styles that
        shift with each cycle throughout the day. Tune in to the sounds that
        define the underground and experience the full spectrum of modern{' '}
        <strong>DnB culture</strong>. No ads, no noise—just pure drum and bass.
      </p>

      <br />
    </section>
  )
}
