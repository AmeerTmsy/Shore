import { ChevronDown, ChevronLeft, ChevronRight, Circle, CircleCheck, Clock3, Download, EllipsisVertical, Filter, PackageCheck, Plus, Search, ShoppingCart, Truck, XCircle, } from "lucide-react";
import { useEffect, useState } from "react";

export default function AllOrders() {

    const [orders, setOrders] = useState(dummyOrders)
    const [selectedOrders, setSelectedOrders] = useState([])
    
    const isAllSelected = () => orders.every(order => selectedOrders.includes(order.id))
    
    const orderSelection = (all = false, orderId) => {
        if (all) {
            setSelectedOrders(isAllSelected() ? [] : orders.map((order) => order.id));
        } else {
            setSelectedOrders((prev) =>
                prev.includes(orderId)
                    ? prev.filter((itemId) => itemId !== orderId)
                    : [...prev, orderId]
            );
        }
    };

    // useEffect(() => {
    //     console.log(selectedOrders)
    // }, [selectedOrders])

    return (
        <div className="min-h-screen bg-[#f7f8fa] p-4 md:p-6">
            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Orders</h1>
                    <p className="mt-2 text-base text-gray-500">Monitor and manage platform-wide commerce transactions</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-orange-500 bg-white px-6 py-4 text-sm font-semibold text-orange-600 transition hover:bg-orange-50">
                        <Download size={18} />Export CSV
                    </button>
                    <button className="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-orange-600">
                        <Plus size={18} />Manual Order
                    </button>
                </div>
            </div>
            {/* ================================================= */}
            {/* STATS */}
            {/* ================================================= */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                        <div className="flex justify-between items-center">
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}
                            >{item.icon}
                            </div>
                            <div className="text-end">
                                <p className="text-sm font-medium text-gray-500">{item.title}</p>
                                <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900">{item.value}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* ================================================= */}
            {/* TABLE WRAPPER */}
            {/* ================================================= */}
            <div className="mt-8 overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm">
                {/* ================================================= */}
                {/* FILTER BAR */}
                {/* ================================================= */}
                <div className="border-b border-orange-100 p-5">
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                        {/* SEARCH */}
                        <div className="relative flex-1">
                            <Search
                                size={20}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Search Order ID, Customer, or Seller..."
                                className="h-10 w-full rounded-lg border border-orange-200 bg-white pl-14 pr-4 text-sm outline-none transition focus:border-orange-400"
                            />
                        </div>
                        {/* ACTIONS */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button className="flex h-10 items-center justify-center gap-2 rounded-lg border border-orange-200 bg-white px-6 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                                <Filter size={18} />Filters
                            </button>
                            <button className="flex h-10 items-center justify-center gap-2 rounded-lg border border-orange-200 bg-white px-6 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                                Bulk Actions<ChevronDown size={18} />
                            </button>
                            <div className="flex items-center border-l border-gray-400 pl-5 pe-2 rounded-r-md my-0.5 bg-gray-100 text-sm font-medium text-gray-500">Showing 1-15 of 1,284</div>
                        </div>
                    </div>
                </div>
                {/* ================================================= */}
                {/* DESKTOP TABLE */}
                {/* ================================================= */}
                <div className="hidden overflow-x-auto xl:block">
                    <table className="w-full min-w-[1200px]">
                        <thead className="border-b border-orange-100 bg-[#fcfcfc]">
                            <tr>
                                <th className="px-6 py-5 text-left">
                                    <div onClick={() => orderSelection(true)} className=" text-green-500" >
                                        {isAllSelected() ?
                                            <CircleCheck className="text-green-400" />
                                            :
                                            <Circle className="text-gray-400" />
                                        }
                                    </div>
                                </th>
                                {[
                                    "ORDER ID",
                                    "CUSTOMER",
                                    "SELLER",
                                    "PRODUCT",
                                    "DATE",
                                    "PAYMENT",
                                    "DELIVERY",
                                    "TOTAL",
                                ].map((item) => (
                                    <th
                                        key={item}
                                        className="px-3 py-1 text-left text-sm font-bold tracking-wide text-gray-600"
                                    >{item}</th>
                                ))}
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-orange-50 transition hover:bg-orange-50/30"
                                >
                                    <td className="ps-6 px-2 py-1">
                                        <div onClick={() => orderSelection(false, order.id)}>
                                            {selectedOrders.includes(order.id) ?
                                                <CircleCheck className="text-green-300" />
                                                :
                                                <Circle className="text-gray-400" />
                                            }
                                        </div>
                                    </td>
                                    <td className="px-2 py-1">
                                        <p className="font-bold text-orange-700">{order.id}</p>
                                    </td>
                                    <td className="px-2 py-1">
                                        <h3 className="font-semibold text-gray-900">{order.customer}</h3>
                                        <p className="mt-1 text-sm text-gray-500">{order.email}</p>
                                    </td>
                                    <td className="px-2 py-1">
                                        <div className="inline-flex rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">{order.seller}</div>
                                    </td>
                                    <td className="px-2 py-1">
                                        <div className="flex items-center gap-2 border border-orange-200 bg-gray-50 rounded-md">
                                            <div className="flex p-2 items-center justify-center rounded-2xl">
                                                👟
                                            </div>

                                            <p className="border-l border-gray-400 ps-2 font-semibold text-gray-900">{order.product}</p>
                                        </div>
                                    </td>
                                    <td className="px-2 py-1 text-base font-medium text-gray-700">{order.date}</td>
                                    <td className="px-2 py-1">
                                        <span
                                            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ${paymentBadge(
                                                order.payment
                                            )}`}
                                        >{order.payment}</span>
                                    </td>
                                    <td className="px-2 py-1">
                                        <span
                                            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ${deliveryBadge(
                                                order.delivery
                                            )}`}
                                        >{order.delivery}</span>
                                    </td>
                                    <td className="px-2 py-1 text-gray-900">{order.total}</td>
                                    <td className="pe-6 px-2 py-1">
                                        <button className="rounded-xl p-2 transition hover:bg-gray-100"><EllipsisVertical size={20} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* ================================================= */}
                {/* MOBILE CARDS */}
                {/* ================================================= */}
                <div className="space-y-4 p-4 xl:hidden">
                    {orders.map((order, index) => (
                        <div
                            key={index}
                            className="rounded-3xl bg-white p-5 shadow-md"
                        >
                            {/* TOP */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-lg font-bold text-orange-700">{order.id}</p>
                                    <h3 className="mt-2 text-xl font-bold text-gray-900">{order.customer}</h3>
                                    <p className="mt-1 text-sm text-gray-500">{order.email}</p>
                                </div>
                                <button className="rounded-xl p-2 transition hover:bg-gray-100"><EllipsisVertical size={18} /></button>
                            </div>
                            {/* PRODUCT */}
                            <div className="mt-5 flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-200 bg-white">
                                    👟
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{order.seller}</p>
                                    <h4 className="text-lg font-semibold text-gray-900">{order.product}</h4>
                                </div>
                            </div>
                            {/* STATUS */}
                            <div className="mt-5 flex flex-wrap gap-3">
                                <span
                                    className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ${paymentBadge(order.payment)}`}
                                >{order.payment}</span>
                                <span
                                    className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ${deliveryBadge(order.delivery)}`}
                                >{order.delivery}</span>
                            </div>
                            {/* DETAILS */}
                            <div className="mt-5 grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Date</p>
                                    <p className="mt-1 text-sm font-medium text-gray-700">{order.date}</p>
                                </div>
                                <div className="text-end">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Total</p>
                                    <p className="mt-1 text-lg font-bold text-gray-900">{order.total}</p>
                                </div>
                            </div>
                            {/* ACTIONS */}
                            <div className="mt-6 flex gap-3">
                                <button className="flex-1 rounded-2xl border border-orange-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                                    View
                                </button>
                                <button className="flex-1 rounded-2xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                                    Manage
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* ================================================= */}
                {/* PAGINATION */}
                {/* ================================================= */}
                <div className="border-t border-orange-100 p-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <button className="flex items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-white px-6 py-4 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                            <ChevronLeft size={18} />Previous
                        </button>
                        <div className="flex items-center justify-center gap-2">
                            <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-700 text-sm font-bold text-white">
                                1
                            </button>
                            {[2, 3].map((page) => (
                                <button
                                    key={page}
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
                                >
                                    {page}
                                </button>
                            ))}
                            <span className="px-2 text-gray-400">...</span>
                            <button className="flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold text-gray-600 transition hover:bg-gray-100">
                                86
                            </button>
                        </div>
                        <button className="flex items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-white px-6 py-4 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                            Next<ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


const dummyOrders = [
    {
        id: "#SA-88210",
        customer: "Jordan Smith",
        email: "jordan.s@email.com",
        seller: "UrbanKicks",
        product: "Nike Air Max 270",
        date: "Oct 24, 2023",
        payment: "Paid",
        delivery: "Shipped",
        total: "$189.99",
    },

    {
        id: "#SA-88209",
        customer: "Elena Rodriguez",
        email: "elena.rod@webmail.com",
        seller: "Elite Sole",
        product: "Adidas Ultraboost",
        date: "Oct 24, 2023",
        payment: "Pending",
        delivery: "Processing",
        total: "$220.00",
    },

    {
        id: "#SA-88208",
        customer: "Marcus Thorne",
        email: "m.thorne@corp.com",
        seller: "UrbanKicks",
        product: "New Balance 990v5",
        date: "Oct 23, 2023",
        payment: "Paid",
        delivery: "Delivered",
        total: "$175.50",
    },
];

const stats = [
    {
        title: "Total Orders",
        value: "1,284",
        icon: <ShoppingCart size={22} />,
        bg: "bg-orange-100",
        color: "text-orange-600",
    },

    {
        title: "Pending",
        value: "42",
        icon: <Clock3 size={22} />,
        bg: "bg-indigo-100",
        color: "text-indigo-600",
    },

    {
        title: "Processing",
        value: "18",
        icon: <PackageCheck size={22} />,
        bg: "bg-gray-100",
        color: "text-gray-600",
    },

    {
        title: "Shipped",
        value: "956",
        icon: <Truck size={22} />,
        bg: "bg-orange-100",
        color: "text-orange-600",
    },

    {
        title: "Delivered",
        value: "1,156",
        icon: <PackageCheck size={22} />,
        bg: "bg-green-100",
        color: "text-green-600",
    },

    {
        title: "Cancelled",
        value: "68",
        icon: <XCircle size={22} />,
        bg: "bg-red-100",
        color: "text-red-600",
    },
];

const paymentBadge = (status) => {
    if (status === "Paid") {
        return "bg-green-100 text-green-700";
    }

    return "bg-yellow-100 text-yellow-700";
};

const deliveryBadge = (status) => {
    if (status === "Delivered") {
        return "bg-green-100 text-green-700";
    }

    if (status === "Shipped") {
        return "bg-orange-100 text-orange-700";
    }

    return "bg-gray-200 text-gray-700";
};