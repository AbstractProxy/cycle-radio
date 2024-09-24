import { streamButtonsContent } from '@/utils/content/stream_buttons_content'
import { mapStreamButtons } from '@/utils/items_mapping/items_mapping'

export default function MapStreamButtons() {
  return <>{mapStreamButtons(streamButtonsContent)}</>
}
//OK
