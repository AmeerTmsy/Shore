import React, { useMemo, useState } from "react";
import { AlertTriangle, BadgeCheck, Ban, ChevronDown, ExternalLink, Map, MessageSquare, MoreVertical, Search, ShieldCheck, Star, Store, TrendingUp, Users, X, Sparkles, CircleDollarSign, Clock3, FileText, Headphones, Mail, Eye, } from "lucide-react";



const ManageSellers = () => {
    const [selectedSeller, setSelectedSeller] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const closeDrawer = () => {
        setDrawerOpen(false);

        setTimeout(() => {
            setSelectedSeller(null);
        }, 200);
    };

    const openDrawer = (seller) => {
        setSelectedSeller(seller);

        requestAnimationFrame(() => {
            setDrawerOpen(true);
        });
    };

    const stats = useMemo(
        () => [
            { title: "Total Sellers", value: "18,412", sub: "+12%", icon: <Users size={28} />, color: "text-orange-700" },
            { title: "Active Sellers", value: "15,102", sub: "82%", icon: <TrendingUp size={28} />, progress: 82, color: "text-green-600" },
            { title: "Verified Status", value: "92.4%", sub: "KYC Success Up", icon: <BadgeCheck size={28} />, color: "text-blue-600" },
            { title: "Merchant Trust", value: "4.8/5.0", sub: "★★★★★", icon: <Star size={28} />, color: "text-yellow-600" },
            { title: "Suspended", value: "84", sub: "ATTENTION REQUIRED", icon: <Ban size={28} />, color: "text-red-600" },
            { title: "Critical Risk", value: "31", sub: "Fraud Alert", icon: <AlertTriangle size={28} />, color: "text-red-600" },
        ],
        []
    );

    return (
        <>
            <div className="min-h-screen bg-[#fcfcfd] p-4 md:p-8">
                {/* HEADER */}
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-zinc-900">
                            Sellers
                        </h1>

                        <p className="text-zinc-500 text-lg mt-2 max-w-3xl">
                            Advanced marketplace oversight: monitor seller
                            health, performance metrics, and compliance.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button className="h-16 px-7 rounded-2xl border border-orange-200 bg-white text-zinc-700 font-semibold flex items-center gap-3">
                            Bulk Actions
                            <ChevronDown size={20} />
                        </button>

                        <button className="h-16 px-7 rounded-2xl border border-orange-300 bg-white text-orange-700 font-semibold flex items-center gap-3">
                            <ExternalLink size={20} />
                            Export Data
                        </button>

                        <button className="h-16 px-8 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold flex items-center gap-3 shadow-lg shadow-orange-500/20 transition-all">
                            + Add New Seller
                        </button>
                    </div>
                </div>

                {/* MOBILE STATS */}
                <div className="md:hidden flex gap-4 overflow-x-auto scrollbar-hide mt-8 pb-2">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[260px] rounded-[32px] border border-orange-100 bg-white p-6 shadow-sm"
                        >
                            <div
                                className={`${item.color} w-fit mb-5`}
                            >
                                {item.icon}
                            </div>

                            <h3 className="text-5xl font-black text-zinc-900">
                                {item.value}
                            </h3>

                            <p className="text-zinc-500 mt-2 text-xl">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>

                {/* DESKTOP STATS */}
                <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-[32px] border border-orange-100 bg-white p-7 shadow-sm"
                        >
                            <div className="flex items-start justify-between">
                                <div
                                    className={`${item.color}`}
                                >
                                    {item.icon}
                                </div>

                                <span className="text-orange-700 font-bold text-sm">
                                    {item.sub === "ATTENTION REQUIRED"
                                        ? ""
                                        : item.sub.includes("%")
                                            ? item.sub
                                            : ""}
                                </span>
                            </div>

                            <h3 className="text-5xl font-black text-zinc-900 mt-5">
                                {item.value}
                            </h3>

                            <p className="text-zinc-500 mt-3 font-medium">
                                {item.title}
                            </p>

                            {item.progress && (
                                <div className="mt-5">
                                    <div className="h-3 bg-zinc-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-orange-500 rounded-full"
                                            style={{
                                                width: `${item.progress}%`,
                                            }}
                                        />
                                    </div>

                                    <div className="flex justify-end mt-2 text-sm font-bold text-zinc-700">
                                        {item.sub}
                                    </div>
                                </div>
                            )}

                            {!item.progress &&
                                item.sub &&
                                !item.sub.includes("%") && (
                                    <div
                                        className={`mt-4 text-sm font-bold ${item.title === "Suspended"
                                            ? "text-red-600 bg-red-100 w-fit px-3 py-1 rounded-full"
                                            : item.title ===
                                                "Critical Risk"
                                                ? "text-red-600"
                                                : "text-zinc-600"
                                            }`}
                                    >
                                        {item.sub}
                                    </div>
                                )}
                        </div>
                    ))}
                </div>

                {/* FILTER BAR */}
                <div className="mt-10 rounded-[36px] border border-orange-100 bg-white p-5">
                    <div className="flex flex-col xl:flex-row gap-4">
                        <div className="flex-1 h-16 rounded-2xl border border-orange-100 px-5 flex items-center gap-4">
                            <Search
                                className="text-zinc-400"
                                size={24}
                            />

                            <input
                                type="text"
                                placeholder="Filter by name, store ID, or email..."
                                className="w-full bg-transparent outline-none text-lg text-zinc-700 placeholder:text-zinc-400"
                            />
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {["Tier: All", "Status: All", "Region: Global"].map(
                                (item) => (
                                    <button
                                        key={item}
                                        className="h-16 px-6 rounded-2xl border border-orange-100 bg-white text-zinc-600 font-semibold flex items-center gap-2"
                                    >
                                        {item}
                                        <ChevronDown size={18} />
                                    </button>
                                )
                            )}

                            <button className="h-16 px-6 rounded-2xl text-orange-700 font-semibold flex items-center gap-3">
                                <Star size={20} />
                                Save View
                            </button>
                        </div>
                    </div>
                </div>

                {/* MOBILE DIRECTORY */}
                <div className="md:hidden mt-10">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-4xl font-black text-zinc-900">
                            Seller Directory
                        </h2>

                        <button className="text-orange-700 font-bold text-2xl">
                            Filter
                        </button>
                    </div>

                    <div className="space-y-6">
                        {sellersData.map((seller) => (
                            <div
                                key={seller.id}
                                className="rounded-[36px] border border-orange-100 bg-white p-6 shadow-sm"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex gap-4">
                                        <img
                                            src={seller.avatar}
                                            alt={seller.seller}
                                            className="w-24 h-24 rounded-[28px] object-cover"
                                        />

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-4xl font-black text-zinc-900">
                                                    {seller.store}
                                                </h3>

                                                <BadgeCheck
                                                    size={28}
                                                    className="text-blue-500"
                                                />
                                            </div>

                                            <div className="flex flex-wrap gap-3 mt-4">
                                                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-lg font-bold">
                                                    ELITE PERFORMANCE
                                                </span>

                                                <span className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 text-lg font-bold">
                                                    STABLE RISK
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="text-zinc-400">
                                        <MoreVertical size={28} />
                                    </button>
                                </div>

                                <div className="border-t border-orange-100 my-6" />

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-zinc-400 text-2xl">
                                            Revenue
                                        </p>

                                        <h4 className="text-5xl font-black text-zinc-900 mt-3">
                                            $42,500.00
                                        </h4>
                                    </div>

                                    <div>
                                        <p className="text-zinc-400 text-2xl">
                                            Orders
                                        </p>

                                        <h4 className="text-5xl font-black text-zinc-900 mt-3">
                                            184
                                        </h4>
                                    </div>
                                </div>

                                <div className="border-t border-orange-100 my-6" />

                                <div className="grid grid-cols-3 gap-4">
                                    <button
                                        onClick={() =>
                                            openDrawer(seller)
                                        }
                                        className="h-20 rounded-3xl bg-zinc-100 text-zinc-900 text-2xl font-bold"
                                    >
                                        View Profile
                                    </button>

                                    <button className="h-20 rounded-3xl bg-zinc-100 text-zinc-900 text-2xl font-bold">
                                        Message
                                    </button>

                                    <button className="h-20 rounded-3xl bg-red-50 text-red-500 flex items-center justify-center">
                                        <Ban size={34} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MOBILE AI */}
                    <div className="mt-10 rounded-[40px] bg-gradient-to-br from-[#071238] to-[#090d16] text-white p-8">
                        <div className="flex items-center gap-3 text-orange-400 font-bold text-3xl">
                            <Sparkles size={32} />
                            Velocity AI
                        </div>

                        <p className="mt-8 text-4xl leading-[1.4] font-medium text-zinc-200">
                            Our predictive engine detects a{" "}
                            <span className="font-black text-white">
                                12% risk increase
                            </span>{" "}
                            in the footwear category for bulk-buy arbitrage
                            patterns.
                        </p>

                        <button className="mt-10 h-24 rounded-3xl bg-orange-500 text-white text-3xl font-black w-full">
                            Generate Audit Report
                        </button>
                    </div>
                </div>

                {/* DESKTOP TABLE */}
                <div className="hidden md:block mt-10 rounded-[40px] overflow-hidden border border-orange-100 bg-white">
                    <div className="grid grid-cols-7 px-8 py-8 text-zinc-500 font-bold text-lg border-b border-orange-100">
                        <div>SELLER</div>
                        <div>STORE</div>
                        <div>PERFORMANCE</div>
                        <div>VOLUME</div>
                        <div>COMPLIANCE</div>
                        <div>RISK LEVEL</div>
                        <div className="text-right">ACTIONS</div>
                    </div>

                    {sellersData.map((seller) => (
                        <div
                            key={seller.id}
                            className="grid grid-cols-7 px-8 py-8 items-center border-b border-orange-100"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={seller.avatar}
                                    alt={seller.seller}
                                    className="w-16 h-16 rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="font-bold text-3xl text-zinc-900">
                                        {seller.seller}
                                    </h4>

                                    <span className="mt-2 inline-flex px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
                                        {seller.tier}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-xl border border-orange-200 flex items-center justify-center">
                                        <Store
                                            size={24}
                                            className="text-orange-700"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-2xl text-zinc-900">
                                            {seller.store}
                                        </h4>

                                        <div className="flex items-center gap-1 text-orange-700 text-sm">
                                            {seller.storeUrl}
                                            <ExternalLink size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="h-3 bg-zinc-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-orange-500 rounded-full"
                                        style={{
                                            width: `${seller.performance}%`,
                                        }}
                                    />
                                </div>

                                <div className="flex justify-between text-sm mt-3 text-zinc-500">
                                    <span>Fulfillment</span>
                                    <span>Quality</span>
                                    <span>Returns</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-3xl font-black text-zinc-900">
                                    {seller.revenue}
                                </h4>

                                <p className="text-zinc-500 font-medium mt-1">
                                    {seller.orders}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 text-orange-700 font-bold text-xl">
                                    <BadgeCheck size={20} />
                                    {seller.compliance}
                                </div>
                            </div>

                            <div>
                                <div
                                    className={`w-fit px-5 py-2 rounded-full border text-lg font-bold ${getRiskStyles(
                                        seller.riskColor
                                    )}`}
                                >
                                    {seller.risk}
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-5">
                                <button className="text-zinc-500">
                                    <MessageSquare size={24} />
                                </button>

                                <button className="text-zinc-500">
                                    <MoreVertical size={24} />
                                </button>

                                <button
                                    onClick={() => openDrawer(seller)}
                                    className="h-14 px-6 rounded-2xl bg-zinc-100 hover:bg-orange-500 hover:text-white text-zinc-800 font-bold transition-all"
                                >
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM GRID */}
                <div className="hidden md:grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">
                    {/* LEADERS */}
                    <div className="rounded-[36px] border border-orange-100 bg-white p-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-4xl font-black text-zinc-900">
                                Performance Leaders
                            </h3>

                            <TrendingUp
                                className="text-orange-700"
                                size={28}
                            />
                        </div>

                        <div className="space-y-10 mt-10">
                            {performanceLeaders.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex gap-4">
                                        <span className="text-4xl font-black text-orange-300">
                                            #{index + 1}
                                        </span>

                                        <div>
                                            <h4 className="text-2xl font-bold text-zinc-900">
                                                {item.name}
                                            </h4>

                                            <p className="text-zinc-500">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        {item.status === "up" ? (
                                            <TrendingUp
                                                size={26}
                                                className="text-green-500"
                                            />
                                        ) : (
                                            <div className="w-8 h-1 bg-zinc-400 rounded-full" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* REGIONAL */}
                    <div className="rounded-[36px] border border-orange-100 bg-white p-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-4xl font-black text-zinc-900">
                                Regional Health
                            </h3>

                            <Map
                                className="text-orange-700"
                                size={28}
                            />
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                            alt="map"
                            className="w-full h-64 object-cover rounded-3xl mt-8"
                        />

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="rounded-2xl bg-zinc-50 p-5">
                                <p className="text-zinc-500 text-xl">
                                    US-East
                                </p>

                                <h4 className="text-green-600 text-3xl font-black mt-2">
                                    Stable
                                </h4>
                            </div>

                            <div className="rounded-2xl bg-zinc-50 p-5">
                                <p className="text-zinc-500 text-xl">
                                    EU-Central
                                </p>

                                <h4 className="text-orange-700 text-3xl font-black mt-2">
                                    High Load
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* MODERATION */}
                    <div className="rounded-[36px] border border-orange-100 bg-white p-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-4xl font-black text-zinc-900">
                                Real-time Moderation
                            </h3>

                            <AlertTriangle
                                className="text-red-500"
                                size={26}
                            />
                        </div>

                        <div className="space-y-5 mt-8">
                            {moderationAlerts.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-3xl bg-red-50 p-6 border-l-4 border-red-500"
                                >
                                    <p className="text-sm font-black text-red-600">
                                        {item.type}
                                    </p>

                                    <h4 className="mt-2 text-2xl font-bold text-zinc-900">
                                        {item.title}
                                    </h4>

                                    <p className="mt-2 text-zinc-500">
                                        {item.time}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="h-3 rounded-full bg-zinc-100 overflow-hidden mt-6">
                            <div className="w-1/2 h-full bg-zinc-400" />
                        </div>
                    </div>
                </div>

                {/* AI PANEL */}
                <div className="hidden md:flex mt-10 rounded-[40px] bg-gradient-to-br from-[#2f3135] to-[#1f2126] p-10 items-center justify-between gap-10 text-white overflow-hidden">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-5">
                            <div className="w-20 h-20 rounded-3xl bg-orange-500 flex items-center justify-center">
                                <Sparkles size={34} />
                            </div>

                            <div>
                                <h3 className="text-5xl font-black">
                                    Velocity Predictive Intelligence
                                </h3>

                                <span className="inline-flex mt-3 px-4 py-2 rounded-full border border-orange-500 text-orange-400 font-bold text-sm">
                                    ACTIVE
                                </span>
                            </div>
                        </div>

                        <p className="mt-8 text-3xl text-zinc-300 leading-relaxed">
                            AI has detected a{" "}
                            <span className="font-black text-orange-300">
                                14% increase
                            </span>{" "}
                            in 'Suspicious Return' patterns across 8 sellers in
                            the US-East region.
                        </p>
                    </div>

                    <button className="shrink-0 h-28 px-14 rounded-3xl bg-orange-500 hover:bg-orange-600 text-white text-3xl font-black shadow-[0_0_40px_rgba(249,115,22,0.35)] transition-all">
                        View Audit Summary
                    </button>
                </div>
            </div>

            {/* BACKDROP */}
            <div
                onClick={closeDrawer}
                className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${drawerOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* DRAWER */}
            <div
                className={`fixed top-0 right-0 z-50 h-screen w-full md:w-[620px] bg-white border-l border-orange-100 overflow-y-auto transition-transform duration-500 ease-out transform shadow-2xl ${drawerOpen
                    ? "translate-x-0"
                    : "translate-x-full"
                    }`}
            >
                {selectedSeller && (
                    <div>
                        {/* HEADER */}
                        <div className="sticky top-0 bg-white z-20">
                            <div className="flex items-start justify-between gap-4 border-b border-orange-400 px-6 py-5 ">
                                <div className="flex gap-4">
                                    <div className="relative">
                                        <img
                                            src={selectedSeller.avatar}
                                            alt=""
                                            className="w-20 h-20 rounded-full object-cover border-4 border-orange-500"
                                        />

                                        <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h2 className="text-4xl font-black text-zinc-900">
                                                {selectedSeller.seller}
                                            </h2>

                                            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
                                                Verified
                                            </span>
                                        </div>

                                        <p className="text-zinc-500 text-xl mt-2">
                                            Store:{" "}
                                            <span className="text-orange-700 font-bold">
                                                SoleEmpire
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={closeDrawer}
                                    className="text-zinc-500 hover:text-black"
                                >
                                    <X size={28} />
                                </button>
                            </div>
                            {/* ACTIONS */}
                            <div className="grid grid-cols-3 gap-4 p-6 border-b border-orange-200 stiky top-0 w-full">
                                <button className="h-14 rounded-2xl bg-orange-500 text-white font-bold flex items-center justify-center gap-2">
                                    <Mail size={18} />
                                    Message
                                </button>

                                <button className="h-14 rounded-2xl bg-blue-50 text-blue-700 font-bold flex items-center justify-center gap-2">
                                    <Eye size={18} />
                                    Profile
                                </button>

                                <button className="h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
                                    <Ban size={22} />
                                </button>
                            </div>
                        </div>



                        {/* BODY */}
                        <div className="p-6 space-y-8">
                            {/* TOP STATS */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    {
                                        title: "TOTAL REVENUE",
                                        value: "$425,120",
                                    },
                                    {
                                        title: "LIFETIME ORDERS",
                                        value: "12.4k",
                                    },
                                    {
                                        title: "AVG RATING",
                                        value: "4.9 ⭐",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-3xl bg-zinc-50 border border-orange-100 p-5"
                                    >
                                        <p className="text-xs font-black text-zinc-500">
                                            {item.title}
                                        </p>

                                        <h4 className="text-3xl font-black text-zinc-900 mt-3">
                                            {item.value}
                                        </h4>
                                    </div>
                                ))}
                            </div>

                            {/* FULFILLMENT */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <TrendingUp
                                        size={24}
                                        className="text-orange-700"
                                    />

                                    <h3 className="text-3xl font-black text-zinc-900">
                                        Fulfillment Health
                                    </h3>
                                </div>

                                <div className="space-y-5 mt-6">
                                    {[
                                        {
                                            title: "On-time Shipping",
                                            value: "98%",
                                            width: "98%",
                                            color: "bg-orange-500",
                                        },
                                        {
                                            title: "Inventory Accuracy",
                                            value: "94%",
                                            width: "94%",
                                            color: "bg-orange-500",
                                        },
                                        {
                                            title: "Return Rate",
                                            value: "1.2%",
                                            width: "12%",
                                            color: "bg-red-400",
                                        },
                                    ].map((item) => (
                                        <div key={item.title}>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium text-zinc-700">
                                                    {item.title}
                                                </span>

                                                <span className="font-bold text-zinc-900">
                                                    {item.value}
                                                </span>
                                            </div>

                                            <div className="h-3 bg-zinc-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${item.color}`}
                                                    style={{
                                                        width: item.width,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-3xl border border-green-200 bg-green-50 p-6">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck
                                            size={24}
                                            className="text-green-700"
                                        />

                                        <h4 className="text-3xl font-black text-green-700">
                                            Low Risk Profile
                                        </h4>
                                    </div>

                                    <p className="mt-4 text-green-700 leading-relaxed">
                                        Consistent patterns, no major flags in
                                        last 90 days.
                                    </p>
                                </div>
                            </div>

                            {/* STORE IDENTITY */}
                            <div>
                                <h3 className="text-4xl font-black text-zinc-900">
                                    Store Identity
                                </h3>

                                <div className="mt-5 rounded-3xl border border-orange-100 p-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-zinc-400 text-sm font-bold">
                                                REGISTRATION NO.
                                            </p>

                                            <h4 className="mt-2 text-2xl font-bold">
                                                REG-99210-XC
                                            </h4>
                                        </div>

                                        <div>
                                            <p className="text-zinc-400 text-sm font-bold">
                                                TAX ID
                                            </p>

                                            <h4 className="mt-2 text-2xl font-bold">
                                                TX-440-91-L
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <p className="text-zinc-400 text-sm font-bold">
                                            MAIN WAREHOUSE
                                        </p>

                                        <div className="flex items-start gap-2 mt-2 text-zinc-700">
                                            <Map
                                                size={18}
                                                className="mt-1 text-orange-700"
                                            />

                                            1242 Commerce Way, Distribution
                                            Zone B, Austin, TX 78701
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RECENT ACTIVITY */}
                            <div>
                                <h3 className="text-4xl font-black text-zinc-900">
                                    Recent Activity
                                </h3>

                                <div className="space-y-5 mt-6">
                                    {drawerActivity.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-4"
                                        >
                                            <div
                                                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.bg} ${item.color}`}
                                            >
                                                {item.icon}
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-zinc-900 text-xl">
                                                    {item.title}
                                                </h4>

                                                <p className="text-zinc-500 mt-1">
                                                    {item.sub}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* FOOTER */}
                        <div className="sticky bottom-0 bg-white border-t border-orange-100 p-6 grid grid-cols-2 gap-4">
                            <button className="h-16 rounded-2xl border border-zinc-300 text-zinc-700 font-bold flex items-center justify-center gap-2">
                                <FileText size={20} />
                                Audit Log
                            </button>

                            <button className="h-16 rounded-2xl border border-orange-300 text-orange-700 font-bold flex items-center justify-center gap-2">
                                <Headphones size={20} />
                                Support
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ManageSellers;



const sellersData = [
    {
        id: 1,
        seller: "Alex Rivera",
        tier: "Enterprise",
        store: "UrbanKicks Co.",
        storeUrl: "uk-store.velocity.io",
        revenue: "$42.5k",
        orders: "1,240 orders",
        performance: 82,
        compliance: "Verified",
        risk: "Low Risk",
        riskColor: "green",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    },
    {
        id: 2,
        seller: "Sarah Chen",
        tier: "Pro",
        store: "Luxe Footwear",
        storeUrl: "luxe-sole.velocity.io",
        revenue: "$12.8k",
        orders: "312 orders",
        performance: 67,
        compliance: "Pending",
        risk: "Med Risk",
        riskColor: "yellow",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    },
];

const performanceLeaders = [
    {
        name: "Elite Sole Dist.",
        value: "0.4% return rate",
        status: "up",
    },
    {
        name: "Prime Hype Hub",
        value: "1.2h avg ship time",
        status: "up",
    },
    {
        name: "Street-Wise Inc.",
        value: "99.8% CSAT Score",
        status: "stable",
    },
];

const moderationAlerts = [
    {
        title: "SoleEmpire: Unusual activity detected in US-West.",
        time: "2 minutes ago",
        type: "REFUND SPIKE",
        color: "red",
    },
    {
        title: "UrbanKicks Co. submitted new tax documents.",
        time: "15 minutes ago",
        type: "KYC REVIEW",
        color: "orange",
    },
];

const drawerActivity = [
    {
        icon: <Clock3 size={18} />,
        title: "Inventory restocked",
        sub: "2 hours ago • +450 units added to 'SoleEmpire'",
        bg: "bg-blue-100",
        color: "text-blue-600",
    },
    {
        icon: <CircleDollarSign size={18} />,
        title: "Withdrawal request processed",
        sub: "Yesterday • $12,450 transferred",
        bg: "bg-yellow-100",
        color: "text-yellow-600",
    },
    {
        icon: <TrendingUp size={18} />,
        title: "New promotion launched",
        sub: "3 days ago • 'Summer Kickoff' event active",
        bg: "bg-orange-100",
        color: "text-orange-600",
    },
];

const getRiskStyles = (risk) => {
    if (risk === "green") {
        return "border-green-200 bg-green-50 text-green-700";
    }

    if (risk === "yellow") {
        return "border-yellow-200 bg-yellow-50 text-yellow-700";
    }

    return "border-red-200 bg-red-50 text-red-700";
};