import { getRestaurantInfo } from '@/lib/cosmic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
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
      <About restaurantInfo={restaurantInfo} />
      <Menu restaurantInfo={restaurantInfo} />
      <Reviews restaurantInfo={restaurantInfo} />
      <Contact restaurantInfo={restaurantInfo} />
      <Footer restaurantInfo={restaurantInfo} />
    </main>
  )
}