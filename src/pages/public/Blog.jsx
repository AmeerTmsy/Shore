import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Blog() {
  const [current, setCurrent] = useState(0);

  const [index, setIndex] = useState(0);

  // Auto change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % blogPosts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentPost = blogPosts[index];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 pt-10">

      <h1 className="text-4xl font-light mb-10 pb-2 md:pb-10 md:pt-10 inline-block featuredText italic w-full rounded-lg px-4 text-center">
        Stay updated with shore...
      </h1>

      {/* 🔥 Carousel Section */}
      <div className="relative gap-8 mb-12 items-center transition-all duration-500 md:pb-6">

        {/* Image */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.img
              key={currentPost.id}
              src={currentPost.image}
              alt=""
              className="w-full h-[320px] object-cover rounded-xl shadow-md"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPost.id + "-text"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-gray-500 mb-2">
                {currentPost.date}
              </p>

              <h2 className="text-2xl font-semibold mb-3">
                {currentPost.title}
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {currentPost.description}
              </p>

              <button className="text-indigo-600 font-medium hover:underline cursor-pointer">
                Read More →
              </button>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Dots Indicator */}
        {/* <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex gap-2">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition ${current === index ? "bg-indigo-600 w-4" : "bg-gray-300"
                }`}
            />
          ))}
        </div> */}

      </div>

      {/* Rest of your grid stays same */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...blogPosts.slice(1), ...blogPosts].map((post) => (
          <div
            key={post.id}
            className="border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt=""
              className="w-full h-[180px] object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">{post.date}</p>
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{post.description}</p>
              <button className="text-indigo-600 text-sm hover:underline cursor-pointer">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Running Shoes",
    description:
      "Discover what makes a great running shoe and how to pick the right pair for your needs.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    date: "Aug 10, 2025",
  },
  {
    id: 2,
    title: "Top 5 Sneakers You Need in 2025",
    description:
      "Stay ahead of the trend with these must-have sneakers for the year.",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1160",
    date: "Sep 2, 2025",
  },
  {
    id: 5,
    title: "Choosing the Right Shoes for Every Occasion",
    description:
      "From weddings to casual outings, discover how to pick the perfect footwear for every moment and elevate your style effortlessly.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
    date: "Sep 15, 2025",
  },
  {
    id: 4,
    title: "Caring for Your Shoes: A Complete Guide",
    description:
      "Extend the life of your footwear with these simple care tips.",
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    date: "Oct 1, 2025",
  },
];