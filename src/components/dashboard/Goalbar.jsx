import React, { useState, useEffect } from "react";

// Dummy data
const initialGoal = 20;
const initialWeight = 4; // User exceeded the initial goal (20)
const levelnames = ["no one","someone","better one", "conscious consumer", "goat"];
function MonthlyProgress() {
  const [level, setLevel] = useState(1);
  const [goal, setGoal] = useState(initialGoal);
  const [currentWeight, setCurrentWeight] = useState(initialWeight);
  const [percent, setPercent] = useState((currentWeight / goal) * 100);

  useEffect(() => {
    if (currentWeight >= goal) {
      // User crossed the goal
      setLevel((prev) => prev + 1);
      setGoal((prev) => prev + 20);
      setCurrentWeight(0);
    }
  }, [currentWeight, goal]);

  return (
    <div className="p-6 w-60 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">
        Monthly Goal: {goal} kg
      </h2>
      <div className="flex flex-col">
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-green-600 h-4 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.min(percent, 100)}%` }}
          ></div>
        </div>
        <p className="text-gray-500">
          {currentWeight}/{goal} kg
        </p>
                <button
          onClick={() => {
            // Simulating adding 5kg to current
            const newWeight = currentWeight + 5;
            setCurrentWeight(newWeight);
            setPercent((newWeight / goal) * 100);
          }}
          className="mt-4 p-2 bg-gray-900 text-gray-50 rounded-md"
        >
          Simulate +5kg
        </button>
        <h3 className="font-semibold text-green-600 mt-5 text-center">
          Eco Level: {level}
        </h3>
        <h5 className="text-center">{levelnames[level-1]}</h5>
      </div>
    </div>
  );
}

export default MonthlyProgress;
