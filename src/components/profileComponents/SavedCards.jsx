import React, { useState } from 'react'
import { useSideBar } from '../../pages/constext/ProfileSideBarContext';

export default function SavedCards() {
    const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()
    const [showCardForm, setShowCardForm] = useState(false);
    const isValidCard = (num) => /^\d{16}$/.test(num);
    const savedCards = {
        cards: [
            {
                id: 1,
                brand: "Visa",
                holder: "Ameer Suhail",
                last4: "1234",
                expiry: "12/28",
                bank: "HDFC Bank",
                default: true,
            },
            {
                id: 2,
                brand: "Mastercard",
                holder: "Ameer Suhail",
                last4: "5678",
                expiry: "09/27",
                bank: "ICICI Bank",
                default: false,
            },
        ],
    };
    return (
        <>
            <div className=" rounded-xl space-y-5">
                {/* Header */}
                <div className="flex justify-between items-center text-xl font-semibold shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)] p-4 border-b border-gray-300">
                    <h3 className="font-semibold">Saved Cards</h3>
                    {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
                    {!sideBarAble && <button
                        onClick={() => setShowCardForm(true)}
                        className="text-blue-600 text-sm"
                    >
                        + Add Card
                    </button>}
                </div>

                {/* Cards */}
                <div className="space-y-3 p-4 pt-0">
                    {sideBarAble &&
                        <div className='text-end'>
                            <button
                                onClick={() => setShowCardForm(true)}
                                className="text-blue-600 text-sm mb-2 me-1 hover:underline cursor-pointer"
                            >
                                + Add Card
                            </button>
                        </div>
                    }

                    {savedCards.cards.map((card) => (
                        <div
                            key={card.id}
                            className="border border-gray-300 bg-white rounded-lg p-4 flex justify-between items-center"
                        >
                            <div>
                                <p className="font-medium">
                                    {card.brand} •••• {card.last4}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {card.bank} • Exp {card.expiry}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {card.holder}
                                </p>
                            </div>

                            <div className="text-right text-xs space-y-2">
                                {card.default && (
                                    <p className="text-green-600">Default</p>
                                )}
                                <div className='flex gap-3'>
                                    <button className="text-blue-600 hover:underline cursor-pointer">Set Default</button>
                                    <button className="text-red-500 hover:underline cursor-pointer">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            {showCardForm && (
                <div className="border rounded-lg p-4 bg-gray-50">

                    <h4 className="font-semibold mb-3">Add Card</h4>

                    <div className="flex flex-col gap-3">

                        <input
                            type="text"
                            placeholder="Card Number"
                            className="border p-2 rounded"
                        />

                        <input
                            type="text"
                            placeholder="Card Holder Name"
                            className="border p-2 rounded"
                        />

                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="border p-2 rounded w-1/2"
                            />
                            <input
                                type="password"
                                placeholder="CVV"
                                className="border p-2 rounded w-1/2"
                            />
                        </div>

                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-4">
                        <button className="bg-black text-white px-4 py-2 rounded">
                            Save Card
                        </button>
                        <button
                            onClick={() => setShowCardForm(false)}
                            className="border px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>

                </div>
            )}
        </>
    )
}
