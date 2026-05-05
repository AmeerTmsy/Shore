import { useState, useEffect } from "react";
import { Camera, ChevronRight, Megaphone, TrendingUp, Truck, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion"

export default function SellerOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  const filteredOrders =
    filter === "all"
      ? ordersData
      : ordersData.filter((o) => o.status === filter);

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Order Management</h1>
          <p className="text-gray-500 text-sm">Track and manage your customer orders</p>
        </div>
        <div className="flex gap-2">
          {/*  */}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#ffffff63] border border-gray-200 shadow rounded-xl p-5 flex flex-col justify-between"
          >
            <p className="text-xs text-gray-500 uppercase tracking-wide">{item.title}</p>
            <div className="mt-2 flex items-end justify-between">
              <h2 className="text-xl font-bold">{item.value}</h2>
              {item.change && (
                <span className={`text-sm font-medium ${item.color}`}>
                  {item.change}
                </span>
              )}
              {item.sub && (
                <span className={`text-sm font-medium ${item.color}`}>
                  {item.sub}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 overflow-x-auto md:hidden">
        {["All Orders", "Pending", "Completed", "Returns", 'Check'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f.toLowerCase().split(" ")[0])}
            className={`px-4 py-2 rounded-full text-sm capitalize whitespace-nowrap transition-all duration-150 ${filter === f.toLowerCase().split(" ")[0]
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-600"
              }`}
          >{f}</button>
        ))}
      </div>

      {/* CONTENT */}
      {loading ? (
        <SkeletonList />
      ) : filteredOrders.length === 0 ? (
        <EmptyState setFilter={setFilter} />
      ) : (
        <>
          {/* DESKTOP TABLE */}
          <div className="hidden md:block bg-[#ffffff6c] shadow rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 shadow-md bg-gray-50">
              <div className="flex gap-6 text-sm font-medium">
                {["All Orders", "Pending", "Completed", "Returns", 'Check'].map((tab, i) => (
                  <button
                    key={tab}
                    onClick={() => setFilter(tab.toLowerCase().split(" ")[0])}
                    className={`pb-1 transition-all duration-150 ${filter === tab.toLowerCase().split(" ")[0]
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-500"
                      }`}
                  >{tab}</button>
                ))}
              </div>
              <div className="flex gap-2 relative">
                <button onClick={() => {
                  setShowFilters(prev => !prev)
                  console.log(showFilters)
                }} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition ${showFilters ? "bg-white shadow-lg" : "shadow-sm "}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12"><path fill="currentColor" d="M1 2.75A.75.75 0 0 1 1.75 2h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 1 2.75m2 3A.75.75 0 0 1 3.75 5h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 3 5.75M5.25 8a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"></path></svg>
                  <span>Filters</span>
                </button>
                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute top-full right-6 mt-2 w-48 bg-white border rounded-lg shadow-lg p-4 z-10"
                    >
                      <p className="text-sm font-medium mb-2">Payment Status</p>
                      <div className="flex flex-col gap-2">
                        {["Paid", "Escrow", "Refunded"].map((status) => (
                          <label key={status} className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={filter === status.toLowerCase()}
                              onChange={() => setFilter(status.toLowerCase())}
                            />
                            {status}
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm shadow-sm focus:bg-white focus:shadow-lg">Date Range</button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <div className="w-full min-w-[800px]">
                <table className="w-full text-sm">
                  <thead className="text-gray-400 text-xs uppercase tracking-wide border-b-2 border-gray-200 ">
                    <tr className="border-b">
                      <th className="text-left px-6 py-4">Order ID</th>
                      <th className="text-left">Customer</th>
                      <th className="text-left">Date</th>
                      <th className="text-left">Items</th>
                      <th className="text-left">Amount</th>
                      <th className="text-left">Status</th>
                      <th className="text-right pe-6">Payment</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredOrders.map((order, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-200 last:border-none hover:bg-gray-50 transition cursor-pointer"
                      >
                        <td className="px-2 py-0.5 pl-6 font-semibold text-orange-500">{order.id}</td>
                        <td className="px-2 py-0.5 ">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">
                              {order.customer.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div>
                              <p className="font-medium">{order.customer}</p>
                              <p className="text-xs text-gray-400">{order.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-0.5 text-gray-500">
                          {order.date.split(",")[0]}
                          <br />
                          <span className="text-xs">{order.date.split(",")[1]}</span>
                        </td>
                        <td className="px-2 py-0.5 text-gray-600">{order.items} Items</td>
                        <td className="px-2 py-0.5 font-medium">${order.amount.toFixed(2)}</td>
                        <td className="px-2 py-0.5"><StatusBadge status={order.status} /></td>
                        <td className="px-2 py-0.5 pe-6">
                          <div className="flex justify-end">
                            <PaymentBadge type={order.payment} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between px-6 py-4 text-sm text-gray-500 border-t border-gray-200 bg-gray-50">
              <p>Showing 1 to 5 of 1,284 orders</p>

              <div className="flex items-center gap-1 px-1.5 py-1 bg-indigo-50 rounded-lg">
                <button className="w-8 h-8 transition hover:shadow-lg bg-white hover:text-orange-500 rounded-md">‹</button>
                <button className="w-8 h-8 transition hover:shadow-lg focus:shadow-lg bg-white focus:text-orange-500 rounded-md">
                  1
                </button>
                <button className="w-8 h-8 transition hover:shadow-lg focus:shadow-lg bg-white focus:text-orange-500 rounded-md">2</button>
                <button className="w-8 h-8 transition hover:shadow-lg focus:shadow-lg bg-white focus:text-orange-500 rounded-md">3</button>
                <button className="w-8 h-8 transition hover:shadow-lg bg-white hover:text-orange-500 rounded-md">›</button>
              </div>
            </div>
          </div>

          {/* MOBILE CARDS */}
          <div className="grid gap-4 md:hidden">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                onClick={() => setSelectedOrder(order)}
                className=" p-4 rounded-xl border border-gray-200 shadow space-y-2"
              >
                <div className="flex justify-between">
                  <p className="font-semibold">{order.id}</p>
                  <StatusBadge status={order.status} />
                </div>
                <p className="text-sm text-gray-500">{order.customer}</p>
                <div className="flex justify-between text-sm">
                  <span>${order.amount}</span>
                  <span>{order.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-2">
            <div className="">
              <h3 className="font-semibold">Export to local</h3>
              <p className="text-sm font-light text-gray-600">Make the readable, data supperated file in your local so you can access any time.</p>
            </div>
            <div className="flex justify-end items-center">
              <div>
                <button className="border px-4 py-2 rounded-lg text-sm flex justify-center items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M5.552 20.968a2.577 2.577 0 0 1-2.5-2.73c-.012-2.153 0-4.306 0-6.459a.5.5 0 0 1 1 0c0 2.2-.032 4.4 0 6.6c.016 1.107.848 1.589 1.838 1.589h12.463A1.55 1.55 0 0 0 19.825 19a3 3 0 0 0 .1-1.061v-6.16a.5.5 0 0 1 1 0c0 2.224.085 4.465 0 6.687a2.567 2.567 0 0 1-2.67 2.5Z" strokeWidth={0.5} stroke="currentColor"></path><path fill="currentColor" d="M12.337 3.176a.46.46 0 0 0-.311-.138q-.021.002-.043-.006c-.022-.008-.027 0-.041.006a.46.46 0 0 0-.312.138L7.961 6.845a.5.5 0 0 0 .707.707l2.816-2.815v10.742a.5.5 0 0 0 1 0V4.737L15.3 7.552a.5.5 0 0 0 .707-.707Z" strokeWidth={0.5} stroke="currentColor"></path></svg>
                  <span>Export CSV</span>
                </button>
              </div>
            </div>
          </div>
          <div className="group mt-6 rounded-2xl overflow-hidden bg-linear-to-br from-[#da5b01] to-[#f78c44] text-white p-3 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* LEFT CONTENT */}
            <div className="max-w-xl space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold leading-snug">Fast-track your shipping with our new fulfillment network.</h2>
              <p className="text-white/80 text-sm md:text-base">
                Unlock lower shipping rates and faster delivery times for your customers.
                Integrate our smart logistics today.
              </p>
              <button className="bg-white text-orange-600 font-medium px-5 py-2.5 rounded-lg group-hover:scale-[1.02] hover:shadow-xl transition cursor-pointer">Learn More</button>
            </div>
            {/* RIGHT IMAGE */}
            <div className="w-full md:w-[420px] flex justify-center">
              <div className="backdrop-blur-md rounded-xl shadow-xl transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dashboard preview"
                  className="rounded-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </>
      )}

      {/* RIGHT DRAWER */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setSelectedOrder(null)}
          />

          <div className="relative w-full md:w-[420px] bg-white h-full p-6 shadow-xl overflow-y-auto animate-slide-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">{selectedOrder.id}</h2>
              <X onClick={() => setSelectedOrder(null)} />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                {selectedOrder.customer}
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Amount</p>
                <p className="text-lg font-bold">
                  ${selectedOrder.amount}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 border rounded-lg py-2">
                  Issue Refund
                </button>
                <button className="flex-1 bg-orange-500 text-white rounded-lg py-2">
                  Mark Shipped
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


/* SKELETON */
function SkeletonList() {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-xl border animate-pulse h-20"
        />
      ))}
    </div>
  );
}

/* EMPTY STATE */
function EmptyState({ setFilter }) {
  return (
    <div className=" border-2 border-gray-200 shadow-md rounded-2xl p-6 md:p-10 text-center">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-200 rounded-full flex items-center justify-center">
            <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5 5.5h14a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5M4 9.232A2 2 0 0 1 3 7.5V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.5a2 2 0 0 1-1 1.732V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm1.5.268V18a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V9.5z" clipRule="evenodd" strokeWidth={0.8} stroke="currentColor"></path></svg>
          </div>
          <div className="absolute bottom-1 right-1 w-8 h-8 bg-white border rounded-full flex items-center justify-center shadow">
            <span className="text-orange-400 text-sm">✕</span>
          </div>
        </div>
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">No orders found</h2>
      <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
        Your order queue is currently empty. Reach more customers and drive
        sales by boosting your listings or promoting your storefront.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium shadow hover:scale-[1.02] transition">
          <Megaphone size={18} />Promote Store
        </button>
        <button className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition">View Marketing Tips</button>
        <button onClick={() => setFilter('all')} className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><g clipPath="url(#SVGXv8lpc2Y)"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M19.729 10.929A8.003 8.003 0 0 1 8.5 20.197M18.363 8.05l-.707-.707A8 8 0 0 0 5.754 18m12.61-9.95h-4.243m4.243 0V3.809"></path></g><defs><clipPath id="SVGXv8lpc2Y"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></g></svg>
        </button>
      </div>
      <div className="my-8 border-t border-gray-300" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <TrendingUp size={18} className="text-gray-600" />
          </div>
          <div>
            <p className="text-sm font-semibold">VISIBILITY</p>
            <p className="text-xs text-gray-500">Boosted items get 3x more clicks.</p>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <Truck size={18} className="text-gray-600" />
          </div>
          <div>
            <p className="text-sm font-semibold">SHIPPING</p>
            <p className="text-xs text-gray-500">Offer free shipping to convert.</p>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <Camera size={18} className="text-gray-600" />
          </div>
          <div>
            <p className="text-sm font-semibold">QUALITY</p>
            <p className="text-xs text-gray-500">Update photos for 40% higher ROI.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentBadge({ type }) {
  const styles = {
    paid: "text-green-600",
    escrow: "text-orange-500",
    refunded: "text-red-500",
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={`font-medium capitalize ${styles[type]}`}>
        {type}
      </span>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    processing: "bg-blue-100 text-blue-600",
    shipped: "bg-green-100 text-green-600",
    completed: "bg-gray-200 text-gray-700",
    pending: "bg-orange-100 text-orange-600",
    returned: "bg-red-100 text-red-600",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${styles[status]}`}>
      {status}
    </span>
  );
}




const ordersData = [
  {
    id: "#ORD-92831",
    customer: "John Dorsey",
    email: "j.dorsey@email.com",
    amount: 245,
    items: 2,
    status: "processing",
    payment: "paid",
    date: "Oct 24, 2023",
  },
  {
    id: "#ORD-92830",
    customer: "Maria Lopez",
    email: "m.lopez@email.com",
    amount: 120,
    items: 1,
    status: "completed",
    payment: "paid",
    date: "Oct 23, 2023",
  },
  {
    id: "#ORD-92829",
    customer: "Bruce Hunt",
    email: "bhunt@email.com",
    amount: 89,
    items: 1,
    status: "pending",
    payment: "escrow",
    date: "Oct 22, 2023",
  },
  {
    id: "#ORD-92828",
    customer: "Sophia Lee",
    email: "s.lee@email.com",
    amount: 199,
    items: 1,
    status: "returns",
    payment: "refunded",
    date: "Oct 21, 2023",
  },
  {
    id: "#ORD-92827",
    customer: "David Kim",
    email: "d.kim@email.com",
    amount: 345,
    items: 3,
    status: "completed",
    payment: "paid",
    date: "Oct 20, 2023",
  },
  {
    id: "#ORD-92826",
    customer: "Emily Chen",
    email: "e.chen@email.com",
    amount: 150,
    items: 2,
    status: "pending",
    payment: "escrow",
    date: "Oct 19, 2023",
  },
];

const stats = [
  {
    title: "Total Orders",
    value: "1,284",
    change: "+12%",
    color: "text-green-600",
  },
  {
    title: "Pending Orders",
    value: "42",
    sub: "Needs Action",
    color: "text-orange-500",
  },
  {
    title: "Total Revenue",
    value: "$142,500",
    change: "+8.4%",
    color: "text-green-600",
  },
  {
    title: "Avg. Fulfillment",
    value: "1.2 Days",
    sub: "Fast",
    color: "text-green-600",
  },
];