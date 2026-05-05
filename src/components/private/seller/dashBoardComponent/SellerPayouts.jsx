import { BanknoteArrowUp } from "lucide-react";
import { useState } from "react";

export default function SellerPayouts() {
    const [showDetails, setShowDetails] = useState(true);

    return (
        <div className="p-4 md:p-6 space-y-6">

            {/* HEADER */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold">Payouts</h1>
                <p className="text-gray-500 text-sm">Manage your earnings and schedule withdrawals</p>
            </div>

            {/* ALERT */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex justify-between flex-wrap items-start gap-4">
                <div className="flex gap-3">
                    <svg className="text-red-600 mt-1" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 2048 2048"><path fill="currentColor" d="M960 0q133 0 255 34t230 96t194 150t150 195t97 229t34 256q0 133-34 255t-96 230t-150 194t-195 150t-229 97t-256 34q-133 0-255-34t-230-96t-194-150t-150-195t-97-229T0 960q0-133 34-255t96-230t150-194t195-150t229-97T960 0m0 1792q114 0 220-30t199-84t169-130t130-168t84-199t30-221t-30-220t-84-199t-130-169t-168-130t-199-84t-221-30q-115 0-221 30t-198 84t-169 130t-130 168t-84 199t-30 221q0 114 30 220t84 199t130 169t168 130t199 84t221 30M896 512h128v640H896zm0 768h128v128H896z" strokeWidth={27} stroke="currentColor"></path></svg>
                    <div>
                        <p className="text-red-500 font-medium">
                            Last payout failed due to bank processing error.
                        </p>
                        <p className="text-sm text-red-500">
                            Please verify your details.
                        </p>
                    </div>
                </div>
                <div className="flex-1 text-end self-center">
                    <button className="font-medium hover:underline text-nowrap">
                        <span className=' hover:underline cursor-pointer text-red-500 text-sm font-normal flex items-center gap-0.5'>Resolve Issue<svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                    </button>
                </div>
            </div>

            {/* TOP CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* Available */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <p className="text-sm text-gray-500">AVAILABLE BALANCE</p>
                    <h2 className="text-2xl font-bold text-orange-600">$12,482.50</h2>
                    <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition flex justify-center items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.4}><path d="m18.935 13.945l-.67-3.648c-.29-1.576-.435-2.364-1.008-2.83S15.86 7 14.213 7H9.787c-1.647 0-2.47 0-3.044.467c-.573.466-.718 1.254-1.008 2.83l-.67 3.648c-.6 3.271-.901 4.907.024 5.98C6.014 21 7.724 21 11.142 21h1.716c3.418 0 5.128 0 6.053-1.074s.625-2.71.024-5.98Z"></path><path strokeLinejoin="round" d="M12 10.5V17m-2.5-2l2.5 2.5l2.5-2.5"></path><path d="M21 11a1.5 1.5 0 0 0 .414-.305C22 10.089 22 9.11 22 7.152s0-2.936-.586-3.544S19.886 3 18 3H6c-1.886 0-2.828 0-3.414.608S2 5.195 2 7.152s0 2.936.586 3.543q.18.188.414.305"></path></g></svg>
                        Withdraw Now
                    </button>
                </div>

                {/* Pending */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col">
                    <p className="text-sm text-gray-500">PENDING BALANCE</p>
                    <h2 className="text-2xl font-bold">$3,210.00</h2>
                    <div className="flex-1 flex items-end">
                        <p className="text-xs text-gray-500 mt-2 bg-gray-100 px-2 py-1 rounded w-full flex items-center gap-2">
                            <BanknoteArrowUp size={19} /> Earnings from 14 recent orders
                        </p>
                    </div>
                </div>

                {/* Next payout */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col">
                    <p className="text-sm text-gray-500">NEXT PAYOUT</p>
                    <h2 className="text-2xl font-bold">$5,120.00</h2>
                    <div className="flex-1 flex items-end">
                        <p className="text-xs text-orange-500 mt-2 w-full flex items-center gap-2 bg-orange-50 px-2 py-1 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.4}><path strokeLinecap="round" strokeLinejoin="round" d="M3.171 12.79h2.5a.485.485 0 0 1 .5.523v9.41a.483.483 0 0 1-.5.522h-2.5"></path><path strokeLinecap="round" strokeLinejoin="round" d="M10.322 10.584L8.4 12.977a1.4 1.4 0 0 1-1.045.523H6.171m0 7.03c2.144 1.625 4.1 2.716 5.363 2.716h6.273c.76 0 1.238-.054 1.568-1.045c.504-2.53.853-5.088 1.046-7.66c0-.522-.523-1.045-1.568-1.045h-5.932m-2.367-1.291L9.006 1.373a.546.546 0 0 1 .54-.623H17.1"></path><path strokeLinecap="round" strokeLinejoin="round" d="m13.839 13.5l-.916-9.159a.5.5 0 0 1 .5-.553h6.9a.5.5 0 0 1 .5.577l-1.38 9.2"></path><path d="M16.696 9.37a.375.375 0 0 1 0-.75m0 .75a.375.375 0 1 0 0-.75"></path></g></svg>
                            Scheduled for Nov 20, 2024
                        </p>
                    </div>
                </div>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* LEFT SIDE */}
                <div className=" space-y-6">

                    {/* Breakdown */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <div className="flex justify-between mb-4 border-b border-gray-600">
                            <h3 className="font-semibold">Payout Breakdown</h3>
                            <span className="text-sm text-gray-500">Current Period</span>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Gross Sales</span>
                                <span>$14,200.00</span>
                            </div>
                            <div className="flex justify-between text-red-400">
                                <span>Platform Fees (10%)</span>
                                <span>-$1,420.00</span>
                            </div>
                            <div className="flex justify-between text-red-400">
                                <span>Shipping Costs</span>
                                <span>-$247.50</span>
                            </div>
                            <div className="flex justify-between text-red-400">
                                <span>Refunds</span>
                                <span>-$50.00</span>
                            </div>
                            <div className="flex justify-between font-semibold text-red-500 border-t mt-2 pt-2 border-gray-200">
                                <span>Net Payout</span>
                                <span>$12,482.50</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-6">

                    {/* Payout Method */}
                    <div className="shadow-[-6px_-6px_6px_white,2px_2px_5px_gray] rounded-xl border-l border-gray-100">
                        <div className="flex justify-between mb-3 bg-gray-900 h-4 rounded-t-xl" />
                        <div className="flex justify-between my-3 m-5">
                            <h3 className="font-semibold">Bank Account</h3>
                            <button className="text-blue-500 text-sm font-semibold cursor-pointer">Edit</button>
                        </div>

                        <div className="border border-indigo-300 rounded-lg p-4 m-5 shadow-[inset_-4px_-4px_6px_white,inset_1px_1px_4px_gray]">
                            <div className="flex justify-between items-center flex-wrap gap-2">
                                <div className="flex gap-3">
                                    <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" width={34} height={34} viewBox="0 0 48 48"><circle cx={24} cy={24} r={21.5} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></circle><circle cx={24} cy={24} r={5} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></circle><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M24 29v16.5" strokeWidth={2}></path></svg>
                                    <div>
                                        <p className="font-medium text-sm">State Bank of India</p>
                                        <p className="text-xs text-gray-500">AC XXXXXX123456</p>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xs border border-gray-200 bg-white shadow-[-2px_-2px_5px_white,2px_2px_5px_gray] text-blue-600 px-2 py-1 rounded-full flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24"><path fill="currentColor" d="m22.72 10.35l-1.84-1.48a1.09 1.09 0 0 1-.4-1l.25-2.34a2.09 2.09 0 0 0-2.3-2.31l-2.35.25a1.09 1.09 0 0 1-1-.4l-1.45-1.81a2.16 2.16 0 0 0-3.26 0L8.89 3.1a1.09 1.09 0 0 1-1 .4l-2.32-.25a2.09 2.09 0 0 0-2.3 2.31l.25 2.34a1.09 1.09 0 0 1-.4 1l-1.84 1.45a2.09 2.09 0 0 0 0 3.26l1.84 1.48a1.1 1.1 0 0 1 .4 1l-.25 2.35a2.07 2.07 0 0 0 .6 1.7a2 2 0 0 0 1.7.6l2.35-.25a1.09 1.09 0 0 1 1 .4l1.48 1.84a2.09 2.09 0 0 0 3.26 0l1.48-1.84a1.09 1.09 0 0 1 1-.4l2.35.25a2 2 0 0 0 1.7-.6a2.07 2.07 0 0 0 .6-1.7l-.25-2.35a1.1 1.1 0 0 1 .4-1l1.84-1.48a2.09 2.09 0 0 0 0-3.26Zm-10.32 4.7a1.79 1.79 0 0 1-2.67.19L7.29 12.8a1 1 0 1 1 1.42-1.42L11 13.63l3.91-5.21a1 1 0 0 1 1.6 1.2Z"></path></svg>
                                        <span>VERIFIED</span>
                                    </span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-4">
                                Deposits usually take 2-3 business days to reflect in your account depending on your bank.
                            </p>
                        </div>
                        <div className="h-10 relative">
                            <img
                                src="https://images.unsplash.com/photo-1758073519996-6d3c63b4922c?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="w-full h-full object-cover shadow-md opacity-100 rounded-b-xl"
                            />
                            <div className="text-xs absolute top-0 left-0 w-full">
                                <p className="text-center py-2 font-medium text-white flex gap-2 justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zm7.413-3.588Q14 15.826 14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17t1.413-.587M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zM6 20V10z"></path></svg>
                                    <span>Your financial data is encrypted and secure.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* MOBILE COLLAPSIBLE */}
            <div className="md:hidden bg-white border  border-gray-200 rounded-xl p-4">
                <div
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex justify-between cursor-pointer"
                >
                    <h3 className="font-semibold">Payout Details</h3>
                    <span>{showDetails ? "▲" : "▼"}</span>
                </div>

                {showDetails && (
                    <div className="mt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Total Sales</span>
                            <span>$5,120.00</span>
                        </div>
                        <div className="flex justify-between text-red-500">
                            <span>Marketplace Fee</span>
                            <span>-$409.60</span>
                        </div>
                        <div className="flex justify-between text-red-500">
                            <span>Processing Fees</span>
                            <span>-$24.90</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold text-orange-600">
                            <span>Net Payout</span>
                            <span>$4,685.50</span>
                        </div>
                    </div>
                )}
            </div>


            {/* HISTORY TABLE */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

                <div className="flex justify-between items-center p-4">
                    <h3 className="font-semibold">Payout History</h3>
                    <div className="flex gap-2">
                        <button
                            onClick={() => { }}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition focus:bg-white focus:shadow-lg shadow-sm border border-gray-200`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 12 12"><path fill="currentColor" d="M1 2.75A.75.75 0 0 1 1.75 2h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 1 2.75m2 3A.75.75 0 0 1 3.75 5h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 3 5.75M5.25 8a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"></path></svg>
                            <span>Filters</span>
                        </button>
                        <button className="border border-gray-300 px-3 py-1 rounded text-sm active:shadow-lg flex justify-center items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24"><path fill="currentColor" d="M5.552 20.968a2.577 2.577 0 0 1-2.5-2.73c-.012-2.153 0-4.306 0-6.459a.5.5 0 0 1 1 0c0 2.2-.032 4.4 0 6.6c.016 1.107.848 1.589 1.838 1.589h12.463A1.55 1.55 0 0 0 19.825 19a3 3 0 0 0 .1-1.061v-6.16a.5.5 0 0 1 1 0c0 2.224.085 4.465 0 6.687a2.567 2.567 0 0 1-2.67 2.5Z" strokeWidth={1.6} stroke="currentColor"></path><path fill="currentColor" d="M12.337 3.176a.46.46 0 0 0-.311-.138q-.021.002-.043-.006c-.022-.008-.027 0-.041.006a.46.46 0 0 0-.312.138L7.961 6.845a.5.5 0 0 0 .707.707l2.816-2.815v10.742a.5.5 0 0 0 1 0V4.737L15.3 7.552a.5.5 0 0 0 .707-.707Z" strokeWidth={1.6} stroke="currentColor"></path></svg>
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                {/* DESKTOP TABLE */}
                <div className="overflow-x-auto">
                    <div className="hidden md:block w-full min-w-[600px]">
                        <div className="grid grid-cols-5 bg-gray-50 px-6 py-3 text-sm text-gray-500">
                            <p className="px-2">ID</p>
                            <p className="px-2">Date</p>
                            <p className="px-2">Method</p>
                            <p className="px-2">Amount</p>
                            <p className="text-end px-2">Status</p>
                        </div>

                        {payouts.map((p, i) => (
                            <div key={i} className="grid grid-cols-5 px-6 py-3 border-t border-gray-200 hover:bg-indigo-50 transition text-sm items-center">
                                <p className="px-2">{p.id}</p>
                                <p className="px-2">{p.date}</p>
                                <p className="px-2">{p.method}</p>
                                <p className="font-medium px-2">{p.amount}</p>
                                <p className="text-end px-2">
                                    <span className={`px-2 py-1 text-xs rounded-full ${statusStyles[p.status]}`}>{p.status}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MOBILE CARDS */}
                <div className="md:hidden p-4 space-y-3">
                    {payouts.map((p, i) => (
                        <div key={i} className="border rounded-lg p-3">
                            <div className="flex justify-between">
                                <p className="font-medium">{p.id}</p>
                                <span className={`px-2 py-1 text-xs rounded-full ${statusStyles[p.status]}`}>
                                    {p.status}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">{p.date}</p>
                            <p className="text-sm">{p.method}</p>
                            <p className="font-semibold mt-1">{p.amount}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


const payouts = [
    { id: "PO-123456", date: "Nov 12, 2024", method: "Bank •••• 4242", amount: "$5,120.00", status: "FAILED" },
    { id: "PO-123455", date: "Oct 28, 2024", method: "Bank •••• 4242", amount: "$8,940.00", status: "COMPLETED" },
    { id: "PO-123454", date: "Oct 14, 2024", method: "Bank •••• 4242", amount: "$3,115.50", status: "COMPLETED" },
    { id: "PO-123453", date: "Sep 30, 2024", method: "Bank •••• 4242", amount: "$12,400.00", status: "PROCESSING" },
];

const statusStyles = {
    COMPLETED: "bg-green-100 text-green-600",
    FAILED: "bg-red-100 text-red-600",
    PROCESSING: "bg-blue-100 text-blue-600",
};