import React from 'react'

export default function ReturnRefund() {
    return (
        <>
            <div className="space-y-4">

                <h2 className="text-xl font-semibold">
                    Returns & Refunds
                </h2>

                {returnRequests.map((item) => (

                    <div
                        key={item.id}
                        className="border rounded-xl p-4 bg-white shadow-sm"
                    >

                        {/* Top */}
                        <div className="flex justify-between items-center mb-3">
                            <p className="text-sm font-medium">
                                Return ID: {item.id}
                            </p>

                            <span
                                className={`text-xs px-2 py-1 rounded
            ${item.status === "Refund Completed"
                                        ? "bg-green-100 text-green-600"
                                        : item.status === "Pickup Scheduled"
                                            ? "bg-blue-100 text-blue-600"
                                            : "bg-yellow-100 text-yellow-600"
                                    }
          `}
                            >
                                {item.status}
                            </span>
                        </div>

                        {/* Product */}
                        <div className="flex gap-3 items-center mb-3">
                            <img
                                src={item.product.image}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                                <p className="text-sm">{item.product.title}</p>
                                <p className="text-xs text-gray-500">
                                    ₹{item.product.price}
                                </p>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="text-sm text-gray-600 space-y-1">
                            <p><strong>Reason:</strong> {item.reason}</p>
                            <p><strong>Requested:</strong> {item.requestedDate}</p>

                            {item.pickupDate && (
                                <p><strong>Pickup:</strong> {item.pickupDate}</p>
                            )}

                            {item.completedDate && (
                                <p><strong>Completed:</strong> {item.completedDate}</p>
                            )}
                        </div>

                        {/* Refund */}
                        <div className="mt-3 text-sm">
                            <p className="font-medium">
                                Refund: ₹{item.refundAmount}
                            </p>
                            <p className="text-gray-500 text-xs">
                                via {item.refundMethod}
                            </p>
                        </div>

                    </div>

                ))}

            </div>
        </>
    )
}


const returnRequests = [
  {
    id: "RET12345",
    orderId: "ORD123456",
    product: {
      title: "Nike Revolution 6 Running Shoes",
      image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=500",
      price: 2999,
    },
    reason: "Size too small",
    status: "Refund Completed", // Requested | Approved | Picked | Refunded
    refundAmount: 2999,
    refundMethod: "UPI",
    requestedDate: "2026-04-01",
    completedDate: "2026-04-04",
  },

  {
    id: "RET12346",
    orderId: "ORD123457",
    product: {
      title: "Puma RS-X Sneakers",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500",
      price: 4599,
    },
    reason: "Damaged product",
    status: "Pickup Scheduled",
    refundAmount: 4599,
    refundMethod: "Original Payment",
    requestedDate: "2026-04-03",
    pickupDate: "2026-04-06",
  },

  {
    id: "RET12347",
    orderId: "ORD123458",
    product: {
      title: "Campus Running Shoes",
      image: "https://images.unsplash.com/photo-1584735175315-9d5df23be620?q=80&w=500",
      price: 1299,
    },
    reason: "Changed mind",
    status: "Request Pending",
    refundAmount: 1299,
    refundMethod: "Wallet",
    requestedDate: "2026-04-05",
  },
];