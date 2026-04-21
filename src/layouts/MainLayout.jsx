import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/public/Header";
import Footer from "../components/public/Footer";

export default function MainLayout() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className={` flex flex-col ${(location.pathname === '/offers' || location.pathname === '/gifts') ? 'absolute w-full' : ''} `}>
        <div className="flex-1">
          <main className="flex-1 z- flex flex-col">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}