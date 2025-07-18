import { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const rating = parseInt(review.metadata.rating.key)
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
      ★
    </span>
  ))

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="flex mr-2">
          {stars}
        </div>
        <span className="text-sm text-gray-500">
          {review.metadata.rating.value}
        </span>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        "{review.metadata.review_text}"
      </p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="font-semibold">
          - {review.metadata.customer_name}
        </span>
        <div className="flex flex-col items-end">
          <span>{new Date(review.metadata.review_date).toLocaleDateString()}</span>
          {review.metadata.source && (
            <span className="text-xs">{review.metadata.source.value}</span>
          )}
        </div>
      </div>
    </div>
  )
}