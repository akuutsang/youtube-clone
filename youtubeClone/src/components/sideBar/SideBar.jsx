import React from 'react';
import './_sideBar.scss';
import {
  MyIcon,
  Download,
  Gaming,
  Help,
  History,
  Home,
  LikedVideo,
  Music,
  News,
  PlayList,
  ReportHistory,
  SendFeedback,
  Settings,
  Shorts,
  Sports,
  Subscription,
  Trending,
  YourClips,
  YourVideos,
} from '../../assets/Svg';
import Closed from './Closed';

const SideBar = ({ sidebar }) => {
  return (
    <nav className={`sidebar ${sidebar ? 'open' : ''}`}>
      {!sidebar ? (
        <Closed />
      ) : (
        <ul>
          <li>
            <Home />
            <span>Home</span>
          </li>
          <li>
            <Shorts />
            <span>Shorts</span>
          </li>
          <li>
            <Subscription />
            <span>Subscription</span>
          </li>
          <hr />
          <div></div>
          {/* <li>
            <MyIcon />
            <span>You</span>
          </li> */}

          <li>
            <YourClips />
            <span>Your Clips</span>
          </li>
          <li>
            <PlayList />
            <span>Playlists</span>
          </li>
          <li>
            <YourVideos />
            <span>Your Videos</span>
          </li>
          <li>
            <Download />
            <span>Download</span>
          </li>
          <li>
            <Trending />
            <span>Trending</span>
          </li>
          <li>
            <Music />
            <span>Music</span>
          </li>
          <li>
            <Gaming />
            <span>Gaming</span>
          </li>
          <li>
            <News />
            <span>News</span>
          </li>
          <li>
            <Sports />
            <span>Sports</span>
          </li>
          <li>
            <Settings />
            <span>Settings</span>
          </li>
          <li>
            <ReportHistory />
            <span>Report History</span>
          </li>
          <li>
            <Help />
            <span>Help</span>
          </li>
          <li>
            <SendFeedback />
            <span>Send Feedback</span>
          </li>
          <li>
            <LikedVideo />
            <span>Liked Videos</span>
          </li>
          <li>
            <History />
            <span>History</span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default SideBar;
