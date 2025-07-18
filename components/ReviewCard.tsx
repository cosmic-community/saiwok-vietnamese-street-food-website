import { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))
  }

  return (
    <div className="review-card">
      <div className="flex items-center mb-4">
        <div className="star-rating">
          {renderStars(review.metadata.rating)}
        </div>
        <span className="ml-2 text-gray-600">({review.metadata.rating}/5)</span>
      </div>
      
      <p className="text-gray-700 mb-4 italic">"{review.metadata.review_text}"</p>
      
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-900">{review.metadata.customer_name}</span>
        <span className="text-sm text-gray-500">{review.metadata.date}</span>
      </div>
    </div>
  )
}