export default function ActionButton({
  handleEvent,
  divStyle,
  buttonStyle,
  svgIcon,
}) {
  return (
    <div className={divStyle}>
      <button type="button" onClick={handleEvent} className={buttonStyle}>
        {svgIcon}
      </button>
    </div>
  )
}
