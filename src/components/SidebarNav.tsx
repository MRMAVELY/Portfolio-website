import React from 'react';

interface SidebarNavProps {
  active?: string;
  onNavigate: (section: string) => void;
}

const icons = {
  home: new URL('../../.figma/image/mia0pvj4-hunimo4.svg', import.meta.url).href,
  case: new URL('../../.figma/image/mia0pvj4-ue1evww.svg', import.meta.url).href,
  about: new URL('../../.figma/image/mia0pvj4-r544lk8.svg', import.meta.url).href,
  contact: new URL('../../.figma/image/mia0pvj4-poha8a0.svg', import.meta.url).href,
};

export default function SidebarNav({ active = 'home', onNavigate }: SidebarNavProps) {
  return (
    <div className="w-[182px] flex flex-col justify-center min-h-screen">
      <div className="flex flex-col space-y-[15px] w-full px-4">
        <button
          onClick={() => onNavigate('home')}
          className={`flex items-center justify-center space-x-3 group transition-all duration-200 hover:scale-105 ${
            active === 'home' ? 'opacity-100' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-[#eeece3] group-hover:bg-[#d4d2c8]`}>
            <img src={icons.home} alt="Home" className="w-6 h-6" />
          </div>
          <div className={`px-3 py-1 rounded transition-all duration-200 opacity-0 group-hover:opacity-100 ${
            active === 'home' ? 'opacity-100 bg-[#c8c6bc]' : 'bg-[#e1e0d7] group-hover:bg-[#c8c6bc]'
          }`}>
            <span className="text-black text-sm font-semibold uppercase tracking-wide">Home</span>
          </div>
        </button>

        <button
          onClick={() => onNavigate('case-study')}
          className={`flex items-center justify-center space-x-3 group transition-all duration-200 hover:scale-105 ${
            active === 'case-study' ? 'opacity-100' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-[#eeece3] group-hover:bg-[#d4d2c8]`}>
            <img src={icons.case} alt="Case Study" className="w-6 h-6" />
          </div>
          <div className={`px-3 py-1 rounded transition-all duration-200 opacity-0 group-hover:opacity-100 ${
            active === 'case-study' ? 'opacity-100 bg-[#c8c6bc]' : 'bg-[#e1e0d7] group-hover:bg-[#c8c6bc]'
          }`}>
            <span className="text-black text-sm font-semibold uppercase tracking-wide">CASE STUDY</span>
          </div>
        </button>

        <button
          onClick={() => onNavigate('about')}
          className={`flex items-center justify-center space-x-3 group transition-all duration-200 hover:scale-105 ${
            active === 'about' ? 'opacity-100' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-[#eeece3] group-hover:bg-[#d4d2c8]`}>
            <img src={icons.about} alt="About Me" className="w-6 h-6" />
          </div>
          <div className={`px-3 py-1 rounded transition-all duration-200 opacity-0 group-hover:opacity-100 ${
            active === 'about' ? 'opacity-100 bg-[#c8c6bc]' : 'bg-[#e1e0d7] group-hover:bg-[#c8c6bc]'
          }`}>
            <span className="text-black text-sm font-semibold uppercase tracking-wide">ABOUT ME</span>
          </div>
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className={`flex items-center justify-center space-x-3 group transition-all duration-200 hover:scale-105 ${
            active === 'contact' ? 'opacity-100' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-[#eeece3] group-hover:bg-[#d4d2c8]`}>
            <img src={icons.contact} alt="Contact Me" className="w-6 h-6" />
          </div>
          <div className={`px-3 py-1 rounded transition-all duration-200 opacity-0 group-hover:opacity-100 ${
            active === 'contact' ? 'opacity-100 bg-[#c8c6bc]' : 'bg-[#e1e0d7] group-hover:bg-[#c8c6bc]'
          }`}>
            <span className="text-black text-sm font-semibold uppercase tracking-wide">Contact Me</span>
          </div>
        </button>
      </div>
    </div>
  );
}
