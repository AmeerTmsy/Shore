import { select } from 'framer-motion/client';
import React from 'react'
import { useSideBar } from '../../../../context/ProfileSideBarContext';

export default function SellerPorfile() {

    const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()

    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.href = "/"
    }

    return (
        <div className=" rounded-xl shadow-sm">
            {/* HEADER */}
            <div className='relative overflow-hidden mb-5 z-10'>
                <div className='p-28 -z-10 bg-[#006aff5e] absolute top-0 right-0 rounded-full transform -translate-y-6 translate-x-10' />
                <div className='p-20 -z-10 bg-[#006aff3f] absolute top-0 right-0 rounded-full transform  -translate-x-5' />
                <div className='flex justify-between px-6'>
                    <div className="flex pt-6 pb-6 rounded-t-sm items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                            {profile.user.name[0]}
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">{profile.user.name}</h2>
                            <p className="text-sm text-gray-500">
                                Seller since {profile.user.memberSince}
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
                    </div>
                </div>

                {/* BASIC INFO */}
                <div className='px-6  pb-5 shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)]'>
                    <h3 className="font-semibold mb-2">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <p className='font-medium'>Email: <span className='text-gray-700 font-normal'>{profile.user.email}</span></p>
                        <p className='font-medium'>Phone: <span className='text-gray-700 font-normal'>{profile.user.phone}</span></p>
                        <p className='font-medium'>Gender: <span className='text-gray-700 font-normal'>{profile.user.gender}</span></p>
                        <p className='font-medium'>DOB: <span className='text-gray-700 font-normal'>{profile.user.dob}</span></p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
                {/* LEFT SIDE */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* LAST ORDERS */}
                    <div className="rounded-xl border border-blue-100 shadow-md bg-white p-5 pb-3">
                        <div className="flex justify-between mb-4">
                            <h3 className="font-semibold">Latest Orders</h3>
                            <button className="text-orange-500 text-sm">View All</button>
                        </div>
                        <div className='w-full overflow-x-auto'>
                            <table className="w-full text-sm">
                                <thead className="text-gray-600">
                                    <tr>
                                        <th className='text-nowrap px-2 text-start  font-medium'>ID</th>
                                        <th className='text-nowrap px-2 font-medium'>Date</th>
                                        <th className='text-nowrap px-2 font-medium'>Customer</th>
                                        <th className='text-nowrap px-2 font-medium'>Amount</th>
                                        <th className='text-nowrap px-2 text-end font-medium'>Status</th>
                                    </tr>
                                </thead>
                                <tbody className='font-light'>
                                    {lastOrders.map((order) => (
                                        <tr key={order.id} className="border-t border-gray-200">
                                            <td className='text-nowrap px-2 py-0.5 text-start'>{order.id}</td>
                                            <td className='text-nowrap px-2 py-0.5 text-center'>{order.date}</td>
                                            <td className='text-nowrap px-2 py-0.5 text-center'>{order.customer}</td>
                                            <td className='text-nowrap px-2 py-0.5 text-center'>${order.amount}</td>
                                            <td className='text-nowrap px-2 py-0.5 text-end'>
                                                <span
                                                    className={`px-2 py-0 rounded font-normal text-xs ${order.status === "Delivered"
                                                        ? "bg-green-100 text-green-600"
                                                        : order.status === "Processing"
                                                            ? "bg-yellow-100 text-yellow-600"
                                                            : order.status === "Cancelled"
                                                                ? "bg-red-100 text-red-600"
                                                                : "bg-blue-100 text-blue-600"
                                                        }`}
                                                >{order.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className='text-end mt-2'>
                                <button>
                                    <span className='hover:underline cursor-pointer text-blue-500 text-xs font-normal flex items-center gap-0.5'>Explore all<svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* TOP PRODUCTS */}
                    <div className="bg-white rounded-xl border border-blue-100 shadow-md p-5">
                        <div className='flex justify-between items-center gap-2 mb-4'>
                            <h3 className="font-semibold">Top Selling Products</h3>
                            <button>
                                <span className='hover:underline cursor-pointer text-blue-500 text-xs font-normal flex items-center gap-0.5'>Explore all<svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                            </button>
                        </div>
                        <div className="flex gap-4 overflow-x-auto">
                            {topProducts.map((product, index) => (
                                <div key={index} className="min-w-[120px]">
                                    <img
                                        src={product.image}
                                        className="w-full h-24 object-cover rounded-lg"
                                    />
                                    <p className="text-sm mt-2 font-medium">{product.name}</p>
                                    <p className="text-xs text-gray-500">
                                        {product.sales} Sales
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='p-1 bg-gray-50 rounded-xl space-y-2 shadow-md  mb-6'>
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M7 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2M3.5 4A1.5 1.5 0 0 0 2 5.5v7A1.5 1.5 0 0 0 3.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 14.5 4zM3 5.5a.5.5 0 0 1 .5-.5H5v1a1 1 0 0 1-1 1H3zM3 8h1a2 2 0 0 0 2-2V5h6v1a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v1H6v-1a2 2 0 0 0-2-2H3zm10-3h1.5a.5.5 0 0 1 .5.5V7h-1a1 1 0 0 1-1-1zm2 6v1.5a.5.5 0 0 1-.5.5H13v-1a1 1 0 0 1 1-1zM5 13H3.5a.5.5 0 0 1-.5-.5V11h1a1 1 0 0 1 1 1zm12-.5a2.5 2.5 0 0 1-2.5 2.5H4.085A1.5 1.5 0 0 0 5.5 16h9a3.5 3.5 0 0 0 3.5-3.5v-5a1.5 1.5 0 0 0-1-1.415z"/></svg>
                                    </div>
                                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12.5%</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">REVENUE</p>
                                <h3 className="text-2xl font-black text-on-surface mt-1">$45,290.00</h3>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-orange-100 text-orange-500 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2l.917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8z"/></svg>
                                    </div>
                                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+.2%</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">TOTAL ORDERS</p>
                                <h3 className="text-2xl font-black text-on-surface mt-1">1,482</h3>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m3 17l6-6l4 4l8-8"/><path d="M17 7h4v4"/></g></svg>
                                    </div>
                                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+5.1%</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">PROFIT</p>
                                <h3 className="text-2xl font-black text-on-surface mt-1">$12,840.50</h3>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M15 6a1 1 0 0 1 1 1v2.207a5.5 5.5 0 0 0-1-.185V7h-3v2.6a5.5 5.5 0 0 0-1 .657V7H5v8a1.98 1.98 0 0 0 .586 1.414A2.02 2.02 0 0 0 7 17h2.6q.276.538.657 1H7q-.625 0-1.164-.234a3 3 0 0 1-.953-.641a3.1 3.1 0 0 1-.648-.953A2.9 2.9 0 0 1 4 15V7a1 1 0 0 1 1-1h1V4.5q0-.516.195-.969q.195-.46.539-.797q.336-.344.797-.539Q7.984 2 8.5 2q.421 0 .805.133q.384.134.703.375A2.44 2.44 0 0 1 11.5 2a2.48 2.48 0 0 1 2.305 1.531Q14 3.984 14 4.5V6zm-2-1.5q0-.312-.117-.586A1.48 1.48 0 0 0 11.5 3q-.46 0-.828.258A2.5 2.5 0 0 1 11 4.5V6h2zM7 6h3V4.5q0-.312-.117-.586A1.48 1.48 0 0 0 8.5 3q-.312 0-.586.117A1.48 1.48 0 0 0 7 4.5zm7.5 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-2.356-4.851l.003-.003l2-2a.5.5 0 0 1 .707.708L13.707 14H16.5a.5.5 0 0 1 0 1h-2.793l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1-.146-.351v-.006a.5.5 0 0 1 .144-.348"/></svg>
                                    </div>
                                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">+4.4%</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">RETURNS</p>
                                <h3 className="text-2xl font-black text-on-surface mt-1">42</h3>
                            </div>
                        </div>
                    </div>
                </div>







                {/* RIGHT SIDE */}
                <div className="flex flex-col gap-6">
                    {/* Critical Alerts */}
                    <div className="bg-white rounded-xl border border-blue-100 p-5">
                        <h3 className="font-semibold mb-4 flex gap-2">
                            <svg className='text-red-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.4" d="M12 16h.008M12 10v3m-1.425-7.783L3.517 17a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L13.426 5.217a1.666 1.666 0 0 0-2.85 0" /></svg>
                            Critical Alerts
                        </h3>
                        <div className="flex flex-col gap-4">
                            {criticalAlerts.map((item) => (
                                <div key={item.id} className="space-y-2 p-2 border-l-[2.5px] border-red-500 pl-3 bg-red-50 rounded-md cursor-pointer">
                                    <div className='flex justify-between'>
                                        <p className="text-xs text-medium text-gray-500">{item.reason}{` (${item.count})`}</p>
                                        <p className="text-xs text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z" /></g></svg></p>
                                    </div>
                                    <p className="text-xs text-gray-400">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* RETURNS */}
                    <div className="bg-white rounded-xl border border-blue-100 p-5">
                        <h3 className="font-semibold mb-4 flex gap-1 justify-between">
                            Last 5 Returns
                            <svg className='text-gray-500' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 640 640"><path fill="currentColor" d="M320 128c106 0 192 86 192 192s-86 192-192 192c-65.2 0-122.9-32.5-157.6-82.3c-10.1-14.5-30.1-18-44.6-7.9s-18 30.1-7.9 44.6C156.1 532.6 233 576 320 576c141.4 0 256-114.6 256-256S461.4 64 320 64c-85.7 0-161.5 42.1-208 106.7V144c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 17.7 14.3 32 32 32h112.1c17.7 0 32-14.3 32-32s-14.3-32-32-32h-38.3c33.1-57.4 95.2-96 166.2-96m24 88c0-13.3-10.7-24-24-24s-24 10.7-24 24v104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V216z" /></svg>
                        </h3>
                        <div className="flex flex-col gap-4">
                            {lastReturns.map((item, index) => (
                                <div key={item.id} className={`flex justify-between pb-2 ${index !== lastReturns.length - 1 ? 'border-b border-gray-200' : ''}`}>
                                    <div>
                                        <p className="text-sm font-medium">Order {item.id}</p>
                                        <p className="text-xs text-gray-500">{item.reason}</p>
                                    </div>
                                    <span className="text-xs text-gray-400">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Reviews */}
                    <div className="bg-white rounded-xl border border-blue-100 p-5">
                        <h3 className="font-semibold mb-4">Reviews to Consider</h3>
                        <div className="flex flex-col gap-4">
                            {reviews.map((item) => (
                                <div key={item.id} className="space-y-2 p-3 bg-gray-100 rounded-md">
                                    <dive className="text-xs text-yellow-500 flex gap-0.5">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="13"
                                                height="13"
                                                viewBox="0 0 24 24"
                                                fill={i < item.rating ? "currentColor" : "none"}
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        ))}
                                    </dive>
                                    <p className="text-xs text-gray-400 line-clamp-4">{item.response}</p>
                                    <div className='flex justify-between items-center gap-2'>
                                        <p className="text-sm font-medium">{item.brand}</p>
                                        <p className="text-xs font-medium text-orange-500">Respond</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ADDRESSES */}
            <div className='my-4 px-6'>
                <h3 className="font-semibold pb-3">Saved Addresses</h3>
                {profile.addresses.map((addr) => (
                    <div
                        key={addr.id}
                        className={`cursor-pointer shadow-md hover:shadow-lg transition rounded-lg p-3 mb-2 text-sm bg-gray-100  border border-blue-100`}
                    >
                        <div className="flex justify-between">
                            <p className="font-medium">{addr.type}</p>
                            {addr.selected && <span className="font-light inline-block pt-px text-xs bg-blue-100 text-blue-500 px-3 rounded-full">Selected</span>}
                        </div>
                        <p>{addr.address}</p>
                        <div className="flex justify-between">
                            <p className="text-gray-500">{addr.phone}</p>
                            {addr.default && (
                                <span className="text-xs text-green-600 px-2">Default</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* PREFERENCES */}
            <div className=' my-4 px-6'>
                <h3 className="font-semibold mb-2">Preferences</h3>
                <div className='flex gap-3 flex-wrap'>
                    <p className="text-sm">
                        Language: <span className='font-light'>{profile.preferences.language}</span>
                    </p>
                    <span className='text-sm font-bold'>|</span>
                    <p className="text-sm">
                        Currency: <span className='font-light'>{profile.preferences.currency}</span>
                    </p>
                </div>
            </div>
            {/* ACTIONS */}
            <div className="px-6 pb-6 ">
                <div className='flex justify- rounded-md gap-3 '>
                    <button onClick={handleLogout} className="border border-red-300 bg-red-100 text-red-700 hover:text-white hover:bg-red-500 transition duration-300 px-1.5 py-0.5 rounded cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M15 4v12h2V4zm-3 .688C7.346 6.338 4 10.788 4 16c0 6.617 5.383 12 12 12s12-5.383 12-12c0-5.213-3.346-9.662-8-11.313v2.157C23.526 8.39 26 11.91 26 16c0 5.514-4.486 10-10 10S6 21.514 6 16c0-4.09 2.474-7.61 6-9.156z" /></svg>
                    </button>
                    <button className="border border-blue-100 bg-blue-100 text-blue-600 hover:text-white hover:bg-blue-500 transition duration-300 px-4 py-0.5 rounded cursor-pointer">
                        Edit Profile
                    </button>
                </div>
            </div>

        </div>
    );
}


const profile = {
    user: {
        name: "Ameer Suhail",
        email: "ameer@gmail.com",
        phone: "+91 9876543210",
        gender: "Male",
        dob: "2003-06-12",
        memberSince: "2024",
    },

    stats: {
        orders: 12,
        wishlist: 8,
        reviews: 5,
    },

    addresses: [
        {
            id: 1,
            type: "Home",
            name: "Ameer Suhail",
            address: "Kozhikode, Kerala - 673001",
            phone: "+91 9876543210",
            selected: true,
            default: true,
        },
        {
            id: 2,
            type: "Work",
            name: "Ameer",
            address: "Cyber Park, Calicut",
            phone: "+91 9876543210",
            selected: false,
            default: false,
        },
    ],

    preferences: {
        language: "English",
        currency: "INR",
    },
};

const lastOrders = [
    {
        id: "#78942",
        date: "Oct 24, 2023",
        customer: "Marcus Wright",
        amount: 180,
        status: "Shipped",
    },
    {
        id: "#78941",
        date: "Oct 24, 2023",
        customer: "Sarah Jenkins",
        amount: 125.5,
        status: "Processing",
    },
    {
        id: "#78940",
        date: "Oct 23, 2023",
        customer: "David Chen",
        amount: 210,
        status: "Delivered",
    },
    {
        id: "#78939",
        date: "Oct 23, 2023",
        customer: "Elena Gomez",
        amount: 85,
        status: "Delivered",
    },
    {
        id: "#78938",
        date: "Oct 22, 2023",
        customer: "John Smith",
        amount: 315,
        status: "Cancelled",
    },
]

const topProducts = [
    {
        name: "Air Max",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        sales: 210,
    },
    {
        name: "Pegasus",
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
        sales: 180,
    },
    {
        name: "Classic Runner",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        sales: 165,
    },
    {
        name: "Street Sneaker",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
        sales: 140,
    },
    {
        name: "AJ Retro",
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
        sales: 120,
    },
]

const lastReturns = [
    {
        id: "#78920",
        reason: "Size too small",
        time: "2h ago",
    },
    {
        id: "#78811",
        reason: "Wrong color received",
        time: "5h ago",
    },
    {
        id: "#78795",
        reason: "Defective stitching",
        time: "1d ago",
    },
]

const reviews = [
    {
        id: "#78920",
        response: "Sole fell off after two weeks of light walking. Expected better quality...",
        brand: "Nike Air Max V1",
        rating: 2,
    },
    {
        id: "#78811",
        response: "Comfortable but the color is much darker than the photos...",
        brand: "NB 574 Legacy",
        rating: 3,
    },
]
const criticalAlerts = [
    {
        id: "#78920",
        reason: "Out of items",
        description: 'Customers cannot purchase these items.',
        count: 3,
    },
    {
        id: "#78811",
        reason: "Low in stock",
        description: 'Reorder soon to avoid stockouts.',
        count: 2,
    },
    {
        id: "#78795",
        reason: "Delivery delayed",
        description: 'Carrier delays reported in East Coast.',
        count: 1,
    },
]