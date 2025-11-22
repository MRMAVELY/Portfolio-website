import React, { useState, useEffect } from 'react';
import SidebarNav from '@/components/SidebarNav';
import Cloud from '@/components/Cloud';
import InstagramCard from '@/components/InstagramCard';

export default function Home() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const ids = ['home-section', 'photo-gallery-section', 'case-study-section', 'about-section', 'contact-section'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        if (visible[0]) {
          const id = visible[0].target.id;
          if (id.includes('home')) setActive('home');
          else if (id.includes('photo')) setActive('home');
          else if (id.includes('case')) setActive('case-study');
          else if (id.includes('about')) setActive('about');
          else if (id.includes('contact')) setActive('contact');
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0.2 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navigateTo = (section: string) => {
    setActive(section);
    const map: Record<string, string> = {
      home: 'home-section',
      'case-study': 'case-study-section',
      about: 'about-section',
      contact: 'contact-section',
    };
    const id = map[section];
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf8ed] relative overflow-hidden font-lexend">
      <Cloud variant="left" className="absolute bottom-10 left-8 w-32 opacity-70" />
      <Cloud variant="right" className="absolute right-16 top-64 w-40 opacity-60" />

      <div className="flex">
        <SidebarNav active={active} onNavigate={navigateTo} />

        <div className="flex-1">
          <section id="home-section" className="min-h-screen">
            <div className="pt-16 pb-12 text-center">
              <h1 className="leading-none text-display">
                <span className="block">
                  <span className="text-brand-gray">Hey!</span>
                  <span className="text-brand-dark"> I’m Vimal</span>
                </span>
                <span className="block text-brand-dark">(0&gt;1) product designer</span>
              </h1>
            </div>

            <div className="flex justify-center items-center mb-16">
              <div className="relative h-96">
                <InstagramCard position="absolute left-0 top-12" rotation="transform -rotate-12" backgroundColor="bg-white" title="SHIPPED" subtitle="weekly builds" cardName="Project Alpha" width="w-44" height="h-56" />
                <InstagramCard position="absolute left-32 top-8" rotation="transform rotate-6" backgroundColor="bg-yellow-100" cardName="Design Portfolio" width="w-40" height="h-52" />
                <InstagramCard position="absolute left-56 top-0" rotation="transform -rotate-3" backgroundColor="bg-white" title="FOF Kozhikode" subtitle="@ Bangalore" textColor="text-black" cardName="Community Event" width="w-48" height="h-64" />
                <InstagramCard position="absolute right-32 top-12" rotation="transform rotate-12" backgroundColor="bg-gradient-to-br from-purple-200 to-pink-200" cardName="Creative Work" width="w-44" height="h-56" />
                <InstagramCard position="absolute right-0 top-16" rotation="transform -rotate-6" backgroundColor="bg-blue-50" cardName="Idea Board" width="w-36" height="h-48" />
              </div>
            </div>

            <div className="text-center px-8">
              <p className="text-xl text-gray-600 font-semibold leading-relaxed">
                I turn confusing products into "Ohhh, now I get it." moments.
                <br />
                Also, Figma is my happy place.
              </p>
            </div>
          </section>

          <section id="photo-gallery-section" className="min-h-screen py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">My Photos</h2>
              <p className="text-gray-600 text-lg">A collection of moments and memories</p>
            </div>
            <div className="px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1,2,3,4,5,6,7,8].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo {i}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="case-study-section" className="min-h-screen py-20 bg-gray-50">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Case Studies</h2>
              <p className="text-gray-600 text-lg">Exploring my design journey through real projects</p>
            </div>
            <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3,4,5,6].map((index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-600">Project {index} Image</span>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">Project Title {index}</h3>
                  <p className="text-gray-600 mb-4">Brief description of the project and its impact on user experience.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">UX Design</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Research</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="about-section" className="min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-dark mb-4">About Me</h2>
                <p className="text-gray-600 text-lg">Get to know the person behind the designs</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-gray-600">Profile Photo</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-dark mb-4">Hello, I'm Vimal</h3>
                  <p className="text-gray-700 mb-4">I'm a passionate product designer with a mission to create meaningful digital experiences.</p>
                  <p className="text-gray-700 mb-6">My approach combines user-centered design principles with business objectives.</p>
                  <div className="space-y-3">
                    {['User Experience Design','Product Strategy','Design Systems','Prototyping & Testing'].map((t) => (
                      <div key={t} className="flex items-center space-x-3"><div className="w-2 h-2 bg-brand-dark rounded-full"></div><span className="text-gray-700">{t}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact-section" className="min-h-screen py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-dark mb-4">Let's Connect</h2>
                <p className="text-gray-600 text-lg">Ready to create something amazing together?</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-brand-dark mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-brand-dark rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-brand-dark font-medium">hello@vimaldesigns.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-brand-dark mb-6">Send a Message</h3>
                  <form className="space-y-4">
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Your name" />
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="your.email@example.com" />
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Tell me about your project..."></textarea>
                    <button type="submit" className="w-full bg-brand-dark text-white py-3 rounded-lg font-medium">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}