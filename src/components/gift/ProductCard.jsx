export function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-3">
      <img
        src={product.image}
        className="w-full h-40 object-cover rounded-md"
      />

      <h3 className="mt-2 font-semibold">{product.title}</h3>
      <p className="text-gray-500 text-sm">₹{product.price}</p>

      {product.badge && (
        <span className="text-xs text-red-500">{product.badge}</span>
      )}
    </div>
  );
}