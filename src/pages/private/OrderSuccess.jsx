import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Order Placed Successfully 🎉</h1>

      <Link to="/orders" className="text-blue-500">
        View Orders
      </Link>
    </div>
  );
}