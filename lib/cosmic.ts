import { createBucketClient } from '@cosmicjs/sdk'
import { RestaurantSettings, RestaurantInfo, MenuCategory, MenuItem, hasStatus } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
})

// Fetch restaurant settings
export async function getRestaurantSettings(): Promise<RestaurantSettings | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'restaurant-settings',
      slug: 'saiwok-website-settings'
    }).props(['id', 'title', 'slug', 'metadata'])
    
    return response.object as RestaurantSettings
  } catch (error) {
    console.error('Error fetching restaurant settings:', error)
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    // Return null instead of throwing to prevent build failures
    return null
  }
}

// Fetch restaurant info
export async function getRestaurantInfo(): Promise<RestaurantInfo | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'restaurant-info',
      slug: 'saiwok-restaurant-information'
    }).props(['id', 'title', 'slug', 'metadata'])
    
    return response.object as RestaurantInfo
  } catch (error) {
    console.error('Error fetching restaurant info:', error)
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    // Return null instead of throwing to prevent build failures
    return null
  }
}

// Fetch menu categories
export async function getMenuCategories(): Promise<MenuCategory[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const categories = response.objects as MenuCategory[]
    return categories.sort((a, b) => {
      const orderA = a.metadata?.display_order || 999
      const orderB = b.metadata?.display_order || 999
      return orderA - orderB
    })
  } catch (error) {
    console.error('Error fetching menu categories:', error)
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    // Return empty array instead of throwing to prevent build failures
    return []
  }
}

// Fetch menu items
export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-items' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as MenuItem[]
  } catch (error) {
    console.error('Error fetching menu items:', error)
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    // Return empty array instead of throwing to prevent build failures
    return []
  }
}

// Fetch menu items by category
export async function getMenuItemsByCategory(categoryId: string): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'menu-items',
        'metadata.category': categoryId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as MenuItem[]
  } catch (error) {
    console.error('Error fetching menu items for category:', error)
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    // Return empty array instead of throwing to prevent build failures
    return []
  }
}