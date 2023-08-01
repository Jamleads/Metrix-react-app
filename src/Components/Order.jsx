// import React from "react";

const Order = ({ image, item, price, quantity, date, status, statuStyle }) => {
  return (
    <div className="order w-full flex items-center justify-between">
      <div className="flex items-center">
        <div className="avata-wrap w-[45px] h-[45px] flex items-center justify-center rounded-lg border-[1px]">
          <img src={image} alt="" />
        </div>
        <div className="product ml-5">
          <p className="product-name text-xs font-light">{item}</p>
          <p className="price text-sm">
            {price} {""}
            <span className="quantity">{quantity}</span>
          </p>
        </div>
      </div>

      <div className="text-xs">
        <p className="date text-textGray">{date}</p>
        <p className={`status px-3 rounded-lg ${statuStyle}`}>{status}</p>
      </div>
    </div>
  );
};

export default Order;
