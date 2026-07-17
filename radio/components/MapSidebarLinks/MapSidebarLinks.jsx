import {
  sidebarNavigation,
  sidebarSecondNavigation,
} from '@/utils/content/sidebarNavContent'
import MapSidebarContent from '../MapSidebarContent/MapSidebarContent'
import { useCycleContext } from '../CycleProvider/CycleProvider'
import { getCycleColor } from '@/utils/mode_check/mode_check'
import React from 'react'

export const mainNavigationStyles = {
  ul: '-mx-2 space-y-1',
  link: 'text-gray-400 hover:bg-gray-800 hover:text-white group flex  rounded-md p-2 text-sm font-semibold leading-6',
  heading: 'text-xs font-semibold leading-6 text-gray-400',
}

export const secondaryNavigationStyles = {
  ul: '-mx-2 mt-2 space-y-1',
  link: mainNavigationStyles.link,
  span: 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white',
}

export default function MapSidebarLinks({ closeSidebar }) {
  const cycle = useCycleContext()

  const { icon } = getCycleColor(cycle, false, false)

  return (
    <li>
      <MapSidebarContent
        closeSidebar={closeSidebar}
        isSecondNav={false}
        data={sidebarNavigation}
        ulStyle={mainNavigationStyles.ul}
        linkStyle={mainNavigationStyles.link}
        iconStyle={icon}
      />
      <br />
      <div className="text-xs font-semibold leading-6 text-gray-400">
        Visit us on
      </div>{' '}
      <MapSidebarContent
        closeSidebar={closeSidebar}
        isSecondNav={true}
        data={sidebarSecondNavigation}
        ulStyle={secondaryNavigationStyles.ul}
        linkStyle={secondaryNavigationStyles.link}
        iconStyle={secondaryNavigationStyles.iconStyle}
        spanStyle={`${secondaryNavigationStyles.span} fill-slate-200 mr-3`}
      />
    </li>
  )
}
