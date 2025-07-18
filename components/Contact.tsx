import { RestaurantInfo } from '@/types'

interface ContactProps {
  restaurantInfo: RestaurantInfo
}

export default function Contact({ restaurantInfo }: ContactProps) {
  const metadata = restaurantInfo.metadata

  return (
    <section id="contact" className="section-padding bg-gray-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Visit Us
          </h2>
          <p className="text-xl text-gray-300">
            Come experience authentic Vietnamese street food
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent">Location</h3>
              <p className="text-gray-300 whitespace-pre-line">
                {metadata?.address}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent">Phone</h3>
              <a 
                href={`tel:${metadata?.phone}`}
                className="text-gray-300 hover:text-accent transition-colors text-lg"
              >
                {metadata?.phone}
              </a>
            </div>

            {metadata?.hours && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-accent">Hours</h3>
                <div 
                  className="text-gray-300 space-y-2"
                  dangerouslySetInnerHTML={{ __html: metadata.hours }}
                />
              </div>
            )}
          </div>

          {/* Order Online Section */}
          <div className="flex flex-col justify-center">
            <div className="text-center p-8 bg-primary border border-accent rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-accent">
                Order Online
              </h3>
              <p className="text-gray-300 mb-6">
                Skip the wait and order ahead for pickup or delivery
              </p>
              
              {metadata?.order_link && (
                <a 
                  href={metadata.order_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Order Now
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}