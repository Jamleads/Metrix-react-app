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
import BarChat from "./BarChat";

const Dashboard = () => {
  const [salesData] = useState({
    labels: SalesData.map((data) => data.day),
    datasets: [
      {
        label: "Sales",
        data: SalesData.map((data) => data.sales),
        barPercentage: 0.2,
        backgroundColor: "#5570F1",
        base: 0,
        borderRadius: 50,
      },
    ],
  });

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
              <div className="w-1/2 h-full bg-yellow-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                aperiam earum harum, numquam omnis perferendis autem molestiae
                incidunt nisi obcaecati quasi ipsum optio, magnam sint ea
                nostrum, aliquid vitae accusantium.
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

            <div className="h-1/2 overflow-scroll bg-mainWhite">
              {/* <div className="w-full "> */}
              <BarChat chartData={salesData} />
              {/* </div> */}
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
