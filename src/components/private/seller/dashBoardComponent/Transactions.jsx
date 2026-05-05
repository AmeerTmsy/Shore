import React, { useState } from "react";

const statusStyles = {
    completed: "bg-green-100 text-green-600",
    pending: "bg-orange-100 text-orange-600",
    failed: "bg-red-100 text-red-600",
};

export default function Transactions() {
    const [selected, setSelected] = useState(null);
    const [selectedDateRange, setSelectedDateRange] = useState("7d");

    return (
        <div className="p-4 md:p-6 space-y-6 relative">
            {/* HEADER */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold">Transactions</h1>
                    <p className="text-gray-500 text-sm">Track every payment, fee, refund, and payout</p>
                    <button className="border border-[#ffb76ab2] px-4 py-2 rounded-lg text-sm flex items-center gap-1 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" /></svg>
                        <span>Download CSV </span>
                    </button>
                </div>
            </div>
            {/* TOP METRICS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Gross Sales */}
                <div className="bg-[#fff] border border-gray-200 shadow rounded-xl p-5 flex justify-between items-start">
                    <div>
                        <p className="text-sm text-gray-500">GROSS SALES</p>
                        <h2 className="text-2xl font-semibold mt-1">$14,290.45</h2>
                        <p className="text-green-500 text-sm mt-1">+12.5% vs last month</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}><path d="M9.5 3.5h4v4"></path><path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5"></path></g></svg>
                    </div>
                </div>

                {/* Total Fees */}
                <div className="bg-[#fff] border border-gray-200 shadow rounded-xl p-5 flex justify-between items-start">
                    <div>
                        <p className="text-sm text-gray-500">TOTAL FEES</p>
                        <h2 className="text-2xl font-semibold mt-1">$892.12</h2>
                        <p className="text-gray-500 text-sm mt-1">6.2% platform take</p>
                    </div>
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27M5.33 4.06L4.06 5.33L7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22l1.27-1.27z"></path></svg>
                    </div>
                </div>
                {/* Net Payouts */}
                <div className="bg-[#fff] border border-gray-200 shadow rounded-xl p-5 flex justify-between items-start">
                    <div>
                        <p className="text-sm text-gray-500">NET PAYOUTS</p>
                        <h2 className="text-2xl font-semibold text-orange-500 mt-1">$13,398.33</h2>
                        <p className="text-gray-500 text-sm mt-1">Next payout in 2 days</p>
                    </div>
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6M9 11a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M2 7.25A2.25 2.25 0 0 1 4.25 5h12.5A2.25 2.25 0 0 1 19 7.25v7.5A2.25 2.25 0 0 1 16.75 17H4.25A2.25 2.25 0 0 1 2 14.75zm2.25-.75a.75.75 0 0 0-.75.75V8h.75A.75.75 0 0 0 5 7.25V6.5zm-.75 6h.75a2.25 2.25 0 0 1 2.25 2.25v.75h8v-.75a2.25 2.25 0 0 1 2.25-2.25h.75v-3h-.75a2.25 2.25 0 0 1-2.25-2.25V6.5h-8v.75A2.25 2.25 0 0 1 4.25 9.5H3.5zm14-4.5v-.75a.75.75 0 0 0-.75-.75H16v.75c0 .414.336.75.75.75zm0 6h-.75a.75.75 0 0 0-.75.75v.75h.75a.75.75 0 0 0 .75-.75zm-14 .75c0 .414.336.75.75.75H5v-.75a.75.75 0 0 0-.75-.75H3.5zm.901 3.75A3 3 0 0 0 7 20h10.25A4.75 4.75 0 0 0 22 15.25V10a3 3 0 0 0-1.5-2.599v7.849a3.25 3.25 0 0 1-3.25 3.25z"></path></svg>
                    </div>
                </div>

                <div className="bg-black text-white rounded-xl p-5 relative overflow-hidden">
                    <p className="text-sm text-gray-300">PENDING BALANCE</p>
                    <h2 className="text-2xl font-semibold mt-1">$2,104.00</h2>
                    <p className="text-gray-400 text-sm mt-1">8 orders awaiting settlement</p>
                    <div className="absolute right-[-30px] top-[-30px] w-40 h-40 bg-white/5 rounded-full"></div>
                </div>
            </div>

            {/* FILTERS */}
            <div className="bg-white border border-gray-200 rounded-xl p-3 flex flex-wrap gap-3 items-center shadow">
                <input
                    placeholder="Search ID or Order ID..."
                    className="flex-1 min-w-[200px] border border-gray-300 px-3 py-2 rounded-lg text-sm"
                />

                <div className="flex gap-2 p-1 bg-indigo-50 rounded-lg">
                    <button
                        className={`px-4 py-1 cursor-pointer rounded-lg text-sm transition duration-300 hover:shadow-md ${selectedDateRange === "7d" ? "bg-white shadow-md" : "text-gray-600"}`}
                        onClick={() => setSelectedDateRange("7d")}
                    >
                        7d
                    </button>
                    <button
                        className={`px-4 py-1 cursor-pointer rounded-lg text-sm transition duration-300 hover:shadow-md ${selectedDateRange === "30d" ? "bg-white shadow-md" : "text-gray-600"}`}
                        onClick={() => setSelectedDateRange("30d")}
                    >
                        30d
                    </button>
                    <button className={`px-4 py-1 cursor-pointer rounded-lg text-sm transition duration-300 hover:shadow-md flex justify-center items-center gap-1 ${selectedDateRange === "custom" ? "bg-white shadow-md" : "text-gray-600"}`} onClick={() => setSelectedDateRange("custom")}>
                        <span>Custom</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 5V3m-9 2V3M3.25 8h17.5M3 10.044c0-2.115 0-3.173.436-3.981a3.9 3.9 0 0 1 1.748-1.651C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.412c.753.362 1.364.94 1.748 1.65c.436.81.436 1.868.436 3.983v4.912c0 2.115 0 3.173-.436 3.981a3.9 3.9 0 0 1-1.748 1.651C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.412a3.9 3.9 0 0 1-1.748-1.65C3 18.128 3 17.07 3 14.955z" /></svg>
                    </button>
                </div>

                <select className="border border-gray-300 px-3 py-2 rounded-lg text-sm">
                    <option>All Types</option>
                    <option>Sale</option>
                    <option>Refund</option>
                    <option>Payout</option>
                </select>

                <select className="border border-gray-300 px-3 py-2 rounded-lg text-sm">
                    <option>All Status</option>
                    <option>Completed</option>
                    <option>Pending</option>
                </select>

                <button className="text-orange-500 text-sm cursor-pointer">Clear filters</button>
            </div>

            {/* TABLE (DESKTOP) */}
            <div className="hidden md:block bg-white border border-gray-200 shadow rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <div className="w-full min-w-[800px]">
                        <div className="grid grid-cols-8 px-6 py-3 text-xs text-gray-500 border-b-2 border-gray-200 bg-gray-100">
                            <p className="px-1">Date & Time</p>
                            <p className="px-1">Transaction ID</p>
                            <p className="px-1">Order ID</p>
                            <p className="px-1">Type</p>
                            <p className="px-1">Gross</p>
                            <p className="px-1">Fees</p>
                            <p className="px-1">Net</p>
                            <p className="px-1">Status</p>
                        </div>

                        {transactionsData.map((t, i) => (
                            <div
                                key={i}
                                onClick={() => setSelected(t)}
                                className="grid grid-cols-8 px-6 py-4 text-sm border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                            >
                                <p className="px-1">{t.date} • {t.time}</p>
                                <p className="px-1 text-gray-600">{t.id}</p>
                                <p className="px-1 text-orange-500">{t.order}</p>
                                <p className="px-1">{t.type}</p>
                                <p className="px-1">${t.gross}</p>
                                <p className="px-1 text-red-500">${t.fees}</p>
                                <p className="px-1 font-medium">${t.net}</p>
                                <p className="px-1"><span className={`px-2 py-0.5 text-xs rounded-full w-fit ${statusStyles[t.status]}`}>
                                    {t.status}
                                </span></p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center lg:justify-between items-center px-6 py-3 flex-wrap gap-2 bg-gray-100">
                    <p className="text-sm text-gray-600">Showing 1-10 of 1,248 transactions</p>
                    <div className="flex gap-1">
                        <button className="px-4 py-1.5 shadow rounded-lg cursor-pointer bg-white">Previous</button>
                        <button className="px-4 py-1.5 shadow rounded-lg cursor-pointer bg-white ">1</button>
                        <button className="px-4 py-1.5 shadow rounded-lg cursor-pointer bg-white">2</button>
                        <button className="px-4 py-1.5 shadow rounded-lg cursor-pointer bg-white">3</button>
                        <button className="px-4 py-1.5 shadow rounded-lg cursor-pointer bg-white">Next</button>
                    </div>
                </div>
            </div>

            {/* MOBILE CARDS */}
            <div className="md:hidden space-y-4">
                {transactionsData.map((t, i) => (
                    <div
                        key={i}
                        onClick={() => setSelected(t)}
                        className="bg-white p-4 rounded-xl border cursor-pointer"
                    >
                        <div className="flex justify-between">
                            <p className="font-medium">${t.gross}</p>
                            <span className={`px-2 py-1 text-xs rounded ${statusStyles[t.status]}`}>
                                {t.status}
                            </span>
                        </div>

                        <p className="text-sm text-gray-500 mt-2">
                            {t.date} • {t.time}
                        </p>

                        <p className="text-sm mt-1">
                            {t.type} • {t.order}
                        </p>

                        <div className="flex justify-between mt-3">
                            <p className="text-gray-500 text-sm">Net</p>
                            <p className="text-orange-500 font-medium">${t.net}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* DRAWER (RIGHT PANEL) */}
            <div
                className={`fixed top-0 p-2 right-0 h-full w-full sm:w-105.5 transform transition-all duration-300 z-50 ${selected ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-6 bg-white border-2 border-gray-300 rounded-lg h-full flex flex-col shadow-xl">
                    {/* HEADER */}
                    {selected && <>
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h2 className="font-semibold text-lg">Transaction Detail</h2>
                                <p className="text-gray-500 text-xs font-medium">{selected.id}</p>
                            </div>
                            <button onClick={() => setSelected(null)}>✕</button>
                        </div>

                        {/* MAIN */}
                        <div className="border border-gray-200 shadow rounded-xl p-4 mb-4 bg-indigo-50">
                            <div className="flex justify-between">
                                <p className="text-gray-500 text-sm">Net Amount</p>
                                <span className={`px-2 py-1 text-xs rounded ${statusStyles[selected.status]}`}>
                                    {selected.status}
                                </span>
                            </div>

                            <h3 className="text-2xl font-semibold mt-2">
                                ${selected.net}
                            </h3>

                            {/* <p className="text-sm text-gray-500 mt-2">
                                    {selected.type} • {selected.order}
                                </p> */}

                            <div className="bg-white p-2 mt-5 rounded-lg">
                                <p className="text-sm text-gray-500 text-xs flex justify-center items-center gap-1.5 text-center">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 1024 1024"><path fill="currentColor" d="M928.144 176H95.856c-53.024 0-96 42.976-96 96v480c0 53.024 42.976 96 96 96h832.288c53.024 0 96-42.976 96-96V272c0-53.024-42.976-96-96-96M95.856 240h832.288c17.664 0 32 14.336 32 32v64H63.856v-64c0-17.664 14.351-32 32-32m832.288 544H95.856c-17.664 0-32-14.336-32-32V464h896.288v288c0 17.664-14.352 32-32 32"></path></svg>
                                    </span>

                                    <span>Visa ending in 4429 · Oct 24, 12:15 PM</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 gap-3 mt-6">
                            <p className="text-xs tracking-wide text-gray-400 mb-4 font-medium">
                                PAYMENT BREAKDOWN
                            </p>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Product Price (2 items)</p>
                                    <p className="font-medium text-gray-900">$1,050.00</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Tax Collected</p>
                                    <p className="font-medium text-gray-900">$45.00</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Shipping (Express)</p>
                                    <p className="font-medium text-gray-900">$25.00</p>
                                </div>
                            </div>
                            
                        </div>

                        {/* ACTIONS */}
                        <div className="flex-1 flex flex-col justify-end gap-3 mt-6">
                            <div className="border-t border-dashed my-4"></div>
                            <div className="flex justify-between text-sm">
                                <p className="font-semibold text-gray-800">Gross Amount</p>
                                <p className="font-semibold text-gray-900">$1,120.00</p>
                            </div>
                            <div className="flex justify-between text-sm mb-4">
                                <p className="text-gray-600">Platform Fee (5%)</p>
                                <p className="font-medium text-red-500">-$56.00</p>
                            </div>
                            {/* <div className="border-t border-dashed my-4"></div> */}
                            <div className="flex gap-2 w-full mt-4">
                                <button className="flex-1 border py-3 rounded-lg flex items-center justify-center gap-1">
                                    <svg className="" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M4 20.77V3.23l1.27.962l1.346-.961l1.346.961l1.346-.961l1.346.961L12 3.231l1.346.961l1.346-.961l1.346.961l1.346-.961l1.347.961L20 3.231v17.538l-1.27-.961l-1.346.961l-1.346-.961l-1.346.961l-1.346-.961l-1.346.961l-1.346-.961l-1.346.961l-1.346-.961l-1.346.961l-1.347-.961zm2.5-4.885h11v-1h-11zm0-3.385h11v-1h-11zm0-3.384h11v-1h-11zM5 19.1h14V4.9H5zM5 4.9v14.2z"></path></svg>
                                    <span>View Receipt</span>
                                </button>
                                <button className="flex-1 bg-black text-white py-3 rounded-lg flex items-center justify-center gap-1">
                                    <svg className="" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28c-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62"></path><circle cx={9} cy={13} r={1} fill="currentColor"></circle><circle cx={15} cy={13} r={1} fill="currentColor"></circle><path fill="currentColor" d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.07 8.07 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47"></path></svg>
                                    <span>Issue Refund</span>
                                </button>
                            </div>
                        </div>
                    </>}
                </div>
            </div>
            {/* OVERLAY */}
            {selected && (
                <div
                    onClick={() => setSelected(null)}
                    className="fixed inset-0 bg-black/30 z-40"
                />
            )}
        </div>
    );
}


const transactionsData = [
    {
        id: "TXN-78219034",
        order: "#SH-4421",
        type: "Sale",
        date: "Oct 24, 2023",
        time: "14:32",
        gross: 245,
        fees: -12.25,
        net: 232.75,
        status: "completed",
    },
    {
        id: "TXN-78218992",
        order: "#SH-4420",
        type: "Sale",
        date: "Oct 24, 2023",
        time: "12:15",
        gross: 1120,
        fees: -56,
        net: 1064,
        status: "pending",
    },
    {
        id: "TXN-78218751",
        order: "#SH-4395",
        type: "Refund",
        date: "Oct 23, 2023",
        time: "18:44",
        gross: -180,
        fees: 0,
        net: -180,
        status: "completed",
    },
    {
        id: "TXN-78218567",
        order: "#SH-4380",
        type: "Sale",
        date: "Oct 23, 2023",
        time: "16:20",
        gross: 560,
        fees: -28,
        net: 532,
        status: "completed",
    },
    {
        id: "TXN-78218345",
        order: "#SH-4350",
        type: "Sale",
        date: "Oct 22, 2023",
        time: "11:05",
        gross: 320,
        fees: -16,
        net: 304,
        status: "failed",
    },
    {
        id: "TXN-78218234",
        order: "#SH-4320",
        type: "Sale",
        date: "Oct 22, 2023",
        time: "09:30",
        gross: 890,
        fees: -44.5,
        net: 845.5,
        status: "completed",
    },
];