export default function CheckoutSummary({
    selectedAddress,
    item,
    onChangeAddress,
}) {
    return (
        <div className="space-y-4">

            <div className="bg-gray-50 shadow-md rounded-xs flex flex-col items-center justify-center p-4">
                <div className="flex justify-between items-center gap-3 w-4/5 md:w-3/5">
                    <div className="flex justify-center items-center w-5 h-5 rounded-full">
                        {false ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01m204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0c1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263c-12.512-12.496-32.768-12.496-45.28 0" /></svg>
                            :
                            <svg className="text-green-600" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="SVGIQLGgV2F"><g fill="none" strokeLinejoin="round" strokeWidth="4"><path fill="#fff" stroke="#fff" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z" /><path stroke="#000" strokeLinecap="round" d="m16 24l6 6l12-12" /></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGIQLGgV2F)" /></svg>
                        }
                    </div>
                    <div className="bg-black flex-1 h-0.5"></div>
                    <div className="flex justify-center items-center w-5 h-5 rounded-full">
                        {false ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01m204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0c1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263c-12.512-12.496-32.768-12.496-45.28 0" /></svg>
                            :
                            <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="SVGIQLGgV2F"><g fill="none" strokeLinejoin="round" strokeWidth="4"><path fill="#fff" stroke="#fff" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z" /><path stroke="#000" strokeLinecap="round" d="m16 24l6 6l12-12" /></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGIQLGgV2F)" /></svg>
                        }
                    </div>
                    <div className="bg-black flex-1 h-0.5"></div>
                    <div className="flex justify-center items-center w-5 h-5 rounded-full">
                        {!false ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01m204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0c1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263c-12.512-12.496-32.768-12.496-45.28 0" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="SVGIQLGgV2F"><g fill="none" strokeLinejoin="round" strokeWidth="4"><path fill="#fff" stroke="#fff" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z" /><path stroke="#000" strokeLinecap="round" d="m16 24l6 6l12-12" /></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGIQLGgV2F)" /></svg>
                        }
                    </div>
                </div>
                <div className="flex justify-between items-center gap-3 w-4/5 md:w-4/6 text-xs md:text-sm">
                    <div className="flex justify-center items-center">Address</div>
                    <div></div>
                    <div className="flex justify-center items-center text-nowrap">Order Summery</div>
                    <div></div>
                    <div className="flex justify-center items-center ">Payment</div>
                </div>
            </div>

            <div className="bg-gray-50 shadow-md rounded-xs p-4">
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xl font-medium">Address</h4>
                        <button
                            onClick={onChangeAddress}
                            className="border text-blue-600 bg-blue-100 py-1 px-5 rounded-md text-sm hover:bg-blue-200 transition"
                        >Change</button>
                    </div>
                    <div className="space-y-2">
                        <p className="font-medium">
                            {selectedAddress.name}{" "}
                            <span className="inline-block px-1 border text-gray-500 bg-gray-200 rounded-md text-xs font-light">
                                {selectedAddress.type}
                            </span>
                        </p>
                        <div>
                            <p className="font-light text-sm text-gray-700">
                                {selectedAddress.landmark}, {selectedAddress.addressLine},{" "}
                                {selectedAddress.state}, {selectedAddress.city},{" "}
                                {selectedAddress.pincode}
                            </p>
                            <p className="font-light text-sm text-gray-700">{selectedAddress.phone}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 shadow-md rounded-xs">
                <div className="p-4 flex gap-4">
                    <img
                        src={item.image}
                        className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                        <div className="flex justify-between flex-wrap gap-2">
                            <div>
                                <h2 className="font-medium">{item.title}</h2>
                                <p className="text-sm text-gray-500">Seller: {item.seller}</p>
                            </div>
                            <div className="text-sm text-yellow-500">★ {item.rating} ({item.reviews})</div>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="font-semibold text-lg">₹{item.price}</span>
                            <span className="line-through text-gray-400 text-sm">₹{item.originalPrice}</span>
                            <span className="text-green-600 text-sm">{item.discount}% off</span>
                        </div>
                        <div className="flex justify-between items-center flex-wrap">
                            <div className="mt-2 text-sm">Qty: {item.quantity}</div>
                            <p className="text-sm text-gray-500 mt-2">{item.delivery}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}