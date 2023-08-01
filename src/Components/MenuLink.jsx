import React from "react";

const MenuLink = ({ href, avata, title, style }) => {
  return (
    <a href={href ? href : "#"}>
      <div
        className={`menu-link flex items-center py-3 px-6 rounded-lg ${style}`}
      >
        <div className="menu-avata-wrap">
          <img src={avata} alt="" className="sidebar-avata w-[30px]" />
        </div>
        <div className="">
          <h2 className="text-lg ml-5 font-light">{title}</h2>
        </div>
      </div>
    </a>
  );
};

export default MenuLink;
