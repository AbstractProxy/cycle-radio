import { mapTrackProperty } from '@/utils/items_mapping/items_mapping'

export default function MapTrackProperty({ tracks }) {
  return <>{mapTrackProperty(tracks)}</>
}
