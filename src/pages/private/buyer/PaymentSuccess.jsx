import { Link } from "react-router-dom";
import { useEffect } from "react";
import confetti from "canvas-confetti";
const orderImage = "/TakeAway-rafiki.svg";

export default function PaymentSuccess() {

    useEffect(() => {
        const duration = 0.1 * 1000;
        const end = Date.now() + duration;

        const colors = ["#facc15", "#22c55e", "#3b82f6", "#ef4444"];

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 1 },
                colors,
                startVelocity: 90,
                scalar: 1.2,
            });

            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 1 },
                colors,
                startVelocity: 90,
                scalar: 1.2,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }, []);


    return (
        <div className="h-full flex items-center justify-center bg-green-50 p-4">
            <div className="rounded-2xl max-w-xl w-full p-6 text-center space-y-6">

                <div className="flex justify-center">
                    <div className="bg-green-200 rounded-full p-4">
                        <img
                            src={orderImage}
                            alt="Order success illustration"
                            className="h-40 w-40 object-contain"
                        />
                    </div>
                </div>
                <h1 className="text-2xl font-bold text-green-600">
                    Payment Successful
                </h1>
                <p className="text-gray-500 text-sm">
                    Your order has been placed successfully.
                    You will receive a confirmation shortly.
                </p>
                <div className="shadow bg-white rounded-lg p-4 text-left space-y-2">
                    <p className="text-sm">
                        <span className="font-medium">Order ID:</span> #ORD123456
                    </p>
                    <p className="text-sm">
                        <span className="font-medium">Amount Paid:</span> ₹377
                    </p>
                    <p className="text-sm">
                        <span className="font-medium">Delivery:</span> Apr 6 - Apr 8
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        to="/profile/orders"
                        className="group w-full relative inline-flex py-2 items-center justify-center overflow-hidden rounded-md bg-green-50 border border-green-600 px-6 font-medium text-green-700 hover:text-white"><span class="absolute h-0 w-0 bg-green-500 transition-all duration-100 group-hover:h-full group-hover:w-full"></span><span class="relative">Track Order</span></Link>
                    <Link
                        to="/products"
                        className="group w-full relative inline-flex py-2 items-center justify-center overflow-hidden rounded-md bg-blue-50 border border-blue-600 px-6 font-medium text-blue-700 hover:text-white"><span class="absolute h-0 w-0 bg-blue-500 transition-all duration-100 group-hover:h-full group-hover:w-full"></span><span class="relative">Continue Shopping</span></Link>
                </div>
            </div>
        </div>
    );
}