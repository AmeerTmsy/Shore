import React from 'react'
import { useSideBar } from '../../../../context/ProfileSideBarContext';

export default function AdminSecurity() {
    const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()
    return (
        <>
            <div className="">
                <div className='flex justify-between items-center shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)] p-4 border-b border-gray-300'>
                    <h2 className="text-xl font-semibold">Security Settings</h2>
                    {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
                </div>
                <div className='p-4 space-y-2'>
                    {/* Password */}
                    <div className="border border-gray-300 rounded-xl p-4 bg-white">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-medium">Password</p>
                                <p className="text-xs text-gray-500">
                                    Last changed: {securityData.password.lastChanged}
                                </p>
                            </div>
                            <button className="text-blue-600 text-sm bg-blue-100 px-3 py-1 border rounded">
                                Change
                            </button>
                        </div>
                    </div>

                    {/* 2FA */}
                    <div className="border border-gray-300 rounded-xl p-4 bg-white">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-medium">Two-Factor Authentication</p>
                                <p className="text-xs text-gray-500">
                                    {securityData.twoFactorAuth.enabled
                                        ? "Enabled"
                                        : "Not Enabled"}
                                </p>
                            </div>
                            <button className="text-blue-600 text-sm bg-blue-100 px-4 py-1 border rounded">
                                {securityData.twoFactorAuth.enabled ? "Disable" : "Enable"}
                            </button>
                        </div>
                    </div>

                    {/* Login Activity */}
                    <div className="border border-gray-300 rounded-xl p-4 bg-white">
                        <p className="font-medium mb-3">Login Activity</p>

                        {securityData.loginActivity.map((log) => (
                            <div
                                key={log.id}
                                className="flex justify-between items-center border-b py-2 last:border-none"
                            >
                                <div>
                                    <p className="text-sm">{log.device}</p>
                                    <p className="text-xs text-gray-500">
                                        {log.location} • {log.time}
                                    </p>
                                </div>

                                <div className="text-right text-xs">
                                    {log.current ? (
                                        <span className="text-green-600 rounded-full px-2 bg-green-100 border pb-px">Current</span>
                                    ) : (
                                        <button className="text-red-500  bg-red-100 px-4 py-1 border rounded">Logout</button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recovery */}
                    <div className="border border-gray-300 rounded-xl p-4 bg-white">
                        <p className="font-medium mb-2">Recovery Options</p>
                        <p className="text-sm">
                            Email: {securityData.recovery.email}
                        </p>
                        <p className="text-sm">
                            Phone: {securityData.recovery.phone}
                        </p>

                        <button className="text-blue-600 text-sm mt-2">
                            Update
                        </button>
                    </div>
                </div>

            </div>
        </>
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