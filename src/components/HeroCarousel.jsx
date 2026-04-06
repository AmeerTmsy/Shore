import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1742&auto=format&fit=crop",
    title: "Pro Sports Shoes",
    subtitle:
      "Push your limits with lightweight, high-performance footwear designed for speed, endurance, and ultimate comfort. Perfect for runners and athletes who demand more from every step.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1572026174154-97194f1e3567?q=80&w=1740&auto=format&fit=crop",
    title: "Casual Everyday Wear",
    subtitle:
      "Step into effortless style with versatile sneakers crafted for daily comfort. Whether you're heading out or staying relaxed, these shoes blend fashion with all-day ease.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563434649554-58f91d22ec2c?q=80&w=1758&auto=format&fit=crop",
    title: "Elegant Formal Shoes",
    subtitle:
      "Refine your look with premium formal footwear designed for elegance and confidence. Ideal for office wear, events, and moments where style truly matters.",
  },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    // 🔁 Auto loop
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[60vh] overflow-hidden">

            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`}
                >
                    {/* Image */}
                    <img
                        src={slide.image}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 w-full" />
                    <div className={`absolute inset-0 flex flex-col justify-center items-start text-white p-4 gap-2 h-full w-full ${index % 2 === 0 ? "bg-black/25" : "bg-black/25"}`}>
                        <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-10 gap-6 h-full bg-black/25 w-full md:w-[45%] shadow-[4px_0_6px_rgba(0,0,0,0.2)] ">
                            <h1 className="text-3xl md:text-5xl font-bold featuredText tracking-wide">{slide.title}</h1>
                            <p className="text-sm md:text-lg font-extralight mb-4">{slide.subtitle}</p>
                            <button className="bg-orange-500 px-8 py-3 rounded-full hover:bg-orange-600 transition mt-3">Shop Now</button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-1 rounded-full ${i === current ? "bg-white w-6 " : "bg-white/50"
                            }`}
                    >
                        <span className={`h-1 w-0 bg-[#303030] block rounded-full ${i === current ? "w-full transition-all duration-4000 ease" : ""}`}></span>
                    </div>
                ))}
            </div>
        </div>
    );
}