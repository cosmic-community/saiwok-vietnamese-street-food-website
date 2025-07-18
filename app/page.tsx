import { getRestaurantInfo, getRestaurantSettings, getMenuCategories, getMenuItems, getReviews } from '@/lib/cosmic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'

export default async function Home() {
  const [restaurantInfo, restaurantSettings, categories, menuItems, reviews] = await Promise.all([
    getRestaurantInfo(),
    getRestaurantSettings(),
    getMenuCategories(),
    getMenuItems(),
    getReviews()
  ])

  if (!restaurantInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Restaurant information not found</h1>
          <p className="text-gray-600">Please check your Cosmic CMS configuration.</p>
        </div>
      </div>
    )
  }

  return (
    <main>
      <AnnouncementBanner restaurantSettings={restaurantSettings} />
      <Header restaurantInfo={restaurantInfo} />
      <Hero restaurantInfo={restaurantInfo} restaurantSettings={restaurantSettings} />
      <About restaurantInfo={restaurantInfo} />
      <Menu categories={categories} items={menuItems} />
      <Reviews reviews={reviews} />
      <Contact restaurantInfo={restaurantInfo} />
      <Footer restaurantInfo={restaurantInfo} />
    </main>
  )
}