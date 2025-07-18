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
    <section id="about" className="section-padding bg-gray-dark">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
            About Saiwok
          </h2>
          
          <div 
            className="text-lg text-gray-300 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: about }}
          />
        </div>
      </div>
    </section>
  )
}