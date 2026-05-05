import React from 'react'
import { Pencil, CheckCircle2, Diamond, Users, Globe, MessageCircle, ImageIcon, Star, Leaf } from "lucide-react";

export default function BrandDetails() {
    return (
        <div className="p-6 space-y-6 min-h-screen">
            {/* HEADER */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="h-40 bg-linear-to-r from-gray-200 to-gray-300 relative">
                    <img
                        src="https://images.unsplash.com/photo-1633464129147-777bdcc97c1d?q=80&w=2368&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-full h-full object-cover shadow-md shadow-gray-300 opacity-90"
                    />
                    <div className="absolute -bottom-12 left-6 w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center text-white text-3xl shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.2" d="m6 14l7-12v8h5l-7 12v-8z" /></svg>
                    </div>
                </div>
                <div className="pt-16 pb-6 px-6 flex justify-between items-start flex-wrap gap-4">
                    <div>
                        <h1 className="text-lg md:text-2xl font-bold flex items-center gap-2">
                            Shore Performance <CheckCircle2 className="text-blue-500" size={20} />
                        </h1>
                        <p className="text-gray-500 mt-1">Step into Style</p>
                        <div className="flex gap-2 mt-3 flex-wrap">
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">Running</span>
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">Sneakers</span>
                            <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm">Top Seller</span>
                        </div>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg flex items-center gap-2">
                        <Pencil size={16} />
                        Edit Brand
                    </button>
                </div>
            </div>
            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LEFT */}
                <div className="lg:col-span-2 space-y-6">
                    {/* BRAND STORY */}
                    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                        <h2 className="font-semibold text-lg">Brand Story</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Shore Performance was born from a desire to bridge the gap between high-intensity athletic performance
                            and sophisticated urban lifestyle...
                        </p>
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {brandHighlights.map((item) => (
                                <div key={item.title} className="bg-gray-50 p-4 rounded-lg text-center text-sm font-medium">
                                    <div className="flex justify-center mb-2">
                                        {item.icon}
                                    </div>
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* CATEGORIES + USE CASES */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* CATEGORIES */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="font-semibold mb-4 flex items-center gap-2">
                                <svg className='text-gray-400' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M7.425 9.475L11.15 3.4q.15-.25.375-.363T12 2.925t.475.113t.375.362l3.725 6.075q.15.25.15.525t-.125.5t-.35.363t-.525.137h-7.45q-.3 0-.525-.137T7.4 10.5t-.125-.5t.15-.525M17.5 22q-1.875 0-3.187-1.312T13 17.5t1.313-3.187T17.5 13t3.188 1.313T22 17.5t-1.312 3.188T17.5 22M3 20.5v-6q0-.425.288-.712T4 13.5h6q.425 0 .713.288T11 14.5v6q0 .425-.288.713T10 21.5H4q-.425 0-.712-.288T3 20.5m14.5-.5q1.05 0 1.775-.725T20 17.5t-.725-1.775T17.5 15t-1.775.725T15 17.5t.725 1.775T17.5 20M5 19.5h4v-4H5zM10.05 9h3.9L12 5.85zm7.45 8.5" strokeWidth={0.0} stroke="currentColor"></path></svg>
                                Categories</h2>
                            {["Running & Performance", "Casual Lifestyle", "Training Gear"].map((item) => (
                                <div key={item} className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                                    <span>{item}</span>
                                    <span>›</span>
                                </div>
                            ))}
                        </div>
                        {/* USE CASES */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="font-semibold mb-4 flex items-center gap-2">
                                <svg className='text-gray-400' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M8.93 4.47a17.5 17.5 0 0 0-3.86 0a.666.666 0 0 0-.586.577a16.8 16.8 0 0 0 0 3.907a.666.666 0 0 0 .587.576c1.271.142 2.587.142 3.858 0a.666.666 0 0 0 .587-.576c.152-1.298.152-2.61 0-3.908a.666.666 0 0 0-.587-.576M4.903 2.98a19 19 0 0 1 4.192 0c.99.11 1.793.89 1.91 1.892a18.3 18.3 0 0 1 0 4.256a2.166 2.166 0 0 1-1.91 1.893c-1.382.154-2.81.154-4.192 0a2.166 2.166 0 0 1-1.91-1.893a18.3 18.3 0 0 1 0-4.256a2.166 2.166 0 0 1 1.91-1.892M8.93 14.47a17.5 17.5 0 0 0-3.86 0a.666.666 0 0 0-.586.576a16.8 16.8 0 0 0 0 3.908a.666.666 0 0 0 .587.576c1.271.142 2.587.142 3.858 0a.666.666 0 0 0 .587-.576c.152-1.298.152-2.61 0-3.908a.666.666 0 0 0-.587-.576m-4.026-1.49a19 19 0 0 1 4.192 0c.99.11 1.793.89 1.91 1.892a18.3 18.3 0 0 1 0 4.256a2.166 2.166 0 0 1-1.91 1.892c-1.382.155-2.81.155-4.192 0a2.166 2.166 0 0 1-1.91-1.892a18.3 18.3 0 0 1 0-4.256a2.166 2.166 0 0 1 1.91-1.892M18.93 4.47a17.5 17.5 0 0 0-3.86 0a.666.666 0 0 0-.586.577a16.8 16.8 0 0 0 0 3.907a.666.666 0 0 0 .587.576c1.271.142 2.587.142 3.858 0a.666.666 0 0 0 .587-.576c.152-1.298.152-2.61 0-3.908a.666.666 0 0 0-.587-.576m-4.026-1.49a19 19 0 0 1 4.192 0c.99.11 1.793.89 1.91 1.892a18.3 18.3 0 0 1 0 4.256a2.166 2.166 0 0 1-1.91 1.893c-1.382.154-2.81.154-4.192 0a2.166 2.166 0 0 1-1.91-1.893a18.3 18.3 0 0 1 0-4.256a2.166 2.166 0 0 1 1.91-1.892m4.027 11.49a17.5 17.5 0 0 0-3.86 0a.666.666 0 0 0-.586.576a16.8 16.8 0 0 0 0 3.908a.666.666 0 0 0 .587.576c1.271.142 2.587.142 3.858 0a.666.666 0 0 0 .587-.576c.152-1.298.152-2.61 0-3.908a.666.666 0 0 0-.587-.576m-4.026-1.49a19 19 0 0 1 4.192 0c.99.11 1.793.89 1.91 1.892a18.3 18.3 0 0 1 0 4.256a2.166 2.166 0 0 1-1.91 1.892c-1.382.155-2.81.155-4.192 0a2.166 2.166 0 0 1-1.91-1.892a18.3 18.3 0 0 1 0-4.256a2.166 2.166 0 0 1 1.91-1.892" clipRule="evenodd"></path></svg>
                                Use Cases</h2>
                            {[
                                ["Morning", "Daily Training"],
                                ["Commute", "Daily Wear"],
                                ["Outdoor", "Trail Running"],
                                ["Gym", "Indoor Workout"],
                            ].map(([label, value]) => (
                                <div key={value} className="bg-gray-50 p-4 rounded-lg mb-3 text-center">
                                    <p className="text-xs text-gray-400">{label.toUpperCase()}</p>
                                    <p className="font-medium">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* GALLERY */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold">Lifestyle Gallery</h2>
                            <button className="text-orange-500 text-sm">
                                <span className='hover:underline cursor-pointer text-blue-500 text-sm font-normal flex items-center gap-0.5'>See all<svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043" /></svg></span>
                            </button>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {lifeStyleGallery.map((i) => (
                                <div key={i} className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <img src={i} alt="" className="w-full h-full object-cover rounded-lg shadow transform hover:-translate-y-1 hover:shadow-lg transition cursor-pointer shadow-olive-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="space-y-6">

                    {/* BRAND POSITION */}
                    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                        <h2 className="font-semibold">Brand Positioning</h2>
                        <div className="flex items-center gap-3">
                            <div className='p-1 rounded-md bg-yellow-50 text-yellow-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.2} d="m12 20l-7.32-9.15c-.333-.416-.5-.624-.544-.874s.04-.503.208-1.008l.744-2.233c.44-1.32.66-1.98 1.184-2.357S7.492 4 8.883 4h6.234c1.391 0 2.087 0 2.61.378c.525.377.745 1.037 1.185 2.357l.744 2.233c.168.505.252.757.208 1.008c-.045.25-.211.458-.544.874zm0 0l3.5-11M12 20L8.5 9m11 1l-4-1m0 0L14 5m1.5 4h-7M10 5L8.5 9m0 0l-4 1"></path></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">SEGMENT</p>
                                <p className="font-medium">Premium Luxury</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className='p-1 rounded-md bg-blue-50 text-blue-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 5a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 12a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 5m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 10a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 7M5.5 8A2.5 2.5 0 0 0 3 10.5c0 .94.53 1.75 1.29 2.18c.36.2.77.32 1.21.32s.85-.12 1.21-.32c.37-.21.68-.51.91-.87A5.42 5.42 0 0 1 6.5 8.5v-.28c-.3-.14-.64-.22-1-.22m13 0c-.36 0-.7.08-1 .22v.28c0 1.2-.39 2.36-1.12 3.31c.12.19.25.34.4.49a2.48 2.48 0 0 0 1.72.7c.44 0 .85-.12 1.21-.32c.76-.43 1.29-1.24 1.29-2.18A2.5 2.5 0 0 0 18.5 8M12 14c-2.34 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.66-3.5-7-3.5m-7.29.55C2.78 14.78 0 15.76 0 17.5V19h3v-1.93c0-1.01.69-1.85 1.71-2.52m14.58 0c1.02.67 1.71 1.51 1.71 2.52V19h3v-1.5c0-1.74-2.78-2.72-4.71-2.95M12 16c1.53 0 3.24.5 4.23 1H7.77c.99-.5 2.7-1 4.23-1"></path></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">TARGET</p>
                                <p className="font-medium">Unisex, Adults (24–45)</p>
                            </div>
                        </div>
                    </div>
                    {/* VISUAL IDENTITY */}
                    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                        <h2 className="font-semibold">Visual Identity</h2>
                        <div>
                            <p className="text-xs text-gray-400 mb-2">COLOR PALETTE</p>
                            <div className="flex gap-2">
                                <div className="w-10 h-10 bg-orange-500 rounded-md" />
                                <div className="w-10 h-10 bg-gray-900 rounded-md" />
                                <div className="w-10 h-10 bg-gray-200 rounded-md" />
                            </div>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 mb-2">TYPOGRAPHY</p>
                            <div className="bg-gray-50 p-4 rounded-lg space-y-1">
                                <p className="font-bold">Abc 900</p>
                                <p className="font-semibold">Abc 700</p>
                                <p className="font-medium">Abc 500</p>
                                <p className="text-gray-400">Abc 400</p>
                            </div>
                        </div>
                    </div>
                    {/* CORPORATE */}
                    <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
                        <h2 className="font-semibold">Corporate Details</h2>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Founded</span>
                            <span>2024</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Origin</span>
                            <span>United States</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Headquarters</span>
                            <span>Portland, OR</span>
                        </div>
                        <div className='mt-6'>
                            <span className="text-gray-500 font-medium">Social Presence</span>
                            <div className="flex gap-3 pt-3">
                                <div className='p-2 rounded-full bg-gray-50 border border-gray-200'>
                                    <svg className='text-rose-500' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z" strokeWidth={1}></path></svg>                                </div>
                                <div className='p-2 rounded-full bg-gray-50 border border-gray-200'>
                                    <svg className='text-green-500' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 16 16"><path fill="currentColor" d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1s-.48.6-.59.73s-.21.14-.4 0a5.1 5.1 0 0 1-1.49-.92a5.3 5.3 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.4 1.4 0 0 0 .18-.31a.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23a2.1 2.1 0 0 0-.65 1.55A3.6 3.6 0 0 0 5 8.2A8.3 8.3 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.5 2.5 0 0 0 1.17.07a1.93 1.93 0 0 0 1.26-.88a1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21"></path><path fill="currentColor" d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85l3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72M8 14.12a6.1 6.1 0 0 1-3.15-.87l-.22-.13l-2.34.61l.62-2.28l-.14-.23a6.18 6.18 0 0 1 9.6-7.65a6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12"></path></svg>
                                </div>
                                <div className='p-2 rounded-full bg-gray-50 border border-gray-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 16 16"><path fill="currentColor" d="m9.237 7.004l4.84-5.505H12.93L8.727 6.28L5.371 1.5H1.5l5.075 7.228L1.5 14.499h1.147l4.437-5.047l3.545 5.047H14.5zM7.666 8.791l-.514-.72L3.06 2.344h1.762l3.302 4.622l.514.72l4.292 6.007h-1.761z" strokeWidth={0.2} stroke="currentColor"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const brandHighlights = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fcd100" d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z"></path><path fill="#fcd100" d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" opacity={0.85}></path></svg>, title: "Premium Quality" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#f6990b" strokeWidth={1.8}><path strokeLinecap="round" d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14"></path><path d="M7.383 17.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527c-.17.511-.255.767-.386.974a2 2 0 0 1-1.2.869c-.238.059-.506.059-1.043.059h-3.976c-.537 0-.806 0-1.043-.06a2 2 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974ZM15 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C13.082 22 12.72 22 12 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L9 19"></path><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-5"></path></g></svg>, title: "Innovation Led" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 16 16"><path fill="none" stroke="#11b002" d="M9 12.5s2.678.322 4.208-1.208S14.5 6.5 14.5 6.5s-3.11-.447-4.5 1c-.435.453-1 1-1 2.5zm0 0s-3.5.5-5.912-1.912S1.5 3.5 1.5 3.5s3.652-.348 6.059 2.059C8.526 6.526 9 8 9 9.706zm2.5-2.5L9 12M5 8l3.782 3.972" strokeWidth={1.2}></path></svg>, title: "Sustainable Focus" }
]

const lifeStyleGallery = [
    "https://images.unsplash.com/photo-1643758344142-7933a8c07796?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlmZSUyMHN0eWxlJTIwc2hvZXxlbnwwfDJ8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1612892158094-a4e23361afad?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1552209841-d2dc5fd68a30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJ1bm5pbmclMjBzaG93fGVufDB8MnwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1639745157928-80f96af74090?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlraW5nJTIwYm9vdHN8ZW58MHwyfDB8fHww",
]