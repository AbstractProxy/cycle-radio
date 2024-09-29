import {
  PauseIcon,
  PlayIcon,
  TrackPauseIcon,
  TrackPlayIcon,
} from '@/utils/content/track_content'
import { TrackActionButton } from '../TrackActionButton/TrackActionButton'

export default function TrackPlayOrPauseButton({
  episode,
  buttonStyle,
  actionIconStyle,
  isSingleEpisode,
}) {
  return (
    <TrackActionButton
      episode={episode}
      className={buttonStyle}
      playing={
        <>
          {isSingleEpisode ? (
            <PauseIcon className={actionIconStyle} />
          ) : (
            <>
              <TrackPauseIcon className={actionIconStyle} />
              <span aria-hidden="true">Play</span>
            </>
          )}
        </>
      }
      paused={
        <>
          {isSingleEpisode ? (
            <PlayIcon className={actionIconStyle} />
          ) : (
            <>
              <TrackPlayIcon className={actionIconStyle} />
              <span aria-hidden="true">Play</span>
            </>
          )}
        </>
      }
    />
  )
}

//OK
