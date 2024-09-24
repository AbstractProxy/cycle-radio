import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'

export default function VolumeControl({ volume, handleVolumeChange }) {
  return (
    <div className="mt-11 flex items-center">
      <div className="volume-icon mr-4 text-white">
        {volume === 0 ? (
          <SpeakerXMarkIcon
            className="h-6 w-6 text-slate-200"
            onClick={() => handleVolumeChange(5)}
          />
        ) : (
          <SpeakerWaveIcon
            className="h-6 w-6 text-slate-200"
            onClick={() => handleVolumeChange(0)}
          />
        )}
      </div>
      <div className="volume-bar flex gap-1">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`bar h-4 w-2 ${i < volume ? 'bg-pink-500' : 'bg-white'}`}
            onClick={() => handleVolumeChange(i + 1)}
          ></div>
        ))}
      </div>
    </div>
  )
}
