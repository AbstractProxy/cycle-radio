import Link from 'next/link'

export default function LatestTracksLink() {
  return (
    <Link
      href={'latest-tracks'}
      className="mt-2  text-sm font-bold leading-6 text-pink-500 neurofunk:text-green-500 hover:text-pink-700 neurofunk:hover:text-green-700 lg:inline-block"
    >
      See latest played tracks
    </Link>
  )
}
//OK
