import { useSideBar } from "../../pages/constext/ProfileSideBarContext";


export default function MyOrders() {
  const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()
  const orders = [
    {
      id: "ORD123456",
      date: "2026-04-02",
      status: "Delivered",
      total: 2999,
      payment: "Paid via UPI",

      items: [
        {
          id: 1,
          title: "Nike Revolution 6 Running Shoes",
          image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=500",
          price: 2999,
          quantity: 1,
        },
      ],

      delivery: {
        address: "Kozhikode, Kerala - 673001",
        deliveredOn: "2026-04-05",
      },
    },

    {
      id: "ORD123457",
      date: "2026-03-28",
      status: "Shipped",
      total: 4599,
      payment: "Cash on Delivery",

      items: [
        {
          id: 2,
          title: "Puma RS-X Sneakers",
          image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500",
          price: 4599,
          quantity: 1,
        },
      ],

      delivery: {
        address: "Calicut, Kerala",
        expected: "2026-04-06",
      },
    },

    {
      id: "ORD123458",
      date: "2026-03-20",
      status: "Cancelled",
      total: 1299,
      payment: "Paid via Card",

      items: [
        {
          id: 3,
          title: "Campus Running Shoes",
          image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1299,
          quantity: 1,
        },
      ],

      delivery: {
        address: "Trivandrum, Kerala",
      },
    },
  ];
  return (
    <>
      <div>

        <div className='flex justify-between items-center shadow-[0_10px_10px_-5px_rgba(0,0,0,0.07)] p-4 border-b border-gray-300'>
          <h2 className="text-xl font-semibold">My Orders</h2>
          {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
        </div>
        <div className="space-y-4 p-4">
          {orders.map((order) => (
            <div key={order.id} className="border border-gray-200 rounded-xl p-4 bg-white ">

              {/* Top */}
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium">Order #{order.id}</p>
                <span className={`text-sm 
                  ${order.status === "Delivered" && "text-green-600 bg-green-50 border border-green-400 rounded-full px-3 text-xs"}
                  ${order.status === "Shipped" && "text-blue-600 bg-blue-50 border border-blue-400 rounded-full px-3 text-xs"}
                  ${order.status === "Cancelled" && "text-red-500 bg-red-50 border border-red-400 rounded-full px-3 text-xs"}
                `}>
                  {order.status}
                </span>
              </div>

              {/* Items */}
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-3 items-center mb-2">
                  <img src={item.image} className="w-14 h-14 rounded object-cover" />
                  <div>
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">
                      ₹{item.price} • Qty {item.quantity}
                    </p>
                  </div>
                </div>
              ))}

              {/* Info */}
              <div className="text-sm text-gray-500 mt-2">
                <p>Placed on: {order.date}</p>
                <p>{order.payment}</p>
              </div>

              {/* Delivery */}
              <div className="text-sm mt-2">
                {order.status === "Delivered" && (
                  <p className="text-green-600">
                    Delivered on {order.delivery.deliveredOn}
                  </p>
                )}

                {order.status === "Shipped" && (
                  <p className="text-blue-600">
                    Expected by {order.delivery.expected}
                  </p>
                )}
              </div>

              {/* Total */}
              <div className="mt-2 font-semibold">
                Total: ₹{order.total}
              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}
