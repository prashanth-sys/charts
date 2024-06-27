import React, { Component } from "react";
import "./index.css";
import { format } from "date-fns";
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
  state = {
    timeframe: "daily",
    data: [
      { timestamp: "2023-01-01T00:00:00Z", value: 10 },
      { timestamp: "2023-01-02T00:00:00Z", value: 12 },
      { timestamp: "2023-01-03T00:00:00Z", value: 5 },
      { timestamp: "2023-01-04T00:00:00Z", value: 8 },
      { timestamp: "2023-01-05T00:00:00Z", value: 7 },
    ],
  };

  handleTimeframeChange = (timeframe) => {
    this.setState({ timeframe });
  };

  filterDataByTimeframe = (data, timeframe) => {
    if (timeframe === "weekly") {
      return data.slice(0, 7);
    } else if (timeframe === "monthly") {
      return data.slice(0, 30);
    }
    return data;
  };

  formatTimestamp = (timestamp) => {
    return format(new Date(timestamp), "yyyy-MM-dd");
  };

  render() {
    const { timeframe, data } = this.state;
    const filteredData = this.filterDataByTimeframe(data, timeframe);

    const formattedData = filteredData.map((item) => ({
      ...item,
      formattedTimestamp: this.formatTimestamp(item.timestamp),
    }));

    return (
      <div className="chart-container">
        <div className="timeframe-selector">
          <button
            className={`time-button ${timeframe === "daily" ? "active" : ""}`}
            onClick={() => this.handleTimeframeChange("daily")}
          >
            Daily
          </button>
          <button
            className={`time-button ${timeframe === "weekly" ? "active" : ""}`}
            onClick={() => this.handleTimeframeChange("weekly")}
          >
            Weekly
          </button>
          <button
            className={`time-button ${timeframe === "monthly" ? "active" : ""}`}
            onClick={() => this.handleTimeframeChange("monthly")}
          >
            Monthly
          </button>
        </div>
        <h1>Line Chart</h1>
        <ResponsiveContainer width="90%" height={400}>
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="formattedTimestamp"
              interval={0}
              tick={{ fontSize: 12 }}
            />
            <YAxis />
            <Tooltip labelFormatter={this.formatTimestamp} />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart;
