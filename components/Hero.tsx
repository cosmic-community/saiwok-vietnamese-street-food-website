import { RestaurantSettings, RestaurantInfo } from '@/types'

interface HeroProps {
  settings: RestaurantSettings | null
  restaurantInfo: RestaurantInfo
  showOrdering: boolean
}

export default function Hero({ settings, restaurantInfo, showOrdering }: HeroProps) {
  const heroImage = settings?.metadata?.hero_image
  const heroText = settings?.metadata?.hero_text || 'Welcome to Saiwok'
  const heroSubtitle = settings?.metadata?.hero_subtitle || 'Authentic Vietnamese Street Food'
  const logo = restaurantInfo.metadata?.logo

  return (
    <section 
      id="hero" 
      className="hero-section"
      style={{
        backgroundImage: heroImage ? `url(${heroImage.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress)` : undefined
      }}
    >
      <div className="hero-overlay"></div>
      
      <div className="hero-content container">
        <div className="animate-fade-in">
          {/* Prominent Logo Display */}
          {logo && (
            <div className="mb-8">
              <img 
                src={`${logo.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
                alt={restaurantInfo.metadata?.restaurant_name}
                width="300"
                height="150"
                className="mx-auto h-32 w-auto"
              />
            </div>
          )}
          
          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            {heroText}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#menu" className="btn-primary">
              View Menu
            </a>
            
            {showOrdering && restaurantInfo.metadata?.order_link && (
              <a 
                href={restaurantInfo.metadata.order_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Order Online
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}