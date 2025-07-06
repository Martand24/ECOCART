import React from "react";


const dashboardStats = [
  { id: 1, label: "CO₂ Saved", value: "14.2 kg", key: "co2Saved" },
  { id: 2, label: "Plastic Saved", value: "9 units", key: "plasticSaved" },
  { id: 3, label: "Trees Equivalent", value: "1.1", key: "treesEquivalent" },
  { id: 4, label: "Eco Purchases", value: "18", key: "ecoPurchases" },
  { id: 5, label: "Money Saved", value: "$59", key: "moneySaved" },
  { id: 6, label: "Eco Level", value: "Green Guardian", key: "ecoLevel" },
];

const Stats = () => {
    return(
        <div className="flex flex-wrap justify-around items-center w-full">
            {dashboardStats.map((item) => {
                return(
                    <div key={item.id} className="flex-1 border border-black-400 rounded-lg font-bold text-xl flex flex-col justify-between items-center m-2 p-2">
                        <div>
                            {item.label}
                        </div>
                        <div>
                            {item.value}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Stats;