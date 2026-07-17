import { mapSidebarContent } from '@/utils/items_mapping/items_mapping'

export default function MapSidebarContent({
  closeSidebar,
  isSecondNav,
  data,
  ulStyle,
  linkStyle,
  iconStyle,
  spanStyle,
}) {
  return (
    <>
      {mapSidebarContent(
        closeSidebar,
        isSecondNav,
        data,
        ulStyle,
        linkStyle,
        iconStyle,
        spanStyle,
      )}
    </>
  )
}
