import { MenuItem } from '@/types'

interface MenuItemCardProps {
  item: MenuItem
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {item.metadata.food_image && (
        <div className="h-48 bg-gray-200">
          <img
            src={`${item.metadata.food_image.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
            alt={item.metadata.dish_name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-semibold text-gray-900">
            {item.metadata.dish_name}
          </h4>
          <span className="text-lg font-bold text-red-600">
            {item.metadata.price}
          </span>
        </div>
        
        {item.metadata.description && (
          <p className="text-gray-600 mb-4">
            {item.metadata.description}
          </p>
        )}
        
        <div className="flex flex-wrap gap-2">
          {item.metadata.spicy_level && item.metadata.spicy_level.key !== 'none' && (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
              🌶️ {item.metadata.spicy_level.value}
            </span>
          )}
          
          {item.metadata.dietary_options && item.metadata.dietary_options.map((option) => (
            <span key={option} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
              {option}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}