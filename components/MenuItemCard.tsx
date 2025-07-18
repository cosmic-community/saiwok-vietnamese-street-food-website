import { MenuItem } from '@/types'

interface MenuItemCardProps {
  item: MenuItem
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="menu-item-card bg-white rounded-lg shadow-md overflow-hidden">
      {item.metadata.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={`${item.metadata.image.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
          <span className="text-lg font-bold text-red-600">${item.metadata.price}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{item.metadata.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {item.metadata.popular && (
            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
              Popular
            </span>
          )}
          {item.metadata.spicy && (
            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
              🌶️ Spicy
            </span>
          )}
          {item.metadata.vegetarian && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              🥬 Vegetarian
            </span>
          )}
        </div>
      </div>
    </div>
  )
}