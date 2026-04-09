import { Heart, Search, ShoppingCart, Sparkles, Menu, X, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);
  const user = token ? JSON.parse(localStorage.getItem("user")) : null;
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -2000]);

  const location = window.location.pathname;
  const isProfile = location.startsWith("/profile");

  return (
    <>
      <header className={`sticky top-0 z-50 ${location === '/offers' ? 'h-0 p-0' : ''}`}>

        {/* 🔝 TOP BAR */}
        <div className="flex items-center justify-between px-3 py-2 gap-2 md:gap-3 rounded-lg bg-gray-200 shadow-sm m-2">
          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          ><Menu size={22} /></button>
          <div className="flex-1">
            <Link to="/" className="text-2xl font-bold text-orange-500">Shore</Link>
          </div>
          <div className="flex md:flex-1 max-w-xl border border-gray-500 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 ps-1 sm:ps-3 pe-0 sm:pe-3 py-1.5 outline-none text-sm"
            />
            <button className="bg-orange-500 text-white px-3 flex items-center">
              <Search size={16} />
            </button>
          </div>

          <div className="hidden md:flex items-center justify-end flex-1">
            {token ? (
              <div className="flex items-center gap-2 md:gap-4">
                <Link to='/profile/wishlist'>
                  <Heart className="cursor-pointer" strokeWidth={1.5} size={20} />
                </Link>
                <Link to="/cart">
                  <ShoppingCart className="cursor-pointer" strokeWidth={1.5} size={20} />
                </Link>
                <Link to="/profile">
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt="profile"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100">
                      <User size={18} />
                    </div>
                  )}
                </Link>
              </div>
            ) : (
              <Link to="/onboarding">Sign in</Link>
            )}
          </div>
        </div>

        {/* 📱 MOBILE SIDEBAR */}

        <div className={`fixed inset-0 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 z-0 ${isOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setIsOpen(false)}
          />
          <div className={`absolute top-0 left-0 h-full w-72 bg-white p-4 z-10 pointer-events-auto transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex justify-between items-center">
              {token &&
                <Link to="/profile" onClick={() => setIsOpen(false)}>
                  {user?.avatar ?
                    (<img
                      src={user.avatar}
                      alt="profile"
                      className="w-10 h-10 rounded-full object-cover mb-2"
                    />)
                    :
                    (<div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 mb-2">
                      <User size={18} />
                    </div>)
                  }
                </Link>
              }
              <button onClick={() => setIsOpen(false)} className="mb-4">
                <X />
              </button>
            </div>

            {/* 🔐 Auth */}
            {token ? (
              <div className="flex flex-col border-t pt-4 font-medium border-b ">
                <Link to="/products" className="px-2 py-2  rounded hover:bg-orange-100 cursor-pointer" onClick={() => setIsOpen(false)}>Products</Link>
                <Link to="/cart" className="px-2 py-2  rounded hover:bg-orange-100 cursor-pointer" onClick={() => setIsOpen(false)}>Cart</Link>
              </div>
            ) : (
              <Link to="/onboarding" className="px-2 py-2  rounded hover:bg-orange-100 cursor-pointer" onClick={() => setIsOpen(false)}>
                Sign in
              </Link>
            )}

            {/* 📂 Categories */}
            <div className={` ${token ? "" : "border-t"} text-black flex flex-col`}>
              <Link className="px-2 py-2  rounded hover:bg-orange-100 cursor-pointer" onClick={() => navigate('/new-arrivals')}><span className="relative">New Arrivals <svg className="absolute -top-1 -right-3 text-[#cfb910]" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="m17 1.208l1.32 2.473L20.792 5L18.32 6.319L17 8.792l-1.318-2.473l-2.473-1.32l2.473-1.318zM8 4.333l2.667 5l5 2.667l-5 2.667l-2.666 5l-2.667-5l-5-2.667l5-2.667zm11.667 12l-1.666-3.125l-1.667 3.125L13.209 18l3.125 1.667l1.667 3.125l1.666-3.125L22.792 18z" /></svg></span></Link>
              <Link className="px-2 py-2  rounded hover:bg-orange-100 cursor-pointer" onClick={() => navigate('/casual')}>Casual</Link>
              <Link className="px-2 py-2  rounded hover:bg-orange-100 cursor-pointer" onClick={() => navigate('/formal')}>Formal</Link>
              <Link className="px-2 py-2  rounded hover:bg-orange-100 cursor-pointer" onClick={() => navigate('/sports')}>Sports</Link>
              <Link className="px-2 py-2  rounded hover:bg-orange-100 cursor-pointer" onClick={() => navigate('/offers')}>Offers</Link>
              <Link className="px-2 py-2  rounded hover:bg-orange-100 cursor-pointer" onClick={() => navigate('/gifts')}>Gift</Link>
              <Link className="px-2 py-2  rounded hover:bg-orange-100 cursor-pointer" onClick={() => navigate('/trend')}>Trend</Link>
            </div>
          </div>
        </div>
      </header>
      {/* 🔽 DESKTOP NAV */}
      {/* {(location !== '/products' && location !== '/profile') && */}
      {(!isProfile) &&
        <motion.div style={{ y: y1 }}>
          <div className={`pt-0 z-50  ${location === '/offers' ? 'h-0 p-0' : 'p-2'}`}>
            <div className="hidden md:flex justify-center gap-6 px-4 py-1 text-sm text-black bg-gray-200 rounded-lg">
              {(location !== '/') &&
                <>
                  <span onClick={() => navigate('/')} className="relative cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z" /><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21" /></g></svg></span>
                  <span>|</span>
                </>
              }
              <span onClick={() => navigate('/products')} className="relative cursor-pointer">New Arrivals<svg className="absolute -top-1 -right-2 text-[#cfb910]" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="m17 1.208l1.32 2.473L20.792 5L18.32 6.319L17 8.792l-1.318-2.473l-2.473-1.32l2.473-1.318zM8 4.333l2.667 5l5 2.667l-5 2.667l-2.666 5l-2.667-5l-5-2.667l5-2.667zm11.667 12l-1.666-3.125l-1.667 3.125L13.209 18l3.125 1.667l1.667 3.125l1.666-3.125L22.792 18z" /></svg></span>
              <span onClick={() => navigate('/products')} className="cursor-pointer">Casual</span>
              <span onClick={() => navigate('/products')} className="cursor-pointer">Formal</span>
              <span onClick={() => navigate('/products')} className="cursor-pointer">Sports</span>
              <span>|</span>
              <span onClick={() => navigate('/offers')} className={`cursor-pointer ${location == '/offers' ? 'font-semibold' : ''}`}>Offers</span>
              <span onClick={() => navigate('/gifts')} className="cursor-pointer">Gift</span>
              <span onClick={() => navigate('/products')} className="cursor-pointer">Trend</span>
              <span>|</span>
              <span onClick={() => navigate('/products')} className="cursor-pointer">Products</span>
            </div>
          </div>
        </motion.div>
      }
    </>
  );
}