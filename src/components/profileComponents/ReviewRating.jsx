import React from 'react'

export default function ReviewRating() {
    return (
        <>
            <div className="space-y-6">

                <h2 className="text-xl font-semibold shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)] p-4 border-b border-gray-300">
                    My Reviews & Ratings
                </h2>

                <div className='p-4 pt-0 space-y-2'>
                    {userReviews.map((review) => (
                        <div
                            key={review.id}
                            className="border border-gray-400 rounded-lg p-4 bg-white shadow-sm"
                        >

                            {/* Product */}
                            <div className="flex gap-3 items-center mb-3">
                                <img
                                    src={review.product.image}
                                    className="w-14 h-14 object-cover rounded"
                                />
                                <p className="text-sm font-medium">
                                    {review.product.title}
                                </p>
                            </div>

                            {/* Rating */}
                            <div className="flex mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">
                                        {i < review.rating ? "★" : "☆"}
                                    </span>
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-sm text-gray-600">
                                {review.comment}
                            </p>

                            {/* Footer */}
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-xs text-gray-400">
                                    {review.date}
                                </span>

                                <div className="flex gap-3 text-xs">
                                    <button className="text-red-500 bg-red-50 px-4 py-1 border rounded">Delete</button>
                                    <button className="text-blue-600 bg-blue-50 px-4 py-1 border rounded">Edit</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

const userReviews = [
    {
        id: 1,
        product: {
            title: "Nike Revolution 6 Running Shoes",
            image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=500",
        },
        rating: 5,
        comment: "Amazing comfort and quality. Totally worth it!",
        date: "2026-04-02",
    },
    {
        id: 2,
        product: {
            title: "Puma RS-X Sneakers",
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500",
        },
        rating: 4,
        comment: "Good design, but slightly tight fit.",
        date: "2026-03-28",
    },
];