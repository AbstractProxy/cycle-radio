import ShowMoreOrLessButton from '../ShowMoreOrLessButton/ShowMoreOrLessButton'

export default function ExpandButton({ isExpanded, setIsExpanded }) {
  return !isExpanded ? (
    <ShowMoreOrLessButton
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
    />
  ) : (
    <ShowMoreOrLessButton
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
    />
  )
}
//OK
