import {
    BarChart,
    Bar,
    XAxis,
    ResponsiveContainer,
} from "recharts";
import { AlertTriangle, Lightbulb } from "lucide-react";

const sizeData = [
    { size: 6, value: 20 },
    { size: 7, value: 30 },
    { size: 8, value: 55 },
    { size: 9, value: 70 },
    { size: 10, value: 65 },
    { size: 11, value: 40 },
    { size: 12, value: 25 },
    { size: 13, value: 15 },
];

export default function ProductPerformance() {
    return (
        <div className="p-6 min-h-screen space-y-6">

            {/* HEADER */}
            <div>
                <h1 className="text-2xl font-bold">Product Performance</h1>
                <p className="text-gray-500">
                    Analyze individual product success and identify improvement opportunities.
                </p>
            </div>

            {/* TOP PERFORMERS */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Top Performers</h2>
                    <button className="text-orange-500 text-sm">
                        <span className='hover:underline cursor-pointer text-blue-500 text-xs font-normal flex items-center gap-0.5'>View All Rankings<svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-2 lg:gap-6">
                    {topPerformersData.map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl shadow-sm">
                            <div className="h-32 bg-gray-100 rounded-lg mb-4 relative">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center rounded-lg" />
                                {item.badge && (
                                    <span className="absolute top-2 right-2 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">
                                        {item.badge}
                                    </span>
                                )}
                            </div>

                            <h3 className="font-semibold text-base lg:text-lg">{item.name}</h3>

                            <div className="flex justify-between gap-1 mt-2 text-xs lg:text-sm text-gray-500">
                                <span>Total Revenue</span>
                                <span className="text-end">Units Sold</span>
                            </div>

                            <div className="flex justify-between text-sm lg:text-md font-semibold">
                                <span>{item.revenue}</span>
                                <span>{item.units}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* LOW PERFORMERS + RETURNS */}
            <div className="grid lg:grid-cols-2 gap-6">

                {/* LOW PERFORMERS */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="font-semibold mb-4 flex items-center gap-2  text-lg">
                        <AlertTriangle className="text-red-500" size={24} />
                        Action Required: Low Performers
                    </h2>

                    {actionRequiredProducts.map((item) => (
                        <div key={item.name} className="bg-gray-50 p-4 rounded-lg mb-3 flex justify-between items-center">
                            <div className="flex gap-2">
                                <img className="w-10 rounded" src={item.image} alt={item.name} />
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-xs font-light text-gray-600">{item.sales} sales last 30 days</p>
                                </div>
                            </div>
                            <div className=" flex flex-col items-end">
                                <p className="text-red-500 font-semibold">{item.change}</p>
                                <span className="text-xs text-gray-600 font-light">vs Prev Month</span>
                            </div>
                        </div>
                    ))}

                    <button className="w-full mt-4 border border-[#ff81386d] hover:bg-[#ff81386d] text-orange-500 hover:text-black transition cursor-pointer py-2 rounded-lg">
                        OPTIMIZE CAMPAIGNS
                    </button>
                </div>

                {/* RETURN ANALYSIS */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="font-semibold mb-4 text-lg">Return Analysis</h2>

                    {returnAnalysisData.map((item) => (
                        <div key={item.label} className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                                <span>{item.label}</span>
                                <span>{item.value}%</span>
                            </div>
                            <div className="h-1.5 bg-gray-200 rounded-full shadow-inner">
                                <div
                                    className={`h-1.5 rounded-full ${item.value >= 60
                                        ? "bg-red-500"
                                        : item.value >= 40
                                            ? "bg-orange-500"
                                            : item.value >= 20
                                                ? "bg-yellow-400"
                                                : "bg-green-500"
                                        }`}
                                    style={{ width: `${item.value}%` }}
                                />
                            </div>
                            <p className="text-xs font-light text-gray-600 mt-1">Impacts: {item.impacts}</p>
                        </div>
                    ))}

                    <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-700 flex items-start gap-2">
                        <span className="inline-block mt-1"><Lightbulb size={24} strokeWidth={1.25} /></span>
                        <p className="text-xs font-light tracking-wide">
                            Consider adding a "Runs Small" badge to the Apex Velocity Pro product page to reduce size-related returns by an estimated 15%.
                        </p>
                    </div>
                </div>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 font-semibold text-lg">Detailed Performance Breakdown</div>
                <div className="w-full overflow-x-auto">
                    <table className="min-w-[750px] w-full text-sm border-2 border-gray-50">
                        <thead className="bg-gray-50 text-gray-500">
                            <tr>
                                <th className="p-3 text-left">Product</th>
                                <th>Revenue</th>
                                <th>Units</th>
                                <th>Margin</th>
                                <th>Status</th>
                                <th>Returns</th>
                            </tr>
                        </thead>

                        <tbody>
                            {productsPerformanceData.map((row) => (
                                <tr key={row.name} className="border-t border-gray-100 hover:bg-gray-50 transition">
                                    <td className="p-3">{row.name}</td>
                                    <td className="text-center">{row.rev}</td>
                                    <td className="text-center">{row.units}</td>
                                    <td className="text-green-500 text-center">{row.margin}</td>
                                    <td className="text-center">
                                        <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="text-center">{row.returns}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end text-sm p-2 bg-gray-100 text-gray-500 cursor-pointer">
                    <span className='hover:underline cursor-pointer text-blue-500 text-xs font-normal flex items-center gap-0.5'>Load More Products<svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                </div>
            </div>

            {/* SIZE CHART */}
            <h2 className="font-semibold text-xl mb-4">Performance by Shoe Size</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={sizeData}>
                        <XAxis dataKey="size" />
                        <Bar
                            dataKey="value"
                            fill="#f97316"
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-4 border-t border-gray-200 pt-4">
                    <div className="text-center lg:text-left">
                        <h4 className="font-semibold">Stock Optimization Alert</h4>
                        <p className="text-sm font-light text-gray-500">
                            Sizes 8, 9, and 10 account for 65% of total sales volume. Recommend increasing inventory buffer by 20% for these variants.
                        </p>
                    </div>
                    <div>
                        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-nowrap">
                            Update Inventory Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const productsPerformanceData = [
    { name: "Apex Velocity Pro", rev: "$142,500", units: 850, margin: "64%", status: "IN STOCK", returns: "2.4%" },
    { name: "Urban Pulse X", rev: "$98,200", units: 620, margin: "58%", status: "LOW STOCK", returns: "4.1%" },
    { name: "Terra Trekker Elite", rev: "$76,400", units: 410, margin: "52%", status: "IN STOCK", returns: "1.8%" },
]

const returnAnalysisData = [
    { label: "Sizing Inconsistency", impacts: 'Apex Velocity, Urban Pulse', value: 45 },
    { label: "Material Quality", impacts: 'Cloud Walker Slate', value: 28 },
]

const actionRequiredProducts = [
    { name: "Zenith Runner '23", change: "-42%", sales: 12, image: 'https://images.unsplash.com/photo-1561909848-977d0617f275?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: "Cloud Walker Slate", change: "-15%", sales: 8, image: 'https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8MnwwfHx8MA%3D%3D' },
]

const topPerformersData = [
    { name: "Apex Velocity Pro", revenue: "$142,500", units: 850, badge: "#1 Seller", image: 'https://images.unsplash.com/photo-1561909848-977d0617f275?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: "Urban Pulse X", revenue: "$98,200", units: 620, image: 'https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8MnwwfHx8MA%3D%3D' },
    { name: "Terra Trekker Elite", revenue: "$76,400", units: 410, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]