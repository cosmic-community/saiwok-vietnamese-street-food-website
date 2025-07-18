'use client'

import { useState } from 'react'
import { RestaurantInfo } from '@/types'

interface HeaderProps {
  restaurantInfo: RestaurantInfo
}

export default function Header({ restaurantInfo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {restaurantInfo.metadata.nav_logo ? (
              <img
                src={`${restaurantInfo.metadata.nav_logo.imgix_url}?w=120&h=40&fit=crop&auto=format,compress`}
                alt={restaurantInfo.metadata.restaurant_name}
                className="h-8 w-auto"
              />
            ) : (
              <h1 className="text-xl font-bold text-gray-900">
                {restaurantInfo.metadata.restaurant_name}
              </h1>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </a>
            <a href="#menu" className="text-gray-700 hover:text-red-600 transition-colors">
              Menu
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-red-600 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </a>
            {restaurantInfo.metadata.order_link && (
              <a
                href={restaurantInfo.metadata.order_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Order Now
              </a>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">
                About
              </a>
              <a href="#menu" className="text-gray-700 hover:text-red-600 transition-colors">
                Menu
              </a>
              <a href="#reviews" className="text-gray-700 hover:text-red-600 transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
                Contact
              </a>
              {restaurantInfo.metadata.order_link && (
                <a
                  href={restaurantInfo.metadata.order_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                >
                  Order Now
                </a>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}