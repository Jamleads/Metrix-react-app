import React from "react";
import bag from "../assets/Bag.svg";

const BoardOderData = () => {
  return (
    <div className="board-oder-data bg-mainWhite p-3 rounded-2xl lg:w-[35%] w-full">
      <div className="flex items-center justify-between">
        <div className="icon-cont bg-secondary flex items-center justify-center w-[40px] h-[40px] rounded-lg">
          <img src={bag} alt="" />
        </div>

        <div className="period">
          <select name="" id="" className="text-xs text-textGray">
            <option value="" className="text-xs text-textGray">
              This Week
            </option>
            <option value="" className="text-xs text-textGray">
              Last Week
            </option>
            <option value="" className="text-xs text-textGray">
              Last Month
            </option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-5 mt-5">
        <div className="left w-1/3">
          <p className="text-sm text-textGray">All Orders</p>
          <h2 className="text-lg font-bold">
            450 {""}
            <span className="text-actionGreen text-xs"></span>
          </h2>
        </div>
        <div className="middle w-1/3">
          <p className="text-sm text-textGray">Pending</p>
          <h2 className="text-lg font-bold">
            5 {""}
            <span className="text-actionGreen text-xs"></span>
          </h2>
        </div>

        <div className="right w-1/3">
          <p className="text-sm text-textGray">Completed</p>
          <h2 className="text-lg font-bold">
            445 {""}
            <span className="text-actionGreen text-xs"></span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BoardOderData;
