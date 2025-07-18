import { RestaurantInfo } from '@/types'

interface FooterProps {
  restaurantInfo: RestaurantInfo
}

export default function Footer({ restaurantInfo }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {restaurantInfo.metadata.logo && (
                <img
                  src={`${restaurantInfo.metadata.logo.imgix_url}?w=40&h=40&fit=crop&auto=format,compress`}
                  alt={restaurantInfo.metadata.restaurant_name}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <span className="text-xl font-bold">
                {restaurantInfo.metadata.restaurant_name}
              </span>
            </div>
            <p className="text-gray-400">
              {restaurantInfo.metadata.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>{restaurantInfo.metadata.address}</p>
              <p>{restaurantInfo.metadata.phone}</p>
              <p>{restaurantInfo.metadata.email}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <p className="text-gray-400">{restaurantInfo.metadata.hours}</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {restaurantInfo.metadata.restaurant_name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}