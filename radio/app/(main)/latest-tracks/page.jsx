import { Container } from '@/components/Container/Container'
import StreamLink from '@/components/HomeLink/HomeLink'
import LatestTracksHeading from '@/components/LatestTracksHeading/LatestTracksHeading'
import MapTrackProperty from '@/components/MapTrackProperty/MapTrackProperty'
import { getLatestTracks } from '@/lib/tracks'

export default async function Page() {
  let tracks = await getLatestTracks()

  console.log('Tracks: ', tracks)

  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <Container>
        <LatestTracksHeading />
      </Container>
      <MapTrackProperty tracks={tracks} />
      <StreamLink />
    </div>
  )
}
