import { TinyWaveFormIcon } from '../TinyWaveFormIcon'

export default function AboutHeading() {
  return (
    <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
      <TinyWaveFormIcon
        colors={['fill-violet-300', 'fill-pink-300']}
        className="h-2.5 w-2.5"
      />
      <span className="ml-2.5 text-slate-200">About</span>
    </h2>
  )
}

//OK
