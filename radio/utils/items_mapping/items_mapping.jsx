import React from 'react'
import StreamButton from '@/components/StreamButton/StreamButton'
import TrackProperty from '@/components/TrackProperty/TrackProperty'

export const mapStreamButtons = (data) => {
  return (
    <div className="mb-4 mt-4 flex items-center justify-center gap-6">
      {data.map((item, index) => (
        <StreamButton
          key={index}
          url={item.url}
          icon={item.icon}
          label={item.label}
          data={data}
          index={index}
        />
      ))}
    </div>
  )
}

export const mapTrackProperty = (data) => {
  return (
    <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
      {data.map((item) => (
        <TrackProperty key={item.id} track={item} />
      ))}
    </div>
  )
}
