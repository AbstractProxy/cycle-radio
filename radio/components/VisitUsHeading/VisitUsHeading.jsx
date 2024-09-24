import { TinyWaveFormIcon } from '../TinyWaveFormIcon'

export default function VisitUsHeading() {
  return (
    <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
      <TinyWaveFormIcon
        colors={['fill-indigo-300', 'fill-blue-300']}
        className="h-2.5 w-2.5"
      />
      <span className="ml-2.5 text-slate-200">Visit us on:</span>
    </h2>
  )
}
//OK
