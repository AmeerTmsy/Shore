import {
  AlertTriangle,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Clock3,
  Eye,
  Filter,
  MoreVertical,
  Search,
  ShieldAlert,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import { useState } from "react";

const pendingProducts = [
  {
    id: "#SKU-99210",
    name: "Air Jordan 1 Retro",
    sku: "555088-105",
    seller: "SoleTrader NY",
    reputation: "98%",
    category: "Footwear",
    submitted: "2 mins ago",
    risk: "Low",
    status: "Awaiting Review",
    price: "$420.00",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "#SKU-88129",
    name: "Nike Dunk Panda",
    sku: "DD1391-100",
    seller: "KicksOutlet",
    reputation: "82%",
    category: "Footwear",
    submitted: "15 mins ago",
    risk: "Critical",
    status: "AI Flagged",
    price: "$110.00",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "#SKU-77451",
    name: "Yeezy Slide Onyx",
    sku: "CP9652",
    seller: "GrailHunter",
    reputation: "95%",
    category: "Footwear",
    submitted: "1 hour ago",
    risk: "Medium",
    status: "Duplicate Match",
    price: "$350.00",
    image:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1200&auto=format&fit=crop",
  },
];

const stats = [
  {
    title: "Total Pending",
    value: "1,284",
    sub: "+12% vs LW",
    color: "text-green-600",
  },
  {
    title: "Awaiting Review",
    value: "432",
  },
  {
    title: "High Risk",
    value: "42",
    sub: "Priority Action",
    color: "text-red-500",
  },
  {
    title: "Duplicates",
    value: "18",
  },
  {
    title: "Revisions",
    value: "156",
  },
  {
    title: "Avg Approval",
    value: "4.2h",
  },
];

export default function PendingProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-[#f6f6f7] p-4 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            Product Moderation
          </h1>
          <p className="mt-2 text-lg text-zinc-500">
            Review and manage pending inventory submissions from secondary
            market sellers.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-2xl border border-[#e6c7b2] bg-white px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50">
            Refresh
          </button>

          <button className="rounded-2xl border border-[#e6c7b2] bg-white px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50">
            Export CSV
          </button>

          <button className="rounded-2xl bg-[#ff6a00] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:opacity-90">
            Bulk Approve
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mt-8 flex items-center gap-3 lg:hidden">
        <div className="flex h-16 flex-1 items-center gap-3 rounded-[28px] border border-[#ebcdb9] bg-white px-5">
          <Search className="h-6 w-6 text-[#ff6a00]" />
          <input
            placeholder="Search pending products..."
            className="w-full bg-transparent text-lg outline-none placeholder:text-zinc-400"
          />
        </div>

        <button className="flex h-16 w-16 items-center justify-center rounded-[24px] border border-[#ebcdb9] bg-white">
          <Filter className="h-6 w-6 text-zinc-700" />
        </button>
      </div>

      {/* Stats */}
      <div className="mt-8 flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="min-w-[220px] rounded-[32px] border border-[#ead7ca] bg-white p-6"
          >
            <p className="text-sm uppercase tracking-wider text-zinc-500">
              {stat.title}
            </p>

            <h2 className="mt-4 text-5xl font-bold text-zinc-900">
              {stat.value}
            </h2>

            {stat.sub && (
              <p className={`mt-3 text-sm font-semibold ${stat.color}`}>
                {stat.sub}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Main */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
        {/* Left */}
        <div className="space-y-6">
          {/* Filters */}
          <div className="hidden rounded-[36px] border border-[#ead7ca] bg-white p-5 lg:flex lg:items-center lg:justify-between">
            <div className="flex gap-4">
              <button className="rounded-full bg-[#ff6a00] px-5 py-2 text-sm font-semibold text-white">
                All Submissions
              </button>

              <button className="rounded-full px-5 py-2 text-sm font-medium text-zinc-500">
                Critical Only
              </button>

              <button className="rounded-full px-5 py-2 text-sm font-medium text-zinc-500">
                AI Flagged
              </button>
            </div>

            <div className="flex gap-3">
              <button className="rounded-2xl p-3 transition hover:bg-zinc-100">
                <Filter className="h-5 w-5 text-zinc-500" />
              </button>

              <button className="rounded-2xl p-3 transition hover:bg-zinc-100">
                <Upload className="h-5 w-5 text-zinc-500" />
              </button>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-hidden rounded-[36px] border border-[#ead7ca] bg-white lg:block">
            <div className="grid grid-cols-7 border-b border-zinc-200 px-6 py-5 text-sm font-semibold uppercase tracking-wide text-zinc-500">
              <p>Product</p>
              <p>Preview</p>
              <p>Seller</p>
              <p>Category</p>
              <p>Submitted</p>
              <p>Risk</p>
              <p>Status</p>
            </div>

            {pendingProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="grid cursor-pointer grid-cols-7 items-center border-b border-zinc-100 px-6 py-5 transition hover:bg-[#fff9f5]"
              >
                <div>
                  <p className="font-semibold text-zinc-800">{product.id}</p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    className="h-16 w-16 rounded-2xl object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-zinc-900">
                      {product.name}
                    </h3>

                    <p className="text-sm text-zinc-500">
                      {product.sku} • {product.price}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">{product.seller}</p>
                  <p className="text-sm font-medium text-green-600">
                    Reputation: {product.reputation}
                  </p>
                </div>

                <p className="text-zinc-600">{product.category}</p>

                <p className="text-zinc-600">{product.submitted}</p>

                <div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      product.risk === "Critical"
                        ? "bg-red-100 text-red-600"
                        : product.risk === "Medium"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {product.risk}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                    {product.status}
                  </span>

                  <button className="rounded-xl p-2 hover:bg-zinc-100">
                    <MoreVertical className="h-5 w-5 text-zinc-500" />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between px-6 py-5">
              <p className="text-zinc-500">
                Showing 1-10 of 432 results
              </p>

              <div className="flex items-center gap-2">
                <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ead7ca]">
                  <ChevronLeft />
                </button>

                <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6a00] text-white">
                  1
                </button>

                <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ead7ca]">
                  2
                </button>

                <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ead7ca]">
                  3
                </button>

                <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ead7ca]">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-5 lg:hidden">
            {pendingProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-[32px] border border-[#ead7ca] bg-white p-5"
              >
                <div className="flex gap-4">
                  <img
                    src={product.image}
                    className="h-28 w-28 rounded-2xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-zinc-900">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-lg text-zinc-500">
                      Seller: @{product.seller.replace(" ", "_")}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-600">
                        {product.risk} Risk
                      </span>

                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-600">
                        Manual
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-t border-zinc-100 pt-5">
                  <div className="grid grid-cols-2 gap-3">
                    <button className="rounded-2xl border border-[#e8cbb8] py-4 text-xl font-medium text-zinc-600">
                      Reject
                    </button>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="rounded-2xl bg-[#ff6a00] py-4 text-xl font-semibold text-white"
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-[32px] border border-[#ead7ca] bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold text-zinc-900">
                Moderation Insights
              </h3>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>Accuracy Score</span>
                  <span>99.2%</span>
                </div>

                <div className="h-3 rounded-full bg-zinc-100">
                  <div className="h-3 w-[92%] rounded-full bg-green-500"></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>Daily Target</span>
                  <span>78%</span>
                </div>

                <div className="h-3 rounded-full bg-zinc-100">
                  <div className="h-3 w-[78%] rounded-full bg-orange-500"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] bg-[#121418] p-7 text-white">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-orange-400" />
              <h3 className="text-3xl font-bold">AI Moderation</h3>
            </div>

            <p className="mt-5 text-lg leading-relaxed text-zinc-300">
              Leverage Shore Intelligence to auto-detect fakes, duplicate
              listings, and stock photo abuse.
            </p>

            <div className="mt-6 rounded-3xl border border-zinc-700 bg-zinc-900/40 p-5">
              <div className="flex items-center justify-between">
                <p className="font-semibold uppercase tracking-wide">
                  Active Scan
                </p>

                <div className="h-3 w-3 rounded-full bg-orange-500"></div>
              </div>

              <p className="mt-3 text-zinc-400">
                Scanning 42 high-risk items in background...
              </p>
            </div>

            <button className="mt-6 w-full rounded-3xl bg-[#ff6a00] py-5 text-lg font-semibold text-white">
              Run Smart Scan
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          selectedProduct
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setSelectedProduct(null)}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full overflow-y-auto bg-[#f6f6f7] transition-all duration-300 lg:w-[760px] ${
          selectedProduct ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selectedProduct && (
          <div className="pb-40">
            {/* Top */}
            <div className="sticky top-0 z-10 border-b border-[#ead7ca] bg-[#f6f6f7] p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
                      Awaiting Verification
                    </span>

                    <span className="text-sm text-zinc-500">
                      ID: PRD-4491-002
                    </span>
                  </div>

                  <h2 className="mt-4 text-4xl font-bold text-zinc-900">
                    {selectedProduct.name}
                  </h2>

                  <p className="mt-2 text-lg text-zinc-500">
                    Submitted by{" "}
                    <span className="font-semibold text-orange-600">
                      {selectedProduct.seller}
                    </span>{" "}
                    • 2 hours ago
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-2xl p-3 hover:bg-zinc-100"
                >
                  <X className="h-7 w-7 text-zinc-500" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 p-6">
              <div className="overflow-hidden rounded-[36px] border border-[#ead7ca] bg-white p-4">
                <img
                  src={selectedProduct.image}
                  className="h-[420px] w-full rounded-[28px] object-cover"
                />

                <div className="mt-4 grid grid-cols-4 gap-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="overflow-hidden rounded-2xl border border-[#ead7ca]"
                    >
                      <img
                        src={selectedProduct.image}
                        className="h-28 w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[32px] border border-[#ead7ca] bg-white p-6">
                  <div className="flex items-center gap-3">
                    <CircleAlert className="text-orange-600" />
                    <h3 className="text-2xl font-bold">
                      Product Specifications
                    </h3>
                  </div>

                  <div className="mt-6 space-y-5">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Brand</span>
                      <span className="font-semibold">Jordan Brand</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-zinc-500">SKU</span>
                      <span className="font-semibold">AJ1-2024-CHI</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-zinc-500">Category</span>
                      <span className="font-semibold">Athletic</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-zinc-500">Stock</span>
                      <span className="font-semibold">1,204 units</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[32px] border border-[#ead7ca] bg-white p-6">
                  <div className="flex items-center gap-3">
                    <ShieldAlert className="text-orange-600" />
                    <h3 className="text-2xl font-bold">
                      Seller Reputation
                    </h3>
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src="https://i.pravatar.cc/100?img=12"
                      className="h-16 w-16 rounded-full"
                    />

                    <div>
                      <h4 className="text-xl font-bold">
                        {selectedProduct.seller}
                      </h4>

                      <p className="font-semibold text-orange-600">
                        PRO • 98.4% SUCCESS
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-zinc-100 p-4">
                      <p className="text-sm text-zinc-500">
                        Approval Rate
                      </p>
                      <h5 className="mt-2 text-2xl font-bold">98%</h5>
                    </div>

                    <div className="rounded-2xl bg-zinc-100 p-4">
                      <p className="text-sm text-zinc-500">
                        Violations
                      </p>
                      <h5 className="mt-2 text-2xl font-bold">2</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-red-200 bg-red-50 p-6">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="text-red-500" />
                  <h3 className="text-2xl font-bold text-red-600">
                    AI Moderation Analysis
                  </h3>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl bg-white p-5">
                    <p className="text-zinc-500">
                      Duplicate Similarity
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-red-500">
                      84%
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-white p-5">
                    <p className="text-zinc-500">
                      Counterfeit Probability
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-orange-500">
                      Medium
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="fixed bottom-0 right-0 flex w-full gap-3 border-t border-[#ead7ca] bg-white p-5 lg:w-[760px]">
              <button className="flex-1 rounded-2xl border border-[#e7c8b4] py-4 font-semibold text-zinc-600">
                Reject
              </button>

              <button className="flex-1 rounded-2xl border border-[#e7c8b4] py-4 font-semibold text-zinc-600">
                Changes
              </button>

              <button className="flex-1 rounded-2xl border border-[#e7c8b4] py-4 font-semibold text-zinc-600">
                Escalate
              </button>

              <button className="flex-1 rounded-2xl bg-[#ff6a00] py-4 font-semibold text-white">
                Approve Product
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Floating AI Button */}
      <button className="fixed bottom-24 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff6a00] text-white shadow-2xl lg:hidden">
        <Sparkles className="h-7 w-7" />
      </button>
    </div>
  );
}