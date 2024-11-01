// import React from "react";
// import "./_header.scss";
// import { FaBars } from "react-icons/fa";
// import { AiOutlineSearch } from "react-icons/ai";
// import { BsMic } from "react-icons/bs";
// import { MdNotifications, MdOutlineVideoCall } from "react-icons/md";
// import NotificationBell from "../../assets/icons/Notification.png";

// const header = () => {
//   return (
//     <div className="border border-dark header">
//       <div className="group1">
//         <FaBars className="header__menu" size={26} />
//         <img
//           src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
//           alt=""
//           className="header__logo"
//         />
//         <p className="header__logoText">Youtube</p>
//       </div>

//       <div className="group2">
//         <form action="">
//           <input type="text" placeholder="search" />{" "}
//           <button type="submit">
//             <AiOutlineSearch size={22} />
//           </button>
//         </form>
//         <BsMic size={26} className="group2icon" />
//       </div>
//       <div className="header__icons">
//         <MdOutlineVideoCall size={29} />
//         <img src={NotificationBell} className="Notification" alt="" />
//         {/* <MdApps size={28} /> */}
//         <img
//           src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
//           alt=""
//         />
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           height="24"
//           style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
//           viewBox="0 0 24 24"
//           width="24"
//           focusable="false"
//           aria-hidden="true"
//         >
//           <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default header;

import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
import { MdNotifications, MdOutlineVideoCall } from "react-icons/md";
import NotificationBell from "../../assets/icons/Notification.png";

const Header = () => {
  return (
    <div className="border border-dark header">
      <div className="group1">
        <FaBars className="header__menu" size={26} />
        <img
          src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
          className="header__logo"
        />
        <p className="header__logoText">YouTube</p>
      </div>

      <div className="group2">
        <form action="">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <AiOutlineSearch size={22} />
          </button>
        </form>
        <BsMic size={26} className="group2icon" />
      </div>

      <div className="header__icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            pointerEvents: "none",
            display: "inherit",
            height: "40px",
            width: "40px",
          }}
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
        >
          <path
            d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"
            fill="currentColor" // Keeps the inner color as is
            // stroke="#FFFFFF" // Pure white border color
            strokeWidth="0" // Set to 1px for a fine, visible border
            className="camera"
          />
        </svg>

        <img
          src={NotificationBell}
          className="Notification"
          alt="Notification Bell"
        />
        <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Header;
