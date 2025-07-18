import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getRestaurantInfo } from '@/lib/cosmic'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const restaurantInfo = await getRestaurantInfo()
  
  return {
    title: restaurantInfo?.metadata?.restaurant_name || 'Saiwok Vietnamese Street Food',
    description: 'Authentic Vietnamese street food with fresh ingredients, bold flavors, and traditional recipes. From pho to banh mi, discover the true taste of Vietnam.',
    keywords: ['Vietnamese food', 'street food', 'pho', 'banh mi', 'authentic', 'fresh ingredients'],
    openGraph: {
      title: restaurantInfo?.metadata?.restaurant_name || 'Saiwok Vietnamese Street Food',
      description: 'Authentic Vietnamese street food with fresh ingredients and bold flavors.',
      type: 'website',
      images: [
        {
          url: restaurantInfo?.metadata?.logo?.imgix_url || '',
          width: 1200,
          height: 630,
          alt: 'Saiwok Vietnamese Street Food Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: restaurantInfo?.metadata?.restaurant_name || 'Saiwok Vietnamese Street Food',
      description: 'Authentic Vietnamese street food with fresh ingredients and bold flavors.',
      images: [restaurantInfo?.metadata?.logo?.imgix_url || ''],
    },
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}