import React, { useEffect, useRef, useState } from "react";
import v1 from '../assets/homeRowVideo/coverr-woman-entering-a-shoe-store-5203-1080p.mp4'
import v2 from '../assets/homeRowVideo/coverr-woman-looking-at-boots-7257-1080p.mp4'
import v3 from '../assets/homeRowVideo/coverr-trying-on-reptile-print-ankle-boots-4246-1080p.mp4'
import v4 from '../assets/homeRowVideo/coverr-looking-in-the-mirror-2261-1080p.mp4'
import v5 from '../assets/homeRowVideo/coverr-putting-boots-on-the-cash-desk-4079-1080p.mp4'
import v6 from '../assets/homeRowVideo/coverr-woman-leaving-a-shoe-store-with-a-bag-2767-1080p.mp4'
import { useNavigate } from "react-router-dom";

export default function OfferHeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);
    const navigate = useNavigate();
    const [heroVideos, setHeroVideos] = useState([
        { id: 1, src: v1 },
        { id: 2, src: v2 },
        { id: 3, src: v3 },
        { id: 4, src: v4 },
        { id: 5, src: v5 },
        { id: 6, src: v6 },
    ])
    // Auto switch videos when one ends
    const handleVideoEnd = () => {
        setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    }, [currentIndex]);

    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Background Video */}
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
            >
                <source src={heroVideos[currentIndex].src} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">

                <h1 className="text-4xl md:text-6xl font-bold mb-3 featuredText text-[#d5a00e]">
                    Step Into Style
                </h1>

                <p className="font-noraml max-w-xl mb-6">
                    Explore a complete new world of offers
                </p>
                <p className="font-extralight text-lg md:text-xl max-w-xl mb-6 text-gray-300">
                    Discover premium shoes crafted for comfort, performance, and everyday elegance.
                </p>

                <button onClick={()=> navigate('/products')} className="bg-[#b98d12] text-black px-6 py-3 group rounded-full font-semibold hover:bg-gray-200 transition">
                    Shop Now <svg className="inline-block rotate-45 ml-2 mb-1 group-hover:rotate-y-180 transition duration-1000" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M390.624 150.625L256 16L121.376 150.625l22.628 22.627l95.997-95.998v417.982h32V77.257l95.995 95.995z"/></svg>
                </button>
            </div>
        </div>
    );
}
