import React from "react";
import NavBar from "./NavBar";
import Contacts from "./Contacts";

const Conversations = () => {
  return (
    <div className="w-full h-full">
      <NavBar pageTitle="Conversations" />
      <div className="w-full h-[89vh] px-5 pt-5">
        <div className="w-full h-[5%] flex justify-between items-center">
          <p>Conversations with Customers</p>
          <button className="px-10 py-2 bg-actionBlue text-mainWhite rounded-xl text-sm">
            New Message
          </button>
        </div>

        <div className="w-full h-[92%] mt-5 flex items-center gap-5">
          <Contacts />
          <div className="w-2/3 h-full  bg-red-300">yes</div>
        </div>
      </div>
    </div>
  );
};

export default Conversations;
