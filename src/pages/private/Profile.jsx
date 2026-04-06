import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion"

export default function Profile() {
  const location = useLocation();
  const [openSection, setOpenSection] = useState(null);
  const [showSideBar, setShowSideBar] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const currentPath = location.pathname;

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log('windowWidth: ', windowWidth)

  const isActive = (path) => currentPath === path;

  const isDropdownActive = (items) =>
    items.some((sub) => sub.path === currentPath);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 p-4 relative ">

        {/* LEFT SIDEBAR */}
        <div className={`space-y-2 top-20 w-2/3 md:w-1/3 absolute md:static left ${(!showSideBar && windowWidth < 768) ? 'hidden' : 'block'}`}>
          {/* Profile Card */}
          <div className="bg-gray-50  rounded-sm p-4 border border-gray-300">
            <p className="text-xs font-light">Hello,</p>
            <h4 className="text-lg font-normal">Ameer</h4>
          </div>
          {/* Sidebar */}
          <div className="bg-gray-50 rounded-sm border border-gray-300">
            <div className="text-sm font-medium">
              {sidebarData.map((item, index) => {
                // ✅ SINGLE ITEM
                if (item.type === "single") {
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      className={`px-6 py-3 flex items-center gap-2 transition 
                        ${isActive(item.path)
                          ? "bg-gray-200 font-semibold border-l-4 border-black pl-5"
                          : "hover:bg-gray-200"
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
                          ? "bg-gray-200 font-semibold"
                          : "hover:bg-gray-200"
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
                            to={subItem.path}
                            className={`px-6 py-3 flex items-center gap-2 transition
                              ${isActive(subItem.path)
                                ? "bg-gray-200 font-semibold border-l-4 border-black pl-5"
                                : "hover:bg-gray-200 font-light"
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

        {/* RIGHT CONTENT */}
        <div className="bg-gray-50 rounded-sm md:flex-1 border border-gray-300">
          <button>___</button>
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
  //   title: "Returns & Refunds",
  //   icon: "🔄",
  //   path: "/profile/return-refund", // assume
  // },
  {
    type: "single",
    title: "My Stuff",
    icon: "❤️",
    path: "/profile/my-stuff",
  },
  {
    type: "single",
    title: "My Orders",
    icon: "📦",
    path: "/profile/orders",
  },
  // ✅ Account Section
  {
    type: "dropdown",
    title: "Account",
    key: "account",
    icon: "👤",
    items: [
      { title: "Profile", icon: "👤", path: "/profile" },
      { title: "Addresses", icon: "📍", path: "/profile/addresses" },
      { title: "Pancard", icon: "🪪", path: "/profile/pancard" },
      { title: "Security", icon: "🔐", path: "/profile/security" }, // assume
    ],
  },

  // ✅ Payments Section
  {
    type: "dropdown",
    title: "Payments",
    key: "payments",
    icon: "💳",
    items: [
      { title: "Saved UPI", icon: "📱", path: "/profile/upi" },
      { title: "Saved Cards", icon: "💳", path: "/profile/cards" },
      { title: "Gift Cards", icon: "🎁", path: "/profile/gift-cards" },
      { title: "Wallet", icon: "👛", path: "/profile/wallet" }, // assume
    ],
  },

  // ✅ Engagement Section
  {
    type: "dropdown",
    title: "Activity",
    key: "activity",
    icon: "⭐",
    items: [
      { title: "Reviews & Ratings", icon: "⭐", path: "/profile/reviews" }, // assume
      { title: "Coupons & Offers", icon: "🎟️", path: "/profile/coupons" }, // assume
      { title: "Notifications", icon: "🔔", path: "/profile/notifications" }, // assume
    ],
  },

  // ✅ Support Section
  {
    type: "dropdown",
    title: "Support",
    key: "support",
    icon: "❓",
    items: [
      { title: "Help & Support", icon: "❓", path: "/profile/help" }, // assume
    ],
  },
];