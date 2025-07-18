import { getRestaurantInfo } from '@/lib/cosmic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'

export default async function Home() {
  const restaurantInfo = await getRestaurantInfo()

  if (!restaurantInfo) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <AnnouncementBanner restaurantInfo={restaurantInfo} />
      <Header restaurantInfo={restaurantInfo} />
      <Hero restaurantInfo={restaurantInfo} />
      <Footer restaurantInfo={restaurantInfo} />
    </main>
  )
}