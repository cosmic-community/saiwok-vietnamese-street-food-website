import { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const { customer_name, rating, review_text, review_date, source, featured } = review.metadata

  // Convert rating key to number for stars
  const ratingNumber = parseInt(rating.key)

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Generate star display
  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-lg ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      )
    }
    return stars
  }

  return (
    <div className={`bg-white rounded-lg p-6 shadow-md ${featured ? 'ring-2 ring-accent' : ''}`}>
      {featured && (
        <div className="flex items-center mb-3">
          <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
            Featured Review
          </span>
        </div>
      )}
      
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {renderStars(ratingNumber)}
        </div>
        <span className="ml-2 text-sm text-gray-600">
          {rating.value}
        </span>
      </div>

      <blockquote className="text-gray-700 mb-4 italic">
        "{review_text}"
      </blockquote>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div>
          <p className="font-semibold text-gray-800">{customer_name}</p>
          <p>{formatDate(review_date)}</p>
        </div>
        {source && (
          <div className="text-right">
            <p className="text-xs">via {source.value}</p>
          </div>
        )}
      </div>
    </div>
  )
}