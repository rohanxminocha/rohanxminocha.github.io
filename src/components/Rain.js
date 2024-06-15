import React, { useState, useEffect } from 'react';
import './Rain.css';

const Rain = ({ color = 'black' }) => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const createDrop = () => {
      const drop = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: -Math.random() * window.innerHeight,
        speed: Math.random() * 5 + 2,
        height: Math.random() * 20 + 10,
      };
      setDrops(prevDrops => [...prevDrops, drop]);
    };

    const maxDrops = 50;

    const fallDrops = setInterval(() => {
      if (drops.length < maxDrops) {
        createDrop();
      }
      setDrops(prevDrops =>
        prevDrops.filter(drop => drop.y < window.innerHeight + drop.height)
          .map(drop => ({ ...drop, y: drop.y + drop.speed }))
      );
    }, 200);

    return () => clearInterval(fallDrops);
  }, [drops]);

  return (
    <div className="rain-container">
      {drops.map(drop => (
        <div key={drop.id} className="drop" style={{ left: drop.x, top: drop.y, backgroundColor: color }} />
      ))}
    </div>
  );
};

export default Rain;
