import { RestaurantInfo } from '@/types'

interface AboutProps {
  restaurantInfo: RestaurantInfo
}

export default function About({ restaurantInfo }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {restaurantInfo.metadata.description}
          </p>
        </div>
      </div>
    </section>
  )
}