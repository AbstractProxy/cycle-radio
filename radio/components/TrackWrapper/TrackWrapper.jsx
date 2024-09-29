import { Container } from '../Container/Container'

export default function TrackWrapper({ id, children, isSingleEpisode }) {
  return isSingleEpisode ? (
    <article className="py-16 lg:py-36">
      <Container>{children}</Container>
    </article>
  ) : (
    <article aria-labelledby={`episode-${id}-title`} className="py-10 sm:py-12">
      <Container>
        <div className="flex flex-col items-start">{children}</div>
      </Container>
    </article>
  )
}
//OK
