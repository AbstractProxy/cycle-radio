import { TinyWaveFormIcon } from '../TinyWaveFormIcon'
import VisitUsSocial from '../VisitUsSocial/VisitUsSocial'

export default function VisitUs() {
  return (
    <section className="mt-10 lg:mt-12">
      <h2 className="hidden items-center font-mono text-sm font-medium leading-7 text-slate-200 lg:flex">
        <TinyWaveFormIcon
          colors={['fill-indigo-300', 'fill-blue-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5 text-slate-200">Visit us on:</span>
      </h2>

      <VisitUsSocial />
    </section>
  )
}
