import Link from 'next/link'

export default function StreamLink({ color }) {
  return (
    <div className="flex justify-center">
      <Link
        href={'/'}
        className={`${color}  mb-4 mt-4 text-sm font-bold leading-6 lg:inline-block`}
      >
        Return to stream
      </Link>
    </div>
  )
}
