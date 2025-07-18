import { MenuCategory, MenuItem } from '@/types'
import MenuItemCard from '@/components/MenuItemCard'

interface MenuCategorySectionProps {
  category: MenuCategory
  items: MenuItem[]
}

export default function MenuCategorySection({ category, items }: MenuCategorySectionProps) {
  return (
    <div className="animate-slide-up">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-accent">
          {category.metadata?.category_name}
        </h3>
        {category.metadata?.description && (
          <p className="text-gray-300 text-lg">
            {category.metadata.description}
          </p>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}