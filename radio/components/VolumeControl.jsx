import ElasticSlider from './ElasticSlider/ElasticSlider'
import '../styles/tailwind.css'
import React from 'react'

function VolumeControl({ cycle, volume, handleVolumeChange }) {
  return (
    <div className="mt-4 flex items-center justify-center">
      <div
        className={`relative flex h-16 w-60 flex-col items-center justify-center gap-4 overflow-visible`}
      >
        <ElasticSlider
          cycle={cycle}
          defaultValue={volume}
          startingValue={0}
          maxValue={20}
          isStepped={true}
          stepSize={1}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  )
}

export default React.memo(VolumeControl)
