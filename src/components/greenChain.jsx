import React from "react";
import Leaderboard from "./Leaderboard";
import MonthlyEcoQuest from "./MonthlyEcoQuest";
import MonthlyGraph from "./MonthlyGraph";
import Stats from "./Stats";


const GreenChain = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className = "text-[35px] font-bold mt-4">Green - Chain - DashBoard</h1>
            <div className="w-full">
                <Stats />
            </div>
            <div className="flex gap-x-4 justify-center items-center flex-wrap height ">
                <div className="flex-1 m-4  b border border-gray-400 rounded-lg p-4 h-[350px]">
                    <MonthlyGraph />
                </div>
                <div className="flex-1 m-4  border border-gray-400 rounded-lg p-4 h-[350px]">
                     <div className="flex flex-col justify-between">
                        <MonthlyEcoQuest />
                     </div>
                    
                </div>
                
                <div className="w-full m-4 p-4 border border-gray-400 rounded-lg">
                    <Leaderboard />
                </div>
                
            </div>
           
            
        </div>
    );
};

export default GreenChain;