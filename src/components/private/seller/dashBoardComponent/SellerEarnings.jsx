import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
} from "recharts";

const SellerEarnings = () => {
    const [range, setRange] = useState('7');

    const summary = [
        { title: "Total Earnings", value: "$42,950.00", change: "+10%" },
        { title: "Net Earnings", value: "$35,210.40", change: "+10%" },
        { title: "Available Balance", value: "$12,480.00", change: "+10%" },
        { title: "Pending Balance", value: "$2,140.25", change: "+10%" },
    ];

    const breakdown = [
        { label: "Gross Sales", value: "$45,800.00", positive: true },
        { label: "Platform Fees (12%)", value: "-$5,496.00", positive: false },
        { label: "Shipping Reimbursements", value: "+$2,450.00", positive: true },
        { label: "Refunds / Disputes", value: "-$1,240.00", positive: false },
    ];

    const transactions = [
        {
            date: "Oct 24, 2023",
            id: "#SL-92841",
            gross: "$840.00",
            fees: "-$100.80",
            net: "$739.20",
            status: "processing",
        },
        {
            date: "Oct 23, 2023",
            id: "#SL-92838",
            gross: "$1,200.00",
            fees: "-$144.00",
            net: "$1,056.00",
            status: "completed",
        },
    ];

    const data7 = [
        { date: "Mon", earnings: 300 },
        { date: "Tue", earnings: 600 },
        { date: "Wed", earnings: 400 },
        { date: "Thu", earnings: 800 },
        { date: "Fri", earnings: 500 },
        { date: "Sat", earnings: 550 },
        { date: "Sun", earnings: 1000 },
    ];
    const data30 = [
        { date: "05 Oct", earnings: 400 },
        { date: "10 Oct", earnings: 600 },
        { date: "15 Oct", earnings: 500 },
        { date: "20 Oct", earnings: 500 },
        { date: "25 Oct", earnings: 500 },
        { date: "30 Oct", earnings: 500 },
    ];
    const data90 = [
        { date: "01 Oct", earnings: 400 },
        { date: "15 Oct", earnings: 600 },
        { date: "01 Nov", earnings: 500 },
        { date: "15 Nov", earnings: 1000 },
        { date: "01 Dec", earnings: 700 },
        { date: "15 Dec", earnings: 900 },
        { date: "1 Jan", earnings: 850 },
    ];

    const filterData = (range) => {
        if (range === "7") return data7;
        if (range === "30") return data30;
        if (range === "90") return data90; // later expand
    };

    const statusStyles = {
        processing: "bg-blue-100 text-blue-600",
        completed: "bg-green-100 text-green-600",
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold">Earnings</h1>
                <p className="text-gray-500 text-sm">Track your revenue, fees, and payouts</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {summary.map((s, i) => (
                    <div
                        key={i}
                        className="bg-white border rounded-xl p-5 flex flex-col justify-between"
                    >
                        <div className="flex justify-between text-sm text-gray-500">
                            <p>{s.title}</p>
                            <span className="text-green-600 bg-green-100 px-2 py-0.5 rounded text-xs">{s.change}</span>
                        </div>
                        <h2 className="text-xl font-semibold mt-3">{s.value}</h2>
                    </div>
                ))}
            </div>

            {/* Earnings Trend */}
            <div className="bg-white border rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Earnings Trend</h3>
                    <div className="flex gap-2 text-sm">
                        {["7", "30", "90"].map((r) => (
                            <button
                                key={r}
                                onClick={() => setRange(r)}
                                className={`px-3 py-1 rounded ${range === r
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-100 text-gray-600"
                                    }`}
                            >{r} Days</button>
                        ))}
                    </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-48 bg-linear-to-t from-orange-100 to-transparent rounded-lg flex items-end justify-center text-gray-400 text-sm">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={filterData(range)}>
                            <defs>
                                <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            <XAxis dataKey="date" stroke="#9CA3AF" />
                            <Tooltip contentStyle={{
                                background: "#fff",
                                borderRadius: "10px",
                                border: "1px solid #eee",
                            }} />
                            <Area
                                type="monotone"
                                dataKey="earnings"
                                stroke="#f97316"
                                fill="url(#colorEarnings)"
                                strokeWidth={3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Breakdown + Payout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Breakdown */}
                <div className="bg-white border rounded-xl p-6">
                    <h3 className="font-semibold mb-4">Earnings Breakdown</h3>
                    <div className="space-y-3">
                        {breakdown.map((b, i) => (
                            <div key={i} className="flex justify-between text-sm">
                                <p className="text-gray-600">{b.label}</p>
                                <p
                                    className={`${b.positive ? "text-green-600" : "text-red-500"
                                        }`}
                                >{b.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                        <p className="font-semibold">Net Earnings</p>
                        <p className="text-orange-500 font-semibold text-lg">$41,514.00</p>
                    </div>
                </div>

                {/* Payout */}
                <div className="bg-white border rounded-xl p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold">Payout Status</h3>
                            <span className="text-orange-600 bg-orange-100 px-2 py-0.5 text-xs rounded">
                                READY
                            </span>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg mb-4 flex justify-between text-sm">
                            <div>
                                <p className="text-gray-400">Last Payout</p>
                                <p className="font-medium">$8,240.50</p>
                                <p className="text-xs text-gray-400">Oct 12, 2023</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Next Payout</p>
                                <p className="font-medium">Oct 26, 2023</p>
                                <p className="text-xs text-gray-400">Scheduled</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-gray-100 rounded-lg">🏦</div>
                            <div>
                                <p className="font-medium">Chase Business Checking</p>
                                <p className="text-xs text-gray-400">Ending in •••• 4829</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition">
                        Withdraw Now →
                    </button>
                </div>
            </div>

            {/* Transactions */}
            <div className="bg-white border rounded-xl overflow-x-auto">
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <h3 className="font-semibold">Transaction History</h3>
                    <button className="text-orange-500 text-sm">Download CSV ↓</button>
                </div>

                <div className="min-w-[700px]">
                    <div className="grid grid-cols-6 px-6 py-3 text-sm text-gray-500 border-b bg-gray-50">
                        <p>Date</p>
                        <p>Order ID</p>
                        <p>Gross</p>
                        <p>Fees</p>
                        <p>Net</p>
                        <p>Status</p>
                    </div>

                    {transactions.map((t, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-6 px-6 py-3 text-sm border-b hover:bg-gray-50"
                        >
                            <p>{t.date}</p>
                            <p className="font-medium">{t.id}</p>
                            <p>{t.gross}</p>
                            <p className="text-red-500">{t.fees}</p>
                            <p className="text-orange-500 font-medium">{t.net}</p>
                            <span
                                className={`px-2 py-1 text-xs rounded-full w-fit ${statusStyles[t.status]}`}
                            >{t.status}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SellerEarnings;