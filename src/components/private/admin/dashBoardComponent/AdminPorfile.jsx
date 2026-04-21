import { select } from 'framer-motion/client';
import React from 'react'
import { useSideBar } from '../../../../context/ProfileSideBarContext';

export default function AdminPorfile() {

    const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()

    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.href = "/"
    }

    return (
        <div className=" rounded-xl shadow-sm">
            {/* HEADER */}
            <div className='flex justify-between px-6 bg-gray-100'>
                <div className="flex pt-6 pb-6 rounded-t-sm items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                        {profile.user.name[0]}
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">{profile.user.name}</h2>
                        <p className="text-sm text-gray-500">
                            Member since {profile.user.memberSince}
                        </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
                </div>
            </div>

            {/* BASIC INFO */}
            <div className='px-6 bg-gray-100 mb-5 pb-5 shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)] border-b border-gray-300'>
                <h3 className="font-semibold mb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <p className='font-medium'>Email: <span className='text-gray-700 font-normal'>{profile.user.email}</span></p>
                    <p className='font-medium'>Phone: <span className='text-gray-700 font-normal'>{profile.user.phone}</span></p>
                    <p className='font-medium'>Gender: <span className='text-gray-700 font-normal'>{profile.user.gender}</span></p>
                    <p className='font-medium'>DOB: <span className='text-gray-700 font-normal'>{profile.user.dob}</span></p>
                </div>
            </div>

            {/* STATS */}
            <div className=' px-6'>
                <h3 className="font-semibold pb-3">Genaral Info</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-100 p-3 rounded border border-gray-200">
                        <p className="font-bold">{profile.stats.orders}</p>
                        <p className="text-xs text-green-700 flex items-center gap-2 justify-center "><svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M10.5 2v2.5a3 3 0 0 1-6 0V2m-3-.5v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1Z" strokeWidth="1" /></svg> <span>Orders</span></p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded  border border-gray-200">
                        <p className="font-bold">{profile.stats.wishlist}</p>
                        <p className="text-xs text-blue-400 flex items-center gap-2 justify-center "><svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="30" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0" /></path></svg> <span>Wishlist</span></p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded  border border-gray-200">
                        <p className="font-bold">{profile.stats.reviews}</p>
                        <p className="text-xs text-yellow-500 flex items-center gap-2 justify-center "><svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32"><path fill="currentColor" d="m16 8l1.912 3.703l4.088.594L19 15l1 4l-4-2.25L12 19l1-4l-3-2.703l4.2-.594z" /><path fill="currentColor" d="M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V8a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v12a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.835Z" /></svg> <span>Reviews</span></p>
                    </div>
                </div>
            </div>

            {/* ADDRESSES */}
            <div className='my-4 px-6'>
                <h3 className="font-semibold pb-3">Saved Addresses</h3>

                {profile.addresses.map((addr) => (
                    <div
                        key={addr.id}
                        className={`cursor-pointer hover:shadow-md transition rounded-lg p-3 mb-2 text-sm bg-gray-100  border border-gray-200`}
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
                    <button className="border border-blue-300 bg-blue-100 text-blue-600 hover:text-white hover:bg-blue-500 transition duration-300 px-4 py-0.5 rounded cursor-pointer">
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