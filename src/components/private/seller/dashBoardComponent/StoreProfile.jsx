import React, { useState } from "react"

const SellerStore = () => {
    const logo = null // Replace with actual logo URL or component
    const [isActive, setIsActive] = useState(true)
    const [isPublic, setIsPublic] = useState(true)

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            {/* ================= HEADER ================= */}
            <div className="relative bg-white border border-gray-500 rounded-2xl overflow-hidden">
                <div className="h-40 bg-gray-200 relative">
                    <img
                        src="https://images.unsplash.com/photo-1633464129147-777bdcc97c1d?q=80&w=2368&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-full h-full object-cover shadow-md shadow-gray-300 opacity-90"
                    />
                    <div className="absolute top-5 left-5  w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl shadow">
                        {logo || <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.996 10.621V19a2 2 0 0 1-2 2H6.004a2 2 0 0 1-1.999-2v-8.379M7.502 8.75l.5-5.75m-.5 5.75c0 2.902 4.498 2.902 4.498 0m-4.498 0c0 3.176-5.155 2.52-4.433-.248l1.045-4.007A2 2 0 0 1 6.048 3h11.904a2 2 0 0 1 1.934 1.495l1.045 4.007c.722 2.769-4.433 3.424-4.433.248M12 8.75V3m0 5.75c0 2.902 4.498 2.902 4.498 0m0 0l-.5-5.75"></path></svg>}
                    </div>
                </div>
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4 ">
                        <h1 className="text-2xl font-semibold" style={{ fontFamily: 'fantasy' }}>Sole Market</h1>
                    </div>
                    <button className="bg-orange-500 text-white px-5 py-2 rounded-lg flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g className="edit-outline"><g fill="currentColor" fillRule="evenodd" className="Vector" clipRule="evenodd"><path d="M2 6.857A4.857 4.857 0 0 1 6.857 2H12a1 1 0 1 1 0 2H6.857A2.857 2.857 0 0 0 4 6.857v10.286A2.857 2.857 0 0 0 6.857 20h10.286A2.857 2.857 0 0 0 20 17.143V12a1 1 0 1 1 2 0v5.143A4.857 4.857 0 0 1 17.143 22H6.857A4.857 4.857 0 0 1 2 17.143z"></path><path d="m15.137 13.219l-2.205 1.33l-1.033-1.713l2.205-1.33l.003-.002a1.2 1.2 0 0 0 .232-.182l5.01-5.036a3 3 0 0 0 .145-.157c.331-.386.821-1.15.228-1.746c-.501-.504-1.219-.028-1.684.381a6 6 0 0 0-.36.345l-.034.034l-4.94 4.965a1.2 1.2 0 0 0-.27.41l-.824 2.073a.2.2 0 0 0 .29.245l1.032 1.713c-1.805 1.088-3.96-.74-3.18-2.698l.825-2.072a3.2 3.2 0 0 1 .71-1.081l4.939-4.966l.029-.029c.147-.15.641-.656 1.24-1.02c.327-.197.849-.458 1.494-.508c.74-.059 1.53.174 2.15.797a2.9 2.9 0 0 1 .845 1.75a3.15 3.15 0 0 1-.23 1.517c-.29.717-.774 1.244-.987 1.457l-5.01 5.036q-.28.281-.62.487m4.453-7.126s-.004.003-.013.006z"></path></g></g></svg>
                        Edit Store
                    </button>
                </div>
            </div>

            {/* ================= MAIN GRID ================= */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* ===== MAIN CONTENT ===== */}
                <div className="lg:col-span-2 space-y-6">
                    {/* STORY */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
                        <h3 className="font-semibold mb-3 flex gap-2 items-center border-b border-gray-200 pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 17.32V7.507q-1.083-.773-2.386-1.16q-1.305-.386-2.614-.386q-.9 0-1.576.107t-1.501.4q-.23.077-.327.222Q3 6.835 3 7.008v9.015q0 .27.192.394t.423.03q.548-.185 1.267-.297t1.618-.111q1.308 0 2.546.3t2.454.98M2 16.496V6.831q0-.371.195-.689t.547-.442q.881-.388 1.833-.563T6.5 4.962q1.639 0 2.91.415q1.27.415 2.598 1.233q.236.13.364.35t.128.505v9.854q1.216-.678 2.454-.98t2.546-.3q.9 0 1.618.111t1.267.296q.23.096.423-.029t.192-.394V6.094q0-.212.144-.356t.357-.144t.356.144t.143.356v10.402q0 .622-.516.947q-.517.324-1.1.107q-.694-.27-1.415-.39q-.721-.121-1.469-.121q-1.291 0-2.517.333q-1.225.334-2.333.984q-.145.086-.318.13q-.173.043-.336.043t-.333-.043t-.313-.13q-1.108-.65-2.333-.984T6.5 17.039q-.78 0-1.534.13q-.753.131-1.466.42q-.544.217-1.022-.131T2 16.496m13.192-3.334V4.59q0-.266.156-.481q.155-.215.404-.296l1.773-.566q.292-.106.538.089t.245.501v8.572q0 .265-.156.48q-.155.215-.404.296l-1.773.566q-.292.106-.537-.089t-.246-.501M7.25 11.64"></path></svg>
                            Our Story
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At SoleMarket, we believe that high-performance footwear is the foundation
                            of every athlete's journey. Founded with a passion for quality craftsmanship
                            and cutting-edge design, we curate a selection of the world's finest sneakers.
                        </p>
                    </div>
                    {/* BUSINESS + SHIPPING */}
                    <div className="grid md:grid-cols-2 gap-2 ">
                        {/* BUSINESS */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow">
                            <h3 className="font-semibold flex gap-2 items-center">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12.713 16.713Q13 16.425 13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17t.713-.288m0-8Q13 8.425 13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9t.713-.288M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
                                Business Information</h3>
                            <div className="text-sm flex items-top gap-2">
                                <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} d="M176 416v64M80 32h192a32 32 0 0 1 32 32v412a4 4 0 0 1-4 4H48h0V64a32 32 0 0 1 32-32m240 160h112a32 32 0 0 1 32 32v256h0h-160h0V208a16 16 0 0 1 16-16"></path><path fill="currentColor" d="M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79"></path><ellipse cx={256} cy={176} fill="currentColor" rx={15.95} ry={16.03} transform="rotate(-45 255.99 175.996)"></ellipse><path fill="currentColor" d="M258.08 111.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79M400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-64 160a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></path></svg>
                                <div>
                                    <p className="text-gray-500">LEGAL ENTITY</p>
                                    <p className="font-medium">SoleMarket LLC</p>
                                </div>
                            </div>
                            <div className="text-sm flex items-start gap-2">
                                <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 2)" stroke-width="0.8"><path d="m6.5 16.54l.631-.711Q8.205 14.6 9.064 13.49l.473-.624Q12.5 8.875 12.5 6.533C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033q0 2.342 2.963 6.334l.473.624a55 55 0 0 0 2.564 3.05" /><circle cx="6.5" cy="6.5" r="2.5" /></g></svg>
                                <div>
                                    <p className="text-gray-500">HEADQUARTERS</p>
                                    <p className="font-medium">Portland, OR 97204</p>
                                </div>
                            </div>
                            <div className="text-sm flex items-start gap-2">
                                <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z" /></svg>
                                <div>
                                    <p className="text-gray-500">EMAIL</p>
                                    <p className="font-medium">contact@solemarket.com</p>
                                </div>
                            </div>
                        </div>
                        {/* SHIPPING */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow">
                            <h3 className="font-semibold flex gap-2 items-center">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32"><path fill="currentColor" d="m29.92 16.61l-3-7A1 1 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h2.14a4 4 0 0 0 7.72 0h6.28a4 4 0 0 0 7.72 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.08-.39M23 11h2.34l2.14 5H23ZM9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m10.14-3h-6.28a4 4 0 0 0-7.72 0H4V8h17v12.56A4 4 0 0 0 19.14 23M23 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5-3h-1.14A4 4 0 0 0 23 20v-2h5Z"></path></svg>
                                Shipping & Delivery
                            </h3>
                            <div className="flex justify-between gap-0.5 text-sm bg-gray-50 rounded-md p-2">
                                <span className="text-gray-500">Service Area</span>
                                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-end text-xs"> NA & Europe</span>
                            </div>
                            <div className="flex justify-between gap-0.5 text-sm bg-gray-50 rounded-md p-2">
                                <span className="text-gray-500">Estimate</span>
                                <span className="font-medium text-end text-xs py-1">3–5 Business Days</span>
                            </div>
                            <div className="flex flex-col gap-1 text-gray-500 text-sm mt-2">
                                <h5>Sipping Partners</h5>
                                <div className="flex gap-4 bg-orange-50 py-2 px-4 flex-wrap rounded-md">
                                    <p className="flex gap-1 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 640 640"><path fill="currentColor" d="m586 348.5l53.3-59.9h-62.4l-21.7 24.8l-22.5-24.8H414v-16h56.1v-48.1H318.9V300h-.5c-9.6-11-21.5-14.8-35.4-14.8c-28.4 0-49.8 19.4-57.3 44.9c-18-59.4-97.4-57.6-121.9-14v-24.2H49v-26.2h60v-41.1H0V409h49v-77.5h48.9c-1.5 5.7-2.3 11.8-2.3 18.2c0 73.1 102.6 91.4 130.2 23.7h-42c-14.7 20.9-45.8 8.9-45.8-14.6h85.5c3.7 30.5 27.4 56.9 60.1 56.9c14.1 0 27-6.9 34.9-18.6h.5V409h212.2l22.1-25l22.3 25H640zm-446.7-16.6c6.1-26.3 41.7-25.6 46.5 0zm153.4 48.9c-34.6 0-34-62.8 0-62.8c32.6 0 34.5 62.8 0 62.8m167.8 19.1h-94.4V233.4h95v30.2H405v33.9h55.5v28.1h-56.1v44.7h56.1zm-45.9-39.8v-24.4h56.1v-44l50.7 57l-50.7 57v-45.6zm138.6 10.3l-26.1 29.5H489l45.6-51.2l-45.6-51.2h39.7l26.6 29.3l25.6-29.3h38.5l-45.4 51l46 51.4h-40.5z"></path></svg>
                                        {/* FedEx */}
                                    </p>
                                    <p className="flex gap-1 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 384 512"><path fill="#c49d00" d="M103.2 303c-5.2 3.6-32.6 13.1-32.6-19V180H37.9v102.6c0 74.9 80.2 51.1 97.9 39V180h-32.6zM4 74.82v220.9c0 103.7 74.9 135.2 187.7 184.1c112.4-48.9 187.7-80.2 187.7-184.1V74.82c-116.3-61.6-281.8-49.6-375.4 0m358.1 220.9c0 86.6-53.2 113.6-170.4 165.3c-117.5-51.8-170.5-78.7-170.5-165.3v-126.4c102.3-93.8 231.6-100 340.9-89.8zm-209.6-107.4v212.8h32.7v-68.7c24.4 7.3 71.7-2.6 71.7-78.5c0-97.4-80.7-80.92-104.4-65.6m32.7 117.3v-100.3c8.4-4.2 38.4-12.7 38.4 49.3c0 67.9-36.4 51.8-38.4 51m79.1-86.4c.1 47.3 51.6 42.5 52.2 70.4c.6 23.5-30.4 23-50.8 4.9v30.1c36.2 21.5 81.9 8.1 83.2-33.5c1.7-51.5-54.1-46.6-53.4-73.2c.6-20.3 30.6-20.5 48.5-2.2v-28.4c-28.5-22-79.9-9.2-79.7 31.9" strokeWidth={4} stroke="#c49d00"></path></svg>
                                        {/* UPS */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RETURN POLICY */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
                        <h3 className="font-semibold mb-4 flex gap-2 items-center">
                            <svg className="text-orange-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M10.614 12.5h4.194q.213 0 .357-.143t.143-.357t-.143-.357t-.357-.143h-4.194l1.746-1.746q.14-.14.15-.341q.01-.202-.156-.367q-.16-.16-.354-.16t-.354.16l-2.388 2.388q-.242.243-.242.566t.242.566l2.388 2.388q.14.14.342.153t.366-.153q.16-.16.16-.354t-.16-.354zM5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h4.7q-.137-.766.366-1.383Q11.184 2 12 2q.835 0 1.338.617T13.685 4h4.7q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192m6.923-14.77q.212-.213.212-.538t-.212-.537T12 2.942t-.537.213t-.213.537t.213.538t.537.212t.538-.212M5 19V5z" strokeWidth={0.5} stroke="currentColor"></path></svg>
                            Return & Refund Policy</h3>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-400">Window</p>
                                <p className="font-semibold text-orange-500">30 Days</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-400">Condition</p>
                                <p className="font-semibold">Unused / Original</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-400">Refund Type</p>
                                <p className="font-semibold">Full Refund</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===== RIGHT SIDEBAR (moves on mobile) ===== */}
                <div className="space-y-6">
                    {/* STORE PERFORMANCE */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
                        <p className="text-sm text-gray-500 mb-2">STORE PERFORMANCE</p>
                        <div className="flex items-center gap-2">
                            <h2 className="text-3xl font-semibold">4.8</h2>
                            <div className="text-xs text-gray-500">
                                <p className="text-orange-500">★★★★★</p>
                                <p>Average Rating</p>
                            </div>
                        </div>
                        <div className="mt-4 text-sm flex justify-between border-t border-gray-200 pt-4 border-b pb-4">
                            <span className="text-gray-500">Target Audience</span>
                            <span className="font-semibold">Unisex</span>
                        </div>
                        <div className="mt-3 text-sm flex justify-between items-center">
                            <span className="text-gray-500">Social Presence</span>
                            <div className="flex gap-2">
                                <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M29.394 14.394a27.716 27.716 0 1 1 21.213 51.212a27.716 27.716 0 0 1-21.213-51.212"/><path d="M50.612 14.384q-.4-.165-.802-.318a3.7 3.7 0 0 0-1.733 1.225l-.33.42a4.8 4.8 0 0 1-3.757 1.836l-3.825.015a5 5 0 0 1-3.442-1.356l-.121-.113a4.537 4.537 0 0 0-6.279.062l-1.554 1.52a1.184 1.184 0 0 0 1.608 1.738l1.5-1.311a.78.78 0 0 1 1.084 1.122l-1.307 1.395a1.4 1.4 0 0 0-.374.834a1.406 1.406 0 0 1-1.37 1.278l-1.894.041a3.53 3.53 0 0 0-2.286.908l-2.148 1.94l-1.191 2.534a2.25 2.25 0 0 1-1.352 1.187l-.899.287a1.149 1.149 0 0 0 .23 2.237l.914.095a2.34 2.34 0 0 0 1.868-.642l.663-.637a4.32 4.32 0 0 1 3.072-1.207h.037m40.352 5.562q-.239.27-.544.472l-.639.425a2.32 2.32 0 0 0-1.03 2.133l.032.368a1.88 1.88 0 0 1-3.456 1.173l-.429-.672c-1.117-1.749-3.64-1.839-4.878-.174l-.471.634a2.9 2.9 0 0 0-.451.904l-.559 1.903a.613.613 0 0 1-1.11.15l-2.299-3.695a4.14 4.14 0 0 0-3.49-1.953l-.956-.005a1.77 1.77 0 0 1-1.227-.504l-1.095-1.069a.578.578 0 0 0-.81.824l2.4 2.378a2.082 2.082 0 0 1-1.55 3.56l-.729-.03a3.76 3.76 0 0 1-2.553-1.148l-2.329-2.417a.738.738 0 1 0-1.059 1.029l4.488 4.583a2.94 2.94 0 0 1-.008 4.124l-.963.975a5.34 5.34 0 0 0-1.54 3.734l-.016 4.703a6.9 6.9 0 0 1-1.934 4.77l-1.122 1.164c-.622.644-1.492 1-2.388.98a3.173 3.173 0 0 1-3.113-3.071l-.111-3.515a3 3 0 0 0-1.153-2.27a3 3 0 0 1-1.153-2.312l-.028-1.538a3.84 3.84 0 0 0-3.792-3.77a3.84 3.84 0 0 1-2.659-1.114l-.965-.958a7.2 7.2 0 0 1-2.086-5.88l.265-2.46a2.93 2.93 0 0 1 .614-1.503l1.787-2.265a.626.626 0 0 1 .978-.007a.63.63 0 0 0 .508.232l3.18-.106a.904.904 0 0 1 .927.793a.9.9 0 0 0 .597.743l3.31 1.163a.716.716 0 0 0 .863-.327a.72.72 0 0 1 .65-.368l2.038.068a2.354 2.354 0 0 0 1.835-3.92l-1.425-1.597m0 0l2.662-.273c.471-.048.947.05 1.36.282l.577.324a1.388 1.388 0 0 0 1.813-2.012l-.393-.556a2.16 2.16 0 0 0-1.927-.909l-.714.053a3.43 3.43 0 0 0-2.85 1.965zm0 0l-1.353.08a2.16 2.16 0 0 0-1.394.623a2.16 2.16 0 0 1-1.327.619l-2.497.226m0 0l-2.133-2.446m2.133 2.445c-.692-.684-2.133-2.445-2.133-2.445"/><path d="M17.155 24.304a2.41 2.41 0 0 0 2.004 1.182l4.422.134l-.8-3.005a3.03 3.03 0 0 0-2.387-2.21m46.902 24.428l-1.753-1.572a1.607 1.607 0 0 0-2.424 2.067l1.632 2.534c.354.548.844.988 1.417 1.278m-23.684 7.478a1.157 1.157 0 0 0 2.152.651l.187-.317a1.8 1.8 0 0 0 .247-.854l.045-1.387a.998.998 0 0 0-1.79-.641l-.367.477a2.05 2.05 0 0 0-.42 1.132z"/></g></svg>
                                </span>
                                <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.25 6a2.75 2.75 0 1 0-5.33.956L8.606 10.23a2.75 2.75 0 1 0-.01 3.55l6.208 3.679a2.75 2.75 0 1 0 .687-1.336l-6.27-3.716a2.8 2.8 0 0 0 .001-.806l6.6-3.423A2.75 2.75 0 0 0 20.25 6M17.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-11 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m11 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5" clip-rule="evenodd"/></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* QUICK SETTINGS */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow">
                        <h3 className="font-semibold">Quick Settings</h3>
                        {/* STORE STATUS */}
                        <div className="flex justify-between items-center">

                            <div className="flex gap-2 items-center">
                                <div className="p-2 bg-green-50 text-green-400 rounded-md">
                                    <svg className="" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256"><path fill="currentColor" d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26M109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z" strokeWidth={0.5} stroke="currentColor"></path></svg>
                                </div>
                                <div>
                                    <p className="font-medium">Store Status</p>
                                    <p className="text-xs text-gray-500">{isActive ? "Currently Active" : "Paused"}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsActive(!isActive)}
                                className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${isActive ? "bg-orange-500" : "bg-gray-300"}`}
                            >
                                <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform duration-300 ${isActive ? "translate-x-5" : "translate-x-0"}`} />
                            </button>
                        </div>
                        {/* PUBLIC VISIBILITY */}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="p-2 bg-blue-50 text-blue-400 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9" stroke-width="0.6" stroke="currentColor" /></svg>
                                </div>
                                <div>
                                    <p className="font-medium">Public Visibility</p>
                                    <p className="text-xs text-gray-500">{isPublic ? "Visible to shoppers" : "Hidden from shoppers"}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsPublic(!isPublic)}
                                className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${isPublic ? "bg-orange-500" : "bg-gray-300"}`}
                            >
                                <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform duration-300 ${isPublic ? "translate-x-5" : "translate-x-0"}`} />
                            </button>
                        </div>
                        <button className="w-full border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                            Manage All Settings
                        </button>
                    </div>
                    {/* GROW STORE */}
                    <div className="bg-orange-500 text-white rounded-xl p-6 space-y-3 relative overflow-hidden shadow border-amber-500">
                        <h3 className="font-semibold text-lg">Grow Your Store</h3>
                        <p className="text-sm opacity-90">Promote your profile to get 2x more visibility in the marketplace.</p>
                        <svg className="absolute bottom-0 right-0 opacity-40" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 3Q5.375 3 4.688 4.25T4 7q0 1.575.438 2.788T5.25 11.6L8 11.05q.325-.8.663-1.825T9 7q0-1.5-.687-2.75T6.5 3m1.375 13q.475 0 .8-.35T9 14.675q0-.425-.2-.875t-.4-.8l-2.4.5q0 1 .438 1.75t1.437.75M17.5 8q-1.125 0-1.812 1.25T15 12q0 1.2.338 2.213T16 16.05l2.75.55q.375-.6.813-1.8T20 12q0-1.5-.687-2.75T17.5 8m-1.375 13q1 0 1.438-.75T18 18.5l-2.4-.5q-.2.35-.4.8t-.2.875q0 .5.313.913t.812.412m-8.25-3Q5.95 18 4.95 16.575t-.95-3.2l-.45-.675q-.275-.425-.913-1.925T2 7q0-2.575 1.275-4.288T6.5 1q2.125 0 3.313 1.888T11 7q0 1.45-.4 2.675t-.7 1.975l.2.325q.2.35.55 1.113t.35 1.587q0 1.425-.888 2.375T7.876 18m8.25 5q-1.35 0-2.238-.95T13 19.675q0-.825.35-1.588t.55-1.112l.2-.325q-.3-.75-.7-1.975T13 12q0-2.225 1.188-4.112T17.5 6q1.95 0 3.225 1.713T22 12q0 2.275-.638 3.763t-.912 1.912l-.45.7q.025 1.775-.962 3.2T16.125 23"/></svg>
                        <button className="bg-white text-orange-500 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300">Get Featured</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SellerStore