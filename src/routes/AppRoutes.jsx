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
import SellerProfile from "../components/private/seller/dashBoardComponent/SellerProfile";
import SellerSecurity from "../components/private/seller/dashBoardComponent/SellerSecurity";
import NewProduct from "../components/private/seller/NewProduct";
import SellerProducts from "../components/private/seller/dashBoardComponent/SellerProducts";
import SellerInventory from "../components/private/seller/dashBoardComponent/SellerInventory";
import Support from "../components/private/seller/Support";

import AdminProfile from "../pages/private/admin/Profile";
import AdminSecurity from "../components/private/admin/dashBoardComponent/AdminSecurity";
import AuthorizationProtect from "../components/authGuards/AuthorizationProtect";
import SellerAccount from "../components/private/seller/dashBoardComponent/SellerAccount";
import SellerStore from "../components/private/seller/dashBoardComponent/StoreProfile";
import BrandDetails from "../components/private/seller/dashBoardComponent/BrandDetails";
import SalesOverview from "../components/private/seller/dashBoardComponent/SalesOverview";
import ProductPerformance from "../components/private/seller/dashBoardComponent/ProductPerformance";
import SellerEarnings from "../components/private/seller/dashBoardComponent/SellerEarnings";
import Transactions from "../components/private/seller/dashBoardComponent/Transactions";
import SellerPayouts from "../components/private/seller/dashBoardComponent/SellerPayouts";
import SellerOrders from "../components/private/seller/dashBoardComponent/SellerOrders";
import AdminDashboard from "../components/private/admin/AdminDashboard";
import AllOrders from "../components/private/admin/dashBoardComponent/orders/AllOrders";
import ReturnsManagement from "../components/private/admin/dashBoardComponent/orders/ReturnsManagement";
import RefundRequests from "../components/private/admin/dashBoardComponent/orders/RefundRequests";
import DisputesPage from "../components/private/admin/dashBoardComponent/orders/DisputesPage";
import ShippingIssuesPage from "../components/private/admin/dashBoardComponent/orders/ShippingIssuesPage";
import AllProductsPage from "../components/private/admin/dashBoardComponent/products/AllProductsPage";
import PendingProductsPage from "../components/private/admin/dashBoardComponent/products/PendingProductsPage";
import CategoriesManagementPage from "../components/private/admin/dashBoardComponent/products/CategoriesManagementPage";
import InventoryMonitoringPage from "../components/private/admin/dashBoardComponent/products/InventoryMonitoringPage";
import AllUsers from "../components/private/admin/dashBoardComponent/users/AllUsers";
import ManageSellers from "../components/private/admin/dashBoardComponent/users/ManageSellers";
import VerificationRequests from "../components/private/admin/dashBoardComponent/users/VerificationRequests";
import RolePermissionPage from "../components/private/admin/dashBoardComponent/users/RolePermissionPage";
import SuspendedAccountsPage from "../components/private/admin/dashBoardComponent/users/SuspendedAccountsPage";
import ReportsPage from "../components/private/admin/dashBoardComponent/ReportsPage";
import AnalyticsPage from "../components/private/admin/dashBoardComponent/AnalyticsPage";
// import SellerOrders from "../components/private/seller/dashBoardComponent/SellerOrders";


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
                <Route index element={<SellerProfile />} />
                <Route path="security" element={<SellerSecurity />} />
                <Route path="account" element={<SellerAccount />} />
                <Route path="security" element={<SellerSecurity />} />
                <Route path="store" element={<SellerStore />} />
                <Route path="earnings" element={<SellerEarnings />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="payouts" element={<SellerPayouts />} />
                <Route path="orders" element={<SellerOrders />} />
                <Route path="store/branding" element={<BrandDetails />} />
                <Route path="analytics/sales" element={<SalesOverview />} />
                <Route path="analytics/products" element={<ProductPerformance />} />
                <Route path="products-new" element={<NewProduct />} />
                <Route path="my-products" element={<SellerProducts />} />
                <Route path="my-inventory" element={<SellerInventory />} />
                <Route path="support" element={<Support />} />
              </Route>
            </Route>
            <Route element={<AuthorizationProtect userRole={'admin'} />}>
              <Route path="/admin-dashboard" element={<AdminProfile />}>
                {/* <Route index element={<AdminPorfile />} /> */}
                <Route index element={<AdminDashboard />} />
                <Route path="orders" element={<AllOrders />} />
                <Route path="returns" element={<ReturnsManagement />} />
                <Route path="refunds" element={<RefundRequests />} />
                <Route path="disputes" element={<DisputesPage />} />
                <Route path="shipping-issues" element={<ShippingIssuesPage />} />
                <Route path="products" element={<AllProductsPage />} />
                <Route path="products/pending" element={<PendingProductsPage />} />
                <Route path="categories" element={<CategoriesManagementPage />} />
                <Route path="inventory" element={<InventoryMonitoringPage />} />
                <Route path="users" element={<AllUsers />} />
                <Route path="sellers" element={<ManageSellers />} />
                <Route path="verifications" element={<VerificationRequests />} />
                <Route path="roles" element={<RolePermissionPage />} />
                <Route path="suspended-users" element={<SuspendedAccountsPage />} />
                <Route path="reports" element={<ReportsPage />} />
                <Route path="analytics" element={<AnalyticsPage />} />
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