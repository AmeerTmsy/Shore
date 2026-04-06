import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { ChevronDown } from "lucide-react";

const dummyProducts = [
  { id: 1, title: "Nike Air", price: 3000, image: "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "Adidas Ultraboost", price: 4000, image: "https://images.unsplash.com/photo-1659785568869-aa061a0f8e87?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  // { id: 3, title: "Reebok Classic", price: 2500, image: "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  // { id: 2, title: "Adidas Ultraboost", price: 4000, image: "https://images.unsplash.com/photo-1659785568869-aa061a0f8e87?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  // { id: 1, title: "Nike Air", price: 3000, image: "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function Products() {
  return (
    <div>
      <div className="p-2 pt-0">
        <div className="hidden md:flex justify-center gap-6 px-4 py-1 text-sm text-black bg-gray-200 rounded-lg">
          <span className="cursor-pointer">Casual</span>
          <span className="cursor-pointer">Formal</span>
          <span className="cursor-pointer">Sports</span>
          <span className="cursor-pointer">|</span>
          <span className="relative cursor-pointer">Price <ChevronDown className="inline-block" strokeWidth={1} size={16} /></span>
          <span className="cursor-pointer">Rating</span>
          {/* <span  className="cursor-pointer">Offers</span>
            <span  className="cursor-pointer">Gift</span>
            <span  className="cursor-pointer">Trend</span>
            <span className="cursor-pointer">|</span>
            <span  className="cursor-pointer">Products</span> */}
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">All Products</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dummyProducts.map((product) => (
            <div className="flex justify-center">
              <Link to={`/product/${product.id}`} className="flex flex-col gap-2  w-full min-w-40 md:min-w-72 hover:shadow-2xl border border-gray-300 transition-all duration-500 ease-in-out rounded-2xl p-2">
                <img src={product.image} alt={product.title} className="h-75 w-full object-cover self-center rounded-lg" />
                <div className="flex justify-between px-1">
                  <h2 className="font-normal text-md">{product.title}</h2>
                  <p>₹{product.price}</p>

                </div>
                <Link to={`/product/${product.id}`} className="text-blue-500 px-1">
                  View
                </Link>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}