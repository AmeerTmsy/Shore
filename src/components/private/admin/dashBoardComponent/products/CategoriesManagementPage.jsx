import { AlertTriangle, CircleAlert, ShieldAlert, X } from "lucide-react"
import { useState } from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"

export default function CategoriesManagementPage() {
    const [selectedProduct, setSelectedProduct] = useState(null)
    return (
        <div className="min-h-screen bg-[#f6f6f7] p-4 md:p-8">
            <div className="mx-auto max-w-[1600px] space-y-6">
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Categories
                        </h1>
                        <p className="mt-1 text-sm sm:text-[1em] text-gray-500">
                            Manage marketplace taxonomy across all store channels.
                        </p>
                    </div>

                    {/* <div className="flex flex-wrap gap-3">
                        <button className="rounded-2xl border border-orange-200 bg-white px-6 py-4 text-lg font-semibold text-zinc-700 transition hover:shadow-md">
                            Export CSV
                        </button>

                        <button className="rounded-2xl border border-orange-200 bg-white px-6 py-4 text-lg font-semibold text-zinc-700 transition hover:shadow-md">
                            Refresh
                        </button>

                        <button className="rounded-2xl bg-orange-700 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-orange-200 transition hover:scale-[1.02]">
                            + New Category
                        </button>
                    </div> */}
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {stats.map((stat) => (
                        <div
                            key={stat.title}
                            className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"
                        >
                            <div className="flex items-start justify-between">
                                <div
                                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${stat.bg} ${stat.color}`}
                                >
                                    {stat.icon}
                                </div>

                                <div className="text-right">
                                    <span className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                                        {stat.badge}
                                    </span>
                                    <div className="mt-2">
                                        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-zinc-500">
                                            {stat.title}
                                        </p>
                                        <h2 className=" text-xl font-bold text-zinc-900">{stat.value}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="rounded-2xl border border-orange-100 bg-white p-2 shadow-sm">
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
                        <div className="flex-1 rounded-xl border border-zinc-200 bg-[#fafafa] px-5 py-2 text-sm text-zinc-500">
                            Search by name, slug...
                        </div>

                        <div className="flex flex-col gap-3 md:flex-row">
                            <button className="rounded-xl border border-zinc-200 bg-white px-6 py-2 text-sm font-semibold text-zinc-700">
                                Category Type
                            </button>

                            <button className="rounded-xl border border-zinc-200 bg-white px-6 py-2 text-sm font-semibold text-zinc-700">
                                Visibility: All
                            </button>

                            <button className="rounded-xl bg-zinc-900 px-8 py-2 text-sm font-bold text-white">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hidden overflow-hidden rounded-2xl border border-orange-100 bg-white xl:block">
                    <div className="grid grid-cols-7 border-b border-zinc-100 px-10 py-6 text-sm font-bold uppercase tracking-[0.1em] text-zinc-500">
                        <div>ID</div>
                        <div>Preview</div>
                        <div>Category Detail</div>
                        <div>Parent</div>
                        <div>Products</div>
                        <div>Featured</div>
                        <div>Status</div>
                    </div>

                    {categories.map((category) => (
                        <div
                            onClick={() => setSelectedProduct(category)}
                            key={category.id}
                            className="grid grid-cols-7 items-center border-b border-zinc-100 px-10 py-3 transition hover:bg-orange-50/30"
                        >
                            <div className="text-zinc-700">{category.id}</div>

                            <div>
                                <div className="h-14 w-14 rounded-lg bg-zinc-100" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-zinc-900">
                                    {category.name}
                                </h3>

                                <p className={` text-sm ${category.warning ? 'text-red-600' : 'text-zinc-500'}`} >
                                    {category.slug}
                                </p>
                            </div>

                            <div className="text-zinc-700">
                                {category.parent}
                            </div>

                            <div className=" font-bold text-zinc-900">
                                {category.products}
                            </div>

                            <div>
                                <span className="rounded-full border border-orange-200 bg-orange-50 px-4 py-0.5 text-xs text-orange-700">
                                    {category.featured}
                                </span>
                            </div>

                            <div>
                                <span
                                    className={`rounded-full px-5 py-0.5 text-xs ${category.status === 'Public'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-zinc-200 text-zinc-700'
                                        }`}
                                >
                                    {category.status}
                                </span>
                            </div>
                        </div>
                    ))}

                    <div className="flex items-center justify-between px-10 py-3">
                        <p className="text-sm font-semibold text-zinc-500">
                            Showing 1-10 of 128 categories
                        </p>

                        <div className="flex items-center gap-3">
                            {[1, 2, 3].map((page) => (
                                <button
                                    key={page}
                                    className={`h-10 w-10 rounded-lg border text-sm font-semibold ${page === 1
                                        ? 'border-orange-700 bg-orange-700 text-white'
                                        : 'border-orange-200 bg-white text-zinc-700'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-5 xl:hidden">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"
                        >
                            <div>
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex gap-4">
                                        <div className="h-24 w-24 rounded-2xl bg-zinc-100" />

                                        <div className='hidden sm:block'>
                                            <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
                                                {category.id}
                                            </p>

                                            <h3 className="mt-2 font-semibold text-zinc-900">
                                                {category.name}
                                            </h3>

                                            <p className={`text-sm ${category.warning ? 'text-red-600' : 'text-zinc-500'}`}>
                                                {category.slug}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`rounded-full px-4 py-o.5 text-sm ${category.status === 'Public'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-zinc-200 text-zinc-700'
                                            }`}
                                    >
                                        {category.status}
                                    </span>
                                </div>
                                <div className='block sm:hidden mt-4'>
                                    <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
                                        {category.id}
                                    </p>

                                    <h3 className="mt-2 font-semibold text-zinc-900">
                                        {category.name}
                                    </h3>

                                    <p className={`text-sm ${category.warning ? 'text-red-600' : 'text-zinc-500'}`}>
                                        {category.slug}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-[#fafafa] p-4">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-zinc-400">
                                        Parent
                                    </p>
                                    <p className="mt-2 text-zinc-700">
                                        {category.parent}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-zinc-400">
                                        Products
                                    </p>
                                    <p className="mt-2 font-semibold text-zinc-900">
                                        {category.products}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                    <div className="rounded-2xl border border-orange-100 bg-white p-8 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-zinc-900">
                                Category Insights
                            </h2>

                            <div className="text-2xl text-zinc-400">ⓘ</div>
                        </div>

                        <div className="mt-10 space-y-8">
                            <div>
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="font-semibold  text-zinc-700">
                                        Market Saturation
                                    </span>

                                    <span className="font-semibold text-sm text-orange-700">
                                        High (84%)
                                    </span>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
                                    <div className="h-full w-[84%] rounded-full bg-orange-700" />
                                </div>
                            </div>

                            <div>
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="font-semibold text-zinc-700">
                                        Consumer Demand
                                    </span>

                                    <span className="font-semibold text-sm text-green-600">
                                        Rising (+18%)
                                    </span>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
                                    <div className="h-full w-[65%] rounded-full bg-green-500" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 rounded-3xl bg-[#faf7f3] p-6">
                            <p className="text-sm italic leading-relaxed text-zinc-700">
                                “Performance Running is outperforming Streetwear by 2.4x this quarter.”
                            </p>
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-orange-100 bg-white p-8 shadow-sm">
                        <h2 className="text-xl font-bold text-red-600">
                            Moderation Alerts
                        </h2>

                        <div className="mt-10 space-y-8">
                            <div className="flex gap-4">
                                <div className="mt-2 h-3 w-3 rounded-full bg-red-600" />
                                <p className=" leading-relaxed text-zinc-700">
                                    3 Categories missing SEO descriptions and meta tags.
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-2 h-3 w-3 rounded-full bg-yellow-500" />
                                <p className="leading-relaxed text-zinc-700">
                                    Manual review request: ‘Sustainable Soles’ launch.
                                </p>
                            </div>
                        </div>

                        <button className="mt-16 w-full rounded-xl border border-orange-100 py-5 font-semibold text-zinc-700 transition hover:bg-orange-50">
                            View All Alerts
                        </button>
                    </div>

                    <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 text-white shadow-2xl">
                        <div className="flex items-center gap-3 text-orange-400">
                            <span className="text-2xl">✦</span>
                            <span className="text-xl font-bold">Velocity Taxonomy AI</span>
                        </div>

                        <p className="mt-8 leading-relaxed text-zinc-300">
                            Our AI suggests splitting ‘Activewear’ into sub-categories to increase organic relevance by 14%.
                        </p>

                        <div className="mt-10 space-y-4">
                            <button className="flex w-full items-center justify-between rounded-2xl border border-zinc-700 bg-zinc-800/70 px-5 py-5 text-left text-sm transition hover:border-orange-400">
                                <span>Create 'Urban Trekking'</span>
                                <span>›</span>
                            </button>

                            <button className="flex w-full items-center justify-between rounded-2xl border border-zinc-700 bg-zinc-800/70 px-5 py-5 text-left text-sm transition hover:border-orange-400">
                                <span>Merge 'Laces' with 'Extras'</span>
                                <span>›</span>
                            </button>
                        </div>

                        <button className="mt-10 w-full rounded-xl bg-orange-500 py-5 font-bold text-white shadow-lg shadow-orange-500/30 transition hover:scale-[1.02]">
                            Apply Recommendations ✦
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${selectedProduct
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                    }`}
                onClick={() => setSelectedProduct(null)}
            />

            {/* Drawer */}
            <div
                className={`fixed right-0 top-0 z-50 h-full w-full  overflow-y-hidden transition-all duration-300 flex flex-col lg:w-[760px] ${selectedProduct ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {selectedProduct && (<LineChartComponent setSelectedProduct={setSelectedProduct} />)}
            </div>
        </div>
    )
}


const LineChartComponent = ({ setSelectedProduct }) => {

    return (
        <div className="space-y-6 p-1.5 flex-1 flex flex-col">
            <div className="overflow-hidden rounded-l-xl border border-orange-100 bg-white shadow-2xl flex h-[98.5vh] flex-col">
                <div className="relative bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 p-8 text-white">
                    <div className="absolute inset-0 bg-black/25" />

                    <div className="relative z-10 flex h-full flex-col justify-between gap-3">
                        <div className="flex items-center justify-between">
                            <span className="rounded-full bg-orange-500 px-4 py-0.5 text-xs font-semibold uppercase tracking-wide">
                                Active
                            </span>

                            <button onClick={() => setSelectedProduct(null)} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl backdrop-blur-md transition hover:bg-white/30">
                                ×
                            </button>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">
                                High-Performance Basketball
                            </h2>

                            <p className="text-sm text-zinc-200">
                                /basketball-pro
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-10 p-5">
                    <div>
                        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                            <h3 className="text-xl font-bold text-zinc-900">
                                Category Performance
                            </h3>

                            <div className="flex gap-3">
                                {['7D', '30D', '90D'].map((range, index) => (
                                    <button
                                        key={range}
                                        className={`rounded-lg px-4 py-2 text-sm font-semibold ${index === 0
                                            ? 'bg-orange-100 text-orange-700'
                                            : 'bg-zinc-100 text-zinc-600'
                                            }`}
                                    >
                                        {range}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl border border-dashed border-orange-200 bg-[#fffdfb] p-4 md:p-6">
                            <ResponsiveContainer width="100%" height={260}>
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f1f1" />
                                    <XAxis
                                        dataKey="name"
                                        tick={{ fill: '#6b7280', fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#f97316"
                                        strokeWidth={4}
                                        dot={false}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="benchmark"
                                        stroke="#9ca3af"
                                        strokeDasharray="5 5"
                                        strokeWidth={3}
                                        dot={false}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                        {[
                            {
                                title: 'Monthly Sales',
                                value: '$89.2k',
                                growth: '+12.4%',
                                color: 'text-orange-700'
                            },
                            {
                                title: 'Conversion Rate',
                                value: '3.8%',
                                growth: '+0.5%',
                                color: 'text-green-600'
                            },
                            {
                                title: 'Total Products',
                                value: '432',
                                growth: '+8 new',
                                color: 'text-zinc-700'
                            }
                        ].map((card) => (
                            <div
                                key={card.title}
                                className="rounded-xl border border-orange-100 bg-[#fffefd] px-4 py-2"
                            >
                                <p className="text-sm font-semibold uppercase tracking-[0.05em] text-zinc-500">
                                    {card.title}
                                </p>
                                <div className="mt-4 flex justify-between items-center">
                                    <h3 className="font-semibold text-zinc-900">
                                        {card.value}
                                    </h3>

                                    <p className={`text-sm font-bold ${card.color}`}>
                                        {card.growth}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-zinc-900">
                                Top Products
                            </h3>

                            <button className="text-lg font-bold text-orange-700">
                                View All
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                            {[
                                {
                                    name: 'Velociraptor Pro V2',
                                    price: '$210.00',
                                    sold: '120 sold'
                                },
                                {
                                    name: 'Court-King Elite',
                                    price: '$185.00',
                                    sold: '98 sold'
                                }
                            ].map((item) => (
                                <div
                                    key={item.name}
                                    className="flex items-center gap-4 rounded-xl border border-orange-100 bg-white p-3"
                                >
                                    <div className="h-14 w-14 rounded-lg bg-zinc-100" />

                                    <div>
                                        <h4 className="font-semibold text-zinc-900">
                                            {item.name}
                                        </h4>

                                        <p className="text-sm text-zinc-500">
                                            {item.price} • {item.sold}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 text-xl font-bold text-zinc-900">
                            Top Category Sellers
                        </h3>

                        <div className="rounded-xl border border-orange-100 bg-white p-4">
                            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 font-semibold text-white">
                                        AS
                                    </div>

                                    <div>
                                        <h4 className=" font-semibold text-zinc-900">
                                            Apex Sports Co.
                                        </h4>

                                        <p className="text-sm text-zinc-500">
                                            Level 5 Seller
                                        </p>
                                    </div>
                                </div>

                                <div className="text-left md:text-right">
                                    <p className="text-xl font-black text-zinc-900">
                                        $24,500
                                    </p>

                                    <p className="mt-1 text-sm text-zinc-500">
                                        This Month
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 pb--8">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {[
                            {
                                label: 'Hide',
                                bg: 'bg-white',
                                text: 'text-zinc-700'
                            },
                            {
                                label: 'Edit',
                                bg: 'bg-white',
                                text: 'text-zinc-700'
                            },
                            {
                                label: 'Feature',
                                bg: 'bg-orange-500',
                                text: 'text-white'
                            },
                            {
                                label: 'Delete',
                                bg: 'bg-red-100',
                                text: 'text-red-600'
                            }
                        ].map((action) => (
                            <button
                                key={action.label}
                                className={`rounded-lg border border-orange-100 px-4 py-2 text-sm font-semibold transition hover:scale-[1.02] ${action.bg} ${action.text}`}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


const stats = [
    {
        title: 'Total Categories',
        value: '128',
        badge: '+4%',
        icon: '◈',
        color: 'text-orange-700',
        bg: 'bg-orange-50'
    },
    {
        title: 'Active',
        value: '112',
        badge: 'LIVE',
        icon: '✓',
        color: 'text-green-600',
        bg: 'bg-green-50'
    },
    {
        title: 'Featured',
        value: '12',
        badge: 'Top 10',
        icon: '★',
        color: 'text-yellow-600',
        bg: 'bg-yellow-50'
    },
    {
        title: 'Hidden',
        value: '16',
        badge: 'Drafts',
        icon: '◐',
        color: 'text-gray-500',
        bg: 'bg-gray-100'
    },
    {
        title: 'Flagged',
        value: '3',
        badge: 'ACTION REQ.',
        icon: '⚑',
        color: 'text-red-600',
        bg: 'bg-red-50'
    },
    {
        title: 'Avg Products',
        value: '420',
        badge: 'Efficiency',
        icon: '↗',
        color: 'text-blue-600',
        bg: 'bg-blue-50'
    }
]

const categories = [
    {
        id: '#CAT-881',
        name: 'Running Shoes',
        slug: 'performance-running-sneakers',
        parent: 'Footwear',
        products: '1,240',
        featured: 'TOP 10',
        status: 'Public',
        warning: false
    },
    {
        id: '#CAT-902',
        name: 'Basketball',
        slug: 'court-performance-basketball',
        parent: 'Footwear',
        products: '850',
        featured: '★',
        status: 'Public',
        warning: false
    },
    {
        id: '#CAT-412',
        name: 'Limited Editions',
        slug: 'Missing SEO Attributes',
        parent: 'Collections',
        products: '42',
        featured: '★',
        status: 'Hidden',
        warning: true
    }
]

const chartData = [
    { name: 'Mon', revenue: 32, benchmark: 24 },
    { name: 'Tue', revenue: 35, benchmark: 26 },
    { name: 'Wed', revenue: 31, benchmark: 23 },
    { name: 'Thu', revenue: 42, benchmark: 30 },
    { name: 'Fri', revenue: 58, benchmark: 41 },
    { name: 'Sat', revenue: 61, benchmark: 46 },
    { name: 'Sun', revenue: 74, benchmark: 58 }
]
