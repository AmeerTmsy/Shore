import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="flex justify-center">
      <Link to={`/product/${product.id}`} className="flex flex-col gap-2  w-full min-w-40 md:min-w-72 hover:shadow-lg hover:border border-gray-300 transition-all duration-500 ease-in-out rounded-2xl p-2">
        <img src={product.image} alt={product.title} className="h-75 w-full object-cover self-center rounded-lg" />
        <div className="flex justify-between px-1">
          <h2 className="font-normal text-md">{product.title}</h2>
          {/* <p>₹{product.price}</p> */}

          {/* <Link to={`/product/${product.id}`} className="text-blue-500">
            View
          </Link> */}
        </div>
      </Link>
    </div>
  );
}