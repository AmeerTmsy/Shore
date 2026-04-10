import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className={` ${(pathname === '/offers' || pathname === '/gifts') ? 'absolute w-full' : ''} `}>
        <main className="flex-1 z- flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}