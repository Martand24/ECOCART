import React, { useState, useEffect } from "react";
import useCartStore from "../store/cartStore";
import { Link, useNavigate } from "react-router-dom";


const nonEcoProducts = [
  {
    id: "12321341",
    title:
      "Disposable Plastic Drinking Straws  a pack of 100 clear, BPA-free straws designed for convenience and reliability, 7.75-inch",
    price: 7.5,
    rating: 3,
    image: "/image1.png",
    ecoFriendly: false,
    CO2: 2.0,
  },
  {
    id: "49538094",
    title:
      "Single-Use Plastic Plates pack of 50 durable, lightweight plates for parties and events",
    price: 9.9,
    rating: 4,
    image: "/image2.png",
    ecoFriendly: false,
    CO2: 4.0,
  },
  {
    id: "49538094",
    title: "Plastic Water Bottles – 24 pack of 500 ml single-use water bottles",
    price: 11.5,
    rating: 4,
    image: "/image3.png",
    ecoFriendly: false,
    CO2: 10.0,
  },
  {
    id: "3254354345",
    title: "Disposable Coffee Cups pack of 50 with lids, 12 oz, to-go style",
    price: 14.9,
    rating: 4,
    image: "/image4.png",
    ecoFriendly: false,
    CO2: 6.0,
  },
  {
    id: "23445930",
    title:
      "Plastic Cutlery Set 100 piece pack (forks, knives, spoons), lightweight and convenient",
    price: 5.5,
    rating: 3,
    image: "/image5.png",
    ecoFriendly: false,
    CO2: 3.0,
  },
  {
    id: "958462",
    title:
      "Grocery Plastic Bags pack of 500, lightweight and reusable once or twice",
    price: 12.9,
    rating: 2,
    image: "/image6.png",
    ecoFriendly: false,
    CO2: 5.0,
  },
  {
    id: "90829332",
    title:
      "Single-Use Cotton Pads pack of 100, soft, non-reusable cosmetics pads",
    price: 4.5,
    rating: 3,
    image: "/image7.png",
    ecoFriendly: false,
    CO2: 1.5,
  },
  {
    id: "90829332",
    title: "Plastic Toothbrush pack of 5, non-biodegradable dental care",
    price: 6.9,
    rating: 4,
    image: "/image8.png",
    ecoFriendly: false,
    CO2: 1.0,
  },
  {
    id: "90829332",
    title: "Plastic Snack Bags 100 piece, single use, resealable",
    price: 7.9,
    rating: 3,
    image: "/image9.png",
    ecoFriendly: false,
    CO2: 2.0,
  },
  {
    id: "90829332",
    title: "Plastic Razor – pack of 10, disposable, lightweight",
    price: 8.5,
    rating: 2,
    image: "/image10.png",
    ecoFriendly: false,
    CO2: 1.5,
  },
];


const ecoProducts = [
  {
    id: "843800",
    title:
      "Biodegradable Paper Drinking Straws pack of 100, compostable, 7.75-inch",
    price: 8.9,
    rating: 4,
    image: "/image11.png",
    ecoFriendly: true,
    CO2: 0.08,
  },
  {
    id: "875615",
    title:
      "Compostable Paper Plates pack of 50, heavy-duty, plant-fiber material",
    price: 11.9,
    rating: 5,
    image: "/image12.png",
    ecoFriendly: true,
    CO2: 0.15,
  },
  {
    id: "875617",
    title: "Reusable Water Bottle 500 ml, BPA-free, stainless steel",
    price: 19.9,
    rating: 4,
    image: "/image13.png",
    ecoFriendly: true,
    CO2: 0.05,
  },
  {
    id: "9513254",
    title: "Compostable Coffee Cup pack of 50 with lids, 12 oz, plant-based",
    price: 16.9,
    rating: 4,
    image: "/image14.png",
    ecoFriendly: true,
    CO2: 0.18,
  },
  {
    id: "1001002",
    title: "Bamboo Cutlery Set reusable, lightweight, durable, 100% natural",
    price: 9.5,
    rating: 5,
    image: "/image15.png",
    ecoFriendly: true,
    CO2: 0.07,
  },
  {
    id: "1657495",
    title: "Compostable Produce Bags pack of 500, plant-starch material",
    price: 15.9,
    rating: 4,
    image: "/image16.png",
    ecoFriendly: true,
    CO2: 0.12,
  },
  {
    id: "1657495",
    title: "Organic Cotton Pads pack of 100, reusable, soft, eco-conscious",
    price: 7.9,
    rating: 5,
    image: "/image17.png",
    ecoFriendly: true,
    CO2: 0.09,
  },
  {
    id: "1657495",
    title: "Bamboo Toothbrush pack of 5, biodegradable handle, medium bristles",
    price: 9.9,
    rating: 4,
    image: "/image18.png",
    ecoFriendly: true,
    CO2: 0.06,
  },
  {
    id: "1625854",
    title: "Silicone Snack Bags reusable, food-safe, leak-proof, set of 100",
    price: 14.9,
    rating: 5,
    image: "/image19.png",
    ecoFriendly: true,
    CO2: 0.25,
  },
  {
    id: "1625957",
    title: "Safety Razor metal handle, reusable, eco-conscious alternative",
    price: 24.9,
    rating: 5,
    image: "/image20.png",
    ecoFriendly: true,
    CO2: 0.09,
  },
];


