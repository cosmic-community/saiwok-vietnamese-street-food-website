import { RestaurantInfo, RestaurantSettings } from '@/types'

interface HeroProps {
  restaurantInfo: RestaurantInfo
  restaurantSettings: RestaurantSettings | null
}

export default function Hero({ restaurantInfo, restaurantSettings }: HeroProps) {
  const heroImage = restaurantSettings?.metadata.hero_image?.imgix_url || 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=1920&h=1080&fit=crop&auto=format,compress'
  const heroText = restaurantSettings?.metadata.hero_text || restaurantInfo.metadata.restaurant_name
  const heroSubtitle = restaurantSettings?.metadata.hero_subtitle || 'Authentic Vietnamese Street Food'

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${heroImage}?w=1920&h=1080&fit=crop&auto=format,compress`}
          alt="Vietnamese Street Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Logo */}
        {restaurantInfo.metadata.logo && (
          <div className="mb-8 animate-fade-in">
            <img
              src={`${restaurantInfo.metadata.logo.imgix_url}?w=800&h=480&fit=max&auto=format,compress`}
              alt={restaurantInfo.metadata.restaurant_name}
              className="h-80 w-auto mx-auto mb-4"
            />
          </div>
        )}
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          {heroText}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          {heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <a href="#menu" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View Menu
          </a>
          {restaurantInfo.metadata.order_link && (
            <a 
              href={restaurantInfo.metadata.order_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Order Now
            </a>
          )}
        </div>
      </div>
    </section>
  )
}