import { getRestaurantInfo, getRestaurantSettings, getMenuCategories, getMenuItems } from '@/lib/cosmic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'

export default async function HomePage() {
  const [restaurantInfo, settings, categories, menuItems] = await Promise.all([
    getRestaurantInfo(),
    getRestaurantSettings(),
    getMenuCategories(),
    getMenuItems()
  ])

  if (!restaurantInfo) {
    return (
      <div className="min-h-screen bg-primary text-secondary flex items-center justify-center">
        <p>Restaurant information not available</p>
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
      
      <Menu categories={categories} menuItems={menuItems} />
      
      <Contact restaurantInfo={restaurantInfo} />
      
      <Footer restaurantInfo={restaurantInfo} />
    </main>
  )
}