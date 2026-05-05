import React, { useState } from 'react'
import { useSideBar } from '../../../../context/ProfileSideBarContext';

export default function SellerSecurity() {
    const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()
    const [twoFactorAuth, setTwoFactorAuth] = useState(false)
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
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32"><path fill="currentColor" d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2m0 16a7 7 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18" strokeWidth={1} stroke="currentColor"></path><circle cx={22} cy={10} r={2} fill="currentColor" strokeWidth={1} stroke="currentColor"></circle></svg>
                                    </div>
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
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32"><path fill="currentColor" d="m11 23.18l-2-2.001l-1.411 1.41L11 26l6-6l-1.41-1.41zM28 30h-4v-2h4V16h-4V8a4.005 4.005 0 0 0-4-4V2a6.007 6.007 0 0 1 6 6v6h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2" strokeWidth={1} stroke="currentColor"></path><path fill="currentColor" d="M20 14h-2V8A6 6 0 0 0 6 8v6H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2M8 8a4 4 0 0 1 8 0v6H8Zm12 20H4V16h16Z" strokeWidth={1} stroke="currentColor"></path></svg>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600 font-medium text-sm">ENABLED</span>
                                        <div onClick={() => setTwoFactorAuth(prev => !prev)} className="w-10 h-5 bg-green-500 rounded-full relative p-0.5 group">
                                            <div className={`w-4 h-4 bg-white rounded-full transition ${twoFactorAuth ? 'transform translate-x-5' : ''}`}></div>
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
                                    <div className="w-8 h-8 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"><path fill="currentColor" d="M9.76 0C15.417 0 20 4.477 20 10S15.416 20 9.76 20c-3.191 0-6.142-1.437-8.07-3.846a.644.644 0 0 1 .115-.918a.68.68 0 0 1 .94.113a8.96 8.96 0 0 0 7.016 3.343c4.915 0 8.9-3.892 8.9-8.692s-3.985-8.692-8.9-8.692a8.96 8.96 0 0 0-6.944 3.255a.68.68 0 0 1-.942.101a.644.644 0 0 1-.103-.92C3.703 1.394 6.615 0 9.761 0m.545 6.862l2.707 2.707c.262.262.267.68.011.936L10.38 13.15a.66.66 0 0 1-.937-.011a.66.66 0 0 1-.01-.937l1.547-1.548l-10.31.001A.66.66 0 0 1 0 10c0-.361.3-.654.67-.654h10.268L9.38 7.787a.66.66 0 0 1-.01-.937a.66.66 0 0 1 .935.011" strokeWidth={0.5} stroke="currentColor"></path></svg>
                                    </div>
                                    <div>
                                        <p className="font-medium">New login from iPhone 13</p>
                                        <p className="text-gray-500 text-xs">Today, 10:45 AM</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <div className="w-8 h-8 bg-orange-100 text-orange-500 flex items-center justify-center rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}><path strokeLinecap="round" d="M21.5 12A9.5 9.5 0 1 1 12 2.5a9.5 9.5 0 0 1 8.71 5.7m.79-2.7l-.475 3.175L18 8"></path><path d="M10 11V9.5a2 2 0 1 1 4 0V11m-2.75 5.5h1.5c1.173 0 1.76 0 2.163-.31a1.5 1.5 0 0 0 .277-.277c.31-.404.31-.99.31-2.163s0-1.76-.31-2.163a1.5 1.5 0 0 0-.277-.277c-.404-.31-.99-.31-2.163-.31h-1.5c-1.173 0-1.76 0-2.163.31a1.5 1.5 0 0 0-.277.277c-.31.404-.31.99-.31 2.163s0 1.76.31 2.163a1.5 1.5 0 0 0 .277.277c.404.31.99.31 2.163.31Z"></path></g></svg>
                                    </div>
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
                                    <span className="text-green-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 48 48"><defs><mask id="SVGIQLGgV2F"><g fill="none" strokeLinejoin="round" strokeWidth={6}><path fill="#fff" stroke="#fff" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"></path><path stroke="#000" strokeLinecap="round" d="m16 24l6 6l12-12"></path></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGIQLGgV2F)"></path></svg>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Recovery Phone</p>
                                <div className="bg-gray-100 rounded-lg px-3 py-2 flex justify-between">
                                    <span>*******3210</span>
                                    <span className="text-green-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 48 48"><defs><mask id="SVGIQLGgV2F"><g fill="none" strokeLinejoin="round" strokeWidth={6}><path fill="#fff" stroke="#fff" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"></path><path stroke="#000" strokeLinecap="round" d="m16 24l6 6l12-12"></path></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGIQLGgV2F)"></path></svg>
                                    </span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 my-6">These methods will be used to verify your identity if you lose access to your account.</p>
                            <button className="bg-gray-900 text-white text-sm w-full py-2 rounded-lg">Update Recovery Options</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* DANGER + SCORE */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 border rounded-xl p-6 bg-red-50 border-red-200 space-y-4">
                    <h3 className="text-red-600 font-semibold">Danger Zone</h3>
                    <div className="flex gap-4">
                        <button className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg flex justify-center items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 20 20"><path fill="currentColor" d="M10.24 0c3.145 0 6.057 1.395 7.988 3.744a.644.644 0 0 1-.103.92a.68.68 0 0 1-.942-.1a8.96 8.96 0 0 0-6.944-3.256c-4.915 0-8.9 3.892-8.9 8.692s3.985 8.692 8.9 8.692a8.96 8.96 0 0 0 7.016-3.343a.68.68 0 0 1 .94-.113a.644.644 0 0 1 .115.918C16.382 18.564 13.431 20 10.24 20C4.583 20 0 15.523 0 10S4.584 0 10.24 0m6.858 7.16l2.706 2.707c.262.261.267.68.012.936l-2.644 2.643a.66.66 0 0 1-.936-.01a.66.66 0 0 1-.011-.937l1.547-1.547H7.462a.66.66 0 0 1-.67-.654c0-.362.3-.655.67-.655h10.269l-1.558-1.558a.66.66 0 0 1-.011-.936a.66.66 0 0 1 .936.011" strokeWidth={0.5} stroke="currentColor"></path></svg>
                            <span>Log out from all devices</span>
                        </button>
                        <button className="flex-1 bg-red-600 text-white py-2 rounded-lg flex justify-center items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={4}><path d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></path><path strokeLinecap="round" d="m33 31l8 8m-8 0l8-8m-14-3h-8.2c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8V42h21"></path></g></svg>
                            <span>Delete Account</span>
                            </button>
                    </div>
                    <p className="text-xs text-red-400">Once you delete your account, there is no going back. Please be certain. </p>
                </div>
                {/* SCORE */}
                <div className="bg-linear-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6">
                    <p className="text-sm">SECURITY SCORE</p>
                    <div className=" mt-2"><span className='text-4xl font-semibold'>92 </span><span className='text-2xl font-normal'>/ 100</span></div>
                    <p className="text-sm mt-4 opacity-90">Your account security is strong, but adding a hardware key could make it bulletproof.</p>
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