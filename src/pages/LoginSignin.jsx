import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");
  const [userType, setUserType] = useState("buyer");
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    localStorage.setItem("token", "test123");
  };

  return (
    <div className="w-full max-w-6xl flex flex-col mx-auto grow py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 grow">

        {/* LEFT SIDE */}
        <div className="flex flex-col  gap-4 p-6 order-2 md:order-1">

          <h1 className="text-3xl font-bold hidden md:block">
            {isLogin ? "Login into Shore" : "Create your Shore account"}
          </h1>

          <p className="text-gray-600 hidden md:block">
            Discover your fashion sense and shop from top brands or start selling your own products.
          </p>

          {/* Features */}
          <div className="mt-4 space-y-2 text-sm text-gray-500">
            <p>✔ Fast & secure checkout</p>
            <p>✔ Easy returns & refunds</p>
            <p>✔ Exclusive offers & cashback</p>
            <p>✔ Sell products & grow your business</p>
          </div>

          {/* Toggle */}
          <p className="text-sm mt-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              {isLogin ? "Sign up" : "Login"}
            </span>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center p-6 order-1 md:order-2">
          <h1 className="text-2xl font-bold block md:hidden mb-2">
            {isLogin ? "Login into Shore" : "Create your Shore account"}
          </h1>

          <p className="text-gray-600 text-sm  block md:hidden mb-3">
            Discover your fashion sense and shop from top brands or start selling your own products.
          </p>

          {/* Name */}
          {!isLogin && <input
            className={`border-b border-gray-300 focus:border-black outline-none w-full mb-1 p-2 transition`}
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />}
          {/* Email */}
          <input
            className={`border-b border-gray-300 focus:border-black outline-none w-full mb-1 p-2 transition`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            className={`border-b border-gray-300 focus:border-black outline-none w-full mb-1 p-2 transition`}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Confirme Password */}
          {!isLogin && <input
            className={`border-b border-gray-300 focus:border-black outline-none w-full mb-4 p-2 transition`}
            placeholder="Confirme password"
            type="password"
            value={confirmePassword}
            onChange={(e) => setConfirmePassword(e.target.value)}
          />}

          {/* Forgot Password */}
          {isLogin && (
            <p className="text-xs text-right text-blue-500 cursor-pointer hover:underline mb-4">
              Forgot Password?
            </p>
          )}

          {/* USER TYPE */}
          <div className="my-4">
            <div className="flex justify-center items-center gap-2 text-sm">

              <p>I am here to</p>

              {/* Buyer */}
              <div
                onClick={() => setUserType("buyer")}
                className={`flex items-center gap-2 border px-4 py-1 rounded cursor-pointer transition
                  ${userType === "buyer"
                    ? "border-blue-600 text-blue-600"
                    : "border-gray-300"
                  }
                `}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85" /></svg> <span>Shop</span>
              </div>

              <p>or</p>

              {/* Seller */}
              <div
                onClick={() => setUserType("seller")}
                className={`flex items-center gap-2 border px-4 py-1 rounded cursor-pointer transition
                  ${userType === "seller"
                    ? "border-blue-600 text-blue-600"
                    : "border-gray-300"
                  }
                `}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m20.516 14.154l-6.362 6.362q-.245.242-.551.363t-.61.121t-.605-.121t-.546-.363L3.48 12.17q-.237-.217-.358-.518q-.121-.3-.121-.632V4.634q0-.674.472-1.154T4.635 3h6.386q.324 0 .629.131t.527.354l8.339 8.344q.25.245.364.551t.114.617t-.114.61t-.364.547m-7.075 5.654l6.361-6.362q.192-.192.192-.452t-.192-.452L11.266 4.02H4.635q-.27 0-.452.173Q4 4.366 4 4.635v6.38q0 .116.039.231q.038.116.134.212l8.364 8.35q.192.192.451.192q.26 0 .453-.192M6.55 7.558q.421 0 .714-.292t.294-.708q0-.425-.292-.722t-.708-.298q-.425 0-.722.295t-.297.717t.295.714t.716.294m5.489 4.48" /></svg> <span>Sell</span>
              </div>
            </div>

            <p className="text-center text-xs text-gray-400 mt-2 cursor-pointer hover:underline">
              Not sure? We'll guide you
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            className="bg-indigo-500 text-white rounded p-2 w-full hover:bg-indigo-600 transition"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-xs text-gray-400">OR</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="flex gap-2">
            <button className="border p-2 w-full rounded hover:bg-gray-100 flex justify-center transition-colors duration-300 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" /><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" /><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" /><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" /></svg> Google
            </button>
            <button className="border p-2 w-full rounded hover:bg-gray-100 flex justify-center transition-colors duration-300 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262" /></svg> Apple
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}