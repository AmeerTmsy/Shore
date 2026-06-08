import { useState } from "react";

import { AlertTriangle, ArrowDownToLine, BadgeDollarSign, CheckCircle2, ChevronDown, Eye, Filter, MoreVertical, RefreshCcw, Search, ShieldAlert, Wallet, X, XCircle, } from "lucide-react";

export default function RefundRequests() {
  const [selectedRefund, setSelectedRefund] = useState(null);

  const statusBadge = (status) => {
    if (status === "Pending") {
      return "bg-orange-100 text-orange-700";
    }
    if (status === "Approved") {
      return "bg-green-100 text-green-700";
    }
    return "bg-red-100 text-red-700";
  };

  const riskBadge = (risk) => {
    if (risk === "High Risk") {
      return "bg-red-100 text-red-700";
    }
    if (risk === "Medium Risk") {
      return "bg-indigo-100 text-indigo-700";
    }
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f8fa]">
      <div className="p-4 md:p-6">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Refund Requests
            </h1>

            <p className="mt-1 text-sm sm:text-[1em] text-gray-500">
              Manage and audit customer refund applications and
              fraud alerts.
            </p>
          </div>

          {/* ACTIONS */}

          {/* <div className="hidden items-center gap-3 md:flex">
            <button className="flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-6 py-4 text-sm font-semibold text-gray-700 transition hover:bg-orange-50">
              <RefreshCcw size={18} />
              Refresh
            </button>

            <button className="flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-6 py-4 text-sm font-semibold text-gray-700 transition hover:bg-orange-50">
              <ArrowDownToLine size={18} />
              Export CSV
            </button>

            <button className="flex items-center gap-2 rounded-2xl bg-orange-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-orange-800">
              <Filter size={18} />
              Advanced Filter
            </button>
          </div> */}
        </div>

        {/* ================================================= */}
        {/* MOBILE FLOATING BUTTON */}
        {/* ================================================= */}

        {/* <button className="fixed right-5 top-5 z-30 flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500 text-white shadow-xl md:hidden">
          <Filter size={32} />
        </button> */}
        {/* ================================================= */}
        {/* MAIN GRID */}
        {/* ================================================= */}

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
          {/* ================================================= */}
          {/* LEFT */}
          {/* ================================================= */}

          <div>
            {/* ================================================= */}
            {/* STATS */}
            {/* ================================================= */}
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-orange-100 bg-white p-4 shadow"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}
                    >
                      {item.icon}
                    </div>

                    <div className='text-right'>
                      <div>
                        <span
                          className={`rounded-md px-3 py-0.5 text-xs font-semibold ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <div className="mt-6">
                        <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900">
                          {item.value}
                        </h2>
                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FILTER BAR */}
            <div className="rounded-2xl border border-orange-100 bg-white p-2 shadow-sm">
              {/* <div className="items-center gap-5 flex flex-wrap">
                <div className="relative flex-1 min-w-[300px]">
                  <Search
                    size={22}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Refund ID or Order ID..."
                    className="h-10 w-full rounded-lg border border-orange-100 bg-white pl-14 pr-4 text-sm outline-none transition focus:border-orange-300"
                  />
                </div>
                {[
                  "Status: All",
                  "Payment: All",
                  "Risk: High Only",
                ].map((item, index) => (
                  <button
                    key={index}
                    className="flex h-10 text-nowrap items-center gap-3 rounded-lg border border-orange-100 px-6 text-sm text-gray-700 transition hover:bg-orange-50"
                  >
                    {item}
                    <ChevronDown size={18} />
                  </button>
                ))}

                <button className="flex h-10 text-nowrap items-center gap-3 rounded-full bg-gray-100 px-6 text-sm font-medium text-gray-700">
                  Last 30 Days
                </button>

              </div> */}

              {/* MOBILE */}

              <div className="space-y-1.5">
                <div className="relative">
                  <Search
                    size={22}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-700"
                  />

                  <input
                    type="text"
                    placeholder="Search by ID, Customer or Order..."
                    className="h-10 w-full rounded-2xl border border-orange-100 bg-white pl-14 pr-4 text-sm outline-none"
                  />
                </div>
                <div className="flex flex-wrap gap-3 overflow-x-auto pb-2">
                  <button className="flex items-center gap-2 whitespace-nowrap rounded-full border border-orange-200 bg-white px-5 py-2 text-sm text-gray-700">
                    <Filter size={18} />
                    Filters
                  </button>
                  <button className="whitespace-nowrap rounded-full bg-indigo-100 px-5 py-2 text-sm text-gray-700">
                    Status: Pending ✕
                  </button>
                  <button className="whitespace-nowrap rounded-full border border-orange-200 bg-white px-5 py-2 text-sm text-gray-700">
                    High Risk
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-500 px-2">
                    128 Results
                  </p>
                  <button className="flex items-center gap-2 font-medium text-gray-500">
                    Sort by: Date
                    <ChevronDown size={18} />
                  </button>
                </div>
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
                      "REFUND ID",
                      "CUSTOMER & ORDER",
                      "PRODUCT",
                      "AMOUNT",
                      "STATUS",
                      "RISK",
                      // "ACTIONS",
                    ].map((item) => (
                      <th
                        key={item}
                        className="px-6 py-6 text-left text-sm font-bold uppercase tracking-wide text-gray-500"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {refunds.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => setSelectedRefund(item)}
                      className={`border-b border-orange-50 transition hover:bg-orange-50/40
                        
                        ${item.danger
                          ? "border-l-4 border-l-red-600"
                          : ""
                        }
                        
                        `}
                    >
                      {/* ID */}

                      <td className="px-6 py-3">
                        <h3 className="text-gray-900">
                          {item.id}
                        </h3>

                        <p className="mt-2 text-gray-500">
                          ID: 881273
                        </p>
                      </td>

                      {/* CUSTOMER */}

                      <td className="px-6 py-8">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-lg font-semibold text-orange-700">
                            JB
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {item.customer}
                            </h3>

                            <p className="text-sm text-gray-500">
                              Ord: {item.orderId}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* PRODUCT */}

                      <td className="px-6 py-8">
                        <h3 className="font-semibold text-gray-900">
                          {item.product}
                        </h3>

                        <p className="text-sm text-gray-500">
                          Seller: {item.seller}
                        </p>
                      </td>

                      {/* AMOUNT */}

                      <td className="px-6 py-8">
                        <h3 className="text-lg font-bold text-gray-900">
                          {item.amount}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {item.paymentMethod}
                        </p>
                      </td>

                      {/* STATUS */}

                      <td className="px-6 py-8">
                        <span
                          className={`rounded-full px-4 py-0.5 text-xs font-semibold uppercase tracking-wide ${statusBadge(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </td>

                      {/* RISK */}

                      <td className="px-6 py-8">
                        {item.risk === "Low Risk" ? (
                          <CheckCircle2
                            className="text-gray-300"
                            size={22}
                          />
                        ) : (
                          <AlertTriangle
                            className="text-red-600"
                            size={22}
                          />
                        )}
                      </td>

                      {/* ACTIONS */}

                      {/* <td className="px-6 py-8">
                        <button
                          onClick={() => setSelectedRefund(item)}
                          className="rounded-xl p-3 text-gray-500 transition hover:bg-orange-100 hover:text-orange-700"
                        >
                          <Eye size={24} />
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* PAGINATION */}

              <div className="flex items-center justify-between border-t border-orange-100 p-6">
                <p className="text-sm font-semibold text-gray-500">
                  Showing 1 to 3 of 1,284 entries
                </p>

                <div className="flex items-center gap-2">
                  <button className="rounded-lg border border-orange-100 px-6 py-2 text-sm font-semibold text-gray-400">
                    Previous
                  </button>

                  {[1, 2].map((page) => (
                    <button
                      key={page}
                      className={`flex py-2 w-10 items-center justify-center rounded-lg text-sm font-semibold
                        ${page === 1
                          ? "bg-orange-700 text-white"
                          : "border border-orange-100 bg-white text-gray-700"
                        }
                        
                        `}
                    >
                      {page}
                    </button>
                  ))}

                  <button className="rounded-lg border border-orange-100 px-6 py-2 text-sm font-semibold text-gray-700">
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* MOBILE CARDS */}
            {/* ================================================= */}

            <div className="mt-6 space-y-5 xl:hidden">
              {refunds.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm"
                >
                  {/* TOP */}

                  <div >
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-gray-400">
                        #REF-8842-VV
                      </p>
                      <span
                        className={`rounded-full px-4 py-0.5 text-nowrap text-xs font-semibold ${riskBadge(
                          item.risk
                        )}`}
                      >
                        {item.risk}
                      </span>
                    </div>
                    <h3 className="mt-2 max-w-[220px] font-semibold leading-tight text-gray-900">
                      {item.product}
                    </h3>
                  </div>

                  {/* INFO */}

                  <div className="mt-4 border-y border-gray-100 py-5">
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                        👤
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="text-gray-500">
                          Customer
                        </p>

                        <h4 className="font-semibold text-gray-900">
                          {item.customer}
                        </h4>
                      </div>
                      <div>
                        <p className="text-base text-gray-500">
                          Seller
                        </p>

                        <h4 className="font-semibold text-gray-900">
                          {item.seller}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM */}

                  <div className="mt-5">
                    <div className="flex justify-between items-start gap-4 w-full">
                      <div>
                        <p className="text-gray-500">
                          Refund Amount
                        </p>
                        <div className="flex gap-2 items-center">
                          <h3 className="font-bold text-orange-700">
                            {item.amount}
                          </h3>
                          <div>
                            <span
                              className={`rounded-full px-2 py-0.5 text-xs font-semibold ${statusBadge(
                                item.status
                              )}`}
                            >
                              {item.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedRefund(item)}
                        className="flex h-10 w-10 items-center justify-center rounded-2xl  text-gray-700"
                      >
                        <MoreVertical size={22} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between gap-4 w-full mt-2">


                    </div>
                  </div>
                </div>
              ))}

              {/* MOBILE INSIGHTS */}

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <ShieldAlert
                    className="text-orange-700"
                    size={22}
                  />

                  <h2 className="text-xl font-bold text-gray-900">
                    Refund Insights
                  </h2>
                </div>

                {/* CARDS */}

                <div className="rounded-3xl border border-orange-100 bg-white p-6">
                  <p className="text-5xl font-bold text-gray-900">
                    +12%
                  </p>

                  <p className="mt-6 text-xl text-gray-600">
                    Weekly growth trend for pending requests.
                  </p>
                </div>

                <div className="rounded-3xl border border-orange-100 bg-white p-6">
                  <h3 className="text-6xl font-bold text-orange-700">
                    $12.4k
                  </h3>

                  <p className="mt-6 text-xl text-gray-600">
                    Potential losses blocked by fraud detection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDEBAR */}
          {/* ================================================= */}

          <div className="hidden space-y-6 xl:block">

            {/* INSIGHT CARD */}
            <div className="hidden rounded-3xl border border-orange-100 bg-white p-6 shadow-sm xl:block">
              <div className="flex items-center gap-3">
                <ShieldAlert
                  className="text-orange-700"
                  size={22}
                />

                <h2 className="text-xl font-bold text-gray-900">
                  Refund Insights
                </h2>
              </div>

              <div className="mt-5 space-y-6">
                {[
                  {
                    label: "Size/Fit Mismatch",
                    value: "42%",
                  },

                  {
                    label: "Defective/Damaged",
                    value: "28%",
                  },

                  {
                    label: "Arrived Too Late",
                    value: "15%",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="mb-2 flex justify-between text-sm font-semibold text-gray-700">
                      <span>{item.label}</span>

                      <span>{item.value}</span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full w-[42%] rounded-full bg-orange-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ALERT */}

            <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
                Abuse Alerts
              </p>

              <div className="mt-5 flex gap-4">
                <h3 className="text-2xl font-bold text-orange-700">
                  12
                </h3>

                <p className="leading-relaxed text-gray-700">
                  High-frequency returners flagged in the last 24h.
                </p>
              </div>
            </div>

            {/* PROMO */}

            <div className="overflow-hidden rounded-3xl bg-[#1f2937] p-8 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <ShieldAlert
                  className="text-orange-500"
                  size={24}
                />

                <h2 className="text-xl font-bold">
                  Fraud Detection AI
                </h2>
              </div>

              <p className="mt-4 leading-relaxed text-gray-300">
                Our proprietary AI model is currently monitoring all
                return patterns in real-time.
              </p>

              <div className="mt-4 border-t border-gray-700 pt-6">
                <p className="text-gray-400">
                  Success Rate{" "}
                  <span className="font-semibold text-orange-400">
                    99.4% Accurate
                  </span>
                </p>
              </div>

              <button className="mt-4 w-full rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
                View Security Log
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
          onClick={() => setSelectedRefund(null)}
          className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300
              
              ${selectedRefund
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
            }
              
              `}
        />

        {/* DRAWER */}

        <div
          className={`fixed right-0 top-0 z-50 flex h-screen w-full flex-col overflow-hidden border-l border-gray-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out will-change-transform md:w-[720px]
              
              ${selectedRefund
              ? "translate-x-0"
              : "translate-x-full"
            }
              
              `}
        >
          {/* HEADER */}

          <div className="border-b border-gray-100 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-4xl font-bold text-gray-900">
                    Refund #RF-88294
                  </h2>

                  <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold uppercase tracking-wide text-orange-700">
                    Pending Review
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-6 text-lg text-gray-500">
                  <p>Reviewer: Sarah J. Miller</p>

                  <p>Requested: Oct 24, 2023</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedRefund(null)}
                className="rounded-2xl p-3 transition hover:bg-gray-100"
              >
                <X size={28} />
              </button>
            </div>
          </div>

          {/* BODY */}

          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-8">
              {/* RISK */}

              <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
                <div className="flex items-center gap-3">
                  <AlertTriangle
                    className="text-red-600"
                    size={26}
                  />

                  <h3 className="text-3xl font-bold text-red-700">
                    Risk Analysis
                  </h3>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-red-200 bg-white p-5">
                    <p className="text-sm font-bold uppercase tracking-wide text-gray-400">
                      Refunder Frequency
                    </p>

                    <h4 className="mt-3 text-3xl font-bold text-red-700">
                      High (4 returns/30d)
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-red-200 bg-white p-5">
                    <p className="text-sm font-bold uppercase tracking-wide text-gray-400">
                      Pattern Match
                    </p>

                    <h4 className="mt-3 text-3xl font-bold text-gray-900">
                      No suspicious proxy
                    </h4>
                  </div>
                </div>

                <p className="mt-6 text-lg leading-relaxed text-red-700">
                  Note: User has returned 3 similar high-value items
                  in the last month. Recommendation: Manual
                  inspection of evidence.
                </p>
              </div>

              {/* USER GRID */}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* CUSTOMER */}

                <div>
                  <p className="border-b border-gray-100 pb-4 text-sm font-bold uppercase tracking-wide text-gray-400">
                    Customer Info
                  </p>

                  <div className="mt-5 flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gray-200" />

                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        Liam Henderson
                      </h3>

                      <p className="mt-1 text-lg text-gray-500">
                        Platinum Member
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-lg text-gray-700">
                    <p>Email: l.henderson@mail.com</p>

                    <p>
                      Reputation:{" "}
                      <span className="font-bold text-orange-700">
                        98/100
                      </span>
                    </p>
                  </div>
                </div>

                {/* SELLER */}

                <div>
                  <p className="border-b border-gray-100 pb-4 text-sm font-bold uppercase tracking-wide text-gray-400">
                    Seller Info
                  </p>

                  <div className="mt-5 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-xl font-bold text-orange-700">
                      SV
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        Sole Vault NYC
                      </h3>

                      <p className="mt-1 text-lg text-gray-500">
                        Level 5 Power Seller
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-lg text-gray-700">
                    <p>Rating: ⭐ 4.9 (12.4k sales)</p>
                  </div>
                </div>
              </div>

              {/* PRODUCT */}

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-gray-400">
                  Product Details
                </p>

                <div className="mt-5 rounded-3xl border border-gray-100 p-5">
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex h-44 w-full items-center justify-center rounded-2xl border border-orange-100 bg-gray-50 sm:w-44">
                      👟
                    </div>

                    <div className="flex-1">
                      <h3 className="text-4xl font-bold text-gray-900">
                        Velocity Carbon Apex v2
                      </h3>

                      <p className="mt-4 text-xl text-gray-500">
                        SKU: VV-CARB-092-OR
                      </p>

                      <p className="mt-2 text-xl text-gray-500">
                        Size: 11 US / 45 EU
                      </p>

                      <h4 className="mt-6 text-5xl font-bold text-orange-700">
                        $345.00
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* PAYMENT */}

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-gray-400">
                  Payment & Refund Amount
                </p>

                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "Method",
                      value: "Visa •••• 4429",
                    },

                    {
                      title: "Trans ID",
                      value: "TR-99021831",
                    },

                    {
                      title: "Requested Refund",
                      value: "$345.00",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-orange-100 p-5"
                    >
                      <p className="text-sm font-bold uppercase tracking-wide text-gray-400">
                        {item.title}
                      </p>

                      <h3 className="mt-4 text-3xl font-bold text-gray-900">
                        {item.value}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}

          <div className="border-t border-gray-100 bg-white p-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex-1 rounded-2xl bg-red-50 px-6 py-5 text-xl font-bold text-red-600 transition hover:bg-red-100">
                Reject Refund
              </button>

              <button className="flex-1 rounded-2xl bg-gray-100 px-6 py-5 text-xl font-bold text-gray-700 transition hover:bg-gray-200">
                Escalate
              </button>

              <button className="flex-1 rounded-2xl bg-orange-500 px-6 py-5 text-xl font-bold text-white transition hover:bg-orange-600">
                Approve Refund
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}





const refunds = [
  {
    id: "RF-9821",
    customer: "Jordan Belfort",
    seller: "Kickz Store",
    product: "Velocity Air Max X",
    amount: "$420.00",
    paymentMethod: "Crypto",
    status: "Pending",
    risk: "High Risk",
    orderId: "#VV-10029",
    danger: true,
  },

  {
    id: "RF-9820",
    customer: "Elena Rodriguez",
    seller: "Nike Official",
    product: "Neo-Runner Pro",
    amount: "$185.00",
    paymentMethod: "Visa",
    status: "Approved",
    risk: "Low Risk",
    orderId: "#VV-10044",
  },

  {
    id: "RF-9819",
    customer: "Thomas Miller",
    seller: "Shoe Empire",
    product: "Classic Canvas High",
    amount: "$85.99",
    paymentMethod: "Mastercard",
    status: "Rejected",
    risk: "Medium Risk",
    orderId: "#VV-09941",
  },
];

const stats = [
  {
    title: "Total Requests",
    value: "1,284",
    icon: <Wallet size={22} />,
    color: "text-gray-700",
    bg: "bg-gray-100",
    badge: "+12.4%",
    badgeColor: "bg-green-100 text-green-700",
  },

  {
    title: "Pending Review",
    value: "42",
    icon: <AlertTriangle size={22} />,
    color: "text-orange-600",
    bg: "bg-orange-100",
    badge: "Critical",
    badgeColor: "bg-orange-100 text-orange-700",
  },

  {
    title: "Refunded Amount",
    value: "$24,902.50",
    icon: <BadgeDollarSign size={22} />,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
    badge: "YTD",
    badgeColor: "bg-gray-100 text-gray-700",
  },
];