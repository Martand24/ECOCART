import React, { useState } from "react";
import { Link } from "react-router-dom";
import MonthlyEcoQuest from "./MonthlyEcoQuest";

const rewardsList = [
  { name: "Basil Seeds", type: "seed", icon: "🌱", claimed: false },
  { name: "Sunflower Seeds", type: "seed", icon: "🌻", claimed: false },
  { name: "Tomato Seeds", type: "seed", icon: "🍅", claimed: false },
  { name: "Marigold Seeds", type: "seed", icon: "🌼", claimed: false },
];

const GreenNavbar = () => {
  const [showRewards, setShowRewards] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [progressPercent, setProgressPercent] = useState(80); 
  const [showEcoQuest, setShowEcoQuest] = useState(false);

  
  const handleCompleteQuest = () => {
    setProgressPercent(100);
    setShowEcoQuest(false);
  };

  const handleClaimReward = () => {
    setClaimed(true);
  };

  return (
    <div className="bg-[#232f3e] text-white font-semibold text-sm">
      {/* Navbar Links and Rewards Bar Side by Side */}
      <div className="flex flex-row items-center justify-between px-5 h-12">
        {/* Navbar Links */}
        <ul className="flex flex-wrap items-center gap-5 overflow-x-auto h-10">
          <li>
            <Link to="/ecocart" className="text-[#14b451] hover:text-[#FF9900]">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-[#FF9900]">
              Today's Deals
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FF9900]">
              Amazon miniTV
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FF9900]">
              Amazon Pay
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FF9900]">
              Personal Care
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FF9900]">
              Bamboo
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FF9900]">
              Home & Kitchen
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FF9900]">
              Gift Cards
            </a>
          </li>
          <li>
            <Link to="/about" className="text-[#14b451] hover:text-[#FF9900]">
              About
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-[#FF9900]">
              More
            </a>
          </li>
        </ul>
        {/* Rewards Progress Bar & Menu on the right */}
        <div className="flex items-center gap-2 ml-8">
          <span className="text-xs text-[#14b451] font-bold">
            Reward Progress
          </span>
          <div className="relative w-48 h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-4 bg-gradient-to-r from-[#14b451] to-[#FF9900] rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
            {progressPercent >= 100 && !claimed && (
              <button
                className="absolute right-0 top-0 h-4 px-2 text-xs bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-300"
                onClick={handleClaimReward}
              >
                Claim!
              </button>
            )}
            {progressPercent >= 100 && claimed && (
              <span className="absolute right-0 top-0 h-4 px-2 text-xs bg-green-400 text-black rounded-full font-bold">
                Claimed
              </span>
            )}
          </div>
          <span className="text-xs ml-2">{progressPercent}%</span>
          <button
            className="ml-2 px-3 py-1 bg-[#14b451] text-white rounded hover:bg-[#FF9900] text-xs"
            onClick={() => setShowRewards(true)}
          >
            Rewards
          </button>
          <button
            className="ml-2 px-3 py-1 bg-[#FF9900] text-white rounded hover:bg-[#14b451] text-xs"
            onClick={() => setShowEcoQuest(true)}
          >
            EcoQuests
          </button>
        </div>
      </div>
      {/* Rewards Popup */}
      {showRewards && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-6 min-w-[320px] max-w-xs text-center">
            <h2 className="text-lg font-bold text-[#14b451] mb-2">
              Available Rewards
            </h2>
            <p className="text-xs text-gray-600 mb-4">
              Complete{" "}
              <span className="font-semibold text-[#14b451]">EcoQuests</span> to
              earn and claim seed rewards!
            </p>
            <ul className="mb-4">
              {rewardsList.map((reward, idx) => (
                <li
                  key={reward.name}
                  className="mb-2 flex items-center justify-between px-2"
                >
                  <span className="flex items-center gap-2 text-gray-800">
                    <span className="text-xl">{reward.icon}</span>
                    {reward.name}
                  </span>
                  <span
                    className={`ml-2 text-xs font-semibold ${
                      reward.claimed ? "text-green-600" : "text-yellow-600"
                    }`}
                  >
                    {reward.claimed ? "Claimed" : "Available"}
                  </span>
                </li>
              ))}
              {progressPercent >= 100 && !claimed && (
                <li className="mt-2">
                  <button
                    className="bg-yellow-400 text-black px-3 py-1 rounded font-bold hover:bg-yellow-300"
                    onClick={handleClaimReward}
                  >
                    Claim New Seed Reward!
                  </button>
                </li>
              )}
              {progressPercent >= 100 && claimed && (
                <li className="mt-2 text-green-600 font-bold">
                  Seed Reward Claimed!
                </li>
              )}
            </ul>
            <button
              className="bg-[#14b451] text-white px-4 py-1 rounded hover:bg-[#FF9900]"
              onClick={() => setShowRewards(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* EcoQuest Popup */}
      {showEcoQuest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-6 min-w-[350px] max-w-md text-center">
            <h2 className="text-lg font-bold text-[#14b451] mb-2">
              Monthly Eco Quests
            </h2>
            <div className="text-black">
              <MonthlyEcoQuest />
            </div>
            <button
              className="mt-4 bg-[#14b451] text-white px-4 py-1 rounded hover:bg-[#FF9900]"
              onClick={handleCompleteQuest}
            >
              Mark Quest as Completed
            </button>
            <button
              className="mt-2 ml-2 bg-gray-300 text-black px-4 py-1 rounded hover:bg-gray-400"
              onClick={() => setShowEcoQuest(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}  

export default GreenNavbar;
