'use client'

import { useAudioPlayer } from '@/components/AudioProvider/AudioProvider'

export function TrackActionButton({ episode, playing, paused, ...props }) {
  let player = useAudioPlayer(episode)

  return (
    <button
      type="button"
      onClick={() => player.toggle()}
      aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${
        episode.title
      }`}
      {...props}
    >
      {player.playing ? playing : paused}
    </button>
  )
}
//OK
