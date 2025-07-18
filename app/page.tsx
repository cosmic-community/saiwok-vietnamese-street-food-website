import { getRestaurantSettings, getRestaurantInfo, getMenuCategories, getMenuItems, getFeaturedReviews } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'

export default async function Home() {
  // Fetch all data in parallel
  const [settings, restaurantInfo, categories, menuItems, reviews] = await Promise.all([
    getRestaurantSettings(),
    getRestaurantInfo(),
    getMenuCategories(),
    getMenuItems(),
    getFeaturedReviews()
  ])

  // Handle case where restaurant info is not found
  if (!restaurantInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant information not found</h1>
          <p className="text-gray-600">Please check your CMS configuration.</p>
        </div>
      </div>
    )
  }

  const showOrdering = settings?.metadata?.show_ordering ?? true
  const announcement = settings?.metadata?.announcement

  return (
    <main>
      {/* Announcement Banner */}
      {announcement && (
        <AnnouncementBanner announcement={announcement} />
      )}

      {/* Hero Section */}
      <Hero 
        settings={settings}
        restaurantInfo={restaurantInfo}
        showOrdering={showOrdering}
      />

      {/* About Section */}
      <About restaurantInfo={restaurantInfo} />

      {/* Menu Section */}
      <Menu 
        categories={categories}
        menuItems={menuItems}
      />

      {/* Reviews Section */}
      {reviews.length > 0 && (
        <Reviews reviews={reviews} />
      )}

      {/* Contact Section */}
      <Contact restaurantInfo={restaurantInfo} />
    </main>
  )
}