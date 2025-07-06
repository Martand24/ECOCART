import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";
import useCartStore from "../store/cartStore"; 

function GreenHeader() {
  const cartCount = useCartStore((state) => state.cart.length); 
  const cart = useCartStore((state) => state.cart);
  const [showCartNotif, setShowCartNotif] = useState(false);
  const prevCartLen = useRef(cart.length);

  useEffect(() => {
    if (cart.length > prevCartLen.current) {
      setShowCartNotif(true);
      const timer = setTimeout(() => setShowCartNotif(false), 2000);
      return () => clearTimeout(timer);
    }
    prevCartLen.current = cart.length;
  }, [cart.length]);

  const handleLinkClick = () => {
    window.scrollTo(0, 0, { behavior: "instant" });
  };

  return (
    <div className="h-14 flex items-center bg-[#28893c] sticky top-0 z-50 px-4 ">
      {/* Notification at the bottom */}
      <div
        className={`fixed bottom-6 right-6 z-[100] transition-all duration-300 ${
          showCartNotif
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          minWidth: "180px",
        }}
      >
        <div className="bg-green-600 text-white px-4 py-2 rounded shadow-lg text-center font-bold">
          Item added to cart!
        </div>
      </div>
      {/* Logo */}
      <Link to="/">
        <img
          src="/amazon_logo.png"
          alt="amazon"
          className="w-24 mt-2 object-contain"
        />
      </Link>

      {/* Search */}
      <div className="flex flex-1 mx-4 items-center bg-white rounded overflow-hidden">
        <input
          type="text"
          className="flex-1 px-3 py-1 outline-none text-black"
          placeholder="Search products"
        />
        <div className="bg-yellow-500 px-2 py-1 flex items-center">
          <Search size={20} className="text-black" />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex space-x-6 text-white text-sm font-semibold">
        <Link to="/green-chain" className="hover:underline">
          <div>
            <p className="text-xs">Your</p>
            <p className="font-bold">Green Chain</p>
          </div>
        </Link>

        <Link to="/dashboard" className="hover:underline">
          <div>
            <p className="text-xs">Your</p>
            <p className="font-bold">Dashboard</p>
          </div>
        </Link>

        <Link
          to="/checkout"
          onClick={handleLinkClick}
          className="flex items-center space-x-1"
        >
          <ShoppingCart className="text-white" />
          <span className="font-bold">{cartCount}</span>
        </Link>
      </div>
    </div>
  );
}

export default GreenHeader;
