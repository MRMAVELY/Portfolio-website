import React from 'react';

interface CloudProps {
  variant?: 'left' | 'right';
  className?: string;
}

const assets = {
  left: new URL('../../.figma/image/mia0d8x5-kekao53.svg', import.meta.url).href,
  right: new URL('../../.figma/image/mia0d8x5-75dks8b.svg', import.meta.url).href,
};

export default function Cloud({ variant = 'right', className = '' }: CloudProps) {
  const src = variant === 'left' ? assets.left : assets.right;
  return <img src={src} alt="decorative cloud" className={`${className} cloud-drift`} />;
}