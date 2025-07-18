import { MenuCategory, MenuItem } from '@/types'
import MenuCategorySection from './MenuCategorySection'

interface MenuProps {
  categories: MenuCategory[]
  items: MenuItem[]
}

export default function Menu({ categories, items }: MenuProps) {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600">
            Authentic Vietnamese street food made with fresh ingredients
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => {
            const categoryItems = items.filter(
              (item) => item.metadata.category?.id === category.id
            )
            
            if (categoryItems.length === 0) return null

            return (
              <MenuCategorySection
                key={category.id}
                category={category}
                items={categoryItems}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}