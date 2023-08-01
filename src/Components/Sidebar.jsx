// import React from "react";
import MenuLink from "./MenuLink";
import metrixLogo from "../assets/Graph.svg";
import sideBarToggle from "../assets/togglebar.svg";
import dashboard from "../assets/Category.svg";
import orders from "../assets/Bag.svg";
import userIcon from "../assets/User.svg";
import folderIcon from "../assets/Folder.svg";
import settingsIcon from "../assets/Setting.svg";
import chatIcon from "../assets/Chat.svg";
import headphoneIcon from "../assets/headphones.svg";
import giftIcon from "../assets/gift.svg";
import rightIcon from "../assets/chevron-down.svg";
import logoutIcon from "../assets/Logout.svg";

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col w-[20%] bg-[#ffffff] h-screen py-5">
      <div className="flex justify-between pb-5 pr-5 pl-10">
        <div className="brand flex items-center">
          <img src={metrixLogo} className="logo" alt="React logo" />
          <h2 className="ml-5 text-3xl font-bold text-mainBlack">Metrix</h2>
        </div>
        <div className="toogle flex items-center ">
          <img src={sideBarToggle} className="w-[30px]" alt="side bar toogle" />
        </div>
      </div>

      <div className="sidebar-menu px-10 mt-10 flex flex-col gap-2">
        <MenuLink avata={dashboard} title="Dashboard" style="active" />
        <MenuLink avata={orders} title="Orders" />
        <MenuLink avata={userIcon} title="Customer" />
        <MenuLink avata={folderIcon} title="Inventry" />
        <MenuLink avata={chatIcon} title="Conversations" />
        <MenuLink avata={settingsIcon} title="Settings" />
      </div>

      <div className="sidebar-footer mt-auto px-10">
        <MenuLink
          avata={headphoneIcon}
          title="Contact Support"
          style="sidebar-footer-support"
        />

        <div className="bg-secondary mt-5 rounded-lg">
          <MenuLink
            avata={giftIcon}
            title="Free Gift Awaits You!"
            style="sidebar-footer-gift"
          />

          <a href="#">
            <div className="flex items-center px-5 pb-5">
              <p className="text-xs font-light">Upgrade your account</p>
              <img src={rightIcon} alt="chevron-right" className="ml-5" />
            </div>
          </a>
        </div>

        <div className="logout flex items-center mt-5 p-3">
          <img src={logoutIcon} alt="Logout" className="w-[30px]" />
          <p className="text-lg ml-5 font-light text-actionRed">Logout</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
