import React, { useState, useEffect } from 'react';
import LatestNews from './LatestNews';
import MainNews from './MainNews';
import MainNewsMobile from './MainNewsMobile';

export default function News(props) {
  const { news } = props;
  const [width, setWidth] = useState(0);
    
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    } 
  }, []);

  return (
    <div className="news-container">  
      {width > 900 ? 
        <MainNews posts={news} />
      :
        <MainNewsMobile posts={news} />
      }
              
      <LatestNews posts={news}/>
    </div>
  );
}