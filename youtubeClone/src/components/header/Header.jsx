import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const header = () => {
  return (
    <div className="border border-dark header">
      <FaBars className="header_menu size={26}" />
      <img
        src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />

      <form action="">
        <input type="text" />{" "}
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <dic className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt=""
        />
      </dic>
    </div>
  );
};

export default header;
