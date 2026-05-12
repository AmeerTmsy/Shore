import { useMemo, useState } from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    ResponsiveContainer,
    CartesianGrid,
    Pie,
    PieChart,
    RadialBar,
    RadialBarChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import {
    CalendarDays,
    BrainCircuit,
    AlertTriangle,
    ArrowRight,
    TrendingDown,
    TrendingUp,
} from "lucide-react";
export default function AnalyticsPage() {

    const [activeRange, setActiveRange] = useState("7d");

    const activeRevenueData = useMemo(() => {
        return REVENUE_DATA[activeRange];
    }, [activeRange]);


    return (
        <main className="min-h-screen bg-[#f7f7f8] p-4 md:p-6 xl:p-8">
            {/* PAGE CONTAINER */}
            <section className="mx-auto max-w-[1800px]">
                {/* ========================================================= */}
                {/* HEADER */}
                {/* ========================================================= */}
                <header className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                    {/* LEFT */}
                    <div>
                        <h1 className="text-4xl font-black tracking-[-2px] text-[#171717] md:text-5xl">
                            Analytics
                        </h1>

                        <p className="mt-2 text-lg text-[#6f6f73] md:text-xl">
                            Live marketplace intelligence and operational insights.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center xl:justify-end">
                        {/* LIVE / HISTORICAL SWITCH */}
                        <div className="flex h-[54px] items-center rounded-full border border-[#ebd0c1] bg-white p-1 shadow-sm">
                            <button className="rounded-full bg-[#f5f5f5] px-10 py-3 text-lg font-bold text-[#171717]">
                                Live Mode
                            </button>

                            <button className="px-10 py-3 text-lg font-bold text-[#7b7b80] transition-all hover:text-[#171717]">
                                Historical
                            </button>
                        </div>

                        {/* DATE PICKER */}
                        <button className="flex h-[58px] items-center gap-4 rounded-[22px] border border-[#ebd0c1] bg-white px-6 shadow-sm transition-all hover:bg-[#fcfcfc]">
                            <CalendarDays
                                size={24}
                                className="text-[#9f4f09]"
                            />

                            <span className="text-lg font-bold text-[#171717]">
                                Oct 1 - Oct 31, 2023
                            </span>
                        </button>

                        {/* AI SUMMARY */}
                        <button className="flex h-[58px] items-center justify-center gap-3 rounded-[22px] border border-[#ebd0c1] bg-[#fff5ef] px-7 shadow-sm transition-all hover:bg-[#ffefe4]">
                            <BrainCircuit
                                size={22}
                                className="text-[#a45112]"
                            />

                            <span className="text-lg font-black text-[#a45112]">
                                AI Summary
                            </span>
                        </button>
                    </div>
                </header>

                {/* ========================================================= */}
                {/* SECTION 01 — LIVE KPI CARDS */}
                {/* ========================================================= */}
                <section className="mt-10">
                    <section className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {KPI_CARDS.map((card) => (
                            <div
                                key={card.id}
                                className="rounded-2xl border border-[#efcfc0] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
                            >
                                {/* ================================================= */}
                                {/* HEADER */}
                                {/* ================================================= */}
                                <div className="flex items-start justify-between">
                                    <h3 className="text-[22px] font-bold text-[#5e6672]">
                                        {card.title}
                                    </h3>

                                    {card.type === "bars" && (
                                        <div className="mt-1 h-5 w-5 rounded-full bg-[#cf936f]" />
                                    )}
                                </div>

                                {/* ================================================= */}
                                {/* VALUE */}
                                {/* ================================================= */}
                                <div className="mt-10">
                                    <h2
                                        className={`text-2xl font-black  ${card.growthType === "danger"
                                            ? "text-[#ca1616]"
                                            : "text-[#151515]"
                                            }`}
                                    >
                                        {card.value}
                                    </h2>
                                </div>

                                {/* ================================================= */}
                                {/* GROWTH */}
                                {/* ================================================= */}
                                <div className="mt-6 flex items-center gap-3">
                                    {/* POSITIVE */}
                                    {card.growthType === "positive" && (
                                        <>
                                            <TrendingUp
                                                size={26}
                                                className="text-[#ab4f00]"
                                            />

                                            <span className="text-[24px] font-black text-[#ab4f00]">
                                                {card.growth}
                                            </span>
                                        </>
                                    )}

                                    {/* NEGATIVE */}
                                    {card.growthType === "negative" && (
                                        <>
                                            <TrendingDown
                                                size={26}
                                                className="text-[#c91c1c]"
                                            />

                                            <span className="text-[24px] font-black text-[#c91c1c]">
                                                {card.growth}
                                            </span>
                                        </>
                                    )}

                                    {/* DANGER */}
                                    {card.growthType === "danger" && (
                                        <>
                                            <AlertTriangle
                                                size={30}
                                                className="text-[#ca1616]"
                                            />

                                            <span className="text-[24px] font-black text-[#ca1616]">
                                                {card.growth}
                                            </span>
                                        </>
                                    )}

                                    {/* STABLE */}
                                    {card.growthType === "stable" && (
                                        <>
                                            <ArrowRight
                                                size={26}
                                                className="text-[#ab4f00]"
                                            />

                                            <span className="text-[24px] font-black text-[#ab4f00]">
                                                {card.growth}
                                            </span>
                                        </>
                                    )}
                                </div>

                                {/* ================================================= */}
                                {/* CHART AREA */}
                                {/* ================================================= */}
                                <div className="mt-10">
                                    {/* ============================================= */}
                                    {/* BAR CHART */}
                                    {/* ============================================= */}
                                    {card.type === "bars" && (
                                        <div className="h-[95px]">
                                            <ResponsiveContainer
                                                width="100%"
                                                height="100%"
                                            >
                                                <BarChart data={card.data}>
                                                    <Bar
                                                        dataKey="value"
                                                        radius={[8, 8, 0, 0]}
                                                    >
                                                        {card.data.map((entry, index) => (
                                                            <cell
                                                                key={index}
                                                                fill={
                                                                    index === 5
                                                                        ? "#b65200"
                                                                        : "#e4d1c5"
                                                                }
                                                            />
                                                        ))}
                                                    </Bar>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    )}

                                    {/* ============================================= */}
                                    {/* AREA CHART */}
                                    {/* ============================================= */}
                                    {card.type === "area" && (
                                        <div className="overflow-hidden rounded-[28px] bg-[#f8f1ed]">
                                            <div className="h-[110px]">
                                                <ResponsiveContainer
                                                    width="100%"
                                                    height="100%"
                                                >
                                                    <AreaChart data={card.data}>
                                                        <defs>
                                                            <linearGradient
                                                                id="revenueGradient"
                                                                x1="0"
                                                                y1="0"
                                                                x2="0"
                                                                y2="1"
                                                            >
                                                                <stop
                                                                    offset="0%"
                                                                    stopColor="#e4c6b4"
                                                                    stopOpacity={0.9}
                                                                />

                                                                <stop
                                                                    offset="100%"
                                                                    stopColor="#e4c6b4"
                                                                    stopOpacity={0.25}
                                                                />
                                                            </linearGradient>
                                                        </defs>

                                                        <Area
                                                            type="monotone"
                                                            dataKey="value"
                                                            stroke="#b65200"
                                                            strokeWidth={6}
                                                            fill="url(#revenueGradient)"
                                                        />
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    )}

                                    {/* ============================================= */}
                                    {/* PROGRESS */}
                                    {/* ============================================= */}
                                    {card.type === "progress" && (
                                        <div className="flex items-center gap-5">
                                            <div className="flex gap-3">
                                                <div className="h-7 w-7 rounded-full bg-[#e5cfc4]" />

                                                <div className="h-7 w-7 rounded-full bg-[#d5b5a2]" />
                                            </div>

                                            <div className="h-7 flex-1 overflow-hidden rounded-full bg-[#f1e7e1]">
                                                <div
                                                    className="h-full rounded-full bg-[#b65200]"
                                                    style={{
                                                        width: `${card.progress}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* ============================================= */}
                                    {/* TARGET */}
                                    {/* ============================================= */}
                                    {card.type === "target" && (
                                        <p className="text-[22px] font-bold text-[#5e6672]">
                                            {card.target}
                                        </p>
                                    )}

                                    {/* ============================================= */}
                                    {/* DANGER */}
                                    {/* ============================================= */}
                                    {card.type === "danger" && (
                                        <div className="h-3 overflow-hidden rounded-full bg-[#f5e6e6]">
                                            <div className="h-full w-[82%] rounded-full bg-[#f0dcdc]" />
                                        </div>
                                    )}

                                    {/* ============================================= */}
                                    {/* USERS */}
                                    {/* ============================================= */}
                                    {card.type === "users" && (
                                        <div className="flex">
                                            <div className="h-14 w-14 rounded-full border-4 border-white bg-[#d6dceb]" />

                                            <div className="-ml-4 h-14 w-14 rounded-full border-4 border-white bg-[#f1d0bf]" />

                                            <div className="-ml-4 h-14 w-14 rounded-full border-4 border-white bg-[#d6dceb]" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </section>
                </section>

                {/* ========================================================= */}
                {/* SECTION 02 — SALES ANALYTICS */}
                {/* ========================================================= */}
                <section className="mt-8">
                    <section className="grid gap-6 2xl:grid-cols-[2fr_1fr]">
                        {/* ===================================================== */}
                        {/* REVENUE INTELLIGENCE */}
                        {/* ===================================================== */}

                        <div className="rounded-[42px] border border-[#efcfc0] bg-white p-6 md:p-10">
                            {/* HEADER */}
                            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                <div>
                                    <h2 className="text-2xl font-black text-[#171717] md:text-[42px]">
                                        Revenue Intelligence
                                    </h2>

                                    <p className="mt-2 text-base font-semibold text-[#626b78] md:text-xl">
                                        Net sales over time including tax and shipping
                                    </p>
                                </div>

                                {/* RANGE SWITCHER */}
                                <div className="flex w-fit rounded-full bg-[#f3f3f4] p-1.5">
                                    {["7d", "30d", "90d"].map((range) => (
                                        <button
                                            key={range}
                                            onClick={() => setActiveRange(range)}
                                            className={`rounded-full px-6 py-3 text-lg font-black transition-all ${activeRange === range
                                                    ? "bg-white text-[#171717] shadow-sm"
                                                    : "text-[#6c7380]"
                                                }`}
                                        >
                                            {range}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* CHART */}
                            <div className="mt-10 h-[320px] md:h-[420px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                        data={activeRevenueData}
                                        margin={{
                                            top: 10,
                                            right: 10,
                                            left: -25,
                                            bottom: 0,
                                        }}
                                    >
                                        <defs>
                                            <linearGradient
                                                id="revenueFill"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#d98f5c"
                                                    stopOpacity={0.35}
                                                />

                                                <stop
                                                    offset="100%"
                                                    stopColor="#d98f5c"
                                                    stopOpacity={0.04}
                                                />
                                            </linearGradient>
                                        </defs>

                                        <CartesianGrid
                                            stroke="#d9d9d9"
                                            vertical={false}
                                        />

                                        <XAxis
                                            dataKey="date"
                                            tickLine={false}
                                            axisLine={false}
                                            tick={{
                                                fill: "#5f6773",
                                                fontSize: 16,
                                                fontWeight: 700,
                                            }}
                                        />

                                        <YAxis
                                            tickLine={false}
                                            axisLine={false}
                                            tick={{
                                                fill: "#9a8d87",
                                                fontSize: 15,
                                                fontWeight: 700,
                                            }}
                                            tickFormatter={(value) =>
                                                `$${value / 1000}K`
                                            }
                                        />

                                        <Tooltip
                                            contentStyle={{
                                                borderRadius: 20,
                                                border: "1px solid #f0d0c0",
                                                boxShadow:
                                                    "0 10px 40px rgba(0,0,0,0.08)",
                                            }}
                                            formatter={(value) => [
                                                `$${value.toLocaleString()}`,
                                                "Revenue",
                                            ]}
                                        />

                                        <Area
                                            type="monotone"
                                            dataKey="revenue"
                                            stroke="#ff6a00"
                                            strokeWidth={5}
                                            fill="url(#revenueFill)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* ===================================================== */}
                        {/* CHECKOUT CONVERSION */}
                        {/* ===================================================== */}

                        <div className="rounded-[42px] border border-[#efcfc0] bg-white p-6 md:p-10">
                            <h2 className="text-2xl font-black text-[#171717] md:text-[42px]">
                                Checkout Conversion
                            </h2>

                            {/* FUNNEL */}
                            <div className="mt-10 space-y-10">
                                {CONVERSION_DATA.map((item, index) => (
                                    <div key={item.title}>
                                        <div className="mb-4 flex items-center justify-between">
                                            <h3 className="text-xl font-black text-[#171717] md:text-[24px]">
                                                {item.title}
                                            </h3>

                                            <p className="text-xl font-black text-[#616975] md:text-[24px]">
                                                {item.value}
                                            </p>
                                        </div>

                                        {/* PROGRESS BAR */}
                                        <div className="rounded-[28px] border border-[#eccdbd] bg-[#f9f1eb] p-4">
                                            <div className="h-12 overflow-hidden rounded-full bg-transparent">
                                                <div
                                                    className="h-full rounded-full bg-[#b65200]"
                                                    style={{
                                                        width: `${item.progress}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* DROP BADGE */}
                                        {item.drop && (
                                            <div className="mt-4 flex justify-center">
                                                <div className="rounded-full bg-[#f0f1f2] px-6 py-3 text-lg font-black text-[#5e6672]">
                                                    {item.drop}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* DIVIDER */}
                            <div className="my-12 h-px bg-[#efcfc0]" />

                            {/* OVERALL YIELD */}
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                                {/* RADIAL */}
                                <div className="relative h-[140px] w-[140px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadialBarChart
                                            innerRadius="72%"
                                            outerRadius="100%"
                                            barSize={12}
                                            data={OVERALL_YIELD}
                                            startAngle={90}
                                            endAngle={-270}
                                        >
                                            <RadialBar
                                                background={{
                                                    fill: "#ececec",
                                                }}
                                                dataKey="value"
                                                cornerRadius={999}
                                            />
                                        </RadialBarChart>
                                    </ResponsiveContainer>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl font-black text-[#171717]">
                                            11%
                                        </span>
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div>
                                    <h3 className="text-2xl font-black text-[#171717] md:text-[34px]">
                                        Overall Yield
                                    </h3>

                                    <p className="mt-2 text-xl font-semibold text-[#626b78] md:text-[24px]">
                                        High performance threshold
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* ========================================================= */}
                {/* SECTION 03 — CUSTOMER ANALYTICS */}
                {/* ========================================================= */}
                <section className="mt-8">
                    {/* WE BUILD THIS NEXT */}
                </section>

                {/* ========================================================= */}
                {/* SECTION 04 — PRODUCT PERFORMANCE */}
                {/* ========================================================= */}
                <section className="mt-8">
                    {/* WE BUILD THIS NEXT */}
                </section>

                {/* ========================================================= */}
                {/* SECTION 05 — REGIONAL SALES */}
                {/* ========================================================= */}
                <section className="mt-8">
                    {/* WE BUILD THIS NEXT */}
                </section>

                {/* ========================================================= */}
                {/* SECTION 06 — INVENTORY ANALYTICS */}
                {/* ========================================================= */}
                <section className="mt-8">
                    {/* WE BUILD THIS NEXT */}
                </section>

                {/* ========================================================= */}
                {/* SECTION 07 — SELLER PERFORMANCE */}
                {/* ========================================================= */}
                <section className="mt-8">
                    {/* WE BUILD THIS NEXT */}
                </section>

                {/* ========================================================= */}
                {/* SECTION 08 — AI INSIGHTS */}
                {/* ========================================================= */}
                <section className="mt-8">
                    {/* WE BUILD THIS NEXT */}
                </section>

                {/* ========================================================= */}
                {/* SECTION 09 — LIVE ACTIVITY */}
                {/* ========================================================= */}
                <section className="mt-8">
                    {/* WE BUILD THIS NEXT */}
                </section>
            </section>
        </main>
    );
}









const KPI_CARDS = [
    {
        id: 1,
        title: "Live Users",
        value: "2,482",
        growth: "+14.2%",
        growthType: "positive",
        type: "bars",
        data: [
            { value: 12 },
            { value: 20 },
            { value: 16 },
            { value: 28 },
            { value: 24 },
            { value: 36 },
            { value: 32 },
        ],
    },
    {
        id: 2,
        title: "Revenue Today",
        value: "$42.8k",
        growth: "+8.1%",
        growthType: "positive",
        type: "area",
        data: [
            { value: 10 },
            { value: 12 },
            { value: 11 },
            { value: 15 },
            { value: 14 },
            { value: 18 },
            { value: 20 },
        ],
    },
    {
        id: 3,
        title: "Orders Today",
        value: "812",
        growth: "+5.4%",
        growthType: "positive",
        type: "progress",
        progress: 72,
    },
    {
        id: 4,
        title: "Conv. Rate",
        value: "3.4%",
        growth: "-0.2%",
        growthType: "negative",
        target: "Target: 4.0%",
        type: "target",
    },
    {
        id: 5,
        title: "Fraud Alerts",
        value: "12",
        growth: "High Risk",
        growthType: "danger",
        type: "danger",
    },
    {
        id: 6,
        title: "Cart Abandon.",
        value: "64%",
        growth: "Stable",
        growthType: "stable",
        type: "users",
    },
];

const REVENUE_DATA = {
    "7d": [
        { date: "Oct 24", revenue: 120000 },
        { date: "Oct 25", revenue: 180000 },
        { date: "Oct 26", revenue: 320000 },
        { date: "Oct 27", revenue: 280000 },
        { date: "Oct 28", revenue: 520000 },
        { date: "Oct 29", revenue: 300000 },
        { date: "Oct 30", revenue: 680000 },
    ],

    "30d": [
        { date: "Week 1", revenue: 240000 },
        { date: "Week 2", revenue: 390000 },
        { date: "Week 3", revenue: 280000 },
        { date: "Week 4", revenue: 710000 },
    ],

    "90d": [
        { date: "Jul", revenue: 480000 },
        { date: "Aug", revenue: 620000 },
        { date: "Sep", revenue: 810000 },
    ],
};

const CONVERSION_DATA = [
    {
        title: "Product Views",
        value: "24.5k",
        progress: 92,
        drop: null,
    },

    {
        title: "Add to Cart",
        value: "8.2k",
        progress: 28,
        drop: "92% drop",
    },

    {
        title: "Purchased",
        value: "2.8k",
        progress: 10,
        drop: "65% drop",
    },
];

const OVERALL_YIELD = [
    {
        name: "Yield",
        value: 11,
        fill: "#b65200",
    },

    {
        name: "Remaining",
        value: 89,
        fill: "#e6e6e6",
    },
];
