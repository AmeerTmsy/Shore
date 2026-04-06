import React from 'react'

export default function HelpSupport() {
    return (
        <>
            <div className="space-y-6">

                <h2 className="text-xl font-semibold shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)] p-4 border-b border-gray-300">Help & Support</h2>

                <div className='p-4 pt-0 space-y-2'>
                    {/* FAQ */}
                    <div className="border border-gray-400 rounded-xl p-4 bg-white">
                        <h3 className="font-medium mb-3">Frequently Asked Questions</h3>

                        <div className="space-y-3">
                            {helpData.faqs.map((faq, i) => (
                                <div key={i}>
                                    <p className="font-normal text-sm">{faq.question}</p>
                                    <p className="text-xs text-gray-500">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="border border-gray-400 rounded-xl p-4 bg-white">
                        <h3 className="font-medium mb-3">Contact Us</h3>

                        <div className="space-y-3">
                            {helpData.contactOptions.map((opt, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center"
                                >
                                    <div>
                                        <p className="text-sm font-noraml ">{opt.type}</p>
                                        <p className="text-xs text-gray-500">
                                            {opt.description}
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-400">
                                        {opt.availability}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tickets */}
                    <div className="border border-gray-400 rounded-xl p-4 bg-white">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-medium">My Requests</h3>
                            <button className="text-blue-600 text-sm">
                                + New Request
                            </button>
                        </div>

                        <div className="space-y-2">
                            {helpData.tickets.map((ticket) => (
                                <div
                                    key={ticket.id}
                                    className="flex justify-between items-center border-b border-gray-300 pb-2 last:border-none"
                                >
                                    <div>
                                        <p className="text-sm font-light">{ticket.subject}</p>
                                        <p className="text-xs text-gray-500">
                                            {ticket.date}
                                        </p>
                                    </div>

                                    <span
                                        className={`text-xs px-2 py-1 rounded ${ticket.status === "Resolved"
                                            ? "bg-green-100 text-green-600"
                                            : "bg-yellow-100 text-yellow-600"
                                            }`}
                                    >
                                        {ticket.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const helpData = {
    faqs: [
        {
            question: "How do I track my order?",
            answer: "Go to 'My Orders' and click on 'Track Order'.",
        },
        {
            question: "How can I return a product?",
            answer: "Open your order and click 'Return Item'.",
        },
        {
            question: "When will I get my refund?",
            answer: "Refunds are processed within 3-5 business days.",
        },
    ],

    contactOptions: [
        {
            type: "Chat Support",
            description: "Chat with our support team instantly",
            availability: "Available 24/7",
        },
        {
            type: "Call Support",
            description: "Talk directly to our agent",
            availability: "9 AM - 9 PM",
        },
        {
            type: "Email Support",
            description: "support@yourstore.com",
            availability: "Response within 24 hours",
        },
    ],

    tickets: [
        {
            id: "TCK123",
            subject: "Refund not received",
            status: "Open",
            date: "2026-04-04",
        },
        {
            id: "TCK124",
            subject: "Wrong product delivered",
            status: "Resolved",
            date: "2026-04-02",
        },
    ],
};
