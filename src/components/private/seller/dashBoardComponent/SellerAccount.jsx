import React from "react"

export default function SellerAccount() {
    return (
        <div className="p-6 max-w-6xl mx-auto space-y-6">
            <div className="relative bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between overflow-hidden">
                {/* grid background */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="flex items-center gap-4 z-10">
                    <div className="w-20 h-20 rounded-full bg-orange-500 text-white flex items-center justify-center text-3xl font-semibold shadow">A</div>
                    <div>
                        <h1 className="text-2xl font-semibold">Ameer Suhail</h1>
                        <p className="text-gray-700 text-sm flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 12 12"><path fill="currentColor" d="M3 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M3.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M5 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M5.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M7 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m-6-2A2.5 2.5 0 0 1 3.5 1h5A2.5 2.5 0 0 1 11 3.5v5A2.5 2.5 0 0 1 8.5 11h-5A2.5 2.5 0 0 1 1 8.5zM3.5 2a1.5 1.5 0 0 0-1.415 1h7.83A1.5 1.5 0 0 0 8.5 2zM10 4H2v4.5A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5z" strokeWidth={0.2} stroke="currentColor"></path></svg> Member since 2024</p>
                    </div>
                </div>
                <button className="z-10 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg flex items-center gap-2">
                    Edit Profile
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g className="edit-outline"><g fill="currentColor" fillRule="evenodd" className="Vector" clipRule="evenodd" strokeWidth={0.2} stroke="currentColor"><path d="M2 6.857A4.857 4.857 0 0 1 6.857 2H12a1 1 0 1 1 0 2H6.857A2.857 2.857 0 0 0 4 6.857v10.286A2.857 2.857 0 0 0 6.857 20h10.286A2.857 2.857 0 0 0 20 17.143V12a1 1 0 1 1 2 0v5.143A4.857 4.857 0 0 1 17.143 22H6.857A4.857 4.857 0 0 1 2 17.143z"></path><path d="m15.137 13.219l-2.205 1.33l-1.033-1.713l2.205-1.33l.003-.002a1.2 1.2 0 0 0 .232-.182l5.01-5.036a3 3 0 0 0 .145-.157c.331-.386.821-1.15.228-1.746c-.501-.504-1.219-.028-1.684.381a6 6 0 0 0-.36.345l-.034.034l-4.94 4.965a1.2 1.2 0 0 0-.27.41l-.824 2.073a.2.2 0 0 0 .29.245l1.032 1.713c-1.805 1.088-3.96-.74-3.18-2.698l.825-2.072a3.2 3.2 0 0 1 .71-1.081l4.939-4.966l.029-.029c.147-.15.641-.656 1.24-1.02c.327-.197.849-.458 1.494-.508c.74-.059 1.53.174 2.15.797a2.9 2.9 0 0 1 .845 1.75a3.15 3.15 0 0 1-.23 1.517c-.29.717-.774 1.244-.987 1.457l-5.01 5.036q-.28.281-.62.487m4.453-7.126s-.004.003-.013.006z"></path></g></g></svg>
                </button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {/* PERSONAL INFO */}
                <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl p-6">
                    <div className="text-lg font-semibold mb-4 flex items-center justify-between gap-2">
                        <h2>Personal Information</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd" strokeWidth={1.4} stroke="currentColor"><path d="M24 27a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></path><path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20M33.63 39.21A17.9 17.9 0 0 1 24 42a17.9 17.9 0 0 1-9.831-2.92q-.36-.45-.73-.93A2.14 2.14 0 0 1 13 36.845c0-1.077.774-1.98 1.809-2.131c6.845-1 11.558-.914 18.412.035A2.08 2.08 0 0 1 35 36.818c0 .48-.165.946-.463 1.31q-.461.561-.907 1.082m3.355-2.744c-.16-1.872-1.581-3.434-3.49-3.698c-7.016-.971-11.92-1.064-18.975-.033c-1.92.28-3.335 1.856-3.503 3.733A17.94 17.94 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.015 12.466"></path></g></svg>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-gray-400 text-xs">EMAIL ADDRESS</p>
                            <p className="font-medium">ameer@gmail.com</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-xs">PHONE NUMBER</p>
                            <p className="font-medium">+91 9876543210</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-xs">GENDER</p>
                            <p className="font-medium">Male</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-xs">DATE OF BIRTH</p>
                            <p className="font-medium">2003-06-12</p>
                        </div>
                    </div>
                </div>
                {/* PREFERENCES */}
                <div className="bg-white border border-gray-300 rounded-xl p-6">
                    <h2 className="text-lg font-semibold mb-4 flex items-center justify-between gap-2">
                        <h2>Preferences</h2>
                        <svg className="text-gray-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M12 6.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M12 8a3 3 0 1 0-2.905-3.75H1.75a.75.75 0 0 0 0 1.5h7.345A3 3 0 0 0 12 8m-6.5 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m1.405.75A3.001 3.001 0 0 1 1 11a3 3 0 0 1 5.905-.75h7.345a.75.75 0 0 1 0 1.5z" clipRule="evenodd" /></svg>
                    </h2>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
                            <span className="text-sm flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M2 5h14M9 2v3m4 0q-2 8-9 11m2-7q2 4 6 6m1 7l5-11l5 11m-1.4-3h-7.2" /></svg>
                                Language</span>
                            <span className="text-orange-500 font-medium">English</span>
                        </div>
                        <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
                            <span className="text-sm flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"><path d="M19 22v-7.1a7 7 0 0 0-2.052-4.95L14.998 8v6.587c0 .89-1.077 1.337-1.707.707L11.996 14c-.5-.5-1.701-.8-2.502 0s-.5 2 0 2.5l5.504 5.5" /><path d="M11 2h2a2 2 0 0 1 2 2v2m-4-4c0 1.333.8 4 4 4m-4-4H9m6 4v6M5 12v2a2 2 0 0 0 2 2h2c0-1.333-.8-4-4-4m0 0V6m4-4H7a2 2 0 0 0-2 2v2m4-4c0 1.333-.8 4-4 4" /><circle cx="10" cy="9" r="1" transform="rotate(90 10 9)" /></g></svg>
                                Currency</span>
                            <span className="text-orange-500 font-medium">INR</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-md font-normal flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" d="M7 18c-1.829.412-3 1.044-3 1.754C4 20.994 7.582 22 12 22s8-1.006 8-2.246c0-.71-1.171-1.342-3-1.754"></path><path d="M14.5 9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path><path d="M13.257 17.494a1.813 1.813 0 0 1-2.514 0c-3.089-2.993-7.228-6.336-5.21-11.19C6.626 3.679 9.246 2 12 2s5.375 1.68 6.467 4.304c2.016 4.847-2.113 8.207-5.21 11.19Z"></path></g></svg>
                            Saved Addresses
                        </h2>
                        <button className="text-blue-500 text-sm">+ Add New</button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border border-orange-200 rounded-xl p-4 bg-white">
                            <div className="flex justify-between items-center mb-3">
                                <p className="text-sm font-medium flex items-center gap-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75"></path></svg>
                                    Home
                                </p>
                                <span className="text-xs bg-orange-100 text-orange-500 px-2 py-1 rounded">DEFAULT</span>
                            </div>
                            <p className="text-sm font-light mt-1 text-gray-600">📞 +91 9876543210</p>
                            <p className="text-sm font-light text-gray-500">Kozhikode, Kerala - 673001</p>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-4 bg-white">
                            <p className="text-sm font-medium mb-3 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 22V6c0-1.886 0-2.828-.586-3.414S9.886 2 8 2H6c-1.886 0-2.828 0-3.414.586S2 4.114 2 6v12c0 1.886 0 2.828.586 3.414S4.114 22 6 22zm0 0h6c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-6c0-1.886 0-2.828-.586-3.414S19.886 8 18 8h-6"></path><path strokeLinecap="round" d="M18.5 16h-3m3-4h-3m-7 2h-3m3-4h-3m3-4h-3"></path></g></svg>
                                Work
                            </p>
                            <p className="text-sm  font-light mt-1 text-gray-600">📞 +91 9876543210 </p>
                            <p className="text-sm font-light text-gray-500">Cyber Park, Calicut</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-300 rounded-xl p-6 space-y-5">
                    <div className="text-lg font-semibold flex items-center justify-between gap-2">
                        <h2>Activity Summary</h2>
                        <svg className="text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M4.318 19.682C3 18.364 3 16.242 3 12s0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318" /><path d="m7 14l2.793-2.793a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10" /></g></svg>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-orange-50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-semibold text-orange-500">42</p>
                            <p className="text-xs text-gray-500 text-nowrap">TOTAL SALES</p>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-4 text-center">
                            <p className="text-2xl font-semibold text-gray-700">#10</p>
                            <p className="text-xs text-gray-500 text-nowrap">Range</p>
                        </div>
                    </div>
                    <button className="text-red-500 flex items-center gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm10.44 4.5l-1.97-1.97a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734l1.97-1.97H6.75a.75.75 0 0 1 0-1.5Z" /></svg>
                        Sign out from all devices
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-300">
                <p>Last active: Today at 10:45 AM</p>
                <div className="flex gap-2">
                    {/* <span className="cursor-pointer hover:text-gray-600">Seller's Privacy Policy</span> */}
                    <span className="cursor-pointer hover:text-gray-600">|</span>
                    <span className="cursor-pointer hover:text-gray-600">Terms of Services</span>
                </div>
            </div>
        </div>
    )
}

