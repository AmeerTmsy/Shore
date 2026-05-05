
import { color } from "framer-motion";
import { title } from "framer-motion/client";
import { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
} from "recharts";


export default function SalesOverview() {
    const [range, setRange] = useState("7d");

    const getData = () => {
        switch (range) {
            case "30d":
                return data30Days;
            case "90d":
                return data90Days;
            default:
                return data7Days;
        }
    };
    return (
        <div className="p-6 space-y-6 min-h-screen">
            <div>
                <h1 className="text-2xl font-bold">Sales Overview</h1>
                <p className="text-gray-500 w-full max-w-3xl">
                    Track your store’s performance, monitor revenue trends, and uncover insights to drive smarter business decisions.
                </p>
            </div>
            {/* TOP STATS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {overViewData.map((card) => (
                    <div key={card.title} className="bg-white p-5 rounded-xl shadow-sm">
                        <div className="flex justify-between mb-2">
                            <div className="p-2 bg-gray-200 rounded-md">
                                {card.icon}
                            </div>
                            <div>
                                <span className="text-green-500 text-sm bg-green-50 px-2 rounded-full">{card.change}</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">{card.title}</p>
                        <h2 className="text-2xl font-bold mt-2">{card.value}</h2>
                        <span className="text-gray-500 text-xs font-light">vs last month</span>
                    </div>
                ))}
            </div>
            {/* CHART + BREAKDOWN */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* LINE CHART */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
                    {/* HEADER */}
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="font-semibold text-lg">Revenue Over Time</h2>
                            <p className="text-sm text-gray-400">
                                Historical performance trends
                            </p>
                        </div>
                        {/* FILTER */}
                        <div className="bg-gray-100 p-1 rounded-lg flex gap-1">
                            {[
                                { label: "7 Days", value: "7d" },
                                { label: "30 Days", value: "30d" },
                                { label: "90 Days", value: "90d" },
                            ].map((item) => (
                                <button
                                    key={item.value}
                                    onClick={() => setRange(item.value)}
                                    className={`px-3 py-1 text-sm rounded-md transition ${range === item.value ? "bg-white shadow text-orange-500 font-medium" : "text-gray-500"}`}
                                >{item.label}</button>
                            ))}
                        </div>
                    </div>
                    {/* CHART */}
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={getData()}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#94a3b8" />
                            <Tooltip />
                            {/* AREA (background fill like your UI) */}
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="none"
                                fill="url(#colorRevenue)"
                            />
                            {/* LINE (bold orange stroke) */}
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#f97316"
                                strokeWidth={5}
                                dot={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* BREAKDOWN */}
                <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                    <h2 className="font-semibold">Revenue Breakdown</h2>
                    {revenueBreakdownData.map((item) => (
                        <div
                            key={item.label}
                            className={`p-4 ${item.bg} rounded-lg flex justify-between items-center`}
                        >
                            <div>
                                <p className={`text-sm ${item.textColor}`}>{item.label}</p>
                                <p className="font-bold">{item.value}</p>
                            </div>
                            <div className={item.textColor}>{item.icon}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* LOWER GRID */}
            <div className="grid lg:grid-cols-3 gap-6">

                {/* DONUT */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="font-semibold mb-4">Order Status</h2>
                    <div className="flex justify-center">

                        <PieChart width={200} height={200}>
                            <Pie
                                data={orderData}
                                innerRadius={55}
                                outerRadius={80}
                                dataKey="value"
                            >
                                {orderData.map((entry, index) => (
                                    <Cell key={index} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>

                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                        {orderData.map((entry, index) => (
                            <div key={index} className="flex justify-between items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></span>
                                    <span className="font-light">{entry.title}</span>
                                </div>
                                <p className="font-medium">{entry.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PROGRESS */}
                <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                    <h2 className="font-semibold">Sales by Category</h2>

                    {[
                        { name: "Lifestyle", value: 42 },
                        { name: "Running", value: 28 },
                        { name: "Casual", value: 18 },
                        { name: "Sports", value: 12 },
                    ].map((item) => (
                        <div key={item.name}>
                            <div className="flex justify-between text-sm mb-1">
                                <span>{item.name}</span>
                                <span>{item.value}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                                <div
                                    className="h-2 bg-orange-500 rounded-full"
                                    style={{ width: `${item.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* SIDE INFO */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500">Avg. Order Value</p>
                        <h2 className="text-2xl font-bold">$103.50</h2>
                        <p className="text-green-500 text-sm mt-1">
                            ↑ 4.2% higher than Q3
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-semibold mb-3">Top 5 Cities</h2>
                        {[
                            ["New York", 220],
                            ["Los Angeles", 192],
                            ["Chicago", 180],
                            ["Miami", 156],
                            ["Austin", 110],
                        ].map(([city, value]) => (
                            <div key={city} className="flex justify-between text-sm py-1">
                                <span>{city}</span>
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const overViewData = [
    { title: "Total Revenue", value: "$128,450", change: "+12.5%", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6M9 11a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M2 7.25A2.25 2.25 0 0 1 4.25 5h12.5A2.25 2.25 0 0 1 19 7.25v7.5A2.25 2.25 0 0 1 16.75 17H4.25A2.25 2.25 0 0 1 2 14.75zm2.25-.75a.75.75 0 0 0-.75.75V8h.75A.75.75 0 0 0 5 7.25V6.5zm-.75 6h.75a2.25 2.25 0 0 1 2.25 2.25v.75h8v-.75a2.25 2.25 0 0 1 2.25-2.25h.75v-3h-.75a2.25 2.25 0 0 1-2.25-2.25V6.5h-8v.75A2.25 2.25 0 0 1 4.25 9.5H3.5zm14-4.5v-.75a.75.75 0 0 0-.75-.75H16v.75c0 .414.336.75.75.75zm0 6h-.75a.75.75 0 0 0-.75.75v.75h.75a.75.75 0 0 0 .75-.75zm-14 .75c0 .414.336.75.75.75H5v-.75a.75.75 0 0 0-.75-.75H3.5zm.901 3.75A3 3 0 0 0 7 20h10.25A4.75 4.75 0 0 0 22 15.25V10a3 3 0 0 0-1.5-2.599v7.849a3.25 3.25 0 0 1-3.25 3.25z" /></svg> },
    { title: "Total Orders", value: "1,240", change: "+8.2%", icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.88 12.39a1 1 0 0 1-1 1.11H2.12a1 1 0 0 1-1-1.11L2 4.5h10zM4.5 4.5V3a2.5 2.5 0 1 1 5 0v1.5" strokeWidth={0.8}></path></svg> },
    { title: "Net Profit", value: "$42,100", change: "+15.4%", icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 9V6.4c0-1.325-.88-2.4-1.964-2.4H2.964C1.879 4 1 5.075 1 6.4v11.2c0 1.325.88 2.4 1.964 2.4h16.072C20.121 20 21 18.925 21 17.6V15m-1-3h.01M16.6 9h4.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-2.8A1.6 1.6 0 0 1 16.6 9"></path></svg> },
    { title: "Profit Margin", value: "32.8%", change: "-2.1%", icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M22 21H2V3h2v16h2v-2h4v2h2v-3h4v3h2v-2h4zm-4-7h4v2h-4zm-6-8h4v3h-4zm4 9h-4v-5h4zM6 10h4v2H6zm4 6H6v-3h4z"></path></svg> },
]

const revenueBreakdownData = [
    { label: "Gross Sales", value: "$145,200", textColor: "text-gray-500", bg: "bg-gray-50", icon: (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.2}><path strokeLinejoin="round" d="M18 21V3l-3 2l-3-2l-3 2l-3-2v18l3-1.5l3 1.5l3-1.5z"></path><path strokeLinecap="round" d="M10 9h4m-4 6h4m-4-3h4"></path></g></svg>), },
    { label: "Refunds", value: "$16,750", textColor: "text-red-500", bg: "bg-red-50", icon: (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeWidth={2.3}><path d="m13 8l-7 6l7 7"></path><path d="M6 14h22.994c6.883 0 12.728 5.62 12.996 12.5c.284 7.27-5.723 13.5-12.996 13.5H11.998"></path></g></svg>), },
    { label: "Net Sales", value: "$128,450", textColor: "text-orange-500", bg: "bg-orange-50", icon: (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeWidth={2.5}> <path d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"></path><path strokeLinecap="round" d="m16 24l6 6l12-12"></path></g></svg>), },
];

const revenueData = [
    { name: "Mon", value: 2000 },
    { name: "Tue", value: 1500 },
    { name: "Wed", value: 4000 },
    { name: "Thu", value: 3000 },
    { name: "Fri", value: 6000 },
    { name: "Sat", value: 5000 },
    { name: "Sun", value: 4500 },
];

const orderData = [
    { name: "Success", value: 1180, color: "#4bb543", title: "Successful" },
    { name: "Pending", value: 15, color: "#94a3b8", title: "Pending" },
    { name: "Cancelled", value: 45, color: "#ef4444", title: "Cancelled" },
];

const data7Days = [
    { name: "Mon", value: 2000 },
    { name: "Tue", value: 1500 },
    { name: "Wed", value: 4000 },
    { name: "Thu", value: 3000 },
    { name: "Fri", value: 6000 },
    { name: "Sat", value: 5000 },
    { name: "Sun", value: 4500 },
];

const data30Days = [
    { name: "Week 1", value: 12000 },
    { name: "Week 2", value: 18000 },
    { name: "Week 3", value: 15000 },
    { name: "Week 4", value: 22000 },
];

const data90Days = [
    { name: "Month 1", value: 40000 },
    { name: "Month 2", value: 52000 },
    { name: "Month 3", value: 61000 },
];