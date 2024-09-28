import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import '../styles/tailwind.css'

export default function VolumeControl({ volume, handleVolumeChange }) {
  return (
    <div className="mt-11 flex items-center justify-center">
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
      <Slider
        min={0}
        max={20}
        value={volume}
        onChange={handleVolumeChange}
        style={{ width: '250px' }}
      />
    </div>
  )
}
