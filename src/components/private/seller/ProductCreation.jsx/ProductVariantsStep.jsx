import { useEffect, useState } from "react";

export default function ProductVariantsStep({ variants, setVariants, setStep, heroImageUrl, productAddedSuccess, setProductAddedSuccess, brand, productName }) {

    const addNewProduct = async () => {
        console.log('New Product Added ')
        setProductAddedSuccess(true)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function generateSKU(brand, name, size, color) {
        const nameCode = brand ? brand.slice(0, 3).toUpperCase() : "";
        const categoryCode = name ? name.slice(0, 3).toUpperCase() : "";
        const sizeCode = size ? size.toString().toUpperCase() : "";
        const colorCode = color ? color.slice(0, 3).toUpperCase() : "";

        const random = Math.floor(1000 + Math.random() * 9000);

        return `${nameCode}-${categoryCode}-${sizeCode}-${colorCode}-${random}`;
    }

    const addVariant = () => {
        setVariants((prev) => [
            ...prev,
            {
                sku: `SKU-${Date.now()}`,
                color: "New Color",
                colorCode: "#cccccc",
                size: 8,
                price: 0,
                stock: 0,
            },
        ]);
    };

    // 🔥 Update Variant
    const updateVariant = (index, key, value) => {
        const updated = [...variants];
        updated[index][key] = value;
        updated[index].sku = generateSKU(brand, productName, updated[index].size, updated[index].color);
        setVariants(updated);
    };

    // 🔥 Delete Variant
    const deleteVariant = (index) => {
        setVariants((prev) => prev.filter((_, i) => i !== index));
    };

    // 🔥 Bulk Actions
    const applyPriceToAll = () => {
        const price = prompt("Enter price for all:");
        if (!price) return;

        setVariants((prev) =>
            prev.map((v) => ({ ...v, price: Number(price) }))
        );
    };

    const applyStockToAll = () => {
        const stock = prompt("Enter stock for all:");
        if (!stock) return;

        setVariants((prev) =>
            prev.map((v) => ({ ...v, stock: Number(stock) }))
        );
    };

    // 📊 Summary
    const totalStock = variants?.reduce((acc, v) => acc + v.stock, 0);
    const avgPrice =
        variants?.length > 0
            ? (
                variants?.reduce((acc, v) => acc + v.price, 0) /
                variants?.length
            ).toFixed(2)
            : 0;
    const totalPrice =
        variants?.length > 0
            ? (
                variants?.reduce((acc, v) => acc + v.price, 0)
            ).toFixed(2)
            : 0;

    return (
        productAddedSuccess ?
            <div className="w-full flex flex-col items-center justify-center py-12 px-4">
                <div className={`flex items-center justify-center rounded-full bg-orange-50 mb-6 transition-all duration-700 ${productAddedSuccess ? 'w-32 h-32' : 'w-20 h-20'}`}>
                   <div className={`flex items-center justify-center rounded-full bg-orange-100 transition-all duration-1000 ${productAddedSuccess ? 'w-20 h-20' : 'w-16 h-16'}`}>
                        <span className="text-orange-400 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.186-2.419a1 1 0 1 0-1.628-1.162l-4.314 6.04l-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z" clipRule="evenodd" />
                            </svg>
                        </span>
                   </div>
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">Product Created Successfully!</h1>
                <p className="text-gray-500 text-center mb-8">Your new product listing is now live and visible to buyers.</p>
                <div className="w-full max-w-3xl bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 text-sm text-gray-500">
                        <span className="font-medium">LISTING PREVIEW</span>
                        <span className="text-orange-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" /></svg>
                            <span> Live Now</span>
                        </span>
                    </div>
                    <div className="flex gap-6 p-6 items-center flex-col md:flex-row">
                        <div className="w-40 h-40 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                                src={heroImageUrl || "https://images.unsplash.com/photo-1750493101721-72dbceafef2f?q=80&w=1160&auto=format&fit=crop"}
                                className="w-full h-full object-cover"
                                alt="product"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <div className="flex gap-2">
                                <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">Performance</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">Men's</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Air Zoom Pegasus 38</h2>
                                <p className="text-sm font-light text-gray-500">Base SKU: NIKE-P38-ORG-01</p>
                            </div>
                            <p className="text-orange-500 font-normal text-lg">
                                $120.00 <span className="text-gray-400 text-sm">Retail Price</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition">
                        View in Catalog
                    </button>
                    <button onClick={() => {
                        setProductAddedSuccess(false);
                        setStep(1);
                    }} className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition">
                        Add Another Product
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 w-full max-w-3xl">
                    <div className="flex flex-col justify-center items-center rounded-lg p-4 text-center cursor-pointer">
                        <svg className="text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20 6a2.5 2.5 0 1 0-4.76 1.071l-6.705 3.477a2.5 2.5 0 1 0-.001 2.905l6.555 3.884A2.504 2.504 0 0 0 17.5 20.5a2.5 2.5 0 1 0-1.957-4.056L9.005 12.57l-.063-.032a2.5 2.5 0 0 0 0-1.076l.038-.018l6.75-3.5a.5.5 0 0 0 .109-.076A2.5 2.5 0 0 0 20 6m-2.5-1.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-11 6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m11 6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd" strokeWidth="0.2" stroke="currentColor" /></svg>
                        Share Listing
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-lg p-4 text-center cursor-pointer">
                        <svg className="text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="1.5"><path d="M19.09 14.441v4.44a2.37 2.37 0 0 1-2.369 2.369H5.12a2.37 2.37 0 0 1-2.369-2.383V7.279a2.356 2.356 0 0 1 2.37-2.37H9.56" /><path d="M6.835 15.803v-2.165c.002-.357.144-.7.395-.953l9.532-9.532a1.36 1.36 0 0 1 1.934 0l2.151 2.151a1.36 1.36 0 0 1 0 1.934l-9.532 9.532a1.36 1.36 0 0 1-.953.395H8.197a1.36 1.36 0 0 1-1.362-1.362M19.09 8.995l-4.085-4.086" /></g></svg>
                        Edit Details
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-lg p-4 text-center cursor-pointer">
                        <svg className="text-gray-600" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2.2"><path d="M42.5 19h-3m-31 0h3m14-17v3M13.479 6.98l2.12 2.122M37.52 6.98l-2.122 2.122m-8.587 3.325c-8.819 7.698-18.314 17.38-21.687 20.87c-.79.817-1.042 2.008-.587 3.048c.248.565.541 1.182.844 1.707s.691 1.087 1.057 1.584c.672.915 1.83 1.291 2.932 1.016c4.709-1.177 17.842-4.558 28.918-8.346" /><path d="M21.612 17.193s2.091 2.092 5.636 8.232s4.311 8.997 4.311 8.997m-8.863 2.935l.594 2.218a4.59 4.59 0 1 1-8.87 2.376l-.494-1.848M26.046 11.1s2.397 2.621 7.166 10.882s5.841 11.647 5.841 11.647" /></g></svg>
                        Promote Now
                    </div>
                </div>
            </div>
            :
            <div className="space-y-10">
                <div>
                    <div className="flex justify-between items-top mb-2">
                        <h2 className="text-xl font-semibold">
                            Product Variants</h2>
                        <button
                            onClick={addVariant}
                            className=" text-blue-500 border px-4 py-2 rounded-lg cursor-pointer"
                        >+ Add Variant</button>
                    </div>
                    <div className="bg-white rounded-xl shadow-[1px_2px_5px_2px_rgba(0,0,0,0.1)] w-full overflow-x-auto">
                        <div className="">
                            <table className=" text-sm  bg-gray-50 w-full" >
                                <thead className="text-gray-500 border-b-2 border-gray-100">
                                    <tr>
                                        <th className="p-3 text-left">SKU</th>
                                        <th className="text-left">Color</th>
                                        <th className="text-left">Size</th>
                                        <th className="text-left">Price</th>
                                        <th className="text-left">Stock 1</th>
                                        <th className="text-left"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {variants?.map((v, i) => (
                                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300">
                                            <td className="px-0.5 ps-3 truncate">{v.sku}</td>

                                            <td className="px-0.5">
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="color"
                                                        value={v.colorCode}
                                                        onChange={e => updateVariant(i, "colorCode", e.target.value)}
                                                        className="w-10 h-4 p-0 border-none rounded-full overflow-hidden cursor-pointer [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch-wrapper]:p-0"
                                                    />
                                                    <input
                                                        value={v.color}
                                                        placeholder="Color"
                                                        onChange={(e) =>
                                                            updateVariant(i, "color", e.target.value)
                                                        }
                                                        className="border border-gray-200 rounded px-2 py-1 focus:outline focus:outline-orange-300 font-light min-w-25 w-full"
                                                    />
                                                    <input
                                                        value={v.colorCode}
                                                        placeholder="# code"
                                                        onChange={(e) =>
                                                            updateVariant(i, "colorCode", e.target.value)
                                                        }
                                                        className="border border-gray-200 rounded px-2 py-1 focus:outline focus:outline-orange-300 font-light min-w-25 w-full"
                                                    />
                                                    {/* </div> */}

                                                </div>
                                            </td>
                                            <td className="px-0.5">
                                                <input
                                                    type="number"
                                                    value={v.size}
                                                    onChange={(e) =>
                                                        updateVariant(i, "size", Number(e.target.value))
                                                    }
                                                    className="border border-gray-200 rounded px-2 py-1 min-w-16 w-full  focus:outline focus:outline-orange-300"
                                                />
                                            </td>
                                            <td className="px-0.5">
                                                <input
                                                    type="number"
                                                    value={v.price}
                                                    onChange={(e) =>
                                                        updateVariant(i, "price", Number(e.target.value))
                                                    }
                                                    className="border border-gray-200 rounded px-2 py-1 min-w-24 w-full  focus:outline focus:outline-orange-300"
                                                />
                                            </td>
                                            <td className="px-0.5">
                                                <input
                                                    type="number"
                                                    value={v.stock}
                                                    onChange={(e) =>
                                                        updateVariant(i, "stock", Number(e.target.value))
                                                    }
                                                    className="border border-gray-200 rounded px-2 py-1 min-w-20 w-full  focus:outline focus:outline-orange-300"
                                                />
                                            </td>
                                            <td className="px-0.5">
                                                <button
                                                    onClick={() => deleteVariant(i)}
                                                    className="text-red-40 text-red-500 px-1 py-0.5 cursor-pointer"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M20.5 6h-17m15.333 2.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79s-2.196.81-4.856.81h-.774c-2.66 0-3.991 0-4.856-.81c-.865-.809-.954-2.136-1.13-4.79l-.46-6.9M9.5 11l.5 5m4.5-5l-.5 5" /><path d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103l.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6" /></g></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Bulk */}
                        <div className="flex justify-between p-4 text-sm text-gray-600">
                            <div className="flex gap-4 font-medium">
                                <button onClick={applyPriceToAll} className="text-blue-500 cursor-pointer hover:underline">
                                    Apply same price
                                </button>
                                <button onClick={applyStockToAll} className="text-blue-500 cursor-pointer hover:underline">
                                    Set global stock
                                </button>
                            </div>
                            <div className="font-light">Showing {variants?.length} variants</div>
                        </div>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Inventory */}
                    <div className="bg-white p-6 rounded-2xl border  border-gray-300">
                        <h3 className="font-semibold mb-4">Inventory Summary</h3>

                        <div className="grid gap-2 font-light">
                            <p className="flex justify-between"><span>Total Variants: </span><span>{variants?.length}</span></p>
                            <p className="flex justify-between"><span>Total Stock: </span><span>{totalStock}</span></p>
                            <p className="flex justify-between"><span>Avg Price: </span><span>${avgPrice}</span></p>
                            <p className="flex justify-between"><span>Total Price: </span><span>${totalPrice}</span></p>
                        </div>
                    </div>
                    {/* Preview */}
                    <div className="lg:col-span-2 flex">
                        <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden flex flex-col md:flex-row w-full">
                            <div className="w-full md:w-1/3 h-64 md:h-auto">
                                <img className="w-full h-full object-cover" src={heroImageUrl || 'https://images.unsplash.com/photo-1750493101721-72dbceafef2f?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt={'Air Max 270 React'} />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-md font-normal">NEW ARRIVAL</span>
                                        <span className="text-gray-600 text-sm font-normal">Nike Sportswear</span>
                                    </div>
                                    <h2 className="text-2xl md:text-2xl font-semibold mb-2">Air Max 270 React</h2>
                                    <p className="text-gray-500 text-sm md:text-[0.9em] font-light">Elevated comfort meets high-energy style with the latest cushion technology.</p>
                                </div>
                                <div className="mt-6 border-t border-gray-200 pt-4 flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-600">PREVIEW ONLY</span>
                                    <div className="flex">
                                        {variants?.map((variant, index) => <span style={{ backgroundColor: variant.colorCode, transform: `translateX(${(variants?.length - index) * 10}px)` }} className={`w-6 h-6 rounded-full border border-white`} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => setStep(2)}
                        className="cursor-pointer px-5 py-2 rounded-lg flex gap-2 items-center "
                    ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M42.5 7.857L26.357 24L42.5 40.143M21.643 7.857L5.5 24l16.143 16.143" strokeWidth="3" /></svg>Back to Media</button>

                    <div className="flex gap-3">
                        <button className="border text-orange-500 px-5 py-2 rounded-lg">
                            Save Draft
                        </button>
                        <button onClick={() => addNewProduct()} className="bg-orange-500 text-white px-6 py-2 rounded-lg">
                            Finish & Create Product
                        </button>
                    </div>
                </div>
            </div>
    );
}