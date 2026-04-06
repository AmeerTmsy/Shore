import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function MyStuff() {
    const navigate = useNavigate();
    const myStuff = {
        wishlist: [
            {
                id: 1,
                title: "Nike Air Max Alpha Trainer",
                image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500",
                price: 4999,
                originalPrice: 6999,
                discount: 28,
            },
            {
                id: 2,
                title: "Adidas Ultraboost Light",
                image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500",
                price: 8999,
                originalPrice: 11999,
                discount: 25,
            },
        ],

        recentlyViewed: [
            {
                id: 3,
                title: "Puma RS-X Reinvention",
                image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500",
                price: 4599,
            },
            {
                id: 4,
                title: "Campus Oxyfit Running Shoes",
                image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500",
                price: 1299,
            },
        ],

        savedForLater: [
            {
                id: 5,
                title: "Red Tape Casual Sneakers",
                image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=500",
                price: 2799,
                quantity: 1,
            },
        ],
    };

    return (
        <div>

            <h2 className="text-xl font-semibold shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)] p-4 border-b border-gray-300">My Stuff</h2>

            <div className="space-y-6 p-4">
                {/* Wishlist */}
                <div>
                    <h3 className="font-medium mb-2">Wishlist</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {myStuff.wishlist.map((item) => (
                            <div key={item.id} onClick={() => navigate('/product/1')} className="shadow-sm bg-white p-3 rounded-lg  hover:shadow-md cursor-pointer transition duration-500">
                                <img src={item.image} className="w-full h-32 object-cover rounded" />
                                <p className="text-sm mt-2 line-clamp-2">{item.title}</p>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="font-semibold">₹{item.price}</span>
                                    <span className="line-through text-gray-400">
                                        ₹{item.originalPrice}
                                    </span>
                                </div>
                                <button className="text-blue-600 text-sm mt-2"> Move to Cart </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recently Viewed */}
                <div>
                    <h3 className="font-medium mb-2">Recently Viewed</h3>
                    <div className="flex gap-2 overflow-x-auto p-2 bg-white rounded">
                        {myStuff.recentlyViewed.map((item) => (
                            <div key={item.id} onClick={() => navigate('/product/1')} className="min-w-37.5 bg-gray-100 hover:shadow-md p-2 rounded transition duration-500 cursor-pointer">

                                <img src={item.image} className="w-full h-28 object-cover rounded" />

                                <p className="text-sm mt-1">{item.title}</p>
                                <p className="text-sm font-semibold">₹{item.price}</p>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Saved for Later */}
                <div>
                    <h3 className="font-medium mb-2">Saved for Later</h3>
                    {myStuff.savedForLater.map((item) => (
                        <div key={item.id} className="flex gap-3 border border-gray-200 shadow-sm p-3 rounded-lg">

                            <img src={item.image} className="w-16 h-16 object-cover rounded" />

                            <div className="flex-1">
                                <p className="text-sm">{item.title}</p>
                                <p className="font-semibold text-sm">₹{item.price}</p>

                                <div className="flex gap-3 text-xs mt-2">
                                    <button className="text-red-500 px-5 py-1 border border-red-400 bg-red-50 rounded cursor-pointer">Remove</button>
                                    <button className="text-blue-600 px-5 py-1 border border-blue-400 bg-blue-50 rounded cursor-pointer">Move to Cart</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
