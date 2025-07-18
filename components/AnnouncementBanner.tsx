import { RestaurantSettings } from '@/types'

interface AnnouncementBannerProps {
  restaurantSettings: RestaurantSettings | null
}

export default function AnnouncementBanner({ restaurantSettings }: AnnouncementBannerProps) {
  if (!restaurantSettings?.metadata.announcement) {
    return null
  }

  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center text-sm">
      <div 
        dangerouslySetInnerHTML={{ __html: restaurantSettings.metadata.announcement }}
      />
    </div>
  )
}