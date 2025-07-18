import { RestaurantInfo } from '@/types'

interface AboutProps {
  restaurantInfo: RestaurantInfo
}

export default function About({ restaurantInfo }: AboutProps) {
  const about = restaurantInfo.metadata?.about

  if (!about) {
    return null
  }

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            About <span className="text-red-500">Saiwok</span>
          </h2>
          
          <div className="text-lg text-gray-300 leading-relaxed space-y-6 max-w-3xl mx-auto">
            <p>
              Saiwok Vietnamese Street Food brings authentic Vietnamese flavors to your neighborhood. Our fresh, 
              made-to-order dishes feature traditional recipes with a modern twist, from classic pho and banh mi to 
              customizable Vietnamese bowls.
            </p>
            
            <p>
              We pride ourselves on using fresh ingredients, house-made sauces, and traditional cooking methods to 
              deliver the true taste of Vietnamese street food.
            </p>
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">
                Fresh ingredients, bold flavors, and authentic Vietnamese recipes
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}