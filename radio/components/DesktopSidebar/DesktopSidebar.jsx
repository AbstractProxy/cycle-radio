import ActionButton from '../ActionButton/ActionButton'
import MapSidebarLinks from '../MapSidebarLinks/MapSidebarLinks'
import SidebarClosingIcon from '../SidebarClosingIcon/SidebarClosingIcon'
import SidebarMotion from '../SidebarMotion/SidebarMotion'
import CurrentCycle from '../CurrentCycle/CurrentCycle'

export default function DesktopSidebar({ isSidebarOpen, closeSidebar }) {
  return (
    <SidebarMotion isOpen={isSidebarOpen} isDesktopSidebar={true}>
      <div className="hidden xl:fixed xl:inset-y-0 xl:right-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 ring-1 ring-white/5">
          <ActionButton
            handleEvent={closeSidebar}
            divStyle={'flex h-16 shrink-0 items-center'}
            svgIcon={<SidebarClosingIcon />}
          />

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <MapSidebarLinks closeSidebar={closeSidebar} />
              <CurrentCycle />
            </ul>
          </nav>
        </div>
      </div>
    </SidebarMotion>
  )
}
