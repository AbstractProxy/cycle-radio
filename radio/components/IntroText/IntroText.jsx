import Link from 'next/link'

export default function IntroText() {
  return (
    <div className="mt-10 text-center lg:mt-12 lg:text-left">
      <p className="text-xl font-bold text-slate-200">
        <Link href="/">See other side</Link>
      </p>
      <p className="mt-3 text-lg font-medium leading-8 text-slate-200">
        Explore the untold stories of those who have been tragically
        misunderstood in the world of liquid and atmospheric drum and bass. Join
        us as we dive into the depths of their experiences, shedding light on
        the human side behind the beats.
      </p>
    </div>
  )
}

//OK
