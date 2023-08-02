// import React from "react";
import notification from "../assets/Notification.svg";
import profile from "../assets/profile.svg";
import homeIcon from "../assets/Home.svg";

const NavBar = ({ pageTitle }) => {
  return (
    <div className="nav-bar bg-mainWhite w-full">
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <h3 className="text-lg">{pageTitle}</h3>
        </div>

        <div className="flex items-center">
          <div className="nav-bar-selection">
            <select
              name=""
              id=""
              className="bg-secondary px-5 py-2 text-sm rounded-lg"
            >
              <option value="">Nanny's Shop</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

          <div className="nav-bar-notification mx-5">
            <img src={notification} alt="" className="w-[25px]" />
          </div>

          <div className="nav-bar-user">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
      <div className="px-5 py-1 border-t-[1px] flex items-center">
        <img src={homeIcon} alt="" />
        <p className="ml-2">/ {pageTitle}</p>
      </div>
    </div>
  );
};

export default NavBar;
