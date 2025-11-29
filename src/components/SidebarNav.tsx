import React, { useEffect, useRef, useState } from 'react';

interface SidebarNavProps {
  active?: string;
  onNavigate: (section: string) => void;
  mode?: 'sidebar' | 'inline';
  disabled?: boolean;
}

const icons = {
  home: new URL('../../.figma/image/mia0pvj4-hunimo4.svg', import.meta.url).href,
  case: new URL('../../.figma/image/mia0pvj4-ue1evww.svg', import.meta.url).href,
  about: new URL('../../.figma/image/mia0pvj4-r544lk8.svg', import.meta.url).href,
  contact: new URL('../../.figma/image/mia0pvj4-poha8a0.svg', import.meta.url).href,
};

export default function SidebarNav({ active = 'home', onNavigate, mode = 'sidebar', disabled = false }: SidebarNavProps) {
  const containerClass =
    mode === 'inline'
      ? 'w-auto flex flex-col items-center justify-center'
      : 'w-[182px] flex flex-col justify-center min-h-screen';
  const innerClass =
    mode === 'inline'
      ? 'flex flex-col space-y-[15px] w-auto'
      : 'flex flex-col space-y-[15px] w-full';
  const listRef = useRef<HTMLDivElement>(null);
  const [labelsSuppressed, setLabelsSuppressed] = useState(false);
  const [labelsTouch, setLabelsTouch] = useState(false);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll('.dock-item')) as HTMLElement[];
    let raf = 0;
    const sigma = 80;
    const maxScale = 0.35;
    const gapShift = 24;
    const onMove = (y: number) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = root.getBoundingClientRect();
        const cy = y - rect.top;
        let hoveredIndex = 0;
        let maxInf = -1;
        const infos = items.map((el, i) => {
          const r = el.getBoundingClientRect();
          const iy = r.top + r.height / 2 - rect.top;
          const dy = cy - iy;
          const inf = Math.exp(-(dy * dy) / (2 * sigma * sigma));
          if (inf > maxInf) { maxInf = inf; hoveredIndex = i; }
          return { el, iy, dy, inf };
        });
        infos.forEach((info, i) => {
          const isHovered = i === hoveredIndex;
          const scale = isHovered ? 1 + maxScale : 1 + maxScale * info.inf;
          const shiftY = isHovered ? 0 : (i < hoveredIndex ? -gapShift : gapShift);
          const z = isHovered ? 30 : 10;
          const alpha = 0;
          info.el.style.setProperty('--dock-scale', `${scale}`);
          info.el.style.setProperty('--dock-shift-y', `${shiftY}px`);
          info.el.style.setProperty('--dock-z', `${z}`);
          info.el.style.setProperty('--dock-shadow-alpha', `${alpha}`);
        });
      });
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      onMove(e.clientY);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const t = e.touches[0];
      if (t) onMove(t.clientY);
    };
    const reset = () => {
      cancelAnimationFrame(raf);
      items.forEach((el) => {
        el.style.setProperty('--dock-scale', '1');
        el.style.setProperty('--dock-shift-y', '0px');
        el.style.setProperty('--dock-z', '0');
        el.style.setProperty('--dock-shadow-alpha', '0');
      });
    };
    root.addEventListener('mousemove', handleMouseMove, { passive: true });
    root.addEventListener('mouseleave', reset, { passive: true });
    root.addEventListener('touchmove', handleTouchMove, { passive: true });
    root.addEventListener('touchend', reset, { passive: true });
    return () => {
      root.removeEventListener('mousemove', handleMouseMove);
      root.removeEventListener('mouseleave', reset);
      root.removeEventListener('touchmove', handleTouchMove);
      root.removeEventListener('touchend', reset);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    setLabelsSuppressed(true);
    const id = setTimeout(() => setLabelsSuppressed(false), 600);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <div className={containerClass} role="navigation" aria-label="Primary">
      <div
        ref={listRef}
        className={`${innerClass} dock 2xl:scale-150 2xl:px-16 ${labelsTouch ? 'labels-touch' : ''}`}
        data-suppressed={labelsSuppressed ? 'true' : 'false'}
        onMouseLeave={() => setLabelsSuppressed(false)}
        onTouchStart={() => setLabelsTouch(true)}
        onTouchEnd={() => { setLabelsTouch(false); setLabelsSuppressed(false); }}
      >
        <button
          onClick={() => { setLabelsSuppressed(true); onNavigate('home'); }}
          className={`${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} flex items-center justify-start space-x-4 group transition-all duration-200 hover:scale-105 dock-row ${
            active === 'home' ? 'opacity-100' : 'opacity-70 hover:opacity-100'
          }`}
          disabled={disabled}
          aria-current={active === 'home' ? 'page' : undefined}
        >
          <div className={`w-[66px] h-[66px] rounded-lg flex items-center justify-center dock-item ${
            active === 'home'
              ? 'bg-white/50 border border-white/60 backdrop-blur-md'
              : 'bg-white/30 border border-white/40 backdrop-blur-md group-hover:bg-white/40'
          }`}>
            <img
              src={icons.home}
              alt="Home"
              className={`w-8 h-8 ${active === 'home' ? 'filter brightness-0 saturate-100' : ''}`}
              style={active === 'home' ? undefined : { filter: 'invert(51%) sepia(7%) saturate(520%) hue-rotate(336deg) brightness(92%) contrast(87%)' }}
            />
          </div>
          <div className={`label-pill px-3 py-1 rounded transition-all duration-300 opacity-0 group-hover:opacity-100 bg-[#e1e0d7] group-hover:bg-[#c8c6bc]`} aria-hidden={labelsSuppressed}>
            <span className="text-black text-sm font-semibold uppercase tracking-wide">Home</span>
          </div>
        </button>

        <button
          onClick={() => { setLabelsSuppressed(true); onNavigate('about'); }}
          className={`${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} flex items-center justify-start space-x-4 group transition-all duration-200 hover:scale-105 dock-row ${
            active === 'about' ? 'opacity-100' : 'opacity-70 hover:opacity-100'
          }`}
          disabled={disabled}
          aria-current={active === 'about' ? 'page' : undefined}
        >
          <div className={`w-[66px] h-[66px] rounded-lg flex items-center justify-center dock-item ${
            active === 'about'
              ? 'bg-white/50 border border-white/60 backdrop-blur-md'
              : 'bg-white/30 border border-white/40 backdrop-blur-md group-hover:bg-white/40'
          }`}>
            <img src={icons.about} alt="About Me" className={`w-8 h-8 ${active === 'about' ? 'filter brightness-0 saturate-100' : ''}`} />
          </div>
          <div className={`label-pill px-3 py-1 rounded transition-all duration-300 opacity-0 group-hover:opacity-100 bg-[#e1e0d7] group-hover:bg-[#c8c6bc]`} aria-hidden={labelsSuppressed}>
            <span className="text-black text-sm font-semibold uppercase tracking-wide">ABOUT ME</span>
          </div>
        </button>

        <button
          onClick={() => { setLabelsSuppressed(true); onNavigate('case-study'); }}
          className={`${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} flex items-center justify-start space-x-4 group transition-all duration-200 hover:scale-105 dock-row ${
            active === 'case-study' ? 'opacity-100' : 'opacity-70 hover:opacity-100'
          }`}
          disabled={disabled}
          aria-current={active === 'case-study' ? 'page' : undefined}
        >
          <div className={`w-[66px] h-[66px] rounded-lg flex items-center justify-center dock-item ${
            active === 'case-study'
              ? 'bg-white/50 border border-white/60 backdrop-blur-md'
              : 'bg-white/30 border border-white/40 backdrop-blur-md group-hover:bg-white/40'
          }`}>
            <img src={icons.case} alt="Case Study" className={`w-8 h-8 ${active === 'case-study' ? 'filter brightness-0 saturate-100' : ''}`} />
          </div>
          <div className={`label-pill px-3 py-1 rounded transition-all duration-300 opacity-0 group-hover:opacity-100 bg-[#e1e0d7] group-hover:bg-[#c8c6bc]`} aria-hidden={labelsSuppressed}>
            <span className="text-black text-sm font-semibold uppercase tracking-wide">CASE STUDY</span>
          </div>
        </button>

        <button
          onClick={() => { setLabelsSuppressed(true); onNavigate('contact'); }}
          className={`${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} flex items-center justify-start space-x-4 group transition-all duration-200 hover:scale-105 dock-row ${
            active === 'contact' ? 'opacity-100' : 'opacity-70 hover:opacity-100'
          }`}
          disabled={disabled}
          aria-current={active === 'contact' ? 'page' : undefined}
        >
          <div className={`w-[66px] h-[66px] rounded-lg flex items-center justify-center dock-item ${
            active === 'contact'
              ? 'bg-white/50 border border-white/60 backdrop-blur-md'
              : 'bg-white/30 border border-white/40 backdrop-blur-md group-hover:bg-white/40'
          }`}>
            <img src={icons.contact} alt="Contact Me" className={`w-8 h-8 ${active === 'contact' ? 'filter brightness-0 saturate-100' : ''}`} />
          </div>
          <div className={`label-pill px-3 py-1 rounded transition-all duration-300 opacity-0 group-hover:opacity-100 bg-[#e1e0d7] group-hover:bg-[#c8c6bc]`} aria-hidden={labelsSuppressed}>
            <span className="text-black text-sm font-semibold uppercase tracking-wide">Contact Me</span>
          </div>
        </button>
      </div>
    </div>
  );
}
