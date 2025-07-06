import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const data = [
  {
    "id": 1,
    "title": "Choose No-Rush Delivery 5 times",
    "description": "Opt for no-rush shipping at checkout to reduce carbon emissions.",
    "progress": 100,
    "isCompleted": true
  },
  {
    "id": 2,
    "title": "Buy from Amazon Warehouse 5 times",
    "description": "Purchase a product from the Amazon Warehouse section to support reuse.",
    "progress": 60,
    "isCompleted": false
  },
  {
    "id": 3,
    "title": "Group 5 Orders Together",
    "description": "Consolidate your orders to reduce packaging waste.",
    "progress": 80,
    "isCompleted": false
  }
]



const MonthlyEcoQuest = () => {

    return(
        <div className="flex flex-col justify-between items-center h-[300px]">
            <h1 className="font-bold">Monthly Eco Quests</h1>
            {data.map((item) => {
                return (
                    <div key={item.id} className="border border-black-400 p-2 m-2 hover:bg-green-600 w-full rounded-lg">
                        <div className="flex justify-between font-bold">{item.title} <FaCheckCircle className={item.isCompleted ? "text-green-500" : "text-gray-400"} /></div>
                        <div className="flex justify-between text-xs">
                            <p >{item.description}</p>
                            <p>{item.progress}%</p>
                        </div>
                        
                    </div>
                );
            })}
        </div>
    );
};

export default MonthlyEcoQuest;