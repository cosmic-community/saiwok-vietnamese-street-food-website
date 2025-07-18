// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Restaurant Settings interface
export interface RestaurantSettings extends CosmicObject {
  type: 'restaurant-settings';
  metadata: {
    hero_text?: string;
    hero_subtitle?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    show_ordering?: boolean;
    announcement?: string;
  };
}

// Restaurant Info interface
export interface RestaurantInfo extends CosmicObject {
  type: 'restaurant-info';
  metadata: {
    restaurant_name: string;
    address: string;
    phone: string;
    hours?: string;
    order_link?: string;
    nav_logo?: {
      url: string;
      imgix_url: string;
    };
    logo?: {
      url: string;
      imgix_url: string;
    };
    about?: string;
    announcement?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    hero_title?: string;
    hero_subtitle?: string;
  };
}

// Menu Category interface
export interface MenuCategory extends CosmicObject {
  type: 'menu-categories';
  metadata: {
    category_name: string;
    description?: string;
    display_order?: number;
  };
}

// Menu Item interface
export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    dish_name: string;
    description?: string;
    price: string;
    category?: MenuCategory;
    food_image?: {
      url: string;
      imgix_url: string;
    };
    available?: boolean;
    spicy_level?: {
      key: SpicyLevel;
      value: string;
    };
    dietary_options?: DietaryOption[];
  };
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    customer_name: string;
    rating: {
      key: string;
      value: string;
    };
    review_text: string;
    review_date: string;
    source?: {
      key: ReviewSource;
      value: string;
    };
    featured?: boolean;
  };
}

// Component Props interfaces
export interface HeroProps {
  restaurantInfo: RestaurantInfo;
  settings?: RestaurantSettings | null;
  showOrdering?: boolean;
}

export interface MenuProps {
  categories: MenuCategory[];
  items: MenuItem[];
}

export interface ReviewsProps {
  reviews: Review[];
}

// Type literals for select-dropdown and checkbox values
export type SpicyLevel = 'none' | 'mild' | 'medium' | 'hot';
export type DietaryOption = 'Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Dairy-Free';
export type ReviewSource = 'google' | 'yelp' | 'facebook' | 'website' | 'other';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards for runtime validation
export function isRestaurantSettings(obj: CosmicObject): obj is RestaurantSettings {
  return obj.type === 'restaurant-settings';
}

export function isRestaurantInfo(obj: CosmicObject): obj is RestaurantInfo {
  return obj.type === 'restaurant-info';
}

export function isMenuCategory(obj: CosmicObject): obj is MenuCategory {
  return obj.type === 'menu-categories';
}

export function isMenuItem(obj: CosmicObject): obj is MenuItem {
  return obj.type === 'menu-items';
}

export function isReview(obj: CosmicObject): obj is Review {
  return obj.type === 'reviews';
}

// Helper function for error handling
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}