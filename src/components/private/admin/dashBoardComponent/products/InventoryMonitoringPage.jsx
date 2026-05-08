import React, { useState } from "react";
import { Search, Filter, Plus, Download, RefreshCw, MoreVertical, PackageCheck, AlertTriangle, Warehouse, Gauge, ChevronRight, ChevronLeft, X, ArrowUpRight, ArrowDownRight, Bell, Database, } from "lucide-react";

import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, BarChart, Bar, XAxis, Tooltip, } from "recharts";

export default function InventoryMonitoringPage() {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="min-h-screen bg-[#f6f6f7] p-4 md:p-8">
            {/* HEADER */}
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Inventory Monitoring
                    </h1>
                    <p className="text-zinc-500 mt-2 text-sm md:text-lg">
                        Track stock movement, warehouse health, and fulfillment inventory
                        across all sellers.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <button className="dashboard-btn">
                        <Download size={18} />
                        Export CSV
                    </button>

                    <button className="dashboard-btn">
                        <RefreshCw size={18} />
                        Refresh
                    </button>

                    <button className="dashboard-btn">
                        <Filter size={18} />
                        Advanced Filter
                    </button>

                    <button className="primary-btn">
                        <Plus size={18} />
                        Add Inventory
                    </button>
                </div>
            </div>

            {/* STATS */}
            <div className="mt-8 overflow-x-auto scrollbar-hide">
                <div className="flex gap-5 min-w-max xl:grid xl:grid-cols-6">
                    {statCards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white min-w-[280px] xl:min-w-0 rounded-[32px] border border-orange-100 p-6 shadow-sm"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center">
                                    <Icon className={`${card.color}`} />
                                </div>

                                <div className="mt-6">
                                    <p className="text-zinc-500 font-semibold text-sm tracking-wide">
                                        {card.title}
                                    </p>

                                    <div className="flex items-end gap-2 mt-2">
                                        <h2 className={`text-5xl font-bold ${card.color}`}>
                                            {card.value}
                                        </h2>

                                        <span className={`text-sm font-medium ${card.color}`}>
                                            {card.sub}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* SEARCH */}
            <div className="bg-white border border-orange-100 rounded-[34px] p-4 mt-8">
                <div className="flex flex-col xl:flex-row gap-4">
                    <div className="flex-1 flex items-center gap-3 bg-white rounded-2xl border border-orange-100 px-5 h-16">
                        <Search className="text-zinc-400" />
                        <input
                            className="bg-transparent outline-none w-full text-lg"
                            placeholder="Search by SKU, Product Name, or Seller..."
                        />
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {[
                            "Category: All",
                            "Warehouse: Global",
                            "Seller: All",
                            "Status: Healthy",
                        ].map((item) => (
                            <button key={item} className="dashboard-btn h-16 px-6">
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden xl:block mt-8 bg-white rounded-[34px] overflow-hidden border border-orange-100">
                <table className="w-full">
                    <thead className="bg-zinc-50">
                        <tr className="text-left text-zinc-500 text-sm">
                            {[
                                "SKU ID",
                                "PRODUCT",
                                "SELLER / WAREHOUSE",
                                "STOCK LEVEL",
                                "STATUS",
                                "MOVEMENT",
                                "ACTIONS",
                            ].map((head) => (
                                <th key={head} className="p-6 font-semibold tracking-wider">
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {inventoryItems.map((item, index) => (
                            <tr
                                key={index}
                                className="border-t border-orange-100 cursor-pointer hover:bg-orange-50/40 transition"
                                onClick={() => setSelectedItem(item)}
                            >
                                <td className="p-6 text-zinc-500 font-medium">{item.id}</td>

                                <td className="p-6">
                                    <div className="flex items-center gap-5">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="w-16 h-16 rounded-2xl object-cover"
                                        />

                                        <h3 className="text-2xl font-bold">{item.name}</h3>
                                    </div>
                                </td>

                                <td className="p-6">
                                    <h4 className="font-bold text-xl">{item.seller}</h4>
                                    <p className="text-zinc-500">{item.warehouse}</p>
                                </td>

                                <td className="p-6">
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-bold">
                                                {item.stock} units
                                            </span>
                                            <span className="text-zinc-500">
                                                {item.progress}%
                                            </span>
                                        </div>

                                        <div className="h-3 rounded-full bg-zinc-100 overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${item.status === "Healthy"
                                                    ? "bg-green-500"
                                                    : item.status === "Low Stock"
                                                        ? "bg-orange-500"
                                                        : "bg-red-500"
                                                    }`}
                                                style={{ width: `${item.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>

                                <td className="p-6">
                                    <span
                                        className={`px-5 py-2 rounded-full text-sm font-semibold ${item.status === "Healthy"
                                            ? "bg-green-100 text-green-700"
                                            : item.status === "Low Stock"
                                                ? "bg-orange-100 text-orange-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>

                                <td className="p-6">
                                    <div
                                        className={`flex items-center gap-2 text-2xl font-bold ${item.movementType === "up"
                                            ? "text-green-500"
                                            : item.movementType === "down"
                                                ? "text-red-500"
                                                : "text-zinc-400"
                                            }`}
                                    >
                                        {item.movementType === "up" && (
                                            <ArrowUpRight size={20} />
                                        )}

                                        {item.movementType === "down" && (
                                            <ArrowDownRight size={20} />
                                        )}

                                        {item.movement}
                                    </div>
                                </td>

                                <td className="p-6">
                                    <MoreVertical />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-between p-6 border-t border-orange-100">
                    <p className="text-zinc-500 font-medium">
                        Showing 1-10 of 12,450 SKUs
                    </p>

                    <div className="flex gap-3">
                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                className={`w-14 h-14 rounded-2xl border ${page === 1
                                    ? "bg-orange-700 text-white"
                                    : "bg-white text-black"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* MOBILE CARDS */}
            <div className="xl:hidden mt-8 space-y-5">
                {inventoryItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[32px] border border-orange-100 p-5"
                    >
                        <div className="flex gap-4">
                            <img
                                src={item.image}
                                alt=""
                                className="w-28 h-28 rounded-3xl object-cover"
                            />

                            <div className="flex-1">
                                <div className="flex justify-between gap-2">
                                    <h3 className="text-2xl font-bold leading-tight">
                                        {item.name}
                                    </h3>

                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === "Healthy"
                                            ? "bg-zinc-200 text-zinc-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </div>

                                <p className="text-zinc-400 text-lg mt-2">
                                    SKU: {item.id}
                                </p>

                                <h2
                                    className={`text-4xl font-bold mt-4 ${item.status === "Critical"
                                        ? "text-red-500"
                                        : "text-orange-600"
                                        }`}
                                >
                                    {item.stock}
                                    <span className="text-zinc-500 text-2xl ml-2">
                                        Units in Stock
                                    </span>
                                </h2>
                            </div>
                        </div>

                        <div className="border-t border-orange-100 mt-5 pt-5 flex gap-4">
                            <button
                                onClick={() => setSelectedItem(item)}
                                className="flex-1 bg-zinc-100 rounded-2xl h-16 text-2xl font-semibold"
                            >
                                View Details
                            </button>

                            <button className="flex-1 bg-orange-500 text-white rounded-2xl h-16 text-2xl font-semibold">
                                Restock
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* INSIGHTS */}
            <div className="grid xl:grid-cols-4 gap-6 mt-10">
                {/* HEALTH */}
                <div className="bg-white rounded-[34px] border border-orange-100 p-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-3xl font-bold">Health Overview</h3>
                        <Database />
                    </div>

                    <div className="h-64 mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    innerRadius={70}
                                    outerRadius={90}
                                >
                                    <Cell fill="#b45309" />
                                    <Cell fill="#f97316" />
                                    <Cell fill="#ef4444" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span>Healthy</span>
                            <span className="font-bold">1.2M</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Low Stock</span>
                            <span className="font-bold">42k</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Critical</span>
                            <span className="font-bold">8.5k</span>
                        </div>
                    </div>
                </div>

                {/* AI */}
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[34px] p-8 text-white">
                    <h3 className="text-4xl font-bold">Velocity AI</h3>

                    <p className="text-zinc-300 mt-5 text-lg leading-relaxed">
                        Predicted stockouts for 14 SKUs in the next 48 hours.
                    </p>

                    <button className="w-full mt-10 bg-white/10 border border-white/10 rounded-3xl h-16 font-semibold text-xl">
                        View Forecast
                    </button>
                </div>

                {/* ACTIVITY */}
                <div className="bg-white rounded-[34px] border border-orange-100 p-6">
                    <h3 className="text-3xl font-bold">Recent Activity</h3>

                    <div className="space-y-6 mt-6">
                        {[
                            "Shipment received",
                            "Delayed: London Hub",
                            "Internal Transfer",
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
                                    <Bell size={18} />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-lg">{item}</h4>
                                    <p className="text-zinc-500">2h ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ALERTS */}
                <div className="bg-red-50 rounded-[34px] border border-red-100 p-6">
                    <div className="flex items-center gap-3">
                        <AlertTriangle className="text-red-600" />
                        <h3 className="text-3xl font-bold text-red-700">
                            Seller Risk Alerts
                        </h3>
                    </div>

                    <div className="space-y-4 mt-6">
                        {["Urban Kickz", "Sole Collective"].map((seller) => (
                            <div
                                key={seller}
                                className="bg-white rounded-3xl border border-red-100 p-5"
                            >
                                <h4 className="font-bold text-xl">{seller}</h4>
                                <p className="text-red-500 mt-2">
                                    Late shipments detected
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${selectedItem
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                    }`}
                onClick={() => setSelectedItem(null)}
            />
            {/* DRAWER */}
            <div
                className={`fixed right-0 top-0 z-50 h-full w-full overflow-y-auto transition-all duration-300 lg:w-[760px] ${selectedItem ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {selectedItem && (
                    <div className="w-full bg-white h-screen overflow-y-auto rounded-l-[40px]">
                        {/* HEADER */}
                        <div className="sticky top-0 bg-white border-b border-orange-100 p-8 z-10 m-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <h2 className="text-5xl font-bold">
                                            {selectedItem.name}
                                        </h2>

                                        <span className="px-5 py-2 rounded-full bg-red-100 text-red-600 font-semibold">
                                            Low Stock
                                        </span>
                                    </div>

                                    <div className="flex gap-4 mt-4 text-zinc-500">
                                        <span>SKU: AJ1-2024-RED</span>
                                        <span>Last synced: 2 mins ago</span>
                                    </div>
                                </div>

                                <button onClick={() => setSelectedItem(null)}>
                                    <X size={36} />
                                </button>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-8">
                            <div className="grid xl:grid-cols-2 gap-8">
                                <div>
                                    <img
                                        src={selectedItem.image}
                                        alt=""
                                        className="w-full h-[420px] object-cover rounded-[32px]"
                                    />

                                    <div className="flex gap-4 mt-4">
                                        {[1, 2, 3].map((item) => (
                                            <img
                                                key={item}
                                                src={selectedItem.image}
                                                alt=""
                                                className="w-24 h-24 rounded-2xl object-cover"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            ["Current Stock", "12"],
                                            ["Reserved", "4"],
                                            ["Damaged", "1"],
                                        ].map((card) => (
                                            <div
                                                key={card[0]}
                                                className="border border-orange-100 rounded-3xl p-5"
                                            >
                                                <p className="text-zinc-500">{card[0]}</p>
                                                <h3 className="text-5xl font-bold mt-3">
                                                    {card[1]}
                                                </h3>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border border-orange-100 rounded-[32px] p-6">
                                        <div className="flex justify-between">
                                            <h3 className="text-3xl font-bold">
                                                Warehouse Assignment
                                            </h3>

                                            <button className="text-orange-600 font-semibold">
                                                Change
                                            </button>
                                        </div>

                                        <div className="space-y-6 mt-8">
                                            <div className="flex justify-between">
                                                <span className="text-zinc-500">Primary Hub</span>
                                                <span className="font-bold">
                                                    Los Angeles Main
                                                </span>
                                            </div>

                                            <div className="flex justify-between">
                                                <span className="text-zinc-500">Rack Location</span>
                                                <span className="font-bold">
                                                    B-12 / Section 4
                                                </span>
                                            </div>

                                            <div className="flex justify-between">
                                                <span className="text-zinc-500">
                                                    Safety Stock Level
                                                </span>
                                                <span className="font-bold text-orange-600">
                                                    15 Units
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CHARTS */}
                            <div className="grid xl:grid-cols-2 gap-6 mt-8">
                                <div className="border border-orange-100 rounded-[32px] p-6">
                                    <div className="flex justify-between">
                                        <h3 className="text-3xl font-bold">Weekly Trend</h3>

                                        <span className="bg-zinc-100 px-4 py-2 rounded-xl text-sm">
                                            Last 7 Days
                                        </span>
                                    </div>

                                    <div className="h-[300px] mt-5">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={trendData}>
                                                <XAxis dataKey="day" />
                                                <Tooltip />
                                                <Line
                                                    type="monotone"
                                                    dataKey="stock"
                                                    stroke="#b45309"
                                                    strokeWidth={4}
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                <div className="border border-orange-100 rounded-[32px] p-6">
                                    <div className="flex justify-between">
                                        <h3 className="text-3xl font-bold">
                                            Restock Prediction
                                        </h3>

                                        <span className="text-red-500 font-bold">
                                            High Priority
                                        </span>
                                    </div>

                                    <div className="h-[300px] mt-5">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={predictionData}>
                                                <XAxis dataKey="day" />
                                                <Tooltip />
                                                <Bar dataKey="value" fill="#f97316" radius={10} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FOOTER ACTIONS */}
                        <div className="sticky bottom-0 bg-white border-t border-orange-100 p-5 flex flex-wrap gap-4">
                            <button className="flex-1 bg-orange-500 text-white rounded-2xl h-16 font-semibold text-lg">
                                Update Inventory
                            </button>

                            <button className="flex-1 border border-zinc-300 rounded-2xl h-16 font-semibold text-lg">
                                Transfer Stock
                            </button>

                            <button className="flex-1 bg-red-100 text-red-700 rounded-2xl h-16 font-semibold text-lg">
                                Mark Damaged
                            </button>

                            <button className="flex-1 border border-zinc-300 rounded-2xl h-16 font-semibold text-lg">
                                Hide Listing
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


const statCards = [
    {
        title: "TOTAL INVENTORY",
        value: "1.4M",
        sub: "+12%",
        icon: PackageCheck,
        color: "text-green-600",
    },
    {
        title: "IN STOCK",
        value: "1.2M",
        sub: "Optimized levels",
        icon: PackageCheck,
        color: "text-green-600",
    },
    {
        title: "LOW STOCK",
        value: "42k",
        sub: "RESTOCK SOON",
        icon: AlertTriangle,
        color: "text-orange-500",
    },
    {
        title: "OUT OF STOCK",
        value: "8.5k",
        sub: "Needs immediate action",
        icon: X,
        color: "text-red-500",
    },
    {
        title: "WAREHOUSES",
        value: "12",
        sub: "All active nodes",
        icon: Warehouse,
        color: "text-blue-500",
    },
    {
        title: "AVG FULFILLMENT",
        value: "98.4%",
        sub: "Above target threshold",
        icon: Gauge,
        color: "text-violet-500",
    },
];

const inventoryItems = [
    {
        id: "#SKU-2024-001",
        name: "Air Jordan 1 Retro",
        seller: "Nike Global",
        warehouse: "NY Fulfillment",
        stock: 1240,
        progress: 82,
        status: "Healthy",
        movement: "+240",
        movementType: "up",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: "#SKU-2024-042",
        name: "Yeezy Boost 350",
        seller: "Adidas Direct",
        warehouse: "LA Regional",
        stock: 145,
        progress: 15,
        status: "Low Stock",
        movement: "-82",
        movementType: "down",
        image:
            "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: "#SKU-2024-089",
        name: "Zoom AlphaFly",
        seller: "Nike Global",
        warehouse: "London Hub",
        stock: 0,
        progress: 0,
        status: "Critical",
        movement: "0",
        movementType: "neutral",
        image:
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
    },
];

const pieData = [
    { name: "Healthy", value: 92 },
    { name: "Low", value: 5 },
    { name: "Critical", value: 3 },
];

const trendData = [
    { day: "Mon", stock: 40 },
    { day: "Tue", stock: 55 },
    { day: "Wed", stock: 48 },
    { day: "Thu", stock: 72 },
    { day: "Fri", stock: 38 },
    { day: "Sat", stock: 64 },
    { day: "Sun", stock: 78 },
];

const predictionData = [
    { day: "1", value: 12 },
    { day: "2", value: 48 },
    { day: "3", value: 32 },
    { day: "4", value: 8 },
];