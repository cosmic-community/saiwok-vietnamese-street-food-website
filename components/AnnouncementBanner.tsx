import { RestaurantInfo } from '@/types'

export interface AnnouncementBannerProps {
  restaurantInfo: RestaurantInfo
}

export default function AnnouncementBanner({ restaurantInfo }: AnnouncementBannerProps) {
  const announcement = restaurantInfo.metadata?.announcement
  
  if (!announcement) {
    return null
  }

  return (
    <div className="bg-accent text-white py-3 px-4 text-center relative">
      <div 
        className="font-medium text-sm md:text-base"
        dangerouslySetInnerHTML={{ __html: announcement }}
      />
    </div>
  )
}