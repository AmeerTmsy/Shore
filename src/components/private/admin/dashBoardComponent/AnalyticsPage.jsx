import { useMemo, useState } from "react";
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, CartesianGrid, Pie, PieChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis, PolarAngleAxis, Cell, } from "recharts";
import { CalendarDays, BrainCircuit, AlertTriangle, ArrowRight, TrendingDown, TrendingUp, ArrowUpRight, ChevronRight, Monitor, Smartphone, } from "lucide-react";
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
                <header className="flex justify-between gap-5 flex-wrap items-end">
                    {/* LEFT */}
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Analytics
                        </h1>

                        <p className="mt-1 text-sm sm:text-[1em] text-gray-500">
                            Live marketplace intelligence and operational insights.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-stretch justify-end flex-wrap flex-1 gap-2">
                        {/* LIVE / HISTORICAL SWITCH */}
                        <div className="flex h-10 items-center rounded-full border border-[#ebd0c1] bg-white p-1 shadow-sm">
                            <button className="text-nowrap h-full rounded-full bg-[#f5f5f5] px-5 text-sm font-bold text-[#171717]">
                                Live Mode
                            </button>

                            <button className="text-nowrap h-full px-5 text-sm font-bold text-[#7b7b80] transition-all hover:text-[#171717]">
                                Historical
                            </button>
                        </div>

                        {/* DATE PICKER */}
                        <button className="text-nowrap flex h-10 items-center gap-4 rounded-full border border-[#ebd0c1] bg-white px-5 shadow-sm transition-all hover:bg-[#fcfcfc]">
                            <CalendarDays
                                size={22}
                                className="text-[#9f4f09]"
                            />

                            <span className="text-sm font-medium text-[#171717]">
                                Oct 1 - Oct 31, 2023
                            </span>
                        </button>

                        {/* AI SUMMARY */}
                        <button className="text-nowrap flex h-10 items-center justify-center gap-3 rounded-full border border-[#ebd0c1] bg-[#fff5ef] px-5 shadow-sm transition-all hover:bg-[#ffefe4]">
                            <BrainCircuit
                                size={20}
                                className="text-[#a45112]"
                            />

                            <span className="text-sm font-semibold text-[#a45112]">
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
                                className="rounded-2xl border border-[#efcfc0] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col"
                            >
                                {/* ================================================= */}
                                {/* HEADER */}
                                {/* ================================================= */}
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                        {card.title}
                                    </h3>

                                    {card.type === "bars" && (
                                        <div className="mt-1 h-2 w-2 rounded-full bg-[#cf936f]" />
                                    )}
                                </div>

                                {/* ================================================= */}
                                {/* VALUE */}
                                {/* ================================================= */}
                                <div className="my-1 flex justify-between items-center">
                                    <h2
                                        className={`text-xl font-bold  ${card.growthType === "danger"
                                            ? "text-[#ca1616]"
                                            : "text-[#151515]"
                                            }`}
                                    >
                                        {card.value}
                                    </h2>
                                    {/* ================================================= */}
                                    {/* GROWTH */}
                                    {/* ================================================= */}
                                    <div className=" flex items-center gap-3">
                                        {/* POSITIVE */}
                                        {card.growthType === "positive" && (
                                            <>
                                                <TrendingUp
                                                    size={16}
                                                    className="text-[#ab4f00]"
                                                />

                                                <span className="text-xs font-black text-[#ab4f00]">
                                                    {card.growth}
                                                </span>
                                            </>
                                        )}

                                        {/* NEGATIVE */}
                                        {card.growthType === "negative" && (
                                            <>
                                                <TrendingDown
                                                    size={16}
                                                    className="text-[#c91c1c]"
                                                />

                                                <span className="text-xs font-black text-[#c91c1c]">
                                                    {card.growth}
                                                </span>
                                            </>
                                        )}

                                        {/* DANGER */}
                                        {card.growthType === "danger" && (
                                            <>
                                                <AlertTriangle
                                                    size={16}
                                                    className="text-[#ca1616]"
                                                />

                                                <span className="text-xs font-black text-[#ca1616]">
                                                    {card.growth}
                                                </span>
                                            </>
                                        )}

                                        {/* STABLE */}
                                        {card.growthType === "stable" && (
                                            <>
                                                <ArrowRight
                                                    size={16}
                                                    className="text-[#ab4f00]"
                                                />

                                                <span className="text-xs font-black text-[#ab4f00]">
                                                    {card.growth}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* ================================================= */}
                                {/* CHART AREA */}
                                {/* ================================================= */}
                                <div className="mt-5 flex-1 flex flex-col justify-center">
                                    {/* ============================================= */}
                                    {/* BAR CHART */}
                                    {/* ============================================= */}
                                    {card.type === "bars" && (
                                        <div className="h-16.25">
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
                                        <div className="overflow-hidden rounded-xl ">
                                            <div className="h-16.25">
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
                                        <div className="flex items-center gap-1">
                                            <div className="flex gap-1">
                                                <div className="h-3 w-3 rounded-full bg-[#e5cfc4]" />

                                                <div className="h-3 w-3 rounded-full bg-[#d5b5a2]" />
                                            </div>

                                            <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#f1e7e1]">
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
                                        <p className="text-lg font-bold text-[#5e6672]">
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
                                            <div className="h-7 w-7 rounded-full border-2 border-white bg-[#d6dceb]" />
                                            <div className="-ml-4 h-7 w-7 rounded-full border-2 border-white bg-[#f1d0bf]" />
                                            <div className="-ml-4 h-7 w-7 rounded-full border-2 border-white bg-[#d6dceb]" />
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
                    <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
                        {/* ===================================================== */}
                        {/* REVENUE INTELLIGENCE */}
                        {/* ===================================================== */}

                        <div className="rounded-2xl border border-[#efcfc0] bg-white p-6 md:p-8">
                            {/* HEADER */}
                            <div className="flex gap-4 justify-between flex-wrap">
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                        Revenue Intelligence
                                    </h2>
                                    <p className="text-sm font-light sm:text-[1em] text-gray-500">
                                        Net sales over time including tax and shipping
                                    </p>
                                </div>

                                {/* RANGE SWITCHER */}
                                <div className="flex flex-1 justify-end items-end">
                                    <div className="flex gap-1 w-fit rounded-xl bg-[#f3f3f4] p-1">
                                        {["7d", "30d", "90d"].map((range) => (
                                            <button
                                                key={range}
                                                onClick={() => setActiveRange(range)}
                                                className={`rounded-lg px-6 py-1 text-ld font-semibold hover:bg-white transition-all ${activeRange === range
                                                    ? "bg-white text-[#171717] shadow-sm"
                                                    : "text-[#6c7380]"
                                                    }`}
                                            >
                                                {range}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CHART */}
                            <div className="mt-10 h-[320px] overflow-visible md:h-[420px] ">
                                <ResponsiveContainer width="100%" height="100%" className="overflow-visible">
                                    <AreaChart
                                        data={activeRevenueData}
                                        margin={{
                                            top: 10,
                                            right: 10,
                                            left: -20,
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
                                                fontSize: 14,
                                                fontWeight: 500,
                                            }}
                                        />

                                        <YAxis
                                            tickLine={false}
                                            axisLine={false}
                                            tick={{
                                                fill: "#9a8d87",
                                                fontSize: 10,
                                                fontWeight: 500,
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

                        <div className="rounded-2xl border border-[#efcfc0] bg-white p-6 md:p-8">
                            <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                Checkout Conversion
                            </h2>

                            {/* FUNNEL */}
                            <div className="mt-8 lg:mt-5 space-y-3">
                                {CONVERSION_DATA.map((item, index) => (
                                    <div key={item.title}>
                                        <div className="mb-1 mx-0.5 flex items-center justify-between">
                                            <h3 className="text-sm tracking-tight text-gray-900">
                                                {item.title}
                                            </h3>

                                            <p className=" text-sm text-[#616975]">
                                                {item.value}
                                            </p>
                                        </div>

                                        {/* PROGRESS BAR */}
                                        <div className="rounded-lg border border-[#eccdbd] bg-[#f9f1eb] p-1.5">
                                            <div className="h-5 overflow-hidden rounded-md bg-transparent">
                                                <div
                                                    className={`h-full rounded-md bg-[#b65200] ${item.progress > 99 ? '' : 'rounded-r-none'}`}
                                                    style={{
                                                        width: `${item.progress}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* DROP BADGE */}
                                        {item.drop && (
                                            <div className="mt-2.5 flex justify-center">
                                                <div className="rounded-full bg-[#f0f1f2] px-6 py-0.5 text-sm text-[#5e6672]">
                                                    {item.drop}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* DIVIDER */}
                            <div className="my-5 h-px bg-[#efcfc0]" />

                            {/* OVERALL YIELD */}
                            <div className="flex flex-col gap-6 sm:flex-row items-center justify-center md:justify-between">
                                {/* RADIAL */}
                                <div className="relative h-[140px] w-[140px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadialBarChart
                                            innerRadius="78%"
                                            outerRadius="100%"
                                            data={OVERALL_YIELD}
                                            startAngle={90}
                                            endAngle={-270}
                                            barSize={12}
                                        >
                                            <PolarAngleAxis
                                                type="number"
                                                domain={[0, 100]}
                                                tick={false}
                                            />

                                            <RadialBar
                                                dataKey="value"
                                                cornerRadius={999}
                                                fill="#b65200"
                                                background={{
                                                    fill: "#e8e8e8",
                                                }}
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
                                <div className="text-center md:text-end">
                                    <h3 className="text-lg font-bold text-[#171717]">
                                        Overall Yield
                                    </h3>

                                    <p className="text-sm text-[#626b78] ">
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
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1.35fr]">
                        {/* GLOBAL VELOCITY */}
                        <div className="relative overflow-hidden rounded-2xl bg-[#0d1016] p-6 text-white sm:p-8">
                            {/* BACKGROUND IMAGE */}
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1400"
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-20"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-[#0b0d12]/70" />

                            <div className="relative z-10">
                                {/* HEADER */}
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight">
                                        Global Velocity
                                    </h2>

                                    <p className="text-sm font-light sm:text-[1em] text-white/65">
                                        Real-time order distribution
                                    </p>
                                </div>

                                {/* REGION LIST */}
                                <div className="mt-8 space-y-1.5">
                                    {[
                                        {
                                            region: "North America",
                                            value: "$214,000",
                                            dot: "bg-[#ffffff]",
                                        },
                                        {
                                            region: "Europe",
                                            value: "$158,200",
                                            dot: "bg-[#dce3ef]",
                                        },
                                        {
                                            region: "Asia Pacific",
                                            value: "$92,400",
                                            dot: "bg-[#5f6b87]",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.region}
                                            className="flex items-center justify-between rounded-xl bg-white/8 px-5 py-6 backdrop-blur-sm"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className={`h-3 w-3 rounded-full ${item.dot}`}
                                                />

                                                <h3 className=" font-black tracking-tight">
                                                    {item.region}
                                                </h3>
                                            </div>

                                            <span className=" font-medium tracking-tight ">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* FOOTER */}
                                <div className="mt-8 flex items-center justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                                        Live Tracking Active
                                    </span>

                                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                                        ID: 882-99
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* TOP MOVERS */}
                        <div className="overflow-hidden rounded-2xl border border-[#eccdbd] bg-white">
                            {/* HEADER */}
                            <div className="flex items-center justify-between border-b border-[#eccdbd] px-5 py-6 sm:px-8 sm:py-8">
                                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                    Top Movers
                                </h2>

                                <button className=" text-[#b45100] transition-all hover:opacity-70">
                                    <span className='hover:underline cursor-pointer text-blue-500 text-xs font-normal flex items-center gap-0.5'>View Catalog<svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                                </button>
                            </div>

                            {/* DESKTOP TABLE HEADER */}
                            <div className="hidden grid-cols-[1.8fr_1fr_0.8fr_0.8fr] border-b border-[#eccdbd] bg-[#fafafa] px-8 py-3 lg:grid">
                                <span className="font-semibold text-[#5f6773]">
                                    Product
                                </span>

                                <span className="font-semibold text-[#5f6773]">
                                    Revenue
                                </span>

                                <span className="font-semibold text-[#5f6773]">
                                    Orders
                                </span>

                                <span className="font-semibold text-[#5f6773]">
                                    Growth
                                </span>
                            </div>

                            {/* ROWS */}
                            <div>
                                {TOP_MOVERS.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`border-[#eccdbd] px-5 py-3 ${index !== TOP_MOVERS.length - 1 ? "border-b" : "" }`}
                                    >
                                        {/* DESKTOP */}
                                        <div className="hidden items-center lg:grid lg:grid-cols-[1.8fr_1fr_0.8fr_0.8fr]">
                                            {/* PRODUCT */}
                                            <div className="flex items-center gap-5">
                                                <div className=" overflow-hidden border-2 border-[#df9f7f] rounded-xl">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="aspect-square size-10 object-cover rounded-lg shrink-0"
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="font-semibold text-[#171717]">
                                                        {item.name}
                                                    </h3>

                                                    <p className="text-xs font-light text-[#5f6773]">
                                                        {item.category}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* REVENUE */}
                                            <p className=" text-[#171717]">
                                                {item.revenue}
                                            </p>

                                            {/* ORDERS */}
                                            <p className=" text-[#5f6773]">
                                                {item.orders}
                                            </p>

                                            {/* GROWTH */}
                                            <div
                                                className={`flex items-center justify-center gap-1 font-bold ${item.positive
                                                    ? "text-[#b45100]"
                                                    : "text-[#5f6773]"
                                                    }`}
                                            >
                                                {item.positive && (
                                                    <ArrowUpRight size={20} />
                                                )}

                                                <span>{item.growth}</span>
                                            </div>
                                        </div>

                                        {/* MOBILE */}
                                        <div className="flex flex-col gap-5 lg:hidden">
                                            <div className="flex items-center gap-4">
                                                <div className="h-20 w-20 overflow-hidden rounded-[20px] border border-[#f0cdbb] bg-[#111]">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <h3 className="truncate text-xl font-black text-[#171717]">
                                                        {item.name}
                                                    </h3>

                                                    <p className="mt-1 text-sm font-medium text-[#5f6773]">
                                                        {item.category}
                                                    </p>
                                                </div>

                                                <div
                                                    className={`flex items-center gap-1 text-xl font-black ${item.positive
                                                        ? "text-[#b45100]"
                                                        : "text-[#5f6773]"
                                                        }`}
                                                >
                                                    {item.positive && (
                                                        <ArrowUpRight size={18} />
                                                    )}

                                                    <span>{item.growth}</span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 rounded-2xl bg-[#fafafa] p-4">
                                                <div>
                                                    <p className="text-xs font-bold uppercase tracking-wide text-[#7b7b80]">
                                                        Revenue
                                                    </p>

                                                    <p className="mt-1 text-lg font-black text-[#171717]">
                                                        {item.revenue}
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs font-bold uppercase tracking-wide text-[#7b7b80]">
                                                        Orders
                                                    </p>

                                                    <p className="mt-1 text-lg font-black text-[#171717]">
                                                        {item.orders}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========================================================= */}
                {/* SECTION 04 — PRODUCT PERFORMANCE */}
                {/* ========================================================= */}
                <section className="mt-8">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                        {/* AI PULSE */}
                        <div className="rounded-2xl border border-[#eccdbd] bg-white p-5 sm:p-7">
                            {/* HEADER */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f7ede6]">
                                    <BrainCircuit
                                        size={24}
                                        className="text-[#b45100]"
                                    />
                                </div>

                                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                    AI Pulse
                                </h2>
                            </div>

                            {/* CARDS */}
                            <div className="mt-7 space-y-3">
                                {AI_PULSE.map((item) => (
                                    <div
                                        key={item.id}
                                        className="rounded-xl border border-[#eccdbd] p-6"
                                    >
                                        <p
                                            className={`text-sm font-semibold uppercase tracking-wide ${item.color}`}
                                        >
                                            {item.type}
                                        </p>

                                        <p className="mt-4 text-sm font-light leading-relaxed text-[#262626]">
                                            {item.title}
                                        </p>

                                        <button
                                            className={`mt-7 flex items-center gap-1 text-xl text-blue-500 font-black ${item.color}`}
                                        >
                                            <span className='hover:underline cursor-pointer text-xs font-normal flex items-center gap-0.5'>{item.action} </span>
                                            {item.type === "OPPORTUNITY" ? (
                                                <ArrowRight size={14} />
                                            ) : (
                                                <ChevronRight size={14} />
                                            )}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STOCK CRITICALITY */}
                        <div className="flex flex-col rounded-2xl border border-[#eccdbd] bg-white p-5 sm:p-7">
                            {/* HEADER */}
                            <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                Stock Criticality
                            </h2>

                            {/* ITEMS */}
                            <div className="mt-10 flex-1 space-y-10">
                                {STOCK_CRITICALITY.map((item) => (
                                    <div key={item.id}>
                                        <div className="flex items-center justify-between gap-4">
                                            <h3 className=" font-semibold text-[#171717]">
                                                {item.label}
                                            </h3>

                                            <span
                                                className={`font-bold ${item.value <= 10
                                                    ? "text-[#cf1f1f]"
                                                    : item.value <= 30
                                                        ? "text-[#b45100]"
                                                        : "text-[#5d6677]"
                                                    }`}
                                            >
                                                {item.value}% Left
                                            </span>
                                        </div>

                                        <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-[#eeeeee]">
                                            <div
                                                className="h-full rounded-full transition-all duration-500"
                                                style={{
                                                    width: `${item.value}%`,
                                                    backgroundColor: item.color,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* BUTTON */}
                            <button className="mt-5 rounded-xl border border-[#eccdbd] bg-[#fcfcfc] px-6 py-5 text-sm font-semibold text-[#3d3c3c] transition-all hover:bg-[#f8f8f8]">
                                Generate Restock Report
                            </button>
                        </div>

                        {/* MARKETPLACE FEED */}
                        <div className="rounded-2xl border border-[#eccdbd] bg-white p-5 sm:p-7">
                            {/* HEADER */}
                            <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                Marketplace Feed
                            </h2>

                            {/* FEED ITEMS */}
                            <div className="mt-10 space-y-5 overflow-y-auto pr-1 xl:max-h-[520px]">
                                {MARKETPLACE_FEED.map((item) => (
                                    <div key={item.id} className="flex items-start gap-4">
                                        {/* DOT */}
                                        <div
                                            className={`mt-1.5 h-4 w-4 shrink-0 rounded-full ${item.dot}`}
                                        />

                                        {/* CONTENT */}
                                        <div className="min-w-0">
                                            <div className="flex flex-wrap items-center gap-1">
                                                <span className=" text-[#171717]">
                                                    {item.title}
                                                </span>

                                                <span className=" text-[#5d6677]">
                                                    —
                                                </span>

                                                <span className=" text-[#5d6677]">
                                                    {item.value}
                                                </span>
                                            </div>

                                            <p className=" text-sm font-light leading-relaxed text-[#5d6677]">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========================================================= */}
                {/* SECTION 05 — REGIONAL SALES */}
                {/* ========================================================= */}
                <section className="mt-8">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1fr]">
                        {/* DEVICE REACH */}
                        <div className="rounded-2xl border border-[#eccdbd] bg-indigo-100 p-5 sm:p-7 lg:p-10">
                            {/* HEADER */}
                            <div className="flex items-start justify-between gap-4">
                                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                    Device Reach
                                </h2>

                                <span className=" text-[#5f6773]">
                                    Oct 2023
                                </span>
                            </div>

                            {/* CONTENT */}
                            <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                                {/* CHART */}
                                <div className="mx-auto h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:mx-0">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={DEVICE_REACH_DATA}
                                                dataKey="value"
                                                innerRadius={75}
                                                outerRadius={95}
                                                startAngle={90}
                                                endAngle={-270}
                                                paddingAngle={0}
                                                stroke="none"
                                            >
                                                {DEVICE_REACH_DATA.map((item) => (
                                                    <Cell
                                                        key={item.name}
                                                        fill={item.color}
                                                    />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* LEGEND */}
                                <div className="flex-1 space-y-8">
                                    {DEVICE_REACH_DATA.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex items-center justify-between gap-4"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                                                    {item.name === "Mobile" ? (
                                                        <Smartphone
                                                            size={24}
                                                            className="text-[#b45100]"
                                                        />
                                                    ) : (
                                                        <Monitor
                                                            size={24}
                                                            className="text-[#5f6773]"
                                                        />
                                                    )}
                                                </div>

                                                <span className=" text-[#171717] font-bold">
                                                    {item.name}
                                                </span>
                                            </div>

                                            <span className=" text-[#171717] font-bold">
                                                {item.value}%
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SEARCH INTELLIGENCE */}
                        <div className="rounded-2xl border border-[#eccdbd] bg-white p-5 sm:p-7 lg:p-10">
                            {/* HEADER */}
                            <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                Search Intelligence
                            </h2>

                            {/* TAGS */}
                            <div className="mt-10 flex  flex-wrap gap-4">
                                {SEARCH_INTELLIGENCE.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between gap-4 rounded-2xl border border-[#eccdbd] px-2 py-2 "
                                    >
                                        <span className="text-[#171717] ps-1">
                                            {item.keyword}
                                        </span>

                                        <div
                                            className={`rounded-xl px-4 py-2 text-sm font-bold ${item.negative
                                                ? "bg-[#ffe8e8] text-[#cf1f1f]"
                                                : item.positive
                                                    ? "bg-[#f7ede6] text-[#b45100]"
                                                    : "bg-[#f1f1f1] text-[#5f6773]"
                                                }`}
                                        >
                                            {item.growth}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
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

    // {
    //     name: "Remaining",
    //     value: 89,
    //     fill: "#b65200",
    // },
];


const TOP_MOVERS = [
    {
        id: 1,
        name: "Hyper-Lift 2.0",
        category: "Performance Running",
        revenue: "$18,400",
        orders: 420,
        growth: "+24%",
        positive: true,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400",
    },
    {
        id: 2,
        name: "Urban Drift Low",
        category: "Streetwear",
        revenue: "$12,100",
        orders: 310,
        growth: "+18%",
        positive: true,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400",
    },
    {
        id: 3,
        name: "Retro Aura Mid",
        category: "Lifestyle",
        revenue: "$9,800",
        orders: 280,
        growth: "-3%",
        positive: false,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400",
    },
    {
        id: 4,
        name: "Urban Drift Low",
        category: "Streetwear",
        revenue: "$12,100",
        orders: 310,
        growth: "+18%",
        positive: true,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400",
    },
];


const AI_PULSE = [
    {
        id: 1,
        type: "OPPORTUNITY",
        title: `"Urban Drift Low" showing high interest in Berlin. Recommend a localized promo push.`,
        action: "Apply Action",
        color: "text-[#b45100]",
    },
    {
        id: 2,
        type: "RISK DETECTED",
        title: "Sudden 12% spike in checkout abandonment on Mobile Safari v17.1. Investigating API latency.",
        action: "See Logs",
        color: "text-[#cf1f1f]",
    },
];

const STOCK_CRITICALITY = [
    {
        id: 1,
        label: "Performance Running",
        value: 8,
        color: "#c91919",
    },
    {
        id: 2,
        label: "Basketball Elite",
        value: 24,
        color: "#b45100",
    },
    {
        id: 3,
        label: "Limited Collabs",
        value: 82,
        color: "#5d6677",
    },
];

const MARKETPLACE_FEED = [
    {
        id: 1,
        title: "New Sale",
        value: "$240.00",
        subtitle: `Verified Seller "SneakerLab" • 1s ago`,
        dot: "bg-[#b45100]",
    },
    {
        id: 2,
        title: "Inventory Alert",
        value: "Low Stock",
        subtitle: `Jordan 4 Retro "Midnight" • 4m ago`,
        dot: "bg-[#5d6677]",
    },
    {
        id: 3,
        title: "Fraud Flag",
        value: "Suspicious IP",
        subtitle: "Transaction ID #482920 • 12m ago",
        dot: "bg-[#cf1f1f]",
    },
    {
        id: 4,
        title: "New Sale",
        value: "$1,100.00",
        subtitle: `VIP Customer "A. Miller" • 18m ago`,
        dot: "bg-[#b45100]",
    },
    {
        id: 5,
        title: "Price Sync",
        value: "Global Update",
        subtitle: "2,400 SKUs adjusted • 45m ago",
        dot: "bg-[#5d6677]",
    },
];


const DEVICE_REACH_DATA = [
    {
        name: "Mobile",
        value: 72,
        color: "#b45100",
    },
    {
        name: "Desktop",
        value: 28,
        color: "#c7cedb",
    },
];

const SEARCH_INTELLIGENCE = [
    {
        id: 1,
        keyword: `"Gore-tex"`,
        growth: "+140%",
        positive: true,
    },
    {
        id: 2,
        keyword: `"Retro Basket"`,
        growth: "+82%",
        positive: true,
    },
    {
        id: 3,
        keyword: `"Limited Release"`,
        growth: "+12%",
        positive: false,
    },
    {
        id: 4,
        keyword: `"Sustainability"`,
        growth: "+44%",
        positive: true,
    },
    {
        id: 5,
        keyword: `"Vaporfly"`,
        growth: "-5%",
        negative: true,
    },
];