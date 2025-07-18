import { getRestaurantInfo, getMenuItems, getReviews } from '@/lib/cosmic'
import Header from '@/components/Header'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default async function Home() {
  const [restaurantInfo, menuItems, reviews] = await Promise.all([
    getRestaurantInfo(),
    getMenuItems(),
    getReviews()
  ])

  if (!restaurantInfo) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <Header restaurantInfo={restaurantInfo} />
      
      {/* Announcement Banner positioned below header */}
      {restaurantInfo.metadata?.announcement && (
        <div className="pt-20"> {/* Add padding-top to account for fixed header */}
          <AnnouncementBanner announcement={restaurantInfo.metadata.announcement} />
        </div>
      )}
      
      {/* Main content with proper spacing */}
      <div className={restaurantInfo.metadata?.announcement ? "" : "pt-20"}>
        <Hero 
          restaurantInfo={restaurantInfo} 
          showOrdering={!!restaurantInfo.metadata?.order_link}
        />
        <About restaurantInfo={restaurantInfo} />
        <Menu 
          menuItems={menuItems} 
          categories={[]} // Pass empty array for now - can be populated later if needed
        />
        <Reviews reviews={reviews} />
        <Contact restaurantInfo={restaurantInfo} />
      </div>
      
      <Footer restaurantInfo={restaurantInfo} />
    </main>
  )
}