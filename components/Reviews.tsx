import { Review } from '@/types'
import ReviewCard from './ReviewCard'

interface ReviewsProps {
  reviews: Review[]
}

export default function Reviews({ reviews }: ReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return null
  }

  // Calculate average rating
  const averageRating = reviews.reduce((sum, review) => {
    return sum + parseInt(review.metadata.rating.key)
  }, 0) / reviews.length

  // Get featured reviews for highlight section
  const featuredReviews = reviews.filter(review => review.metadata.featured)
  const allReviews = reviews.slice(0, 6) // Show maximum 6 reviews

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-2xl ${
                    star <= Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="ml-3 text-lg text-gray-600">
              {averageRating.toFixed(1)} out of 5 stars
            </span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied customers have to say about their experience at Saiwok Vietnamese Street Food.
          </p>
        </div>

        {/* Featured Reviews */}
        {featuredReviews.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Featured Reviews
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}

        {/* All Reviews */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Recent Reviews
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Have you dined with us? We'd love to hear about your experience!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com/search?q=saiwok+vietnamese+street+food+rogers+ar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Review us on Google
            </a>
            <a
              href="https://www.yelp.com/biz/saiwok-vietnamese-street-food-rogers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Review us on Yelp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}