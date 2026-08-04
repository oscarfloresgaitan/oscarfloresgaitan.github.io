import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.interactive, a, button')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isHovered ? 2.5 : 1,
        backgroundColor: isHovered ? 'var(--color-primary)' : 'transparent',
        opacity: isHovered ? 0.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        border: '2px solid var(--color-primary)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
      }}
    />
  );
}
