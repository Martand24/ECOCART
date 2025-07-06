import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore"; 
import { useEffect, useRef, useState } from "react";

function Header() {
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
    <div className="w-screen max-w-full overflow-hidden h-[60px] flex items-center bg-[#131921] sticky top-0 z-[100] px-4 box-border ">
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
        <div className="bg-[#131921] text-white px-4 py-2 rounded shadow-lg text-center font-bold">
          Item added to cart!
        </div>
      </div>
      <Link to="/">
        <img
          className="w-[100px] object-contain mr-4 mt-[18px] shrink-0"
          src="/amazon_logo.png"
          alt="amazon logo"
        />
      </Link>

      <div className="flex flex-1 items-center rounded-md mx-2">
        <input
          className="h-[22px] p-2 bg-white border-none w-full "
          type="text"
        />
        <img
          src="/search_icon.png"
          className="p-[5px] h-[22px] bg-[#cd9042]  shrink-0"
          alt="search"
        />
      </div>

      <div className="flex justify-evenly ml-4 whitespace-nowrap overflow-hidden">
        <Link to="/green-chain" className="no-underline text-white mx-2">
          <div className="flex flex-col hover:shadow-[0_0_0_0.5px_white] px-2">
            <span className="text-[10px]">Your</span>
            <span className="text-[13px] font-extrabold">Green Chain</span>
          </div>
        </Link>

        <Link to="/dashboard" className="no-underline text-white mx-2">
          <div className="flex flex-col hover:shadow-[0_0_0_0.5px_white] px-2">
            <span className="text-[10px]">Your</span>
            <span className="text-[13px] font-extrabold">Dashboard</span>
          </div>
        </Link>

        <Link
          to="/checkout"
          onClick={handleLinkClick}
          className="no-underline text-white mx-2"
        >
          <div className="flex items-center hover:shadow-[0_0_0_0.5px_white] px-2">
            <img
              src="/cart_icon.png"
              className="p-[5px] h-[29px] bg-[#131921] shrink-0"
              alt="cart"
            />
            <span className="mx-[10px] text-[13px] font-extrabold">
              {cartCount}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