function getCO2Level(CO2) {
  if (CO2 < 0.5)
    return { label: "Low CO₂", color: "bg-green-200 text-green-800" };
  if (CO2 < 1.5)
    return { label: "Medium CO₂", color: "bg-yellow-200 text-yellow-800" };
  return { label: "High CO₂", color: "bg-red-200 text-red-800" };
}

function AnimatedBarGraph({ label, value1, value2, color1, color2, unit }) {
  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    setShowValues(false);
    setWidth1(0);
    setWidth2(0);

    const max = Math.max(value1, value2, 1);
    const targetWidth1 = Math.max(Math.round((value1 / max) * 100), 10);
    const targetWidth2 = Math.max(Math.round((value2 / max) * 100), 10);

    // Animate bars after a short delay for smoother effect
    const t1 = setTimeout(() => setWidth1(targetWidth1), 50);
    const t2 = setTimeout(() => setWidth2(targetWidth2), 150);

    // Show values after animation
    const t3 = setTimeout(() => setShowValues(true), 700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [value1, value2]);

  const minBarWidth = 40; // px
  const barHeight = 24;

  const diff = value1 - value2;
  const max = Math.max(value1, value2, 1);
  const percentDiff = max !== 0 ? Math.round((diff / max) * 100) : 0;

  return (
    <div className="mb-6">
      <div className="text-sm font-semibold mb-2">{label}</div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`relative rounded ${color1} transition-all duration-500`}
            style={{
              width: `${width1}%`,
              minWidth: minBarWidth,
              height: barHeight,
            }}
            title={value1 + " " + unit}
          />
          {showValues && (
            <span className="text-base text-gray-700 select-none min-w-[60px]">
              {value1} {unit}
            </span>
          )}
          <span className="text-xs text-gray-500 ml-2">Current</span>
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`relative rounded ${color2} transition-all duration-500`}
            style={{
              width: `${width2}%`,
              minWidth: minBarWidth,
              height: barHeight,
            }}
            title={value2 + " " + unit}
          />
          {showValues && (
            <span className="text-base text-gray-700 select-none min-w-[60px]">
              {value2} {unit}
            </span>
          )}
          <span className="text-xs text-gray-500 ml-2">Eco Alt</span>
        </div>
      </div>
      {showValues && value1 !== value2 && (
        <div className="text-xs mt-2 text-gray-600">
          Difference:{" "}
          <span className={diff > 0 ? "text-green-700" : "text-red-700"}>
            {Math.abs(diff).toFixed(2)} {unit} ({Math.abs(percentDiff)}%)
          </span>
        </div>
      )}
    </div>
  );
}

