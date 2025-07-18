import { RestaurantInfo } from '@/types'

interface HeroProps {
  restaurantInfo: RestaurantInfo
}

export default function Hero({ restaurantInfo }: HeroProps) {
  const heroImage = restaurantInfo.metadata?.hero_image
  const heroTitle = restaurantInfo.metadata?.hero_title
  const heroSubtitle = restaurantInfo.metadata?.hero_subtitle
  const orderLink = restaurantInfo.metadata?.order_link

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {heroImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress)`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {heroTitle && (
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {heroTitle}
          </h1>
        )}
        
        {heroSubtitle && (
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
        )}

        {orderLink && (
          <div className="animate-fade-in-delay-2">
            <a 
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Order Now
            </a>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}