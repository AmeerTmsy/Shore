import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedBuyerRoute from "../components/authGuards/ProtectedRoute";

import Home from "../pages/public/Home";
import Products from "../pages/public/Products";
import ProductDetails from "../pages/public/ProductDetails";
import LoginSignin from "../pages/public/LoginSignin";
import Profile from "../pages/private/buyer/Profile";
import Cart from "../pages/private/buyer/Cart";
import Orders from "../pages/private/buyer/Orders";
import OrderDetails from "../pages/private/buyer/OrderDetails";
import NotFound from "../pages/public/NotFound";
import Terms from "../pages/public/Terms";
import Privacy from "../pages/public/Privacy";
import Accessibility from "../pages/public/Accessibility";
import About from "../pages/public/About";
import Careers from "../pages/public/Careers";
import Blog from "../pages/public/Blog";

// Profile Components
import MyPorfile from "../components/private/buyer/profileComponents/MyPorfile";
// import MyPorfile from "../components/private/buyer/profileComponents/MyPorfile";
import Address from "../components/private/buyer/profileComponents/Address";
import GiftCards from "../components/private/buyer/profileComponents/GiftCards";
import MyOrders from "../components/private/buyer/profileComponents/MyOrders";
import MyStuff from "../components/private/buyer/profileComponents/MyStuff";
import Pancard from "../components/private/buyer/profileComponents/Pancard";
import SavedCards from "../components/private/buyer/profileComponents/SavedCards";
import UpiIDs from "../components/private/buyer/profileComponents/UpiIDs";
import ReturnRefund from "../components/private/buyer/profileComponents/ReturnRefund";
import Security from "../components/private/buyer/profileComponents/Security";
import Wallet from "../components/private/buyer/profileComponents/Wallet";
import HelpSupport from "../components/private/buyer/profileComponents/HelpSupport";
import ReviewRating from "../components/private/buyer/profileComponents/ReviewRating";
import CouponOffers from "../components/private/buyer/profileComponents/CouponOffers";
import Notification from "../components/private/buyer/profileComponents/Notification";
import Wishlist from "../components/private/buyer/profileComponents/Wishlist";
import Offers from "../pages/public/Offers";
import Gifts from "../pages/public/Gifts";
import Ordering from "../pages/private/buyer/Ordering";
import PaymentSuccess from "../pages/private/buyer/PaymentSuccess";
import FAQs from "../pages/public/FAQs";
import ShippingReturns from "../pages/public/ShippingReturns";
import Contact from "../pages/public/Contact";
import ProtectedRoute from "../components/authGuards/ProtectedRoute";
import ProtectedLogin from "../components/authGuards/ProtectedLogin";

import SellerDashboard from "../pages/private/seller/Profile";
import SellerPorfile from "../components/private/seller/dashBoardComponent/SellerPorfile";
import SellerSecurity from "../components/private/seller/dashBoardComponent/SellerSecurity";

import AdminDashboard from "../pages/private/admin/Profile";
import AdminPorfile from "../components/private/admin/dashBoardComponent/AdminPorfile";
import AdminSecurity from "../components/private/admin/dashBoardComponent/AdminSecurity";
import AuthorizationProtect from "../components/authGuards/AuthorizationProtect";

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/ordering" element={<Ordering />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/onboarding" element={<ProtectedLogin><LoginSignin /></ProtectedLogin>} />

          {/* Protected */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AuthorizationProtect userRole={'buyer'} />}>
              <Route path="/profile" element={<Profile />}>
                <Route index element={<MyPorfile />} />
                <Route path="addresses" element={<Address />} />
                <Route path="gift-cards" element={<GiftCards />} />
                <Route path="orders" element={<MyOrders />} />
                <Route path="my-stuff" element={<MyStuff />} />
                <Route path="pancard" element={<Pancard />} />
                <Route path="cards" element={<SavedCards />} />
                <Route path="upi" element={<UpiIDs />} />
                <Route path="return-refund" element={<ReturnRefund />} />
                <Route path="security" element={<Security />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="help" element={<HelpSupport />} />
                <Route path="reviews" element={<ReviewRating />} />
                <Route path="coupons" element={<CouponOffers />} />
                <Route path="notifications" element={<Notification />} />
                <Route path="wishlist" element={<Wishlist />} />
              </Route>
            </Route>
            <Route element={<AuthorizationProtect userRole={'seller'} />}>
              <Route path="/seller-dashboard" element={<SellerDashboard />}>
                <Route index element={<SellerPorfile />} />
                <Route path="security" element={<SellerSecurity />} />
              </Route>
            </Route>
            <Route element={<AuthorizationProtect userRole={'admin'} />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />}>
                <Route index element={<AdminPorfile />} />
                <Route path="security" element={<AdminSecurity />} />
              </Route>
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}