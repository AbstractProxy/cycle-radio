import Link from 'next/link'

export default function TrackDetails({ id, title }) {
  return (
    <Link
      href={`/${id}`}
      className="flex items-center text-sm font-bold leading-6 text-pink-500 neurofunk:text-green-500 hover:text-pink-700 neurofunk:hover:text-green-700 active:text-pink-900 neurofunk:active:text-green-900"
      aria-label={`Show notes for episode ${title}`}
    >
      Details
    </Link>
  )
}
//OK
