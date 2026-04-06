import React from 'react'

export default function Wallet() {
    return (
        <>
            <div className="space-y-6">

                <h2 className="text-xl font-semibold p-4  shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)]">My Wallet</h2>

                <div className='p-4 pt-0 space-y-4'>
                    {/* Balance Card */}
                    <div className="bg-black text-white rounded-xl p-5">
                        <p className="text-sm opacity-70">Available Balance</p>
                        <h2 className="text-3xl font-bold">₹{walletData.balance}</h2>

                        <button className="mt-3 bg-white text-black px-4 py-2 rounded text-sm">
                            Add Money
                        </button>
                    </div>

                    {/* Transactions */}
                    <div className="border border-gray-400 rounded-lg p-4 bg-white">
                        <h3 className="font-medium mb-3">Recent Transactions</h3>

                        <div className="space-y-3">
                            {walletData.transactions.map((tx) => (
                                <div
                                    key={tx.id}
                                    className="flex justify-between items-center border-b border-b-gray-300 pb-2 last:border-none"
                                >
                                    <div>
                                        <p className="text-sm">{tx.reason}</p>
                                        <p className="text-xs text-gray-500">{tx.date}</p>
                                    </div>

                                    <p
                                        className={`font-semibold ${tx.type === "Credit"
                                            ? "text-green-600"
                                            : "text-red-500"
                                            }`}
                                    >
                                        {tx.type === "Credit" ? "+" : "-"}₹{tx.amount}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


const walletData = {
    balance: 1850,

    transactions: [
        {
            id: 1,
            type: "Credit",
            amount: 500,
            reason: "Refund - Nike Shoes",
            date: "2026-04-03",
        },
        {
            id: 2,
            type: "Debit",
            amount: 300,
            reason: "Order Payment",
            date: "2026-04-02",
        },
        {
            id: 3,
            type: "Credit",
            amount: 150,
            reason: "Cashback Offer",
            date: "2026-04-01",
        },
    ],
};