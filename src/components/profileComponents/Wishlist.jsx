import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSideBar } from "../../pages/constext/ProfileSideBarContext";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Wishlist() {
  const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()
  const navigate = useNavigate();
  const popRef = useRef();
  const [items, setItems] = useState(wishlistItems);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteQueue, setDeleteQueue] = useState({});


  // 🔥 Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => (popRef.current && !popRef.current.contains(e.target)) && setShowConfirm(false)
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    console.log(deleteQueue)
  }, [deleteQueue]);

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className='flex justify-between items-center shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)] p-4 border-b border-gray-300'>
        <h2 className="text-xl font-semibold">My Wishlist</h2>
        {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
      </div>
      {/* EMPTY STATE */}
      <div className="p-4">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">
              Your wishlist is empty
            </p>
            <button className="bg-black text-white px-6 py-2 rounded">
              Continue Shopping
            </button>
          </div>
        ) : (
          /* GRID */
          <div className="space-y-4">

            {items.map((item) => {
              const { id, title, brand, price, originalPrice, discount, rating, reviews, image, stock, colors, sizes, tag, delivery } = item
              return (
                <div
                  key={id}
                  onClick={() => navigate('/product/id123')}
                  className="flex gap-4 border border-gray-200 rounded-xl p-3 bg-white hover:shadow-md transition cursor-pointer"
                >
                  {/* IMAGE */}
                  <img
                    src={image}
                    className="w-28 h-28 object-cover rounded-lg"
                    alt={title}
                  />
                  {/* CONTENT */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between relative">
                        <h2 className="text-sm md:text-base font-medium">{title}</h2>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setDeleteQueue(item)
                            setShowConfirm(true)
                          }}
                          className="text-red-400 rounded text-sm"
                        ><svg className="cursor-pointer inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" /></svg></button>
                        <AnimatePresence>
                          {(showConfirm && id === deleteQueue?.id) && (

                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              ref={popRef}
                              onClick={(e) => e.stopPropagation()}
                              className="absolute -right-3 top-10 w-64 bg-white shadow-xl rounded-md border p-4 z-50 cursor-default"
                            >
                              <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-l border-t"></div>
                              <p className="text-sm text-gray-700 text-center">
                                Are you sure you want to remove this product?
                              </p>
                              <div className="flex justify-between mt-4 text-sm font-medium">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowConfirm(false)
                                  }}
                                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                                >CANCEL</button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    console.log("Deleted");
                                    removeItem(item.id)
                                    setShowConfirm(false);
                                  }}
                                  className="text-red-500 hover:text-red-600 cursor-pointer"
                                >YES, REMOVE</button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <p className="text-gray-600 text-sm mt-1"> {price < originalPrice ? <span className="line-through"> ₹{originalPrice}</span> : ""} ₹{price}</p>
                      <p className="text-gray-600 text-sm mt-1 ">{rating} ★ <div className={`h-2 w-25 flex bg-gray-300 rounded-full`}> <span className="inline-block h-2 bg-yellow-500 rounded-full" style={{ width: `calc(100px * ( ${rating} / 5))` }}></span></div> <span></span></p>
                      <p className="text-xs mt-1">{stock ? <span className="text-green-600 ">In stock</span> : <span className="text-red-400">Out of stock</span>}</p>
                      <p className=" text-xs mt-1 text-blue-600">{reviews} reviews</p>
                    </div>
                    <div className="flex justify-end gap-3 mt-3">
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div >
  );
}

const wishlistItems = [
  {
    id: 1,
    title: "Nike Air Zoom Pegasus 39",
    brand: "Nike",
    price: 3000,
    originalPrice: 3999,
    discount: 25,
    rating: 4.5,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?q=80&w=1160",
    stock: true,
    colors: ["Black", "White"],
    sizes: [7, 8, 9, 10],
    tag: "Best Seller",
    delivery: "Free delivery by Tomorrow",
  },
  {
    id: 2,
    title: "Adidas Ultraboost 22",
    brand: "Adidas",
    price: 4000,
    originalPrice: 4999,
    discount: 20,
    rating: 4.3,
    reviews: 980,
    image: "https://images.unsplash.com/photo-1659785568869-aa061a0f8e87?q=80&w=1160",
    stock: false,
    colors: ["Blue"],
    sizes: [8, 9, 10],
    tag: "Trending",
    delivery: "Currently unavailable",
  },
  {
    id: 3,
    title: "Puma RS-X Reinvention",
    brand: "Puma",
    price: 3500,
    originalPrice: 4200,
    discount: 15,
    rating: 4.6,
    reviews: 650,
    image: "https://images.unsplash.com/photo-1723740240701-a9fbf7719fe8?q=80&w=1810",
    stock: false,
    colors: ["Red", "White"],
    sizes: [6, 7, 8],
    tag: "Limited",
    delivery: "Out of stock",
  },
];