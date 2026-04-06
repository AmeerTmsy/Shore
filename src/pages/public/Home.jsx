import { useEffect, useRef, useState } from "react";
import HeroCarousel from "../../components/HeroCarousel";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import { SquareArrowOutUpLeft, Star } from "lucide-react";

const dummyProducts = [
  { id: 1, title: "Nike Air", price: 3000, image: "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "Adidas Ultraboost", price: 4000, image: "https://images.unsplash.com/photo-1659785568869-aa061a0f8e87?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "Reebok Classic", price: 2500, image: "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "Adidas Ultraboost", price: 4000, image: "https://images.unsplash.com/photo-1659785568869-aa061a0f8e87?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, title: "Nike Air", price: 3000, image: "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];
const dummyFeaturedProducts = [
  { id: 1, title: "Nike Air", price: 3000, image: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=1282&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "Adidas Ultraboost", price: 4000, image: "https://images.unsplash.com/photo-1625210025716-796839bb55b7?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "Reebok Classic", price: 2500, image: "https://images.unsplash.com/photo-1614453966165-cca08867d5ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "Adidas Ultraboost", price: 4000, image: "https://images.unsplash.com/photo-1616244916660-d135a013d1f8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, title: "Nike Air", price: 3000, image: "https://images.unsplash.com/photo-1657194001787-d1db2d91c32b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];
const dummyGiftProducts = [
  { id: 1, title: "To Gift", price: 4000, image: "https://images.unsplash.com/photo-1625552187571-7ee60ac43d2b?q=80&w=1219&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "For your love", price: 2500, image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "For your colleague", price: 4000, image: "https://images.unsplash.com/photo-1658837407083-308b902ee99d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "For your coloured self", price: 3000, image: "https://images.unsplash.com/photo-1744812441747-12b5ac61d9f6?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, title: "For your buddy", price: 3000, image: "https://images.unsplash.com/photo-1556395650-b30c53b4ff77?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, title: "For your travel", price: 3000, image: "https://images.unsplash.com/photo-1676084616388-b5d0967f4acc?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];
const dummyBrands = [
  { id: 1, title: "Nike", icon: <svg xmlns="http://www.w3.org/2000/svg" className="text-black" width="60" height="60" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5.243 8.375c-1.168 1.334-2.785 2.828-3.173 4.692c-.612 2.938 2.962 2.858 4.697 2.141c5.105-2.11 10.155-4.353 15.233-6.53c-4.937 1.315-9.857 2.699-14.812 3.945c-3.545.892-2.855-2.272-1.945-4.248" clipRule="evenodd" /></svg> },
  { id: 2, title: "Adidas", icon: <svg xmlns="http://www.w3.org/2000/svg" className="text-red" width="60" height="60" viewBox="0 0 24 24"><path fill="currentColor" d="m24 19.535l-8.697-15.07l-4.659 2.687l7.145 12.383Zm-8.287 0L9.969 9.59L5.31 12.277l4.192 7.258ZM4.658 14.723l2.776 4.812H1.223L0 17.41Z" /></svg> },
  { id: 3, title: "Reebok", icon: <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="60" height="60" viewBox="0 0 24 24"><path fill="currentColor" d="M14.991 11.48c2.753-1.1 4.467-1.732 9.009-2.84c-2.467.163-7.922.537-11.682 1.271l2.673 1.57m-8.56 3.651h3.6c.713-1.08 1.422-1.606 2.248-2.191a71 71 0 0 0-1.892-.701c-2.297 1.014-3.575 2.375-3.953 2.892m.709-3.928c-3.21 1.147-4.994 2.393-6.199 3.928h3.975c.387-.539 1.862-2.093 4.633-3.174a57 57 0 0 0-2.41-.754M8.79 8.788H0c8.862 1.6 13.133 3.66 20 6.572c-.587-.439-10.051-6.013-11.209-6.572" /></svg> },
  { id: 4, title: "Bata", icon: <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="60" height="60" viewBox="0 0 24 24"><path fill="currentColor" d="M17.397 13.003c.244-1.308 1.795-1.974 2.936-1.91c.436.025.82.154 1.039.41c.09-.09.18-.192.269-.282c.051-.051.205-.038.346-.013c.154.026.32.09.423.09s.36-.077.603-.115s.461-.026.423.064l-.218.538l-.705 1.73c-.141.347.41.257 1.166-.55c.129.09.193.102.321.423c-.654.564-1.27.961-2.128 1.256c-.77.27-1.346-.115-1.526-.756c-1.102 1.025-2.628 1.013-3.064-.141c-.718.359-1.564.73-1.923.833c-.282.077-.526.141-.77.141c-.384 0-.794-.346-.666-.872c-.628.282-1.128.462-1.846.705c-.77.27-1.218-.025-1.398-.666c-1.102 1.025-2.628 1.013-3.064-.141c-.436.205-1.025.513-1.577.73c-.884.398-1.923.321-2.692-.487l.257-.397c.359.384.807.372 1.153.051c.372-.333.603-.974.436-1.513c-.077-.23-.333-.41-.833-.384l.154-.41c.5-.013.897-.09 1.115-.398c.308-.449.308-1.128-.346-1.115a1.3 1.3 0 0 0-.41.077c-.116.333-.308.73-.475 1.14c-.371.95-.782 2-1.256 2.68c-.564.808-1.18.962-1.667.936c-.512-.039-.91-.192-1.474-.692c0-.218.013-.308.064-.577c.218.269.898.564 1.115.243c.488-.718 1.026-2.102 1.436-3c-.359.116-.705.346-1.18.68c0-.051-.153-.18-.153-.334c.77-.884 2.115-1.423 3.026-1.615c1.397-.295 2.884.128 3.115 1.013c.154.59-.538 1.14-1.192 1.218c.372.218.769.602.872 1.077c.05.23.038.487-.039.73c.218-.102.487-.23.654-.307c.27-1.885 3.192-2.487 3.987-1.59l.27-.282c.05-.051.204-.038.346-.013c.153.026.32.09.423.09s.359-.077.602-.115c.244-.039.462-.026.423.064l-.91 2.269c-.205.513 1.308-.398 1.397-.449l.654-1.384l-.666.012l.115-.564h.744c.128-.166.153-.359.32-.474c.218-.167.718-.077.949-.23c.205-.129.359-.321.538-.629c.154-.256.744-.192.628.051l-.512 1.295h.653c.308.013.039.539-.307.539l-.539.012l-.628 1.629c-.205.5.59.025 1.192-.32zm-6.012-1.115c-.077-.244-.282-.308-.475-.295c-.436.051-.859.538-1.077.872c-.346.538-.269 1.346.295 1.192c.577-.154 1.36-1.41 1.257-1.77zm9.666 0c-.077-.244-.282-.308-.474-.295c-.436.051-.86.538-1.077.872c-.346.538-.27 1.346.295 1.192c.577-.154 1.359-1.41 1.256-1.77Z" /></svg> },
  { id: 5, title: "Under Armour", icon: <svg xmlns="http://www.w3.org/2000/svg" className="text-black" width="60" height="60" viewBox="0 0 24 24"><path fill="currentColor" d="M15.954 12a17 17 0 0 1-.324.233c-.826.585-2.023.985-3.58.985h-.104c-1.556 0-2.755-.4-3.58-.985L8.042 12q.133-.099.324-.234c.825-.584 2.024-.985 3.58-.985h.104c1.557 0 2.756.401 3.58.985q.192.134.325.234M24 7.181s-.709-.541-2.95-1.365c-1.968-.721-3.452-.883-3.452-.883l.006 4.243c0 .598-.162 1.143-.618 1.765c-1.672-.61-3.254-.985-4.981-.985c-1.728 0-3.308.375-4.98.985c-.457-.619-.62-1.168-.62-1.765l.007-4.243s-1.494.16-3.463.883C.709 6.642 0 7.181 0 7.181c.093 1.926 1.78 3.638 4.435 4.82C1.777 13.18.09 14.887 0 16.818c0 0 .709.54 2.949 1.365c1.968.721 3.453.883 3.453.883l-.007-4.244c0-.597.164-1.143.619-1.764c1.672.61 3.252.983 4.98.983c1.727 0 3.309-.374 4.98-.983c.457.62.62 1.167.62 1.764l-.006 4.244s1.484-.16 3.452-.883c2.241-.826 2.95-1.365 2.95-1.365c-.093-1.927-1.78-3.64-4.435-4.819c2.657-1.182 4.343-2.888 4.435-4.82" /></svg> },
];
const offers = [
  {
    id: 1,
    title: "Special Sports Collection",
    subtitle:
      "Unleash speed and performance with Nike’s latest sports collection. Built for athletes who push limits every single day.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop",
    brand: "Nike",
  },
  {
    id: 2,
    title: "Street Fit Collection",
    subtitle:
      "Where street meets comfort. Discover Adidas sneakers designed for everyday wear with unmatched style and flexibility.",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1740&auto=format&fit=crop",
    brand: "Adidas",
  },
  {
    id: 3,
    title: "Ground Training Gear",
    subtitle:
      "Train harder with Reebok’s durable and performance-focused footwear. Built to handle intensity and endurance.",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1740&auto=format&fit=crop",
    brand: "Reebok",
  },
  {
    id: 4,
    title: "Everyday Comfort",
    subtitle:
      "Reliable, affordable, and comfortable — Bata shoes for your daily lifestyle and long-lasting use.",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1740&auto=format&fit=crop",
    brand: "Bata",
  },
  {
    id: 5,
    title: "Performance Essentials",
    subtitle:
      "Engineered for athletes — Under Armour delivers powerful grip, stability, and comfort for peak performance.",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1740&auto=format&fit=crop",
    brand: "Under Armour",
  },
];

const reviews = [
  {
    id: 1,
    name: "Arjun Nair",
    rating: 5,
    comment:
      "Absolutely loved the quality! The shoes feel premium and super comfortable. Delivery was quick too.",
    location: "Kerala, India",
    date: "2026-03-20",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    rating: 4,
    comment:
      "Great collection and smooth shopping experience. Would love to see more color options.",
    location: "Delhi, India",
    date: "2026-03-18",
  },
  {
    id: 3,
    name: "Aisha Khan",
    rating: 5,
    comment:
      "The design is amazing and fits perfectly. Definitely coming back for more!",
    location: "Mumbai, India",
    date: "2026-03-15",
  },
  {
    id: 4,
    name: "Vikram Menon",
    rating: 4,
    comment:
      "Good value for money. Packaging was neat and product matched the images.",
    location: "Bangalore, India",
    date: "2026-03-10",
  },
  // {
  //   id: 5,
  //   name: "Sneha Reddy",
  //   rating: 5,
  //   comment:
  //     "One of the best online shopping experiences I've had. Easy to use and fast checkout!",
  //   location: "Hyderabad, India",
  //   date: "2026-03-08",
  // },
  // {
  //   id: 6,
  //   name: "Faizan Ali",
  //   rating: 5,
  //   comment:
  //     "Customer support was very helpful. Helped me pick the right size. Highly recommend!",
  //   location: "Chennai, India",
  //   date: "2026-03-05",
  // },
];

export default function Home() {

  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // sentence index
  const [charIndex, setCharIndex] = useState(0); // letter index
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const messages = [
    "Branding Now Feels More Personal",
    "Connecting Brands with Real People",
    "Where Trust Meets Style",
    "Built for Brands That Care",
  ];

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
      checkScroll();
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
      checkScroll();
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      setShowLeft(scrollRef.current.scrollLeft > 0);
    }
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= offers.length - 1) return 0;
        else return prevCount + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentText = messages[index];

    let speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1200); // pause
        }
      } else {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % messages.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.min(
        Math.max(((windowHeight - rect.top) / (rect.height + windowHeight)) , 0),
        1
      );

      const index = Math.floor(scrollProgress * reviews.length);
      setActiveIndex(Math.min(index, reviews.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <HeroCarousel />

      {/* Special Selection */}
      <div className="gap-4 p-2 md:p-4">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="relative flex flex-row overflow-x-scroll hide-scrollbar gap-2 bg-[#f5f2f2] py-2 rounded-lg"
        >
          {showLeft && (
            <div className="sticky top-0 -left-2 flex items-center">
              <button
                onClick={scrollLeft}
                className="py-10 px-5 bg-gray-900 text-white rounded-r-xl"
              >{"<"}</button>
            </div>
          )}
          <div className="flex justify-center items-center gap-2">
            <div className="flex flex-col gap-2 h-1/2 w-full min-w-100 px-4">
              <h2 className="font-semibold text-2xl">
                Shore-special selections for children
              </h2>
              <div className="flex justify-between">
                <button className="bg-gray-300 px-6 py-3 rounded-full">
                  Show me more
                </button>
              </div>
            </div>
          </div>
          {dummyFeaturedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
          {showRight && (
            <div className="sticky top-0 -right-3 flex items-center">
              <button
                onClick={scrollRight}
                className="py-10 px-5 bg-gray-900 text-white rounded-l-xl"
              >{">"}</button>
            </div>
          )}
        </div>
      </div>

      {/* <h2 className="font-semibold text-3xl text-start md:text-center featuredText  p-4"> Shore-special selections for children</h2> */}

      {/* Featured Products */}
      <div className="gap-4 p-2 md:p-4">
        <h1 className="text-xl font-bold mb-4 px-2">Featured Products</h1>
        <div className="flex justify-between gap-2 overflow-x-scroll hide-scrollbar ">
          {dummyProducts.map((product) => (

            <div key={product.id} to={`/product/${product.id}`} className="flex flex-col gap-2  w-full min-w-40 md:min-w-72 hover:shadow-lg hover:border border-gray-300 transition-all duration-500 ease-in-out rounded-2xl p-2">
              <img src={product.image} alt={product.title} className="h-auto object-cover self-center rounded-2xl" />
              <h2 className="font-normal text-md">{product.title}</h2>
              <div className="flex justify-between">
                <p>₹{product.price}</p>

                <Link to={`/product/${product.id}`} className="text-blue-500">
                  View
                </Link>
              </div>
            </div>

          ))}
        </div>
      </div>

      {/* Offers */}
      <div className="p-2 md:p-4">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-[#f4f4f4] p-2 rounded-xl"
        >
          <div className="flex justify-center items-center gap-2">
            <div className="flex flex-col justify-between h-full w-full p-3">
              <div className="flex flex-col gap-2 md:gap-5">
                {offers[count].brand &&
                  <>
                    <h2 className="font-semibold text-2xl">The kind of deal you won't find anywhere else.</h2>
                    <p className="font-light">{offers[count].subtitle}</p>
                    <div className="flex justify-between">
                      <button className="bg-gray-300 px-6 py-3 rounded-full cursor-pointer shadow-md border border-gray-400">Show me more</button>
                    </div>
                  </>
                }
              </div>
              <div className="hidden md:flex justify-start items-center gap-1">
                {offers.map((offer, index) => <span className={`inline-block h-1 bg-[#b5b3b3] rounded-full ${index === count ? "w-10" : "w-2"}`} key={index}>
                  <span className={`block h-1 w-0 rounded-full bg-black ${index === count ? "w-full transition-all duration-3000 ease-in-out" : ""}`}></span>
                </span>)}
              </div>
            </div>
          </div>
          <div className="relative h-75 shadow-2xl hover:shadow-gray-600 transition-shadow duration-500 ease-in-out rounded-lg overflow-hidden">
            {offers.map((offer, index) => (

              <div key={offer.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === count ? "opacity-100 z-10" : "opacity-0 z-0"}`} key={index}>
                <div
                  to={`/product/${offer.id}`}
                  className="flex flex-col justify-end gap-2 h-75 border-gray-300 transition-all duration-500 ease-in-out rounded-lg p-2 bg-cover bg-center"
                  style={{ backgroundImage: `url(${offer.image})` }}
                >
                  <div className="bg-black/70 text-gray-200 hover:text-white transition-colors rounded-2xl px-4 py-2 font-light">
                    <div className="flex justify-between">
                      <p className="font-semibold">{offer.brand}</p>
                      <Link to={`/product/${offer.id}`} className="">
                        <SquareArrowOutUpLeft strokeWidth={1} />
                      </Link>
                    </div>
                    <h2 className=" text-md">{offer.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex md:hidden justify-center items-center gap-1 mt-2">
            {offers.map((offer, index) => <span key={index} className={`inline-block h-1 bg-[#b5b3b3] rounded-full ${index === count ? "w-10" : "w-2"}`} key={index}>
              <span className={`block h-1 w-0 rounded-full bg-black ${index === count ? "w-full transition-all duration-3000 ease-in-out" : ""}`}></span>
            </span>)}
          </div>
        </div>
      </div>

      {/* Gift Products */}
      <div className="gap-4 m-2 md:m-4">
        <h1 className="text-md md:text-lg font-normal mb-0 md:mb-2">Gifts as special as they are 🎁</h1>
        <div className="flex justify-between items-center gap-2 overflow-x-scroll hide-scrollbar ">
          {dummyGiftProducts.map((product) => (
            <div key={product.id} to={`/product/${product.id}`} className="flex items-center justify-between gap-2  w-full min-w-52 md:min-w-72 hover:shadow-lg border bg-gray-50 hover:bg-gray-200 border-gray-200 transition-all duration-500 ease-in-out rounded-2xl p-2">
              <img src={product.image} alt={product.title} className="w-3/12 object-cover self-center rounded-2xl" />
              <p className="flex items-center w-3/5 text-sm md:text-lg">{product.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Section */}
      <div ref={sectionRef} className="relative border-t border-gray-300 mt-3 pt-2" style={{ height: `${300 }vh` }}>
        <div className="sticky top-28 md:top-48 flex items-center">
          <div className="grid grid-cols-1 gap-2 p-2 md:p-4 w-full">
            <div>
              <div className="py-5 px-4 md:px-10">

                {/* Heading */}
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    What Our Customers Say
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Real experiences from people who trust our platform
                  </p>
                </div>

                {/* Reviews Grid */}

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full">

                  {/* LEFT */}
                  <div>
                    {reviews.map((review, index) => (
                      <div
                        key={review.id}
                        className={`bg-white font-light rounded-2xl p-5 shadow-sm mb-2 transition-all duration-300
                          ${index === activeIndex
                            ? "text-gray-900 shadow-xl"
                            : "text-gray-400"
                          }`}
                      >
                        <p>{review.name}</p>
                      </div>
                    ))}
                  </div>

                  {/* RIGHT */}
                  <div className={`${activeIndex % 2 !== 0 ? "bg-white" : "bg-gray-200"} rounded-2xl p-5 shadow-sm transition-all duration-500`}>
                    <div className="flex justify-between">
                      <div>
                        <span className="text-xs text-gray-400">
                          {reviews[activeIndex].date}
                        </span>
                        <p className="text-xs text-gray-400">
                          {reviews[activeIndex].location}
                        </p>
                      </div>

                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < reviews[activeIndex].rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mt-3">
                      {reviews[activeIndex].comment}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brands */}
      <div className="grid grid-cols-1 gap-2 p-4 overflow-hidden border-t border-gray-300 my-3 pt-6">
        <h1 className="text-xl font-bold">Brands</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2">
          <p className="text-md font-light mb-2">Our platform has grown into a trusted space where brands and customers connect with confidence. By delivering quality products and a smooth experience, we help brands grow while building strong relationships with their customers.</p>
          <div className="flex justify-center items-center">
            {/* <input type="text" className="px4 py-2 border border-gray-400 rounded-md w-full sm:w-2/3 md:w-1/2 text-center" value={text+'|'} /> */}
            <h4 className="text-md font-light flex items-start border border-orange-200 px-4 py-2 rounded-md w-full sm:w-2/3 md:w-4/5 xl:w-3/5"><span className=" ps-1 text-gray-600">{text}</span><span className="cursor_">|</span></h4>
          </div>
        </div>
        <div className="relative overflow-hidden px-2 pb-4 pt-6">
          <div className="flex gap-2 w-max auto-scroll">
            {[...dummyBrands, ...dummyBrands].map((brand, index) => (
              <div
                key={index}
                to={`/brand/${brand.id}`}
                className="flex items-center justify-between gap-2 w-full min-w-52 md:min-w-72 shadow-lg border border-gray-200 rounded-2xl py-2 px-4 bg-white cursor-auto"
              >
                <p className="w-1/2">{brand.icon}</p>
                <h2 className="w-1/2 text-end">{brand.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div >
  );
}