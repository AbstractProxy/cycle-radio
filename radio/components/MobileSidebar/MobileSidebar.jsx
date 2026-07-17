'use client'

import React from 'react'
import SidebarMotion from '../SidebarMotion/SidebarMotion'
import PosterImage from '../PosterImage/PosterImage'
import ActionButton from '../ActionButton/ActionButton'
import SidebarClosingIcon from '../SidebarClosingIcon/SidebarClosingIcon'
import { useCycleContext } from '../CycleProvider/CycleProvider'
import { MobileSidebarContent } from '@/utils/items_mapping/items_mapping'
import {
  sidebarNavigation,
  sidebarSecondNavigation,
} from '@/utils/content/sidebarNavContent'
import { getCycleColor } from '@/utils/mode_check/mode_check'
import CurrentCycle from '../CurrentCycle/CurrentCycle'

export default function MobileSidebar({
  isMobileSidebarOpen,
  closeMobileSidebar,
}) {
  const cycle = useCycleContext()

  const { icon } = getCycleColor(cycle, false, true)

  return (
    <>
      <SidebarMotion isOpen={isMobileSidebarOpen}>
        <div className="fixed inset-0 z-40 flex">
          <div className="relative flex w-full  flex-1 flex-col border border-gray-800 bg-black pb-4 pt-5">
            <ActionButton
              handleEvent={closeMobileSidebar}
              divStyle={'flex h-16 shrink-0 items-center p-3'}
              svgIcon={<SidebarClosingIcon />}
            />
            <PosterImage />
            <nav className="mt-5 flex-1 overflow-y-auto px-2">
              <MobileSidebarContent
                data={sidebarNavigation}
                iconStyle={`${icon} mr-3`}
              />
              <br />
              <div className="text-xs font-semibold leading-6 text-gray-400">
                Visit us on
              </div>
              <MobileSidebarContent
                data={sidebarSecondNavigation}
                isSecondNav={true}
                iconStyle={`${icon}`}
              />
            </nav>
            <CurrentCycle />
          </div>
        </div>
      </SidebarMotion>
    </>
  )
}
