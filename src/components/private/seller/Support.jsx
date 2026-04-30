import { div } from "framer-motion/client"
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";

const Support = () => {

    const statusColor = (status) => {
        if (status === "Resolved") return "bg-green-100 text-green-600"
        if (status === "Open") return "bg-blue-100 text-blue-600"
        return "bg-yellow-100 text-yellow-600"
    }

    const [showAnswer, setShowAnswer] = useState(null)

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            {/* HEADER */}
            <div>
                <h1 className="text-3xl font-semibold">Support Center</h1>
                <p className="text-gray-500">Get help with orders, returns, payments, and product issues.</p>
            </div>
            {/* SEARCH */}
            <div className="flex justify-between gap-2 border border-gray-400 rounded-xl overflow-hidden focus-within:border-orange-300 transition-colors duration-300 max-w-2xl">
                <input
                    placeholder="Search for help topics, order IDs, or common questions..."
                    className="flex-1 px-4 py-3 outline-none text-sm"
                />
                <button className="bg-orange-500 text-white px-6 m-1.5 rounded-lg">Search</button>
            </div>
            {/* ALERTS */}
            <div className="flex justify-between xl:justify-evenly flex-wrap gap-4">
                {alerts.map((a, i) => (
                    <div key={i} className={`flex justify-evenly gap-2 items-center p-4 rounded-xl flex-1 min-w-60 ${a.color}`}>
                        <p>{a.icon}</p>
                        <div>
                            <p className="text-sm font-normal">{a.title}</p>
                            <p className="text-xs font-light">{a.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* QUICK ACTIONS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((item, i) => (
                    <div key={i} className="p-6 bg-white border border-gray-300 rounded-xl text-center hover:shadow cursor-pointer flex flex-col items-center">
                        <span>{item.icon}</span>
                        <p className="text-sm mt-2">{item.title}</p>
                    </div>
                ))}
            </div>
            {/* MAIN GRID */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* LEFT */}
                <div className="lg:col-span-2 space-y-6">
                    {/* CATEGORIES */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Issue Categories</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {categories.map((c, i) => (
                                <div key={i} className=" bg-white shadow border border-gray-300 p-4 rounded-xl">
                                    <p className="font-medium">{c.title}</p>
                                    <p className="text-sm font-light text-gray-500">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="space-y-6">
                    {/* FAQ */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Common Questions</h2>
                        <div className="space-y-3">
                            <AnimatePresence>
                                {faqs.map((q, i) => (
                                    <div key={i} className={`border p-3 rounded-lg text-sm bg-white border-gray-300 hover:border-gray-500 transition-colors ${showAnswer === i ? "border-orange-300 shadow" : ""}`}>
                                        <div onClick={() => showAnswer === i ? setShowAnswer(null) : setShowAnswer(i)} className="flex justify-between items-center cursor-pointer">
                                            <p className="font-medium">{q.Q}</p>
                                            <svg className={`transform transition-transform duration-300 ${showAnswer === i ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M30 12L16 24L2 12"></path></svg>
                                        </div>
                                        {showAnswer === i &&
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-gray-500 mt-1">{q.A}</p>
                                            </motion.div>
                                        }
                                    </div>
                                ))}
                            </AnimatePresence>
                        </div>
                        <div className="text-blue-500 text-xs font-light mt-3 cursor-pointer flex justify-end items-center gap-1">
                            <span>View all FAQ's</span>
                            <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-10">
                {/*  TICKETS  */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Recent Support Tickets</h2>
                        <div className="text-blue-500 text-xs font-light mt-3 cursor-pointer flex justify-end items-center gap-1">
                            <span>View All Tickets</span>
                            <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg>
                        </div>
                    </div>
                    <div className="bg-[#ffffffea] border border-gray-200 shadow-md rounded-xl overflow-hidden">
                        <div className="grid grid-cols-5 px-6 py-3 text-sm font-medium text-gray-500 border-b-2 border-gray-300 bg-gray-50">
                            <p>TICKET ID</p>
                            <p className="col-span-2">TITLE</p>
                            <p>STATUS</p>
                            <p>LAST UPDATED</p>
                        </div>
                        {tickets.map((t, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-5 px-6 py-3 items-center border-b border-gray-200 last:border-none hover:bg-gray-50 transition text-sm font-light"
                            >
                                <p className="text-gray-600">{t.id}</p>
                                <p className="col-span-2 font-light text-gray-800">{t.title}</p>
                                <div>
                                    <span
                                        className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[t.status]}`}
                                    >{t.status.toUpperCase()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-500 text-sm">{t.time}</p>
                                    <span className="text-gray-400 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"></path></g></svg></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border rounded-xl p-8 shadow-sm">
                        <h3 className="text-2xl font-semibold mb-3">Need direct help?</h3>
                        <p className="text-gray-500 mb-6">Our support specialists are available 24/7 to assist with complex merchant issues.</p>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">💬 Start Live Chat</button>
                            <button className="flex items-center gap-2 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition">✉️ Email Support</button>
                        </div>
                    </div>
                    <div className="border-2 border-dashed rounded-xl p-8 text-center bg-white">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center text-orange-500 text-xl">⬆</div>
                        <h3 className="text-lg font-semibold mb-2">Report a Defective Product</h3>
                        <p className="text-gray-500 mb-6 text-sm">Upload images showing production defects to expedite your claim process.</p>
                        <button className="px-6 py-3 border rounded-lg hover:bg-gray-50 transition">Choose Files</button>
                        <p className="text-xs text-gray-400 mt-4">MAX 10MB PER FILE. JPG, PNG SUPPORTED.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Support

const alerts = [
    {
        title: "3 returns pending refund",
        desc: "Processing window expires in 48h",
        color: "bg-blue-50 text-blue-600 border border-blue-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}><path d="M44.465 39.743c-.208 2.555-2.163 4.51-4.718 4.718c-3.229.262-8.38.539-15.743.539c-7.364 0-12.515-.277-15.743-.539c-2.555-.208-4.51-2.163-4.718-4.718c-.262-3.228-.54-8.379-.54-15.743s.278-12.515.54-15.743C3.75 5.702 5.706 3.747 8.26 3.54C11.49 3.277 16.64 3 24.004 3s12.515.277 15.743.539c2.555.208 4.51 2.163 4.718 4.718c.262 3.228.539 8.379.539 15.743s-.277 12.515-.54 15.743"></path><path d="M23.2 14.383c.057 1.413 1.282 2.286 2.696 2.335c1.537.053 2.6.048 4.142.04l1.27-.006a1 1 0 0 1 1 .999v9.134a1 1 0 0 1-1.038.999c-4.059-.155-8.851-.332-12.98-.406a62 62 0 0 0-.107-2.282c-.084-1.248-1.272-1.793-2.271-1.04a55 55 0 0 0-2.915 2.38c-1.712 1.486-2.693 2.602-3.246 3.347c-.51.687-.51 1.56 0 2.248c.553.745 1.533 1.86 3.246 3.347a55 55 0 0 0 2.915 2.379c.999.753 2.187.208 2.271-1.04c.043-.635.083-1.425.11-2.401c3.433-.145 8.833-.356 13.705-.472c3.31-.08 5.995-2.769 5.998-6.08l.01-10.81a6.05 6.05 0 0 0-6-6.048a131 131 0 0 0-6.11.075c-1.413.051-2.64.921-2.696 2.335a12 12 0 0 0 0 .967"></path></g></svg>
    },
    {
        title: "2 orders delayed",
        desc: "Check logistics provider status",
        color: "bg-red-50 text-red-600 border border-red-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M19.5 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2 12v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201m10 0h-5m5.5-2V9c0-1.414 0-2.121-.44-2.56C14.122 6 13.415 6 12 6h-1m4.5 2.5h1.801c.83 0 1.245 0 1.589.195c.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728c.054.197.054.403.054.816V17c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201M7.85 7.85l-1.35-.9V4.7M2 6.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0"></path></g></svg>
    },
    {
        title: "Low stock items detected",
        desc: "4 SKUs under threshold limit",
        color: "bg-yellow-50 text-yellow-600 border border-yellow-200",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 16c1.66 0 3-1.34 3-3c0-1.12-.61-2.1-1.5-2.61L3.79 4.77l5.53 9.58c.5.98 1.51 1.65 2.68 1.65m0-13c-1.81 0-3.5.5-4.97 1.32l2.1 1.21C10 5.19 11 5 12 5c4.42 0 8 3.58 8 8c0 2.21-.89 4.21-2.34 5.65h-.01a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.42.01A9.97 9.97 0 0 0 22 13c0-5.5-4.5-10-10-10M2 13c0 2.76 1.12 5.26 2.93 7.07c.39.38 1.02.38 1.41-.01a.996.996 0 0 0 0-1.41A7.95 7.95 0 0 1 4 13c0-1 .19-2 .54-2.9L3.33 8C2.5 9.5 2 11.18 2 13"></path></svg>
    },
]

const quickActions = [
    { title: "Track Order", icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.8}><rect width={14} height={17} x={5} y={4} rx={2}></rect><path strokeLinecap="round" d="M9 9h6m-6 4h6m-6 4h4"></path></g></svg> },
    { title: "Check Return Status", icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></g></svg> },
    { title: "Contact Support", icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4c1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10" strokeWidth={0} stroke="currentColor"></path></svg> },
    { title: "Report Product Issue", icon: <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24"><path fill="currentColor" d="M12 16.423q.262 0 .439-.182t.176-.433t-.177-.434t-.438-.182t-.438.182t-.177.434t.177.433t.438.182m.357-3.105q.143-.144.143-.356V7.885q0-.213-.144-.357t-.357-.143t-.356.143t-.143.357v5.077q0 .212.144.356t.357.144t.356-.144M9.344 20q-.331 0-.632-.13t-.518-.349L4.48 15.806q-.217-.217-.348-.518T4 14.656V9.344q0-.331.13-.632t.349-.518L8.194 4.48q.217-.218.518-.348T9.344 4h5.312q.331 0 .632.13t.518.349l3.715 3.715q.218.217.348.518t.131.632v5.312q0 .331-.13.632t-.349.518l-3.715 3.715q-.217.218-.518.348t-.632.131zM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8zm2.9-7" strokeWidth={0.8} stroke="currentColor"></path></svg> },
]
const categories = [
    { title: "Orders", desc: "Cancellations, modifications, and order history." },
    { title: "Returns", desc: "Process, policies, and exchange requests." },
    { title: "Payments", desc: "Billing, invoices, and payment failures." },
    { title: "Products", desc: "Sizing charts, materials, and availability." },
    { title: "Shipping", desc: "Tracking, delivery estimates, and carriers." },
    { title: "Account", desc: "Security, profile settings, and data privacy." },
]

const faqs = [
    { Q: "How long do refunds take?", A: "Refunds typically take 5-7 business days to process after we receive the returned item." },
    { Q: "Can I change shipping address?", A: "Yes, you can change the shipping address before the item is shipped. Please contact our support team immediately." },
    { Q: "Return window for holiday items?", A: "Holiday items can be returned within 30 days of purchase, subject to our return policy." },
    { Q: "How to handle damaged stock?", A: "If you receive damaged stock, please contact our support team with photos of the damage and we will assist you with a replacement or refund." },
]

const tickets = [
    {
        id: "#TK-88421",
        title: "Incorrect bulk pricing for Winter Air Max",
        status: "Resolved",
        time: "2 hours ago",
    },
    {
        id: "#TK-88390",
        title: "API integration sync failure on Shopify",
        status: "Open",
        time: "5 hours ago",
    },
    {
        id: "#TK-88352",
        title: "Return request for Order #SH-9921",
        status: "Pending",
        time: "1 day ago",
    },
]

const statusStyles = {
    Resolved: "bg-green-100 text-green-700",
    Open: "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
}