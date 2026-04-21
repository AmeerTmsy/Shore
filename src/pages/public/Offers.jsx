import React, { useEffect, useState } from 'react'
import OfferHeroSection from '../../components/public/OfferHeroSection'
import { div, span } from 'framer-motion/client'
import { useNavigate } from 'react-router-dom'

export default function Offers() {
    const navigate = useNavigate();
    const calculateTimeLeft = () => {
        const endTime = new Date().getTime() + 6 * 60 * 60 * 1000;
        return endTime;
    };

    const [endTime] = useState(calculateTimeLeft());
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(endTime));

    function getTimeRemaining(endTime) {
        const total = endTime - new Date().getTime();
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((total / (1000 * 60)) % 60);
        const seconds = Math.floor((total / 1000) % 60);
        return { total, hours, minutes, seconds };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const updated = getTimeRemaining(endTime);

            if (updated.total <= 0) {
                clearInterval(timer);
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft(updated);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    const format = (num) => String(num).padStart(2, "0");



    return (
        <>
            <OfferHeroSection />
            <div className="gap-4 p-2 md:p-4 bg-[#f5f2f2]">
                <h2 className="font-noraml text-2xl my-5 relative inline-block">Grab and get you selected offers <svg className='inline-block text-yellow-500 absolute -top-3 -right-5' xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="m20.749 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1h-2.199l-1.103-1.909a1 1 0 0 0-.607-.466a1 1 0 0 0-.759.1L12 3.251l-1.91-1.105a1 1 0 0 0-1.366.366L7.62 4.422H5.421a1 1 0 0 0-1 1v2.199l-1.91 1.104a1 1 0 0 0-.365 1.367L3.25 12l-1.104 1.908a1.004 1.004 0 0 0 .364 1.367l1.91 1.104v2.199a1 1 0 0 0 1 1h2.2l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135l1.908-1.104l1.91 1.104a1 1 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1v-2.199l1.91-1.104a1 1 0 0 0 .365-1.367zM9.499 6.99a1.5 1.5 0 1 1-.001 3.001a1.5 1.5 0 0 1 .001-3.001m.3 9.6l-1.6-1.199l6-8l1.6 1.199zm4.7.4a1.5 1.5 0 1 1 .001-3.001a1.5 1.5 0 0 1-.001 3.001"/></svg></h2>
                <div
                    // ref={scrollRef}
                    // onScroll={checkScroll}
                    className="relative flex flex-row overflow-x-scroll hide-scrollbar gap-2 py-2 rounded-lg"
                >
                    {/* <div className="flex justify-center items-center gap-2">
                        <div className="flex flex-col gap-2 h-1/2 w-full min-w-100 px-4">
                            <div className="flex justify-between">
                                <button className="bg-gray-300 px-6 py-3 rounded-full">
                                    Explore Offers
                                </button>
                            </div>
                        </div>
                    </div> */}
                    <div className="flex gap-4 pr-4">
                        {offers.map((offer) => (
                            <div
                                key={offer.id}
                                className={`min-w-65 rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300 ${offer.bg}`}
                            >
                                <h3 className="text-lg font-medium mb-1">{offer.title}</h3>
                                <p className="text-sm font-medium text-gray-700 mb-2">{offer.subtitle}</p>
                                <p className="text-sm text-gray-600 mb-4">{offer.description}</p>
                                <button onClick={() => navigate('/products')} className="text-sm font-semibold bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition cursor-pointer">Shop Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <h2 className="font-noraml text-2xl text-center mt-9">Get based on you purpouse</h2>
                <div className="px-4 md:px-10 py-10 flex flex-col gap-4">
                    {categoryOffers.map((item, index) => {
                        const isReverse = index % 2 !== 0;

                        return (
                            <div
                                key={item.id}
                                className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 border p-2 rounded-2xl border-gray-300 hover:shadow-lg`}
                            >
                                <div className={` w-full md:w-1/2 order-1 ${isReverse ? "md:order-2" : "md:order-1"}`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-62.5 md:h-87.5 object-cover rounded-2xl"
                                    />
                                </div>
                                <div className={` w-full md:w-1/2 order-2 ps-2 ${isReverse ? "md:order-1" : "md:order-2"}`}>
                                    <h2 className="text-2xl md:text-4xl font-bold mb-2">{item.title}</h2>
                                    <p className="text-lg font-semibold text-red-500 mb-2">{item.subtitle}</p>
                                    <p className="text-gray-600 mb-4">{item.description}</p>
                                    <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">Shop Now</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='m-2'>
                <div className="bg-linear-to-r from-[#202020] to-[#686868] text-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left Content */}
                    <div className='text-center md:text-start'>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Flash Sale ⚡ </h2>
                        <p className="text-gray-300">Limited time deals — grab your favorite shoes before time runs out!</p>
                        {/* CTA */}
                        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition mt-4 md:mt-8">
                            Shop Flash Deals
                        </button>
                    </div>
                    {/* Timer */}
                    <div className="flex items-center gap-3 text-2xl md:text-3xl font-mono font-bold">
                        <TimeBox value={format(timeLeft.hours)} label="H" />
                        <span>:</span>
                        <TimeBox value={format(timeLeft.minutes)} label="M" />
                        <span>:</span>
                        <TimeBox value={format(timeLeft.seconds)} label="S" />
                    </div>
                </div>
            </div>
        </>
    )
}


function TimeBox({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-white text-black px-3 py-2 rounded-lg min-w-[50px] text-center">
                {value}
            </div>
            <span className="text-xs text-gray-400 mt-1">{label}</span>
        </div>
    );
}


const offers = [
    {
        id: 1,
        title: "Up to 50% Off",
        subtitle: "On selected sports shoes",
        description: "Grab high-performance shoes at unbeatable prices.",
        bg: "bg-red-100",
    },
    {
        id: 2,
        title: "Flat 30% Off",
        subtitle: "Casual collections",
        description: "Upgrade your everyday look with stylish comfort.",
        bg: "bg-blue-100",
    },
    {
        id: 3,
        title: "Buy 1 Get 1",
        subtitle: "Limited time deal",
        description: "Double your style without doubling the cost.",
        bg: "bg-green-100",
    },
    {
        id: 4,
        title: "Up to 15% Off",
        subtitle: "Kids footwear",
        description: "Comfort and style for your little ones.",
        bg: "bg-yellow-100",
    },
    {
        id: 5,
        title: "Flat 40% Off",
        subtitle: "Premium brands",
        description: "Luxury meets affordability in this exclusive sale.",
        bg: "bg-purple-100",
    },
];


const categoryOffers = [
    {
        id: 1,
        title: "Sports Collection",
        subtitle: "Up to 50% Off",
        description: "Run faster and train harder with top performance shoes.",
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1160",
    },
    // {
    //     id: 2,
    //     title: "Casual Wear",
    //     subtitle: "Flat 30% Off",
    //     description: "Everyday comfort meets modern style.",
    //     image: "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?q=80&w=1160",
    // },
    {
        id: 3,
        title: "Formal Shoes",
        subtitle: "Up to 40% Off",
        description: "Step into elegance with premium formal designs.",
        image: "https://images.unsplash.com/photo-1668069226492-508742b03147?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        title: "Kids Collection",
        subtitle: "Up to 25% Off",
        description: "Fun, colorful, and super comfy for little feet.",
        image: "https://images.unsplash.com/photo-1678192568478-9488ee55def6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];