import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-7xl md:text-8xl font-extrabold text-gray-900">404</h1>
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">Oops! Page not found </h2>
      <p className="mt-2 text-gray-500 max-w-md text-center">
        The page you’re looking for doesn’t exist or has been moved.
        Don’t worry, let’s get you back on track.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 text-center transition"
        >Go Home</Link>
        <Link
          to="/shop"
          className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 text-center transition"
        >Browse Products</Link>
      </div>
      <p className="mt-10 text-sm text-gray-400">Error code: 404</p>
    </div>
  );
}