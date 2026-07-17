'use client'
import { useCallback } from 'react'
import { usePlayBack } from '@/components/PlaybackProvider/PlaybackProvider'
import { useCycleContext } from '@/components/CycleProvider/CycleProvider'
import { streamButtonsContent } from '@/utils/content/stream_buttons_content'
import VolumeControl from '@/components/VolumeControl'
import PlayStreamButton from '@/components/PlayStreamButton/PlayStreamButton'
import MapStreamButtons from '@/utils/items_mapping/items_mapping'
import SongTitle from '@/components/SongTitle/SongTitle'

export default function Home() {
  const cycle = useCycleContext()

  const { isPlaying, play, pause, volume, setVolume, song } = usePlayBack()

  const handleVolumeChange = useCallback(
    (newVolume) => {
      setVolume(newVolume)
    },
    [setVolume],
  )

  const handlePlayStream = useCallback(() => {
    isPlaying ? pause() : play()
  }, [isPlaying, pause, play])

  return (
    <div className="flex flex-col items-center justify-between md:h-screen">
      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-col items-center">
          <PlayStreamButton onClick={handlePlayStream} isPlaying={isPlaying} />
          <SongTitle song={song} />
          <VolumeControl
            cycle={cycle}
            volume={volume}
            handleVolumeChange={handleVolumeChange}
          />
          <MapStreamButtons data={streamButtonsContent} />
        </div>
      </div>
    </div>
  )
}
