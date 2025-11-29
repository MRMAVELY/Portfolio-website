import React, { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

export default function SnowfallOverlay() {
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setEnabled(!reduced);
    }
  }, []);

  if (!enabled) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      <Snowfall color="#fff" snowflakeCount={150} style={{ background: 'transparent' }} />
    </div>
  );
}