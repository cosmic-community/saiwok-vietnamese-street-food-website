import { createBucketClient } from '@cosmicjs/sdk'
import { RestaurantInfo, MenuCategory, MenuItem, Review } from '@/types'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || '',
})

export async function getRestaurantInfo(): Promise<RestaurantInfo | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({
        type: 'restaurant-info',
        slug: 'restaurant-info',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return object as RestaurantInfo
  } catch (error) {
    console.error('Error fetching restaurant info:', error)
    return null
  }
}

export async function getMenuCategories(): Promise<MenuCategory[]> {
  try {
    const { objects } = await cosmic.objects
      .find({
        type: 'menu-categories',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .sort('metadata.order')
      .depth(1)

    return objects as MenuCategory[]
  } catch (error) {
    console.error('Error fetching menu categories:', error)
    return []
  }
}

export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const { objects } = await cosmic.objects
      .find({
        type: 'menu-items',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return objects as MenuItem[]
  } catch (error) {
    console.error('Error fetching menu items:', error)
    return []
  }
}

export async function getReviews(): Promise<Review[]> {
  try {
    const { objects } = await cosmic.objects
      .find({
        type: 'reviews',
      })
      .props(['id', 'title', 'metadata'])
      .limit(6)
      .depth(1)

    return objects as Review[]
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return []
  }
}