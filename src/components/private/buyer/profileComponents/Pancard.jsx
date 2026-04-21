import React, { useState } from 'react'
import { useSideBar } from '../../../../context/ProfileSideBarContext';

export default function Pancard() {
    const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()
    const [editPan, setEditPan] = useState(false);
    const panDetails = [
        {
            name: "Ameer Suhail",
            panNumber: "ABCDE1234F",
            verified: true,
        },
        {
            name: "Ameer Suhail",
            panNumber: "ABCDE4321D",
            verified: true,
        },
    ];

    const isValidPAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);

    return (
        <>
            <div className='flex justify-between items-center shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)] p-4 border-b border-gray-300'>
                <h2 className="text-xl font-semibold">Pan Cards</h2>
                {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
            </div>
            <div className='m-4 flex flex-col gap-2'>
                {panDetails.map((item, index) => (
                    <div to={index} className="border border-gray-300 shadow rounded-lg p-4 space-y-3 bg-white">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold">PAN Card Details</h3>
                            <button
                                onClick={() => setEditPan(true)}
                                className="text-blue-600 text-sm border rounded px-4 bg-blue-100"
                            >Edit</button>
                        </div>
                        <div className="text-sm">
                            <p><strong>Name:</strong> {item.name}</p>
                            <div className='flex justify-between'>
                                <p><strong>PAN:</strong> {item.panNumber}</p>

                                <p className={`text-xs mt-1 ${item.verified ? "text-green-600" : "text-red-500"
                                    }`}>
                                    {item.verified ? "✔ Verified" : "Not Verified"}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            {editPan && (
                <div className="border rounded-lg p-4 bg-gray-50 mt-3">

                    <h4 className="font-semibold mb-3">Edit PAN Details</h4>

                    <div className="flex flex-col gap-3">

                        <input
                            type="text"
                            placeholder="Full Name"
                            defaultValue={panDetails.name}
                            className="border p-2 rounded"
                        />

                        <input
                            type="text"
                            placeholder="PAN Number"
                            defaultValue={panDetails.panNumber}
                            className="border p-2 rounded uppercase"
                        />

                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-4">
                        <button className="bg-black text-white px-4 py-2 rounded">
                            Save
                        </button>

                        <button
                            onClick={() => setEditPan(false)}
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
