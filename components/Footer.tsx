import { RestaurantInfo } from '@/types'

interface FooterProps {
  restaurantInfo: RestaurantInfo
}

export default function Footer({ restaurantInfo }: FooterProps) {
  const metadata = restaurantInfo.metadata
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t border-gray-medium py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">
              {metadata?.restaurant_name}
            </h3>
            <p className="text-gray-300 mb-4 whitespace-pre-line">
              {metadata?.address}
            </p>
            <p className="text-gray-300">
              Phone: {metadata?.phone}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-accent transition-colors">
                About
              </a>
              <a href="#menu" className="block text-gray-300 hover:text-accent transition-colors">
                Menu
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-accent transition-colors">
                Contact
              </a>
              {metadata?.order_link && (
                <a 
                  href={metadata.order_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-accent transition-colors"
                >
                  Order Online
                </a>
              )}
            </nav>
          </div>

          {/* Hours */}
          {metadata?.hours && (
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Hours</h3>
              <div 
                className="text-gray-300 space-y-1"
                dangerouslySetInnerHTML={{ __html: metadata.hours }}
              />
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-medium mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} {metadata?.restaurant_name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}