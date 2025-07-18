import { RestaurantInfo } from '@/types'

interface ContactProps {
  restaurantInfo: RestaurantInfo
}

export default function Contact({ restaurantInfo }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Get in touch or visit us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-red-600">📍</span>
                  <span className="text-gray-700">{restaurantInfo.metadata.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-600">📞</span>
                  <a href={`tel:${restaurantInfo.metadata.phone}`} className="text-gray-700 hover:text-red-600">
                    {restaurantInfo.metadata.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-600">✉️</span>
                  <a href={`mailto:${restaurantInfo.metadata.email}`} className="text-gray-700 hover:text-red-600">
                    {restaurantInfo.metadata.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-600">🕒</span>
                  <span className="text-gray-700">{restaurantInfo.metadata.hours}</span>
                </div>
              </div>
            </div>

            <div>
              <a href={`tel:${restaurantInfo.metadata.phone}`} className="btn-primary w-full text-center">
                Call to Order
              </a>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Visit Us</h3>
            <p className="text-gray-600 mb-6">
              Come experience authentic Vietnamese street food in a welcoming atmosphere. 
              We look forward to serving you!
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <div className="bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Map Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}