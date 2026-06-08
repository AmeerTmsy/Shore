import { useState } from "react";
import {
  AlertTriangle,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Package,
  RefreshCcw,
  Search,
  Truck,
  Upload,
  X,
  ShieldAlert,
  MapPinned,
  Sparkles,
  CircleAlert,
  CircleDashed,
  ArrowUpRight,
  MailWarning,
} from "lucide-react";

const stats = [
  {
    title: "TOTAL ISSUES",
    value: "1,284",
    icon: AlertTriangle,
    trend: "+12%",
    trendColor: "text-red-500",
  },
  {
    title: "DELAYED",
    value: "842",
    icon: Clock3,
    trend: "0%",
    trendColor: "text-gray-400",
  },
  {
    title: "LOST",
    value: "24",
    icon: Package,
    trend: "+3%",
    trendColor: "text-red-500",
  },
  {
    title: "FAILED",
    value: "116",
    icon: CircleAlert,
    trend: "-5%",
    trendColor: "text-orange-500",
  },
  {
    title: "ESCALATIONS",
    value: "302",
    icon: ShieldAlert,
    trend: "+8%",
    trendColor: "text-red-500",
  },
  {
    title: "AVG DELAY",
    value: "4.2d",
    icon: CircleDashed,
    trend: "-2h",
    trendColor: "text-orange-500",
  },
];

const shippingIssues = [
  {
    id: "#VV-SH-9021",
    customer: "Julian Dasher",
    initials: "JD",
    carrier: "FedEx",
    issue: "Lost",
    status: "Investigating",
    delay: "7 days",
    severity: "critical",
  },
  {
    id: "#VV-SH-9018",
    customer: "Aria Sterling",
    initials: "AS",
    carrier: "UPS",
    issue: "Delay",
    status: "Pending",
    delay: "2 days",
    severity: "warning",
  },
  {
    id: "#VV-SH-8995",
    customer: "Marcus Knight",
    initials: "MK",
    carrier: "DHL",
    issue: "Failed Delivery",
    status: "Out for Redelivery",
    delay: "--",
    severity: "medium",
  },
  {
    id: "#VV-SH-8842",
    customer: "Elena Luna",
    initials: "EL",
    carrier: "FedEx",
    issue: "Delay",
    status: "Resolved",
    delay: "4 days",
    severity: "safe",
  },
];

const mobileCards = [
  {
    id: "#VV-892410-SH",
    title: "Lost in Transit",
    badge: "CRITICAL",
    carrier: "FEDEX GLOBAL",
    description: "Last scanned: 2 days ago",
    action: "RESOLVE",
    icon: Truck,
  },
  {
    id: "#VV-772154-SH",
    title: "Severe Weather Delay",
    badge: "WARNING",
    carrier: "DHL EXPRESS",
    description: "Est. Delivery: Dec 14",
    action: "NOTIFY",
    icon: Truck,
  },
  {
    id: "#VV-550198-SH",
    title: "Incorrect Address",
    badge: "ACTION NEEDED",
    carrier: "USPS PRIORITY",
    description: "Returned to hub",
    action: "EDIT INFO",
    icon: MailWarning,
  },
];

