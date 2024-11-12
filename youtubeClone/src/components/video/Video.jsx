import React from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai';

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/dkAqrFFaKI8/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBKex8oxFWE8xWU_sZrk141j5kM6Q"
          alt=""
        />
        <span>0:54:3</span>
      </div>
      <div className="video__first">
        <img
          className="video__logo"
          src="https://yt3.ggpht.com/ytc/AIdro_mhYL_y2ruzvGzq2umQioNSrZOk902knvSee3u2Fpx7jGM=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <div className="video__second">
          <div className="video__title">
            Welcome to Web Development #By Akuutsang
          </div>
          <div className="video__description">
            <div className="video__channel">
              <p>Akuutsang</p>
            </div>
            <div className="video__details">
              <span className="span">
                <AiFillEye />
              </span>
              <span className="span">3.6k views • </span>
              <span className="span">5 days ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="top">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="bottom">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Video;
