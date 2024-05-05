import React, { useState, useEffect } from 'react';
import './Rain.css';

const Rain = ({ color = 'black' }) => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const createDrop = () => {
      const drop = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: -10,
        speed: Math.random() * 5 + 2,
      };
      setDrops(prevDrops => [...prevDrops, drop])
    };

    const fallDrops = setInterval(() => {
      createDrop();
      setDrops(prevDrops =>
        prevDrops.filter(drop => drop.y < window.innerHeight)
          .map(drop => ({ ...drop, y: drop.y + drop.speed }))
      );
    }, 100);

    return () => clearInterval(fallDrops);
  }, []);

  return (
    <div className="rain-container">
      {drops.map(drop => (
        <div key={drop.id} className="drop" style={{ left: drop.x, top: drop.y, backgroundColor: color }} />
      ))}
    </div>
  );
};

export default Rain;
