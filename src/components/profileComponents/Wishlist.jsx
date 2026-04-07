import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSideBar } from "../../pages/constext/ProfileSideBarContext";
import { useNavigate } from "react-router-dom";

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

            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate('/product/id123')}
                className="flex gap-4 border border-gray-200 rounded-xl p-3 bg-white hover:shadow-md transition cursor-pointer"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  className="w-28 h-28 object-cover rounded-lg"
                  alt={item.title}
                />
                {/* CONTENT */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between relative">
                      <h2 className="text-sm md:text-base font-medium">{item.title}</h2>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setDeleteQueue(item)
                          setShowConfirm(true)
                        }}
                        className="text-red-400 rounded text-sm"
                      ><svg className="cursor-pointer inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" /></svg></button>
                      {(showConfirm && item.id === deleteQueue?.id) && (
                        <div
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
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mt-1">₹{item.price}</p>
                    <p className="text-xs mt-1">{item.stock ? <span className="text-green-600">In stock</span> : <span className="text-red-400">Out of stock</span>}</p>
                  </div>
                  <div className="flex justify-end gap-3 mt-3">
                    {/* <button className="cursor-pointer flex items-center gap-2 bg-gray-50 text-black border border-gray-500 px-4 py-1.5 rounded text-sm hover:bg-gray-200 transition">+<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"/></svg></button>
                    <button className="cursor-pointer flex items-center gap-2 bg-blue-50 text-green-600 border border-blue-500 px-4 py-1.5 rounded text-sm hover:bg-blue-600 hover:text-white transition"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7M378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211z"/></svg> Buy Now</button> */}
                  </div>
                </div>
              </div>
            ))}
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