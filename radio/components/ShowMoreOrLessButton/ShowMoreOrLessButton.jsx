export default function ShowMoreOrLessButton({ isExpanded, setIsExpanded }) {
  return (
    <button
      type="button"
      className="neurofunk:text-green-500 neurofunk:hover:text-green-700 mt-2 hidden text-sm font-bold leading-6 text-pink-500 transition-colors duration-300 hover:text-pink-700 lg:inline-block"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? 'Show less' : 'Show more'}
    </button>
  )
}
