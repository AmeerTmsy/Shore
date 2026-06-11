import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/public/Header";
import Footer from "../components/public/Footer";
import { useEffect, useState } from "react";

export default function MainLayout() {
  const location = useLocation();
  const [isSellerDashboard, setIsSellerDashboard] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("seller-dashboard")) setIsSellerDashboard(true)
    else setIsSellerDashboard(false);
  }, [location.pathname]);

  return (
    <div className={`flex flex-col min-h-screen ${isSellerDashboard ? 'bg-linear-to-br from-purple-50 via-blue-50 to-blue-200': ''} `}>
      <Header />
      <div className={` flex flex-1 flex-col ${(location.pathname === '/offers' || location.pathname === '/gifts') ? 'absolute w-full' : ''} `}>
        <div className="flex-1 flex flex-col">
          <main className="flex-1 flex flex-col">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}