import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function Productbutton({ title, image, id, price, rating, badge_id }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const handleAddToCart = () => {
    addToCart({ id, title, image, price, rating, badge_id });
    
  };

  return (
    <div className="flex flex-col items-center justify-end m-2 p-5 w-full max-w-[300px] min-w-[150px] max-h-[450px] bg-white z-10 shadow-md rounded-md">
      <div className="h-[100px] mb-4">
        <p className="text-sm font-medium">{title}</p>
        <div className="mt-1">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className="w-full max-h-[200px] object-contain mb-4"
      />
      <button
        onClick={handleAddToCart}
        className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded shadow"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Productbutton;