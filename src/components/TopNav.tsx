import React from 'react';

interface TopNavProps {
  active: string;
  onNavigate: (section: string) => void;
}

export default function TopNav({ active, onNavigate }: TopNavProps) {
  const items: { key: string; label: string }[] = [
    { key: 'home', label: 'Home' },
    { key: 'case-study', label: 'Case Study' },
    { key: 'about', label: 'About Me' },
    { key: 'contact', label: 'Contact Me' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#faf8ed] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-brand-dark font-semibold">Portfolio</div>
        <div className="flex items-center gap-4 md:gap-6">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              aria-current={active === item.key ? 'page' : undefined}
              className={`text-sm font-medium transition-colors ${
                active === item.key ? 'text-brand-dark border-b-2 border-black' : 'text-gray-600 hover:text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}