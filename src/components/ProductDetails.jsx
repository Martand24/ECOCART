import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCartStore from "../store/cartStore";


const mockProducts = [
  {
    id: "843800",
    title:
      "Biodegradable Paper Drinking Straws pack of 100, compostable, 7.75-inch",
    image: "/image11.png",
    price: 8.9,
    originalPrice: 12.99,
    rating: 4,
    ecoScore: 9.2,
    ecoFriendly: true,
    CO2: 0.08, // Updated: Very low for compostable paper straws
    targetStats: [
      { label: "Reusability", value: 85 },
      { label: "Recyclability", value: 95 },
      { label: "Resale", value: 60 },
    ],
  },
  {
    id: "875615",
    title:
      "Compostable Paper Plates pack of 50, heavy-duty, plant-fiber material",
    image: "/image12.png",
    price: 11.9,
    originalPrice: 15.99,
    rating: 5,
    ecoScore: 8.7,
    ecoFriendly: true,
    CO2: 0.15, // Updated: Low for compostable plates
    targetStats: [
      { label: "Reusability", value: 95 },
      { label: "Recyclability", value: 80 },
      { label: "Resale", value: 75 },
    ],
  },
  {
    id: "875617",
    title: "Reusable Water Bottle 500 ml, BPA-free, stainless steel",
    image: "/image13.png",
    price: 19.9,
    originalPrice: 24.99,
    rating: 4,
    ecoScore: 8.1,
    ecoFriendly: true,
    CO2: 0.05, // Updated: Low, amortized over many uses
    targetStats: [
      { label: "Reusability", value: 60 },
      { label: "Recyclability", value: 90 },
      { label: "Resale", value: 40 },
    ],
  },
  {
    id: "9513254",
    title: "Compostable Coffee Cup pack of 50 with lids, 12 oz, plant-based",
    image: "/image14.png",
    price: 16.9,
    originalPrice: 22.99,
    rating: 4,
    ecoScore: 7.5,
    ecoFriendly: true,
    CO2: 0.18, // Updated: Low for compostable cups
    targetStats: [
      { label: "Reusability", value: 80 },
      { label: "Recyclability", value: 70 },
      { label: "Resale", value: 65 },
    ],
  },
  {
    id: "1001002",
    title: "Bamboo Cutlery Set reusable, lightweight, durable, 100% natural",
    image: "/image15.png",
    price: 9.5,
    originalPrice: 13.99,
    rating: 5,
    ecoScore: 8.9,
    ecoFriendly: true,
    CO2: 0.07, // Updated: Very low for bamboo, reusable
    targetStats: [
      { label: "Reusability", value: 90 },
      { label: "Recyclability", value: 85 },
      { label: "Resale", value: 60 },
    ],
  },
  {
    id: "1657495",
    title: "Compostable Produce Bags pack of 500, plant-starch material",
    image: "/image16.png",
    price: 15.9,
    originalPrice: 19.99,
    rating: 4,
    ecoScore: 8.3,
    ecoFriendly: true,
    CO2: 0.12, // Updated: Low for compostable bags
    targetStats: [
      { label: "Reusability", value: 88 },
      { label: "Recyclability", value: 92 },
      { label: "Resale", value: 55 },
    ],
  },
  {
    id: "1657496",
    title: "Organic Cotton Pads pack of 100, reusable, soft, eco-conscious",
    image: "/image17.png",
    price: 7.9,
    originalPrice: 11.99,
    rating: 5,
    ecoScore: 8.5,
    ecoFriendly: true,
    CO2: 0.09, // Updated: Low for organic, reusable pads
    targetStats: [
      { label: "Reusability", value: 90 },
      { label: "Recyclability", value: 95 },
      { label: "Resale", value: 50 },
    ],
  },
  {
    id: "1657497",
    title: "Bamboo Toothbrush pack of 5, biodegradable handle, medium bristles",
    image: "/image18.png",
    price: 9.9,
    originalPrice: 13.99,
    rating: 4,
    ecoScore: 8.0,
    ecoFriendly: true,
    CO2: 0.06, // Updated: Very low for bamboo, biodegradable
    targetStats: [
      { label: "Reusability", value: 85 },
      { label: "Recyclability", value: 88 },
      { label: "Resale", value: 50 },
    ],
  },
  {
    id: "1625854",
    title: "Silicone Snack Bags reusable, food-safe, leak-proof, set of 100",
    image: "/image19.png",
    price: 14.9,
    originalPrice: 19.99,
    rating: 5,
    ecoScore: 8.6,
    ecoFriendly: true,
    CO2: 0.25, // Updated: Low, reusable for years
    targetStats: [
      { label: "Reusability", value: 70 },
      { label: "Recyclability", value: 98 },
      { label: "Resale", value: 30 },
    ],
  },
  {
    id: "1625957",
    title: "Safety Razor metal handle, reusable, eco-conscious alternative",
    image: "/image20.png",
    price: 24.9,
    originalPrice: 29.99,
    rating: 5,
    ecoScore: 8.2,
    ecoFriendly: true,
    CO2: 0.09, // Updated: Low, reusable for years
    targetStats: [
      { label: "Reusability", value: 95 },
      { label: "Recyclability", value: 90 },
      { label: "Resale", value: 60 },
    ],
  },
];



