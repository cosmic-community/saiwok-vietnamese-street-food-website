import { MenuItem } from '@/types'

interface MenuItemCardProps {
  item: MenuItem
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const metadata = item.metadata
  const foodImage = metadata?.food_image
  const spicyLevel = metadata?.spicy_level
  const dietaryOptions = metadata?.dietary_options || []

  const getSpicyIcon = (level: string) => {
    switch (level) {
      case 'mild':
        return '🌶️'
      case 'medium':
        return '🌶️🌶️'
      case 'hot':
        return '🌶️🌶️🌶️'
      default:
        return ''
    }
  }

  return (
    <div className="menu-item-card">
      {/* Food Image */}
      {foodImage && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={`${foodImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={metadata?.dish_name}
            width="300"
            height="200"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          
          {/* Spicy Level Indicator */}
          {spicyLevel && spicyLevel.key !== 'none' && (
            <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-sm">
              {getSpicyIcon(spicyLevel.key)}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-secondary">
            {metadata?.dish_name}
          </h4>
          <span className="text-accent font-bold text-lg">
            {metadata?.price}
          </span>
        </div>

        {metadata?.description && (
          <p className="text-gray-300 mb-4 leading-relaxed">
            {metadata.description}
          </p>
        )}

        {/* Dietary Options */}
        {dietaryOptions.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {dietaryOptions.map((option) => (
              <span key={option} className="dietary-badge">
                {option}
              </span>
            ))}
          </div>
        )}

        {/* Spicy Level Text */}
        {spicyLevel && spicyLevel.key !== 'none' && (
          <div className="spicy-indicator text-accent">
            <span className="text-sm">🌶️ {spicyLevel.value}</span>
          </div>
        )}
      </div>
    </div>
  )
}