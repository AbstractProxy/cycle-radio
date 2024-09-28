import { PauseIcon, PlayIcon } from '@/utils/content/track_content'

export default function PlayStreamButton({ onClick, isPlaying }) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="group relative mt-10 flex h-48 w-48 flex-shrink-0 items-center  justify-center  rounded-full border-4 border-black bg-slate-200 shadow-lg hover:bg-slate-300 md:h-48 md:w-48"
        aria-label={''}
      >
        <div className="absolute -inset-3 md:hidden" />
        {isPlaying ? (
          <PauseIcon className="h-28 w-28 group-active:fill-white/80 md:h-28 md:w-28" />
        ) : (
          <PlayIcon className="h-28 w-28 group-active:fill-white/80 md:h-28 md:w-28" />
        )}
      </button>
    </>
  )
}
//OK
