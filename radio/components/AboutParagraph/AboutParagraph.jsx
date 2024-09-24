import clsx from 'clsx'

export default function AboutParagraph({ isExpanded }) {
  return (
    <p
      className={clsx(
        'mt-2 text-base leading-7 text-slate-200',
        !isExpanded && 'lg:line-clamp-4',
      )}
    >
      At Cycle Radio, we dive deep into the realms of unparalleled drum and
      bass. Every track is carefully selected to take you on a journey through
      immersive and evocative soundscapes. Tune in and let the music speak for
      itself as we explore the layers of DnB that are often overlooked. Whether
      you’re here for smooth vibes or deeper beats, Cycle Radio is your go-to
      destination for the purest DnB experience. We celebrate the full spectrum
      of drum and bass, from smooth and atmospheric to high-energy and intense.
      Each cycle offers a fresh, dynamic experience, blending intelligent,
      liquid, and neurofunk DnB to create a seamless flow of moods throughout
      the day. Join us and lose yourself in the sound—where every beat tells a
      story.
    </p>
  )
}
//OK
/*


At Cycle Radio, .

*/
