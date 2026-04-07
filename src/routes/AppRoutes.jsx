import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/public/Home";
import Products from "../pages/public/Products";
import ProductDetails from "../pages/public/ProductDetails";
import LoginSignin from "../pages/LoginSignin";
import Profile from "../pages/private/Profile";
import Cart from "../pages/private/Cart";
import Orders from "../pages/private/Orders";
import OrderDetails from "../pages/private/OrderDetails";
import OrderSuccess from "../pages/private/OrderSuccess";
import NotFound from "../pages/NotFound";
import Terms from "../pages/public/Terms";
import Privacy from "../pages/public/Privacy";
import Accessibility from "../pages/public/Accessibility";
import About from "../pages/public/About";
import Careers from "../pages/public/Careers";
import Blog from "../pages/public/Blog";

// Profile Components
import MyPorfile from "../components/profileComponents/MyPorfile";
import Address from "../components/profileComponents/Address";
import GiftCards from "../components/profileComponents/GiftCards";
import MyOrders from "../components/profileComponents/MyOrders";
import MyStuff from "../components/profileComponents/MyStuff";
import Pancard from "../components/profileComponents/Pancard";
import SavedCards from "../components/profileComponents/SavedCards";
import UpiIDs from "../components/profileComponents/UpiIDs";
import ReturnRefund from "../components/profileComponents/ReturnRefund";
import Security from "../components/profileComponents/Security";
import Wallet from "../components/profileComponents/Wallet";
import HelpSupport from "../components/profileComponents/HelpSupport";
import ReviewRating from "../components/profileComponents/ReviewRating";
import CouponOffers from "../components/profileComponents/CouponOffers";
import Notification from "../components/profileComponents/Notification";
import Wishlist from "../components/profileComponents/Wishlist";

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

          <Route path="/onboarding" element={<LoginSignin />} />

          {/* Protected */}
          <Route element={<ProtectedRoute />}>
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
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/orders" element={<Orders />} /> */}
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}