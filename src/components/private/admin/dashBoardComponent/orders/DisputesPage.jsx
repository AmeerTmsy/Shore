import { useState } from "react"
import {
  AlertTriangle,
  BadgeAlert,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Eye,
  Filter,
  RefreshCw,
  Scale,
  Search,
  ShieldAlert,
  Download,
  X,
  MessageSquare,
  Truck,
} from "lucide-react"

const disputes = [
  {
    id: "#DSP-90421",
    buyer: "Jordan S.",
    seller: "FootwearHub",
    product: "Air Jordan 1 Retro",
    type: "Fake Product",
    priority: "Critical",
    status: "Escalated",
    activity: "2 mins ago",
  },
  {
    id: "#DSP-89912",
    buyer: "Emma W.",
    seller: "SoleSearch",
    product: "Yeezy Boost 350",
    type: "Item Not Received",
    priority: "High",
    status: "Under Review",
    activity: "45 mins ago",
  },
  {
    id: "#DSP-89855",
    buyer: "Michael R.",
    seller: "KicksStore",
    product: "Nike Dunk Low",
    type: "Wrong Size",
    priority: "Medium",
    status: "Pending",
    activity: "3 hours ago",
  },
  {
    id: "#DSP-88721",
    buyer: "Sara L.",
    seller: "RarePairs",
    product: "New Balance 550",
    type: "Damaged Box",
    priority: "Low",
    status: "Resolved",
    activity: "Yesterday",
  },
]

const priorityStyles = {
  Critical: "bg-red-600 text-white",
  High: "bg-orange-100 text-orange-700",
  Medium: "bg-gray-200 text-gray-600",
  Low: "bg-gray-200 text-gray-500",
}

const statusStyles = {
  Escalated: "text-red-700",
  "Under Review": "text-orange-500",
  Pending: "text-gray-600",
  Resolved: "text-green-500",
}

