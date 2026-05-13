import { ArrowUpRight, BadgeDollarSign, Bell, Box, CheckCircle2, Clock3, Download, PackageSearch, ShieldAlert, ShoppingBag, TrendingUp, UserPlus, Users, Wallet, } from "lucide-react";
import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

export default function AdminDashboard() {
  const [activeFilter, setActiveFilter] = useState("7");

  const data = useMemo(() => {
    return chartData[activeFilter];
  }, [activeFilter]);

  return (
    <div className=" shadow-md p-4 md:p-6">
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Admin Overview</h1>
          <p className="mt-1 text-sm sm:text-[1em] text-gray-500">Platform-wide performance and operational summary</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
            <Download size={16} />Export
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-orange-600">
            <TrendingUp size={16} />View Analytics
          </button>
        </div>
      </div>
      {/* ================================================= */}
      {/* STATS */}
      {/* ================================================= */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${item.warning ? "border-orange-200" : "border-gray-200"}`}
          >
            <div className="flex items-start justify-between">
              <div
                className={`rounded-xl p-3 ${item.warning ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-orange-500"}`}
              >{item.icon}</div>
              <div className="text-end">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.warning ? "bg-orange-500 text-white" : "bg-green-100 text-green-600"}`}
                >{item.growth}</span>
                <h2 className="mt-2 text-xl font-bold text-gray-900">{item.value}</h2>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{item.title}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
      {/* ================================================= */}
      {/* CHART */}
      {/* ================================================= */}
      <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Revenue & Orders Performance</h2>
            <p className="mt-1 text-sm text-gray-500">Comparing transactional value against order volume</p>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-gray-100 p-1">
            <button
              onClick={() => setActiveFilter("7")}
              className={`rounded-lg px-4 py-2 text-sm hover:shadow-md font-medium transition ${activeFilter === "7" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
            >7 Days</button>

            <button
              onClick={() => setActiveFilter("30")}
              className={`rounded-lg px-4 py-2 text-sm hover:shadow-md font-medium transition ${activeFilter === "30" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
            >30 Days</button>

            <button
              onClick={() => setActiveFilter("12")}
              className={`rounded-lg px-4 py-2 text-sm hover:shadow-md font-medium transition ${activeFilter === "12" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
            >12 Months</button>

          </div>
        </div>
        <div className="mt-8 h-[350px] w-full rounded-2xl border border-gray-100 bg-[#fafafa] p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e5e7eb"
              />

              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                tick={{
                  fill: "#9ca3af",
                  fontSize: 12,
                }}
              />

              <Tooltip
                cursor={{
                  fill: "rgba(249,115,22,0.08)",
                }}
                contentStyle={{
                  borderRadius: "16px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              />

              <Bar
                dataKey="revenue"
                radius={[10, 10, 0, 0]}
                fill="#f97316"
              />

              <Bar
                dataKey="orders"
                radius={[10, 10, 0, 0]}
                fill="#fdba74"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* ================================================= */}
      {/* ACTIONS + ACTIVITY */}
      {/* ================================================= */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* PENDING ACTIONS */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Clock3 className="text-orange-500" size={20} />
            <h2 className="text-xl font-bold text-gray-900">Pending Actions</h2>
          </div>
          <div className="space-y-4">
            {pendingActions.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-gray-100 p-4 text-orange-500">{item.icon}</div>
                  <div>
                    <h3 className="text-md font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
                <button className="text-sm font-semibold text-orange-500 hover:text-orange-600">Review All</button>
              </div>
            ))}
          </div>
        </div>
        {/* ACTIVITY */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Bell className="text-orange-500" size={20} />
            <h2 className="text-xl font-bold text-gray-900">Recent Platform Activity</h2>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="">
              {activity.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center transform translate-y-1">
                    <div className={`p-2 rounded-full ${item.color}`} />
                    {index !== activity.length - 1 ? (<div className=" h-full w-[2px] bg-gray-200" />) : (<div className=" h-1/2 w-[2px] bg-gray-200" />)}
                  </div>
                  <div className="pb-3">
                    <h3 className="text-md font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ================================================= */}
      {/* BOTTOM SECTION */}
      {/* ================================================= */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* TOP PERFORMANCE */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Top Performance</p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gray-100 p-4">
                  <TrendingUp size={18} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Top Brand</p>
                  <h3 className="font-bold text-gray-900">Nike</h3>
                </div>
              </div>
              <span className="text-orange-500">34% SHARE</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gray-100 p-4">
                  <PackageSearch size={18} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Top Category</p>
                  <h3 className="font-bold text-gray-900">Running</h3>
                </div>
              </div>
              <span className="text-orange-500">42% VOLUME</span>
            </div>
          </div>
        </div>
        {/* PLATFORM HEALTH */}
        <div className="xl:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Platform Health & Systems</h2>
            <ArrowUpRight className="text-gray-400" size={18} />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-1 xl:grid-cols-3 ">
            {platfromHealthData.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-[#fafafa] px-4 py-3"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-500">
                    {item.title}
                  </p>
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <h3 className="mt-4 text-md font-bold text-gray-900">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm font-light text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FLOATING ACTION BUTTON */}
      <button className="fixed bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-2xl transition hover:scale-105 hover:bg-orange-600">
        <UserPlus size={28} />
      </button>
    </div >
  );
}



const stats = [
  {
    title: "Total Revenue",
    value: "$4.2M",
    growth: "+12%",
    icon: <BadgeDollarSign size={20} />,
  },
  {
    title: "Total Orders",
    value: "124k",
    growth: "+8%",
    icon: <ShoppingBag size={20} />,
  },
  {
    title: "Active Sellers",
    value: "2,450",
    growth: "+5%",
    icon: <Box size={20} />,
  },
  {
    title: "Total Customers",
    value: "850k",
    growth: "+15%",
    icon: <Users size={20} />,
  },
  {
    title: "Pending Refunds",
    value: "42",
    growth: "ACTION",
    warning: true,
    icon: <Wallet size={20} />,
  },
  {
    title: "Commission",
    value: "$342k",
    growth: "+10%",
    icon: <BadgeDollarSign size={20} />,
  },
];

const pendingActions = [
  {
    title: "Payout Approvals",
    desc: "12 batches waiting for release",
    icon: <Wallet size={18} />,
  },
  {
    title: "Verification Requests",
    desc: "28 new seller documents submitted",
    icon: <CheckCircle2 size={18} />,
  },
  {
    title: "Flagged Products",
    desc: "5 listings flagged for policy breach",
    icon: <ShieldAlert size={18} />,
  },
];

const activity = [
  {
    title: "New High-Volume Seller Joined",
    desc: "SneakerVault Enterprises has completed onboarding.",
    time: "12 minutes ago",
    color: "bg-green-500",
  },
  {
    title: "Large Order Alert",
    desc: "Order #88219 requires manual verification.",
    time: "45 minutes ago",
    color: "bg-orange-500",
  },
  {
    title: "Moderation Status Update",
    desc: "Bulk policy update applied to products.",
    time: "2 hours ago",
    color: "bg-blue-500",
  },
];

const platfromHealthData = [
  {
    title: "Server Uptime",
    value: "99.9%",
    desc: "Healthy infrastructure",
  },
  {
    title: "API Health",
    value: "Stable",
    desc: "Avg latency: 24ms",
  },
  {
    title: "Payment Gateway",
    value: "Healthy",
    desc: "Last tx: 2s ago",
  },
]

const chartData = {
  "12": [
    { name: "Jan", revenue: 24000, orders: 1200 },
    { name: "Feb", revenue: 32000, orders: 1600 },
    { name: "Mar", revenue: 28000, orders: 1400 },
    { name: "Apr", revenue: 41000, orders: 22200 },
    { name: "May", revenue: 52000, orders: 2600 },
    { name: "Jun", revenue: 47000, orders: 2300 },
    { name: "Jul", revenue: 58000, orders: 2900 },
    { name: "Aug", revenue: 51000, orders: 2500 },
    { name: "Sep", revenue: 64000, orders: 3200 },
    { name: "Oct", revenue: 56000, orders: 2800 },
    { name: "Nov", revenue: 71000, orders: 3500 },
    { name: "Dec", revenue: 68000, orders: 3400 },
  ],

  "30": [
    { name: "1", revenue: 14000, orders: 800 },
    { name: "5", revenue: 22000, orders: 1200 },
    { name: "10", revenue: 18000, orders: 950 },
    { name: "15", revenue: 31000, orders: 1700 },
    { name: "20", revenue: 42000, orders: 2200 },
    { name: "25", revenue: 38000, orders: 2000 },
    { name: "30", revenue: 48000, orders: 2600 },
  ],

  "7": [
    { name: "Mon", revenue: 8000, orders: 420 },
    { name: "Tue", revenue: 12000, orders: 610 },
    { name: "Wed", revenue: 9500, orders: 500 },
    { name: "Thu", revenue: 15000, orders: 760 },
    { name: "Fri", revenue: 18000, orders: 920 },
    { name: "Sat", revenue: 21000, orders: 1100 },
    { name: "Sun", revenue: 17000, orders: 840 },
  ],
};