import React from "react";
import bag from "../assets/Bag.svg";

const Messanger = ({ image }) => {
  return (
    <div className="w-full py-1 px-5 border-b-[1px] flex items-center justify-between gap-5">
      <div className="flex items-center">
        <div className="img-wrap w-[45px] h-[45px] flex items-center justify-center border-[1px] rounded-lg">
          <img src={image} alt="" className="contact-img" />
        </div>

        <div className="messsage-wrap overflow-x-hidden ml-5">
          <p className="contact-name">John Doe</p>
          <p className="online-status w-full text-actionBlue overflow-x-hidden mt-1">
            Online <span className="text-textGray">12:55am</span>
          </p>
        </div>
      </div>

      <div className="message-stus">
        <div className="flex items-center text-sm">
          <p className="customer-status text-center px-1 bg-secondary rounded-lg">
            New Customer
          </p>
          <a href="#" className="text-actionBlue ml-3">
            View Profile
          </a>
        </div>

        <div className="customer-order-status flex items-center w-[50%] ml-auto">
          <img src={bag} alt="" />
          <p className="time mt-1 text-textGray ml-3">
            <span>0</span> Orders
          </p>
        </div>
      </div>
    </div>
  );
};

export default Messanger;
