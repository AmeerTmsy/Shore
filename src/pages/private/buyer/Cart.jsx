export default function Cart() {
  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-4">

          {cartData.items.map((item) => (
            <div className="bg-gray-50 shadow-md rounded-xs">
              <div key={item.id} className=" p-4 pb-0 flex gap-4 ">

                {/* Image */}
                <img
                  src={item.image}
                  className="w-24 h-24 object-cover rounded"
                />

                {/* Info */}
                <div className="flex-1">
                  <div className="flex justify-between flex-wrap gap-2">
                    <div>
                      <h2 className="font-medium">{item.title}</h2>
                      <p className="text-sm text-gray-500">Seller: {item.seller}</p>
                    </div>
                    <div className="text-sm text-yellow-500">★ {item.rating} ({item.reviews})</div>
                  </div>
                  {/* Price */}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-semibold text-lg">₹{item.price}</span>
                    <span className="line-through text-gray-400 text-sm">₹{item.originalPrice}</span>
                    <span className="text-green-600 text-sm">{item.discount}% off </span>
                  </div>
                  {/* Quantity & Delivery */}
                  <div className="flex justify-between items-center flex-wrap">
                    <div className="mt-2">Qty: {item.quantity}</div>
                    <p className="text-sm text-gray-500 mt-2">{item.delivery}</p>
                  </div>
                  < div className="hidden md:flex justify-between border border-gray-200 mt-2 text-sm w-full rounded-tl rounded-tr" >
                    <button className="text-gray-500 hover:bg-gray-50 transition-colors font-medium flex-1 py-2 border-r border-gray-200 bg-gray-100 rounded-tl flex items-center justify-center gap-2 cursor-pointer"><svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z" /></svg> Save for later</button>
                    <button className="text-red-400 hover:bg-gray-50 transition-colors font-medium flex-1 py-2 border-r border-gray-200 bg-gray-100 flex items-center justify-center gap-1 cursor-pointer"><svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" /></svg> Remove</button>
                    <button className="text-blue-500 hover:bg-gray-50 transition-colors font-medium flex-1 py-2 border-gray-200 bg-gray-100 rounded-tr flex items-center justify-center gap-2 cursor-pointer"><svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M10.5 2v2.5a3 3 0 0 1-6 0V2m-3-.5v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1Z" stroke-width="1" /></svg> Buy now</button>
                  </div>
                </div>
              </div>

              < div className="flex md:hidden flex-col sm:flex-row justify-between border border-gray-200 mt-2 text-sm rounded-tl rounded-tr mx-2" >
                <div className="flex flex-2  border-b sm:border-b-0 border-gray-200 ">
                  <button className="text-gray-500 hover:bg-gray-50 transition-colors font-medium flex-1 py-2 border-r border-gray-200 bg-gray-100 rounded-tl flex items-center justify-center gap-2 cursor-pointer"><svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z" /></svg> Save for later</button>
                  <button className="text-red-400 hover:bg-gray-50 transition-colors font-medium flex-1 py-2 sm:border-r border-gray-200 bg-gray-100 flex items-center justify-center gap-1 cursor-pointer"><svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" /></svg> Remove</button>
                </div>
                <button className="text-blue-500 hover:bg-gray-50 transition-colors font-medium flex-1 py-2 border-gray-200 bg-gray-100 rounded-tr flex items-center justify-center gap-2 cursor-pointer"><svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M10.5 2v2.5a3 3 0 0 1-6 0V2m-3-.5v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1Z" stroke-width="1" /></svg> Buy now</button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4 h-fit w-full sticky top-20">
          {/* <h2 className="font-semibold mb-4">Price Details</h2> */}
          <div className=" p-4 bg-gray-50  shadow-sm rounded-xs">
            <div className="space-y-3 text-xs">
              <div className="flex justify-between  border-b border-gray-300 pb-4 border-dashed">
                <span>MRP</span>
                <span>₹{cartData.priceDetails.mrp}</span>
              </div>

              <div className="flex justify-between  border-b border-gray-300 pb-4 border-dashed">
                <span>Discount</span>
                <span className="text-green-600">
                  -₹{cartData.priceDetails.discount}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>₹{cartData.priceDetails.delivery}</span>
              </div>

              <div className="flex justify-between font-semibold text-md border-t border-gray-300 pt-4">
                <span>Total</span>
                <span>₹{cartData.priceDetails.total}</span>
              </div>
            </div>
          </div>

          <div className=" p-4 h-fit bg-gray-50 shadow-sm rounded-xs">
            <div className="border-b border-gray-300 mb-4">
              <h2 className="font-semibold mb-2">Apply Coupon</h2>
            </div>
            <div className="flex justify-between gap-1">
              <input type="text" placeholder="Enter coupon code" className="border flex-1 border-gray-300 rounded-sm py-1 px-3 focus:outline-none focus:ring focus:ring-orange-300 text-sm text-gray-600" />
              <button className="bg-gray-500 text-white py-1 px-5 rounded-sm text-sm">Apply</button>
            </div>
          </div>

          <div className=" p-4 bg-gray-50 shadow-sm rounded-xs">
            <h2 className="font-semibold border-b border-gray-300">Total</h2>
            <div className="flex justify-between items-center pt-2">
              <div className="">
                <p>₹1307.00</p>
              </div>
              <button className=" bg-yellow-400 py-2 px-5 font-semibold rounded">Place Order</button>
            </div>
            {/* CTA */}

            <div className="pt-4 pb-2 h-fit">
              <p className="text-xs text-gray-500 mt-1 text-center flex justify-center items-center gap-2"><svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zm4.135 6.434l-4.598 4.598l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l5.234-5.235a1 1 0 1 0-1.414-1.414" /></g></svg> Safe & Secure Payments • Easy Returns</p>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-xs bg-[#13ff2b2d] text-green-700 mt-3 px-5 py-2 rounded-lg flex items-center"> <svg className="pe-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M10.03 8.97a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 1 0 1.06-1.06zm3.59 4.65a.75.75 0 0 0 0 1.06l.353.354a.75.75 0 0 0 1.06-1.06l-.353-.354a.75.75 0 0 0-1.06 0m1.41-3.59a.75.75 0 1 0-1.06-1.06l-5 5a.75.75 0 1 0 1.06 1.06z" /></svg>
              You will save ₹{cartData.priceDetails.discount} on this order</p>
          </div>

        </div>
      </div>
    </div >

  );
}


const cartData = {
  items: [
    {
      id: 1,
      title: "AeroFlex Pro Running Shoes",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500",
      seller: "Shore Official",
      rating: 4.6,
      reviews: 180,
      price: 202,
      originalPrice: 330,
      discount: 38,
      quantity: 1,
      delivery: "Delivery by Apr 6",
    },
    {
      id: 2,
      title: "Urban Street Sneakers",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
      seller: "Shore Store",
      rating: 4.2,
      reviews: 95,
      price: 326,
      originalPrice: 355,
      discount: 8,
      quantity: 1,
      delivery: "Delivery by Apr 10",
    },
    {
      id: 3,
      title: "Nike Revolution 6 Running Shoes",
      image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=500",
      seller: "Nike Official",
      rating: 4.5,
      reviews: 420,
      price: 2499,
      originalPrice: 3499,
      discount: 28,
      quantity: 1,
      delivery: "Delivery by Apr 7",
    },
    {
      id: 4,
      title: "Adidas Ultraboost Light Sneakers",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500",
      seller: "Adidas Store",
      rating: 4.7,
      reviews: 860,
      price: 8999,
      originalPrice: 11999,
      discount: 25,
      quantity: 1,
      delivery: "Delivery by Apr 8",
    },
    {
      id: 5,
      title: "Puma RS-X Reinvention Casual Shoes",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500",
      seller: "Puma India",
      rating: 4.3,
      reviews: 210,
      price: 4599,
      originalPrice: 6999,
      discount: 34,
      quantity: 1,
      delivery: "Delivery by Apr 9",
    },
    {
      id: 6,
      title: "Campus Men's Oxyfit Running Shoes",
      image: "https://images.unsplash.com/photo-1584735175315-9d5df23be620?q=80&w=500",
      seller: "Campus Official",
      rating: 4.1,
      reviews: 150,
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      quantity: 2,
      delivery: "Delivery by Apr 6",
    },
    {
      id: 7,
      title: "Red Tape Casual Lifestyle Sneakers",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=500",
      seller: "Red Tape",
      rating: 4.4,
      reviews: 310,
      price: 2799,
      originalPrice: 3999,
      discount: 30,
      quantity: 1,
      delivery: "Delivery by Apr 10",
    },
  ],

  priceDetails: {
    mrp: 1983,
    discount: 681,
    delivery: 7,
    total: 1309,
  },
};