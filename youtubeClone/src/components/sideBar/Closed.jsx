import React from 'react';
import './closed.scss';

import { Home, Shorts, Subscription, MyIcon, Download } from '../../assets/Svg';

const Closed = () => {
  return (
    <div>
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
      <li>
        <MyIcon />
        <span>You</span>
      </li>
      <li>
        <Download />
        <span>Download</span>
      </li>
    </div>
  );
};

export default Closed;
