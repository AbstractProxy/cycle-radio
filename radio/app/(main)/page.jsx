'use client'

import PlayStreamButton from '@/components/PlayStreamButton/PlayStreamButton'
import { useState, useRef } from 'react'
import VolumeControl from '@/components/VolumeControl'
import HomePageWrapper from '@/components/HomePageWrapper/HomePageWrapper'
import MapStreamButtons from '@/components/MapStreamButtons/MapStreamButtons'

export default function Home() {
  const [volume, setVolume] = useState(6)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100
    }
  }

  const handlePlayStream = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
      }
      setIsPlaying(false)
    } else {
      if (audioRef.current) {
        audioRef.current.src = 'http://192.168.1.108/stream'
        audioRef.current.volume = volume / 100
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <HomePageWrapper>
      <PlayStreamButton onClick={handlePlayStream} isPlaying={isPlaying} />
      <VolumeControl volume={volume} handleVolumeChange={handleVolumeChange} />

      <MapStreamButtons />

      <audio ref={audioRef} autoPlay />
    </HomePageWrapper>
  )
}
