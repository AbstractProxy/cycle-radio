import React from 'react'
import StreamButton from '@/components/StreamButton/StreamButton'

import Link from 'next/link'

function MapStreamButtons({ data }) {
  return (
    <div className="mb-4 mt-4 flex items-center justify-center gap-6">
      {data.map((item, index) => (
        <StreamButton
          key={index}
          url={item.url}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </div>
  )
}

export const mapSidebarContent = (
  closeSidebar,
  isSecondNav,
  data,
  ulStyle,
  linkStyle,
  iconStyle,
  spanStyle,
) => {
  return (
    <ul role="list" className={ulStyle}>
      {data.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            target={item.target || '_self'}
            rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
            className={linkStyle}
            onClick={closeSidebar}
          >
            {isSecondNav ? (
              <>
                <item.icon aria-hidden="true" className={spanStyle} />
                <span className="truncate">{item.name}</span>
              </>
            ) : (
              <>
                <item.icon aria-hidden="true" className={`mr-3 ${iconStyle}`} />
                {item.name}
              </>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
export const MobileSidebarContent = ({ data, iconStyle, isSecondNav }) => {
  return (
    <ul role="list" className="space-y-1">
      {data.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="group flex items-center rounded-md px-2 py-2 text-base font-medium  hover:bg-gray-800 hover:text-white"
          >
            {isSecondNav ? (
              <>
                <item.icon
                  aria-hidden="true"
                  className="mr-2 h-7 w-7 fill-slate-400 group-hover:fill-slate-600"
                />
                <span className="truncate">{item.name}</span>
              </>
            ) : (
              <>
                <item.icon className={iconStyle} aria-hidden="true" />
                {item.name}
              </>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}

// export const mapTrackProperty = (data) => {
//   return (
//     <div className="divide-y divide-gray-600 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
//       {data.map((item) => (
//         <TrackProperty key={item.id} track={item} />
//       ))}
//     </div>
//   )
// }

export default React.memo(MapStreamButtons)
