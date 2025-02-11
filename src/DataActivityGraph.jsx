import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./styles.css"; 

const data = [
  {
    name: "Monday",
    GitHub: 12,
    VSCode: 6,
    Deployment: 2,
    Browsing: 5,
    Debugging: 3,
    CodeReviews: 4,
    ModelTraining: 1,
    OtherActivities: 2,
  },
  {
    name: "Tuesday",
    GitHub: 18,
    VSCode: 8,
    Deployment: 5,
    Browsing: 7,
    Debugging: 4,
    CodeReviews: 6,
    ModelTraining: 2,
    OtherActivities: 3,
  },
  {
    name: "Wednesday",
    GitHub: 25,
    VSCode: 10,
    Deployment: 7,
    Browsing: 9,
    Debugging: 5,
    CodeReviews: 8,
    ModelTraining: 3,
    OtherActivities: 4,
  },
  {
    name: "Thursday",
    GitHub: 30,
    VSCode: 12,
    Deployment: 9,
    Browsing: 11,
    Debugging: 6,
    CodeReviews: 10,
    ModelTraining: 4,
    OtherActivities: 5,
  },
  {
    name: "Friday",
    GitHub: 40,
    VSCode: 16,
    Deployment: 12,
    Browsing: 15,
    Debugging: 7,
    CodeReviews: 12,
    ModelTraining: 5,
    OtherActivities: 6,
  },
  {
    name: "Saturday",
    GitHub: 50,
    VSCode: 20,
    Deployment: 15,
    Browsing: 18,
    Debugging: 8,
    CodeReviews: 14,
    ModelTraining: 6,
    OtherActivities: 7,
  },
  {
    name: "Sunday",
    GitHub: 60,
    VSCode: 24,
    Deployment: 18,
    Browsing: 20,
    Debugging: 9,
    CodeReviews: 16,
    ModelTraining: 7,
    OtherActivities: 8,
  },
];

const DataActivityGraph = () => {
  return (
    <div className="container">
      {/* Heading */}
      <h1 className="heading">
        Weekly Development & Activity Overview
      </h1>

      {/* Overview Section */}
      <div className="overview">
        <p>
          This graph provides a comprehensive view of your weekly development activities,
          including GitHub commits, VS Code usage, deployments, debugging time, code reviews,
          and model training. Use this data to identify patterns, optimize workflows, and
          improve productivity.
        </p>
      </div>

      {/* Graph Container */}
      <div className="graph-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis
              dataKey="name"
              stroke="#fff"
              tick={{ fontSize: 12, fill: "#fff" }}
            />
            <YAxis stroke="#fff" tick={{ fontSize: 12, fill: "#fff" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#333",
                border: "1px solid #555",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Legend
              wrapperStyle={{
                paddingTop: "10px",
              }}
              formatter={(value) => (
                <span className="text-sm text-gray-300">{value}</span>
              )}
            />
            {/* Lines for Each Activity */}
            <Line
              type="monotone"
              dataKey="GitHub"
              stroke="#8884d8"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="VSCode"
              stroke="#82ca9d"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Deployment"
              stroke="#ff7300"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Browsing"
              stroke="#FFD700"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Debugging"
              stroke="#FF1493"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="CodeReviews"
              stroke="#00BFFF"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="ModelTraining"
              stroke="#FF4500"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataActivityGraph;