import React from "react";
import search from "../assets/Search.svg";
import ContactCard from "./ContactCard";
import { ContactCards } from "./Dummy";

const Contacts = () => {
  return (
    <div className="lg:w-1/3 w-full h-full bg-mainWhite rounded-xl">
      <div className="p-5 h-[20%]">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Contacts</h2>
          <p className="total text-textGray text-2xl">{ContactCards.length}</p>
        </div>

        <div className="flex items-center p-3 mt-3 rounded-xl border-[1px] ">
          <img src={search} alt="" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full px-5"
          />
        </div>
      </div>

      <div className="h-[80%] overflow-scroll">
        {ContactCards.map((Card) => (
          <div key={Card.id}>
            <ContactCard {...Card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
