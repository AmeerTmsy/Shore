import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#1c2430] text-gray-300 px-6 md:px-16 py-12">

      {/* 🔝 TOP SECTION */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* 🟠 BRAND + SUBSCRIBE */}
        <div>
          <h2 className="text-xl font-normal text-white mb-4 tracking-wide">
            Shore <span className="font-extralight tracking-normal">| Step into Style</span>
          </h2>
          <div className="border border-gray-500 flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent p-2 flex-1 outline-none text-sm"
            />
          </div>
          <button className="cursor-pointer mt-3 text-sm border-b border-gray-400 hover:border-white hover:text-white transition-colors duration-300 ease-in-out">SUBSCRIBE</button>
        </div>
        <div className="text-sm space-y-4">
          <div>
            <p className="font-semibold text-white">KOCHI</p>
            <p className="font-light">MG Road, 682001</p>
            <p className="font-light">+91 98765 43210</p>
          </div>
          <div>
            <p className="font-semibold text-white">BANGALORE</p>
            <p className="font-light">Indiranagar, 560038</p>
            <p className="font-light">+91 91234 56789</p>
          </div>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold text-white mb-2">ABOUT</p>
          <p onClick={()=> navigate('/about')} className="font-light cursor-pointer">About Us</p>
          <p onClick={()=> navigate('/careers')} className="font-light cursor-pointer">Careers</p>
          <p onClick={()=> navigate('/blog')} className="font-light cursor-pointer">Blog</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold text-white mb-2">SUPPORT</p>
          <p className="font-light cursor-pointer">FAQs</p>
          <p className="font-light cursor-pointer">Shipping & Returns</p>
          <p className="font-light cursor-pointer">Contact</p>
        </div>
      </div>

      <div className="border-t border-gray-700 my-8" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex gap-4 items-center">
          <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
          <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M13.5 21.888C18.311 21.164 22 17.013 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.013 3.689 9.165 8.5 9.888V15H9a1.5 1.5 0 0 1 0-3h1.5v-2A3.5 3.5 0 0 1 14 6.5h.5a1.5 1.5 0 0 1 0 3H14a.5.5 0 0 0-.5.5v2H15a1.5 1.5 0 0 1 0 3h-1.5z" /></g></svg>
          <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><g fill="none"><g clipPath="url(#SVGG1Ot4cAD)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" /></g><defs><clipPath id="SVGG1Ot4cAD"><path fill="#fff" d="M0 0h14v14H0z" /></clipPath></defs></g></svg>
        </div>
        <p>
          © 2026 ShoeStore |{" "}
          <Link to="/terms">Terms</Link> |{" "}
          <Link to="/privacy">Privacy</Link> |{" "}
          <Link to="/accessibility">Accessibility</Link>
        </p>
      </div>
    </footer>
  );
}