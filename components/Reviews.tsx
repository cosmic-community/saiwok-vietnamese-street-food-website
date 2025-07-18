import { Review } from '@/types'
import ReviewCard from './ReviewCard'

interface ReviewsProps {
  reviews: Review[]
}

export default function Reviews({ reviews }: ReviewsProps) {
  if (reviews.length === 0) {
    return null
  }

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <p className="text-lg text-gray-600">
            What our customers say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}