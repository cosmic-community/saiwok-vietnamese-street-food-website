import { MenuCategory, MenuItem } from '@/types'
import MenuItemCard from './MenuItemCard'

interface MenuCategorySectionProps {
  category: MenuCategory
  items: MenuItem[]
}

export default function MenuCategorySection({ category, items }: MenuCategorySectionProps) {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{category.title}</h3>
        {category.metadata.description && (
          <p className="text-gray-600">{category.metadata.description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}