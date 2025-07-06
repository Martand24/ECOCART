import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function getCO2Level(CO2) {
  if (CO2 < 0.5)
    return { label: "Low CO₂", color: "bg-green-200 text-green-800" };
  if (CO2 < 1.5)
    return { label: "Medium CO₂", color: "bg-yellow-200 text-yellow-800" };
  return { label: "High CO₂", color: "bg-red-200 text-red-800" };
}

function GreenProduct({ title, image, id, price, rating, ecoFriendly, CO2 }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const co2Level = getCO2Level(CO2);

  return (
    <div className="flex flex-col justify-between items-center m-3 p-4 w-[270px] h-[480px] bg-white shadow-md rounded-lg transition-transform hover:scale-105">
      <div className="text-xs font-semibold text-green-600">BESTSELLER</div>

      <img
        src={image}
        alt={title}
        className="max-h-[200px] w-full object-contain my-3"
      />

      <div className="text-center text-sm h-[72px] overflow-hidden mb-2">
        <p className="font-medium">{title}</p>
      </div>

      <div className="flex items-center gap-1 text-base font-semibold mb-1">
        <small>$</small>
        <strong>{price}</strong>
      </div>

      <div className="flex justify-center mb-2">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
      </div>

      {/* CO2 Level Indicator */}
      <div
        className={`mb-2 px-3 py-1 rounded-full text-xs font-bold ${co2Level.color}`}
      >
        {co2Level.label} ({CO2} kg CO₂)
      </div>

      <button
        onClick={() =>
          addToCart({ id, title, image, price, rating, ecoFriendly, CO2 })
        }
        className="bg-[#febd69] text-black px-6 py-2 rounded shadow hover:bg-[#f9c989] font-bold"
      >
        Add to Cart
      </button>

      {ecoFriendly && (
        <Link
          to={`/product/${id}`}
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-semibold"
        >
          Check My Score
        </Link>
      )}
    </div>
  );
}

export default GreenProduct;