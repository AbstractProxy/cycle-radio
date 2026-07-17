import GenreText from '../GenreText/GenreText'

export default function CurrentCycle() {
  return (
    <li className="-mx-6 mt-auto">
      <div className="flex flex-col items-center justify-center gap-y-2 px-6 py-3 text-center text-sm font-semibold leading-6 text-white">
        <span aria-hidden="true">
          Current Cycle: <br /> <GenreText />
        </span>
      </div>
    </li>
  )
}
