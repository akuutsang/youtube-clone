import React, { useState } from 'react';
import './_categoriesBar.scss';
const keywords = [
  'All',
  'Podcasts',
  'Beadworking',
  'Music',
  'React routers',
  'Stitches',
  'Css',
  'Testimonies',
  'Gaming',
  'Fathers',
  'Mixes',
  'Live',
  'Thrillers',
  'Debates',
  'Dramedy',
  'Couples',
  'Cryptocurrency',
  'History',
  'Recently uploaded',
  'Watched',
  'New to you',
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All');
  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <>
      <div className="CategoriesBar">
        {keywords.map((value, i) => (
          <>
            <span
              onClick={() => handleClick(value)}
              key={i}
              className={activeElement === value ? 'active' : ''}
            >
              {value}{' '}
            </span>
          </>
        ))}
      </div>
      <hr className="line" />
    </>
  );
};

export default CategoriesBar;
