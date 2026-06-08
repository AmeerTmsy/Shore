import { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSideBar } from "../../../context/ProfileSideBarContext";
import { jwtDecode } from "jwt-decode";

import { LayoutDashboard, BarChart3, FileText, Users, Store, ShieldCheck, UserCog, UserX, ShoppingBag, Clock3, Tags, PackageSearch, ClipboardList, RotateCcw, AlertTriangle, Truck, Wallet, BadgeDollarSign, TrendingUp, Receipt, TicketPercent, Megaphone, Star, Bell, ShieldAlert, Flag, ScanSearch, Siren, Headset, MessagesSquare, BookOpen, Settings, CreditCard, Activity, LockKeyhole, ChevronDown } from "lucide-react";

export default function Profile() {
  const { showSideBar, setShowSideBar, sideBarAble } = useSideBar();

  const location = useLocation();
  const navigate = useNavigate();

  const [openSection, setOpenSection] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decode = jwtDecode(token);
      setUser(decode);
    }
  }, []);

  const currentPath = location.pathname;

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  const isActive = (path) => currentPath === path;

  const isDropdownActive = (items) => {
    return items?.some((sub) => sub.path === currentPath);
  };

  return (
    <div className="w-full max-w-screen-4xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 p-4">
        {/* ================================================= */}
        {/* SIDEBAR */}
        {/* ================================================= */}

        <div className="w-full lg:w-[290px] shrink-0">
          <div
            className={`sticky top-18 space-y-4 ${!showSideBar && sideBarAble ? "hidden" : "block"}`}
          >
            {/* PROFILE CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              {/* <p className="text-xs text-gray-500">Welcome back,</p> */}
              <h2 className="text-lg font-semibold text-gray-900 mt-1">{user?.name || "Admin"}</h2>
              <p className="text-sm text-orange-500 mt-1 font-medium">Platform Administrator</p>
            </div>
            {/* SIDEBAR */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="py-3">
                {sidebarData.map((item, index) => {
                  // =================================================
                  // LABEL
                  // =================================================

                  if (item.type === "label") {
                    return (
                      <div
                        key={index}
                        className="px-5 pt-3 pb-2 text-[11px] font-semibold tracking-wider text-gray-400"
                      >{item.label}</div>
                    );
                  }

                  // =================================================
                  // SINGLE ITEM
                  // =================================================

                  if (item.type === "single") {
                    return (
                      <Link
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(item.path);
                          setShowSideBar(false);
                        }}
                        className={`mx-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200 ${isActive(item.path) ? "bg-orange-50 text-orange-600 font-semibold" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
                      >
                        <span>{item.icon}</span><span>{item.title}</span>
                      </Link>
                    );
                  }

                  // =================================================
                  // DROPDOWN
                  // =================================================

                  const isOpen =
                    openSection === item.key ||
                    isDropdownActive(item.items);

                  return (
                    <div key={item.key}>
                      {/* HEADER */}
                      <button
                        onClick={() => toggleSection(item.key)}
                        className={`w-full mx-2 flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all duration-200 ${isDropdownActive(item.items) ? "bg-orange-50 text-orange-600 font-semibold" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}<span>{item.title}</span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`transition duration-300 ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* DROPDOWN ITEMS */}

                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-1 space-y-1 pb-2">
                            {item.items.map((subItem, i) => (
                              <Link
                                key={i}
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(subItem.path);
                                  setShowSideBar(false);
                                }}
                                className={`mx-2 flex items-center gap-3 rounded-xl py-2.5 pl-12 pr-4 text-sm transition-all duration-200 ${isActive(subItem.path) ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`}
                              >
                                <span>{subItem.icon}</span>

                                <span>{subItem.title}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm  overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

const sidebarData = [
  // =========================================================
  // 📊 OVERVIEW
  // =========================================================

  {
    type: "label",
    label: "OVERVIEW",
  },

  {
    type: "single",
    title: "Dashboard",
    icon: <LayoutDashboard size={18} />,
    path: "/admin-dashboard",
  },

  {
    type: "single",
    title: "Analytics",
    icon: <BarChart3 size={18} />,
    path: "/admin-dashboard/analytics",
  },

  {
    type: "single",
    title: "Reports",
    icon: <FileText size={18} />,
    path: "/admin-dashboard/reports",
  },

  // =========================================================
  // 👥 USER MANAGEMENT
  // =========================================================

  {
    type: "label",
    label: "USER MANAGEMENT",
  },

  {
    type: "dropdown",
    title: "Users",
    key: "users",
    icon: <Users size={18} />,
    items: [
      {
        title: "All Users",
        icon: <Users size={16} />,
        path: "/admin-dashboard/users",
      },
      {
        title: "Sellers",
        icon: <Store size={16} />,
        path: "/admin-dashboard/sellers",
      },
      {
        title: "Verification Requests",
        icon: <ShieldCheck size={16} />,
        path: "/admin-dashboard/verifications",
      },
      {
        title: "Roles & Permissions",
        icon: <UserCog size={16} />,
        path: "/admin-dashboard/roles",
      },
      {
        title: "Suspended Accounts",
        icon: <UserX size={16} />,
        path: "/admin-dashboard/suspended-users",
      },
    ],
  },

  // =========================================================
  // 👟 PRODUCT MANAGEMENT
  // =========================================================

  {
    type: "label",
    label: "PRODUCT MANAGEMENT",
  },

  {
    type: "dropdown",
    title: "Products",
    key: "products",
    icon: <ShoppingBag size={18} />,
    items: [
      {
        title: "All Products",
        icon: <ShoppingBag size={16} />,
        path: "/admin-dashboard/products",
      },
      {
        title: "Pending Products",
        icon: <Clock3 size={16} />,
        path: "/admin-dashboard/products/pending",
      },
      {
        title: "Categories",
        icon: <Tags size={16} />,
        path: "/admin-dashboard/categories",
      },
      {
        title: "Inventory Monitoring",
        icon: <PackageSearch size={16} />,
        path: "/admin-dashboard/inventory",
      },
    ],
  },

  // =========================================================
  // 🧾 ORDERS & COMMERCE
  // =========================================================

  {
    type: "label",
    label: "ORDERS & COMMERCE",
  },

  {
    type: "dropdown",
    title: "Orders",
    key: "orders",
    icon: <ClipboardList size={18} />,
    items: [
      {
        title: "All Orders",
        icon: <ClipboardList size={16} />,
        path: "/admin-dashboard/orders",
      },
      {
        title: "Returns",
        icon: <RotateCcw size={16} />,
        path: "/admin-dashboard/returns",
      },
      {
        title: "Refund Requests",
        icon: <Wallet size={16} />,
        path: "/admin-dashboard/refunds",
      },
      {
        title: "Disputes",
        icon: <AlertTriangle size={16} />,
        path: "/admin-dashboard/disputes",
      },
      {
        title: "Shipping Issues",
        icon: <Truck size={16} />,
        path: "/admin-dashboard/shipping-issues",
      },
    ],
  },
];