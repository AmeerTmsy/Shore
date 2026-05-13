import { CalendarDays, Download, Sparkles } from "lucide-react"
import { useMemo, useState } from "react"
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"

export default function ReportsPage() {
    const [activeRange, setActiveRange] = useState("7d")

    const currentData = useMemo(() => {
        return SALES_DATA[activeRange]
    }, [activeRange])

    const handleRangeChange = (range) => setActiveRange(range)
    const formatYAxis = (value) => {
        if (value >= 1000) return `$${value / 1000}K`
        return value
    }

    const formatRevenueTooltip = (value) => [`$${value.toLocaleString()}`, "Revenue"

    ]
    return (
        <div className="min-h-screen bg-[#f6f6f7] p-4 md:p-6 xl:p-8">
            <div className="mx-auto max-w-[1700px] space-y-6">
                {/* HEADER */}
                <section className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            Reports
                        </h1>

                        <p className="mt-1 text-sm sm:text-[1em] text-gray-500">
                            Platform-wide analytics and operational reporting for the
                            marketplace ecosystem.
                        </p>
                    </div>
                </section>
                <section>
                    <div className="flex justify-start flex-wrap items-center gap-1.5">
                        <button className="rounded-xl border border-[#ecd3c4] bg-white px-4 py-2 text-sm text-[#2a2a2a] shadow-sm transition-all hover:shadow-md">
                            <span className="flex gap-2 items-start"><CalendarDays size={20} /> Oct 1, 2023 - Oct 31, 2023</span>
                        </button>
                        <button className="rounded-xl border border-[#ecd3c4] bg-white px-4 py-2 text-sm transition-all hover:bg-[#faf6f3]">
                            <span className="flex gap-2 items-start"><Download size={20} /> Export</span>
                        </button>
                        <button className="rounded-xl bg-[#9c4700] px-4 py-2 text-white text-sm font-medium shadow-lg shadow-[#9c4700]/20 transition-all hover:scale-[1.02]">
                            Generate Report
                        </button>
                        <button className="rounded-xl bg-[#ff6b00] px-4 py-2 text-white text-sm font-medium shadow-lg shadow-[#ff6b00]/20 transition-all hover:scale-[1.02]">
                            <span className="flex gap-2 items-center"> <Sparkles size={16} /> AI Summary</span>
                        </button>
                    </div>
                </section>

                {/* KPI CARDS */}
                <section className="grid grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-6">
                    {KPI_CARDS.map((item) => {
                        const gradientId = `gradient-${item.title.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "")}`;
                            return (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-[#ece0d8] bg-white p-5 shadow-sm"
                                >
                                    <div className="flex items-start justify-between">
                                        <p className="text-sm font-bold uppercase tracking-wide text-[#6f5848]">
                                            {item.title}
                                        </p>

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-black ${item.growthColor}`}
                                        >
                                            {item.growth}
                                        </span>
                                    </div>

                                    <h2 className="mt-1 text-lg font-bold text-[#171717]">
                                        {item.value}
                                    </h2>

                                    <div className="mt-5 h-14  rounded-md" style={{ borderColor: item.lineColor }} >
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={item.data}>
                                                <defs>
                                                    <linearGradient
                                                        id={gradientId}
                                                        x1="0"
                                                        y1="0"
                                                        x2="0"
                                                        y2="1"
                                                    >
                                                        <stop offset="0%" stopColor={item.fillColor} stopOpacity={0.7} />
                                                        <stop offset="100%" stopColor={item.fillColor} stopOpacity={0.2} />
                                                    </linearGradient>
                                                </defs>

                                                <Tooltip contentStyle={{ display: "none" }} />

                                                <Area
                                                    type="monotone"
                                                    dataKey="value"
                                                    stroke={item.lineColor}
                                                    strokeWidth={1.5}
                                                    fill={`url(#${gradientId})`}
                                                    isAnimationActive={false}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            )
                    })}
                </section>

                {/* SALES PERFORMANCE */}
                <section className="rounded-[36px] border border-[#ecd8cc] bg-white p-5 shadow-sm md:p-8">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                Sales Performance
                            </h2>

                            <p className="text-sm font-light sm:text-[1em] text-gray-500">
                                Revenue trends across the marketplace ecosystem.
                            </p>
                        </div>

                        <div className="flex w-fit items-center gap-1.5 rounded-2xl bg-[#f5f5f5] p-1.5">
                            {SALES_RANGES.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleRangeChange(item)}
                                    className={`rounded-xl px-5 py-1.5 font-semibold text-sm hover:bg-white transition-all duration-300 ${activeRange === item
                                        ? "bg-white text-[#9f4f09] shadow-sm"
                                        : "text-[#6d5d54] hover:bg-white/70"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 h-[320px] md:h-[520px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={currentData}
                                margin={{ top: 30, right: 10, left: -20, bottom: 0 }}
                            >
                                <defs>
                                    <linearGradient
                                        id="salesGradient"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#ff6a00"
                                            stopOpacity={0.18}
                                        />

                                        <stop
                                            offset="100%"
                                            stopColor="#ff6a00"
                                            stopOpacity={0.03}
                                        />
                                    </linearGradient>
                                </defs>

                                <CartesianGrid vertical={false} stroke="#f3ebe5" />

                                <XAxis
                                    dataKey="day"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{
                                        fill: "#755f53",
                                        fontSize: 14,
                                        fontWeight: 700,
                                    }}
                                />

                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{
                                        fill: "#8a7669",
                                        fontSize: 13,
                                        fontWeight: 700,
                                    }}
                                    tickFormatter={formatYAxis}
                                />

                                <Tooltip
                                    contentStyle={{
                                        borderRadius: "20px",
                                        border: "1px solid #f1d5c5",
                                        background: "#ffffff",
                                        boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                                    }}
                                    formatter={formatRevenueTooltip}
                                />

                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#ff6a00"
                                    strokeWidth={5}
                                    fill="url(#salesGradient)"
                                    activeDot={{
                                        r: 8,
                                        fill: "#ff6a00",
                                        stroke: "#fff",
                                        strokeWidth: 3,
                                    }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-6 text-sm font-bold">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#a94f00]" />
                            Revenue
                        </div>

                        <div className="flex items-center gap-2 text-[#999]">
                            <div className="h-3 w-3 rounded-full bg-[#d4d4d4]" />
                            Last Period
                        </div>
                    </div>
                </section>

                {/* MIDDLE GRID */}
                <section className="grid gap-6 xl:grid-cols-[1.7fr_0.8fr]">
                    {/* TOP PRODUCTS */}
                    <div className="rounded-[36px] border border-[#ecd8cc] bg-white p-5 shadow-sm md:p-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-black">Top Selling Products</h2>

                            <button className="font-black text-[#a65312]">
                                View All
                            </button>
                        </div>

                        <div className="mt-8 overflow-hidden rounded-[24px] border border-[#f1e2d8]">
                            {TOP_PRODUCTS.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex flex-col gap-5 border-b border-[#f2e6dd] p-5 last:border-none md:flex-row md:items-center md:justify-between"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="h-16 w-16 rounded-2xl object-cover"
                                        />

                                        <div>
                                            <h3 className="text-xl font-black text-[#1d1d1d]">
                                                {item.name}
                                            </h3>

                                            <p className="text-[#725f54]">{item.brand}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:gap-10">
                                        <div>
                                            <p className="text-xs font-bold uppercase text-[#8e7a70]">
                                                Sold
                                            </p>

                                            <p className="mt-1 text-lg font-black">{item.sold}</p>
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold uppercase text-[#8e7a70]">
                                                Revenue
                                            </p>

                                            <p className="mt-1 text-lg font-black">
                                                {item.revenue}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold uppercase text-[#8e7a70]">
                                                Stock
                                            </p>

                                            <span className="mt-1 inline-block rounded-xl bg-[#d9f2df] px-3 py-1 text-sm font-black text-[#15803d]">
                                                {item.stock}
                                            </span>
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold uppercase text-[#8e7a70]">
                                                Returns
                                            </p>

                                            <p className="mt-1 text-lg font-black text-[#d92525]">
                                                {item.returns}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RETURNS */}
                    <div className="rounded-[36px] border border-[#ecd8cc] bg-white p-5 shadow-sm md:p-8">
                        <h2 className="text-3xl font-black">Returns & Refunds</h2>

                        <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row">
                            <div className="relative flex h-52 w-52 items-center justify-center rounded-full border-[18px] border-[#ff6a00] border-r-[#555c6b] border-b-[#e4e4e4] border-l-[#e4e4e4]">
                                <div className="text-center">
                                    <h3 className="text-5xl font-black">$142k</h3>

                                    <p className="mt-1 text-[#7d6658]">Total Value</p>
                                </div>
                            </div>

                            <div className="space-y-5 text-lg font-bold">
                                <div className="flex items-center justify-between gap-12">
                                    <div className="flex items-center gap-3">
                                        <div className="h-4 w-4 rounded-full bg-[#a94f00]" />
                                        Size Mismatch
                                    </div>

                                    <span>65%</span>
                                </div>

                                <div className="flex items-center justify-between gap-12">
                                    <div className="flex items-center gap-3">
                                        <div className="h-4 w-4 rounded-full bg-[#555c6b]" />
                                        Damaged
                                    </div>

                                    <span>20%</span>
                                </div>

                                <div className="flex items-center justify-between gap-12">
                                    <div className="flex items-center gap-3">
                                        <div className="h-4 w-4 rounded-full bg-[#e3e3e3]" />
                                        Changed Mind
                                    </div>

                                    <span>15%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* REGIONAL + INVENTORY */}
                <section className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
                    <div className="overflow-hidden rounded-[40px] bg-[#111418] p-5 shadow-2xl md:p-8">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-3xl font-black text-white">
                                    Regional Sales Analytics
                                </h2>

                                <p className="mt-2 text-[#a9a9aa]">
                                    Live heat nodes of marketplace activity.
                                </p>
                            </div>

                            <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-black tracking-wide text-white backdrop-blur-lg">
                                LIVE ACTIVITY
                            </button>
                        </div>

                        <div className="relative mt-10 h-[400px] overflow-hidden rounded-[30px] bg-[#0d1014]">
                            <div className="absolute left-[15%] top-[28%] h-4 w-4 rounded-full bg-[#ff6b00] shadow-[0_0_40px_20px_rgba(255,107,0,0.3)]" />

                            <div className="absolute left-[42%] top-[58%] h-3 w-3 rounded-full bg-[#ff6b00] shadow-[0_0_35px_16px_rgba(255,107,0,0.3)]" />

                            <div className="absolute right-[28%] top-[40%] h-5 w-5 rounded-full bg-[#ff6b00] shadow-[0_0_45px_24px_rgba(255,107,0,0.3)]" />

                            <div className="absolute bottom-8 left-8 flex items-end gap-8 text-white">
                                <div>
                                    <p className="text-xs font-bold uppercase text-[#8d8d8f]">
                                        North America
                                    </p>

                                    <h3 className="text-4xl font-black">$1.8M</h3>
                                </div>

                                <div className="h-12 w-px bg-white/10" />

                                <div>
                                    <p className="text-xs font-bold uppercase text-[#8d8d8f]">
                                        Europe
                                    </p>

                                    <h3 className="text-4xl font-black">$1.2M</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[36px] border border-[#ecd8cc] bg-white p-5 shadow-sm md:p-8">
                        <h2 className="text-3xl font-black">Inventory Status</h2>

                        <div className="mt-10 space-y-10">
                            {INVENTORY_DATA.map((item) => (
                                <div key={item.title}>
                                    <div className="flex items-center justify-between font-black">
                                        <span>{item.title}</span>

                                        <span className="text-[#6f584b]">{item.value}</span>
                                    </div>

                                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#ededed]">
                                        <div
                                            className={`h-full rounded-full ${item.color}`}
                                            style={{ width: item.width }}
                                        />
                                    </div>
                                </div>
                            ))}

                            <div className="flex items-center gap-4 rounded-[26px] bg-[#f5f5f5] p-5">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl">
                                    ↻
                                </div>

                                <div>
                                    <h3 className="text-lg font-black">
                                        Auto-restock triggered
                                    </h3>

                                    <p className="text-[#766358]">
                                        240 items ordered from Warehouse B
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INSIGHTS + ACTIVITY */}
                <section className="grid gap-6 xl:grid-cols-[1.6fr_0.8fr]">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="text-2xl text-[#a65312]">✦</span>

                            <h2 className="text-3xl font-black">
                                AI Business Insights
                            </h2>
                        </div>

                        <div className="grid gap-5 lg:grid-cols-2">
                            {AI_INSIGHTS.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-[32px] border border-[#f0cdc0] bg-white p-6 shadow-sm"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffe6d8] text-xl text-[#a65312]">
                                            ✦
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-black">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 leading-relaxed text-[#735f54]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[36px] border border-[#ecd8cc] bg-white p-5 shadow-sm md:p-8">
                        <h2 className="text-3xl font-black">Report Activity</h2>

                        <div className="mt-10 space-y-10">
                            {REPORT_ACTIVITY.map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`h-4 w-4 rounded-full ${item.color}`}
                                        />

                                        <div className="mt-2 h-full w-px bg-[#ececec]" />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-black">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-[#746256]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 w-full rounded-2xl border border-[#ececec] py-4 font-black transition-all hover:bg-[#f7f7f7]">
                            View Full History
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}


/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const SALES_RANGES = ["7d", "30d", "90d"]

const KPI_CARDS = [
    {
        title: "Total Revenue",
        value: "$4.2M",
        growth: "+12%",
        growthColor: "text-green-600 bg-green-50",
        lineColor: "#e2bca6",
        // fillColor: "#e2bca6",
        data: [
            { name: "1", value: 18 },
            { name: "2", value: 22 },
            { name: "3", value: 21 },
            { name: "4", value: 28 },
            { name: "5", value: 26 },
            { name: "6", value: 33 },
        ],
    },
    {
        title: "Orders",
        value: "28,450",
        growth: "+8%",
        growthColor: "text-green-600 bg-green-50",
        lineColor: "#9ec3ff",
        fillColor: "#9ec3ff",
        data: [
            { name: "1", value: 14 },
            { name: "2", value: 18 },
            { name: "3", value: 17 },
            { name: "4", value: 20 },
            { name: "5", value: 22 },
            { name: "6", value: 24 },
        ],
    },
    {
        title: "Refunds",
        value: "$142K",
        growth: "-2%",
        growthColor: "text-red-600 bg-red-50",
        lineColor: "#9be7b0",
        fillColor: "#9be7b0",
        data: [
            { name: "1", value: 10 },
            { name: "2", value: 12 },
            { name: "3", value: 11 },
            { name: "4", value: 13 },
            { name: "5", value: 12 },
            { name: "6", value: 14 },
        ],
    },
    {
        title: "Avg. Value",
        value: "$148",
        growth: "+5%",
        growthColor: "text-green-600 bg-green-50",
        lineColor: "#f3c07e",
        fillColor: "#f3c07e",
        data: [
            { name: "1", value: 12 },
            { name: "2", value: 14 },
            { name: "3", value: 15 },
            { name: "4", value: 17 },
            { name: "5", value: 18 },
            { name: "6", value: 19 },
        ],
    },
    {
        title: "Customers",
        value: "842K",
        growth: "+15%",
        growthColor: "text-green-600 bg-green-50",
        lineColor: "#d8b7ff",
        fillColor: "#d8b7ff",
        data: [
            { name: "1", value: 11 },
            { name: "2", value: 15 },
            { name: "3", value: 16 },
            { name: "4", value: 18 },
            { name: "5", value: 22 },
            { name: "6", value: 25 },
        ],
    },
    {
        title: "Fraud Cases",
        value: "42",
        growth: "-10%",
        growthColor: "text-green-600 bg-green-50",
        lineColor: "#8be2d2",
        fillColor: "#8be2d2",
        data: [
            { name: "1", value: 18 },
            { name: "2", value: 14 },
            { name: "3", value: 16 },
            { name: "4", value: 13 },
            { name: "5", value: 11 },
            { name: "6", value: 9 },
        ],
    },
];

const SALES_DATA = {
    "7d": [
        { day: "Mon", revenue: 60000 },
        { day: "Tue", revenue: 180000 },
        { day: "Wed", revenue: 260000 },
        { day: "Thu", revenue: 95000 },
        { day: "Fri", revenue: 500000 },
        { day: "Sat", revenue: 100000 },
        { day: "Sun", revenue: 390000 },
    ],

    "30d": [
        { day: "Week 1", revenue: 420000 },
        { day: "Week 2", revenue: 610000 },
        { day: "Week 3", revenue: 350000 },
        { day: "Week 4", revenue: 720000 },
    ],

    "90d": [
        { day: "Jan", revenue: 1200000 },
        { day: "Feb", revenue: 1600000 },
        { day: "Mar", revenue: 1400000 },
    ],
}

const TOP_PRODUCTS = [
    {
        name: "SpeedRunner X-1",
        brand: "Veloce Athletics",
        sold: "4,280",
        revenue: "$633,440",
        stock: "1,200",
        returns: "1.2%",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
    },

    {
        name: "CloudWalker Pro",
        brand: "AeroStride",
        sold: "3,912",
        revenue: "$547,680",
        stock: "45",
        returns: "2.4%",
        image:
            "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=500",
    },

    {
        name: "RetroBounce High",
        brand: "UrbanSoul",
        sold: "2,105",
        revenue: "$315,750",
        stock: "890",
        returns: "0.8%",
        image:
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500",
    },
]

const INVENTORY_DATA = [
    {
        title: "Low Stock Alerts",
        value: "128 SKUs",
        width: "80%",
        color: "bg-[#ff6a00]",
    },

    {
        title: "Out of Stock",
        value: "14 SKUs",
        width: "18%",
        color: "bg-[#d61c1c]",
    },

    {
        title: "Inventory Turnover",
        value: "4.2x / mo",
        width: "85%",
        color: "bg-[#22c55e]",
    },
]

const AI_INSIGHTS = [
    {
        title: "Conversion Spike",
        description:
            "Running shoes increased conversion by 24% after the Fall Marathon email campaign.",
    },

    {
        title: "Abuse Detected",
        description:
            "Potential reseller abuse detected in bulk purchases in the NY region.",
    },
]

const REPORT_ACTIVITY = [
    {
        title: "Monthly Sales PDF Generated",
        description: "Requested by Sarah Chen • 12:45 PM",
        color: "bg-[#ff6a00]",
    },

    {
        title: "Inventory CSV Exported",
        description: "Auto-scheduled export • 09:00 AM",
        color: "bg-[#555c6b]",
    },

    {
        title: "Fraud Analysis Completed",
        description: "No critical threats found • Yesterday",
        color: "bg-[#22c55e]",
    },
]