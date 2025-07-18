import { createBucketClient } from '@cosmicjs/sdk'
import { 
  RestaurantInfo, 
  MenuCategory, 
  MenuItem, 
  Review, 
  CosmicResponse,
  hasStatus
} from '@/types'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || '',
  apiEnvironment: "staging"
})

export async function getRestaurantInfo(): Promise<RestaurantInfo | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'restaurant-info',
      })
      .props(['id', 'slug', 'title', 'content', 'metadata', 'type', 'created_at', 'modified_at'])
      .depth(1)
    
    return response.object as RestaurantInfo
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    console.error('Error fetching restaurant info:', error)
    return null
  }
}

export async function getMenuCategories(): Promise<MenuCategory[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'menu-categories',
      })
      .props(['id', 'slug', 'title', 'content', 'metadata', 'type', 'created_at', 'modified_at'])
      .depth(1)
    
    return response.objects as MenuCategory[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    console.error('Error fetching menu categories:', error)
    return []
  }
}

export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'menu-items',
      })
      .props(['id', 'slug', 'title', 'content', 'metadata', 'type', 'created_at', 'modified_at'])
      .depth(1)
    
    return response.objects as MenuItem[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    console.error('Error fetching menu items:', error)
    return []
  }
}

export async function getReviews(): Promise<Review[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'reviews',
      })
      .props(['id', 'slug', 'title', 'content', 'metadata', 'type', 'created_at', 'modified_at'])
      .depth(1)
    
    return response.objects as Review[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    console.error('Error fetching reviews:', error)
    return []
  }
}