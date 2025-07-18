export interface RestaurantInfo {
  id: string
  title: string
  slug: string
  metadata: {
    restaurant_name: string
    address: string
    phone: string
    hours: string
    order_link?: string
    nav_logo?: {
      imgix_url: string
      url: string
    }
    logo?: {
      imgix_url: string
      url: string
    }
    about?: string
  }
}

export interface RestaurantSettings {
  id: string
  title: string
  slug: string
  metadata: {
    hero_text: string
    hero_subtitle: string
    hero_image?: {
      imgix_url: string
      url: string
    }
    show_ordering: boolean
    announcement?: string
  }
}

export interface MenuCategory {
  id: string
  title: string
  slug: string
  metadata: {
    category_name: string
    description?: string
    display_order?: number
  }
}

export interface MenuItem {
  id: string
  title: string
  slug: string
  metadata: {
    dish_name: string
    description?: string
    price: string
    category: {
      id: string
      title: string
      slug: string
      metadata: {
        category_name: string
        description?: string
        display_order?: number
      }
    }
    food_image?: {
      imgix_url: string
      url: string
    }
    available: boolean
    spicy_level?: {
      key: string
      value: string
    }
    dietary_options?: string[] | null
  }
}

export interface Review {
  id: string
  title: string
  slug: string
  metadata: {
    customer_name: string
    rating: {
      key: string
      value: string
    }
    review_text: string
    review_date: string
    source?: {
      key: string
      value: string
    }
    featured: boolean
  }
}