function ProductDetails() {
  const { id } = useParams();

  
  const product = mockProducts.find((p) => p.id === id) || mockProducts[0];

  const [animatedScore, setAnimatedScore] = useState(0);
  const [animatedWidths, setAnimatedWidths] = useState(
    product.targetStats.map(() => 0)
  );

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
   
    let start = 0;
    const duration = 1000;
    const increment = product.ecoScore / (duration / 20);

    const scoreInterval = setInterval(() => {
      start += increment;
      if (start >= product.ecoScore) {
        setAnimatedScore(product.ecoScore);
        clearInterval(scoreInterval);
      } else {
        setAnimatedScore(parseFloat(start.toFixed(1)));
      }
    }, 20);

    
    setTimeout(() => {
      setAnimatedWidths(product.targetStats.map((stat) => stat.value));
    }, 200);

    return () => clearInterval(scoreInterval);
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="flex flex-wrap justify-center items-start gap-12 p-8 bg-gray-100 min-h-screen">
      {/* Image + Score */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <div className="w-80 h-80 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain max-h-full max-w-full rounded"
          />
        </div>
        <div className="mt-4 text-xl font-semibold text-green-600">
          Eco Score: <span>{animatedScore.toFixed(1)}/10</span>
        </div>
        <div className="mt-2 text-sm text-gray-700">
          <span className="font-semibold">CO₂:</span> {product.CO2} kg
        </div>
        <div className="mt-1 text-xs text-green-700">
          {product.ecoFriendly ? "Eco-Friendly" : "Not Eco-Friendly"}
        </div>
      </div>

      {/* Description */}
      <div className="max-w-xl bg-white rounded-lg shadow-md p-6 w-full sm:w-[500px]">
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-yellow-500 mb-3">
          {"⭐".repeat(product.rating)} (63 reviews)
        </p>

        <div className="text-lg mb-4">
          <span className="text-red-500 font-bold mr-2">${product.price}</span>
          <span className="line-through text-gray-500">
            ${product.originalPrice}
          </span>
          <span className="ml-2 text-green-600 text-sm">(30% off)</span>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          This is a mock description for {product.title}. It is eco-friendly and
          sustainable.
        </p>

        {/* Animated Eco Stats */}
        <div className="w-full bg-green-50 p-4 rounded-md mb-6 shadow-sm">
          {product.targetStats.map(({ label, value }, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center mb-1">
                <div className="w-5 h-5 rounded-full bg-green-500 text-white text-xs flex items-center justify-center mr-2">
                  {label[0]}
                </div>
                <span className="text-gray-700 text-sm">{label}</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                <div
                  className="bg-green-500 h-2 rounded transition-all duration-1000 ease-out"
                  style={{ width: `${animatedWidths[index]}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-green-600 text-sm mb-4">Available: In Stock</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductDetails;
