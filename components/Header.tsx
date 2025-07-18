import { RestaurantInfo } from '@/types'

interface HeaderProps {
  restaurantInfo: RestaurantInfo
}

export default function Header({ restaurantInfo }: HeaderProps) {
  const navLogo = restaurantInfo.metadata?.nav_logo

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {navLogo && (
              <img 
                src={`${navLogo.imgix_url}?w=140&h=70&fit=crop&auto=format,compress`}
                alt={restaurantInfo.metadata?.restaurant_name}
                width="70"
                height="35"
                className="h-8 w-auto"
              />
            )}
            <h1 className="text-xl font-bold text-white">
              {restaurantInfo.metadata?.restaurant_name}
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-red-400 transition-colors duration-300">
              About
            </a>
            <a href="#menu" className="text-white hover:text-red-400 transition-colors duration-300">
              Menu
            </a>
            <a href="#reviews" className="text-white hover:text-red-400 transition-colors duration-300">
              Reviews
            </a>
            <a href="#contact" className="text-white hover:text-red-400 transition-colors duration-300">
              Contact
            </a>
            
            {/* Order Online Button */}
            {restaurantInfo.metadata?.order_link && (
              <a 
                href={restaurantInfo.metadata.order_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                Order Online
              </a>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-red-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}