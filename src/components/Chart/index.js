import React, { Component } from "react";
import "./index.css";
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

class Chart extends Component {
  render() {
    const data = [
      { timestamp: "2023-01-01T00:00:00Z", value: 10 },
      { timestamp: "2023-01-02T00:00:00Z", value: 12 },
      { timestamp: "2023-01-03T00:00:00Z", value: 5 },
    ];

    return (
      <div className="chart-container">
        <h1>chart</h1>
        <ResponsiveContainer width="90%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart;
