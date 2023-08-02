import React from "react";

const ContactCard = ({ image, name, message, status, time }) => {
  return (
    <div className="w-full py-1 px-5 border-b-[1px] flex items-center justify-between gap-5">
      <div className="flex items-center">
        <div className="img-wrap w-[45px] h-[45px] flex items-center justify-center border-[1px] rounded-lg">
          <img src={image} alt="" className="contact-img" />
        </div>

        <div className="messsage-wrap overflow-x-hidden ml-5">
          <p className="contact-name">{name}</p>
          <p className="message-content w-full text-textGray overflow-x-hidden mt-1">
            {message}
          </p>
        </div>
      </div>

      <div className="message-stus">
        <p className="status text-center px-1 bg-secondary rounded-lg">
          {status}
        </p>
        <p className="time mt-1 text-textGray">{time}</p>
      </div>
    </div>
  );
};

export default ContactCard;
