import ImpactCard from "./dashboard/ImpactCard";
import Goalbar from "./dashboard/Goalbar";
import MonthlyGraph from "./MonthlyGraph";

const personalCO2Data = [
  { month: "Jan", co2: 2.5 },
  { month: "Feb", co2: 3.2 },
  { month: "Mar", co2: 4.1 },
  { month: "Apr", co2: 5.0 },
  { month: "May", co2: 4.7 },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center p-10 bg-green-200">
      <div className="flex flex-row items-stretch w-[80vw] gap-8">
        {/* Left: Impact and Goal side by side */}
        <div className="flex flex-col flex-1 bg-white rounded-lg p-6">
          <h2 className="text-green-600 font-bold mt-2 mb-4 text-center">
            Your impact this month
          </h2>
          <div className="flex flex-row gap-6 flex-1 h-full items-stretch">
            <div className="flex-1 flex items-stretch">
              <ImpactCard className="w-full h-full" />
            </div>
            <div className="flex-1 flex items-stretch">
              <Goalbar className="w-full h-full" />
            </div>
          </div>
        </div>
        {/* Right: Monthly Graph */}
        <div className="flex flex-col items-center flex-1 bg-white rounded-lg p-6">
          <h3 className="font-bold text-green-600 mb-2 text-center">
            Your Personal Carbon Savings
          </h3>
          <div className="w-full h-full min-h-[300px] flex-1 flex items-center">
            <MonthlyGraph data={personalCO2Data} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white mt-10 py-5 rounded-lg w-[40vw]">
        <h3 className="font-bold text-green-600">Eco Achievements</h3>
        <div className="flex flex-wrap mt-4 gap-4">
          <p className="text-sm text-green-800 font-semibold bg-green-300 rounded-full px-2 py-1">
            Plastic Free Week
          </p>
          <p className="text-sm text-blue-800 font-semibold bg-blue-300 rounded-full px-2 py-1">
            Offset Hero
          </p>
          <p className="text-sm text-yellow-800 font-semibold bg-yellow-300 rounded-full px-2 py-1">
            Zero Waste Day
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
