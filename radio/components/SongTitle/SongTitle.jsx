import React from 'react'

function SongTitle({ song }) {
  return (
    <div className="mt-5 text-base text-white">
      <p>{song}</p>
      {/* {console.log('🎵 Pesma na ekranu:', song)} */}
    </div>
  )
}

export default React.memo(SongTitle)
