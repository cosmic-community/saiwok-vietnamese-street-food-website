import { RestaurantInfo } from '@/types'

interface HeroProps {
  restaurantInfo: RestaurantInfo
}

export default function Hero({ restaurantInfo }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${restaurantInfo.metadata.hero_image.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress`}
          alt="Vietnamese Street Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="hero-title font-bold mb-6 animate-fade-in">
          {restaurantInfo.metadata.restaurant_name}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          {restaurantInfo.metadata.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <a href="#menu" className="btn-primary">
            View Menu
          </a>
          <a href="#contact" className="btn-secondary">
            Order Now
          </a>
        </div>
      </div>
    </section>
  )
}