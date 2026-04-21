import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Toast } from "../../utils/alert";
// import { Alert, Toast } from "../../utils/Alert";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [SelectedImage, setSelectedImage] = useState(0);
  const [addedWishlist, setAddedWishlist] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeChartOpen, setSizeChartOpen] = useState(false);
  const [showHighlights, setShowHighlights] = useState(false);
  const [showHDeliveryPickup, setShowHDeliveryPickup] = useState(false);

  const validateToBuy = () => {
    console.log(selectedColor, selectedSize)
    if(!selectedColor && !selectedSize) {
      Toast.warning("Select your preferred color and size")
      return false
    }
    if(!selectedColor){
      Toast.warning("Select your preferred color")
      return false
    }
    if(!selectedSize){
      Toast.warning("Select your preferred size")
      return false
    }
    return true
  }

  const handlePurchase = () => {
    if(!validateToBuy()) return
    navigate('/ordering')
    console.log("Purchaing the product")
    // Toast.success("Your order is confirmed")
  };
  const handleAddToCart = () => {
    console.log("Added to cart 🛒")
    Toast.success("Item added to cart 🛒")
  };

  return (
    <div className="w-full max-w-6xl mx-auto font-">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4 border-b border-gray-100">
        <div className="relative mb-2">
          <div className="w-full sticky top-18">
            <div className="w-full h-96 flex justify-center bg-gray-100 rounded-md p-2 relative">
              <button onClick={() => setAddedWishlist(prev => !prev)} className="rounded-full text-white px-2 absolute top-4 right-2 block md:hidden">{
                addedWishlist ?
                  <svg className="text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillOpacity="0" d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.4s" to="1" /></path><path fill="none" stroke="currentColor" strokeDasharray="30" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0" /></path></svg>
                  :
                  <svg className="text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.24 12.25a4.2 4.2 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.24 4.24 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5zm15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.22 5.22 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96z" /></svg>
              }</button>
              <img
                src={productImages[SelectedImage].image}
                alt={productImages[SelectedImage].id}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex gap-2 my-2 border-e border-s rounded-md overflow-x-auto hide-scrollbar">
              {productImages.map((product, index) => (
                <div onClick={() => {
                  setSelectedImage(index);
                }} key={product.id} className="w-26 h-26 shrink-0">
                  <img className="w-full h-full object-cover rounded-md" src={product.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* title and price section */}
        <div className="w-full pt-4 md:pt-0 border-t md:border-t-0 ">
          <div className="grid  gap-2">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">{productDetails.title}</h2>
              <button onClick={() => setAddedWishlist(prev => !prev)} className="rounded-full text-white px-2 hidden md:block">{
                addedWishlist ?
                  <svg className="text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillOpacity="0" d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.4s" to="1" /></path><path fill="none" stroke="currentColor" strokeDasharray="30" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0" /></path></svg>
                  :
                  <svg className="text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.24 12.25a4.2 4.2 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.24 4.24 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5zm15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.22 5.22 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96z" /></svg>
              }</button>
            </div>
            <h4 className="text-md font-normal">{productDetails.title} | {productDetails.tagline} | {productDetails.category} | {productDetails.colors[0].name} {id}</h4>
            <p className=" text-lg font-medium">₹{productDetails.price}.00</p>
            <p className=" -translate-y-2 text-xs font-light text-red-500">Only 3 left</p>
          </div>

          {/* colors */}
          <div className="mb-4 border-t pt-4 border-gray-300">
            <p className="font-light text-sm">Colours: <span className="">Available in {productDetails.colors.length} colours</span></p >
            <div className="flex gap-1">
              {productDetails.colors.map((color, index) => {
                return (
                  <div onClick={() => color.availability && setSelectedColor(color.code)} key={index} className={`flex items-center justify-between cursor-pointer p-2 rounded-md transition duration-500`} style={{ background: selectedColor === color.code ? "#d6d6d6" : "" }}>
                    <div className="flex items-center gap-3">
                      {/* <div
                        className={`p-0.5 border rounded-full cursor-pointer ${selectedColor === color.code ? "border-black" : "border-gray-300"}`}
                      >
                        <div className={`w-3 h-3 rounded-full ${selectedColor === color.code ? "bg-black" : "bg-gray-300"}`}></div>
                      </div> */}
                      <span style={{ backgroundColor: color.code }} className="border w-14 h-7 flex items-center justify-center"><span className={!color.availability ? "inline-block" : "hidden"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.9 7.9 0 0 1 12 20m6.31-3.1L7.1 5.69A7.9 7.9 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9" /></svg></span></span>
                    </div>
                    {/* <span>{color.name}</span> */}
                  </div>
                );
              })}
            </div>
          </div>

          {/* sizes */}
          <div className=" border-t pt-4 border-gray-300">
            <div>
              <p className="font-light text-sm">Size: <span className="">Currently available in {productDetails.sizes.filter(s => s.availability).length} sizes</span></p >
              <button className="text-blue-500 cursor-pointer hover:underline" onClick={() => setSizeChartOpen(true)}>size chart</button>
            </div>
            <div className="flex flex-wrap gap-1">
              {productDetails.sizes.map((size, index) => {
                return (
                  <div onClick={() => size.availability && setSelectedSize(size.size)} key={index} className={`flex items-center justify-between cursor-pointer p-2 rounded-md`}>
                    <div className="flex items-center gap-3">
                      <span style={{ backgroundColor: size.code }} className={` w-14 h-7 rounded flex items-center justify-center relative ${selectedSize === size.size ? "border-2" : 'border border-gray-500'}`}> {size.size} <span className={`absolute text-gray-400 ${!size.availability ? "inline-block" : "hidden"}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.9 7.9 0 0 1 12 20m6.31-3.1L7.1 5.69A7.9 7.9 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9" /></svg></span></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main actions > Buy & Cart buttons */}
          <div className="flex flex-col gap-2 my-4">
            <div className="flex gap-3">
              <button onClick={handleAddToCart} className="flex-1 rounded-full bg-gray-700 text-white px-4 py-2 cursor-pointer">Add to Cart</button>
            </div>
            <button onClick={handlePurchase} className="rounded-full w-full bg-orange-500 text-white px-4 py-2 cursor-pointer">Buy Now</button>
          </div>

          <div>
            <div className="grid gap-2">
              <div className="border-t mt-5" />
              <h3 className="text-lg font-bold mt-4">Product Details</h3>
              <p className="font-light text-sm">{productDetails.description}</p>
            </div>

            <div className="grid gap-2 mt-4">
              <h3 className="text-lg font-bold">About this item</h3>
              <ul className="list-disc list-inside font-light text-sm">
                {productDetails.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Top Highlights */}
            <div className="grid gap-2 mt-4 border-t pt-4">
              <div className="flex justify-between cursor-pointer" onClick={() => setShowHighlights(prev => !prev)}>
                <h3 className="text-lg font-bold">Top highlights</h3>
                <div>
                  <svg className={`transition-transform duration-300 ${showHighlights ? "" : "rotate-180"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15l7-7l7 7" /></svg>
                </div>
              </div>
              <div className="list-disc list-inside font-light text-sm">
                {productDetails.topHighlights.map((highlight, index) => (
                  showHighlights && <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div key={index} className={`grid-cols-2 gap-2 grid mb-2`}>
                      <div className="grid grid-cols-2">
                        <div>{highlight.label}</div>
                        <div>{highlight.value}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid gap-2 mt-3 border-t py-4 mb-1">
              <div className="flex justify-between cursor-pointer" onClick={() => setShowHDeliveryPickup(prev => !prev)}>
                <h3 className="text-lg font-bold">Delivery / Pickup / Shipping Data</h3>
                <div>
                  <svg className={`transition-transform duration-300 ${showHDeliveryPickup ? "" : "rotate-180"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15l7-7l7 7" /></svg>
                </div>
              </div>
              {showHDeliveryPickup &&
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`space-y-4 grid`}>
                    <div>
                      <h3 className="font-semibold">🚚 {shippingInfo.delivery.title}</h3>
                      <p>{shippingInfo.delivery.type}</p>
                      <p className="text-sm text-gray-500">
                        Estimated: {shippingInfo.delivery.estimated}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">🏬 {shippingInfo.pickup.title}</h3>
                      {shippingInfo.pickup.available ? (
                        shippingInfo.pickup.locations.map((loc, i) => (
                          <p key={i} className="text-sm text-gray-600">
                            {loc.store} ({loc.city}) - {loc.time}
                          </p>
                        ))
                      ) : (
                        <p>Not available</p>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">🔄 {shippingInfo.returnPolicy.title}</h3>
                      <p>{shippingInfo.returnPolicy.returnWindow}</p>
                    </div>
                  </div>
                </motion.div>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly flex-wrap font-light text-sm gap-4 border-b m-4 pb-4">
        <p>🔥 &nbsp;&nbsp; 20+ people viewed this today</p>
        <p>⚡ &nbsp;&nbsp; Only 5 left in stock</p>
        <p>✅ &nbsp;&nbsp; Trusted by 100+ customers</p>
      </div>

      {/* similar products section */}
      <div className="gap-4 p-2 md:px-4">
        <h1 className="text-xl font-bold mb-4 px-2">Similar Products</h1>
        <div className="flex justify-between gap-2 overflow-x-scroll hide-scrollbar ">
          {dummyProducts.map((product) => (

            <div key={product.id} to={`/product/${product.id}`} className="flex flex-col gap-2  w-full min-w-40 md:min-w-72 hover:shadow-lg hover:border border-gray-300 transition-all duration-500 ease-in-out rounded-2xl p-2">
              <img src={product.image} alt={product.title} className="h-auto object-cover self-center rounded-2xl" />
              <h2 className="font-normal text-md">{product.title}</h2>
              <p className="text-gray-500 text-[15px] leading-5 font-normal line-clamp-3">{product.description}</p>
              <div className="flex justify-between">
                <p>₹{product.price}</p>
                <Link to={`/product/${product.id}`} className="text-blue-500">
                  View
                </Link>
              </div>
            </div>

          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 m-4 border-b border-t pt-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Customer Reviews & Ratings
          </h2>

          {ratingBreakdown.map((item) => (
            <div key={item.stars} className="flex items-center gap-2 mb-2">

              {/* Star Number */}
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold">{item.stars}</span>
              </div>
              star
              <div className="flex-1 h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-orange-400 rounded"
                  style={{
                    width: `${(item.count / 230) * 100}%`, // max count
                  }}
                ></div>
              </div>
              {/* Count */}
              <p className="text-sm text-gray-500">
                ({item.count} ratings)
              </p>

            </div>
          ))}
          <div className="mt-4">
            <h4>Product Images</h4>
            <div className="flex gap-2 my-2 border-e border-s rounded-md overflow-x-auto hide-scrollbar">
              {productImages.map((product, index) => (
                <div onClick={() => {
                  setSelectedImage(index);
                }} key={product.id} className="w-26 h-26 shrink-0">
                  <img className="w-full h-full object-cover rounded-md" src={product.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="max-h-[49vh] overflow-y-auto border-t border-b rounded-md">
            <div className="flex flex-col gap-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="border rounded-md p-4 bg-white shadow-sm"
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">{review.name}</p>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < review.rating ?
                          <svg className="text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillOpacity="0" stroke="currentColor" strokeDasharray="66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0" /><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.4s" to="1" /></path></svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillOpacity="0" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" to="0.3" /></path><path fill="none" stroke="currentColor" strokeDasharray="34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4" d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="34;0" /></path></svg>
                        }
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{review.comment}</p>
                  <p className="text-xs text-gray-400 mt-2">{review.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-5 m-4 md:my-6 rounded-xl">
        <div className="flex justify-between items-center bg-white py-1 px-3 rounded-lg shadow-lg">
          <div>
            <h2 className="text-lg font-semibold "> About {nikeBrand.name}</h2>
            <p className="text-sm text-gray-500 mb-2">"{nikeBrand.tagline}"</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5.243 8.375c-1.168 1.334-2.785 2.828-3.173 4.692c-.612 2.938 2.962 2.858 4.697 2.141c5.105-2.11 10.155-4.353 15.233-6.53c-4.937 1.315-9.857 2.699-14.812 3.945c-3.545.892-2.855-2.272-1.945-4.248" clipRule="evenodd" /></svg>
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mt-3">{nikeBrand.description}</p>
        <div className="">
          <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
            {nikeBrand.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 text-xs text-start md:text-end text-gray-500">
          Founded: {nikeBrand.founded} • Origin: {nikeBrand.origin}
        </div>
      </div>


      {sizeChartOpen &&
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md w-11/12 md:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Size Chart</h3>
              <button onClick={() => setSizeChartOpen(false)} className="text-gray-500 hover:text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" /></svg></button>
            </div>
            <div className="max-h-[85vh] overflow-y-auto block border-t border-b border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">US Size</th>
                    <th className="border px-4 py-2">EU Size</th>
                    <th className="border px-4 py-2">Inches</th>
                  </tr>
                </thead>
                <tbody>
                  {NikeSizes.map((size, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2 text-center">{size.size}</td>
                      <td className="border px-4 py-2 text-center">{size.eu}</td>
                      <td className="border px-4 py-2 text-center">{size.inches}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

const productDetails = {
  title: "AeroFlex Pro Running Shoes",

  tagline: "Lightweight Performance. Maximum Comfort.",

  price: 2999,
  originalPrice: 3999,
  discount: "25% OFF",

  rating: 4.6,
  reviewsCount: 128,

  description:
    "Engineered for performance and everyday comfort, the AeroFlex Pro Running Shoes combine breathable materials with responsive cushioning. Whether you're hitting the track or the streets, these shoes provide the perfect balance of support, flexibility, and style.",

  highlights: [
    "Ultra-lightweight design for effortless movement",
    "Breathable mesh upper for all-day comfort",
    "Responsive cushioning for impact absorption",
    "Durable rubber outsole with superior grip",
    "Perfect for running, walking, and casual wear",
  ],

  sizes: [
    { size: 6, availability: true },
    { size: 7, availability: true },
    { size: 8, availability: false },
  ],
  topHighlights: [
    { label: "Sole material", value: "Foam" },
    { label: "Outer material", value: "Synthetic" },
    { label: "Closure type", value: "Lace-Up" },
    { label: "Water resistance level", value: "Not Water Resistant" },
  ],
  colors: [
    { name: "Navy Blue", code: "#1E3A8A", availability: true },
    { name: "Off White", code: "#F5F5F5", availability: true },
    { name: "Olive Green", code: "#556B2F", availability: false },
    { name: "Sand Beige", code: "#D2B48C", availability: true },
    { name: "Steel Blue", code: "#4682B4", availability: true },
  ],

  stockStatus: "In Stock",

  delivery:
    "Free delivery within 3-5 business days. Easy 7-day return policy.",

  brand: "Shore Athletics",

  category: "Sports Shoes",
};

const shippingInfo = {
  delivery: {
    title: "Delivery",
    estimated: "3-5 business days",
    type: "Free Standard Delivery",
    fastOption: {
      available: true,
      time: "1-2 business days",
      cost: 99,
    },
  },

  pickup: {
    title: "Store Pickup",
    available: true,
    locations: [
      {
        city: "Kochi",
        store: "Shore Store - Lulu Mall",
        time: "Ready in 2 hours",
      },
      {
        city: "Trivandrum",
        store: "Shore Store - Mall of Travancore",
        time: "Ready in 4 hours",
      },
    ],
  },

  shipping: {
    title: "Shipping Details",
    method: "Courier Delivery",
    partner: "Delhivery / BlueDart",
    tracking: true,
  },

  returnPolicy: {
    title: "Returns & Refunds",
    returnWindow: "7 days easy return",
    refundTime: "Refund within 3-5 business days",
    conditions: [
      "Product must be unused",
      "Original packaging required",
      "Valid proof of purchase needed",
    ],
  },

  payment: {
    title: "Payment Options",
    methods: [
      "Cash on Delivery",
      "Credit / Debit Card",
      "UPI / Net Banking",
      "Wallets (Paytm, PhonePe)",
    ],
    codAvailable: true,
  },
};

const NikeSizes = [
  { size: 3.5, eu: 35.5, inches: 8.5 },
  { size: 4, eu: 36, inches: 8.7 },
  { size: 4.5, eu: 36.5, inches: 8.8 },
  { size: 5, eu: 37.5, inches: 9.0 },
  { size: 5.5, eu: 38, inches: 9.2 },
  { size: 6, eu: 38.5, inches: 9.3 },
  { size: 6.5, eu: 39, inches: 9.5 },
  { size: 7, eu: 40, inches: 9.7 },
  { size: 7.5, eu: 40.5, inches: 9.8 },
  { size: 8, eu: 41, inches: 10.0 },
  { size: 8.5, eu: 42, inches: 10.2 },
  { size: 9, eu: 42.5, inches: 10.3 },
  { size: 9.5, eu: 43, inches: 10.5 },
  { size: 10, eu: 44, inches: 10.7 },
  { size: 10.5, eu: 44.5, inches: 10.8 },
  { size: 11, eu: 45, inches: 11.0 },
  { size: 11.5, eu: 45.5, inches: 11.2 },
];

const productImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=1160&auto=format&fit=crop"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=1160&auto=format&fit=crop"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1561808843-7adeb9606939?q=80&w=1160&auto=format&fit=crop"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?q=80&w=1092&auto=format&fit=crop"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600185652960-c9d8869d015c?q=80&w=1160&auto=format&fit=crop"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600185652960-c9d8869d015c?q=80&w=1160&auto=format&fit=crop"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1600185652960-c9d8869d015c?q=80&w=1160&auto=format&fit=crop"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1600185652960-c9d8869d015c?q=80&w=1160&auto=format&fit=crop"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1600185652960-c9d8869d015c?q=80&w=1160&auto=format&fit=crop"
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1600185652960-c9d8869d015c?q=80&w=1160&auto=format&fit=crop"
  },
];

const dummyProducts = [
  { id: 1, title: "Nike Air", description: "Comfortable running shoes with superior cushioning and support while maintaining a sleek design.", price: 3000, image: "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "Adidas Ultraboost", description: "High-performance athletic shoes with responsive boost technology.", price: 4000, image: "https://images.unsplash.com/photo-1659785568869-aa061a0f8e87?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "Reebok Classic", description: "Timeless retro design with modern comfort features.", price: 2500, image: "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "Adidas Ultraboost", description: "Advanced cushioning technology for maximum comfort and performance.", price: 4000, image: "https://images.unsplash.com/photo-1659785568869-aa061a0f8e87?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, title: "Nike Air", description: "Iconic air cushioning with a modern twist.", price: 3000, image: "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const brandInfo = {
  name: "Shore Athletics",

  tagline: "Engineered for Movement. Designed for Life.",

  description:
    "Shore Athletics is a modern footwear brand focused on performance, comfort, and everyday style. Built with precision and inspired by active lifestyles, our products are designed to support you from intense workouts to daily wear — without compromising on quality or aesthetics.",

  highlights: [
    "Premium quality materials",
    "Designed for all-day comfort",
    "Performance-driven innovation",
    "Trusted by thousands of customers",
  ],

  founded: "2022",

  origin: "India",

  values: [
    "Comfort First",
    "Durability",
    "Minimal Design",
    "Customer Trust",
  ],
};

const nikeBrand = {
  name: "Nike",

  tagline: "Just Do It.",

  description:
    "Nike is one of the world’s leading sportswear brands, known for its innovation, performance, and iconic design. From professional athletes to everyday users, Nike products are built to enhance performance, provide comfort, and inspire movement.",

  highlights: [
    "Global leader in sportswear and footwear",
    "Innovative technology like Air, React, and Zoom",
    "Trusted by top athletes worldwide",
    "Blend of performance and street-style fashion",
  ],

  founded: "1964",

  origin: "United States",

  founder: "Phil Knight & Bill Bowerman",

  categories: [
    "Running Shoes",
    "Training Shoes",
    "Lifestyle Sneakers",
    "Sports Apparel",
  ],

  stats: {
    globalPresence: "190+ countries",
    customers: "Millions of athletes worldwide",
  },
};

const reviews = [
  {
    id: 1,
    name: "Arjun Nair",
    rating: 5,
    comment: "Absolutely loved the quality! Super comfortable and premium feel.",
    location: "Kerala, India",
    date: "2026-03-20",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    rating: 4,
    comment: "Great experience overall. Would love more color options.",
    location: "Delhi, India",
    date: "2026-03-18",
  },
  {
    id: 3,
    name: "Priya Patel",
    rating: 5,
    comment: "Incredible comfort and style. Highly recommended!",
    location: "Mumbai, India",
    date: "2026-03-15",
  },
];

const ratingBreakdown = [
  { stars: 5, count: 130 },
  { stars: 4, count: 230 },
  { stars: 3, count: 175 },
  { stars: 2, count: 85 },
  { stars: 1, count: 15 },
];