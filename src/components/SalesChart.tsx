import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";

interface ChartProps {
  data: { date: string; value: number }[];
  title: string;
  color: string;
}

const SalesChart: React.FC<ChartProps> = ({ data = [], title, color }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>Loading {title}...</div>; // Prevent rendering errors
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "5px" }} />
          <Legend />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2}>
            {/* Add labels to show values on the chart */}
            <LabelList dataKey="value" position="top" style={{ fontSize: 12, fill: "#555" }} />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
