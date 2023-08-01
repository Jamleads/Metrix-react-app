import React from "react";

const BoardData = ({
  iconBg,
  icon,
  leftTitle,
  leftData,
  leftDataSpan,
  rightTitle,
  rightData,
  rightDataSpan,
  boardStyle,
}) => {
  return (
    <div className={`board-data bg-mainWhite p-3 rounded-2xl ${boardStyle}`}>
      <div className="flex items-center justify-between">
        <div
          className={`${iconBg} icon-cont flex items-center justify-center w-[40px] h-[40px] rounded-lg`}
        >
          <img src={icon} alt="" />
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
        <div className="left w-1/2">
          <p className="text-sm text-textGray">{leftTitle}</p>
          <h2 className="text-lg font-bold">
            {leftData} {""}
            <span className="text-actionGreen text-xs">{leftDataSpan}</span>
          </h2>
        </div>
        <div className="right w-1/2">
          <p className="text-sm text-textGray">{rightTitle}</p>
          <h2 className="text-lg font-bold">
            {rightData} {""}
            <span className="text-actionGreen text-xs">{rightDataSpan}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BoardData;
