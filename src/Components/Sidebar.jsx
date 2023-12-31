import React from "react";
import MenuLink from "./MenuLink";
import metrixLogo from "../assets/Graph.svg";
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
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  return (
    <div className="bg-[#F4F5FA] flex w-full lg:h-screen h-[150rem]">
      <div
        className={`sidebar flex flex-col ${
          open ? "lg:w-[20%] w-[75%]" : "lg:w-[8%] w-[5%]"
        } w-[20%] bg-mainWhite h-screen py-5 shadow-xl relative`}
      >
        <div className="lg:pb-5 pr-5 pl-10">
          <div
            className={`brand flex items-center ${
              !open ? "lg:block hidden" : "block"
            } `}
          >
            <img src={metrixLogo} className="logo" alt="React logo" />
            <h2
              className={`ml-5 text-3xl font-bold text-mainBlack ${
                !open && "hidden"
              }`}
            >
              Metrix
            </h2>
          </div>

          <div
            className={`toogle h-[30px] w-[30px] border-actionBlue border-[1px] flex items-center rounded-lg absolute top-12 -right-2 ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          >
            <img src={rightIcon} className="w-[30px]" alt="side bar toogle" />
          </div>
        </div>

        <div
          className={`sidebar-menu ${
            open ? "px-10" : "px-5"
          }  lg:mt-10 mt-5 flex flex-col lg:gap-2`}
        >
          <MenuLink
            avata={dashboard}
            title={!open ? "" : "Dashboard"}
            style={
              location.pathname === "/"
                ? `active ${!open ? "lg:block hidden" : "block"}`
                : ""
            }
            to="/"
          />

          <MenuLink
            avata={orders}
            title={!open ? "" : "Orders"}
            style={
              location.pathname === "/orders"
                ? `active ${!open ? "lg:block hidden" : "block"}`
                : ""
            }
          />

          <MenuLink
            avata={userIcon}
            title={!open ? "" : "Customer"}
            style={
              location.pathname === "/customer"
                ? `active ${!open ? "lg:block hidden" : "block"}`
                : ""
            }
          />

          <MenuLink
            avata={folderIcon}
            title={!open ? "" : "Inventry"}
            style={
              location.pathname === "/inventry"
                ? `active ${!open ? "lg:block hidden" : "block"}`
                : ""
            }
          />

          <MenuLink
            avata={chatIcon}
            title={!open ? "" : "Conversations"}
            style={
              location.pathname === "/conversations"
                ? `active ${!open ? "lg:block hidden" : "block"}`
                : ""
            }
            to="/conversations"
          />

          <MenuLink
            avata={settingsIcon}
            title={!open ? "" : "Settings"}
            style={
              location.pathname === "/settings"
                ? `active ${!open ? "lg:block hidden" : "block"}`
                : ""
            }
          />
        </div>

        <div className={`sidebar-footer mt-auto ${open ? "px-10" : "px-5"}`}>
          <MenuLink
            avata={headphoneIcon}
            title={!open ? "" : "Contact Support"}
            style={
              location.pathname === "/support"
                ? `active ${!open ? "lg:block hidden" : "block"}`
                : "sidebar-footer-support"
            }
          />

          <div
            className={`bg-secondary lg:mt-5 rounded-lg ${
              !open ? "lg:block hidden" : "block"
            }`}
          >
            <MenuLink
              avata={giftIcon}
              title={!open ? "" : "Free Gift Awaits You!"}
              style="sidebar-footer-gift"
            />

            <a href="#">
              <div
                className={`flex items-center px-5 lg:pb-5 ${
                  !open && "hidden"
                }`}
              >
                <p className="text-xs font-light">Upgrade your account</p>
                <img src={rightIcon} alt="chevron-right" className="ml-5" />
              </div>
            </a>
          </div>

          <div className="logout flex items-center mt-5 p-3">
            <img src={logoutIcon} alt="Logout" className="w-[30px]" />
            <p
              className={`text-lg ml-5 font-light text-actionRed ${
                !open && "hidden"
              }`}
            >
              Logout
            </p>
          </div>
        </div>
      </div>

      <main
        className={`${
          open ? "lg:w-[80%] w-full" : "lg:w-[92%] w-full"
        }  lg:h-screen`}
      >
        <Outlet />
      </main>
    </div>
  );
};
export default Sidebar;
