import { XMarkIcon } from '@heroicons/react/24/outline'

export default function MobileSidebarClosingButton({ closeMobileSidebar }) {
  return (
    <div className="absolute right-0 top-0 -mr-12 pt-2">
      <button
        type="button"
        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        onClick={closeMobileSidebar}
      >
        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
      </button>
    </div>
  )
}
