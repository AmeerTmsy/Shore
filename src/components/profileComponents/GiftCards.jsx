import React from 'react'
import { useSideBar } from '../../pages/constext/ProfileSideBarContext';

export default function GiftCards() {
    const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()
    // const [giftCode, setGiftCode] = useState("");
    const giftCards = {
        balance: 1200,

        cards: [
            {
                id: 1,
                code: "GIFT-ABCD-1234",
                amount: 500,
                status: "Active",
                expiry: "2026-12-31",
            },
            {
                id: 2,
                code: "GIFT-XYZ-7890",
                amount: 700,
                status: "Used",
                expiry: "2025-10-10",
            },
        ],
    };
    return (
        <>
            <div className="rounded-xl bg-white space-y-5">

                {/* Balance */}
                <div className="flex justify-between items-center text-xl font-semibold shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)] p-4 border-b border-gray-300">
                    <div>
                        <h3 className="font-semibold">Gift Cards</h3>
                        <p className="text-sm text-gray-500">Available Balance: {sideBarAble && <span className='text-green-600'>₹{giftCards.balance}</span>}</p>
                    </div>
                    {!sideBarAble && <p className="text-xl font-bold text-green-600">
                        ₹{giftCards.balance}
                    </p>}
                    {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
                </div>

                <div className='p-4 pt-0 space-y-4'>
                    {/* Redeem */}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Enter gift card code"
                            className="border border-gray-400 p-2 rounded flex-1"
                        />
                        <button className="bg-black text-white px-4 rounded">
                            Redeem
                        </button>
                    </div>

                    {/* Cards List */}
                    <div className="space-y-2">
                        {giftCards.cards.map((card) => (
                            <div
                                key={card.id}
                                className="border border-gray-400 rounded-lg p-3 flex justify-between items-center"
                            >
                                <div>
                                    <p className="text-sm font-medium">{card.code}</p>
                                    <p className="text-xs text-gray-500">
                                        Expires: {card.expiry}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="font-semibold">₹{card.amount}</p>
                                    <p
                                        className={`text-xs ${card.status === "Active"
                                            ? "text-green-600"
                                            : "text-gray-400"
                                            }`}
                                    >
                                        {card.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}
