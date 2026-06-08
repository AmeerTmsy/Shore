import { useState } from "react";
import {
  Search,
  Filter,
  RefreshCw,
  Download,
  Plus,
  MoreVertical,
  ShieldAlert,
  TrendingUp,
  Package2,
  Star,
  X,
  Eye,
  PencilLine,
  Trash2,
  Sparkles,
  BadgeCheck,
  Boxes,
} from "lucide-react";

const products = [
  {
    id: "#VV-90124",
    name: "Velocity Nitro Elite 3",
    sku: "VN-EL3-ORG-10",
    category: "Running",
    seller: "Global Sports Inc.",
    price: "$225.00",
    stock: 420,
    stockPercent: 85,
    status: "Active",
    risk: "Safe",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "#VV-88231",
    name: "Urban Flux High-Top",
    sku: "UF-HT-GRY-12",
    category: "Lifestyle",
    seller: "Urban Sole Co.",
    price: "$145.00",
    stock: 12,
    stockPercent: 12,
    status: "Flagged",
    risk: "High",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "#VV-77219",
    name: "CloudWalker Pro V2",
    sku: "CW-PRO-V2",
    category: "Training",
    seller: "Velocity Labs",
    price: "$215.00",
    stock: 0,
    stockPercent: 0,
    status: "Draft",
    risk: "Medium",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop",
  },
];

const stats = [
  {
    title: "Total Products",
    value: "2,540",
    icon: Package2,
  },
  {
    title: "Active",
    value: "1,892",
    icon: BadgeCheck,
  },
  {
    title: "Pending",
    value: "432",
    icon: Boxes,
  },
  {
    title: "Out of Stock",
    value: "116",
    icon: ShieldAlert,
  },
  {
    title: "Flagged",
    value: "24",
    icon: Filter,
  },
  {
    title: "Featured",
    value: "84",
    icon: Star,
  },
];

