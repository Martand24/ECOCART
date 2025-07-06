import React, { useEffect, useState } from "react";

// Dummy data
const CO2 = 14.2;
const max = 60;

function getColor(percentage) {
  if (percentage < 25) return "stroke-red-500";
  if (percentage < 50) return "stroke-yellow-500";
  return "stroke-green-500";
}

function ImpactCard() {
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // Handle cases where CO2 > max
  const percent = Math.min((CO2 / max) * 100, 100);
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  // Animate from 0 to actual percent on page load
  const [animate, setAnimate] = useState(0);
  useEffect(() => {
    // Animate in 500ms after component mounts
    setTimeout(() => setAnimate(percent), 500);
  }, []);

  const animatedDashoffset = circumference - (animate / 100) * circumference;

  return (
    <div className="p-6 w-60 bg-gray-50 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <svg height={radius * 2} width={radius * 2}>
          {/* Background circle */}
          <circle
            stroke="#e5e7eb"
            fill="none"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Animated progress circle */}
          <circle
            stroke="currentColor"
            className={getColor(percent)}
            fill="none"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={circumference}
            strokeDashoffset={animatedDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${radius} ${radius})`}
            style={{ transition: "stroke-dashoffset 1s ease-out" }}
          />
          {/* Text in center */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="font-semibold fill-gray-900"
          >
            {CO2} kg
          </text>
        </svg>

        <p className="text-gray-500 mt-4">
          Total CO₂ Saved
        </p>
      </div>
    </div>
  );
}

export default ImpactCard;
