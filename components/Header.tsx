import { RestaurantInfo } from '@/types'

interface HeaderProps {
  restaurantInfo: RestaurantInfo
}

export default function Header({ restaurantInfo }: HeaderProps) {
  const navLogo = restaurantInfo.metadata?.nav_logo

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary bg-opacity-95 backdrop-blur-sm border-b border-gray-medium">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {navLogo && (
              <img 
                src={`${navLogo.imgix_url}?w=80&h=40&fit=crop&auto=format,compress`}
                alt={restaurantInfo.metadata?.restaurant_name}
                width="40"
                height="20"
                className="h-10 w-auto"
              />
            )}
            <h1 className="text-xl font-bold text-secondary">
              {restaurantInfo.metadata?.restaurant_name}
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-secondary hover:text-accent transition-colors duration-300">
              About
            </a>
            <a href="#menu" className="text-secondary hover:text-accent transition-colors duration-300">
              Menu
            </a>
            <a href="#contact" className="text-secondary hover:text-accent transition-colors duration-300">
              Contact
            </a>
            
            {/* Order Online Button */}
            {restaurantInfo.metadata?.order_link && (
              <a 
                href={restaurantInfo.metadata.order_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Order Online
              </a>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-secondary hover:text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}