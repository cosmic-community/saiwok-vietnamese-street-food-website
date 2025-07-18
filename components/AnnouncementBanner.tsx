import { RestaurantInfo } from '@/types'

interface AnnouncementBannerProps {
  restaurantInfo: RestaurantInfo
}

export default function AnnouncementBanner({ restaurantInfo }: AnnouncementBannerProps) {
  if (!restaurantInfo.metadata.announcement) {
    return null
  }

  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center text-sm">
      <p>{restaurantInfo.metadata.announcement}</p>
    </div>
  )
}