export default function AllProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-[#f6f6f7] p-4 lg:p-8">
      <div className="mx-auto max-w-[1700px]">
        {/* HEADER */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#171717]">
              All Products
            </h1>

            <p className="mt-1 text-[#6b7280]">
              Manage warehouse inventory, SKU assignments, and seller
              fulfillment tracking.
            </p>
          </div>

          {/* <div className="flex flex-wrap gap-3">
            <button className="flex h-14 items-center gap-2 rounded-2xl border border-[#e9d4c5] bg-white px-6 font-semibold text-[#2c2c2c] transition hover:bg-[#faf7f4]">
              <Download size={18} />
              Export CSV
            </button>

            <button className="flex h-14 items-center gap-2 rounded-2xl border border-[#e9d4c5] bg-white px-6 font-semibold text-[#2c2c2c] transition hover:bg-[#faf7f4]">
              <RefreshCw size={18} />
              Refresh
            </button>

            <button className="flex h-14 items-center gap-2 rounded-2xl border border-[#e9d4c5] bg-white px-6 font-semibold text-[#2c2c2c] transition hover:bg-[#faf7f4]">
              <Filter size={18} />
              Advanced Filter
            </button>

            <button className="flex h-14 items-center gap-2 rounded-2xl bg-[#b45309] px-7 font-semibold text-white shadow-lg shadow-orange-200 transition hover:scale-[1.02]">
              <Plus size={20} />
              New Product
            </button>
          </div> */}
        </div>

        {/* STATS */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4 lg:grid-cols-3">
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="rounded-2xl border border-[#ececec] bg-white p-6 flex justify-between"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f3ee] text-[#b45309]">
                  <Icon size={22} />
                </div>

                <div className="text-end">
                  <p className=" text-sm font-medium text-[#6b7280]">
                    {item.title}
                  </p>

                  <h3 className=" text-lg font-bold text-[#171717]">
                    {item.value}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* MAIN SECTION */}
        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
          {/* LEFT */}
          <div>
            {/* FILTERS */}
            <div className="rounded-2xl border border-[#ececec] bg-white p-4 lg:p-5">
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="flex h-10 flex-1 items-center gap-3 rounded-xl border border-[#f0d8c8] px-5">
                  <Search className="text-[#6b7280]" size={20} />

                  <input
                    placeholder="Quick search products..."
                    className="h-full w-full bg-transparent text-sm outline-none py-2"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="h-10 rounded-xl border border-[#f0d8c8] bg-white px-6 text-sm text-[#4b5563]">
                    All Categories
                  </button>

                  <button className="h-10 rounded-xl border border-[#f0d8c8] bg-white px-6 text-sm text-[#4b5563]">
                    All Sellers
                  </button>

                  <button className="h-10 rounded-xl border border-[#f0d8c8] bg-white px-6 text-sm text-[#4b5563]">
                    Status: Active
                  </button>

                  <button className="flex h-10 items-center gap-2 rounded-xl bg-[#f4f4f5] px-6 text-sm text-[#171717]">
                    <Filter size={18} />
                    Filter
                  </button>
                </div>
              </div>
            </div>

            {/* DESKTOP TABLE */}
            <div className="mt-6 hidden overflow-hidden rounded-[34px] border border-[#ececec] bg-white xl:block">
              <div className="grid grid-cols-[160px_1.4fr_1fr_180px_140px_180px_70px] border-b border-[#ececec] bg-[#fafafa] px-8 py-6 text-sm font-bold uppercase tracking-wide text-[#6b7280]">
                <div>Product ID</div>
                <div>Details</div>
                <div>Seller</div>
                <div>Price</div>
                <div>Status</div>
                <div>Stock</div>
                <div></div>
              </div>

              {products.map((product, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedProduct(product)}
                  className="grid cursor-pointer grid-cols-[160px_1.4fr_1fr_180px_140px_180px_70px] items-center border-b border-[#f1f1f1] px-8 py-7 transition hover:bg-[#fcfcfc]"
                >
                  <div className="text-[#374151]">
                    {product.id}
                  </div>

                  <div className="flex items-center gap-5">
                    <img
                      src={product.image}
                      className="h-16 w-16 rounded-2xl object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-[#171717]">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-lg text-[#6b7280]">
                        SKU: {product.sku}
                      </p>

                      <p className="mt-2 font-semibold text-[#b45309]">
                        Category: {product.category}
                      </p>
                    </div>
                  </div>

                  <div className="text-2xl font-semibold text-[#171717]">
                    {product.seller}
                  </div>

                  <div className="text-2xl font-black text-[#171717]">
                    {product.price}
                  </div>

                  <div>
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${product.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : product.status === "Flagged"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-[#e7ebf7] text-[#5f6b85]"
                        }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold">
                        {product.stockPercent}%
                      </span>

                      <span className="font-semibold text-[#6b7280]">
                        {product.stock} units
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#ededed]">
                      <div
                        style={{
                          width: `${product.stockPercent}%`,
                        }}
                        className={`h-full rounded-full ${product.stockPercent < 20
                            ? "bg-red-500"
                            : "bg-[#b45309]"
                          }`}
                      />
                    </div>
                  </div>

                  <button className="flex h-12 w-12 items-center justify-center rounded-xl hover:bg-[#f3f4f6]">
                    <MoreVertical />
                  </button>
                </div>
              ))}

              <div className="flex items-center justify-between px-8 py-6">
                <p className="text-lg text-[#6b7280]">
                  Showing 1-10 of 2,540 products
                </p>

                <div className="flex items-center gap-3">
                  <button className="h-14 rounded-2xl border border-[#edd7c8] px-6">
                    Previous
                  </button>

                  <button className="h-14 w-14 rounded-2xl bg-[#b45309] font-bold text-white">
                    1
                  </button>

                  <button className="h-14 w-14 rounded-2xl border border-[#edd7c8]">
                    2
                  </button>

                  <button className="h-14 w-14 rounded-2xl border border-[#edd7c8]">
                    3
                  </button>

                  <button className="h-14 rounded-2xl border border-[#edd7c8] px-6">
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* MOBILE CARDS */}
            <div className="mt-6 space-y-4 xl:hidden">
              {products.map((product, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedProduct(product)}
                  className="rounded-[30px] border border-[#f0d8c8] bg-white p-5"
                >
                  <div className="flex gap-4">
                    <img
                      src={product.image}
                      className="h-28 w-28 rounded-2xl object-cover"
                    />

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-2xl font-bold">
                            {product.name}
                          </h3>

                          <p className="mt-1 text-lg text-[#6b7280]">
                            SKU: {product.sku}
                          </p>
                        </div>

                        <span
                          className={`rounded-full px-4 py-2 text-sm font-bold ${product.status === "Active"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-red-100 text-red-700"
                            }`}
                        >
                          {product.status}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-4xl font-black text-[#b45309]">
                          {product.price}
                        </p>

                        <p className="font-semibold text-[#6b7280]">
                          {product.stock} units
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            <div className="rounded-[32px] border border-[#ececec] bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black">Product Insights</h3>

                <button className="font-semibold text-[#b45309]">
                  View All
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4 rounded-3xl bg-[#f7f7f7] p-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f5ece7] text-[#b45309]">
                    <TrendingUp />
                  </div>

                  <div>
                    <p className="text-xl font-bold">Running Growth</p>
                    <p className="text-[#6b7280]">+24% this week</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-3xl bg-[#f7f7f7] p-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef2ff] text-blue-600">
                    <Boxes />
                  </div>

                  <div>
                    <p className="text-xl font-bold">Top Seller</p>
                    <p className="text-[#6b7280]">Global Sports Inc.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#ececec] bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black">Moderation</h3>

                <div className="rounded-full bg-red-100 px-4 py-1 text-sm font-bold text-red-600">
                  4 NEW
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="font-bold text-[#171717]">
                    Counterfeit Report
                  </p>

                  <p className="text-[#6b7280]">
                    SKU: #AB-123 reported...
                  </p>
                </div>

                <div className="border-t border-[#ececec] pt-5">
                  <p className="font-bold text-[#171717]">
                    Duplicate Listing
                  </p>

                  <p className="text-[#6b7280]">
                    Found 3 similar titles...
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#ececec] bg-white p-6">
              <h3 className="text-2xl font-black">Inventory Health</h3>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-[#6b7280]">Low Stock SKU's</p>

                  <h4 className="mt-2 text-5xl font-black">42</h4>
                </div>

                <p className="font-bold text-red-500">-12% vs last mo</p>
              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#ededed]">
                <div className="flex h-full">
                  <div className="w-[70%] bg-green-500" />
                  <div className="w-[20%] bg-orange-400" />
                  <div className="w-[10%] bg-red-500" />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[36px] bg-[#262c33] p-8 text-white shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500">
                <Sparkles />
              </div>

              <h3 className="mt-8 text-4xl font-black leading-tight">
                Pro Inventory AI
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-gray-300">
                Our AI predicts 12 lifestyle models will go out of stock within
                48 hours based on viral social trends.
              </p>

              <button className="mt-8 h-16 w-full rounded-2xl bg-[#b45309] text-xl font-bold">
                Restock Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setSelectedProduct(null)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${selectedProduct
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }`}
      />

      {/* DRAWER */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-full overflow-y-auto bg-[#f8f8f8] transition-transform duration-300 md:w-[760px] ${selectedProduct ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {selectedProduct && (
          <>
            <div className="flex items-start justify-between border-b border-[#ead7c9] bg-white p-8">
              <div>
                <h2 className="text-5xl font-black text-[#171717]">
                  {selectedProduct.name}
                </h2>

                <div className="mt-4 flex items-center gap-4">
                  <span className="rounded-full bg-green-100 px-5 py-2 font-bold text-green-700">
                    ACTIVE
                  </span>

                  <p className="text-lg text-[#6b7280]">
                    Last edited 2h ago
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedProduct(null)}
                className="flex h-14 w-14 items-center justify-center rounded-2xl hover:bg-[#f3f4f6]"
              >
                <X size={32} />
              </button>
            </div>

            <div className="space-y-8 p-6 md:p-8">
              <div className="overflow-hidden rounded-[32px] border border-[#ead7c9] bg-white">
                <img
                  src={selectedProduct.image}
                  className="h-[340px] w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src={selectedProduct.image}
                  className="h-36 rounded-3xl border-2 border-[#b45309] object-cover"
                />

                <div className="flex h-36 items-center justify-center rounded-3xl border border-dashed border-[#c8a995] text-[#9b7b69]">
                  Upload
                </div>
              </div>

              <div className="rounded-[32px] border border-[#ead7c9] bg-white p-8">
                <div className="flex items-center gap-3">
                  <Eye className="text-[#b45309]" />

                  <h3 className="text-4xl font-black">Product Overview</h3>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#6b7280]">
                      SKU Reference
                    </p>

                    <h4 className="mt-2 text-2xl font-bold">
                      VF-2024-UFL-ORNG
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#6b7280]">
                      Brand / Maker
                    </p>

                    <h4 className="mt-2 text-2xl font-bold text-[#b45309]">
                      Vibrant Velocity
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#6b7280]">
                      Market Category
                    </p>

                    <h4 className="mt-2 text-2xl font-bold">
                      Athletic / Lifestyle
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#6b7280]">
                      Collection
                    </p>

                    <h4 className="mt-2 text-2xl font-bold">
                      Summer Flux '24
                    </h4>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-[#ead7c9] bg-white p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Boxes className="text-[#b45309]" />

                    <h3 className="text-4xl font-black">Commercials</h3>
                  </div>

                  <button className="font-bold text-[#b45309]">
                    Edit Pricing
                  </button>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="rounded-3xl border border-[#ececec] p-5">
                    <p className="text-[#6b7280]">List Price</p>

                    <h4 className="mt-3 text-4xl font-black">$189.00</h4>
                  </div>

                  <div className="rounded-3xl border border-[#ececec] p-5">
                    <p className="text-[#6b7280]">Avg. Sale</p>

                    <h4 className="mt-3 text-4xl font-black">$174.50</h4>
                  </div>

                  <div className="rounded-3xl border border-[#ececec] p-5">
                    <p className="text-[#6b7280]">Total Stock</p>

                    <h4 className="mt-3 text-4xl font-black text-[#b45309]">
                      1,204
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="sticky bottom-0 grid grid-cols-4 gap-3 border-t border-[#ececec] bg-white p-5">
              <button className="flex h-20 flex-col items-center justify-center rounded-3xl border border-[#ececec] text-[#4b5563]">
                <Eye />
                <span className="mt-2 text-sm font-bold">HIDE</span>
              </button>

              <button className="flex h-20 flex-col items-center justify-center rounded-3xl border border-[#ececec] text-[#4b5563]">
                <PencilLine />
                <span className="mt-2 text-sm font-bold">CHANGES</span>
              </button>

              <button className="flex h-20 flex-col items-center justify-center rounded-3xl bg-[#ff6a00] text-white shadow-lg">
                <Sparkles />
                <span className="mt-2 text-sm font-bold">FEATURE</span>
              </button>

              <button className="flex h-20 flex-col items-center justify-center rounded-3xl bg-red-100 text-red-600">
                <Trash2 />
                <span className="mt-2 text-sm font-bold">DELETE</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}