export default function ShippingIssuesPage() {
  const [selectedIssue, setSelectedIssue] = useState(null);

  return (
    <div className="min-h-screen bg-[#f8f8f8] p-4 lg:p-6">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Shipping Issues
            </h1>

            <p className="mt-1 text-sm sm:text-[1em] text-gray-500">
              Monitor and resolve real-time logistics exceptions.
            </p>
          </div>

          {/* <div className="hidden items-center gap-3 md:flex">
            <button className="flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-6 py-4 font-medium text-gray-600 transition hover:bg-orange-50">
              <Upload size={20} />
              Export CSV
            </button>

            <button className="flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-6 py-4 font-medium text-gray-600 transition hover:bg-orange-50">
              <RefreshCcw size={20} />
              Refresh
            </button>

            <button className="flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 font-medium text-white transition hover:bg-orange-600">
              <ChevronDown size={20} />
              Advanced Filter
            </button>
          </div> */}

          {/* Mobile Actions */}
          {/* <div className="flex items-center justify-end gap-3 md:hidden">
            <button className="rounded-xl bg-white p-3 shadow-sm">
              <Search />
            </button>

            <button className="rounded-xl bg-white p-3 shadow-sm">
              <ChevronDown />
            </button>
          </div> */}
        </div>

        {/* Desktop Stats */}
        <div className="mt-8 hidden grid-cols-2 gap-5 md:grid lg:grid-cols-3">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-orange-200 bg-white p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-2xl bg-gray-100 p-4">
                    <Icon className="text-orange-700" size={20} />
                  </div>

                  <div className="text-end">
                    <span className={`text-lg font-semibold ${item.trendColor}`}>
                      {item.trend}
                    </span>
                    <div className="mt-2">
                      <p className="text-sm font-semibold tracking-wide text-gray-500">
                        {item.title}
                      </p>

                      <h2 className="text-xl font-bold text-gray-900">
                        {item.value}
                      </h2>
                    </div>
                  </div>
                </div>


              </div>
            );
          })}
        </div>

        {/* Mobile Stats */}
        <div className="mt-8 flex gap-4 overflow-x-auto md:hidden">
          {stats.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] rounded-[28px] border border-orange-200 bg-white p-6"
            >
              <p className="text-2xl tracking-wide text-gray-500">
                {item.title}
              </p>

              <h2 className="mt-4 text-6xl font-bold">{item.value}</h2>

              <p className={`mt-4 text-xl font-medium ${item.trendColor}`}>
                {item.trend} vs last week
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-4">
          {/* Left */}
          <div className="col-span-3">
            {/* Desktop Filters */}
            <div className="hidden rounded-2xl border border-orange-200 bg-white p-5 md:block">
              <div className="flex flex-wrap gap-4 ">
                <div className="flex h-10 flex-1 items-center gap-3 rounded-lg border border-orange-200 px-5">
                  <Search className="text-gray-400" />
                  <input
                    placeholder="Search ID..."
                    className="w-full bg-transparent outline-none text-sm"
                  />
                </div>

                {["All Carriers", "Issue Type", "Status"].map((item) => (
                  <button
                    key={item}
                    className="flex h-10 items-center gap-2 rounded-lg border border-orange-200 bg-white px-6 text-sm font-medium text-gray-700"
                  >
                    {item}
                    <ChevronDown size={18} />
                  </button>
                ))}

                <button className="flex h-10 items-center gap-2 rounded-lg border border-orange-200 bg-white px-6 text-sm font-medium text-gray-700">
                  <Calendar size={20} />
                  Last 30 Days
                </button>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="mt-6 hidden overflow-hidden rounded-[30px] border border-orange-200 bg-white md:block">
              <div className="overflow-x-auto">
                <div className="w-full min-w-[900px]">
                  <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_0.5fr] border-b border-orange-100 bg-gray-50 px-8 py-6 font-semibold uppercase tracking-wide text-gray-500">
                    <p>Shipment ID</p>
                    <p>Customer</p>
                    <p>Carrier</p>
                    <p>Issue Type</p>
                    <p>Status</p>
                    <p>Delay</p>
                  </div>

                  {shippingIssues.map((issue, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedIssue(issue)}
                      className="grid cursor-pointer grid-cols-[1fr_1fr_1fr_1fr_1fr_0.5fr] items-center border-b border-orange-100 px-8 py-3 transition hover:bg-orange-50/40"
                    >
                      <div className=" text-orange-700 px-1">{issue.id}</div>

                      <div className="flex items-center gap-4 px-1">
                        <div>
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
                            {issue.initials}
                          </div>
                        </div>

                        <p className="font-medium text-gray-800">
                          {issue.customer}
                        </p>
                      </div>

                      <p className="text-gray-700 px-1">{issue.carrier}</p>

                      <div className="px-1">
                        <span
                          className={`font-semibold ${issue.severity === "critical"
                            ? "text-red-600"
                            : "text-gray-700"
                            }`}
                        >
                          {issue.issue}
                        </span>
                      </div>

                      <div className="px-1">
                        <span className="rounded-full bg-gray-200 px-3 text-nowrap py-0.5 text-sm font-semibold text-gray-600">
                          {issue.status}
                        </span>
                      </div>

                      <p className="text-gray-700 px-1">{issue.delay}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between px-8 py-6">
                <p className="text-gray-500">
                  Showing 4 of 1,284 entries
                </p>

                <div className="flex items-center gap-3">
                  <button className="rounded-xl border border-orange-200 p-2">
                    <ChevronLeft />
                  </button>

                  <button className="rounded-xl bg-orange-700 w-10 h-10 font-semibold text-white">
                    1
                  </button>

                  <button className="w-10 h-10 font-medium text-gray-500 hover:bg-orange-100 rounded-xl">
                    2
                  </button>

                  <button className="w-10 h-10 font-medium text-gray-500 hover:bg-orange-100 rounded-xl">
                    3
                  </button>

                  <button className="rounded-xl border border-orange-200 p-2">
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="mt-8 md:hidden">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-4xl font-bold text-gray-900">
                  Pending Shipment Reports
                </h2>

                <button className="rounded-full bg-[#dfe4f2] px-5 py-3 text-lg font-medium text-gray-600">
                  Showing All
                </button>
              </div>

              <div className="space-y-6">
                {mobileCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-[32px] border border-orange-200 bg-white overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-2xl text-gray-500">{card.id}</p>

                            <h2 className="mt-3 text-5xl font-bold leading-tight">
                              {card.title}
                            </h2>
                          </div>

                          <span className="rounded-full bg-orange-100 px-5 py-3 text-lg font-semibold text-orange-800">
                            {card.badge}
                          </span>
                        </div>
                      </div>

                      <div className="border-t border-orange-100 p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-5">
                            <div className="rounded-2xl bg-gray-100 p-5">
                              <Icon
                                size={32}
                                className="text-orange-700"
                              />
                            </div>

                            <div>
                              <h3 className="text-4xl font-bold">
                                {card.carrier}
                              </h3>

                              <p className="mt-2 text-2xl text-gray-500">
                                {card.description}
                              </p>
                            </div>
                          </div>

                          <button className="rounded-full border-2 border-orange-700 px-7 py-4 text-2xl font-bold text-orange-700">
                            {card.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Insights */}
              <div className="mt-14">
                <h2 className="text-5xl font-bold text-gray-900">
                  Operational Insights
                </h2>

                <div className="mt-6 rounded-[32px] border border-orange-200 bg-white p-6">
                  <div className="aspect-video overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h3 className="mt-6 text-4xl font-semibold">
                    Weekly Trend Analysis
                  </h3>

                  <p className="mt-4 text-2xl leading-relaxed text-gray-500">
                    Shipment issues have decreased by 14% this week following
                    the new routing protocol implementation.
                  </p>
                </div>

                <div className="mt-6 rounded-[32px] bg-orange-500 p-8 text-white">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-400">
                    <Sparkles size={36} />
                  </div>

                  <h3 className="mt-8 text-5xl font-bold leading-tight">
                    Optimize Resolutions with Velocity AI
                  </h3>

                  <p className="mt-6 text-2xl leading-relaxed text-orange-50">
                    Leverage predictive models to resolve delays before they
                    impact your customer experience ratings.
                  </p>

                  <button className="mt-8 rounded-full bg-white px-10 py-5 text-2xl font-bold text-orange-600">
                    ACTIVATE PREDICTIONS
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-[#23272f] p-6 text-white">
              <div className="flex">
                <p className="flex items-center gap-3 font-semibold uppercase tracking-wide text-orange-200 bg-gray-600 px-2 rounded-md ">
                  <Sparkles size={18} />
                  Predictive Analytics
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight">
                Shipment Intelligence AI
              </h2>

              <p className="mt-2 leading-relaxed text-gray-300">
                Anticipate delivery failures before they happen with our new
                machine learning engine.
              </p>

              <div className="flex justify-end">
                <button className="mt-10 rounded-2xl bg-orange-500 px-6 py-3 text-xl font-semibold text-white transition hover:bg-orange-600">
                  Upgrade to Enterprise
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden space-y-6 xl:block col-span-1">
            <div className="rounded-2xl border border-orange-200 bg-white p-6">
              <h2 className="text-xl font-bold text-gray-900">
                Carrier Reliability
              </h2>

              <div className="mt-8 space-y-7">
                {[
                  { name: "FedEx", value: "94.2%" },
                  { name: "UPS", value: "91.8%" },
                  { name: "DHL Global", value: "88.5%" },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">
                        {item.name}
                      </span>

                      <span className="text-gray-500">
                        {item.value} Success
                      </span>
                    </div>

                    <div className="mt-1 h-2 overflow-hidden rounded-full bg-gray-200">
                      <div style={{ width: item.value }} className="h-full rounded-full bg-orange-700" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-white p-6">
              <h2 className="text-xl font-bold">Delay Heatmap</h2>

              <p className="mt-2 text-gray-500">
                Peak congestion zones
              </p>

              <div className="mt-6 overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
                  alt=""
                  className="h-[200px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 flex justify-end bg-black/30 transition-opacity duration-300 ${selectedIssue
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      >
        <div
          className={`h-full w-full overflow-y-auto bg-[#fafafa] shadow-2xl transition-transform duration-300 ease-in-out md:max-w-[720px] ${selectedIssue ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-8 py-6">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-4xl font-bold text-gray-900">
                  #SH-8849-VV
                </h2>

                <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
                  CRITICAL
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3 text-lg text-gray-500">
                <span>Exception Triggered</span>
                <span>•</span>
                <span>Admin: Marcus K.</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedIssue(null)}
              className="rounded-xl p-2 transition hover:bg-gray-100"
            >
              <X size={30} />
            </button>
          </div>

          <div className="space-y-6 p-8">
            <div className="rounded-[28px] border border-red-300 bg-red-50 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-red-600 p-4 text-white">
                  <AlertTriangle size={24} />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-red-700">
                    Unscheduled Divergence Detected
                  </h3>

                  <p className="mt-3 text-xl leading-relaxed text-red-600">
                    Package has deviated from the assigned carrier route and
                    hasn't been scanned for 36 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[28px] border border-orange-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                  Consignee (Customer)
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  Jonathan Rivera
                </h3>

                <p className="mt-3 text-xl leading-relaxed text-gray-500">
                  1248 Oakwood Ave, Los Angeles, CA
                </p>
              </div>

              <div className="rounded-[28px] border border-orange-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                  Shipper (Seller)
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  Elite Kicks Boutique
                </h3>

                <p className="mt-3 text-xl leading-relaxed text-gray-500">
                  Portland, OR 97201
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-orange-200 bg-white p-6">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="h-56 w-full overflow-hidden rounded-3xl bg-gray-100 md:w-64">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-4xl font-bold">
                    Vibrant Velocity "Max Flow"
                  </h2>

                  <p className="mt-3 text-xl text-gray-500">
                    SKU: VV-SNK-OR-42
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-gray-100 p-5">
                      <p className="text-sm font-semibold uppercase text-gray-400">
                        Weight
                      </p>

                      <h4 className="mt-2 text-3xl font-bold">
                        1.45 kg
                      </h4>
                    </div>

                    <div className="rounded-2xl bg-gray-100 p-5">
                      <p className="text-sm font-semibold uppercase text-gray-400">
                        Insurance
                      </p>

                      <h4 className="mt-2 text-3xl font-bold text-orange-700">
                        $450 USD
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-400">
                Operational Timeline
              </h2>

              <div className="mt-6 space-y-6">
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-red-600 p-3 text-white">
                      <AlertTriangle size={18} />
                    </div>

                    <div className="mt-2 h-full w-[2px] bg-gray-200" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-red-600">
                          Exception Triggered
                        </h3>

                        <p className="mt-3 text-lg leading-relaxed text-gray-600">
                          Unscheduled stop detected at Zone 4 Distribution Hub.
                        </p>
                      </div>

                      <span className="text-gray-400">
                        Oct 24, 04:20 PM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="rounded-full bg-orange-700 p-3 text-white">
                    <Truck size={18} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-700">
                      In Transit
                    </h3>

                    <p className="mt-2 text-gray-500">
                      Oct 23, 09:15 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 grid gap-4 border-t bg-[#fafafa] py-6 md:grid-cols-2">
              <button className="rounded-2xl bg-orange-700 px-6 py-5 text-xl font-semibold text-white">
                Contact Carrier
              </button>

              <button className="rounded-2xl border-2 border-orange-700 px-6 py-5 text-xl font-semibold text-orange-700">
                Escalate
              </button>

              <button className="rounded-2xl bg-gray-200 px-6 py-5 text-xl font-semibold text-gray-700">
                Refund
              </button>

              <button className="rounded-2xl bg-[#374151] px-6 py-5 text-xl font-semibold text-white">
                Resolve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}