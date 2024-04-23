import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export const UseMousePosition = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  const trackCursorPosition = (e: any) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', trackCursorPosition);
    return () => {
      document.removeEventListener('mousemove', trackCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    >
      {/* Add any custom cursor content here */}
    </div>
  );
};
