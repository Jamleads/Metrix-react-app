import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as chartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

chartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data, option }) => {
  return (
    <div className="w-full h-full relative">
      <Doughnut data={data} options={option} />
    </div>
  );
};

export default DoughnutChart;
