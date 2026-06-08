import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, ArrowDownToLine, CheckCircle2, ChevronDown, Clock3, Eye, Filter, MoreVertical, RefreshCcw, Search, ShieldCheck, Store, Wallet, X, XCircle, } from "lucide-react";
import { useState } from "react";

export default function ReturnsManagement() {
    const [selectedReturn, setSelectedReturn] = useState(null);

    return (
        <div className="min-h-screen bg-[#f7f8fa] p-4 md:p-6">
            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Returns Management</h1>
                    <p className="mt-1 text-sm sm:text-[1em] text-gray-500">Monitor and moderate platform-wide return requests</p>
                </div>
                {/* <div className="flex flex-col gap-3 sm:flex-row">
                    <button className="flex items-center justify-center gap-2 rounded-2xl border border-orange-300 bg-white px-6 py-4 text-sm font-semibold text-orange-700 transition hover:bg-orange-50">
                        <ArrowDownToLine size={18} />Export CSV
                    </button>
                    <button className="flex items-center justify-center gap-2 rounded-2xl border border-orange-300 bg-white px-6 py-4 text-sm font-semibold text-orange-700 transition hover:bg-orange-50">
                        <RefreshCcw size={18} />Refresh
                    </button>
                    <button className="flex items-center justify-center gap-2 rounded-2xl bg-gray-100 px-6 py-4 text-sm font-semibold text-gray-700 transition hover:bg-gray-200">
                        <Filter size={18} />Filter
                    </button>
                </div> */}
            </div>
            {/* ================================================= */}
            {/* STATS */}
            {/* ================================================= */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${item.active ? "border-orange-400 ring-1 ring-orange-100" : "border-gray-200"}`}
                    >
                        <div className="flex justify-between">
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}
                            >{item.icon}</div>
                            <div className="text-end">
                                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">{item.title}</p>
                                <h2 className={`mt-1 text-xl font-bold tracking-tight ${item.active ? "text-orange-600" : "text-gray-900"}`}
                                >{item.value}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* ================================================= */}
            {/* MAIN GRID */}
            {/* ================================================= */}
            <div className="mt-8 grid grid-cols-1 gap-6 2xl:grid-cols-[1fr_320px]">
                {/* ================================================= */}
                {/* LEFT SIDE */}
                {/* ================================================= */}
                <div>
                    {/* FILTERS */}
                    <div className="rounded-2xl border border-orange-100 bg-white p-2 shadow-sm">
                        <div className="flex flex-col gap-4 xl:flex-row">
                            <button className="rounded-lg border border-orange-200 px-5 py-2.5 text-left text-sm font-semibold text-gray-700">
                                All Statuses
                            </button>
                            <button className="rounded-lg border border-orange-200 px-5 py-2.5 text-left text-sm font-semibold text-gray-700">
                                Refund Status
                            </button>
                            <button className="flex items-center justify-between rounded-lg border border-orange-200 px-5 py-2.5 text-left text-sm font-semibold text-gray-700 xl:min-w-[220px]">
                                All Sellers
                                <ChevronDown size={18} />
                            </button>
                            <input
                                type="date"
                                className="rounded-lg border border-orange-200 px-5 py-2.5 text-sm font-medium outline-none"

                            />
                        </div>
                    </div>
                    {/* ================================================= */}
                    {/* DESKTOP TABLE */}
                    {/* ================================================= */}
                    <div className="mt-6 hidden overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm xl:block">
                        <table className="w-full">
                            <thead className="bg-[#fcfcfc]">
                                <tr className="border-b border-orange-100">
                                    {[
                                        "RETURN ID", "CUSTOMER", "PRODUCT", "REASON", "STATUS", "RISK", "ACTIONS",
                                    ].map((item, index) => (
                                        <th
                                            key={index}
                                            className={`p-4 text-left text-sm font-bold text-gray-600 ${index === 0 ? 'pl-6' : index === 6 ? 'pr-6' : ''}`}
                                        >{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {returns.map((item, index) => (
                                    <tr
                                        key={index}
                                        onClick={() => setSelectedReturn(item)}
                                        className="cursor-pointer border-b border-orange-50 transition hover:bg-orange-50/30"
                                    >
                                        {/* RETURN ID */}
                                        <td className="px-2 py-3 ps-6">
                                            <h3 className="">#{item.id}</h3>
                                            <p className="text-base text-gray-500">Ord {item.orderId} </p>
                                        </td>
                                        {/* CUSTOMER */}
                                        <td className="px-2 py-3">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{item.customer}</h3>
                                                    <div className="mt-2 flex gap-2">
                                                        <span className="rounded-lg bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-700">SELLER</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {/* PRODUCT */}
                                        <td className="px-2 py-3">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-orange-200 bg-gray-50">👟</div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{item.product}</h3>
                                                    <p className="mt-1 text-sm text-gray-500">{item.seller}</p>
                                                </div>
                                            </div>
                                        </td>
                                        {/* REASON */}
                                        <td className="px-2 py-3">
                                            <p className="max-w-[180px] text-gray-700">{item.reason}</p>
                                        </td>
                                        {/* STATUS */}
                                        <td className="px-2 py-3">
                                            <span
                                                className={`rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wide ${statusBadge(item.status)}`}
                                            >{item.status}</span>
                                        </td>
                                        {/* RISK */}
                                        <td className="px-2 py-3">
                                            <span
                                                className={`rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wide ${riskBadge(item.risk)}`}
                                            >{item.risk}</span>
                                        </td>
                                        {/* ACTIONS */}
                                        <td className="px-2 py-3 pr-6">
                                            <div className="flex items-center gap-4">
                                                <button className="rounded-xl p-3 text-gray-600 transition hover:bg-gray-100">
                                                    <MoreVertical size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* PAGINATION */}
                        <div className="flex items-center justify-between border-t border-orange-100 px-6 py-4">
                            <p className="text-sm font-semibold text-gray-500">Showing 1 to 10 of 2,841 entries</p>
                            <div className="flex gap-2">
                                {[1, 2, 3].map((page) => (
                                    <button
                                        key={page}
                                        className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-semibold transition 
                                            ${page === 1
                                                ? "border-orange-500 bg-orange-500 text-white"
                                                : "border-orange-200 bg-white text-gray-700 hover:bg-orange-50"
                                            }`}
                                    >{page}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ================================================= */}
                    {/* MOBILE CARDS */}
                    {/* ================================================= */}
                    <div className="mt-6 space-y-5 xl:hidden">
                        {/* SEARCH */}
                        <div className="flex gap-3">
                            <div className="relative flex-1">
                                <Search
                                    size={20}
                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Search Return ID or Customer"
                                    className="h-16 w-full rounded-2xl border border-orange-200 bg-white pl-14 pr-4 text-sm outline-none"
                                />
                            </div>
                            <button className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-200 bg-white">
                                <Filter size={20} />
                            </button>
                        </div>
                        {/* CARDS */}
                        {returns.map((item, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm"
                            >
                                {/* CONTENT */}
                                <div className="p-5">
                                    <div className="flex gap-4">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-orange-100 bg-gray-50">👟</div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-400">{item.id}</p>
                                                    <h3 className="mt-2 text-2xl font-bold text-gray-900">{item.product}</h3>
                                                    <p className="mt-1 text-lg text-gray-500">{item.customer}</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <span
                                                        className={`block rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ${statusBadge(item.status)}`}
                                                    >{item.status}</span>
                                                    <span
                                                        className={`block rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ${riskBadge(item.risk)}`}
                                                    >{item.risk}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ACTIONS */}
                                <div className="grid grid-cols-2 border-t border-orange-100">
                                    <button
                                        onClick={() => setSelectedReturn(item)}
                                        className="border-r border-orange-100 px-5 py-5 text-lg font-bold text-orange-600 transition hover:bg-orange-50"
                                    >Review</button>
                                    <button className="px-5 py-5 text-lg font-bold text-gray-600 transition hover:bg-gray-50">
                                        Contact Seller
                                    </button>
                                </div>
                            </div>
                        ))}
                        {/* LOAD MORE */}
                        <button className="w-full rounded-full border border-orange-200 bg-white px-8 py-6 text-2xl font-bold text-orange-700 transition hover:bg-orange-50">
                            Load More Returns
                        </button>
                    </div>
                </div>
                {/* ================================================= */}
                {/* RIGHT SIDEBAR */}
                {/* ================================================= */}
                <div className="space-y-6">
                    {/* INSIGHTS */}
                    <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
                        <div className="flex items-center gap-3">
                            <AlertTriangle
                                className="text-orange-600"
                                size={22}
                            />
                            <h2 className="text-xl font-bold text-gray-900">Return Insights</h2>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-gray-900">Top Return Reasons</h3>
                            <div className="mt-6 space-y-5">
                                {[
                                    { label: "Size issues", value: "45%" },
                                    { label: "Damaged", value: "20%" },
                                    { label: "Not as described", value: "15%" },
                                    { label: "Others", value: "20%" },
                                ].map((item, index) => (
                                    <div key={index}>
                                        <div className="mb-2 flex justify-between font-semibold text-gray-600">
                                            <span>{item.label}</span>
                                            <span>{item.value}</span>
                                        </div>
                                        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                                            <div style={{ width: item.value }} className="h-full rounded-full bg-orange-500" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* QUICK ACTIONS */}
                        <div className="mt-8 border-t border-gray-100 pt-4">
                            <h3 className="text-xl font-bold text-gray-900">Quick Actions Required</h3>
                            <div className="mt-6 space-y-4">
                                <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-2xl bg-white p-3 text-red-600">
                                            <AlertTriangle size={22} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">12 High Risk Items</h4>
                                            <p className="text-sm text-gray-500">Pending review</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-2xl bg-white p-3 text-orange-600">
                                            <Clock3 size={22} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">45 Refunds</h4>
                                            <p className="text-sm text-gray-500">To process today</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* PROMO */}
                        <div className="mt-8 overflow-hidden rounded-3xl bg-[#1f2937] p-8 text-white">
                            <h3 className="text-xl font-bold leading-tight">Reduce your Return Rate</h3>
                            <p className=" text-gray-300">
                                Leverage our AI sizing tool to help customers find
                                their perfect fit before purchase.
                            </p>
                            <button className="mt-8 rounded-2xl bg-orange-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-orange-600">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================================================= */}
            {/* DRAWER */}
            {/* ================================================= */}
            <>
                {/* BACKDROP */}

                <div
                    onClick={() => setSelectedReturn(null)}
                    className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300
                                    ${selectedReturn
                                            ? "pointer-events-auto opacity-100"
                                            : "pointer-events-none opacity-0"
                                        }
                                    `}
                />

                {/* DRAWER */}

                <div
                    className={`fixed right-0 top-0 z-50 h-screen w-full overflow-y-auto border-l border-gray-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out will-change-transform md:w-[620px]
                                    ${selectedReturn
                                        ? "translate-x-0"
                                        : "translate-x-full"
                                    }
                                `}
                >
                    {/* HEADER */}

                    <div className="sticky top-0 z-10 border-b border-gray-100 shadow bg-white p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Return #{selectedReturn?.id}
                                    </h2>
                                    <span className="rounded-full bg-indigo-100 px-4 py-0.5 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                                        Review State
                                    </span>
                                </div>
                                <p className="text-gray-500">
                                    Case assigned to Auditor 42
                                </p>
                            </div>

                            <button
                                onClick={() => setSelectedReturn(null)}
                                className="rounded-2xl p-3 transition hover:bg-gray-100"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-8 p-6">
                        {/* CUSTOMER & SELLER */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-gray-100 bg-[#fafafa] p-5">
                                <p className="text-sm uppercase tracking-wide text-gray-400">
                                    Customer Info
                                </p>
                                <div className="mt-4 flex items-center gap-4">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-xl font-bold text-orange-700">
                                        MT
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Marcus Thorne
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Prime Member
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-gray-100 bg-[#fafafa] p-5">
                                <p className="text-sm uppercase tracking-wide text-gray-400">
                                    Seller Info
                                </p>
                                <div className="mt-4 flex items-center gap-4">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                                        <Store size={28} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Urban Kicks Ltd.
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Top Rated Seller
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* PRODUCT */}
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wide text-gray-400">Product Details</p>
                            <div className="mt-4 rounded-2xl border border-orange-100 p-3">
                                <div className="flex flex-col gap-5 sm:flex-row">
                                    <div className="flex h-30 w-full md:w-30 items-center justify-center rounded-lg border border-orange-100 bg-gray-50">👟</div>
                                    <div className="flex-1">
                                        <h3 className=" font-bold text-gray-900">Velocity Elite Runner X1</h3>
                                        <p className="text-sm text-gray-500">SKU: VEL-X1-882-ORG • Size: 10.5 US</p>
                                        <h4 className="mt-5 text-xl font-bold text-orange-700">$189.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* REASON */}
                        <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
                            <div className="flex items-center gap-3">
                                <span className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white">
                                    Damaged On Arrival
                                </span>
                            </div>
                            <p className="mt-6 leading-relaxed text-gray-700">
                                “The left shoe arrived with a significant tear in
                                the upper mesh near the toe box. The packaging
                                was also crushed.”
                            </p>
                            {/* EVIDENCE */}
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                {[1, 2, 3].map((item) => (
                                    <div
                                        key={item}
                                        className="aspect-video rounded-2xl border border-orange-100 bg-white"
                                    />
                                ))}
                            </div>
                        </div>
                        {/* RISK */}
                        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-5">
                            <div className="flex items-center gap-3">
                                <AlertTriangle
                                    className="text-red-600"
                                    size={28}
                                />
                                <h3 className="font-bold text-red-700">
                                    Risk Analysis: Frequent Returner
                                </h3>
                            </div>
                            <p className="mt-3 leading-relaxed text-gray-700">
                                User has returned 4 items in the last 60 days.
                                Current return-to-buy ratio is 45% (High).
                                Account flagged for manual review.
                            </p>
                        </div>
                    </div>
                    {/* FOOTER */}
                    <div className="sticky bottom-0 border-t border-gray-300 bg-white p-4">
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button className="flex-1 rounded-xl bg-gray-100 px-6 py-4 font-semibold text-gray-700 transition hover:bg-gray-200">
                                Reject Return
                            </button>
                            <button className="flex-1 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600">
                                Approve Return
                            </button>
                        </div>
                    </div>
                </div>
            </>

        </div>
    );
}


const returns = [
    {
        id: "RET-8842",
        orderId: "#89211",
        customer: "Marcus Thorne",
        product: "Velocity Air Max",
        seller: "Urban Kicks",
        reason: "Damaged on arrival",
        status: "Pending",
        risk: "High Risk",
        amount: "$189",
    },

    {
        id: "RET-8839",
        orderId: "#89205",
        customer: "Lydia Vance",
        product: "Stellar Runner 5",
        seller: "Velocity Store",
        reason: "Size too small",
        status: "Approved",
        risk: "Low Risk",
        amount: "$220",
    },

    {
        id: "RET-8835",
        orderId: "#89190",
        customer: "Ethan Hunt",
        product: "Cloud Strider X",
        seller: "Urban Kicks",
        reason: "Changed my mind",
        status: "Refunded",
        risk: "Low Risk",
        amount: "$175",
    },
];

const stats = [
    {
        title: "Total Returns",
        value: "2,841",
        icon: <ArrowDownToLine size={22} />,
        color: "text-gray-700",
        bg: "bg-gray-100",
    },

    {
        title: "Pending Review",
        value: "156",
        icon: <Clock3 size={22} />,
        color: "text-orange-600",
        bg: "bg-orange-100",
        active: true,
    },

    {
        title: "Approved",
        value: "1,240",
        icon: <CheckCircle2 size={22} />,
        color: "text-green-600",
        bg: "bg-green-100",
    },

    {
        title: "Rejected",
        value: "84",
        icon: <XCircle size={22} />,
        color: "text-red-600",
        bg: "bg-red-100",
    },

    {
        title: "Refunded Amount",
        value: "$42.5k",
        icon: <Wallet size={22} />,
        color: "text-orange-600",
        bg: "bg-orange-100",
    },

    {
        title: "Return Rate",
        value: "4.2%",
        icon: <ChevronDown size={22} />,
        color: "text-orange-700",
        bg: "bg-orange-100",
    },
];

const statusBadge = (status) => {
    if (status === "Pending") return "bg-orange-100 text-orange-700";
    if (status === "Approved") return "bg-indigo-100 text-indigo-700";
    return "bg-green-100 text-green-700";
};

const riskBadge = (risk) => {
    if (risk === "High Risk") return "bg-red-100 text-red-700";
    return "bg-gray-100 text-gray-700";
};