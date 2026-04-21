import { useParams } from "react-router-dom";

export default function OrderDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Order {id}</h1>

      <div className="border p-4">
        <p>Status: Delivered</p>
        <p>Total: ₹6000</p>
      </div>
    </div>
  );
}