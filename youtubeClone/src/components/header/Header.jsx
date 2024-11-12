import React from 'react';
import './_header.scss';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsMic } from 'react-icons/bs';
import { MdNotifications, MdOutlineVideoCall } from 'react-icons/md';
import NotificationBell from '../../assets/icons/Notification.png';
import { Search, CreateIcon } from '../../assets/Svg';

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className=" header">
      <div className="group1">
        <FaBars
          className="header__menu"
          size={26}
          onClick={() => handleToggleSidebar()}
        />
        <div className="group1Left">
          <img
            src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt=""
            className="header__logo"
          />
          <p className="header__logoText">YouTube</p>
        </div>
      </div>

      <div className="group2">
        <form action="">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <AiOutlineSearch size={22} />
          </button>
        </form>
        <div className="searchIcon">
          <Search />
        </div>
        <div className="group2icon">
          <BsMic size={20} />
        </div>
      </div>
      <div className="header__icons">
        <CreateIcon />
        <img
          src={NotificationBell}
          className="Notification"
          alt="Notification Bell"
        />
        <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt="User Avatar"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
