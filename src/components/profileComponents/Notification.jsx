import React from 'react'

export default function Notification() {

    return (
        <>
            <div className="space-y-6">

                {/* Header */}
                <div className=" p-4text-xl font-semibol  shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)] p-4 border-b border-gray-300">
                    <h2 className="text-xl font-semibold">Notifications</h2>
                    {/* <button className="text-sm text-blue-600">
                        Mark all as read
                    </button> */}
                </div>

                {/* List */}
                <div className="space-y-3 p-4">
                    {notificationsData.map((note) => (

                        <div
                            key={note.id}
                            className={`border border-gray-400 rounded-lg p-4 flex gap-3 items-start transition
                                        ${!note.read ? "bg-blue-50" : "bg-white"}
                                        `}
                        >

                            {/* Icon */}
                            <div className="text-xl">
                                {note.type === "order" && "📦"}
                                {note.type === "offer" && "🎟️"}
                                {note.type === "refund" && "💰"}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <p className="font-medium text-sm">
                                    {note.title}
                                </p>
                                <p className="text-xs text-gray-600">
                                    {note.message}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {note.time}
                                </p>
                            </div>

                            {/* Status */}
                            {!note.read && (
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                            )}

                        </div>

                    ))}
                </div>

            </div>
        </>
    )
}


const notificationsData = [
    {
        id: 1,
        type: "order",
        title: "Order Shipped",
        message: "Your Nike shoes have been shipped.",
        time: "2026-04-05 14:20",
        read: false,
    },
    {
        id: 2,
        type: "offer",
        title: "Limited Time Offer",
        message: "Get 20% OFF on all sports shoes.",
        time: "2026-04-04 10:00",
        read: false,
    },
    {
        id: 3,
        type: "refund",
        title: "Refund Processed",
        message: "₹2999 has been credited to your UPI.",
        time: "2026-04-03 18:45",
        read: true,
    },
];