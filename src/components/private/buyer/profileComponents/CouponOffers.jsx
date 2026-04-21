import React from 'react'
import { useSideBar } from '../../../../context/ProfileSideBarContext';

export default function CouponOffers() {
    const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()
    return (
        <>
            <div className="space-y-6">
                <div className='flex justify-between items-center shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)] p-4 border-b border-gray-300'>
                    <h2 className="text-xl font-semibold">Coupons & Offers</h2>
                    {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
                </div>

                <div className='p-4 space-y-4'>
                    {/* Apply Coupon */}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Enter coupon code"
                            className="border border-gray-400 p-2 rounded flex-1"
                        />
                        <button className="bg-black text-white px-4 rounded cursor-pointer">
                            Apply
                        </button>
                    </div>

                    {/* Applied Coupon */}
                    {couponsData.applied && (
                        <div className="bg-green-100 text-green-700 p-3 rounded text-sm">
                            Applied: {couponsData.applied.code}
                            (Saved ₹{couponsData.applied.discount})
                        </div>
                    )}

                    {/* Available Coupons */}
                    <div>
                        <h3 className="font-medium mb-2">Available Coupons</h3>

                        <div className="space-y-3">
                            {couponsData.available.map((coupon) => (
                                <div
                                    key={coupon.id}
                                    className="border border-gray-400 rounded-lg p-4 bg-white flex justify-between items-center"
                                >

                                    <div>
                                        <p className="font-medium">{coupon.code}</p>
                                        <p className="text-sm text-gray-600">
                                            {coupon.title}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Min order ₹{coupon.minOrder} • Expires {coupon.expiry}
                                        </p>
                                    </div>

                                    <button className="text-blue-600 text-sm border px-3 py-1 bg-blue-50 rounded cursor-pointer">
                                        Apply
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expired Coupons */}
                    <div>
                        <h3 className="font-medium mb-2">Expired</h3>

                        <div className="space-y-2">
                            {couponsData.expired.map((coupon) => (
                                <div
                                    key={coupon.id}
                                    className="border rounded-lg p-3 bg-gray-100 text-gray-400"
                                >
                                    <p className="text-sm">{coupon.code}</p>
                                    <p className="text-xs">Expired on {coupon.expiry}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

const couponsData = {
    available: [
        {
            id: 1,
            code: "SAVE20",
            title: "20% OFF on Orders",
            description: "Get 20% discount up to ₹500",
            minOrder: 1999,
            expiry: "2026-04-10",
            type: "Percentage",
        },
        {
            id: 2,
            code: "FREESHIP",
            title: "Free Delivery",
            description: "No delivery charges on this order",
            minOrder: 999,
            expiry: "2026-04-08",
            type: "Shipping",
        },
    ],

    applied: {
        code: "SAVE20",
        discount: 400,
    },

    expired: [
        {
            id: 3,
            code: "WELCOME10",
            title: "10% OFF for New Users",
            expiry: "2026-03-30",
        },
    ],
};