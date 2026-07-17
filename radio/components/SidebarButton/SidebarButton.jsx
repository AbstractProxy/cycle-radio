import { Bars3Icon } from '@heroicons/react/24/solid'
import DesktopSidebar from '../DesktopSidebar/DesktopSidebar'
import MobileSidebar from '../MobileSidebar/MobileSidebar'

export default function SidebarButton({
  isSidebarOpen,
  openSidebar,
  closeSidebar,
  isMobile,
}) {
  const onClickAction = isMobile
    ? isSidebarOpen
      ? closeSidebar
      : openSidebar
    : isSidebarOpen
      ? closeSidebar
      : openSidebar

  return (
    <div className="relative flex justify-end p-2 lg:flex-1">
      <button onClick={onClickAction}>
        <Bars3Icon className={`z-40  h-14 w-14  text-slate-300 `} />
      </button>

      {!isMobile && (
        <DesktopSidebar
          isSidebarOpen={isSidebarOpen}
          closeSidebar={closeSidebar}
        />
      )}

      {isMobile && (
        <MobileSidebar
          isMobileSidebarOpen={isSidebarOpen}
          openMobileSidebar={openSidebar}
          closeMobileSidebar={closeSidebar}
        />
      )}
    </div>
  )
}
