import { useRef, useState, useCallback } from 'react';
import { useScrollReveal } from './useScrollReveal';
import './MusicReveal.css';

const NOTES = ['♪', '♫', '♬', '♩', '♭', '♮', '♯', '𝄞', '𝄢'];

const COLORS = ['#921010', '#01307c', '#55017c', '#0a6b3b', '#c46a14', '#045d6b', '#aa1457', '#3a3a3a'];

const MAX = 25;
const MIN_DISTANCE = 30;
const LIFETIME_MS = 1200;

function MusicReveal({ children, className = '' }) {
  const containerRef = useRef(null);
  const lastPos = useRef({ x: -999, y: -999 });
  const indexRef = useRef(0);
  const idRef = useRef(0);
  const [items, setItems] = useState([]);

  const spawn = useCallback((x, y) => {
    const note = NOTES[indexRef.current % NOTES.length];
    indexRef.current++;

    const rotation = (Math.random() - 0.5) * 50;
    const fontSize = 2 + Math.random() * 3;
    const offsetX = (Math.random() - 0.5) * 60;
    const offsetY = (Math.random() - 0.5) * 60;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const id = idRef.current++;

    setItems(prev => {
      const next = [...prev, { id, x: x + offsetX, y: y + offsetY, note, rotation, fontSize, color }];
      return next.length > MAX ? next.slice(next.length - MAX) : next;
    });

    setTimeout(() => {
      setItems(prev => prev.filter(it => it.id !== id));
    }, LIFETIME_MS);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - lastPos.current.x;
    const dy = y - lastPos.current.y;
    if (Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE) return;

    lastPos.current = { x, y };
    spawn(x, y);
  }, [spawn]);

  useScrollReveal(containerRef, spawn);

  return (
    <div
      ref={containerRef}
      className={`musicReveal ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
      <div className="musicReveal-layer">
        {items.map(it => (
          <span
            key={it.id}
            className="musicNote"
            style={{
              left: it.x,
              top: it.y,
              transform: `translate(-50%, -50%) rotate(${it.rotation}deg)`,
              fontSize: `${it.fontSize}rem`,
              color: it.color,
            }}
          >
            {it.note}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MusicReveal;
