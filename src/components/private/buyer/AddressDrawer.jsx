import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function AddressDrawer({
    isOpen,
    onClose,
    addresses = [],
    onSelect,
}) {
    // 🔥 close on ESC
    const navigate = useNavigate();
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full bg-white z-50 shadow-2   xl transition-transform duration-300
                            w-full sm:w-[80%] lg:w-[50%]
                            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-300">
                    <h2 className="text-lg font-semibold">Available Address</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-black transition"
                    >✕</button>
                </div>

                <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-120px)]">
                    {addresses.map((addr) => (
                        <div
                            key={addr.id}
                            className="border border-gray-100 shadow rounded-lg p-3 flex justify-between items-start hover:bg-gray-50 cursor-pointer"
                            onClick={() => onSelect(addr)}
                        >
                            <div>
                                <p className="font-medium">
                                    {addr.name}{" "}
                                    <span className="text-xs bg-gray-200 px-1 rounded">{addr.type}</span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    {addr.landmark}, {addr.addressLine}, {addr.city},{" "}
                                    {addr.state} - {addr.pincode}
                                </p>
                                <p className="text-sm text-gray-600">{addr.phone}</p>
                            </div>
                            <div className="relative group">
                                <button className="p-2 hover:bg-gray-200 rounded">⋮</button>
                                <span className="absolute right-0 top-full mt-1 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition text-nowrap">
                                    Edit address
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-gray-300">
                    <button onClick={()=> navigate('/profile/addresses')} className="w-full bg-blue-600 text-white py-2 rounded-lg">
                        + Add New Address
                    </button>
                </div>
            </div>
        </>
    );
}