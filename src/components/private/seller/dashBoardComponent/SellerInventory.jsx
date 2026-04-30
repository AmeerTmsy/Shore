import React from 'react'
import { useSideBar } from '../../../../context/ProfileSideBarContext'

export default function () {
    const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()

    return (
        <div>
            <div className='p-4'>
                <div className="mb-6 ">
                    <div className="flex gap-2 justify-between">
                        <div>
                            <h1 className=" text-2xl md:text-3xl font-medium md:font-semibold mt-0 md:mt-3">Inventory</h1>
                            <p className="text-gray-500 font-light">Manage inventory efficiently, track availability, and never miss a sale.</p>
                        </div>
                        <div className='flex items-center'>
                            {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 z-10 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-green-50 rounded-lg">
                                    <svg className='text-green-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m3 17l6-6l4 4l8-8" /><path d="M17 7h4v4" /></g></svg>
                                </div>
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+24%</span>
                            </div>
                            <div className=''>
                                <div className='flex justify-between border-b border-gray-300 items-center text-slate-700 text-sm font-light mb-2'>
                                    <p className=" font-medium">Top Sale</p>
                                    <select className='border rounded-md mb-0.5 outline-none' name="duration" id="duration">
                                        <option value="week">last Week</option>
                                        <option value="mothe">last month</option>
                                        <option value="month3">last 3 months</option>
                                        <option value="month6">last 6 months</option>
                                        <option value="year">last year</option>
                                    </select>
                                </div>
                                <div className='space-y-1'>
                                    <div className='flex justify-between items-center text-slate-500 text-sm font-light'>
                                        <p className="">Nike Air</p>
                                        <p className="">$45.2k</p>
                                    </div>
                                    <div className='flex justify-between items-center text-slate-500 text-sm font-light'>
                                        <p className="">PUMA Sport</p>
                                        <p className="">$45.2k</p>
                                    </div>
                                    <div className='flex justify-between items-center text-slate-500 text-sm font-light'>
                                        <p className="">Canvas Flow</p>
                                        <p className="">$45.2k</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-end gap-2'>
                                    <div className='mt-4'>
                                        <p className="text-slate-500 text-sm font-medium">Total Sales</p>
                                        <h3 className="text-2xl font-black text-on-surface ">$45.2k</h3>
                                    </div>
                                    <button>
                                        <span className='hover:underline cursor-pointer text-blue-500 text-xs font-normal flex items-center gap-0.5'>Explore all<svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <svg className='text-gray-600' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m15.5 19.925l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4zM21 10h-2V5h-2v3H7V5H5v14h6v2H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.175q.275-.875 1.075-1.437T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5zm-8.287-5.287Q13 4.425 13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5t.713-.288" stroke-width="0" stroke="currentColor" /></svg>
                                </div>
                                {/* <span className="text-xs font-bold text-gray-600 bg-green-50 px-2 py-1 rounded">+12%</span> */}
                            </div>
                            <div className=''>
                                <div className='flex justify-between border-b border-gray-300 items-center text-slate-700 text-sm font-light mb-2'>
                                    <p className=" font-medium">High in Stock</p>
                                    <p className=" font-medium">Available</p>
                                </div>
                                <div className='space-y-1'>
                                    <div className='flex justify-between items-center text-slate-500 text-sm font-light'>
                                        <p className="">Nike Air</p>
                                        <p className="">53</p>
                                    </div>
                                    <div className='flex justify-between items-center text-slate-500 text-sm font-light'>
                                        <p className="">PUMA Sport</p>
                                        <p className="">48</p>
                                    </div>
                                    <div className='flex justify-between items-center text-slate-500 text-sm font-light'>
                                        <p className="">Canvas Flow</p>
                                        <p className="">47</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-end gap-2'>
                                    <div className='mt-4'>
                                        <p className="text-slate-500 text-sm font-medium">Total Products</p>
                                        <h3 className="text-2xl font-black text-on-surface ">1232</h3>
                                    </div>
                                    <button>
                                        <span className='hover:underline cursor-pointer text-blue-500 text-xs font-normal flex items-center gap-0.5'>Explore all<svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-6 mb-4">
                        <div className="bg-[#fffbda62] p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-yellow-100 rounded-lg">
                                    <svg className='text-yellow-400' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M960 0q133 0 255 34t230 96t194 150t150 195t97 229t34 256q0 133-34 255t-96 230t-150 194t-195 150t-229 97t-256 34q-133 0-255-34t-230-96t-194-150t-150-195t-97-229T0 960q0-133 34-255t96-230t150-194t195-150t229-97T960 0m0 1792q114 0 220-30t199-84t169-130t130-168t84-199t30-221t-30-220t-84-199t-130-169t-168-130t-199-84t-221-30q-115 0-221 30t-198 84t-169 130t-130 168t-84 199t-30 221q0 114 30 220t84 199t130 169t168 130t199 84t221 30M896 512h128v640H896zm0 768h128v128H896z" stroke-width="51" stroke="currentColor" /></svg>
                                </div>
                                <span className="text-xs font-bold text-yellow-500 bg-yellow-100 px-2 py-1 rounded">+10</span>
                            </div>
                            <div className=''>
                                <div className='grid grid-cols-3 border-b border-gray-300 items-center text-slate-700 text-sm font-light mb-2'>
                                    <p className="font-medium">Getting out of Stock</p>
                                    <p className="font-medium text-center">Available</p>
                                    <p className="font-medium text-end">Amount</p>
                                </div>
                                <div className='space-y-1'>
                                    <div className='grid grid-cols-3 text-slate-500 text-sm font-light'>
                                        <p className="">Nike Air</p>
                                        <p className="text-center">4</p>
                                        <p className="text-end">$45.2k</p>
                                    </div>
                                    <div className='grid grid-cols-3 text-slate-500 text-sm font-light'>
                                        <p className="">PUMA Sport</p>
                                        <p className="text-center">1</p>
                                        <p className="text-end">$45.2k</p>
                                    </div>
                                    <div className='grid grid-cols-3 text-slate-500 text-sm font-light'>
                                        <p className="">Canvas Flow</p>
                                        <p className="text-center">6</p>
                                        <p className="text-end">$45.2k</p>
                                    </div>
                                    <div className='grid grid-cols-3 text-slate-500 text-sm font-light'>
                                        <p className="">Canvas Loafer</p>
                                        <p className="text-center">3</p>
                                        <p className="text-end">$45.2k</p>
                                    </div>
                                </div>
                                <div className='flex justify-end items-end mt-2'>
                                    {/* <div className='mt-4'>
                                        <p className="text-slate-500 text-sm font-medium">Total Sales</p>
                                        <h3 className="text-2xl font-black text-on-surface ">$45.2k</h3> 
                                    </div>*/}
                                    <button>
                                        <span className='hover:underline cursor-pointer text-blue-500 text-xs font-normal flex items-center gap-0.5'>Explore all<svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2 mb-4">
                        <div className='border-b border-red-300 flex justify-between gap-1 items-center'>
                            <h4 className='text-xl text-red-500'>Clients are not able to buy </h4>
                            <p><span className='px-1.5 rounded-full border bg-red-50 text-red-500 text-xs'>!</span></p>
                        </div>
                        <div className="bg-[#ffdcdc35] p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-red-100 rounded-lg">
                                    <svg className='text-red-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.2"><path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" /><path stroke-linecap="round" d="m11.5 12.5l3-3m0 3l-3-3M2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7" /></g></svg>
                                </div>
                                <span className="text-xs font-bold border border-[#ff7d7d3f] text-red-600 bg-red-100 px-2 py-0.5 rounded">+4</span>
                            </div>
                            <div className=''>
                                <div className='grid grid-cols-3 border-b border-gray-300 items-center text-slate-700 text-sm font-light mb-2'>
                                    <p className="font-medium">Out of Stock</p>
                                    <p className="font-medium text-center">Sale Rate {'(%)'}</p>
                                    <p className="font-medium text-end">Amount</p>
                                </div>
                                <div className='space-y-1'>
                                    <div className='grid grid-cols-3 text-slate-500 text-sm font-light'>
                                        <p className="">Nike Air</p>
                                        <p className="text-center">30%</p>
                                        <p className="text-end">$45.2k</p>
                                    </div>
                                    <div className='grid grid-cols-3 text-slate-500 text-sm font-light'>
                                        <p className="">PUMA Sport</p>
                                        <p className="text-center">23%</p>
                                        <p className="text-end">$45.2k</p>
                                    </div>
                                    <div className='grid grid-cols-3 text-slate-500 text-sm font-light'>
                                        <p className="">Canvas Flow</p>
                                        <p className="text-center">13%</p>
                                        <p className="text-end">$45.2k</p>
                                    </div>
                                    <div className='grid grid-cols-3 text-slate-500 text-sm font-light'>
                                        <p className="">Canvas Loafer</p>
                                        <p className="text-center">6%</p>
                                        <p className="text-end">$45.2k</p>
                                    </div>
                                </div>
                                <div className='flex justify-end items-end mt-2'>
                                    {/* <div className='mt-4'>
                                        <p className="text-slate-500 text-sm font-medium">Total Sales</p>
                                        <h3 className="text-2xl font-black text-on-surface ">$45.2k</h3> 
                                    </div>*/}
                                    <button>
                                        <span className='hover:underline cursor-pointer text-red-500 text-xs font-normal flex items-center gap-0.5'>Make it available now<svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 rounded-xl space-y-2 border border-blue-300 bg-[#dbeafe] shadow mb-6'>
                        <div className='border-b-2 border-blue-200 flex justify-between gap-1 items-center mb-2 px-2 mx-1'>
                            <div className='flex gap-1 items-end'>
                                <h4 className='text-md font-medium '>Orders on the process</h4>
                            </div>
                            <span className='text-sm font-light hover:underline text-blue-500 cursor-pointer flex gap-0.5 '>{'(80) items'} <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                        </div>
                        <div>
                            <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                                <div className="bg-white px-4 py-1 rounded-xl  shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="currentColor" fill-opacity="0.2" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z" /><path fill="none" stroke-dasharray="14" d="M8 12l3 3l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0" /></path></g></svg>
                                        </div>
                                        <div className='text-end'>
                                            <p className="text-slate-500 text-sm font-medium">Confirmed</p>
                                            <h3 className="text-2xl font-black text-on-surface mt-1">17</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white px-4 py-1 rounded-xl  shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="m17.078 22.004l-1.758-4.13l-2.007 4.753l-7.52-3.29l.175 3.906l9.437 4.374l10.91-5.365l-.15-4.99zM29.454 6.62L18.52 3.382l-3.005 2.67l-3.09-2.358L1.544 8.2l3.796 3.047l-3.43 5.303l10.88 4.756l2.53-5.998l2.256 5.308l11.393-5.942l-3.105-4.71l3.592-3.345zm-14.177 7.96l-9.06-3.83l9.276-4.102L25.1 9.903z" /></svg>
                                        </div>
                                        <div className='text-end'>
                                            <p className="text-slate-500 text-sm font-medium">Packing</p>
                                            <h3 className="text-2xl font-black text-on-surface mt-1">5</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white px-4 py-1 rounded-xl  shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.73 18.27Q5 17.543 5 16.5H3.379q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h1.877q.271-.667.875-1.084Q6.735 14 7.5 14t1.37.416q.603.417.874 1.084h4.618L16.558 6H6.212q-.213 0-.357-.144t-.143-.357t.143-.356T6.212 5h10.577q.384 0 .626.308q.243.308.156.686L16.998 8.5h1.271q.384 0 .727.172q.344.171.566.474l1.797 2.398q.218.292.283.609q.066.316.01.664l-.598 3.037q-.056.292-.284.469t-.518.177h-.483q0 1.039-.728 1.77t-1.77.73t-1.771-.73q-.73-.728-.73-1.77H10q0 1.039-.728 1.77t-1.77.73t-1.771-.73m10.156-5.02h4.652l.177-.89l-2.139-2.86h-1.818zm-1.283 1.248l.13-.58q.13-.58.33-1.42q.113-.46.198-.85q.084-.39.134-.646l.13-.58q.13-.58.33-1.42t.33-1.42l.13-.58L16.558 6l-2.196 9.5zm-12.315-1.5q-.205 0-.343-.144t-.138-.356t.144-.357t.356-.143h3.48q.213 0 .357.144t.144.357t-.144.356t-.356.143zm2-3.496q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h4.5q.212 0 .356.144t.144.357t-.144.356t-.356.143zM7.5 18q.617 0 1.059-.441Q9 17.117 9 16.5t-.441-1.059T7.5 15t-1.059.441Q6 15.883 6 16.5t.441 1.059Q6.883 18 7.5 18m9.77 0q.617 0 1.058-.441q.441-.442.441-1.059t-.441-1.059T17.269 15t-1.058.441q-.442.442-.442 1.059t.441 1.059q.442.441 1.06.441" stroke-width="0.3" stroke="currentColor" /></svg>
                                        </div>
                                        <div className='text-end'>
                                            <p className="text-slate-500 text-sm font-medium">Shipping</p>
                                            <h3 className="text-2xl font-black text-on-surface mt-1">16</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white px-4 py-1 rounded-xl  shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M19.781 14.555L13.5 16h-.375a1.875 1.875 0 0 0 0-3.75H8.438a2.25 2.25 0 0 0-1.594.656L4.5 15.25v5.25h6.75l6-1.5l3.64-1.552a1.555 1.555 0 0 0-1.109-2.893M4.5 15.25v5.25H1v-5.25zM16.5 3h-4v5l2-1l2 1z" /><path stroke="currentColor" stroke-linecap="square" stroke-width="1.2" d="M4.5 20.5h6.75l6-1.5l3.64-1.552a1.555 1.555 0 0 0-1.109-2.893L13.5 16h-.375M4.5 20.5v-5.25m0 5.25H1v-5.25h3.5m0 0l2.344-2.344a2.25 2.25 0 0 1 1.593-.656h4.688a1.875 1.875 0 0 1 0 3.75H11M8.5 8.5V3h12v7.5m-8-7.5h4v5l-2-1l-2 1z" /></g></svg>
                                        </div>
                                        <div className='text-end'>
                                            <p className="text-slate-500 text-sm font-medium">Out of Delivery</p>
                                            <h3 className="text-2xl font-black text-on-surface mt-1">42</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 shadow-md rounded-xl space-y-2 border border-red-300 bg-[#fdededb5]  mb-6'>
                        <div className='border-b-2 border-[#fa3d3d22] flex justify-between gap-1 items-center mb-2 px-2 mx-1'>
                            <div className='flex gap-1 items-end'>
                                <h4 className='text-md font-medium '>Returns on the process</h4>
                            </div>
                            <span className='text-sm font-light hover:underline text-blue-500 cursor-pointer flex gap-0.5 '>{'(80) items'} <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                        </div>
                        <div>
                            <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                                <div className="bg-white px-4 py-1 rounded-xl  shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0.2" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z" /><path fill="none" stroke-dasharray="14" d="M8 12l3 3l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0" /></path></g></svg>
                                        </div>
                                        <div className='text-end'>
                                            <p className="text-slate-500 text-sm font-medium">Confirmed</p>
                                            <h3 className="text-2xl font-black text-on-surface mt-1">17</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white px-4 py-1 rounded-xl  shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M8 5C6.346 5 5 6.346 5 8s1.346 3 3 3s3-1.346 3-3s-1.346-3-3-3m16 0c-1.654 0-3 1.346-3 3s1.346 3 3 3s3-1.346 3-3s-1.346-3-3-3M8 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2m16 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M6.848 12a1 1 0 0 0-.95.684l-1.771 5.314a2.01 2.01 0 0 0 .717 2.248L8 22.5V28h2v-5.5c0-.627-.3-1.226-.818-1.613l-3.159-2.254l1.426-4.274c.34.895.906 2.342.906 2.342a3 3 0 0 0 1.24 1.485L12 20h8l2.406-1.814a3 3 0 0 0 1.239-1.48s.558-1.428.91-2.352l1.44 4.265l-3.192 2.28A2.01 2.01 0 0 0 22 22.5V28h2l-.018-5.486l3.196-2.282c.69-.518.968-1.416.695-2.232l-1.771-5.316a1 1 0 0 0-.95-.684h-.648c-.452 0-1.267.158-1.656 1.21c-.254.697-1.065 2.765-1.067 2.77a1 1 0 0 1-.433.508a1 1 0 0 0-.102.067L20 17.492V12h-8v5.492l-1.246-.937a1 1 0 0 0-.102-.067a1 1 0 0 1-.433-.511s-.81-2.072-1.067-2.77C8.765 12.156 7.948 12 7.496 12zM14 14h4v4h-4zm-9.742 7.057l-.203 2.048q-.034.332-.172.635L1.933 28h2.2L5.7 24.572c.184-.4.299-.827.344-1.27l.09-.906l-1.873-1.335zm23.484 0l-1.877 1.34l.09.908q.068.662.344 1.267L27.867 28h2.2l-1.95-4.26a2 2 0 0 1-.172-.635z" stroke-width="0.4" stroke="currentColor"/></svg>
                                        </div>
                                        <div className='text-end'>
                                            <p className="text-slate-500 text-sm font-medium">Pick up</p>
                                            <h3 className="text-2xl font-black text-on-surface mt-1">5</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white px-4 py-1 rounded-xl  shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.73 18.27Q5 17.543 5 16.5H3.379q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h1.877q.271-.667.875-1.084Q6.735 14 7.5 14t1.37.416q.603.417.874 1.084h4.618L16.558 6H6.212q-.213 0-.357-.144t-.143-.357t.143-.356T6.212 5h10.577q.384 0 .626.308q.243.308.156.686L16.998 8.5h1.271q.384 0 .727.172q.344.171.566.474l1.797 2.398q.218.292.283.609q.066.316.01.664l-.598 3.037q-.056.292-.284.469t-.518.177h-.483q0 1.039-.728 1.77t-1.77.73t-1.771-.73q-.73-.728-.73-1.77H10q0 1.039-.728 1.77t-1.77.73t-1.771-.73m10.156-5.02h4.652l.177-.89l-2.139-2.86h-1.818zm-1.283 1.248l.13-.58q.13-.58.33-1.42q.113-.46.198-.85q.084-.39.134-.646l.13-.58q.13-.58.33-1.42t.33-1.42l.13-.58L16.558 6l-2.196 9.5zm-12.315-1.5q-.205 0-.343-.144t-.138-.356t.144-.357t.356-.143h3.48q.213 0 .357.144t.144.357t-.144.356t-.356.143zm2-3.496q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h4.5q.212 0 .356.144t.144.357t-.144.356t-.356.143zM7.5 18q.617 0 1.059-.441Q9 17.117 9 16.5t-.441-1.059T7.5 15t-1.059.441Q6 15.883 6 16.5t.441 1.059Q6.883 18 7.5 18m9.77 0q.617 0 1.058-.441q.441-.442.441-1.059t-.441-1.059T17.269 15t-1.058.441q-.442.442-.442 1.059t.441 1.059q.442.441 1.06.441" stroke-width="0.7" stroke="currentColor" /></svg>
                                        </div>
                                        <div className='text-end'>
                                            <p className="text-slate-500 text-sm font-medium">Shipping</p>
                                            <h3 className="text-2xl font-black text-on-surface mt-1">16</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white px-4 py-1 rounded-xl  shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.91 2.91L11.83 5H14a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6h-2.17l2.09 2.09l-1.42 1.41L8 6l1.41-1.41L12.5 1.5zM2 12v10h16V12zm2 6.56v-3.11A4 4 0 0 0 5.45 14h9.1A4 4 0 0 0 16 15.45v3.11A4 4 0 0 0 14.57 20H5.45A4 4 0 0 0 4 18.56m6 .44c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2s-1.5.895-1.5 2s.672 2 1.5 2" /></svg>
                                        </div>
                                        <div className='text-end'>
                                            <p className="text-slate-500 text-sm font-medium">Arrivel & Refund</p>
                                            <h3 className="text-2xl font-black text-on-surface mt-1">42</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-1 px-2 shadow-md rounded-xl space-y-2 border border-gray-300  mb-6'>
                        <div className='border-b border-blue-300 flex justify-between gap-1 items-end mb-2 mx-1'>
                            <div className='flex gap-4 items-end py-2'>
                                <div className='bg-blue-100 p-3 rounded-lg'>
                                    <svg className='text-blue-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M7.506 15.265a.75.75 0 0 0 1.446-.4zm-1.43-7.99l.724-.2zM4.705 5.92l-.2.723zM3.2 4.725a.75.75 0 1 0-.402 1.445zm16.988 11a.75.75 0 1 0-.378-1.451zm-9.991 1.834c.31 1.12-.37 2.303-1.574 2.616L9 21.626c1.977-.513 3.185-2.502 2.643-4.467zm-1.574 2.616c-1.212.315-2.428-.389-2.74-1.519l-1.446.4c.54 1.955 2.594 3.082 4.563 2.57zm-2.74-1.519c-.31-1.12.37-2.303 1.574-2.616l-.377-1.45c-1.977.513-3.186 2.502-2.643 4.467zm1.574-2.616c1.212-.315 2.428.389 2.74 1.519l1.446-.4c-.54-1.955-2.594-3.082-4.563-2.57zm1.494-1.175L6.8 7.075l-1.446.4l2.152 7.79zM4.904 5.197l-1.703-.472l-.402 1.445l1.704.473zM6.8 7.075a2.71 2.71 0 0 0-1.896-1.878l-.4 1.446c.425.118.742.44.85.831zm4.31 11.01l9.079-2.36l-.378-1.451l-9.079 2.36z" /><path stroke="currentColor" stroke-width="1.5" d="M9.565 8.73c-.485-1.755-.727-2.633-.315-3.324c.411-.692 1.316-.927 3.126-1.398l1.92-.498c1.81-.47 2.715-.706 3.428-.307c.713.4.956 1.277 1.44 3.033l.515 1.862c.485 1.755.728 2.633.316 3.325c-.412.691-1.317.927-3.127 1.397l-1.92.499c-1.81.47-2.715.705-3.428.306c-.713-.4-.955-1.277-1.44-3.032z" opacity="0.5" /></g></svg>
                                </div>
                                <div>
                                    <h4 className='text-md font-medium '>Accounts</h4>
                                    <p className=''><span className='text-xs bg-blue-100 text-blue-500 border border-blue-200 rounded-md px-1'>look fine</span></p>
                                </div>
                            </div>
                            <div className=' text-blue-500 py-2'>
                                <span className='flex gap-0.5 hover:underline text-sm font-light cursor-pointer'>{'(80) items'} <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between gap-1 items-end mb-1 mt-3 px-2 mx-1'>
                                <h4 className='text-sm font-normal '>Costs</h4>
                            </div>
                            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                                <div className="bg-white md:col-span-1 xl:col-end-2 p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-2 bg-yellow-100 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"><path d="M13.5 11.25h-2.033a1.342 1.342 0 0 0-.5 2.587l2.064.826a1.342 1.342 0 0 1-.5 2.587H10.5m1.5-6v-1.5m0 9v-1.5" /><path d="M6.75 21.75v-15L9 2.25h6l2.25 4.5v15z" /><path d="M15 2.25h5.25l3 4.5h-6m-10.5 0h-6l3-4.5H9M.75 10.5h6m10.5 0h6M.75 14.25h6m10.5 0h6M.75 18h6m10.5 0h6m-16.5 3.75h-6v-15m16.5 15h6v-15m-6 0H6.75" /></g></svg>
                                        </div>
                                        <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded">+12%</span>
                                    </div>
                                    <p className="text-slate-500 text-sm font-medium">Capital Cost</p>
                                    <h3 className="text-2xl font-black text-on-surface mt-1">$45.2k</h3>
                                </div>
                                <div className="col-span-1 md:col-span-2 xl:col-span-3 bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-2 bg-blue-50 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4.58 8.607L2 8.454C3.849 3.704 9.158 1 14.333 2.344c5.513 1.433 8.788 6.918 7.314 12.25c-1.219 4.411-5.304 7.337-9.8 7.406" /><path stroke-dasharray=".5 3" d="M12 22C6.5 22 2 17 2 11" /><path d="M13.604 9.722c-.352-.37-1.213-1.237-2.575-.62c-1.361.615-1.577 2.596.482 2.807c.93.095 1.537-.11 2.093.47c.556.582.659 2.198-.761 2.634s-2.341-.284-2.588-.509m1.653-6.484v.79m0 6.337v.873" /></g></svg>
                                        </div>
                                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">+24%</span>
                                    </div>
                                    <div className='border-b border-gray-200 mb-2'>
                                        <p className="text-slate-500 text-sm font-medium">Processing Costs</p>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100'>
                                        <p className="text-sm ">Rent</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$45.2k</h3>
                                            <h3 className="text-sm font-light">5%</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100'>
                                        <p className="text-sm ">Salery</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$45.2k</h3>
                                            <h3 className="text-sm font-light">6%</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100'>
                                        <p className="text-sm ">Labor</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$45.2k</h3>
                                            <h3 className="text-sm font-light">4%</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100'>
                                        <p className="text-sm ">Shipping</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$45.2k</h3>
                                            <h3 className="text-sm font-light">4%</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100'>
                                        <p className="text-sm ">Marketing</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$45.2k</h3>
                                            <h3 className="text-sm font-light">4%</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100'>
                                        <p className="text-sm ">Transaction fees</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$45.2k</h3>
                                            <h3 className="text-sm font-light">4%</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100'>
                                        <p className="text-sm ">Taxes</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$45.2k</h3>
                                            <h3 className="text-sm font-light">4%</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100 pb-2'>
                                        <p className="text-sm ">Administration</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$45.2k</h3>
                                            <h3 className="text-sm font-light">4%</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-t border-gray-200 '>
                                        <p className="text-md font-normal ">Total</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-md font-normal">$459.2k</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between gap-1 items-end mb-1 mt-3 px-2 mx-1'>
                                <h4 className='text-sm font-normal '>Return</h4>
                            </div>
                            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                                <div className="bg-white md:col-span-1 xl:col-end-2 p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-2 bg-gray-100 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="M44.465 39.743c-.208 2.555-2.163 4.51-4.718 4.718c-3.229.262-8.38.539-15.743.539c-7.364 0-12.515-.277-15.743-.539c-2.555-.208-4.51-2.163-4.718-4.718c-.262-3.228-.54-8.379-.54-15.743s.278-12.515.54-15.743C3.75 5.702 5.706 3.747 8.26 3.54C11.49 3.277 16.64 3 24.004 3s12.515.277 15.743.539c2.555.208 4.51 2.163 4.718 4.718c.262 3.228.539 8.379.539 15.743s-.277 12.515-.54 15.743" /><path d="M23.2 14.383c.057 1.413 1.282 2.286 2.696 2.335c1.537.053 2.6.048 4.142.04l1.27-.006a1 1 0 0 1 1 .999v9.134a1 1 0 0 1-1.038.999c-4.059-.155-8.851-.332-12.98-.406a62 62 0 0 0-.107-2.282c-.084-1.248-1.272-1.793-2.271-1.04a55 55 0 0 0-2.915 2.38c-1.712 1.486-2.693 2.602-3.246 3.347c-.51.687-.51 1.56 0 2.248c.553.745 1.533 1.86 3.246 3.347a55 55 0 0 0 2.915 2.379c.999.753 2.187.208 2.271-1.04c.043-.635.083-1.425.11-2.401c3.433-.145 8.833-.356 13.705-.472c3.31-.08 5.995-2.769 5.998-6.08l.01-10.81a6.05 6.05 0 0 0-6-6.048a131 131 0 0 0-6.11.075c-1.413.051-2.64.921-2.696 2.335a12 12 0 0 0 0 .967" /></g></svg>
                                        </div>
                                        <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded">+12%</span>
                                    </div>
                                    <p className="text-slate-500 text-sm font-medium">Total Retruns</p>
                                    <h3 className="text-2xl font-black text-on-surface mt-1">32</h3>
                                </div>
                                <div className="col-span-1 md:col-span-2 xl:col-span-3 bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-2 bg-blue-50 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M20.917 12.127a.32.32 0 0 0 .29-.38a10.3 10.3 0 0 0-.37-2.003a6 6 0 0 0-.31-.78a9 9 0 0 0-.441-.772c-2.003-2.933-1.302-1.301-3.775-.66c-1.028.232-2.08.34-3.134.32a14.7 14.7 0 0 0-3.104.44c-1.004.25-1.966.649-2.853 1.182a3.2 3.2 0 0 0-.791.65a.76.76 0 0 0-.2.571a.9.9 0 0 0 .21.391c.17.17.41.36.5.45a.35.35 0 0 0 .45 0a.27.27 0 0 0 0-.4l-.38-.5v-.05q.12-.127.27-.21a5 5 0 0 1 .411-.231a13 13 0 0 1 2.704-.861a16.3 16.3 0 0 1 2.843-.4a2.34 2.34 0 0 0-1.422 1.08a1.542 1.542 0 0 0 1.202 2.364c.3 0 3.124.16 2.473-2.223a1.71 1.71 0 0 0-2.002-1.252c1.06-.07 2.109-.265 3.124-.58a6.4 6.4 0 0 0 1.802-1.002c.3.571.55 1.132.81 1.672c.261.541.461.891.672 1.362c.21.47.43 1.001.62 1.532a.35.35 0 0 0 .4.29m-6.418-2.002c0 .11.65 1.712-1.162 1.392a.76.76 0 0 1-.59-.431a.89.89 0 0 1 .14-.851c.147-.291.402-.514.71-.62a.72.72 0 0 1 .902.52zM8.471 14.79a.33.33 0 0 0-.13.441l.14.29q.214.523.51 1.002a.5.5 0 0 0 .361.2c.225.011.448-.045.641-.16a7 7 0 0 0 .861-.61q.559-.435 1.162-.802q.596-.375 1.231-.68a5.4 5.4 0 0 1 2.073-.501c1.191-.11 2.413-.07 3.574-.28a5.8 5.8 0 0 0 1.522-.461a.37.37 0 1 0-.29-.671a8.2 8.2 0 0 1-3.354.26a13.5 13.5 0 0 0-2.473.05a5.3 5.3 0 0 0-1.582.51q-.548.287-1.062.632a12 12 0 0 0-1.421 1.171c-.11.11-.29.3-.491.47a1 1 0 0 0-.16.15a3.4 3.4 0 0 0-.501-.61l-.18-.29a.32.32 0 0 0-.43-.11m-5.678 1.502q.465-.338.871-.741c.38-.37.731-.781 1.082-1.192a5.2 5.2 0 0 1 1.882-1.582a.31.31 0 0 0 .22-.39a.32.32 0 0 0-.39-.22a4.4 4.4 0 0 0-1.562.64q-.534.354-1.001.791c-.3.28-.581.59-.862.891l-.52.48A3.7 3.7 0 0 1 .34 16.404a.37.37 0 0 0-.305.527a.36.36 0 0 0 .345.204a4 4 0 0 0 2.413-.841m.852 2.041q.568-.546 1.072-1.151q.468-.594 1-1.132a4.5 4.5 0 0 1 1.002-.76a.32.32 0 0 0 .16-.421a.32.32 0 0 0-.42-.17a5.1 5.1 0 0 0-1.672.91q-.532.428-1.002.922c-.29.31-.56.66-.86 1.001c-.27.334-.584.63-.932.881a2.14 2.14 0 0 1-1.121.4a.37.37 0 0 0-.38.341a.36.36 0 0 0 .34.38c.399.025.798-.037 1.171-.18a5.1 5.1 0 0 0 1.642-1.02m4.716-1.573a.32.32 0 0 0-.42-.17a5.5 5.5 0 0 0-1.673.911q-.531.427-1 .921c-.301.32-.561.661-.872 1.002a4.3 4.3 0 0 1-.921.88c-.326.242-.716.38-1.121.401a.36.36 0 0 0-.38.34a.37.37 0 0 0 .34.391c.443.054.893-.001 1.311-.16c.6-.227 1.15-.567 1.622-1.001c.37-.38.741-.761 1.072-1.162a12 12 0 0 1 1-1.131c.293-.304.631-.56 1.002-.761a.32.32 0 0 0 .04-.46" /><path d="M4.456 11.847a.32.32 0 0 0 .42.17a.32.32 0 0 0 .13-.42c0-.13-.3-.581-.46-1.002c-.08-.2-.17-.37-.14-.47a.66.66 0 0 1 .17-.25q.24-.257.511-.481q.632-.56 1.352-1.001a8.6 8.6 0 0 1 1.572-.761a13.3 13.3 0 0 1 3.664-.821c.891-.11 1.772-.23 2.644-.42a12 12 0 0 0 1.652-.502a8.3 8.3 0 0 0 1.922-1.1a8.8 8.8 0 0 0 1.372-1.363c.22.37.45.741.64 1.122c.19.38.411.911.611 1.382s.41.92.611 1.381a146 146 0 0 0 2.003 4.176a.361.361 0 1 0 .67-.27c-.46-1.092-.77-2.254-1.171-3.255q-.391-1.108-.911-2.163c-2.673-5.126-2.443-3.003-4.376-1.652a7.8 7.8 0 0 1-1.762.811c-.885.258-1.794.425-2.713.501c-1.001.11-1.933.18-2.874.35A11 11 0 0 0 7.5 6.56a9.7 9.7 0 0 0-1.602 1.002q-.757.54-1.392 1.221a5 5 0 0 0-.6.711a1 1 0 0 0-.22.48c-.017.258.039.514.16.742c.16.45.54.99.61 1.131m19.314.431a.37.37 0 0 0-.45.25q-.085.286-.22.55q-.122.259-.3.481a3.64 3.64 0 0 1-2.224 1.292c-1.094.13-2.2.13-3.294 0a8.9 8.9 0 0 0-3.624.42a6.8 6.8 0 0 0-1.803 1.102a12.7 12.7 0 0 0-2.002 2.253l-.991 1.351v.1l-.05-.05l-.661-1.051a.33.33 0 0 0-.58.3l.56 1.162q.155.29.34.56a.44.44 0 0 0 .54.16a.8.8 0 0 0 .211-.18c.12-.14.23-.36.32-.47l1.002-1.272q.753-.888 1.642-1.642a6.8 6.8 0 0 1 1.882-1.171a8.1 8.1 0 0 1 3.134-.37a13.7 13.7 0 0 0 3.545-.241A4.46 4.46 0 0 0 23.4 14.05q.214-.3.35-.641q.138-.328.23-.67a.37.37 0 0 0-.21-.461" /></g></svg>
                                        </div>
                                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">+24%</span>
                                    </div>
                                    <div className='border-b border-gray-200 mb-2'>
                                        <p className="text-slate-500 text-sm font-medium">Return</p>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100'>
                                        <p className="text-sm ">Retrun Amount</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$45.2k</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100 pb-2'>
                                        <p className="text-sm ">Processing Amount</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$45.2k</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-t border-gray-200'>
                                        <p className="text-md font-normal ">Total</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-md font-normal">$$90.4k</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between gap-1 items-end mb-1 mt-3 px-2 mx-1'>
                                <h4 className='text-sm font-normal '>My Prfits</h4>
                            </div>
                            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                                <div className='grid gap-2'>
                                    <div className="bg-white md:col-span-1 xl:col-end-2 p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="p-2 bg-blue-50 text-blue-500 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="m5.795 14.306l-1.772-1.775l-1.773 1.775m15.955-4.579l1.772 1.776l1.773-1.776"></path><path d="M19.977 11.503c0-2.12-.84-4.151-2.336-5.65A7.97 7.97 0 0 0 12 3.513a7.9 7.9 0 0 0-2.97.577a7.98 7.98 0 0 0-4.555 4.75m-.452 3.69a8 8 0 0 0 1.827 5.082a7.97 7.97 0 0 0 9.966 1.927a8 8 0 0 0 3.585-4.034"></path><path d="M9.58 13.978A2.28 2.28 0 0 0 12 16.054c1.952 0 2.42-1.123 2.42-2.076s-.807-1.963-2.42-1.963s-2.42-.638-2.42-1.938a2.22 2.22 0 0 1 1.537-2.003c.285-.092.585-.125.883-.097a2.33 2.33 0 0 1 2.42 2.1M12 17.264v-1.051m0-9.45v1.21"></path></g></svg>
                                            </div>
                                            <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded">+12%</span>
                                        </div>
                                        <p className="text-slate-500 text-sm font-medium">Total Transctions</p>
                                        <h3 className="text-2xl font-black text-on-surface mt-1">1152</h3>
                                    </div>
                                    <div className="bg-white md:col-span-1 xl:col-end-2 p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="p-2 bg-yellow-100 text-orange-400 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M7 18c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m10 0c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m-9.8-3.2c0 .1.1.2.2.2H19v2H7c-1.1 0-2-.9-2-2c0-.4.1-.7.2-1l1.3-2.4L3 4H1V2h3.3l4.3 9h7l3.9-7l1.7 1l-3.9 7c-.3.6-1 1-1.7 1H8.1l-.9 1.6zM9.4 1c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4S8 3.2 8 2.4S8.7 1 9.4 1m5.2 8c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4s1.4.6 1.4 1.4S15.3 9 14.6 9M9.2 9L8 7.8L14.8 1L16 2.2z"></path></svg>
                                            </div>
                                            <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded">+12%</span>
                                        </div>
                                        <p className="text-slate-500 text-sm font-medium">Net Sale</p>
                                        <h3 className="text-2xl font-black text-on-surface mt-1">$14002.2k</h3>
                                    </div>
                                </div>
                                <div className="col-span-1 md:col-span-2 xl:col-span-3 bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-2 bg-blue-50 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4.58 8.607L2 8.454C3.849 3.704 9.158 1 14.333 2.344c5.513 1.433 8.788 6.918 7.314 12.25c-1.219 4.411-5.304 7.337-9.8 7.406" /><path stroke-dasharray=".5 3" d="M12 22C6.5 22 2 17 2 11" /><path d="M13.604 9.722c-.352-.37-1.213-1.237-2.575-.62c-1.361.615-1.577 2.596.482 2.807c.93.095 1.537-.11 2.093.47c.556.582.659 2.198-.761 2.634s-2.341-.284-2.588-.509m1.653-6.484v.79m0 6.337v.873" /></g></svg>
                                        </div>
                                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">+24%</span>
                                    </div>
                                    <div className='border-b border-gray-200 mb-2'>
                                        <p className="text-slate-500 text-sm font-medium">Profits</p>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100'>
                                        <p className="text-sm ">Total Sale</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$9002.2k</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100'>
                                        <p className="text-sm ">Gross Profit</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$9002.2k</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100'>
                                        <p className="text-sm ">Operating Profit</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$9002.2k</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-1 border-b border-gray-100 pb-2'>
                                        <p className="text-sm ">Net Profit</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-sm font-light">$11502.2k</h3>
                                        </div>
                                    </div>

                                    <div className='flex justify-between gap-1 border-t border-gray-100'>
                                        <p className="text-md font-normal">Profit Margin {'(%)'}</p>
                                        <div className='flex gap-1.5'>
                                            <h3 className="text-md font-normal">{80}%</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-end items-end gap-1 flex-1'>
                                        <p className="text-xs font-light text-green-600">Your sale is looking really good</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='p-1 bg-gray-100 rounded-xl space-y-2 border border-gray-300  mb-6'>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-yellow-100 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M7.506 15.265a.75.75 0 0 0 1.446-.4zm-1.43-7.99l.724-.2zM4.705 5.92l-.2.723zM3.2 4.725a.75.75 0 1 0-.402 1.445zm16.988 11a.75.75 0 1 0-.378-1.451zm-9.991 1.834c.31 1.12-.37 2.303-1.574 2.616L9 21.626c1.977-.513 3.185-2.502 2.643-4.467zm-1.574 2.616c-1.212.315-2.428-.389-2.74-1.519l-1.446.4c.54 1.955 2.594 3.082 4.563 2.57zm-2.74-1.519c-.31-1.12.37-2.303 1.574-2.616l-.377-1.45c-1.977.513-3.186 2.502-2.643 4.467zm1.574-2.616c1.212-.315 2.428.389 2.74 1.519l1.446-.4c-.54-1.955-2.594-3.082-4.563-2.57zm1.494-1.175L6.8 7.075l-1.446.4l2.152 7.79zM4.904 5.197l-1.703-.472l-.402 1.445l1.704.473zM6.8 7.075a2.71 2.71 0 0 0-1.896-1.878l-.4 1.446c.425.118.742.44.85.831zm4.31 11.01l9.079-2.36l-.378-1.451l-9.079 2.36z" /><path stroke="currentColor" stroke-width="1.5" d="M9.565 8.73c-.485-1.755-.727-2.633-.315-3.324c.411-.692 1.316-.927 3.126-1.398l1.92-.498c1.81-.47 2.715-.706 3.428-.307c.713.4.956 1.277 1.44 3.033l.515 1.862c.485 1.755.728 2.633.316 3.325c-.412.691-1.317.927-3.127 1.397l-1.92.499c-1.81.47-2.715.705-3.428.306c-.713-.4-.955-1.277-1.44-3.032z" opacity="0.5" /></g></svg>
                                    </div>
                                    <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded">+12%</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">To be Delivered</p>
                                <h3 className="text-2xl font-black text-on-surface mt-1">17</h3>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-blue-50 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-width="0.3" stroke="currentColor"><path d="M16.888 3.64a2.6 2.6 0 0 1-.608-.22a.44.44 0 0 1-.25-.299c-.1-.509.24-.758.669-.828a3 3 0 0 1 1.655.26a.297.297 0 0 0 .29-.52a3 3 0 0 0-.868-.368l.08-.12q.077-.097.13-.21q.01-.15 0-.299V.408a.32.32 0 0 0-.21-.4a.33.33 0 0 0-.39.22q-.22.285-.398.599a.8.8 0 0 0-.09.25a1 1 0 0 0-.05.258a1.5 1.5 0 0 0 0 .22a2.4 2.4 0 0 0-.718.07a1.396 1.396 0 0 0-1.037 1.636a1.36 1.36 0 0 0 .628.997c.52.275 1.078.473 1.656.589c.339.11.668.19.668.568s-.399.609-.838.689c-.537.1-1.092.04-1.596-.17a1.1 1.1 0 0 1-.359-.3a5 5 0 0 1-.26-.448a.31.31 0 0 0-.468-.16a.32.32 0 0 0-.14.43q.167.376.41.707q.198.235.458.4q.227.136.479.219a1 1 0 0 0-.08.24a1 1 0 0 0 0 .249v.598a.319.319 0 0 0 .609.19q.186-.258.339-.539a1.3 1.3 0 0 0 .1-.24q.015-.124 0-.249v-.01c.36.028.723.005 1.077-.07a1.59 1.59 0 0 0 1.307-1.506a1.37 1.37 0 0 0-.47-1.127a4.4 4.4 0 0 0-1.725-.678m6.902 8.718a1.37 1.37 0 0 0-.707-.998a4.5 4.5 0 0 0-1.816-.289q-.324 0-.638-.08a.44.44 0 0 1-.29-.23c-.209-.478.06-.777.46-.947a3 3 0 0 1 1.655-.1a.28.28 0 0 0 .36-.18a.29.29 0 0 0-.18-.348a3 3 0 0 0-.908-.17v-.12q.015-.13 0-.259a2 2 0 0 0 0-.26c0-.209-.1-.388-.15-.598a.32.32 0 1 0-.628 0q-.138.295-.22.609a1.2 1.2 0 0 0-.05.27q-.015.134 0 .268l.06.19a2.4 2.4 0 0 0-.678.23a1.376 1.376 0 0 0-.688 1.805a1.37 1.37 0 0 0 .828.858c.564.157 1.15.231 1.735.22c.35 0 .689 0 .768.398c.08.4-.259.678-.668.848a2.73 2.73 0 0 1-1.576.17c-.15-.04-.29-.11-.409-.21a2.5 2.5 0 0 1-.399-.389a.319.319 0 0 0-.489.4q.24.33.549.598q.245.194.539.299q.248.08.508.11v.08q-.015.124 0 .249q-.015.13 0 .26c0 .209.1.398.15.608a.32.32 0 0 0 .285.393a.318.318 0 0 0 .343-.344q.133-.3.22-.618q.04-.126.05-.26q.015-.135 0-.269v-.12c.347-.043.684-.144.997-.299a1.576 1.576 0 0 0 .988-1.775M6.803 8.019A2.1 2.1 0 0 0 5.237 6.93a5.4 5.4 0 0 0-1.217-.05c0-.289-.07-.578-.1-.867c-.09-.659-.189-1.307-.279-1.995q.749-.06 1.497 0a.28.28 0 0 0 .299-.25a.29.29 0 0 0-.26-.309q-.805-.09-1.615-.06a42 42 0 0 1-.19-1.466a.28.28 0 0 0-.559 0V3.47a3 3 0 0 0-.688.24A2.9 2.9 0 0 0 .64 5.705a1.78 1.78 0 0 0 .728 1.735a2.8 2.8 0 0 0 1.656.579h.08l.18 1.326c.099.669.209 1.337.318 1.995h-.199a3.9 3.9 0 0 1-2.374-.279a.31.31 0 0 0-.434.382a.33.33 0 0 0 .155.187a4.6 4.6 0 0 0 2.753.498h.2c.07.44.149.868.209 1.307a.32.32 0 1 0 .628-.07c0-.479 0-.997-.08-1.436a4.6 4.6 0 0 0 1.596-.998a3.3 3.3 0 0 0 .958-1.546a1.86 1.86 0 0 0-.21-1.366M1.946 6.672a.93.93 0 0 1-.36-1.087c.146-.492.465-.913.898-1.187q.162-.093.34-.15c0 .778 0 1.546.11 2.324v.35a1.8 1.8 0 0 1-.988-.25m3.99 2.673c-.12.33-.307.633-.549.888c-.29.304-.627.56-.997.758c0-.748-.11-1.506-.18-2.254c0-.27-.06-.529-.09-.798q.453-.004.898.08a1.13 1.13 0 0 1 .848.578a.9.9 0 0 1 .07.748" /><path d="M1.247 15.001A6.98 6.98 0 0 0 4.24 19.53a9.77 9.77 0 0 0 7.042 1.137a7.5 7.5 0 0 0 4.758-3.521a8.8 8.8 0 0 0 .858-1.826a5.8 5.8 0 0 0 .09-3.56a3.4 3.4 0 0 0-.18-.5a6.6 6.6 0 0 0-3.48-3.42a10.25 10.25 0 0 0-4.789-.4a.33.33 0 0 0-.29.35a.32.32 0 0 0 .34.289c1.5-.2 3.024-.04 4.449.468a5.73 5.73 0 0 1 2.952 3.113c.679 1.436.19 3.311-.818 4.877a6.52 6.52 0 0 1-4.05 3.053a8.9 8.9 0 0 1-6.413-.788c-2.584-1.566-3.262-4.44-2.883-5.427a.2.2 0 0 0 0-.08a.3.3 0 0 0-.14-.418a.31.31 0 0 0-.419.13c-.1.159-.239.378-.02 1.994" /><path d="M16.988 15.929q-.226 1.013-.569 1.995a6.42 6.42 0 0 1-3.82 4.22c-1.406.59-2.927.852-4.449.767a9 9 0 0 1-4.27-1.526a6.08 6.08 0 0 1-2.653-3.6a4.6 4.6 0 0 1-.2-2.185c0-.718-.358-.788-.588-.36c-.409.878-.279 1.347.01 2.754a6.92 6.92 0 0 0 2.893 4.21a9.66 9.66 0 0 0 4.668 1.775c1.71.108 3.42-.197 4.988-.888a7.32 7.32 0 0 0 4.21-4.988a5.5 5.5 0 0 0 .428-2.543c-.04-.45-.449-.559-.648.369" /><path d="M8.768 15.52c.49.2.998.359 1.487.509c.738.2 1.486.369 2.224.548a.32.32 0 0 0 .412-.33a.31.31 0 0 0-.222-.268c-.709-.27-1.427-.509-2.125-.788q-.686-.266-1.337-.609a6 6 0 0 1-.558-.22a15 15 0 0 1 .528-1.555c.34-.908.719-1.806 1.048-2.704a.27.27 0 0 0-.13-.369a.28.28 0 0 0-.369.14c-.539.998-1.177 1.995-1.646 2.992q-.313.695-.519 1.427a.64.64 0 0 0 .15.588c.322.26.678.474 1.057.639" /></g></svg>
                                    </div>
                                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">+24%</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">On The Way</p>
                                <h3 className="text-2xl font-black text-on-surface mt-1">$45.2k</h3>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-orange-50 rounded-lg">
                                        <svg className='text-orange-400' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01m204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0c1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263c-12.512-12.496-32.768-12.496-45.28 0" stroke-width="10.5" stroke="currentColor" /></svg>
                                    </div>
                                    <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">Stable</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">Active Listings</p>
                                <h3 className="text-2xl font-black text-on-surface mt-1">1,156</h3>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-red-50 rounded-lg">
                                        <svg className='text-red-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M960 0q133 0 255 34t230 96t194 150t150 195t97 229t34 256q0 133-34 255t-96 230t-150 194t-195 150t-229 97t-256 34q-133 0-255-34t-230-96t-194-150t-150-195t-97-229T0 960q0-133 34-255t96-230t150-194t195-150t229-97T960 0m0 1792q114 0 220-30t199-84t169-130t130-168t84-199t30-221t-30-220t-84-199t-130-169t-168-130t-199-84t-221-30q-115 0-221 30t-198 84t-169 130t-130 168t-84 199t-30 221q0 114 30 220t84 199t130 169t168 130t199 84t221 30M896 512h128v640H896zm0 768h128v128H896z" stroke-width="51" stroke="currentColor" /></svg>
                                    </div>
                                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">+4</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">Out of Stock</p>
                                <h3 className="text-2xl font-black text-on-surface mt-1">42</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.4"><rect width="14" height="17" x="5" y="4" rx="2" /><path stroke-linecap="round" d="M9 9h6m-6 4h6m-6 4h4" /></g></svg>
                                    </div>
                                    <span className="text-xs font-bold text-gray-600 bg-gray-50 px-2 py-1 rounded">+12%</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">Total Orders</p>
                                <h3 className="text-2xl font-black text-on-surface mt-1">17</h3>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM7 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19 11h3v2c0 2.357 0 3.535-.732 4.268c-.487.487-1.171.65-2.268.704m-14 0c-1.097-.054-1.78-.217-2.268-.704C2 16.535 2 15.357 2 13V9c0-2.357 0-3.536.732-4.268S4.643 4 7 4h3.3c1.117 0 1.675 0 2.127.147a3 3 0 0 1 1.926 1.926c.147.452.147 1.01.147 2.127c0 1.22 0 1.831-.334 2.244q-.099.122-.222.222C13.531 11 12.921 11 11.7 11H8m7 7H9m5.5-12h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 11" /><path stroke-linecap="round" stroke-linejoin="round" d="M10 13s-.672-.556-1.263-1.084C8.32 11.58 8 11.293 8 11.005c0-.255.25-.492.656-.864C9.232 9.662 10 9 10 9" /></g></svg>
                                    </div>
                                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Today 4</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">On The Way Back</p>
                                <h3 className="text-2xl font-black text-on-surface mt-1">$45.2k</h3>
                            </div>
                            <div className="col-span-1 sm:col-span-2 xl:col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M256.465 388.968a24.3 24.3 0 0 0-.465 4.728v25.213c0 27.848 47.757 50.424 106.667 50.424s106.667-22.576 106.667-50.424v-25.213l-.015-.833a24.5 24.5 0 0 0-.447-3.888c-6.532 5.223-14.486 10.04-23.701 14.164c-21.51 9.624-50.514 15.77-82.504 15.77c-33.258 0-63.285-6.653-85.052-16.942c-8.136-3.847-15.219-8.252-21.15-12.999m0-75.636a24.3 24.3 0 0 0-.465 4.728v25.212c0 27.849 47.757 50.424 106.667 50.424s106.667-22.575 106.667-50.424V318.06l-.015-.834a24.5 24.5 0 0 0-.447-3.887c-6.532 5.223-14.486 10.04-23.701 14.163c-21.51 9.625-50.514 15.77-82.504 15.77c-33.258 0-63.285-6.652-85.052-16.942c-8.136-3.846-15.219-8.252-21.15-12.998m106.202-121.333C303.757 192 256 214.575 256 242.424v25.212c0 27.848 47.757 50.424 106.667 50.424s106.667-22.576 106.667-50.424v-25.212l-.158-2.767C466.138 213.095 419.614 192 362.667 192M101.719 51.61l30.173 30.173C109.67 104.807 96 136.14 96 170.666c0 42.82 21.026 80.728 53.316 103.965l.018-82.632H192v149.334H42.667v-42.667l68.446.001c-35.432-31.272-57.78-77.027-57.78-128c0-46.309 18.444-88.31 48.386-119.057" /></svg>
                                    </div>
                                    <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">Stable</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">Total Return</p>
                                <h3 className="text-2xl font-black text-on-surface mt-1">1,156</h3>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}
