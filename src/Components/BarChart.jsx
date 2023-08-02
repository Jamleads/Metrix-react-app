import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";

const BarChart = ({ chartData, options }) => {
  return (
    <div className="relative w-full h-full">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
