'use client'
import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react'
import { useCycleContext } from '../CycleProvider/CycleProvider'
import { getCycleMeta } from '@/utils/mode_check/mode_check'

const PlaybackContext = createContext()

export const PlaybackProvider = ({ children }) => {
  const cycle = useCycleContext()
  const { src } = getCycleMeta(cycle)
  const audioRef = useRef(null)
  const socketRef = useRef(null)
  const pingIntervalRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [song, setSong] = useState('')
  const [volume, setVolume] = useState(6)

  useEffect(() => {
    socketRef.current = new WebSocket('wss://cycle-radio.com/ws')

    socketRef.current.onopen = () => {
      // console.log('✅ WebSocket konekcija otvorena')

      pingIntervalRef.current = setInterval(() => {
        if (socketRef.current.readyState === WebSocket.OPEN) {
          socketRef.current.send('ping')
          // console.log('📤 Ping poslat serveru')
        }
      }, 30000)
    }

    socketRef.current.onmessage = (event) => {
      const data = event.data.trim()
      // console.log('📥 Primljeni podaci:', data)
      setSong((prev) => (prev !== data ? data : prev))
    }

    socketRef.current.onerror = (err) => {
      console.error('❌ Greška sa WebSocket-om:', err)
    }

    socketRef.current.onclose = () => {
      // console.log('🔌 WebSocket konekcija zatvorena')
      clearInterval(pingIntervalRef.current)
    }

    return () => {
      clearInterval(pingIntervalRef.current)
      if (socketRef.current) {
        socketRef.current.close()
      }
    }
  }, [])

  useEffect(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: song || 'Cycle FM',
        artist: 'Cycle FM',
        artwork: [
          {
            src: src,
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: src,
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: src,
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: src,
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: src,
            sizes: '1024x1024',
            type: 'image/png',
          },
        ],
      })

      const audio = audioRef.current
      if (!audio) return

      navigator.mediaSession.setActionHandler('play', () => {
        audio.play()
        setIsPlaying(true)
      })

      navigator.mediaSession.setActionHandler('pause', () => {
        audio.pause()
        setIsPlaying(false)
      })

      navigator.mediaSession.setActionHandler('stop', () => {
        audio.pause()
        audio.currentTime = 0
        setIsPlaying(false)
      })
    }
  }, [song, src])

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.src = 'https://cycle-radio.com/stream'
      audioRef.current.volume = volume / 100
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [volume])

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ''
      setIsPlaying(false)
    }
  }, [])

  const setVolumeLevel = (newVolume) => {
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100
    }
  }
  return (
    <PlaybackContext.Provider
      value={{
        isPlaying,
        play,
        pause,
        volume,
        setVolume: setVolumeLevel,
        song,
      }}
    >
      {children}
      <audio ref={audioRef} autoPlay />
    </PlaybackContext.Provider>
  )
}

export const usePlayBack = () => useContext(PlaybackContext)
