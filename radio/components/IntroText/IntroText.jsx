import Link from 'next/link'

export default function IntroText() {
  return (
    <div className="mt-10 text-center lg:mt-12 lg:text-left">
      <p className="text-xl font-bold text-slate-200">
        <Link href="/">See other side</Link>
      </p>
      <p className="mt-3 text-lg font-medium leading-8 text-slate-200">
        Welcome to <strong>Cycle DNB Radio</strong> – your underground
        <strong> drum and bass radio station</strong> streaming 24/7. From deep
        <strong> liquid DnB</strong> to raw <strong>neurofunk</strong> and
        breakcore sounds, we bring you non-stop beats. Listen live and explore
        the shifting phases of true <strong>DNB culture</strong>.
      </p>
    </div>
  )
}
