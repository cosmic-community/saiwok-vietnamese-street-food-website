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
            <h3 className="text-xl font-semibold mb-4">
              {restaurantInfo.metadata.restaurant_name}
            </h3>
            <p className="text-gray-300">
              Authentic Vietnamese street food made with fresh ingredients and traditional recipes.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>{restaurantInfo.metadata.address}</p>
              <p>{restaurantInfo.metadata.phone}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            {restaurantInfo.metadata.hours ? (
              <div 
                className="text-gray-300"
                dangerouslySetInnerHTML={{ __html: restaurantInfo.metadata.hours }}
              />
            ) : (
              <p className="text-gray-300">Please call for hours</p>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {restaurantInfo.metadata.restaurant_name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}