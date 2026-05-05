import { useState } from "react";

const payouts = [
    { id: "PO-123456", date: "Nov 12, 2024", method: "Bank •••• 4242", amount: "$5,120.00", status: "FAILED" },
    { id: "PO-123455", date: "Oct 28, 2024", method: "Bank •••• 4242", amount: "$8,940.00", status: "COMPLETED" },
    { id: "PO-123454", date: "Oct 14, 2024", method: "Bank •••• 4242", amount: "$3,115.50", status: "COMPLETED" },
    { id: "PO-123453", date: "Sep 30, 2024", method: "Bank •••• 4242", amount: "$12,400.00", status: "PROCESSING" },
];

const statusStyles = {
    COMPLETED: "bg-green-100 text-green-600",
    FAILED: "bg-red-100 text-red-600",
    PROCESSING: "bg-blue-100 text-blue-600",
};

export default function SellerPayouts() {
    const [showDetails, setShowDetails] = useState(true);

    return (
        <div className="p-4 md:p-6 space-y-6">

            {/* HEADER */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold">Payouts</h1>
                <p className="text-gray-500 text-sm">Manage your earnings and schedule withdrawals</p>
            </div>

            {/* ALERT */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex justify-between items-start gap-4">
                <div>
                    <p className="text-red-600 font-medium">
                        Last payout failed due to bank processing error.
                    </p>
                    <p className="text-sm text-red-500">
                        Please verify your details.
                    </p>
                </div>
                <button className="text-red-600 font-medium underline">
                    Resolve Issue →
                </button>
            </div>

            {/* TOP CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* Available */}
                <div className="bg-white border rounded-xl p-5 shadow-sm">
                    <p className="text-sm text-gray-500">AVAILABLE BALANCE</p>
                    <h2 className="text-2xl font-bold text-orange-600">$12,482.50</h2>
                    <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition">
                        Withdraw Now →
                    </button>
                </div>

                {/* Pending */}
                <div className="bg-white border rounded-xl p-5 shadow-sm">
                    <p className="text-sm text-gray-500">PENDING BALANCE</p>
                    <h2 className="text-2xl font-bold">$3,210.00</h2>
                    <p className="text-xs text-gray-500 mt-2 bg-gray-100 px-2 py-1 inline-block rounded">
                        Earnings from 14 recent orders
                    </p>
                </div>

                {/* Next payout */}
                <div className="bg-white border rounded-xl p-5 shadow-sm">
                    <p className="text-sm text-gray-500">NEXT PAYOUT</p>
                    <h2 className="text-2xl font-bold">$5,120.00</h2>
                    <p className="text-sm text-orange-500 mt-2">
                        Scheduled for Nov 20, 2024
                    </p>
                </div>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Breakdown */}
                    <div className="bg-white border rounded-xl p-5">
                        <div className="flex justify-between mb-4">
                            <h3 className="font-semibold">Payout Breakdown</h3>
                            <span className="text-sm text-gray-500">Current Period</span>
                        </div>

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Gross Sales</span>
                                <span>$14,200.00</span>
                            </div>
                            <div className="flex justify-between text-red-500">
                                <span>Platform Fees (10%)</span>
                                <span>-$1,420.00</span>
                            </div>
                            <div className="flex justify-between text-red-500">
                                <span>Shipping Costs</span>
                                <span>-$247.50</span>
                            </div>
                            <div className="flex justify-between text-red-500">
                                <span>Refunds</span>
                                <span>-$50.00</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-semibold text-orange-600">
                                <span>Net Payout</span>
                                <span>$12,482.50</span>
                            </div>
                        </div>
                    </div>

                    {/* HISTORY TABLE */}
                    <div className="bg-white border rounded-xl overflow-hidden">

                        <div className="flex justify-between items-center p-4">
                            <h3 className="font-semibold">Payout History</h3>
                            <div className="flex gap-2">
                                <button className="border px-3 py-1 rounded text-sm">Filter</button>
                                <button className="border px-3 py-1 rounded text-sm">Export</button>
                            </div>
                        </div>

                        {/* DESKTOP TABLE */}
                        <div className="hidden md:block">
                            <div className="grid grid-cols-5 bg-gray-50 px-6 py-3 text-sm text-gray-500">
                                <p>ID</p>
                                <p>Date</p>
                                <p>Method</p>
                                <p>Amount</p>
                                <p>Status</p>
                            </div>

                            {payouts.map((p, i) => (
                                <div key={i} className="grid grid-cols-5 px-6 py-3 border-t text-sm items-center">
                                    <p>{p.id}</p>
                                    <p>{p.date}</p>
                                    <p>{p.method}</p>
                                    <p className="font-medium">{p.amount}</p>
                                    <span className={`px-2 py-1 text-xs rounded-full ${statusStyles[p.status]}`}>
                                        {p.status}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* MOBILE CARDS */}
                        <div className="md:hidden p-4 space-y-3">
                            {payouts.map((p, i) => (
                                <div key={i} className="border rounded-lg p-3">
                                    <div className="flex justify-between">
                                        <p className="font-medium">{p.id}</p>
                                        <span className={`px-2 py-1 text-xs rounded-full ${statusStyles[p.status]}`}>
                                            {p.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500">{p.date}</p>
                                    <p className="text-sm">{p.method}</p>
                                    <p className="font-semibold mt-1">{p.amount}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-6">

                    {/* Payout Method */}
                    <div className="bg-white border rounded-xl p-5">
                        <div className="flex justify-between mb-3">
                            <h3 className="font-semibold">Payout Method</h3>
                            <button className="text-orange-500 text-sm">Edit</button>
                        </div>

                        <div className="border rounded-lg p-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">Bank Account</p>
                                    <p className="text-sm text-gray-500">Ending in •••• 4242</p>
                                </div>
                                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                    VERIFIED
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                Deposits usually take 2–3 business days.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* MOBILE COLLAPSIBLE */}
            <div className="md:hidden bg-white border rounded-xl p-4">
                <div
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex justify-between cursor-pointer"
                >
                    <h3 className="font-semibold">Payout Details</h3>
                    <span>{showDetails ? "▲" : "▼"}</span>
                </div>

                {showDetails && (
                    <div className="mt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Total Sales</span>
                            <span>$5,120.00</span>
                        </div>
                        <div className="flex justify-between text-red-500">
                            <span>Marketplace Fee</span>
                            <span>-$409.60</span>
                        </div>
                        <div className="flex justify-between text-red-500">
                            <span>Processing Fees</span>
                            <span>-$24.90</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold text-orange-600">
                            <span>Net Payout</span>
                            <span>$4,685.50</span>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}