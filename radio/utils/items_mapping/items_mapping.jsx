import React from 'react'
import StreamButton from '@/components/StreamButton/StreamButton'

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
