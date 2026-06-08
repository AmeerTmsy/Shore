import { useMemo, useRef, useState } from "react";
import { AlertTriangle, Bot, CalendarDays, ChevronLeft, ChevronRight, Clock3, Download, EllipsisVertical, Filter, Map, MoreVertical, RefreshCw, Search, ShieldAlert, ShieldBan, UserRound, Wifi, X, ChevronDown, } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell, RadialBarChart, RadialBar } from "recharts";

export default function SuspendedAccountsPage() {

    const [activeNode, setActiveNode] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const containerRef = useRef(null);
    const [tooltipStyle, setTooltipStyle] = useState({});
    const [search, setSearch] = useState("");

    const filteredAccounts = useMemo(() => {
        return suspendedAccounts.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    const getTooltipPosition = (node) => {
        const x = parseInt(node.x);
        const y = parseInt(node.y);

        let left = "40px";
        let top = "-30px";

        // RIGHT EDGE
        if (x > 65) {
            left = "-260px";
        }

        // LEFT EDGE
        if (x < 20) {
            left = "40px";
        }

        // BOTTOM EDGE
        if (y > 70) {
            top = "-120px";
        }

        // TOP EDGE
        if (y < 20) {
            top = "40px";
        }

        return {
            transform: `translate(${left}, ${top})`,
        };
    };

    const handleMouseEnter = (node) => {
        if (!containerRef.current) return;

        const container =
            containerRef.current.getBoundingClientRect();

        const tooltipWidth = 250;
        const tooltipHeight = 140;
        const spacing = 20;

        const nodeX =
            (parseFloat(node.x) / 100) * container.width;

        const nodeY =
            (parseFloat(node.y) / 100) * container.height;

        let left = nodeX + spacing;
        let top = nodeY - 30;

        // RIGHT COLLISION
        if (left + tooltipWidth > container.width) {
            left = nodeX - tooltipWidth - spacing;
        }

        // LEFT COLLISION
        if (left < 0) {
            left = spacing;
        }

        // BOTTOM COLLISION
        if (top + tooltipHeight > container.height) {
            top = container.height - tooltipHeight - spacing;
        }

        // TOP COLLISION
        if (top < 0) {
            top = spacing;
        }

        setTooltipStyle({
            left,
            top,
        });

        setActiveNode(node);
    };

    return (
        <div className="min-h-screen bg-[#f7f7f8] p-4 md:p-7">
            {/* HEADER */}
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-[#1b1b1b]">Suspended Accounts</h1>
                    <p className="mt-2 text-[#674f42]">
                        Monitor banned, restricted, and high-risk accounts across the
                        platform.
                    </p>
                </div>

                {/* <div className="flex flex-wrap gap-3">
                    <ActionButton icon={<Download size={18} />} text="Export Reports" />
                    <ActionButton icon={<Bot size={18} />} text="AI Scan" />

                    <button className="rounded-2xl bg-[#ff6b00] px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]">
                        Review Queue
                    </button>
                </div> */}
            </div>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {suspendedStats.map((card) => (
                    <div
                        key={card.title}
                        className="rounded-2xl border border-[#f0c9b7] bg-white p-6"
                    >
                        <div className="flex items-start justify-between">
                            <div className="rounded-2xl bg-[#fff2ea] p-3 text-[#b14e00]">
                                {card.icon}
                            </div>

                            <div className="text-end">
                                <span className="text-sm font-semibold text-[#d45500]">
                                    {card.change}
                                </span>
                                <p className="mt-1 text-[#75584b]">{card.title}</p>

                                <h3 className="text-xl font-bold text-[#1d1d1d]">
                                    {card.value}
                                </h3>
                            </div>
                        </div>

                        <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#ececec]">
                            <div
                                className={`h-full ${card.color} rounded-full`}
                                style={{ width: card.progress }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* FILTERS */}
            <div className="mt-8 rounded-2xl border border-[#f0c9b7] bg-white p-4 md:p-7">
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-nowrap">
                            Search Account
                        </label>

                        <div className="flex items-center gap-3 rounded-xl bg-[#f5f5f7] px-4 py-2">
                            <Search className="text-gray-400" size={20} />

                            <input
                                type="text"
                                placeholder="Email, ID, Store or IP"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-transparent outline-none"
                            />
                        </div>
                    </div>

                    <SelectBox title="Account Type" />
                    <SelectBox title="Risk Level" />
                    <SelectBox title="Status" />

                    <button className="mt-auto flex py-2 items-center justify-center gap-2 rounded-xl border border-[#efc8b6] bg-white px-5 font-bold text-[#9a4d18] transition hover:bg-[#fff4ee]">
                        <Filter size={18} />
                        Advanced
                    </button>
                </div>
            </div>

            {/* DESKTOP TABLE */}
            <div className="mt-10 hidden overflow-hidden rounded-2xl border border-[#f0c9b7] bg-white lg:block">
                <div className="flex items-center justify-between border-b border-[#f3d8ca] px-7 py-6">
                    <h2 className="text-xl font-bold">Investigation Queue</h2>

                    <div className="flex items-center gap-4">
                        <button className="rounded-xl p-2 transition hover:bg-[#f7f2ee]">
                            <RefreshCw size={16} />
                        </button>

                        <button className="rounded-xl p-2 transition hover:bg-[#f7f2ee]">
                            <MoreVertical size={16} />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1200px]">
                        <thead className="bg-[#f8f8fa]">
                            <tr className="text-left text-sm uppercase tracking-wide text-[#7a5c4e]">
                                <th className="px-7 py-5">User Info</th>
                                <th>Type</th>
                                <th>Reason</th>
                                <th>Risk Score</th>
                                <th>Agent</th>
                                <th>Appeal</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredAccounts.map((user) => (
                                <tr
                                    key={user.id}
                                    className="border-t border-[#f3d8ca] transition hover:bg-[#fff9f5]"
                                >
                                    <td className="px-7 py-6">
                                        <div className="flex items-center gap-4">
                                            {user.avatar ? (
                                                <img
                                                    src={user.avatar}
                                                    alt=""
                                                    className="h-14 w-14 rounded-full object-cover object-top"
                                                />
                                            ) : (
                                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ececec] font-bold">
                                                    RS
                                                </div>
                                            )}

                                            <div>
                                                <h4 className=" font-semibold">{user.name}</h4>

                                                <p className="text-[#6b5d55] text-sm">ID: {user.userId}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="rounded-full bg-[#edf1ff] px-4 py-0.5 text-xs text-[#5b6678]">
                                            {user.type}
                                        </span>
                                    </td>

                                    <td>
                                        <div className="flex items-center gap-2 text-lg">
                                            <AlertTriangle
                                                size={18}
                                                className="text-[#ff5a00]"
                                            />
                                            <span className="text-sm">{user.reason}</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="h-1.5 w-24 rounded-full bg-[#ececec]">
                                                <div
                                                    className={`h-full rounded-full ${user.risk > 85
                                                        ? "bg-red-600"
                                                        : "bg-orange-500"
                                                        }`}
                                                    style={{ width: `${user.risk}%` }}
                                                />
                                            </div>

                                            <span className="font-medium text-red-600">
                                                {user.risk}%
                                            </span>
                                        </div>
                                    </td>

                                    <td className=" text-[#9f4f12]">{user.agent}</td>

                                    <td>
                                        {user.appealType === "pending" && (
                                            <span className="rounded-full bg-[#ffe6e2] px-4 py-0.5 text-xs text-red-500">
                                                PENDING
                                            </span>
                                        )}

                                        {user.appealType === "rejected" && (
                                            <span className="rounded-full bg-[#efefef] px-4 py-0.5 text-xs text-[#72665e]">
                                                REJECTED
                                            </span>
                                        )}

                                        {user.appealType === "none" && (
                                            <span className="italic text-sm font-light text-[#7f7268]">
                                                No appeal submitted
                                            </span>
                                        )}
                                    </td>

                                    <td>
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => setDrawerOpen(true)}
                                                className="rounded-xl bg-[#ff6b00] px-4 py-2 font-medium text-sm text-white transition hover:opacity-90"
                                            >
                                                View Case
                                            </button>

                                            <button className="rounded-xl p-2 hover:bg-[#f5f5f5]">
                                                <EllipsisVertical size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-between px-7 py-6">
                    <p className="text-sm font-light text-[#6e6058]">
                        Showing 1-10 of 2,840 suspended accounts
                    </p>

                    <div className="flex items-center gap-3">
                        <PaginationButton>
                            <ChevronLeft size={18} />
                        </PaginationButton>

                        <PaginationButton active>1</PaginationButton>
                        <PaginationButton>2</PaginationButton>
                        <PaginationButton>3</PaginationButton>

                        <PaginationButton>
                            <ChevronRight size={18} />
                        </PaginationButton>
                    </div>
                </div>
            </div>

            {/* MOBILE CARDS */}
            <div className="mt-10 space-y-6 lg:hidden">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black">Review Queue</h2>

                    <button className="flex items-center gap-2 rounded-full border border-[#e9c5b6] bg-white px-5 py-3 font-semibold text-[#7b4a2c]">
                        <Filter size={18} />
                        Filters
                    </button>
                </div>

                {mobileCards.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-2xl border border-[#f0c9b7] bg-white p-5"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <img
                                    src={item.avatar}
                                    alt=""
                                    className="h-16 w-16 rounded-[24px] object-cover object-top"
                                />

                                <div className="hidden sm:block">
                                    <h3 className="text-xl font-bold">{item.name}</h3>
                                    <p className="mt-2 text-[#7b6658]">
                                        ID: {item.id}
                                    </p>
                                </div>
                            </div>

                            <span className="rounded-full bg-[#eceff7] px-4 py-1 text-xs text-[#697487]">
                                {item.type}
                            </span>
                        </div>
                        <div className="sm:hidden">
                            <h3 className="text-lg font-bold mt-3">{item.name}</h3>
                            <p className="text-sm text-[#7b6658]">
                                ID: {item.id}
                            </p>
                        </div>

                        <div className="mt-4 flex flex-col sm:flex-row justify-between gap-6">
                            <div>
                                <p className="text-sm uppercase tracking-wide text-[#78584a]">
                                    Suspension Reason
                                </p>

                                <h4 className=" text-lg font-medium">
                                    {item.reason}
                                </h4>
                            </div>

                            <div className="min-w-[120px]">
                                <p className="text-sm uppercase tracking-wide text-[#78584a]">
                                    Risk Score
                                </p>

                                <div className=" flex items-center gap-3">
                                    <div className="h-2 flex-1 rounded-full bg-[#ececec]">
                                        <div
                                            className={`h-full rounded-full ${item.risk > 80
                                                ? "bg-red-600"
                                                : item.risk > 60
                                                    ? "bg-orange-500"
                                                    : "bg-[#ddd]"
                                                }`}
                                            style={{ width: `${item.risk}%` }}
                                        />
                                    </div>

                                    <span className="font-medium text-red-600">
                                        {item.risk}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="my-7 border-t border-[#f1d7ca]" />

                        <div className="flex gap-3">
                            <button
                                onClick={() => setDrawerOpen(true)}
                                className={`flex-1 rounded-[24px] py-3 font-semibold ${item.risk > 50
                                    ? "bg-[#b65300] text-white"
                                    : "bg-[#f1f1f1]"
                                    }`}
                            >
                                {item.button}
                            </button>

                            <button className="rounded-[24px] border border-[#e8c6b8] px-5">
                                <MoreVertical size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* ANALYTICS */}
            <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="rounded-[32px] border border-[#f0c9b7] bg-white p-5 md:p-7">
                    {/* HEADER */}
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-[#1f1f1f]">
                                Suspension Velocity
                            </h3>

                            <p className="mt-2 text-[#7a6355]">
                                Comparison between AI and Manual suspensions (30d)
                            </p>
                        </div>

                        <button className="flex items-center gap-2 rounded-full bg-[#f4f4f5] px-5 py-3 text-sm text-[#333]">
                            Last 30 Days
                            <ChevronDown size={18} />
                        </button>
                    </div>

                    {/* CHART */}
                    <div className="mt-10 h-[320px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={chartData}
                                barGap={0}
                                barCategoryGap="18%"
                            >
                                <XAxis
                                    dataKey="day"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{
                                        fill: "#6f5648",
                                        fontSize: 14,
                                        fontWeight: 700,
                                    }}
                                />

                                <Tooltip
                                    cursor={{ fill: "transparent" }}
                                    contentStyle={{
                                        borderRadius: "18px",
                                        border: "1px solid #f0c9b7",
                                        background: "#fff",
                                    }}
                                />

                                {/* MANUAL */}
                                <Bar
                                    dataKey="manual"
                                    stackId="suspension"
                                    radius={[0, 0, 0, 0]}
                                >
                                    {chartData.map((_, index) => (
                                        <Cell
                                            key={`manual-${index}`}
                                            fill="#f3d7c8"
                                        />
                                    ))}
                                </Bar>

                                {/* AI */}
                                <Bar
                                    dataKey="ai"
                                    stackId="suspension"
                                    radius={[8, 8, 0, 0]}
                                >
                                    {chartData.map((_, index) => (
                                        <Cell
                                            key={`ai-${index}`}
                                            fill="#ff8539"
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* LEGEND */}
                    <div className="mt-6 flex flex-wrap items-center gap-8">
                        <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-[#ff8539]" />

                            <span className="font-medium text-[#1f1f1f]">
                                AI Flagged
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-[#f3d7c8]" />

                            <span className="font-medium text-[#1f1f1f]">
                                Manual Mod
                            </span>
                        </div>
                    </div>
                </div>

                <div className="rounded-[32px] border border-[#f0c9b7] bg-white p-7">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-xl font-bold">
                                Regional Abuse Nodes
                            </h3>

                            <p className="mt-2 text-[#7a6355]">
                                Top clusters of high-risk IP activity
                            </p>
                        </div>

                        <Map size={22} />
                    </div>

                    <div ref={containerRef} className="relative mt-8 h-[340px] rounded-[28px] bg-[#f3f3f4] overflow-visible">
                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-[#ececec]" />

                        {/* Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-[90px] font-black text-[#d8d8d8] opacity-70">
                            300×300
                        </div>

                        {/* Nodes */}
                        {nodes.map((node) => (
                            <div
                                key={node.id}
                                className="absolute cursor-pointer"
                                style={{
                                    left: node.x,
                                    top: node.y,
                                }}
                                onMouseEnter={() => handleMouseEnter(node)}
                                onMouseLeave={() => setActiveNode(null)}
                            >
                                {/* Ping */}
                                <div
                                    className="absolute animate-ping rounded-full opacity-30"
                                    style={{
                                        width: `${node.glow}px`,
                                        height: `${node.glow}px`,
                                        backgroundColor: node.color,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                />

                                {/* Glow */}
                                <div
                                    className="absolute rounded-full blur-xl opacity-40"
                                    style={{
                                        width: `${node.glow}px`,
                                        height: `${node.glow}px`,
                                        backgroundColor: node.color,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                />

                                {/* Dot */}
                                <div
                                    className="relative rounded-full shadow-2xl"
                                    style={{
                                        width: `${node.size}px`,
                                        height: `${node.size}px`,
                                        backgroundColor: node.color,
                                        boxShadow: `0 0 30px ${node.color}`,
                                        animation: "blink 1.6s infinite",
                                    }}
                                />
                            </div>
                        ))}

                        {/* Hover Card */}
                        {activeNode && (
                            <div
                                className=" pointer-events-none absolute z-50 sm:w-[350px] rounded-[26px] border border-[#efc6b2] bg-white px-7 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-200"
                                style={{
                                    left: tooltipStyle.left,
                                    top: tooltipStyle.top,
                                }}
                            >
                                <div className="flex items-center justify-between gap-6">
                                    <div className="min-w-0">
                                        <p className="text-2xl font-black leading-tight">
                                            {activeNode.region}
                                        </p>

                                        <p className="mt-2 text-sm text-[#7a6355]">
                                            High-risk activity cluster
                                        </p>
                                    </div>

                                    <span
                                        className="shrink-0 text-3xl font-black"
                                        style={{ color: activeNode.color }}
                                    >
                                        {activeNode.percent}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    <style>
                        {`
                            @keyframes blink {
                                0%, 100% {
                                transform: scale(1);
                                opacity: 1;
                                }

                                50% {
                                transform: scale(1.2);
                                opacity: 0.7;
                                }
                            }
                        `}
                    </style>
                </div>
            </div>

            {/* DRAWER */}
            <div
                className={`fixed inset-0 z-50 transition ${drawerOpen
                    ? "pointer-events-auto bg-black/40 backdrop-blur-sm"
                    : "pointer-events-none bg-black/0"
                    }`}
            >
                <div className={`absolute flex flex-col right-0 top-0 h-full w-full overflow-y-auto bg-white shadow-2xl transition duration-300 md:w-[620px] ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
                    {/* DRAWER HEADER */}
                    <div className="sticky top-0 z-30 border-b border-[#f2d8ca] bg-white p-6 shrink-0">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="rounded-[22px] border-2 border-[#b55d1f] p-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
                                        alt=""
                                        className="h-20 w-20 rounded-[18px] object-cover"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-5xl font-black">Marcus Rivera</h2>

                                    <p className="mt-2 text-xl text-[#6c5b53]">
                                        User ID: #44029 • Joined Oct 2023
                                    </p>

                                    <div className="mt-5 flex gap-3">
                                        <span className="rounded-full bg-red-700 px-5 py-2 font-bold text-white">
                                            PERMANENT BAN
                                        </span>

                                        <span className="rounded-full bg-[#ffe3d2] px-5 py-2 font-bold text-[#8c4a12]">
                                            Risk Score: 94%
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setDrawerOpen(false)}
                                className="rounded-xl p-2 hover:bg-[#f4f4f4]"
                            >
                                <X size={32} />
                            </button>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-8 p-6 flex-1">
                        <section>
                            <h4 className="mb-5 text-sm font-black uppercase tracking-[4px] text-[#705447]">
                                Trust Score Analysis
                            </h4>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                {trustScores.map((item) => {
                                    const startAngle = 210;
                                    const totalAngle = 240;

                                    const endAngle =
                                        startAngle - (item.value / 100) * totalAngle;
                                    return (
                                        <div
                                            key={item.label}
                                            className="rounded-[28px] border border-[#efcbb9] bg-white p-6"
                                        >
                                            <div className="mx-auto h-[150px] w-[150px]">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <RadialBarChart
                                                        innerRadius="78%"
                                                        outerRadius="100%"
                                                        data={[item]}
                                                        startAngle={startAngle}
                                                        endAngle={endAngle}
                                                        barSize={10}
                                                    >
                                                        <RadialBar
                                                            background={{
                                                                fill: "#ececec",
                                                            }}
                                                            clockWise
                                                            dataKey="value"
                                                            cornerRadius={999}
                                                            fill={item.color}
                                                        />
                                                    </RadialBarChart>
                                                </ResponsiveContainer>

                                                {/* CENTER VALUE */}
                                                <div className="-mt-[92px] text-center">
                                                    <span className="text-5xl font-black text-black">
                                                        {item.value}%
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="mt-2 text-center text-lg font-black uppercase tracking-wide">
                                                {item.label}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>

                        <section className="rounded-[28px] border border-[#f1d2c4] bg-[#fff5f0] p-6">
                            <h3 className="text-4xl font-black text-[#69331a]">
                                ✨ AI Investigator Insights
                            </h3>

                            <p className="mt-4 text-xl leading-relaxed text-[#92542f]">
                                Account fingerprint shows{" "}
                                <span className="font-bold">
                                    89% similarity
                                </span>{" "}
                                with known botnet "Shadow-Step". Unusual velocity spike in
                                refunds detected over a 12-hour window.
                            </p>
                        </section>

                        <section>
                            <h4 className="mb-5 text-sm font-black uppercase tracking-[4px] text-[#705447]">
                                Security Alerts
                            </h4>

                            <div className="space-y-4">
                                {alerts.map((alert) => (
                                    <div
                                        key={alert.title}
                                        className="rounded-[24px] border border-[#f0d2c4] p-5"
                                    >
                                        <div className="flex gap-4">
                                            <div className="rounded-xl bg-[#fff1ea] p-3">
                                                <Wifi
                                                    size={22}
                                                    className={alert.color}
                                                />
                                            </div>

                                            <div>
                                                <h5
                                                    className={`text-2xl font-black ${alert.color}`}
                                                >
                                                    {alert.title}
                                                </h5>

                                                <p className="mt-1 text-[#5f5149]">
                                                    {alert.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h4 className="mb-5 text-sm font-black uppercase tracking-[4px] text-[#705447]">
                                Linked Fraud Connections
                            </h4>

                            <div className="space-y-4">
                                {[
                                    {
                                        name: "javier_m77",
                                        info: "SHARED CC DATA",
                                        match: "98% Match",
                                    },
                                    {
                                        name: "rivera.shoes.biz",
                                        info: "SAME IP ADDRESS",
                                        match: "42% Match",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex items-center justify-between rounded-[22px] border border-[#f0d3c5] p-4"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="h-14 w-14 rounded-full bg-[#cfd4de]" />

                                            <div>
                                                <h5 className="font-black">{item.name}</h5>

                                                <p className="text-sm font-bold text-[#7b685f]">
                                                    {item.info}
                                                </p>
                                            </div>
                                        </div>

                                        <span className="rounded-xl bg-[#ffe3d2] px-4 py-2 font-bold text-[#844413]">
                                            {item.match}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h4 className="mb-5 text-sm font-black uppercase tracking-[4px] text-[#705447]">
                                Activity Timeline
                            </h4>

                            <div className="space-y-8 border-l-2 border-[#efcdbd] pl-8">
                                {[
                                    {
                                        title: "Permanent Ban Implemented",
                                        desc: "By System (High Risk Threshold)",
                                        color: "bg-red-600",
                                    },
                                    {
                                        title: "Appeal Submitted",
                                        desc: '"This is a misunderstanding, I am traveling."',
                                        color: "bg-[#b35500]",
                                    },
                                    {
                                        title: "Suspicious Login Detected",
                                        desc: "Origin: Novosibirsk, RU (Proxy)",
                                        color: "bg-[#9ea2ad]",
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="relative">
                                        <div
                                            className={`absolute -left-[42px] top-2 h-5 w-5 rounded-full ${item.color}`}
                                        />

                                        <h5 className="text-2xl font-black">
                                            {item.title}
                                        </h5>

                                        <p className="mt-1 text-[#6d5e57]">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h4 className="mb-5 text-sm font-black uppercase tracking-[4px] text-[#705447]">
                                Investigative Notes
                            </h4>

                            <textarea
                                rows={5}
                                placeholder="Add comments for other moderators..."
                                className="w-full rounded-[24px] border border-[#efcdbf] bg-[#fafafa] p-5 outline-none"
                            />
                        </section>
                    </div>
                    <div className="space-y-4 sticky bottom-0 right-0 left-0 bg-white p-6 pt-3 border-t border-orange-200">
                        <div className="grid grid-cols-2 gap-4">
                            <button className="rounded-[22px] bg-[#a74e00] py-5 text-xl font-black text-white">
                                Escalate to Legal
                            </button>

                            <button className="rounded-[22px] bg-red-700 py-5 text-xl font-black text-white">
                                Reject Appeal
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <button className="rounded-2xl bg-[#f1f1f1] py-4 font-bold">
                                Restore
                            </button>

                            <button className="rounded-2xl bg-[#f1f1f1] py-4 font-bold">
                                Extend Hold
                            </button>

                            <button className="rounded-2xl bg-[#f1f1f1] py-4 font-bold">
                                Contact
                            </button>
                        </div>

                        <button className="w-full font-black text-[#a45112]">
                            DOWNLOAD INVESTIGATION PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ------------------------ COMPONENTS ------------------------ */

function ActionButton({ icon, text }) {
    return (
        <button className="flex items-center gap-2 rounded-2xl border border-[#efcbb7] bg-white px-5 py-3 font-semibold text-[#3d3d3d] transition hover:bg-[#fff4ee]">
            {icon}
            {text}
        </button>
    );
}

function SelectBox({ title }) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold">
                {title}
            </label>

            <select className="py-2 w-full rounded-xl bg-[#f5f5f7] px-4 outline-none">
                <option>All Types</option>
            </select>
        </div>
    );
}

function PaginationButton({ children, active }) {
    return (
        <button
            className={`flex h-10 w-10 items-center justify-center rounded-2xl border text-lg font-bold transition ${active
                ? "border-[#ff6b00] bg-[#ff6b00] text-white"
                : "border-[#ebc9b7] bg-white hover:bg-[#fff5ef]"
                }`}
        >
            {children}
        </button>
    );
}




const suspendedStats = [
    {
        title: "Total Suspended",
        value: "2,840",
        change: "+2.4%",
        icon: <ShieldBan size={22} />,
        progress: "65%",
        color: "bg-orange-500",
    },
    {
        title: "Suspended Today",
        value: "14",
        change: "+12%",
        icon: <CalendarDays size={22} />,
        progress: "28%",
        color: "bg-orange-500",
    },
    {
        title: "Appeals Pending",
        value: "42",
        change: "Urgent",
        icon: <Clock3 size={22} />,
        progress: "50%",
        color: "bg-orange-500",
    },
    {
        title: "Permanent Bans",
        value: "1,120",
        change: "Final",
        icon: <X size={22} />,
        progress: "78%",
        color: "bg-red-600",
    },
    {
        title: "High Risk",
        value: "156",
        change: "Alert",
        icon: <AlertTriangle size={22} />,
        progress: "34%",
        color: "bg-red-500",
    },
    {
        title: "AI Suspended",
        value: "912",
        change: "94% Acc.",
        icon: <Bot size={22} />,
        progress: "80%",
        color: "bg-slate-600",
    },
];

const suspendedAccounts = [
    {
        id: 1,
        name: "Jordan Miller",
        userId: "#44029",
        type: "SELLER",
        reason: "Payment Fraud",
        risk: 92,
        agent: "AI Sentinel",
        appeal: "No appeal submitted",
        appealType: "none",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    },
    {
        id: 2,
        name: "Elena Vance",
        userId: "#39102",
        type: "BUYER",
        reason: "Policy Abuse",
        risk: 65,
        agent: "Mod. Sarah",
        appeal: "Pending",
        appealType: "pending",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    },
    {
        id: 3,
        name: "RareSneaks Ltd.",
        userId: "#88211",
        type: "STORE",
        reason: "Counterfeit Items",
        risk: 98,
        agent: "AI Sentinel",
        appeal: "Rejected",
        appealType: "rejected",
        avatar: null,
    },
];

const mobileCards = [
    {
        name: "Marcus Thorne",
        id: "#SH-99201",
        reason: "Bot Activity",
        type: "MERCHANT",
        risk: 94,
        button: "Review Case",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    },
    {
        name: "Lydia Vance",
        id: "#SH-44582",
        reason: "Multiple Accounts",
        type: "BUYER",
        risk: 62,
        button: "Review Case",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    },
    {
        name: "Julian Ross",
        id: "#SH-11029",
        reason: "Fraudulent Returns",
        type: "COLLECTOR",
        risk: 45,
        button: "View Details",
        avatar:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
    },
];

const alerts = [
    {
        title: "VPN/Proxy Detection",
        desc: "Last 5 logins routed through residential proxy in Moscow.",
        color: "text-red-600",
    },
    {
        title: "Multi-device Switching",
        desc: "Switched between 8 unique device IDs in 48 hours.",
        color: "text-amber-700",
    },
    {
        title: "Refund Spike",
        desc: "4 refund requests ($1,240 total) filed within 1 hour.",
        color: "text-amber-700",
    },
];




const chartData = [
    {
        day: "MON",
        manual: 22,
        ai: 40,
    },
    {
        day: "TUE",
        manual: 10,
        ai: 65,
    },
    {
        day: "WED",
        manual: 28,
        ai: 72,
    },
    {
        day: "THU",
        manual: 4,
        ai: 42,
    },
    {
        day: "FRI",
        manual: 55,
        ai: 68,
    },
    {
        day: "SAT",
        manual: 20,
        ai: 52,
    },
    {
        day: "SUN",
        manual: 38,
        ai: 50,
    },
];



const nodes = [
    {
        id: 1,
        region: "North America",
        percent: "42%",
        x: "32%",
        y: "30%",
        size: 18,
        glow: 60,
        color: "#cf1b1b",
    },
    {
        id: 2,
        region: "Western Europe",
        percent: "28%",
        x: "68%",
        y: "58%",
        size: 26,
        glow: 95,
        color: "#ff6a00",
    },
    {
        id: 3,
        region: "East Asia",
        percent: "15%",
        x: "72%",
        y: "68%",
        size: 18,
        glow: 60,
        color: "#6f5246",
    },
];



const trustScores = [
    {
        value: 91,
        label: "Fraud Prob.",
        color: "#e50012",
    },
    {
        value: 42,
        label: "Verification",
        color: "#d6d6d6",
    },
    {
        value: 18,
        label: "Behavioral",
        color: "#ff6b00",
    },
];