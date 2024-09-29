import Link from 'next/link'

export default function TrackHeading({ id, title, isSingleEpisode }) {
  return isSingleEpisode ? (
    <h1 className="mt-2 text-4xl font-bold text-slate-200">{title}</h1>
  ) : (
    <h2
      id={`episode-${id}-title`}
      className="mt-2 text-lg font-bold text-slate-200"
    >
      <Link href={`/${id}`}>{title}</Link>
    </h2>
  )
}
//OK
