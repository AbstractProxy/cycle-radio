import { PlayIcon } from '@/utils/content/track_content'
import { PauseIcon } from '@/utils/content/track_content'

export function PlayButton({ player }) {
  let Icon = player?.playing ? PauseIcon : PlayIcon

  return (
    <button
      type="button"
      className="group relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 md:h-14 md:w-14"
      onClick={() => player.toggle()}
      aria-label={player?.playing ? 'Pause' : 'Play'}
    >
      <div className="absolute -inset-3 md:hidden" />
      <Icon className="h-5 w-5 fill-black group-active:fill-white/80 md:h-7 md:w-7" />
    </button>
  )
}
