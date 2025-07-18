export interface RestaurantInfo {
  id: string
  title: string
  slug: string
  metadata: {
    restaurant_name: string
    tagline: string
    description: string
    phone: string
    email: string
    address: string
    hours: string
    logo: {
      imgix_url: string
      url: string
    }
    hero_image: {
      imgix_url: string
      url: string
    }
    announcement?: string
  }
}

export interface MenuCategory {
  id: string
  title: string
  slug: string
  metadata: {
    description?: string
    order?: number
  }
}

export interface MenuItem {
  id: string
  title: string
  slug: string
  metadata: {
    description: string
    price: number
    category: {
      id: string
      title: string
      slug: string
    }
    image?: {
      imgix_url: string
      url: string
    }
    popular?: boolean
    spicy?: boolean
    vegetarian?: boolean
  }
}

export interface Review {
  id: string
  title: string
  metadata: {
    customer_name: string
    rating: number
    review_text: string
    date: string
  }
}