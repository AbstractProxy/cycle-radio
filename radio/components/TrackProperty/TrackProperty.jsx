import { FormattedDate } from '../FormattedDate/FormattedDate'
import TrackWrapper from '../TrackWrapper/TrackWrapper'
import TrackHeading from '../TrackHeading/TrackHeading'
import TrackPlayOrPauseButton from '../TrackPlayOrPauseButton/TrackPlayOrPauseButton'
import TrackDetails from '../TrackDetails/TrackDetails'

export default function TrackProperty({ track }) {
  const actionIconStyle = 'h-2.5 w-2.5 fill-current'

  let date = new Date(track.published)

  return (
    <TrackWrapper id={track.id}>
      <TrackHeading id={track.id} title={track.title} />
      <FormattedDate
        date={date}
        className="order-first font-mono text-sm leading-7 text-slate-500"
      />
      <p className="mt-1 text-base leading-7 text-slate-200">
        {track.description}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <TrackPlayOrPauseButton
          episode={track}
          buttonStyle={
            'flex items-center gap-x-3 text-sm font-bold leading-6 neurofunk:text-green-500 neurofunk:hover:text-green-700 text-pink-500 hover:text-pink-700 active:text-pink-900 neurofunk:active:text-green-900'
          }
          actionIconStyle={actionIconStyle}
          isSingleEpisode={false}
        />
        <span aria-hidden="true" className="text-sm font-bold text-slate-400">
          /
        </span>
        <TrackDetails id={track.id} title={track.title} />
      </div>
    </TrackWrapper>
  )
}

//OK
