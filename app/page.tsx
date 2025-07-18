import { getRestaurantInfo, getRestaurantSettings, getMenuCategories, getMenuItems, getReviews } from '@/lib/cosmic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'

export default async function HomePage() {
  try {
    const [restaurantInfo, settings, categories, menuItems, reviews] = await Promise.all([
      getRestaurantInfo(),
      getRestaurantSettings(),
      getMenuCategories(),
      getMenuItems(),
      getReviews()
    ])

    // If restaurant info is not available, show a fallback
    if (!restaurantInfo) {
      return (
        <div className="min-h-screen bg-primary text-secondary flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Restaurant Website</h1>
            <p>Restaurant information is currently being loaded...</p>
          </div>
        </div>
      )
    }

    return (
      <main className="min-h-screen bg-primary text-secondary">
        {settings?.metadata?.announcement && (
          <AnnouncementBanner announcement={settings.metadata.announcement} />
        )}
        
        <Header restaurantInfo={restaurantInfo} />
        
        <Hero 
          settings={settings} 
          restaurantInfo={restaurantInfo}
          showOrdering={settings?.metadata?.show_ordering || false}
        />
        
        <About restaurantInfo={restaurantInfo} />
        
        <Menu categories={categories || []} menuItems={menuItems || []} />
        
        <Reviews reviews={reviews || []} />
        
        <Contact restaurantInfo={restaurantInfo} />
        
        <Footer restaurantInfo={restaurantInfo} />
      </main>
    )
  } catch (error) {
    console.error('Error loading page data:', error)
    
    return (
      <div className="min-h-screen bg-primary text-secondary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant Website</h1>
          <p>We're experiencing technical difficulties. Please try again later.</p>
        </div>
      </div>
    )
  }
}