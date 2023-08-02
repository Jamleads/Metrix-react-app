// import React from "react";
import NavBar from "./NavBar";
import BoardData from "./BoardData";
import BoardOderData from "./BoardOderData";
import { RecentOrders } from "./Dummy";
import Order from "./Order";
import graph from "../assets/Graph2.svg";
import users from "../assets/User.svg";
import folder2 from "../assets/Folder2.svg";
import { useState } from "react";
import { SalesData } from "./Dummy";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import { data } from "autoprefixer";

const Dashboard = () => {
  const [salesData, setSalesData] = useState({
    labels: SalesData.map((data) => data.day),
    datasets: [
      {
        label: "Sales",
        data: SalesData.map((data) => data.sales),
        barPercentage: 0.2,
        backgroundColor: "#5570F1",
        base: 0,
        borderRadius: 50,
        // options: {
        //   maintainAspectRario: false,
        // },
      },
    ],
  });

  const bar0ptions = {
    responsive: true,
    maintainAspectRario: false,
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        grid: {
          drawOnChartArea: false,
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  const data = {
    labels: ["Acquisition", "Purchase", "Retention"],
    datasets: [
      {
        label: "Poll",
        data: [60, 25, 15],
        backgroundColor: ["#5570F1", "#FFCC91", "#97A5EB"],
      },
    ],
  };
  const option = {
    responsive: true,
  };

  return (
    <div className="w-full h-full">
      <NavBar pageTitle="Dashboard" />
      <div className="w-full px-5 pt-5">
        <section className="section1 h-[14vh] flex items-center justify-between">
          <BoardData
            iconBg="blue"
            icon={graph}
            leftTitle="Sales"
            leftData="#4,000,000.00"
            rightTitle="Volume"
            rightData="450"
            rightDataSpan="+20.00%"
            boardStyle="w-[30%]"
          />

          <BoardData
            iconBg="bg-secondary"
            icon={users}
            leftTitle="Customers"
            leftData="1,250"
            leftDataSpan="+15.80%"
            rightTitle="Active"
            rightData="1,180"
            rightDataSpan="85%"
            boardStyle="w-[30%]"
          />

          <BoardOderData />
        </section>

        <section className="mt-5 w-full h-[70vh] flex justify-between">
          <div className="w-[63%] h-full flex flex-col gap-5">
            <div className="h-1/2 flex gap-8">
              <div className="w-1/2 h-full bg-mainWhite p-5 rounded-xl">
                <div className="flex items-center justify-between h-[10%]">
                  <p>Marketing</p>

                  <select name="" id="" className="border-0">
                    <option value="Sales">Last 7 days</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>

                <div className=" w-full h-[90%] relative">
                  <DoughnutChart data={data} option={option} />
                </div>
              </div>

              <div className="w-1/2 h-full flex flex-col items-center justify-between gap-5">
                <BoardData
                  iconBg="bg-[#ffffff29]"
                  icon={folder2}
                  leftTitle="All Products"
                  leftData="45"
                  rightTitle="Volume"
                  rightData="32"
                  rightDataSpan="+24%"
                  boardStyle="w-full h-1/2 active"
                />
                <BoardData
                  iconBg="blue"
                  icon={graph}
                  leftTitle="Abandoned Cart"
                  leftData="20%"
                  leftDataSpan="+0.00%"
                  rightTitle="Volume"
                  rightData="450"
                  rightDataSpan="+20.00%"
                  boardStyle="w-full h-1/2"
                />
              </div>
            </div>

            <div className="h-1/2 bg-mainWhite p-5 rounded-xl">
              <div className="flex items-center justify-between h-[10%]">
                <div className="flex items-center">
                  <p>Summary</p>
                  <select
                    name=""
                    id=""
                    className="ml-5 px-5 bg-[#5570f114] text-actionBlue border-0"
                  >
                    <option value="Sales">Sales</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>

                <select name="" id="" className="border-0">
                  <option value="Sales">Last 7 days</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>

              <div className=" h-[90%] relative">
                <BarChart chartData={salesData} options={bar0ptions} />
              </div>
            </div>
          </div>

          <div className="bg-mainWhite w-[35%] h-full px-5 pb-2 rounded-2xl">
            <div className="py-5">
              <h2>Recent Order</h2>
            </div>
            <div className="flex flex-col gap-1 h-[90%] overflow-scroll">
              {RecentOrders.map((order) => (
                <div key={order.id} className="pb-1 border-b-[1px]">
                  <Order {...order} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
