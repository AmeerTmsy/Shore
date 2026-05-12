import React, { useEffect, useState } from "react";
import { Users, Radio, BadgeCheck, Ban, TriangleAlert, Search, SlidersHorizontal, FileText, MoreVertical, MessageSquare, Undo2, UserPlus, TrendingUp, ChevronLeft, ChevronRight, X, FileWarning, ShieldAlert, Clock3, UserX, Save, ShoppingBag, BadgeDollarSign, RotateCcw, ShieldCheck} from "lucide-react";

export default function AllUsers() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    console.log('selectedUser: ', selectedUser)

    useEffect(() => {
        console.log('selectedUser: ', selectedUser)
    }, [selectedUser])
    useEffect(() => {
        console.log('drawerOpen: ', drawerOpen)
    }, [drawerOpen])

    return (
        <div className="min-h-screen bg-[#f8f8f8] p-3 md:p-8">
            <div className="mx-auto max-w-[1700px] space-y-8">
                {/* Header */}
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            All Users
                        </h1>

                        <p className="mt-2 text-lg text-gray-500">
                            Manage and monitor platform participants
                        </p>
                    </div>

                    <button className="hidden md:flex items-center gap-3 rounded-[28px] bg-orange-500 px-8 py-5 text-lg font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600">
                        <UserPlus className="h-6 w-6" />
                        Add User
                    </button>
                </div>

                {/* Desktop Stats */}
                <div className="hidden md:grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="rounded-[34px] border border-orange-100 bg-white p-7 shadow-sm"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#faf7f4]">
                                    <Icon className={`h-7 w-7 ${item.color}`} />
                                </div>

                                <div className="mt-6">
                                    <p className="text-2xl font-medium text-gray-500">
                                        {item.title}
                                    </p>

                                    <h2 className="mt-2 text-5xl font-bold">{item.value}</h2>

                                    {item.sub && (
                                        <p
                                            className={`mt-3 text-lg ${item.color.includes("red")
                                                ? "text-red-500"
                                                : "text-gray-500"
                                                }`}
                                        >
                                            {item.sub}
                                        </p>
                                    )}

                                    {item.progress && (
                                        <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100">
                                            <div
                                                className="h-full rounded-full bg-orange-700"
                                                style={{ width: `${item.progress}%` }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Stats */}
                <div className="md:hidden overflow-x-auto">
                    <div className="flex gap-4 pb-2 w-max">
                        <div className="min-w-[160px] rounded-[30px] border border-orange-100 bg-white p-6">
                            <p className="text-gray-500 uppercase tracking-wide">
                                Total Users
                            </p>
                            <h2 className="mt-3 text-5xl font-bold">12.4k</h2>
                            <p className="mt-3 text-orange-700 font-semibold">
                                +5.2% vs LW
                            </p>
                        </div>

                        <div className="min-w-[160px] rounded-[30px] border border-orange-100 bg-white p-6">
                            <p className="text-gray-500 uppercase tracking-wide">
                                Active Now
                            </p>
                            <h2 className="mt-3 text-5xl font-bold">842</h2>
                            <p className="mt-3 text-green-500 font-semibold">
                                Live Traffic
                            </p>
                        </div>

                        <div className="min-w-[160px] rounded-[30px] border border-orange-100 bg-white p-6">
                            <p className="text-gray-500 uppercase tracking-wide">
                                Verified
                            </p>
                            <h2 className="mt-3 text-5xl font-bold">91%</h2>
                            <p className="mt-3 text-orange-700 font-semibold">
                                Trust Score
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="hidden md:flex items-center gap-5 rounded-[34px] border border-orange-100 bg-white p-6">
                    <div className="flex flex-1 items-center gap-3 rounded-2xl border border-orange-100 px-5 py-4">
                        <Search className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search ID, email or name..."
                            className="w-full bg-transparent text-lg outline-none placeholder:text-gray-400"
                        />
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl border border-orange-100 px-5 py-4">
                        <span className="text-xl font-semibold">Filter by Role</span>

                        <select className="rounded-xl border border-gray-300 bg-[#f8f8f8] px-5 py-3 outline-none">
                            <option>All Roles</option>
                        </select>
                    </div>

                    <button className="flex items-center gap-3 rounded-2xl border border-orange-100 px-6 py-4 text-xl">
                        <SlidersHorizontal />
                        More Filters
                    </button>

                    <button className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-100">
                        <FileText />
                    </button>
                </div>

                {/* Desktop Table */}
                <div className="hidden overflow-hidden rounded-[36px] border border-orange-100 bg-white md:block">
                    <div className="grid grid-cols-6 border-b border-orange-100 px-10 py-7 text-lg font-semibold uppercase tracking-wide text-gray-500">
                        <div>User Info</div>
                        <div>Role</div>
                        <div>Status</div>
                        <div>Activity</div>
                        <div>Risk</div>
                        <div>Joined</div>
                    </div>

                    {users.map((user, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-6 items-center border-b border-orange-100 px-10 py-8 transition hover:bg-orange-50/30"
                            onClick={() => {
                                console.log("user", user)
                                setSelectedUser(user);
                                setDrawerOpen(true);
                            }}
                        >
                            <div className="flex items-center gap-5">
                                <img
                                    src={user?.avatar}
                                    alt={user?.name}
                                    className="h-16 w-16 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="text-3xl font-bold">{user?.name}</h3>
                                    <p className="mt-1 text-xl text-gray-500">{user?.email}</p>
                                </div>
                            </div>

                            <div>
                                <span
                                    className={`rounded-full px-5 py-2 text-lg font-semibold ${getRoleStyle(
                                        user?.role
                                    )}`}
                                >
                                    {user?.role}
                                </span>
                            </div>

                            <div className="flex items-center gap-3 text-xl">
                                <BadgeCheck className="h-5 w-5 text-orange-600" />
                                <span className="text-orange-700">{user?.status}</span>
                            </div>

                            <div>
                                <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                                    <div
                                        className="h-full rounded-full bg-orange-500"
                                        style={{ width: `${user?.activityLevel}%` }}
                                    />
                                </div>

                                <p className="mt-3 text-xl text-gray-600">{user?.activity}</p>
                            </div>

                            <div>
                                <span
                                    className={`rounded-full px-5 py-2 text-lg font-semibold ${getRiskStyle(
                                        user?.risk
                                    )}`}
                                >
                                    {user?.risk}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-2xl text-gray-600">{user?.joined}</p>

                                <button>
                                    <MoreVertical className="text-gray-500" />
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="flex items-center justify-between px-10 py-8">
                        <p className="text-xl text-gray-500">
                            Showing 1-10 of 42.8k users
                        </p>

                        <div className="flex items-center gap-4">
                            <button className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-100">
                                <ChevronLeft />
                            </button>

                            <button className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-100">
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Insights */}
                <div className="hidden grid-cols-3 gap-6 md:grid">
                    <div className="rounded-[34px] border border-orange-100 bg-white p-8">
                        <h2 className="text-4xl font-bold">User Health</h2>

                        <div className="mt-10 space-y-8">
                            <div>
                                <div className="mb-3 flex justify-between text-xl">
                                    <span>Trust Score</span>
                                    <span className="font-bold text-orange-700">92%</span>
                                </div>

                                <div className="h-3 rounded-full bg-gray-100">
                                    <div className="h-full w-[92%] rounded-full bg-orange-700" />
                                </div>
                            </div>

                            <div>
                                <div className="mb-3 flex justify-between text-xl">
                                    <span>Retention Rate</span>
                                    <span className="font-bold text-gray-600">78%</span>
                                </div>

                                <div className="h-3 rounded-full bg-gray-100">
                                    <div className="h-full w-[78%] rounded-full bg-slate-300" />
                                </div>
                            </div>

                            <div>
                                <div className="mb-3 flex justify-between text-xl">
                                    <span>Engagement</span>
                                    <span className="font-bold text-orange-600">64%</span>
                                </div>

                                <div className="h-3 rounded-full bg-gray-100">
                                    <div className="h-full w-[64%] rounded-full bg-orange-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[34px] border border-orange-100 bg-white p-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-4xl font-bold">Platform Activity</h2>

                            <span className="text-xl font-semibold text-orange-700">
                                Live
                            </span>
                        </div>

                        <div className="mt-8 flex h-[260px] items-end justify-between gap-3 rounded-[28px] border border-orange-100 bg-[#fffaf5] p-5">
                            {[30, 60, 45, 90, 120, 75, 40].map((h, index) => (
                                <div
                                    key={index}
                                    className={`w-full rounded-t-xl ${index === 4 ? "bg-orange-700" : "bg-orange-200"
                                        }`}
                                    style={{ height: `${h * 1.6}px` }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[34px] border border-orange-100 bg-white p-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-4xl font-bold">Moderation Alerts</h2>

                            <span className="rounded-xl bg-red-600 px-3 py-1 text-white">
                                3 NEW
                            </span>
                        </div>

                        <div className="mt-8 space-y-5">
                            <div className="rounded-3xl border border-red-100 bg-red-50 p-5">
                                <h3 className="text-2xl font-bold text-red-700">
                                    Suspected Botting
                                </h3>

                                <p className="mt-2 text-lg text-gray-500">
                                    5 accounts flagged in EU-West
                                </p>
                            </div>

                            <div className="rounded-3xl border border-orange-100 bg-white p-5">
                                <h3 className="text-2xl font-bold text-orange-700">
                                    Terms Violation
                                </h3>

                                <p className="mt-2 text-lg text-gray-500">
                                    Unusual bulk transaction by ID: 2291
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="space-y-5 md:hidden">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold">User Directory</h2>

                        <span className="text-lg text-gray-500">
                            Showing 150 users
                        </span>
                    </div>

                    {mobileUsers.map((user, index) => (
                        <div
                            key={index}
                            className="rounded-[34px] border border-orange-100 bg-white p-5"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <img
                                        src={user?.avatar}
                                        alt={user?.name}
                                        className={`h-20 w-20 rounded-full object-cover ${user?.suspended ? "border-4 border-red-400" : ""
                                            }`}
                                    />

                                    <div>
                                        <h3 className="text-3xl font-bold">{user?.name}</h3>

                                        <p className="mt-1 text-lg text-gray-500">
                                            {user?.email}
                                        </p>
                                    </div>
                                </div>
                                <span className={`rounded-full px-4 py-2 text-lg font-bold ${user?.role === "USER" ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-700" }`}
                                >{user?.role}</span>
                            </div>
                            <div className="my-6 border-t border-orange-100" />
                            <div className="flex items-center justify-between">
                                <div className={`flex items-center gap-2 text-2xl font-semibold ${user?.suspended ? "text-red-500" : "text-green-500"}`}>
                                    <div className={`h-4 w-4 rounded-full ${user?.suspended ? "bg-red-500" : "bg-green-500"}`}/>
                                    {user?.status}
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => {
                                            setSelectedUser(user)
                                            setDrawerOpen(true)
                                        }}
                                        className={`rounded-2xl px-8 py-4 text-2xl font-bold ${user?.suspended ? "bg-gray-100 text-gray-500" : "bg-orange-700 text-white"}`}
                                    >View</button>

                                    <button className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-100">
                                        {user?.suspended ? (
                                            <Undo2 />
                                        ) : (
                                            <MessageSquare />
                                        )}
                                    </button>

                                    <button className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-100">
                                        <MoreVertical />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Mobile Insights */}
                    <div>
                        <h2 className="mb-5 text-4xl font-bold">System Insights</h2>

                        <div className="rounded-[34px] border border-orange-100 bg-[#f9efe4] p-6">
                            <p className="text-xl font-bold uppercase text-orange-700">
                                ✦ AI Recommendation
                            </p>

                            <h3 className="mt-5 text-4xl font-bold">
                                Identify \"Super-Buyers\"
                            </h3>

                            <p className="mt-5 text-2xl leading-relaxed text-gray-500">
                                Marcus Holloway and 12 others show 45% higher retention.
                                Consider upgrading them to 'Ambassador' status.
                            </p>

                            <button className="mt-8 w-full rounded-2xl bg-orange-700 py-5 text-2xl font-bold text-white">
                                Explore Segments
                            </button>
                        </div>

                        <div className="mt-6 rounded-[34px] border border-orange-100 bg-white p-6">
                            <p className="text-xl font-bold uppercase text-gray-500">
                                Active Activity Trends
                            </p>

                            <div className="mt-8 space-y-8">
                                <div>
                                    <div className="mb-3 flex items-center justify-between text-2xl">
                                        <span className="flex items-center gap-3">
                                            <TrendingUp className="text-orange-700" />
                                            New Signups
                                        </span>

                                        <span className="font-bold">+18%</span>
                                    </div>

                                    <div className="h-3 rounded-full bg-gray-100">
                                        <div className="h-full w-[70%] rounded-full bg-orange-700" />
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-3 flex items-center justify-between text-2xl">
                                        <span className="flex items-center gap-3">
                                            <Ban className="text-gray-500" />
                                            Churn Rate
                                        </span>

                                        <span className="font-bold">-2.1%</span>
                                    </div>

                                    <div className="h-3 rounded-full bg-gray-100">
                                        <div className="h-full w-[25%] rounded-full bg-slate-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Button */}
                <button className="fixed bottom-6 right-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-700 text-white shadow-2xl md:hidden">
                    <UserPlus className="h-10 w-10" />
                </button>
            </div>

            <>
                {/* BACKDROP */}
                <div
                    onClick={() => {
                        setDrawerOpen(false);
                        setSelectedUser(null);
                    }}
                    className={`fixed inset-0 z-40 backdrop-blur-sm bg-black/25 transition-opacity duration-75 ${drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                />

                {/* DRAWER */}
                <div className={`fixed top-0 right-0 z-50 h-screen w-full sm:w-[620px] bg-white border-l border-orange-100 shadow-2xl overflow-y-auto transform-gpu will-change-transform transition-transform duration-500 ease-out ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
                    {/* HEADER */}
                    <div className="sticky top-0 bg-white border-b border-orange-100 px-6 py-5 z-20">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex gap-4">
                                <div className="relative">
                                    <img
                                        src={selectedUser?.avatar}
                                        alt={selectedUser?.name}
                                        className="w-16 h-16 rounded-2xl object-cover border-2 border-orange-500"
                                    />

                                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-900 leading-none">
                                        {selectedUser?.name}
                                    </h2>

                                    <p className="text-zinc-500 mt-2 text-base">
                                        {selectedUser?.email}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-3">
                                        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
                                            ENTERPRISE TIER
                                        </span>

                                        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                                            VERIFIED USER
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => { setDrawerOpen(false), setSelectedUser(null) }}
                                className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 space-y-6 pb-32">
                        {/* STATS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    title: "Total Orders",
                                    value: "142",
                                    sub: "+12% vs last mo",
                                    icon: ShoppingBag,
                                    green: true,
                                },
                                {
                                    title: "Total Spent",
                                    value: "$12,450.20",
                                    sub: "Avg: $87.60/order",
                                    icon: BadgeDollarSign,
                                },
                                {
                                    title: "Return Rate",
                                    value: "1.2%",
                                    sub: "Excellent",
                                    icon: RotateCcw,
                                    green: true,
                                },
                                {
                                    title: "Trust Score",
                                    value: "98/100",
                                    sub: "",
                                    icon: ShieldCheck,
                                    progress: true,
                                },
                            ].map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={i}
                                        className="border border-orange-100 rounded-3xl p-5 bg-white"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="text-zinc-500 text-sm">{item.title}</p>
                                            <Icon className="w-4 h-4 text-orange-700" />
                                        </div>

                                        <h3 className="text-4xl font-bold mt-4 text-zinc-900">
                                            {item.value}
                                        </h3>

                                        {item.progress ? (
                                            <div className="mt-4 w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="w-[95%] h-full bg-orange-700 rounded-full" />
                                            </div>
                                        ) : (
                                            <p
                                                className={`mt-2 text-sm font-medium ${item.green ? "text-green-600" : "text-zinc-500"
                                                    }`}
                                            >
                                                {item.sub}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* ACCOUNT LOGISTICS */}
                        <div>
                            <h3 className="text-3xl font-bold text-zinc-900 flex items-center gap-3 mb-6">
                                <FileWarning className="w-7 h-7 text-orange-700" />
                                Account Logistics
                            </h3>

                            <div className="space-y-5">
                                {[
                                    ["Phone Number", "+1 (555) 234-9871"],
                                    ["Primary Region", "United States (California)"],
                                    ["Last Login IP", "192.168.1.104"],
                                    ["Account Created", "Oct 12, 2023"],
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between border-b border-orange-100 pb-4"
                                    >
                                        <p className="text-zinc-500 text-lg">{item[0]}</p>

                                        <p className="text-zinc-900 font-semibold text-lg text-right">
                                            {item[1]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RISK ANALYSIS */}
                        <div className="border border-red-100 bg-red-50 rounded-3xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <ShieldAlert className="text-red-600" />

                                    <h3 className="text-3xl font-bold text-red-600">
                                        Risk Analysis
                                    </h3>
                                </div>

                                <span className="px-3 py-1 rounded-full bg-white text-red-600 border border-red-200 text-xs font-bold">
                                    LOW RISK
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-sm mb-2 text-red-500 font-medium">
                                <p>Fraud Probability</p>
                                <p>3%</p>
                            </div>

                            <div className="w-full h-2 bg-red-100 rounded-full overflow-hidden">
                                <div className="w-[3%] h-full bg-red-500 rounded-full" />
                            </div>

                            <p className="mt-5 text-red-500 italic leading-8">
                                Behavioral pattern matches 99.4% of legitimate enterprise
                                accounts. No unusual IP jumps detected in the last 6 months.
                                Payment failure rate is below 1%.
                            </p>
                        </div>

                        {/* ACTIVITY FEED */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <Clock3 className="text-orange-700" />

                                <h3 className="text-3xl font-bold text-zinc-900">
                                    Activity Feed
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {[
                                    "Placed 4 orders in the last 24 hours",
                                    "Updated payment information",
                                    "Logged in from Los Angeles, CA",
                                    "Requested premium support assistance",
                                ].map((activity, i) => (
                                    <div
                                        key={i}
                                        className="border border-orange-100 rounded-2xl px-5 py-4 text-zinc-600 bg-orange-50/40"
                                    >
                                        {activity}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FOOTER */}
                    <div className="fixed bottom-0 right-0 w-full sm:w-[620px] bg-white border-t border-orange-100 p-5 z-30">
                        <div className="flex flex-wrap gap-3">
                            <button className="w-14 h-14 rounded-2xl border border-orange-200 flex items-center justify-center hover:bg-orange-50 transition-all">
                                <ShieldAlert className="text-zinc-700" />
                            </button>

                            <button className="w-14 h-14 rounded-2xl border border-orange-200 flex items-center justify-center hover:bg-orange-50 transition-all">
                                <Ban className="text-zinc-700" />
                            </button>

                            <button className="w-14 h-14 rounded-2xl border border-red-200 bg-red-50 flex items-center justify-center hover:bg-red-100 transition-all">
                                <UserX className="text-red-600" />
                            </button>

                            <button className="flex-1 h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-500/20">
                                <Save className="w-5 h-5" />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </>
        </div >
    );
}





const getRiskStyle = (risk) => {
    switch (risk) {
        case "High":
            return "bg-red-100 text-red-600";
        case "Low":
            return "bg-gray-100 text-gray-600";
        default:
            return "bg-gray-100 text-gray-500";
    }
};

const getRoleStyle = (role) => {
    switch (role) {
        case "Moderator":
            return "bg-black text-white";
        default:
            return "bg-slate-100 text-slate-700";
    }
};



const stats = [
    {
        title: "Total Users",
        value: "42.8k",
        sub: "+12% this mo",
        icon: Users,
        color: "text-orange-700",
    },
    {
        title: "Active",
        value: "18.2k",
        sub: "",
        progress: 72,
        icon: Radio,
        color: "text-orange-700",
    },
    {
        title: "New",
        value: "1.4k",
        sub: "Past 7 days",
        icon: TrendingUp,
        color: "text-orange-700",
    },
    {
        title: "Verified",
        value: "89%",
        sub: "KYC Completion",
        icon: BadgeCheck,
        color: "text-orange-700",
    },
    {
        title: "Suspended",
        value: "124",
        sub: "-4% vs LY",
        icon: Ban,
        color: "text-red-500",
    },
    {
        title: "High Risk",
        value: "32",
        sub: "Flagged accounts",
        icon: TriangleAlert,
        color: "text-red-500",
    },
];

const users = [
    {
        name: "Alex Rivera",
        email: "alex.r@velocity.io",
        role: "Seller",
        status: "Verified",
        activity: "High Activity",
        activityLevel: 82,
        risk: "Low",
        joined: "Oct 12, 2023",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
        name: "Jordan Smith",
        email: "jordan.s@domain.com",
        role: "Buyer",
        status: "Pending",
        activity: "Rare",
        activityLevel: 20,
        risk: "High",
        joined: "Nov 04, 2023",
        avatar:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },
    {
        name: "Casey Chen",
        email: "casey_moderator@elite.com",
        role: "Moderator",
        status: "Verified",
        activity: "Expert",
        activityLevel: 90,
        risk: "None",
        joined: "Jan 20, 2022",
        avatar:
            "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=400&auto=format&fit=crop",
    },
];

const mobileUsers = [
    {
        name: "Marcus Holloway",
        email: "marcus.h@elite.com",
        role: "VIP",
        status: "Active",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        suspended: false,
    },
    {
        name: "Elena Rodriguez",
        email: "elena.rod@global.io",
        role: "MOD",
        status: "Active",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
        suspended: false,
    },
    {
        name: "Julian Vane",
        email: "j.vane@archive.net",
        role: "USER",
        status: "Suspended",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        suspended: true,
    },
];
