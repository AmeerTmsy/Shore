import { Link } from "react-router-dom";

export default function Orders() {
  const orders = [
    { id: "1", total: 6000 },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">My Orders</h1>

      {orders.map((order) => (
        <div key={order.id} className="border p-3 mb-2">
          <p>Order ID: {order.id}</p>
          <p>Total: ₹{order.total}</p>

          <Link to={`/orders/${order.id}`} className="text-blue-500">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}