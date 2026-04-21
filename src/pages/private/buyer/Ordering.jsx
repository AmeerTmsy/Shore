import { useState } from "react";
import AddressDrawer from "../../../components/private/buyer/AddressDrawer";
import CheckoutSummary from "../../../components/private/buyer/CheckoutSummary";
import PaymentSection from "../../../components/private/buyer/PaymentSection";
import { AnimatePresence, motion } from "framer-motion";

export default function Ordering() {

    const [selectedAddress, setSeletedAddress] = useState(addresses[0])
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [paymentStage, setPaymentStage] = useState(false)

    return (
        <>
            <div className="w-full max-w-6xl mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">

                    <div className="lg:col-span-2 space-y-4">
                        <AnimatePresence mode="wait">

                            {paymentStage ?
                                <motion.div
                                    key="payment"
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="h-full"
                                >
                                    <PaymentSection setPaymentStage={setPaymentStage} />
                                </motion.div>
                                :
                                <motion.div
                                    key="checkout"
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                >
                                    <CheckoutSummary
                                        selectedAddress={selectedAddress}
                                        item={item}
                                        onChangeAddress={() => setIsDrawerOpen(true)}
                                    />
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>

                    <div className="space-y-4 h-fit w-full sticky top-20">
                        <div className=" p-4 bg-blue-50 shadow rounded-lg">
                            <div className="space-y-3 text-xs">
                                <div className="flex justify-between  border-b border-gray-300 pb-4 border-dashed">
                                    <span>MRP</span>
                                    <span>₹{priceDetails.mrp}</span>
                                </div>
                                <div className="flex justify-between  border-b border-gray-300 pb-4 border-dashed">
                                    <span>Discount</span>
                                    <span className="text-green-600">-₹{priceDetails.discount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery</span>
                                    <span>₹{priceDetails.delivery}</span>
                                </div>
                                <div className="flex justify-between font-semibold text-md border-t border-gray-300 pt-4">
                                    <span>Total</span>
                                    <span>₹{priceDetails.total}</span>
                                </div>
                            </div>
                        </div>
                        {!paymentStage && <div className=" p-1 bg-gray-50 shadow-sm rounded-xs">
                            <div className="flex justify-between items-center">
                                <div className="">
                                    <p>₹1307.00</p>
                                </div>
                                {/* <button onClick={() => setPaymentStage(true)} className="cursor-pointer bg-yellow-400 py-1.5 px-5 font-medium rounded">Continue</button> */}
                                <button onClick={() => setPaymentStage(true)} className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md bg-yellow-400 px-6 font-medium text-black"><span class="absolute h-0 w-0 rounded-full bg-yellow-300 transition-all duration-100 group-active:h-56 group-active:w-32"></span><span class="relative">Continue</span></button>
                            </div>
                        </div>}
                        <div className="flex justify-center shadow rounded-lg">
                            <p className="text-xs w-full text-center bg-[#13ff2b2d] text-green-700 px-5 py-2 rounded-lg flex items-center justify-center"> <svg className="pe-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M10.03 8.97a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 1 0 1.06-1.06zm3.59 4.65a.75.75 0 0 0 0 1.06l.353.354a.75.75 0 0 0 1.06-1.06l-.353-.354a.75.75 0 0 0-1.06 0m1.41-3.59a.75.75 0 1 0-1.06-1.06l-5 5a.75.75 0 1 0 1.06 1.06z" /></svg>
                                You will save ₹{priceDetails.discount} on this order</p>
                        </div>
                    </div>

                </div>
            </div >
            <AddressDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                addresses={addresses}
                onSelect={(addr) => {
                    setSeletedAddress(addr);
                    setIsDrawerOpen(false);
                }}
            />
        </>

    );
}

const item = {
    id: 1,
    title: "AeroFlex Pro Running Shoes",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500",
    seller: "Shore Official",
    rating: 4.6,
    reviews: 180,
    price: 202,
    originalPrice: 330,
    discount: 38,
    quantity: 1,
    delivery: "Delivery by Apr 6",
}

const priceDetails = {
    mrp: 202,
    discount: 22,
    delivery: 50,
    total: 230,
}

const addresses = [
    {
        id: 1,
        type: "Home",
        name: "Ameer Suhail",
        phone: "+91 9876543210",
        pincode: "673001",
        city: "Kozhikode",
        state: "Kerala",
        addressLine: "Near Beach Road",
        landmark: "Opp. City Mall",
        default: true,
        selected: true,
    },
    {
        id: 2,
        type: "Work",
        name: "Ameer Suhail",
        phone: "+91 9876543210",
        pincode: "673001",
        city: "Perinthalmanna",
        state: "Kerala",
        addressLine: "Euphoricoders, Perinthelmanna",
        landmark: "Opp. City Mall",
        default: false,
        selected: false,
    },
];