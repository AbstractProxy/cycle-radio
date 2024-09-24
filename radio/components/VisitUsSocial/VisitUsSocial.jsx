import {
  InstagramIcon,
  RSSIcon,
  SoundcloudIcon,
  SpotifyIcon,
} from '@/utils/visit_icons/visit_icons'
import Link from 'next/link'

export default function VisitUsSocial() {
  return (
    <>
      <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
      <ul
        role="list"
        className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-200 sm:gap-8 lg:flex-col lg:gap-4"
      >
        {[
          ['Spotify', SpotifyIcon, ''],
          [
            'Instagram',
            InstagramIcon,
            'https://www.instagram.com/cycleradio.fm/',
          ],
          ['Soundcloud', SoundcloudIcon, ''],
          ['RSS Feed', RSSIcon, ''],
        ].map(([label, Icon, url]) => (
          <li key={label} className="flex">
            <Link
              href={url}
              className="group flex items-center"
              aria-label={label}
              target="_blanc"
            >
              <Icon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
              <span className="hidden sm:ml-3 sm:block">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
//OK