export default function DisputesPage() {
  const [selectedDispute, setSelectedDispute] = useState(null)

  return (
    <>
      <div className="min-h-screen bg-[#f8f8f8] p-4 md:p-6">
        {/* HEADER */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Disputes Management
            </h1>

            <p className="mt-2 max-w-xl text-lg text-gray-500">
              Resolve buyer-seller conflicts and investigate fraud alerts.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-6 py-4 text-lg font-semibold text-gray-900 transition hover:bg-orange-50">
              <RefreshCw className="h-5 w-5" />
              Refresh
            </button>

            <button className="flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-6 py-4 text-lg font-semibold text-gray-900 transition hover:bg-orange-50">
              <Download className="h-5 w-5" />
              Export CSV
            </button>

            <button className="flex items-center gap-2 rounded-2xl bg-[#b65400] px-6 py-4 text-lg font-semibold text-white transition hover:opacity-90">
              <Filter className="h-5 w-5" />
              Advanced Filter
            </button>
          </div>
        </div>

        {/* STATS */}

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
          <StatCard
            icon={<Scale />}
            title="Total Disputes"
            value="1,284"
            description="4.2% vs last month"
            descriptionColor="text-green-600"
          />

          <StatCard
            icon={<BadgeAlert />}
            title="Open Cases"
            value="156"
            description="Active investigations"
          />

          <StatCard
            icon={<AlertTriangle />}
            title="Escalated"
            value="24"
            description="Requires immediate action"
            className="border-red-200 bg-red-50"
            valueClass="text-red-700"
          />

          <StatCard
            icon={<ShieldAlert />}
            title="Resolved"
            value="1,104"
            description="86% success rate"
            descriptionColor="text-green-600"
          />

          <StatCard
            icon={<ShieldAlert />}
            title="High Risk"
            value="12"
            description="Potential fraud detected"
            className="border-none bg-[#272c31] text-white"
            valueClass="text-white"
          />

          <StatCard
            icon={<Clock3 />}
            title="Avg Resolution"
            value="18.5h"
            description="Average time to close"
          />
        </div>

        {/* MAIN */}

        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
          {/* LEFT */}

          <div>
            {/* FILTERS */}

            <div className="rounded-[28px] border border-orange-200 bg-white p-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <SelectBox label="Status: All Cases" />
                <SelectBox label="Priority: All" />

                <div className="rounded-2xl bg-gray-100 px-5 py-4 text-lg text-gray-500">
                  Seller Name
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl bg-gray-100 px-5 py-4 text-lg text-gray-500">
                dd/mm/yyyy
                <Calendar className="h-5 w-5 text-gray-600" />
              </div>
            </div>

            {/* DESKTOP TABLE */}

            <div className="mt-6 hidden overflow-hidden rounded-[30px] border border-orange-200 bg-white xl:block">
              <div className="grid grid-cols-[120px_1.3fr_1fr_1fr_170px_170px_120px_80px] border-b border-orange-100 bg-[#f3f4f6] px-6 py-6 text-lg font-bold uppercase tracking-wide text-gray-800">
                <p>Dispute ID</p>
                <p>Buyer / Seller</p>
                <p>Product</p>
                <p>Type</p>
                <p>Priority</p>
                <p>Status</p>
                <p>Last Act</p>
                <p></p>
              </div>

              {disputes.map((dispute) => (
                <div
                  key={dispute.id}
                  className="grid grid-cols-[120px_1.3fr_1fr_1fr_170px_170px_120px_80px] items-center border-b border-orange-100 px-6 py-7 transition hover:bg-orange-50/40"
                >
                  <p className="text-2xl font-bold text-[#b65400]">
                    {dispute.id}
                  </p>

                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {dispute.buyer}
                    </p>

                    <p className="mt-1 text-xl text-gray-500">
                      vs. {dispute.seller}
                    </p>
                  </div>

                  <p className="text-2xl text-gray-900">
                    {dispute.product}
                  </p>

                  <p
                    className={`text-2xl font-semibold ${
                      dispute.type === "Fake Product"
                        ? "text-red-700"
                        : "text-gray-700"
                    }`}
                  >
                    {dispute.type}
                  </p>

                  <div>
                    <span
                      className={`rounded-full px-5 py-2 text-lg font-bold ${priorityStyles[dispute.priority]}`}
                    >
                      {dispute.priority}
                    </span>
                  </div>

                  <div
                    className={`flex items-center gap-2 text-2xl font-semibold ${statusStyles[dispute.status]}`}
                  >
                    <div className="h-3 w-3 rounded-full bg-current" />
                    {dispute.status}
                  </div>

                  <p className="text-2xl text-gray-500">
                    {dispute.activity}
                  </p>

                  <button
                    onClick={() => setSelectedDispute(dispute)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[#b65400] transition hover:bg-orange-200"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              ))}

              {/* PAGINATION */}

              <div className="flex items-center justify-between px-6 py-6">
                <p className="text-xl font-medium text-gray-500">
                  Showing 1 to 10 of 1,284 results
                </p>

                <div className="flex items-center gap-3">
                  <button className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-200">
                    <ChevronLeft />
                  </button>

                  <button className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#b65400] font-bold text-white">
                    1
                  </button>

                  <button className="flex h-14 w-14 items-center justify-center rounded-xl font-bold">
                    2
                  </button>

                  <button className="flex h-14 w-14 items-center justify-center rounded-xl font-bold">
                    3
                  </button>

                  <button className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-200">
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>

            {/* MOBILE */}

            <div className="mt-6 space-y-5 xl:hidden">
              {disputes.map((dispute) => (
                <div
                  key={dispute.id}
                  className="rounded-[30px] border border-orange-200 bg-white p-5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-2xl font-bold text-gray-500">
                        {dispute.id}
                      </p>

                      <h3 className="mt-3 text-4xl font-bold text-gray-900">
                        {dispute.type}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <span
                        className={`block rounded-full px-5 py-2 text-lg font-bold ${priorityStyles[dispute.priority]}`}
                      >
                        {dispute.priority}
                      </span>

                      <span className="block rounded-full bg-gray-200 px-5 py-2 text-center text-lg font-semibold text-gray-600">
                        {dispute.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-gray-100 p-4">
                    <div className="flex gap-4">
                      <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gray-200">
                        <Truck className="h-8 w-8 text-gray-500" />
                      </div>

                      <div>
                        <p className="text-3xl font-semibold text-gray-900">
                          {dispute.product}
                        </p>

                        <p className="mt-2 text-xl text-gray-500">
                          Order #90210 • {dispute.activity}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setSelectedDispute(dispute)}
                      className="rounded-2xl bg-[#ff6a00] px-5 py-5 text-2xl font-bold text-white"
                    >
                      Review
                    </button>

                    <button className="flex items-center justify-center gap-3 rounded-2xl bg-gray-200 px-5 py-5 text-2xl font-bold text-gray-800">
                      <MessageSquare className="h-6 w-6" />
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-6">
            <div className="rounded-[30px] border border-orange-200 bg-white p-8">
              <h3 className="text-4xl font-bold text-gray-900">
                Dispute Reasons
              </h3>

              <div className="mt-10 space-y-8">
                <ProgressRow
                  label="Counterfeit / Fake"
                  value="42%"
                  width="42%"
                />

                <ProgressRow
                  label="Item Not Received"
                  value="28%"
                  width="28%"
                />

                <ProgressRow
                  label="Wrong Size / Model"
                  value="15%"
                  width="15%"
                />

                <ProgressRow
                  label="Condition Issues"
                  value="15%"
                  width="15%"
                  light
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] bg-[#272c31]">
              <div className="h-56 bg-gray-400" />

              <div className="p-8 text-white">
                <h3 className="text-4xl font-bold">Moderation AI v2.4</h3>

                <p className="mt-5 text-2xl leading-relaxed text-gray-300">
                  Automate 60% of routine disputes with predictive analysis.
                </p>

                <button className="mt-8 w-full rounded-2xl bg-[#ff6a00] px-6 py-5 text-2xl font-bold text-white">
                  Enable AI Assist
                </button>
              </div>
            </div>

            <div className="rounded-[30px] border border-orange-200 bg-white p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-4xl font-bold text-gray-900">
                  Fraud Alerts
                </h3>

                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-bold uppercase text-red-700">
                  Live
                </span>
              </div>

              <div className="mt-8 space-y-8">
                <FraudAlert
                  title="IP Anomaly Detected"
                  text="Seller ID #9921 matched banned accounts."
                />

                <FraudAlert
                  title="High Velocity Claims"
                  text="User opened 5 disputes in 1h."
                />
              </div>

              <button className="mt-10 text-2xl font-bold text-[#b65400]">
                View All Security Alerts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DRAWER */}

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          selectedDispute
            ? "pointer-events-auto bg-black/30 opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-[950px] overflow-y-auto bg-white transition-transform duration-300 ease-in-out ${
            selectedDispute ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="sticky top-0 z-20 border-b border-orange-100 bg-white px-6 py-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedDispute(null)}
                  className="rounded-xl p-2 transition hover:bg-gray-100"
                >
                  <X className="h-7 w-7" />
                </button>

                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-4xl font-bold text-gray-900">
                      Dispute #VV-DISP-8921
                    </h2>

                    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold uppercase text-[#b65400]">
                      Urgent
                    </span>
                  </div>

                  <p className="mt-2 text-lg text-gray-500">
                    Assigned to: John Doe (Admin)
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <span className="rounded-xl bg-gray-100 px-5 py-3 font-semibold text-gray-600">
                  Active 2h
                </span>

                <span className="rounded-xl bg-[#374151] px-5 py-3 font-semibold text-white">
                  Priority: High
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-8 p-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                Parties Involved
              </h3>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <PartyCard title="Marcus Chen (Buyer)" />
                <PartyCard title="SoleQuest Originals (Seller)" />
              </div>
            </div>

            <div className="rounded-[28px] border border-orange-200 p-5">
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="h-44 w-full rounded-2xl bg-gray-200 md:w-44" />

                <div className="flex-1">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-4xl font-bold text-gray-900">
                        Velocity Air Max Pro
                      </h3>

                      <p className="mt-3 text-2xl text-gray-500">
                        Order ID: #ORD-009122
                      </p>
                    </div>

                    <span className="rounded-xl border border-orange-200 px-5 py-3 font-semibold">
                      Size: 10.5 US
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-gray-900">
                Dispute Summary
              </h3>

              <div className="mt-5 rounded-[28px] border border-orange-200 bg-orange-50 p-6">
                <p className="text-lg font-bold uppercase text-[#b65400]">
                  Buyer Complaint
                </p>

                <p className="mt-3 text-xl leading-relaxed text-gray-700">
                  The shoes arrived damaged and did not match the product
                  listing images.
                </p>
              </div>

              <div className="mt-5 rounded-[28px] border border-gray-200 p-6">
                <p className="text-lg font-bold uppercase text-gray-500">
                  Seller Response
                </p>

                <p className="mt-3 text-xl leading-relaxed text-gray-700">
                  The product was shipped in verified condition with insurance.
                </p>
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 border-t border-orange-100 bg-white p-5">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <button className="rounded-2xl bg-[#ff6a00] px-5 py-5 text-xl font-bold text-white">
                Resolve Buyer
              </button>

              <button className="rounded-2xl bg-[#374151] px-5 py-5 text-xl font-bold text-white">
                Resolve Seller
              </button>

              <button className="rounded-2xl border border-orange-200 px-5 py-5 text-xl font-bold text-gray-700">
                Escalate
              </button>

              <button className="rounded-2xl bg-gray-100 px-5 py-5 text-xl font-bold text-[#b65400]">
                Request Evidence
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function StatCard({
  icon,
  title,
  value,
  description,
  descriptionColor,
  className,
  valueClass,
}) {
  return (
    <div
      className={`rounded-[28px] border border-orange-200 bg-white p-6 ${className}`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-500">
        {icon}
      </div>

      <p className="mt-5 text-lg font-bold uppercase tracking-wide text-gray-500">
        {title}
      </p>

      <h3 className={`mt-3 text-5xl font-bold ${valueClass}`}>
        {value}
      </h3>

      <p className={`mt-4 text-xl ${descriptionColor}`}>
        {description}
      </p>
    </div>
  )
}

function SelectBox({ label }) {
  return (
    <button className="flex items-center justify-between rounded-2xl bg-gray-100 px-5 py-4 text-lg text-gray-700">
      {label}
      <ChevronDown className="h-5 w-5" />
    </button>
  )
}

function ProgressRow({ label, value, width, light }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold text-gray-900">{label}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>

      <div className="mt-4 h-4 overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full rounded-full ${
            light ? "bg-orange-200" : "bg-[#ff6a00]"
          }`}
          style={{ width }}
        />
      </div>
    </div>
  )
}

function FraudAlert({ title, text }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-[#b65400]">
        <ShieldAlert className="h-7 w-7" />
      </div>

      <div>
        <h4 className="text-2xl font-bold text-gray-900">{title}</h4>
        <p className="mt-2 text-xl leading-relaxed text-gray-500">{text}</p>
      </div>
    </div>
  )
}

function PartyCard({ title }) {
  return (
    <div className="rounded-[28px] border border-orange-200 p-5">
      <div className="flex items-start gap-4">
        <div className="h-20 w-20 rounded-full bg-gray-300" />

        <div className="flex-1">
          <h4 className="text-2xl font-bold text-gray-900">{title}</h4>

          <p className="mt-2 text-lg text-gray-500">
            ID: US-99281 | Joined 2021
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gray-100 px-4 py-3 text-lg font-semibold text-gray-700">
              Reputation: 4.9/5
            </div>

            <div className="rounded-xl bg-gray-100 px-4 py-3 text-lg font-semibold text-gray-700">
              Purchases: 124
            </div>

            <div className="rounded-xl bg-gray-100 px-4 py-3 text-lg font-semibold text-gray-700">
              Prev. Disputes: 1
            </div>

            <div className="rounded-xl bg-gray-100 px-4 py-3 text-lg font-semibold text-gray-700">
              Return Rate: 4.2%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}