import { useRef, useState, useCallback } from 'react';
import { useScrollReveal } from './useScrollReveal';
import './PhotoReveal.css';

const PICS = [
  '/homePage/pics/19E784E2-7610-4C8F-87ED-F9806910A44B_1_105_c.jpeg',
  '/homePage/pics/2FFC47AD-F8D5-48F0-952F-16BFF2336B33_1_105_c.jpeg',
  '/homePage/pics/36F2FFD0-5296-45FB-83DA-4CD8D3269088_1_105_c.jpeg',
  '/homePage/pics/38E42BCA-3833-4C7D-BCC1-C7EB15791791_1_105_c.jpeg',
  '/homePage/pics/39CAC6BB-F12C-45BA-8E39-A337D242B3A2_1_105_c.jpeg',
  '/homePage/pics/3F5C5B4D-5C1B-4C5E-BC5C-1E39263BF8BC_1_105_c.jpeg',
  '/homePage/pics/40855815-6BB1-47AD-BEC2-FEF5B0397491_1_105_c.jpeg',
  '/homePage/pics/45D8435C-7B41-4164-A247-0705A4A68CF4_1_105_c.jpeg',
  '/homePage/pics/57F9D8E3-9C20-4721-907A-8CEF8901DBA7_1_105_c.jpeg',
  '/homePage/pics/60BABF9F-350A-4787-83E5-F435FEF08BAD_1_105_c.jpeg',
  '/homePage/pics/6346336D-ED19-49C5-BE6C-7CEAA1AC0B1B_4_5005_c.jpeg',
  '/homePage/pics/645FB960-FA4C-4420-BCE5-E6DFB6B10D7B_1_105_c.jpeg',
  '/homePage/pics/69C7A99C-9DA6-423F-B9E2-377EEF485ADF_1_105_c.jpeg',
  '/homePage/pics/6DFCB3AB-FF34-45BF-9789-775D7FB94766_1_105_c.jpeg',
  '/homePage/pics/7019D698-FCFB-4D42-8352-8F450E5A9AD7_1_105_c.jpeg',
  '/homePage/pics/77747911-24B1-4B5C-9F4C-96562C176D4C_1_105_c.jpeg',
  '/homePage/pics/7AA910FA-9F54-4986-B554-F6D988B3E78B_1_105_c.jpeg',
  '/homePage/pics/7ACB99D9-6271-4D38-AC76-3D5F0509B1A5_1_105_c.jpeg',
  '/homePage/pics/7D488CB9-F10F-4E94-B997-F0068B3E986D_1_105_c.jpeg',
  '/homePage/pics/7E40F531-C240-40B8-AFE3-6E97B3031022_1_105_c.jpeg',
  '/homePage/pics/835688CA-2433-4249-A0D1-378DAEA05C2C_1_105_c.jpeg',
  '/homePage/pics/8741C4E5-E59D-4E6E-B3E6-3225CA6D5EB1_1_105_c.jpeg',
  '/homePage/pics/8C1B0B43-8EE6-40BE-805D-B07A3E28B5DE_1_105_c.jpeg',
  '/homePage/pics/9BA62D81-2A95-44A2-BEBA-358DFF53EAE1_1_105_c.jpeg',
  '/homePage/pics/A51728CA-47AB-4D4F-92A2-7773A4E12150_1_105_c.jpeg',
  '/homePage/pics/BCC5EB10-4927-461D-8D2F-F9A308B3085E_1_105_c.jpeg',
  '/homePage/pics/BDBA7A7D-83C0-4D2E-9B87-3DF3AD180853_1_105_c.jpeg',
  '/homePage/pics/C2EF07DE-7D93-4D6A-9DF3-745AFCE20610_1_105_c.jpeg',
  '/homePage/pics/C59682A1-9CEA-42A4-92A4-0C7B99233F01_1_105_c.jpeg',
  '/homePage/pics/E6D5F255-3CF1-4460-A40E-7B9D7914840B_1_105_c.jpeg',
  '/homePage/pics/EB59CDCE-6B93-4A24-9E81-C8994986E8DF_1_105_c.jpeg',
  '/homePage/pics/F96DBA51-A7B8-43D3-A75D-3E83C0311425_1_105_c.jpeg',
  '/homePage/pics/Pasted Graphic 1.png',
  '/homePage/pics/Pasted Graphic.png',
];

const MAX_IMAGES = 60;
const MIN_DISTANCE = 25;
const LIFETIME_MS = 1200;

function PhotoReveal({ children, className = '' }) {
  const containerRef = useRef(null);
  const lastPos = useRef({ x: -999, y: -999 });
  const indexRef = useRef(0);
  const idRef = useRef(0);
  const [images, setImages] = useState([]);

  const spawn = useCallback((x, y) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const pic = PICS[indexRef.current % PICS.length];
    indexRef.current++;

    const rotation = (Math.random() - 0.5) * 30;
    const size = 140 + Math.random() * 110;
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;

    const finalX = x + offsetX;
    const finalY = y + offsetY;
    const halfW = size * 0.75;
    const halfH = size * 0.95;
    if (
      finalY - halfH < 0 ||
      finalY + halfH > rect.height ||
      finalX - halfW < 0 ||
      finalX + halfW > rect.width
    ) {
      return;
    }

    const id = idRef.current++;
    setImages(prev => {
      const next = [
        ...prev,
        { id, x: finalX, y: finalY, pic, rotation, size },
      ];
      return next.length > MAX_IMAGES ? next.slice(next.length - MAX_IMAGES) : next;
    });

    setTimeout(() => {
      setImages(prev => prev.filter(img => img.id !== id));
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
      className={`photoReveal ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
      <div className="photoReveal-layer">
        {images.map(img => (
          <div
            key={img.id}
            className="revealClip"
            style={{
              left: img.x - img.size / 2,
              top: img.y - img.size / 2,
              width: img.size,
              transform: `rotate(${img.rotation}deg)`,
            }}
          >
            <img src={img.pic} alt="" draggable="false" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoReveal;
