import { div } from 'framer-motion/client'
import React from 'react'
import { useSideBar } from '../../../../context/ProfileSideBarContext'

export default function () {
    const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()

    return (
        <div className='p-4'>
            <div className="mb-6 ">
                <div className="flex gap-2 justify-between">
                    <div>
                        <h1 className=" text-2xl md:text-3xl font-medium md:font-semibold mt-0 md:mt-3">Product Catalog</h1>
                        <p className="text-gray-500 font-light">Manage your footwear inventory and store listings</p>
                    </div>
                    <div className='flex items-center'>
                        {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 z-10 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-slate-100 rounded-lg">
                            <svg className='text-gray-600' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m15.5 19.925l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4zM21 10h-2V5h-2v3H7V5H5v14h6v2H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.175q.275-.875 1.075-1.437T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5zm-8.287-5.287Q13 4.425 13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5t.713-.288" stroke-width="0" stroke="currentColor" /></svg>
                        </div>
                        {/* <span className="text-xs font-bold text-gray-600 bg-green-50 px-2 py-1 rounded">+12%</span> */}
                    </div>
                    <p className="text-slate-500 text-sm font-medium">Total Products</p>
                    <h3 className="text-2xl font-black text-on-surface mt-1">1,284</h3>
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
                <div className="col-span-1 sm:col-span-2 md:col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
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
            {/* <!-- Filters Area --> */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 mb-6 flex flex-wrap items-center gap-4">
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1 px-1">Category</label>
                    <select className="w-full bg-slate-100 border-slate-200 rounded-lg text-sm font-light focus:ring-orange-600 focus:border-orange-600 p-1">
                        <option>All Categories</option>
                        <option>Sports</option>
                        <option>Casual</option>
                        <option>Formal</option>
                        <option>Running</option>
                    </select>
                </div>
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1 px-1">Gender</label>
                    <select className="w-full bg-slate-100 border-slate-200 rounded-lg text-sm font-light focus:ring-orange-600 focus:border-orange-600 p-1">
                        <option>All Genders</option>
                        <option>Men</option>
                        <option>Women</option>
                        <option>Unisex</option>
                    </select>
                </div>
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1 px-1">Status</label>
                    <select className="w-full bg-slate-100 border-slate-200 rounded-lg text-sm font-light focus:ring-orange-600 focus:border-orange-600 p-1">
                        <option>Any Status</option>
                        <option>Active</option>
                        <option>Draft</option>
                        <option>Inactive</option>
                    </select>
                </div>
                <div className="flex items-center self-stretch pt-5">
                    <button className="flex items-center gap-1 cursor-pointer px-6 text-red-600 hover:text-on-surface font-normal text-sm transition-colors  border-slate-200 rounded-lg bg-white ">
                        Clear all <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="m10.25 5.75-4.5 4.5m0-4.5 4.5 4.5" /><circle cx="8" cy="8" r="6.25" /></g></svg>
                    </button>
                </div>
            </div>
            <div className='bg-linear-to-br from-[#f7f0ff] to-[#c0daf8] rounded-xl shadow-md'>
                {/* <!-- Product Table --> */}
                <div className="  rounded-xl overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className=" border-b border-slate-200">
                                <th className="px-6 py-2.5 text-nowrap text-sm font-medium text-slate-600 tracking-wider">#</th>
                                <th className="px-6 py-2.5 text-nowrap text-sm font-medium text-slate-600 tracking-wider">Product</th>
                                <th className="px-6 py-2.5 text-nowrap text-sm font-medium text-slate-600 tracking-wider">Attributes</th>
                                <th className="px-6 py-2.5 text-nowrap text-sm font-medium text-slate-600 tracking-wider">Variants</th>
                                <th className="px-6 py-2.5 text-nowrap text-sm font-medium text-slate-600 tracking-wider">Price Range</th>
                                <th className="px-6 py-2.5 text-nowrap text-sm font-medium text-slate-600 tracking-wider">Stock</th>
                                <th className="px-6 py-2.5 text-nowrap text-sm font-medium text-slate-600 tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                            {products.map((product, index) => (
                                <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                                    <td className='px-6 py-4'>{index + 1}</td>
                                    {/* Product */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-24 h-16 rounded-lg bg-slate-100 overflow-hidden border border-gray-300">
                                                <img src={product.image} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-medium">{product.name}</p>
                                                <p className="text-xs text-slate-500">{product.brand} • SKU: {product.sku}</p>
                                            </div>
                                        </div>
                                    </td>
                                    {/* Attributes */}
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-1">
                                            <div>
                                                <span className="px-2.5 py-0.5 rounded-full text-xs bg-green-100 text-green-700">{product.status}</span>
                                            </div>
                                            <span className="px-2 py-0.5 text-[10px] bg-orange-50 text-orange-600 rounded w-fit uppercase">{product.category}</span>
                                            <span className="px-2 py-0.5 text-[10px] bg-slate-100 text-slate-600 rounded w-fit uppercase">{product.gender}</span>
                                        </div>
                                    </td>
                                    {/* Variants */}
                                    <td className="px-6 py-4 text-sm text-nowrap">{product.sizes} sizes, {product.colors} colors</td>
                                    {/* Price */}
                                    <td className="px-6 py-4 text-sm text-nowrap">{product.price}</td>
                                    {/* Stock */}
                                    <td className="px-6 py-4">
                                        {product.stockStatus === "in-stock" && (
                                            <div className="flex items-center gap-2">
                                                <span className='text-sm text-green text-nowrap'>{product.stock} units</span>
                                            </div>
                                        )}
                                        {product.stockStatus === "low" && (
                                            <div className="flex flex-col">
                                                <span className="text-sm text-orange-400 text-nowrap">{product.stock} left</span>
                                            </div>
                                        )}
                                        {product.stockStatus === "out" && (<span className="text-sm text-red-600 text-nowrap">Out of Stock</span>)}
                                    </td>
                                    {/* Actions */}
                                    <td className="px-6 py-4 text-right">
                                        <div className='flex items-center gap-2'>
                                            <button className='p-3 cursor-pointer border border-gray-300 text-red-600 rounded-md hover:shadow'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8.493 20.292q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709t-3.51-.708M12 20q1.465 0 2.82-.514q1.357-.515 2.465-1.494L6.008 6.716q-.96 1.107-1.484 2.463T4 12q0 3.35 2.325 5.675T12 20m5.992-2.716q.98-1.107 1.493-2.463Q20 13.465 20 12q0-3.35-2.325-5.675T12 4q-1.471 0-2.834.505q-1.362.504-2.45 1.503zM12 12" /></svg></button>
                                            <button className='p-3 cursor-pointer border border-gray-300 text-blue-600 rounded-md hover:shadow'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M9.533 11.15A1.82 1.82 0 0 0 9 12.438V15h2.578c.483 0 .947-.192 1.289-.534l7.6-7.604a1.82 1.82 0 0 0 0-2.577l-.751-.751a1.82 1.82 0 0 0-2.578 0z" /><path d="M21 12c0 4.243 0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12s0-6.364 1.318-7.682S7.758 3 12 3" /></g></svg></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <!-- Pagination --> */}
                </div>
                <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2">
                    <p className="text-sm text-slate-500 font-light">Showing 1 to 10 of 1,284 results</p>
                    <div className='overflow-x-auto'>
                        <div className="flex items-center gap-1">
                            <button className="p-2 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 disabled:opacity-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth={1.5} d="m15 6l-6 6l6 6"></path></svg>
                            </button>
                            <button className="py-2 px-3 border border-orange-600 rounded-lg bg-orange-600 text-white font-bold text-sm">1</button>
                            <button className="py-2 px-3 border border-slate-200 rounded-lg bg-white text-slate-600 font-bold text-sm hover:border-orange-600 transition-colors">2</button>
                            <button className="py-2 px-3 border border-slate-200 rounded-lg bg-white text-slate-600 font-bold text-sm hover:border-orange-600 transition-colors">3</button>
                            <span className="px-2 text-slate-400">...</span>
                            <button className="py-2 px-3 border border-slate-200 rounded-lg bg-white text-slate-600 font-bold text-sm hover:border-orange-600 transition-colors">128</button>
                            <button className="p-2 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z" strokeWidth={0.7} stroke="currentColor"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const products = [
    {
        id: 1,
        name: "Air Zoom Pegasus 38",
        brand: "Nike",
        sku: "NK-P38-001",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABMeZ_gCcTwHAZoTlmaqClRfM6U5SQT8mnchLIOjNF2fiix46bhvULwHnlTVcom5e-8c07-RiRGu-gLB8eTTBWxxkPGurGCskzneGRUSk44KK-zcIo8es9joctBMaOunEUi2IP5-in869LOXPJRm1UfG7KGlLGDEMQMfMmV23h-eSFd2CEdMZAGvcfeVx_28NTzuEDOpGyqWFSmWuvZVbeTVDauQ2C-CtJEsVRhTxccsEXq78lUF3aOG1SMmmUDRsrOd2MFI1tKXBu",
        category: "Running",
        gender: "Unisex",
        sizes: 8,
        colors: 4,
        price: "$120.00 - $145.00",
        stock: 184,
        stockStatus: "in-stock",
        status: "Active",
    },
    {
        id: 2,
        name: "Stan Smith Premium",
        brand: "Adidas",
        sku: "AD-SS-99",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbtw2NdOQwEJ80XE1dH0RFm4bI2w4qbaUFYW26tu2RXUj177EH5NeB4G1_sXmr6jyGvXfioW_8d0qiBY5O1ATnO3cxAxYDDJAs0MJ8PeMg0WVdvBj9TngA6BIgY6bUa_aFqXr7VJUpFUIxLJRbhth1RMThOwqxL0CwAZ-6-G3c5ru1tWQZG13BnI-0FgNps9Fue1Q415k2kd1f5MRqbChZExFjxGARModenG0p4DBW6AoMtG7ju5K0uiMbejaArGpiGNhNXlpsSFNm",
        category: "Casual",
        gender: "Men",
        sizes: 12,
        colors: 2,
        price: "$85.00",
        stock: 12,
        stockStatus: "low",
        status: "Active",
    },
    {
        id: 3,
        name: "Jordan Retro High",
        brand: "Jordan",
        sku: "JD-RH-22",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_1NqSzvvKnWaHwmjchtukBic7lV81n9uEJ6DMb-l0ypMwEl_JFvt7Nxi81Z2rrAG0MdkMr3ITEGfIZpN_pD1I1KVNx6N5lKkSu6PoARNkk2yT5RHzYKD4-Nzl3r9rUIF1Y76W0Dtd3uLMKN6KJKIJ0j5ncH9FwfLjYmQcnMR6iw31we1lo-hEQ-5RsJKq8viqAzN3WT0UEspRNT6qQ1vsE9a9pNLDqOZq_z4OYMwzdbums3BiAgfjD6KvsPIaReti_p_0FwdhYMo3",
        category: "Sports",
        gender: "Women",
        sizes: 6,
        colors: 1,
        price: "$190.00",
        stock: 0,
        stockStatus: "out",
        status: "Draft",
    },
    {
        id: 1,
        name: "Air Zoom Pegasus 38",
        brand: "Nike",
        sku: "NK-P38-001",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABMeZ_gCcTwHAZoTlmaqClRfM6U5SQT8mnchLIOjNF2fiix46bhvULwHnlTVcom5e-8c07-RiRGu-gLB8eTTBWxxkPGurGCskzneGRUSk44KK-zcIo8es9joctBMaOunEUi2IP5-in869LOXPJRm1UfG7KGlLGDEMQMfMmV23h-eSFd2CEdMZAGvcfeVx_28NTzuEDOpGyqWFSmWuvZVbeTVDauQ2C-CtJEsVRhTxccsEXq78lUF3aOG1SMmmUDRsrOd2MFI1tKXBu",
        category: "Running",
        gender: "Unisex",
        sizes: 8,
        colors: 4,
        price: "$120.00 - $145.00",
        stock: 184,
        stockStatus: "in-stock",
        status: "Active",
    },
    {
        id: 2,
        name: "Stan Smith Premium",
        brand: "Adidas",
        sku: "AD-SS-99",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbtw2NdOQwEJ80XE1dH0RFm4bI2w4qbaUFYW26tu2RXUj177EH5NeB4G1_sXmr6jyGvXfioW_8d0qiBY5O1ATnO3cxAxYDDJAs0MJ8PeMg0WVdvBj9TngA6BIgY6bUa_aFqXr7VJUpFUIxLJRbhth1RMThOwqxL0CwAZ-6-G3c5ru1tWQZG13BnI-0FgNps9Fue1Q415k2kd1f5MRqbChZExFjxGARModenG0p4DBW6AoMtG7ju5K0uiMbejaArGpiGNhNXlpsSFNm",
        category: "Casual",
        gender: "Men",
        sizes: 12,
        colors: 2,
        price: "$85.00",
        stock: 12,
        stockStatus: "low",
        status: "Active",
    },
]