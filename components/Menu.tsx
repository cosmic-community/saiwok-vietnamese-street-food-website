import { MenuCategory, MenuItem } from '@/types'
import MenuCategorySection from '@/components/MenuCategorySection'

export interface MenuProps {
  categories: MenuCategory[]
  items: MenuItem[]
}

export default function Menu({ categories, items }: MenuProps) {
  if (categories.length === 0) {
    return null
  }

  return (
    <section id="menu" className="section-padding bg-primary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Our Menu
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fresh ingredients, bold flavors, and authentic Vietnamese recipes
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => {
            const categoryItems = items.filter(
              item => item.metadata?.category?.id === category.id && item.metadata?.available !== false
            )
            
            if (categoryItems.length === 0) {
              return null
            }

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