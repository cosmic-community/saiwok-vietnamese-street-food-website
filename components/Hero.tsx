import { RestaurantInfo } from '@/types'

export interface HeroProps {
  restaurantInfo: RestaurantInfo
}

export default function Hero({ restaurantInfo }: HeroProps) {
  const orderLink = restaurantInfo.metadata?.order_link

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      {/* Large Saiwok Logo */}
      <div className="mb-16">
        <div className="flex items-center justify-center mb-4">
          <div className="text-white text-8xl md:text-9xl font-bold tracking-wider">
            saiwok
          </div>
          <div className="ml-4 text-red-500 text-6xl md:text-7xl">
            🍜
          </div>
        </div>
        <div className="text-white text-sm md:text-base tracking-[0.3em] uppercase font-light">
          VIETNAMESE STREET FOOD
        </div>
      </div>

      {/* Main Headlines */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Authentic Vietnamese Street Food
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Fresh ingredients, bold flavors, made with love
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        <a 
          href="#menu"
          className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]"
        >
          View Menu
        </a>
        
        {orderLink && (
          <a 
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]"
          >
            Order Online
          </a>
        )}
      </div>
    </section>
  )
}