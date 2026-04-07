import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import { useSideBar } from '../../pages/constext/ProfileSideBarContext';

export default function Address() {
    const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()
    const [showForm, setShowForm] = useState(false);
    const addresses = [
        {
            id: 1,
            type: "Home",
            name: "Ameer Suhail",
            phone: "+91 9876543210",
            pincode: "673001",
            city: "Kozhikode",
            state: "Kerala",
            addressLine: "Near Beach Road",
            landmark: "Opp. City Mall",
            default: true,
            selected: true,
        },
        {
            id: 2,
            type: "Work",
            name: "Ameer Suhail",
            phone: "+91 9876543210",
            pincode: "673001",
            city: "Perinthalmanna",
            state: "Kerala",
            addressLine: "Euphoricoders, Perinthelmanna",
            landmark: "Opp. City Mall",
            default: false,
            selected: false,
        },
    ];

    return (
        <>
            <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center p-4  shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)]">
                    <div>
                        <h3 className="font-semibold text-xl">Saved Addresses</h3>
                    </div>
                    {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
                    {!sideBarAble && <button
                        onClick={() => setShowForm(true)}
                        className="text-blue-600 text-sm mb-2 me-1 hover:underline cursor-pointer"
                    >
                        + Add Address
                    </button>}
                </div>

                <div className='p-4 pt-0 space-y-2'>
                    <div className='text-end'>
                        {sideBarAble && <button
                            onClick={() => setShowForm(true)}
                            className="text-blue-600 text-sm mb-2 me-1 hover:underline cursor-pointer"
                        >
                            + Add Address
                        </button>}
                    </div>
                    {/* Address List */}
                    {addresses.map((addr) => (
                        <div key={addr.id} className="border border-gray-300 bg-white rounded-lg p-3 text-sm">
                            <div className="flex justify-between">
                                <div className='flex gap-2'>
                                    <p className="font-medium">{addr.type}</p>
                                    {addr.selected && <div>
                                        <span className="text-blue-600 border px-2 rounded-full bg-blue-50 text-xs">Selected</span>
                                    </div>}
                                </div>
                                {(addr.default || addr.selected) && (
                                    <div className='flex flex-col justify-end'>
                                        {addr.default && <div>
                                            <span className="text-green-600 text-xs">Default</span>
                                        </div>}
                                    </div>

                                )}
                            </div>
                            <p className='font-normal text-gray-600 mt-2 mb-1'>{addr.name}</p>
                            <p className='font-light'>{addr.addressLine}, {addr.landmark}</p>
                            <p className='font-light'>{addr.city}, {addr.state} - {addr.pincode}</p>
                            <p className="text-gray-500 font-light">{addr.phone}</p>
                            <div className="flex justify-end gap-3 mt-2 text-xs border-t border-gray-300 pt-2">
                                <button className="text-red-500 hover:underline cursor-pointer">Delete</button>
                                <button className="text-blue-600 hover:underline cursor-pointer">Edit</button>
                                {!addr?.default && <button className="text-gray-600 hover:underline cursor-pointer">Set Default</button>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showForm && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-md w-11/12 md:w-1/2">
                        <div className="border p-4 rounded-lg bg-gray-50">
                            <h4 className="font-semibold mb-3">Add New Address</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <input placeholder="Full Name" className="border p-2 rounded" />
                                <input placeholder="Phone Number" className="border p-2 rounded" />
                                <input placeholder="Pincode" className="border p-2 rounded" />
                                <input placeholder="City" className="border p-2 rounded" />
                                <input placeholder="State" className="border p-2 rounded" />
                                <input placeholder="Address Line" className="border p-2 rounded md:col-span-2" />
                                <input placeholder="Landmark" className="border p-2 rounded md:col-span-2" />
                            </div>
                            <div className="flex gap-3 mt-4">
                                <button className="bg-black text-white px-4 py-2 rounded">Save Address</button>
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="border px-4 py-2 rounded"
                                >Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
