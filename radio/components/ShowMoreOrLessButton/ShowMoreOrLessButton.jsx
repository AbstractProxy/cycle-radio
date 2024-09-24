export default function ShowMoreOrLessButton({ isExpanded, setIsExpanded }) {
  return (
    <button
      type="button"
      className="mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? 'Show less' : 'Show more'}
    </button>
  )
}
