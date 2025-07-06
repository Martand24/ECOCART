import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label
} from 'recharts';

const data = [
  { month: 'Jan', co2: 10 },
  { month: 'Feb', co2: 12 },
  { month: 'Mar', co2: 13 },
  { month: 'Apr', co2: 15.5 },
  { month: 'May', co2: 14.5 },
];

const MonthlyGraph = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        
        <XAxis dataKey="month">
          <Label value="Month" offset={-10} position="insideBottom" />
        </XAxis>
        
        <YAxis>
          <Label 
            value="CO₂ Saved (kg)" 
            angle={-90} 
            position="insideLeft" 
            
            style={{ textAnchor: 'middle' }}
          />
        </YAxis>

        <Tooltip />
        <Line type="monotone" dataKey="co2" stroke="#2ecc71" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MonthlyGraph;
