import React from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react"; 

const Navbar = () => {
  return (
    <div className="bg-[#232f3e] text-white flex justify-between items-center px-5 py-[5px] h-10 text-sm font-bold">
      <div className="flex items-center">
        <ul className="list-none flex mx-2 px-2 flex-wrap">
          {[
            "All",
            "Fresh",
            "Today's Deals",
            "Buy Again",
            "Electronics",
            "Amazon Pay",
            "Home & Kitchen",
            "Amazon miniTV",
            "Sell",
            "Gift cards",
            "Health, Household & Personal Care",
          ].map((item, idx) => (
            <li key={idx} className="mr-5 whitespace-nowrap">
              <a href="#" className="hover:text-[#FF9900]">
                {item}
              </a>
            </li>
          ))}

          {/* EcoCart CTA */}
          <div className="relative group ml-4">
            <Link to="/ecocart" className="no-underline">
              <button className="flex items-center bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded-lg animate-pulse transition">
                <Leaf className="w-4 h-4 mr-1" />
                EcoCart
                <span className="ml-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-[2px] rounded-full">
                  NEW
                </span>
              </button>
            </Link>

            {/* Tooltip on hover */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-black text-xs px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10 w-max">
              Discover a greener way to shop 🌱
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
