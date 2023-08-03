import React from "react";
import NavBar from "./NavBar";
import Contacts from "./Contacts";
import Messanger from "./Messanger";
import plus from "../assets/fi_plus.svg";
import emoji from "../assets/fi_smile.svg";

const Conversations = () => {
  return (
    <div className="w-full h-full">
      <NavBar pageTitle="Conversations" />
      <div className="w-full h-[89vh] px-5 pt-5">
        <div className="w-full h-[5%] flex justify-between items-center">
          <p className="lg:text-lg text-xs">Conversations with Customers</p>
          <button className="lg:px-10 px-5 py-2 bg-actionBlue text-mainWhite rounded-xl text-sm">
            New Message
          </button>
        </div>

        <div className="w-full h-[92%] mt-5 lg:flex items-center gap-5">
          <Contacts />

          <div className="chat-space lg:w-2/3 w-full lg:h-full bg-mainWhite rounded-xl">
            <Messanger />

            <div className="mt-5">
              <p className="bg-[#F4F5FA] w-[150px] text-center rounded-lg mx-auto">
                12 August 2022
              </p>
            </div>

            <div className="px-5 ">
              <div className="product w-[40%] flex items-end justify-between">
                <div className="flex items-center">
                  <div className="avata-wrap w-[45px] h-[45px] flex items-center justify-center rounded-lg border-[1px]">
                    <img src="" alt="" />
                  </div>
                  <div className="product ml-5">
                    <p className="product-name text-xs font-light">iPhone 13</p>
                    <p className="price text-sm">₦730,000.00</p>
                  </div>
                </div>

                <div className="text-xs">
                  <p className={`status px-3 rounded-lg  text-sm`}>
                    <span className="text-actionBlue font-bold">12</span> In
                    Stock
                  </p>
                </div>
              </div>

              <div className="message-body w-[40%] mt-3">
                <div className="bg-actionBlue text-mainWhite p-5 rounded-t-2xl rounded-r-2xl">
                  Hello, I want to make enquiries about your product
                </div>
                <p className="text-sm text-textGray">12:55am</p>
              </div>

              <div className="message-body w-[40%] ml-auto mt-3">
                <div className="bg-secondary  p-5 rounded-t-2xl rounded-l-2xl">
                  Hello Janet, thank you for reaching out
                </div>
                <p className="text-sm text-textGray text-end">12:55am</p>
              </div>

              <div className="message-body w-[35%] ml-auto mt-3">
                <div className="bg-secondary  p-5 rounded-t-2xl rounded-l-2xl">
                  What do you need to know?
                </div>
                <p className="text-sm text-textGray text-end">12:55am</p>
              </div>

              <div className="mt-5">
                <p className="bg-[#F4F5FA] w-[100px] text-center rounded-lg mx-auto">
                  Today
                </p>
              </div>

              <div className="message-body w-[45%] mt-3">
                <div className="bg-actionBlue text-mainWhite p-5 rounded-t-2xl rounded-r-2xl">
                  I want to know if the price is negotiable, i need about 2
                  Units
                </div>
                <p className="text-sm text-textGray">12:55am</p>
              </div>
            </div>

            <div className="px-5 ">
              <div className="py-2 px-3 border-[1px] rounded-xl mt-3 w-full flex items-center justify-between">
                <div className="flex items-center w-[85%]">
                  <div className="bg-secondary w-[40px] h-[40px] flex items-center justify-center rounded-lg">
                    <img src={plus} alt="" />
                  </div>

                  <div className="ml-3 w-full">
                    <input
                      type="text"
                      placeholder="Your message"
                      className="bg-transparent py-1 px-5 w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <img src={emoji} alt="" />
                  <button className="ml-5 bg-secondary px-5 py-1 rouned-lg">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversations;
