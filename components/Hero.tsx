import { RestaurantSettings, RestaurantInfo } from '@/types'

interface HeroProps {
  settings?: RestaurantSettings | null
  restaurantInfo: RestaurantInfo
  showOrdering: boolean
}

export default function Hero({ settings, restaurantInfo, showOrdering }: HeroProps) {
  const heroImage = settings?.metadata?.hero_image
  const heroText = settings?.metadata?.hero_text || 'Welcome to Saiwok'
  const heroSubtitle = settings?.metadata?.hero_subtitle || 'Authentic Vietnamese Street Food'
  const logo = restaurantInfo.metadata?.nav_logo || restaurantInfo.metadata?.logo

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      {heroImage && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          {logo && (
            <div className="mb-8 animate-fade-in">
              <img 
                src={`${logo.imgix_url}?w=600&h=300&fit=max&auto=format,compress`}
                alt={restaurantInfo.metadata?.restaurant_name}
                className="mx-auto h-24 md:h-32 lg:h-40 w-auto drop-shadow-lg"
              />
            </div>
          )}
          
          {/* Hero Text */}
          <div className="animate-fade-in-delay">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
              {heroText}
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <a 
              href="#menu" 
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              View Menu
            </a>
            
            {showOrdering && restaurantInfo.metadata?.order_link && (
              <a 
                href={restaurantInfo.metadata.order_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                Order Online
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}