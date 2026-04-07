import { Link } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
import FilterSection from "../../components/FilterSection";
import { AnimatePresence, motion } from "framer-motion";

export default function Products() {
  const [activeGender, setActiveGender] = useState("men");
  const [showFilters, setShowFilters] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="w-full relative">

      {/* 🔥 HERO / BANNER */}
      <div className="sticky z-0 top-0 bg-linear-to-r  from-black via-gray-900 to-gray-600 text-white p-6 md:p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold ">
            Step Into Style 👟
          </h1>
          <p className="text-sm md:text-base mt-2 text-gray-300">
            Discover premium shoes crafted for comfort and performance.
          </p>
        </div>
      </div>

      <div className="relative bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 py-6 ">
          {/* 🧭 TOP FILTER BAR */}
          <div className="w-full md:sticky top-16 z-10 bg-[#ece8dc] rounded-3xl md:rounded-full p-1.5 flex flex-row items-center justify-between gap-4">
            <div onClick={() => setShowFilters(true)} className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:shadow-lg rounded-full p-1 pe-3 transition duration-300 border border-gray-400">
              <div className="p-2 sm:p-2.5 rounded-full bg-white shadow-sm">
                <SlidersHorizontal size={16} />
              </div>
              <span className="text-xs">FILTER OUT</span>
              <span className="text-gray-500 hidden sm:inline-block">(42 products)</span>
            </div>
            <div className="flex justify-between items-center gap-3">
              <div className="relative flex bg-white border hover:border-gray-400 transition duration-300 rounded-full p-2 w-fit text-sm">
                <div
                  className={`absolute top-1 left-1 h-[calc(100%-8px)] w-1/2 bg-black rounded-full transition-all duration-300`}
                  style={{
                    transform: activeGender === "men"
                      ? "translateX(0%)"
                      : "translateX(92%)"
                  }}
                />
                <button
                  onClick={() => setActiveGender("men")}
                  className={`relative z-10 text-xs sm:text-sm md:px-4 py-1 w-16 sm:w-25 transition text-center ${activeGender === "men" ? "text-white" : "text-gray-600"
                    }`}
                >MEN</button>
                <button
                  onClick={() => setActiveGender("women")}
                  className={`relative z-10 text-xs sm:text-sm md:px-4 py-1 w-16 sm:w-25 transition text-center ${activeGender === "women" ? "text-white" : "text-gray-600"
                    }`}
                >WOMEN</button>
              </div>
              <div onClick={() => setShowFeatures(prev => !prev)} className="hidden md:flex items-center gap-2 border text-xs sm:text-sm hover:border-gray-400 transition duration-300 px-4 py-3 rounded-full bg-white cursor-pointer relative">
                <span className="font-medium">FEATURED</span>
                <ChevronDown className={`transition duration-300 ${showFeatures ? 'rotate-180' : ''}`} size={16} />
                {/* 🔥 DROPDOWN */}
                <AnimatePresence>
                  {showFeatures && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-14 right-0 w-44 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden z-50"
                    >
                      <ul className="text-sm">
                        {[
                          "Featured",
                          "Best Selling",
                          "Alphabetically, A-Z",
                          "Alphabetically, Z-A",
                          "Price, Low To High",
                          "Price, High To Low",
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* 🧱 MAIN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* 📊 SIDEBAR FILTERS */}
            <div className="hidden lg:block space-y-6 p-4 md:p-2pt-5 ">
              <div>
                <h3 className="font-semibold mb-2">Brand</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  {["Nike", "Adidas", "Puma", "Reebok"].map((p, i) => (
                    <label key={i} className="flex gap-2 text-sm">
                      <input type="checkbox" />
                      {p}
                    </label>
                  ))}
                </div>
              </div>
              {/* Rating */}
              <div className="">
                <h3 className="font-semibold mb-2">Rating</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  {[
                    "5 ★ Products",
                    "4 ★ & Above",
                    "3 ★ & Above",
                    "2 ★ & Above",
                    "All Rating",
                  ].map((item, i) => (
                    <label key={i} className="flex items-center gap-2 text-sm">
                      <input type="radio" name="sort" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* 🛍 PRODUCTS GRID */}
            <div className="lg:col-span-3">

              {/* Result Info */}
              <p className="text-xs text-gray-500 my-2 text-end pe-1">
                Showing <span className="text-black">{dummyProducts.length}</span> results
              </p>

              {/* GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {dummyProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
                  >
                    {/* IMAGE */}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                    {/* CONTENT */}
                    <div className="p-2 md:p-3 space-y-1">
                      <h2 className="text-sm md:text-base font-medium line-clamp-2">{product.title}</h2>
                      <p className="text-sm font-semibold">₹{product.price}</p>
                      {/* Rating */}
                      <p className="text-xs text-yellow-500">★★★★☆ (120) </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        showFilters &&
        <div className="fixed inset-0 z-50">
          {/* BACKDROP */}
          <div
            onClick={() => setShowFilters(false)}
            className={`absolute inset-0`}
          />
          {/* MODAL */}
          <div className="absolute bottom-0 md:bottom-auto top-0 right-0 left-0 md:top-10 md:left-10 md:right-10 bg-white md:rounded-t-3xl md:rounded-3xl p-4 md:p-8 overflow-y-auto border border-gray-400">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">
                Filter and Sort
              </h2>
              <button onClick={() => setShowFilters(false)}>
                <X />
              </button>
            </div>

            <div className="space-y-4 grid md:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="inline-block md:hidden">
                <FilterSection title="SORT BY">
                  {[
                    "Featured",
                    "Best Selling",
                    "Alphabetically, A-Z",
                    "Alphabetically, Z-A",
                    "Price, Low To High",
                    "Price, High To Low",
                  ].map((item, i) => (
                    <label key={i} className="flex items-center gap-2 text-sm">
                      <input type="radio" name="sort" />
                      {item}
                    </label>
                  ))}
                </FilterSection>
              </div>
              <FilterSection title="SIZE">
                <p className="text-xs text-gray-500 mb-2">
                  Most shoes come in full sizes.
                </p>
                <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {[8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5].map((size) => (
                    <button
                      key={size}
                      className="border py-2 text-sm rounded hover:bg-gray-100 text-center"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </FilterSection>
              <FilterSection title="COLOR">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Black", code: "#000" },
                    { name: "Grey", code: "#6b7280" },
                    { name: "White", code: "#fff" },
                    { name: "Red", code: "#ef4444" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-2">
                      <div
                        className="w-5 h-5 rounded-full border"
                        style={{ backgroundColor: c.code }}
                      />
                      <span className="text-sm">{c.name}</span>
                    </div>
                  ))}
                </div>
              </FilterSection>
              <FilterSection title="PRICE">
                {["Under ₹500", "₹500-₹1000", "₹1000-₹2000", "₹2000-₹5000"].map((p, i) => (
                  <label key={i} className="flex gap-2 text-sm">
                    <input type="checkbox" />
                    {p}
                  </label>
                ))}
              </FilterSection>
              <FilterSection title="PRODUCT TYPE">
                {["Sneakers", "Running", "Slip-ons"].map((p, i) => (
                  <label key={i} className="flex gap-2 text-sm">
                    <input type="checkbox" />
                    {p}
                  </label>
                ))}
              </FilterSection>
              <div className='md:hidden inline-block'>
                <FilterSection title="PRODUCT TYPE">
                  {[
                    "5 ★ Products",
                    "4 ★ & Above",
                    "3 ★ & Above",
                    "2 ★ & Above",
                    "All Rating",
                  ].map((item, i) => (
                    <label key={i} className="flex items-center gap-2 text-sm">
                      <input type="radio" name="sort" />
                      {item}
                    </label>
                  ))}
                </FilterSection>
              </div>
              <div className='md:hidden inline-block'>
                <FilterSection title="PRODUCT TYPE">
                  {["Nike", "Adidas", "Puma", "Reebok"].map((p, i) => (
                    <label key={i} className="flex gap-2 text-sm">
                      <input type="checkbox" />
                      {p}
                    </label>
                  ))}
                </FilterSection>
              </div>
            </div>
            <div className="mt-6 md:hidden flex gap-2">
              <button className="flex-1 border py-2 rounded">Clear</button>
              <button className="flex-1 bg-black text-white py-2 rounded">Apply Filters</button>
            </div>
          </div>
        </div>
      }
    </div >
  );
}


const dummyProducts = [
  {
    id: 1,
    title: "Nike Air Zoom Pegasus 39",
    price: 3000,
    image: "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?q=80&w=1160",
  },
  {
    id: 2,
    title: "Adidas Ultraboost 22 Running Shoes",
    price: 4000,
    image: "https://images.unsplash.com/photo-1659785568869-aa061a0f8e87?q=80&w=1160",
  },
  {
    id: 3,
    title: "Nike Revolution 6 Next Nature",
    price: 2800,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1160",
  },
  {
    id: 4,
    title: "Reebok Classic Leather Sneakers",
    price: 2500,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1160",
  },

  // 🔥 New images mixed in
  {
    id: 5,
    title: "Puma RS-X Reinvention",
    price: 3500,
    image: "https://images.unsplash.com/photo-1723740240701-a9fbf7719fe8?q=80&w=1810&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Nike Air Max Street",
    price: 3200,
    image: "https://images.unsplash.com/photo-1742392787511-8158c243b772?q=80&w=1760&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Adidas Run Falcon",
    price: 2700,
    image: "https://images.unsplash.com/photo-1721819269041-e14fc6c95eb8?q=80&w=1760&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Reebok Nano X",
    price: 3100,
    image: "https://images.unsplash.com/photo-1712004049536-7fbd4ef6b7b8?q=80&w=1760&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Puma Velocity Nitro",
    price: 3600,
    image: "https://images.unsplash.com/photo-1673229745029-a76cc0030e86?q=80&w=1762&auto=format&fit=crop",
  },
];