function Checkout() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const addToCart = useCartStore((state) => state.addToCart); 
  const navigate = useNavigate();

  const [modalProduct, setModalProduct] = useState(null);
  const [modalCompare, setModalCompare] = useState(null);
  const [roundUp, setRoundUp] = useState(false);
  const [smartPack, setSmartPack] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([false, false, false]);

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const roundedTotal = Math.ceil(total);
  const greenCauseAmount = roundUp ? (roundedTotal - total).toFixed(2) : "0.00";
  const totalCO2 = cart.reduce((sum, item) => sum + (item.CO2 || 0), 0);

  
  const options = [
    {
      label: "Shipped from the same warehouse",
      available: cart.length > 1,
      co2Saved: 0.2 * cart.length,
    },
    {
      label: "Packed together",
      available: cart.length > 1,
      co2Saved: 0.1 * cart.length,
    },
    {
      label: "Delivered slower but more efficiently",
      available: true,
      co2Saved: total > 50 ? 0.3 * cart.length : 0.1 * cart.length,
    },
  ];

 
  const totalSaved =
    smartPack && cart.length > 0
      ? options.reduce(
          (sum, opt, idx) =>
            sum + (selectedOptions[idx] && opt.available ? opt.co2Saved : 0),
          0
        )
      : 0;

  const handleOptionToggle = (idx) => {
    if (!smartPack) return;
    if (!options[idx].available) return;
    setSelectedOptions((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

 
  useEffect(() => {
    if (!smartPack || cart.length === 0)
      setSelectedOptions([false, false, false]);
  }, [smartPack, cart.length]);

  const handleProceed = () => {
    clearCart();
    navigate("/order-confirmation");
  };


  const getEcoAlternative = (item) => {
    
    const idx = nonEcoProducts.findIndex(
      (p) => p.id === item.id && p.title === item.title
    );
    if (idx !== -1 && ecoProducts[idx]) {
      return ecoProducts[idx];
    }
    
    return ecoProducts[0];
  };

  const handleSwapProduct = () => {
    if (modalCompare && modalProduct) {
      removeFromCart(modalCompare.id);
      addToCart(modalProduct);
      setModalProduct(null);
      setModalCompare(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {/* Smart Packaging Optimization */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-lg">
                Smart Packaging Optimization
              </div>
              <div className="text-gray-600 text-sm">
                EcoCart checks if your items can be:
              </div>
            </div>
            {/* Toggle Switch */}
            <button
              className={`w-12 h-6 flex items-center rounded-full transition-colors duration-200 ${
                smartPack && cart.length > 0 ? "bg-green-500" : "bg-gray-300"
              }`}
              onClick={() => cart.length > 0 && setSmartPack((v) => !v)}
              aria-label="Toggle Smart Packaging"
              disabled={cart.length === 0}
              style={{
                cursor: cart.length === 0 ? "not-allowed" : "pointer",
                opacity: cart.length === 0 ? 0.5 : 1,
              }}
            >
              <span
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                  smartPack && cart.length > 0
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <ul className="mt-2 ml-1 space-y-2">
            {options.map((opt, i) => (
              <li key={i} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="accent-green-600 mr-2"
                  checked={smartPack && selectedOptions[i]}
                  disabled={!smartPack || !opt.available}
                  onChange={() => handleOptionToggle(i)}
                  id={`smart-opt-${i}`}
                />
                <label
                  htmlFor={`smart-opt-${i}`}
                  className={
                    !opt.available
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }
                  style={{
                    cursor:
                      !smartPack || !opt.available ? "not-allowed" : "pointer",
                  }}
                >
                  {opt.label}
                  {smartPack && selectedOptions[i] && opt.available && (
                    <span className="ml-2 text-green-700 text-xs font-semibold">
                      (−{opt.co2Saved.toFixed(2)} kg CO₂)
                    </span>
                  )}
                </label>
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-500 mt-2">
            Suggests changes to{" "}
            <span className="font-semibold text-green-700">
              save packaging and CO₂
            </span>{" "}
            — without changing what you buy.
          </div>
          {smartPack && cart.length > 0 && (
            <div className="mt-2 text-green-700 font-semibold">
              Estimated CO₂ saved: {totalSaved.toFixed(2)} kg
            </div>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500">
            Your cart is empty.
            <div className="mt-4">
              <Link
                to="/"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Go Shopping
              </Link>
            </div>
          </div>
        ) : (
          <>
            <ul>
              {cart.map((item, idx) => {
                const co2Level = getCO2Level(item.CO2);
                const ecoAlt = !item.ecoFriendly
                  ? getEcoAlternative(item)
                  : null;
                return (
                  <li
                    key={item.id + idx}
                    className="flex flex-col gap-2 border-b py-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-contain rounded"
                        />
                        <div>
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-gray-600 text-sm">
                            ${item.price}
                          </div>
                          <div className="text-yellow-500 text-xs">
                            {"⭐".repeat(item.rating || 0)}
                          </div>
                          {/* CO2 Level Indicator */}
                          <div
                            className={`mt-2 px-3 py-1 rounded-full text-xs font-bold inline-block ${co2Level.color}`}
                          >
                            {co2Level.label} ({item.CO2} kg CO₂)
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                    {/* What if section for non-eco-friendly products */}
                    {!item.ecoFriendly && ecoAlt && (
                      <div className="bg-green-50 border border-green-200 rounded p-3 mt-2 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-green-700 mb-1">
                            What if you tried an eco-friendly alternative?
                          </div>
                          <div className="flex items-center gap-3">
                            <img
                              src={ecoAlt.image}
                              alt={ecoAlt.title}
                              className="w-12 h-12 object-contain rounded"
                            />
                            <span className="text-sm font-medium">
                              {ecoAlt.title}
                            </span>
                          </div>
                        </div>
                        <button
                          className="ml-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                          onClick={() => {
                            setModalProduct(ecoAlt);
                            setModalCompare(item);
                          }}
                        >
                          Try Eco-Friendly Alternative
                        </button>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            {/* Round up */}
            <div className="flex items-center mt-6 mb-2">
              <input
                id="roundup"
                type="checkbox"
                checked={roundUp}
                onChange={() => setRoundUp((v) => !v)}
                className="mr-2 accent-green-600"
              />
              <label htmlFor="roundup" className="text-sm">
                Round up my total to the nearest dollar and donate $
                {greenCauseAmount} to a green cause 🌱
              </label>
            </div>
            {/* Total CO2 */}
            <div className="mb-2 text-green-700 font-semibold">
              Total CO₂ for your cart: {totalCO2.toFixed(2)} kg
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="text-xl font-bold">
                Total: ${roundUp ? roundedTotal.toFixed(2) : total.toFixed(2)}
              </div>
              <button
                onClick={clearCart}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Clear Cart
              </button>
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={handleProceed}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded shadow"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      {/* eco-friendly alternative */}
      {modalProduct && modalCompare && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/10 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div>
                <img
                  src={modalCompare.image}
                  alt={modalCompare.title}
                  className="w-20 h-20 object-contain rounded border"
                  title="Current Product"
                />
                <div className="text-xs mt-1 text-gray-500">In Cart</div>
              </div>
              <span className="text-3xl font-bold text-green-600">→</span>
              <div>
                <img
                  src={modalProduct.image}
                  alt={modalProduct.title}
                  className="w-20 h-20 object-contain rounded border"
                  title="Eco Alternative"
                />
                <div className="text-xs mt-1 text-green-700">Eco Alt</div>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">{modalProduct.title}</h3>
            <p className="mb-4 text-green-700 font-semibold">
              Eco-Friendly Choice!
            </p>
            <AnimatedBarGraph
              label="CO₂ Emissions"
              value1={modalCompare.CO2}
              value2={modalProduct.CO2}
              color1="bg-red-400"
              color2="bg-green-400"
              unit="kg"
            />
            <AnimatedBarGraph
              label="Price"
              value1={modalCompare.price}
              value2={modalProduct.price}
              color1="bg-yellow-400"
              color2="bg-green-400"
              unit="$"
            />
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleSwapProduct}
              >
                Swap with Eco Alternative
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => {
                  setModalProduct(null);
                  setModalCompare(null);
                }}
              >
                Close
              </button>
              <Link
                to="/ecocart"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded shadow"
                onClick={() => {
                  setModalProduct(null);
                  setModalCompare(null);
                }}
              >
                View All Eco Products
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Checkout;
