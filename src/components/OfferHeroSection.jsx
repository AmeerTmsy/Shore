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
    const [audioPlaing, setAudioPlaying] = useState(false);
    const audioRef = useRef(new Audio('./shor-voiceover-final.mp3'))
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

    const handlePlay = () => {
        console.log('play');
        audioRef.current.play();
        setAudioPlaying(true)
    }

    const handlePause = () => {
        audioRef.current.pause();
        setAudioPlaying(false)
    }

    const handleReplay = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
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

                <button onClick={() => navigate('/products')} className="bg-[#b98d12] text-black px-6 py-3 group rounded-full font-semibold hover:bg-gray-200 transition">
                    Shop Now <svg className="inline-block rotate-45 ml-2 mb-1 group-hover:rotate-y-180 transition duration-1000" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M390.624 150.625L256 16L121.376 150.625l22.628 22.627l95.997-95.998v417.982h32V77.257l95.995 95.995z" /></svg>
                </button>
            </div>
            <div className=" border-2 text-gray-300  rounded-full px-4  absolute top-18 right-2 flex gap-2 z-20">
                <div>{audioPlaing ?
                    <span><svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle></svg></span>
                    :
                    <span onClick={handlePlay} className="flex items-center gap-2 text-xs">My Work <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5.14v14l11-7z" /></svg></span>
                }</div>
                {audioPlaing && <button onClick={handlePause} className="cursor-pointer"><svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l-2 0l0 -12l2 0l0 12M15 6l2 0l0 12l-2 0l0 -12"><animate fill="freeze" attributeName="d" dur="0.6s" keyTimes="0;0.33;1" values="M13 15l-5 3l0 -12l5 3l0 0M13 9l5 3l0 0l-5 3l0 0;M13 15l-5 3l0 -12l5 3l0 6M13 9l5 3l0 0l-5 3l0 -6;M9 18l-2 0l0 -12l2 0l0 12M15 6l2 0l0 12l-2 0l0 -12" /></path></svg></button>}
                {audioPlaing && <button onClick={handleReplay} className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M8.488 21.288q-1.638-.713-2.85-1.925t-1.925-2.85T3 13h2q0 2.925 2.038 4.963T12 20t4.963-2.037T19 13t-2.037-4.962T12 6h-.15l1.55 1.55L12 9L8 5l4-4l1.4 1.45L11.85 4H12q1.875 0 3.513.713t2.85 1.925t1.925 2.85T21 13t-.712 3.513t-1.925 2.85t-2.85 1.925T12 22t-3.512-.712"/></svg></button>}
            </div>
        </div>
    );
}
