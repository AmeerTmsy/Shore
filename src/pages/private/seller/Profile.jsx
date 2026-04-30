import { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import { useSideBar } from "../../../context/ProfileSideBarContext";
import { jwtDecode } from "jwt-decode";

export default function SellerDashboard() {
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
    <div className="w-full max-w-350 mx-auto">
      <div className="flex flex-col md:flex-row gap-6 p-4 relative ">
        {/* LEFT SIDEBAR */}
        <div className="w-full md:w-[30%] max-w-full md:max-w-75">
          <div className={`space-y-2 w-full sticky left-4 right-4 top-18 lefttranslate-x-28  ${(!showSideBar && sideBarAble) ? 'hidden' : 'block'}`}>
            {/* Profile Card */}
            <div className="shadow rounded-sm p-4">
              <p className="text-xs font-light">Hello,</p>
              <h4 className="text-md font-normal">{user?.name || 'Seller'}s Dashboard</h4>
            </div>
            {/* Sidebar */}
            <div className=" rounded-sm  shadow">
              <div className="text-sm font-medium">
                {sellerSidebarData.map((item, index) => {
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
                            ? "bg-[#f4d6ff9a] font-semibold border-l-4 border-violet-300 pl-5"
                            : "hover:bg-[#f7e3ff64]"
                          }
                      `}
                      >
                        <span>{item.icon}</span>
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
                            ? "bg-[#f4d6ff9a]"
                            : "hover:bg-[#f7e3ff64]"
                          }
                      `}
                      >
                        <div className="flex items-center gap-2">
                          <span>{item.icon}</span>
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
                                  ? "bg-[#f4d6ff9a] font-semibold border-l-4 border-violet-300 pl-5"
                                  : "hover:bg-[#f7e3ff64] font-light"
                                }
                            `}
                            >
                              <span>{subItem.icon}</span>
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
        <div className="shadow rounded-sm md:flex-1 w-full md:w-[70%]" >
          <Outlet />
        </div>
      </div>
    </div>
  );
}


const sellerSidebarData = [
  // 📊 Dashboard Overview
  {
    type: "single",
    title: "Dashboard",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"/></svg>,
    path: "/seller-dashboard",
  },

  // 📦 Product Management
  {
    type: "dropdown",
    title: "Products",
    key: "products",
    icon: "👟",
    items: [
      { title: "All Products", icon: "📦", path: "/seller-dashboard/my-products" },
      { title: "Add Product", icon: "➕", path: "/seller-dashboard/products-new" },
      { title: "Inventory", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><g fill="none" stroke-width="3"><path fill="#8fbffa" d="M33.604 8.294c-3.941-3.864-6.67-4.952-7.52-5.218A162 162 0 0 0 21 3c-6.264 0-10.566.32-13.248.627c-2.201.252-3.85 1.903-4.092 4.105C3.34 10.622 3 15.473 3 23s.341 12.378.66 15.268c.242 2.202 1.891 3.853 4.092 4.105c2.164.247 5.383.504 9.837.594c-.15-2.597-.087-4.453.015-5.668c.169-2.02 1.134-3.66 2.282-4.807l12.34-12.34c1.543-1.543 4.028-2.875 6.704-2.792q-.025-.967-.058-1.853c-.351-.98-1.549-3.567-5.268-7.213"/><path fill="#fff" d="M26.086 3.077c.852.268 3.58 1.358 7.516 5.217c3.72 3.646 4.917 6.234 5.268 7.214l.016.45c-2.087.311-5.841.072-8.69-.191a4.664 4.664 0 0 1-4.229-4.211c-.268-2.802-.506-6.466-.18-8.488zm17.579 28.515c1.454-1.453 2.01-3.577.794-5.235a18 18 0 0 0-1.77-2.046c-.74-.74-1.43-1.318-2.047-1.77c-1.657-1.216-3.781-.66-5.235.793l-12.34 12.34c-.543.544-.915 1.233-.979 2c-.087 1.041-.151 2.81.017 5.428a1.92 1.92 0 0 0 1.793 1.793c2.617.168 4.387.104 5.428.016c.766-.064 1.456-.435 2-.98z"/><path fill="#8fbffa" d="M41 34.258c-.003-.014-.483-2.117-3.312-4.946c-2.838-2.838-4.946-3.311-4.946-3.311l2.665-2.666c1.454-1.453 3.578-2.01 5.236-.793a18 18 0 0 1 2.045 1.77c.74.74 1.319 1.43 1.77 2.046c1.217 1.658.66 3.782-.793 5.235z"/><path stroke="#2859c5" stroke-linecap="round" stroke-linejoin="round" d="M38.872 15.507c-.351-.98-1.549-3.567-5.268-7.213c-3.941-3.864-6.67-4.952-7.52-5.218A162 162 0 0 0 21 3c-6.264 0-10.566.32-13.248.627c-2.201.252-3.85 1.903-4.092 4.105C3.34 10.622 3 15.473 3 23s.341 12.378.66 15.268c.242 2.202 1.891 3.853 4.092 4.105c1.898.217 4.607.44 8.248.553"/><path stroke="#2859c5" stroke-linecap="round" stroke-linejoin="round" d="M38.886 15.958c-2.087.311-5.841.072-8.69-.191a4.664 4.664 0 0 1-4.229-4.211c-.268-2.802-.506-6.466-.18-8.488M41 34.258s-.473-2.108-3.312-4.946C34.85 26.473 32.742 26 32.742 26M10 13l4 4l5-7m-9 14l4 4l5-7"/><path stroke="#2859c5" stroke-linecap="round" stroke-linejoin="round" d="M43.665 31.592c1.454-1.453 2.01-3.577.794-5.235a18 18 0 0 0-1.77-2.046c-.74-.74-1.43-1.318-2.047-1.77c-1.657-1.216-3.781-.66-5.235.793l-12.34 12.34c-.543.544-.915 1.233-.979 2c-.087 1.041-.151 2.81.017 5.428a1.92 1.92 0 0 0 1.793 1.793c2.617.168 4.387.104 5.428.016c.766-.064 1.456-.435 2-.98z"/></g></svg>, path: "/seller-dashboard/my-inventory" },
    ],
  },

  // 🧾 Orders
  {
    type: "dropdown",
    title: "Orders",
    key: "orders",
    icon: "🧾",
    items: [
      { title: "All Orders", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none"><path fill="#808080" d="M15.825 22.522a1.435 1.435 0 1 0 0-2.87a1.435 1.435 0 0 0 0 2.87m-10.521 0a1.435 1.435 0 1 0 0-2.87a1.435 1.435 0 0 0 0 2.87"/><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M23 1.478h-.584a.957.957 0 0 0-.95.845l-1.718 14.572a.956.956 0 0 1-.95.844H1" stroke-width="1.5"/><path fill="#ffef5e" d="M10.565 12H2.913a.957.957 0 0 0-.957.957v1.913a.956.956 0 0 0 .957.956h7.652z"/><path fill="#fff9bf" d="M2.913 12a.957.957 0 0 0-.957.957v1.913a.957.957 0 0 1 .957-.957h7.652V12z"/><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M10.565 12H2.913a.957.957 0 0 0-.957.957v1.913a.956.956 0 0 0 .957.956h7.652z" stroke-width="1.5"/><path fill="#ff808c" d="M8.652 10.087a.957.957 0 0 0-.957-.957H3.87a.957.957 0 0 0-.956.957V12h5.739z"/><path fill="#b2ffc0" d="M17.26 6.26a.956.956 0 0 0-.956-.956h-4.783a.957.957 0 0 0-.956.957v9.565h5.74a.956.956 0 0 0 .956-.956z"/><path fill="#c9f7ca" d="M16.304 5.304h-4.783a.957.957 0 0 0-.956.957v2.87a.956.956 0 0 1 .956-.957h4.783a.956.956 0 0 1 .957.956V6.26a.956.956 0 0 0-.957-.956"/><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M17.26 6.26a.956.956 0 0 0-.956-.956h-4.783a.957.957 0 0 0-.956.957v9.565h5.74a.956.956 0 0 0 .956-.956zm-1.435 16.262a1.435 1.435 0 1 0 0-2.87a1.435 1.435 0 0 0 0 2.87m-10.521 0a1.435 1.435 0 1 0 0-2.87a1.435 1.435 0 0 0 0 2.87m3.348-12.435a.957.957 0 0 0-.957-.957H3.87a.957.957 0 0 0-.956.957V12h5.739z" stroke-width="1.5"/></g></svg>, path: "/seller-dashboard/orders" },
      { title: "Pending Orders", icon: "⏳", path: "/seller-dashboard/orders?status=pending" },
      { title: "Completed Orders", icon: "✅", path: "/seller-dashboard/orders?status=delivered" },
      { title: "Returns", icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48"><g fill="none" stroke-width="3"><path fill="#8ec1ff" d="M44.465 39.743c-.208 2.555-2.163 4.51-4.718 4.718c-3.229.262-8.38.539-15.743.539c-7.364 0-12.515-.277-15.743-.539c-2.555-.208-4.51-2.163-4.718-4.718c-.262-3.228-.54-8.379-.54-15.743s.278-12.515.54-15.743C3.75 5.702 5.706 3.747 8.26 3.54C11.49 3.277 16.64 3 24.004 3s12.515.277 15.743.539c2.555.208 4.51 2.163 4.718 4.718c.262 3.228.539 8.379.539 15.743s-.277 12.515-.54 15.743"/><path fill="#fff" d="M23.2 14.383c.057 1.413 1.282 2.286 2.696 2.335c1.537.053 2.6.048 4.142.04l1.27-.006a1 1 0 0 1 1 .999v9.134a1 1 0 0 1-1.038.999c-4.059-.155-8.851-.332-12.98-.406a62 62 0 0 0-.107-2.282c-.084-1.248-1.272-1.793-2.271-1.04a55 55 0 0 0-2.915 2.38c-1.712 1.486-2.693 2.602-3.246 3.347c-.51.687-.51 1.56 0 2.248c.553.745 1.533 1.86 3.246 3.347a55 55 0 0 0 2.915 2.379c.999.753 2.187.208 2.271-1.04c.043-.635.083-1.425.11-2.401c3.433-.145 8.833-.356 13.705-.472c3.31-.08 5.995-2.769 5.998-6.08l.01-10.81a6.05 6.05 0 0 0-6-6.048a131 131 0 0 0-6.11.075c-1.413.051-2.64.921-2.696 2.335a12 12 0 0 0 0 .967"/><path stroke="#001239" stroke-linecap="round" stroke-linejoin="round" d="M44.465 39.743c-.208 2.555-2.163 4.51-4.718 4.718c-3.229.262-8.38.539-15.743.539c-7.364 0-12.515-.277-15.743-.539c-2.555-.208-4.51-2.163-4.718-4.718c-.262-3.228-.54-8.379-.54-15.743s.278-12.515.54-15.743C3.75 5.702 5.706 3.747 8.26 3.54C11.49 3.277 16.64 3 24.004 3s12.515.277 15.743.539c2.555.208 4.51 2.163 4.718 4.718c.262 3.228.539 8.379.539 15.743s-.277 12.515-.54 15.743"/><path stroke="#001239" stroke-linecap="round" stroke-linejoin="round" d="M23.2 14.383c.057 1.413 1.282 2.286 2.696 2.335c1.537.053 2.6.048 4.142.04l1.27-.006a1 1 0 0 1 1 .999v9.134a1 1 0 0 1-1.038.999c-4.059-.155-8.851-.332-12.98-.406a62 62 0 0 0-.107-2.282c-.084-1.248-1.272-1.793-2.271-1.04a55 55 0 0 0-2.915 2.38c-1.712 1.486-2.693 2.602-3.246 3.347c-.51.687-.51 1.56 0 2.248c.553.745 1.533 1.86 3.246 3.347a55 55 0 0 0 2.915 2.379c.999.753 2.187.208 2.271-1.04c.043-.635.083-1.425.11-2.401c3.433-.145 8.833-.356 13.705-.472c3.31-.08 5.995-2.769 5.998-6.08l.01-10.81a6.05 6.05 0 0 0-6-6.048a131 131 0 0 0-6.11.075c-1.413.051-2.64.921-2.696 2.335a12 12 0 0 0 0 .967"/></g></svg>, path: "/seller-dashboard/returns" },
    ],
  },

  // 💰 Finance
  {
    type: "dropdown",
    title: "Finance",
    key: "finance",
    icon: "💰",
    items: [
      { title: "Earnings", icon: "💵", path: "/seller-dashboard/earnings" },
      { title: "Transactions", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none"><path d="M19.781 14.555L13.5 16h-.375a1.875 1.875 0 0 0 0-3.75H8.438a2.25 2.25 0 0 0-1.594.656L4.5 15.25v5.25h6.75l6-1.5l3.64-1.552a1.555 1.555 0 0 0-1.109-2.893M4.5 15.25v5.25H1v-5.25z"/><path d="M18.5 2a3.5 3.5 0 1 1-2 6.373l.01-.008a3.5 3.5 0 1 1-.01-5.738a3.5 3.5 0 0 1 2-.627" clip-rule="evenodd"/><path stroke="#c4ae02" stroke-linecap="square" stroke-width="1.5" d="M4.5 20.5h6.75l6-1.5l3.64-1.552a1.555 1.555 0 0 0-1.109-2.893L13.5 16h-.375M4.5 20.5v-5.25m0 5.25H1v-5.25h3.5m0 0l2.344-2.344a2.25 2.25 0 0 1 1.593-.656h4.688a1.875 1.875 0 0 1 0 3.75H11m6-13.663a3.5 3.5 0 1 1 0 6.326M14.5 9a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7Z"/></g></svg>, path: "/seller-dashboard/transactions" },
      { title: "Payouts", icon: "🏦", path: "/seller-dashboard/payouts" },
    ],
  },

  // 📈 Analytics
  {
    type: "dropdown",
    title: "Analytics",
    key: "analytics",
    icon: "📈",
    items: [
      { title: "Sales Overview", icon: "📊", path: "/seller-dashboard/analytics/sales" },
      { title: "Product Performance", icon: "📦", path: "/seller-dashboard/analytics/products" },
    ],
  },

  // 🏪 Store Settings
  {
    type: "dropdown",
    title: "Store",
    key: "store",
    icon: "🏪",
    items: [
      { title: "Store Profile", icon: "🏪", path: "/seller-dashboard/store" },
      { title: "Branding", icon: "🎨", path: "/seller-dashboard/store/branding" },
    ],
  },

  // 👤 Account
  {
    type: "dropdown",
    title: "Account",
    key: "account",
    icon: "👤",
    items: [
      { title: "Profile", icon: "👤", path: "/seller-dashboard/account" },
      { title: "Security", icon: "🔐", path: "/seller-dashboard/security" },
    ],
  },

  // ❓ Support
  {
    type: "single",
    title: "Support",
    icon: "❓",
    path: "/seller-dashboard/support",
  },
];