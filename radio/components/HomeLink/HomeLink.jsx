import Link from 'next/link'

export default function StreamLink() {
  return (
    <div className="flex justify-center">
      <Link
        href={'/'}
        className="text-sm font-bold leading-6 text-pink-500 neurofunk:text-green-500 hover:text-pink-700 neurofunk:hover:text-green-700 lg:inline-block"
      >
        Return to stream
      </Link>
    </div>
  )
}
