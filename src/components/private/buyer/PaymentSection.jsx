import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentSection({ setPaymentStage }) {
    const [method, setMethod] = useState("card");
    const [upiPaymentMethod, setUpiPaymentMethod] = useState(null)
    const navigate = useNavigate();

    const handlePayment = async () => {
        navigate('/payment-success')
    }

    return (
        <div className="shadow-md rounded-lg col-span-1 lg:col-span-2 h-full border-t border-t-gray-100 bg-gray-50">
            <div className="flex gap-2 p-4">
                <button onClick={() => setPaymentStage(false)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13H6.75L12 18.25l-.66.75l-6.5-6.5l6.5-6.5l.66.75L6.75 12H19z" stroke-width="1" stroke="currentColor" /></svg></button>
                <h4 className="text-lg font-medium">Complete Payment</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  bg-gray-50 border-2 border-gray-300 rounded-lg m-4 mt-0x">
                {/* LEFT SIDE (METHODS) */}
                <div className="">
                    {/* Gift Card */}
                    <div className="">
                        <div className="">
                            <div onClick={() => setMethod("giftCard")} className={`flex border-b rounded-tl-md border-gray-300 justify-between items-center p-2 cursor-pointer  ${method === "giftCard" ? " bg-white" : "hover:bg-gray-100"}`}>
                                <div className="flex gap-3 items-start">
                                    <input type="checkbox" checked={method === 'giftCard'} className="mt-1.5" />
                                    <div>
                                        <p className="font-medium">Use Gift Card</p>
                                        <p className="text-sm text-gray-500">
                                            Available Balance ₹1,011
                                        </p>
                                    </div>
                                </div>

                                {/* <button className="text-blue-600 text-sm">
                                    Add Gift Card
                                </button> */}
                            </div>

                            {/* Card */}
                            <div
                                onClick={() => setMethod("card")}
                                className={`p-4 border-b border-gray-300 cursor-pointer ${method === "card" ? " bg-white" : "hover:bg-gray-100"}`}
                            >
                                <p className="font-medium">Credit / Debit / ATM Card</p>
                                <p className="text-sm text-gray-500">
                                    Add and secure cards as per RBI guidelines
                                </p>
                                <p className="text-green-600 text-sm mt-1">
                                    Get upto 5% cashback • 2 offers available
                                </p>
                            </div>

                            {/* COD */}
                            <div
                                onClick={() => setMethod("cod")}
                                className={`p-4  border-b border-gray-300 cursor-pointer ${method === "cod" ? " bg-white" : "hover:bg-gray-100"}`}
                            >
                                <p className="font-medium">Cash on Delivery</p>
                            </div>

                            <div onClick={() => setMethod("upi")} className={`p-4  border-b border-gray-300 cursor-pointer ${method === "upi" ? " bg-white" : "hover:bg-gray-100"}`}>
                                <p>UPI</p>
                            </div>

                            {/* Disabled */}
                            <div className="p-4 rounded-bl-md text-gray-400 flex justify-between hover:bg-gray-100">
                                <p>EMI</p>
                                <span className="text-xs">Unavailable</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE (CONTENT) */}
                <div className="p-6 bg-white rounded-r-md">

                    {method === "card" && (
                        <div className="space-y-4">

                            <p className="text-sm text-gray-600">
                                <span className="font-medium">Note:</span> Please ensure your card can be used for online transactions.
                            </p>

                            {/* Card Number */}
                            <div>
                                <label className="text-sm">Card Number</label>
                                <input
                                    type="text"
                                    placeholder="XXXX XXXX XXXX XXXX"
                                    className="w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-yellow-300"
                                />
                                <p className="text-red-500 text-xs mt-1">
                                    Card number is required
                                </p>
                            </div>

                            {/* Expiry + CVV */}
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="MM / YY"
                                    className="w-1/2 border-2 rounded-md border-gray-400 px-3 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    className="w-1/2 border-2 rounded-md border-gray-400 px-3 py-2"
                                />
                            </div>

                            {/* Pay Button */}
                            <button onClick={handlePayment} className="w-full bg-yellow-400 py-3 font-semibold rounded-md hover:bg-yellow-500 transition">
                                Pay ₹230
                            </button>
                        </div>
                    )}

                    {method === "cod" && (
                        <div className="space-y-4">
                            <p className="text-sm text-gray-600">
                                Cash on delivery will cost an additional ₹15 when it arraives.
                            </p>

                            <button onClick={handlePayment} className="w-full bg-yellow-400 py-3 font-semibold rounded-md">
                                Confirm Order
                            </button>
                        </div>
                    )}
                    {method === "giftCard" && (
                        <div className="space-y-4">
                            <p className="text-sm text-gray-700">
                                ₹230 will be debited to your account.
                            </p>
                            <p className="text-xs text-gray-500">
                                You wallet still hold ₹871, you can use it at any time
                            </p>

                            <button onClick={handlePayment} className="w-full bg-yellow-400 py-3 font-semibold rounded-md">
                                Confirm Order
                            </button>
                        </div>
                    )}
                    {method === "upi" && (
                        <div className="space-y-4">
                            {upiOptions.map((upi, index) => (
                                <div className="flex justify-between gap-3 cursor-pointer" onClick={() => setUpiPaymentMethod(upi.id)} >
                                    <input type="radio" checked={upiPaymentMethod === upi.id} className="self-start mt-1" />
                                    <div className="flex flex-1 justify-between gap-1 text-sm">
                                        <div className="space-y-3 w-full">
                                            <p className=" text-gray-500">{upi.name}</p>
                                            <small className="text-green-700 flex gap-2 underline decoration-dashed">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3.1"><path d="M8 44V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v38l-16-8.273z" /><path strokeLinecap="round" d="M16 18h16" /></g></svg>
                                                <span>{upi.offres}</span>
                                            </small>
                                            {upiPaymentMethod === upi.id &&
                                                <AnimatePresence>
                                                    <motion.div
                                                        key="payment"
                                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                                    >
                                                        <button onClick={handlePayment} className="w-full bg-yellow-400 py-1.5 font-semibold rounded-md">
                                                            Pay ₹230
                                                        </button>
                                                    </motion.div>
                                                </AnimatePresence>
                                            }
                                        </div>
                                        {upi.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

const upiOptions = [
    {
        id: 'paytm',
        name: 'Paytm',
        offres: '2 offers applicable',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#39aaf2" d="m15.85 8.167l-.04.004c-.68.19-.543 1.148-1.781 1.23h-.12a.2.2 0 0 0-.052.005h-.001a.24.24 0 0 0-.184.235v1.09c0 .134.106.241.237.241h.645v4.623c0 .132.104.238.233.238h1.058a.236.236 0 0 0 .233-.238v-4.623h.6c.13 0 .236-.107.236-.241v-1.09a.24.24 0 0 0-.236-.24h-.612V8.386a.22.22 0 0 0-.216-.22zm4.225 1.17c-.398 0-.762.15-1.042.395v-.124a.24.24 0 0 0-.234-.224h-1.07a.24.24 0 0 0-.236.242v5.92a.24.24 0 0 0 .236.242h1.07c.12 0 .217-.091.233-.209v-4.25a.393.393 0 0 1 .371-.408h.196a.4.4 0 0 1 .226.09a.4.4 0 0 1 .145.319v4.074l.004.155a.24.24 0 0 0 .237.241h1.07a.24.24 0 0 0 .235-.23l-.001-4.246c0-.14.062-.266.174-.34a.4.4 0 0 1 .196-.068h.198c.23.02.37.2.37.408c.005 1.396.004 2.8.004 4.224a.24.24 0 0 0 .237.241h1.07c.13 0 .236-.108.236-.241v-4.543c0-.31-.034-.442-.08-.577a1.6 1.6 0 0 0-1.51-1.09h-.015a1.58 1.58 0 0 0-1.152.5c-.291-.308-.7-.5-1.153-.5zM.232 9.4A.234.234 0 0 0 0 9.636v5.924c0 .132.096.238.216.241h1.09c.13 0 .237-.107.237-.24l.004-1.658H2.57c.857 0 1.453-.605 1.453-1.481v-1.538c0-.877-.596-1.484-1.453-1.484zm9.032 0a.24.24 0 0 0-.237.241v2.47c0 .94.657 1.608 1.579 1.608h.675s.016 0 .037.004a.253.253 0 0 1 .222.253c0 .13-.096.235-.219.251l-.018.004l-.303.006H9.739a.24.24 0 0 0-.236.24v1.09a.24.24 0 0 0 .236.242h1.75c.92 0 1.577-.669 1.577-1.608v-4.56a.24.24 0 0 0-.236-.24h-1.07a.24.24 0 0 0-.236.24c-.005.787 0 1.525 0 2.255a.253.253 0 0 1-.25.25h-.449a.253.253 0 0 1-.25-.255c.005-.754-.005-1.5-.005-2.25a.24.24 0 0 0-.236-.24zm-4.004.006a.23.23 0 0 0-.238.226v1.023c0 .132.113.24.252.24h1.413c.112.017.2.1.213.23v.14c-.013.124-.1.214-.207.224h-.7c-.93 0-1.594.63-1.594 1.515v1.269c0 .88.57 1.506 1.495 1.506h1.94c.348 0 .63-.27.63-.6v-4.136c0-1.004-.508-1.637-1.72-1.637zm-3.713 1.572h.678c.139 0 .25.115.25.256v.836a.253.253 0 0 1-.25.256h-.1q-.289.002-.578 0zm4.67 1.977h.445c.139 0 .252.108.252.24v.932a.2.2 0 0 1-.014.076a.25.25 0 0 1-.238.164h-.445a.247.247 0 0 1-.252-.24v-.933c0-.132.113-.239.252-.239" /></svg>
    },
    {
        id: 'googlepay',
        name: 'Google Pay',
        offres: '3 offers applicable',
        icon: <svg width={15} height={15} id="arcticons--googlepay" viewBox="0 0 48 48"><path fill="none" stroke="#249619" strokeDLinecap="round" strokeLinejoin="round" d="M17.78 39.67a6.6 6.6 0 0 0 9-2.41l8.36-14.46a3.6 3.6 0 0 0-1.32-4.92l-2.5-1.44M17.45 39.48a6 6 0 0 1-2.19-8.19l6.33-11a3.6 3.6 0 0 0-1.32-4.91l-4.6-2.65a3.58 3.58 0 0 0-4.91 1.31L5.63 23A8.38 8.38 0 0 0 8.7 34.42l3.56 2.06Z" strokeWidth="1.7" /><path fill="none" stroke="#249619" strokeLinecap="round" stroke-linejoin="round" d="M40.2 13.82a6.58 6.58 0 0 1 2.42 9L36.72 33a3.61 3.61 0 0 1-4.92 1.32l-2.5-1.45M18.17 14.2l1.48-2.56a8.4 8.4 0 0 1 11.47-3.07l3.56 2.06l5.19 3a6 6 0 0 0-8.19 2.2L23 30.8a3.6 3.6 0 0 1-4.91 1.32l-2.51-1.45" strokeWidth="1.7" /></svg>
    },
    {
        id: 'supermoney',
        name: 'Super Money',
        offres: '1 offers applicable',
        icon: <svg width={15} height={15} id="arcticons--supermoney" viewBox="0 0 48 48"><path fill="none" stroke="#1613d5" strokeLinecap="round" strokeLinejoin="round" d="M42.5 24H32.486h.764a9.25 9.25 0 0 1 0 18.5H5.5V24h10.014h-.764a9.25 9.25 0 1 1 0-18.5H42.5z" strokeWidth="2" /><path fill="none" stroke="#1613d5" strokeLinecap="round" strokeLinejoin="round" d="m26.475 14.454l7.071 7.071a1 1 0 0 1 0 1.414L22.94 33.546a1 1 0 0 1-1.414 0l-7.071-7.07a1 1 0 0 1 0-1.415l10.607-10.607a1 1 0 0 1 1.414 0" strokeWidth="2" /></svg>
    },
]