import { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import { useSideBar } from "../../../context/ProfileSideBarContext";
import { jwtDecode } from "jwt-decode";

export default function AdminDashboard() {
  const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()
  const location = useLocation();
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decode = jwtDecode(token)
      console.log(decode)
      setUser(decode)
    }
  }, [])


  useEffect(() => {
    console.log(user)
  }, [user])



  const currentPath = location.pathname;

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  const isActive = (path) => currentPath === path;

  const isDropdownActive = (items) => {
    items.some((sub) => sub.path === currentPath);
  }
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 p-4 relative ">
        {/* LEFT SIDEBAR */}
        <div className="md:w-1/3">
          <div className={`space-y-2 w-full sticky left-4 right-4 top-18 lefttranslate-x-28  ${(!showSideBar && sideBarAble) ? 'hidden' : 'block'}`}>
            {/* Profile Card */}
            <div className="bg-blue-50  rounded-sm p-4 border border-blue-100">
              <p className="text-xs font-light">Hello,</p>
              <p className="text-xs font-light">Admin dashboard</p>
              <h4 className="text-lg font-normal">{user?.name || 'User'}</h4>
            </div>
            {/* Sidebar */}
            <div className="bg-blue-50 rounded-sm border border-blue-100">
              <div className="text-sm font-medium">
                {sidebarData.map((item, index) => {
                  // ✅ SINGLE ITEM
                  if (item.type === "single") {
                    return (
                      <Link
                        key={index}
                        // to={item.path}
                        onClick={(e) => {
                          e.preventDefault()
                          navigate(`${item.path}`)
                          setShowSideBar(!showSideBar)
                        }}
                        className={`px-6 py-3 flex items-center gap-2 transition 
                        ${isActive(item.path)
                            ? "bg-blue-200 font-semibold border-l-4 border-blue-600 pl-5"
                            : "hover:bg-indigo-50"
                          }
                      `}
                      >
                        {/* <span>{item.icon}</span> */}
                        {item.title}
                      </Link>
                    );
                  }

                  // ✅ DROPDOWN
                  const isOpen =
                    openSection === item.key ||
                    isDropdownActive(item.items);

                  return (
                    <div key={item.key}>
                      {/* HEADER */}
                      <div
                        onClick={() => toggleSection(item.key)}
                        className={`px-6 py-3 flex justify-between items-center cursor-pointer transition
                        ${isDropdownActive(item.items)
                            ? "bg-blue-200 font-semibold"
                            : "hover:bg-indigo-50"
                          }
                      `}
                      >
                        <div className="flex items-center gap-2">
                          {/* <span>{item.icon}</span> */}
                          <p>{item.title}</p>
                        </div>
                        <svg
                          className={`transition ${isOpen ? "rotate-180" : ""
                            }`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                            d="M36 18L24 30L12 18"
                          />
                        </svg>
                      </div>

                      {/* ITEMS */}
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.items.map((subItem, i) => (
                            <Link
                              key={i}
                              // to={subItem.path}
                              onClick={(e) => {
                                e.preventDefault()
                                navigate(`${subItem.path}`)
                                setShowSideBar(false)
                              }}
                              className={`px-6 py-3 flex items-center gap-2 transition
                              ${isActive(subItem.path)
                                  ? "bg-blue-200 font-semibold border-l-4 border-blue-600 pl-5"
                                  : "hover:bg-indigo-50 font-light"
                                }
                            `}
                            >
                              {/* <span>{subItem.icon}</span> */}
                              {subItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT CONTENT */}
        <div className="bg-gray-50 rounded-sm md:flex-1 border border-gray-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
}


const sidebarData = [
  // ✅ Quick Access
  // {
  //   type: "single",
  //   title: "Track Orders",
  //   icon: "🚚",
  //   path: "/orders", // or specific track
  // },
  // {
  //   type: "single",
  //   title: "My Wishlist",
  //   icon: "❤️",
  //   path: "/profile/wishlist", // assume
  // },
  // {
  //   type: "single",
  //   title: "My Stuff",
  //   icon: "❤️",
  //   path: "/profile/my-stuff",
  // },
  // {
  //   type: "single",
  //   title: "My Orders",
  //   icon: "📦",
  //   path: "/profile/orders",
  // },
  // ✅ Account Section
  {
    type: "dropdown",
    title: "Account",
    key: "account",
    icon: "👤",
    items: [
      { title: "Profile", icon: "👤", path: "/admin-dashboard" },
      // { title: "Addresses", icon: "📍", path: "/profile/addresses" },
      // { title: "Pancard", icon: "🪪", path: "/profile/pancard" },
      { title: "Security", icon: "🔐", path: "/admin-dashboard/security" }, // assume
    ],
  },

  // ✅ Payments Section
  // {
  //   type: "dropdown",
  //   title: "Payments",
  //   key: "payments",
  //   icon: "💳",
  //   items: [
  //     { title: "Saved UPI", icon: "📱", path: "/profile/upi" },
  //     { title: "Saved Cards", icon: "💳", path: "/profile/cards" },
  //     { title: "Gift Cards", icon: "🎁", path: "/profile/gift-cards" },
  //     { title: "Wallet", icon: "👛", path: "/profile/wallet" }, // assume
  //   ],
  // },

  // ✅ Engagement Section
  // {
  //   type: "dropdown",
  //   title: "Activity",
  //   key: "activity",
  //   icon: "⭐",
  //   items: [
  //     { title: "Reviews & Ratings", icon: "⭐", path: "/profile/reviews" }, // assume
  //     { title: "Coupons & Offers", icon: "🎟️", path: "/profile/coupons" }, // assume
  //     { title: "Notifications", icon: "🔔", path: "/profile/notifications" }, // assume
  //   ],
  // },

  // ✅ Support Section
  // {
  //   type: "dropdown",
  //   title: "Support",
  //   key: "support",
  //   icon: "❓",
  //   items: [
  //     { title: "Help & Support", icon: "❓", path: "/profile/help" }, // assume
  //   ],
  // },
];