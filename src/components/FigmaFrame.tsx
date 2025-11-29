import React, { useEffect, useRef, useState } from 'react';

export default function FigmaFrame() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth || 743;
      const is2xl = typeof window !== 'undefined' && window.matchMedia('(min-width: 1536px)').matches;
      const maxScale = is2xl ? 1.5 : 1;
      const s = Math.min(maxScale, w / 743);
      setScale(s);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const height = 334 * scale;

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%', height }}>
      <div className="card-stack" style={{ position: 'absolute', top: 0, left: 0, width: 743, height: 334, paddingTop: 20, marginTop: 20, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        {/* Base card */}
        <div className="jump jump-1" style={{ position: 'absolute', top: 0, left: 0, width: 216, height: 271 }}>
          <div
            className="card rounded-lg"
            tabIndex={0}
            role="img"
            aria-label="Card image"
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%',
              backgroundColor: '#fff', overflow: 'hidden'
            }}
          >
            <img className="card-image" src={'/2bf2dd2489677e93346aa46ecfecf048.jpg'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Left rotated card */}
        <div className="jump jump-2" style={{ position: 'absolute', top: 72, left: 192, width: 195, height: 241 }}>
          <div
            className="card"
            tabIndex={0}
            role="img"
            aria-label="Card image"
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%',
              backgroundColor: '#fff', overflow: 'hidden',
              borderRadius: 24,
              transform: 'rotate(-15deg)',
              zIndex: 15
            }}
          >
            <img className="card-image" src={'/Instagram post - 5 copy.png'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Right rotated card */}
        <div className="jump jump-3" style={{ position: 'absolute', top: 29, left: 373, width: 194, height: 241 }}>
          <div
            className="card"
            tabIndex={0}
            role="img"
            aria-label="Card image"
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%',
              backgroundColor: '#fff', overflow: 'hidden',
              borderRadius: 16,
              transform: 'rotate(15deg)',
              zIndex: 12
            }}
          >
            <img className="card-image" src={'/Instagram post - 6.png'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Far right card */}
        <div className="jump jump-4" style={{ position: 'absolute', top: 68, left: 560, width: 182, height: 222 }}>
          <div
            className="card rounded-lg"
            tabIndex={0}
            role="img"
            aria-label="Card image"
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%',
              backgroundColor: '#fff', overflow: 'hidden'
            }}
          >
            <img className="card-image" src={'/Instagram post - 8.png'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
}