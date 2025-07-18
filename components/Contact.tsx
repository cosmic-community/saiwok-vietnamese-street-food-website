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
                  <span className="text-red-600 text-xl">📍</span>
                  <span className="text-gray-700">{restaurantInfo.metadata.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-600 text-xl">📞</span>
                  <a href={`tel:${restaurantInfo.metadata.phone}`} className="text-gray-700 hover:text-red-600 transition-colors">
                    {restaurantInfo.metadata.phone}
                  </a>
                </div>
                {restaurantInfo.metadata.hours && (
                  <div className="flex items-start space-x-3">
                    <span className="text-red-600 text-xl">🕒</span>
                    <div 
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{ __html: restaurantInfo.metadata.hours }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href={`tel:${restaurantInfo.metadata.phone}`} 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center block"
              >
                Call to Order
              </a>
              
              {restaurantInfo.metadata.order_link && (
                <a 
                  href={restaurantInfo.metadata.order_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center block"
                >
                  Order Online
                </a>
              )}
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Visit Us</h3>
            <p className="text-gray-600 mb-6">
              Come experience authentic Vietnamese street food in a welcoming atmosphere. 
              We look forward to serving you!
            </p>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center h-64">
              <span className="text-gray-500">Map Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}