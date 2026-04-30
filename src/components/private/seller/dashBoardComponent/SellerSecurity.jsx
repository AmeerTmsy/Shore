import React from 'react'
import { useSideBar } from '../../../../context/ProfileSideBarContext';

export default function SellerSecurity() {
    const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()
    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            <div>
                <h1 className="text-3xl font-semibold">Security</h1>
                <p className="text-gray-500">Manage your account security and access</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                <div className='grid col-span-1 lg:col-span-2 gap-2'>
                    <div className='grid sm:grid-cols-2 gap-2'>
                        <div className='w-full'>
                            <div className="border border-[#f4c09871] rounded-xl p-6 bg-white space-y-4 hover:shadow-sm h-full">
                                <div className="flex justify-between items-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">🔑</div>
                                    <span className="text-xs bg-gray-100 px-3 py-1 rounded">Last updated 2 months ago</span>
                                </div>
                                <h3 className="text-lg font-semibold">Account Password</h3>
                                <p className="text-sm text-gray-500">Ensure your password is strong and updated regularly to protect your earnings.</p>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg w-full">Change Password</button>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="border border-[#f4c09871] rounded-xl p-6 bg-white space-y-4 hover:shadow-sm h-full">
                                <div className="flex justify-between items-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-500">📱</div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600 font-medium text-sm">ENABLED</span>
                                        <div className="w-10 h-5 bg-green-500 rounded-full relative">
                                            <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-0.5"></div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
                                <p className="text-sm text-gray-500">Secure your account with an extra layer of protection.</p>
                                <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
                                    <div>
                                        <p className="text-sm font-medium">Authenticator App</p>
                                        <p className="text-xs text-gray-500">Currently active</p>
                                    </div>
                                    <button className="text-orange-500 text-sm">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="md:col-span-2 border border-[#f4c09871] rounded-xl bg-white hover:shadow-sm h-full">
                            <div className="flex justify-between px-6 py-4 border-b border-[#f4c09871]">
                                <h3 className="font-semibold">Active Sessions</h3>
                                <button className="text-orange-500 text-sm">Logout from all devices</button>
                            </div>
                            <div className="flex justify-between items-center px-6 py-4 border-b border-[#cf6a1d47]">
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">💻</div>
                                    <div>
                                        <p className="font-medium">
                                            MacBook Pro{" "}<span className="text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded ml-2">THIS DEVICE</span>
                                        </p>
                                        <p className="text-sm text-gray-500">Kerala, India • Chrome Browser</p>
                                    </div>
                                </div>
                                <button className="border border-gray-400 font-light px-4 py-1 rounded-lg text-sm">Log out</button>
                            </div>

                            {/* SESSION 2 */}
                            <div className="flex justify-between items-center px-6 py-4">
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">📱</div>
                                    <div>
                                        <p className="font-medium">iPhone 13</p>
                                        <p className="text-sm text-gray-500">Calicut, India • 2 hours ago</p>
                                    </div>
                                </div>
                                <button className="border border-gray-400 font-light px-4 py-1 rounded-lg text-sm">Log out</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-col lg:col-span-1 gap-2'>
                    <div className='w-full'>
                        <div className="border border-[#f4c09871] rounded-xl bg-white hover:shadow-sm h-full">
                            <div className="px-6 py-4 border-b border-[#f4c09871] font-semibold">Security Alerts</div>
                            <div className="p-6 space-y-5 text-sm">
                                <div className="flex gap-3 items-start">
                                    <div className="w-8 h-8 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">→</div>
                                    <div>
                                        <p className="font-medium">New login from iPhone 13</p>
                                        <p className="text-gray-500 text-xs">Today, 10:45 AM</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <div className="w-8 h-8 bg-orange-100 text-orange-500 flex items-center justify-center rounded-full">↻</div>
                                    <div>
                                        <p className="font-medium">Password changed</p>
                                        <p className="text-gray-500 text-xs">Sep 12, 2023</p>
                                    </div>
                                </div>
                                <button className="w-full border rounded-lg py-2 text-orange-500 hover:bg-orange-50">View All History</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="border border-[#f4c09871] rounded-xl bg-white hover:shadow-sm p-6 space-y-4 h-full">
                            <h3 className="font-semibold">Account Recovery</h3>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Backup Email</p>
                                <div className="bg-gray-100 rounded-lg px-3 py-2 flex justify-between">
                                    <span>am***@gmail.com</span>
                                    <span className="text-green-500">✔</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Recovery Phone</p>
                                <div className="bg-gray-100 rounded-lg px-3 py-2 flex justify-between">
                                    <span>*******3210</span>
                                    <span className="text-green-500">✔</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500">These methods will be used to verify your identity if you lose access to your account.</p>
                            <button className="bg-gray-900 text-white w-full py-2 rounded-lg">Update Recovery Options</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* DANGER + SCORE */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 border rounded-xl p-6 bg-red-50 border-red-200 space-y-4">
                    <h3 className="text-red-600 font-semibold">Danger Zone</h3>
                    <div className="flex gap-4">
                        <button className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg">Log out from all devices</button>
                        <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">Delete Account</button>
                    </div>
                    <p className="text-xs text-red-400">Once you delete your account, there is no going back. Please be certain. </p>
                </div>
                {/* SCORE */}
                <div className="bg-linear-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6">
                    <p className="text-sm">SECURITY SCORE</p>
                    <div className=" mt-2"><span className='text-4xl font-semibold'>92 </span><span className='text-2xl font-normal'>/ 100</span></div>
                    <p className="text-sm mt-4 opacity-90">Your account security is strong, but adding a hardware key could make it bulletproof.

</p>
                </div>
            </div>
        </div>
    )
}

const securityData = {
    password: {
        lastChanged: "2026-03-20",
    },

    twoFactorAuth: {
        enabled: false,
    },

    loginActivity: [
        {
            id: 1,
            device: "Chrome on MacBook Pro",
            location: "Kozhikode, India",
            time: "2026-04-05 18:30",
            current: true,
        },
        {
            id: 2,
            device: "iPhone 13 - Safari",
            location: "Kochi, India",
            time: "2026-04-04 10:15",
            current: false,
        },
    ],

    recovery: {
        email: "ameer@gmail.com",
        phone: "+91 9876543210",
    },
};