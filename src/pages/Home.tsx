import React, { useState, useEffect } from 'react';
import SidebarNav from '@/components/SidebarNav';
import Cloud from '@/components/Cloud';
import FigmaFrame from '@/components/FigmaFrame';
import SnowfallOverlay from '@/components/SnowfallOverlay';
import ContactButton from '@/components/ContactButton';
import AboutFrame from '../../.figma/524_25';
import CaseStudyFrame from '../../.figma/561_2132';

export default function Home() {
  const [active, setActive] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const ids = ['home-section', 'about-section', 'case-study-section', 'contact-section'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        if (visible[0] && !isScrolling) {
          const id = visible[0].target.id;
          if (id.includes('home')) setActive('home');
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
  }, [isScrolling]);

  // motion preference is checked inline where needed via matchMedia

  

  const navigateTo = (section: string) => {
    if (isScrolling) return;
    const map: Record<string, string> = {
      home: 'home-section',
      'case-study': 'case-study-section',
      about: 'about-section',
      contact: 'contact-section',
    };
    const id = map[section];
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.scrollIntoView();
      setActive(section);
      return;
    }
    const duration = 450;
    const start = window.scrollY;
    const target = window.scrollY + el.getBoundingClientRect().top;
    const diff = target - start;
    let startTime: number | null = null;
    const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    setIsScrolling(true);
    const step = (time: number) => {
      if (startTime === null) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      setScrollProgress(progress);
      window.scrollTo(0, start + diff * eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setIsScrolling(false);
        setScrollProgress(0);
        setActive(section);
      }
    };
    requestAnimationFrame(step);
  };

  return (
    <div className="min-h-screen w-screen max-w-screen relative overflow-hidden font-lexend">
      <SnowfallOverlay />
      <div className={`${isScrolling ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 fixed top-0 left-0 right-0 z-[60] pointer-events-none`}>
        <div className="h-1 bg-black/10">
          <div className="h-1 bg-black" style={{ width: `${scrollProgress * 100}%` }} />
        </div>
      </div>

      {/* Fixed background layer */}
      <div className="fixed inset-0 -z-10 bg-[#faf8ed]">
        <Cloud variant="left" className="fixed bottom-6 sm:bottom-10 left-8 sm:left-[220px] w-24 sm:w-32 opacity-70" />
        <Cloud variant="right" className="fixed right-6 sm:right-16 top-48 sm:top-64 w-28 sm:w-40 opacity-60" />
      </div>

      <div className="w-full max-w-screen overflow-x-hidden">
        <div className="w-full">
          <section id="home-section" className="min-h-screen relative">
            <div className="text-center p-0">
              <h1 className="leading-none text-display">
                <div className="flex flex-col items-center justify-center gap-5 fade-in">
                  <div className="flex items-center justify-center gap-5 pt-10 2xl:pt-12">
                    <span className="text-brand-gray flip-word" style={{ animationDelay: '80ms' }}>Hey!</span>
                    <span className="text-brand-dark flip-word" style={{ animationDelay: '200ms' }}>I’m Vimal</span>
                  </div>
                  <span className="text-brand-dark flip-word" style={{ animationDelay: '320ms' }}>(0 to 1) Product Designer</span>
                </div>
              </h1>
            </div>

            <div className="fixed inset-0 flex items-center justify-start pl-4 sm:pl-6 md:pl-10 z-50 pointer-events-none">
              <div className="pointer-events-auto scale-90 sm:scale-100">
                <SidebarNav disabled={isScrolling} active={active} onNavigate={navigateTo} mode="inline" />
              </div>
            </div>

            

            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-center px-6">
              <div className="w-full max-w-[743px] 2xl:max-w-[1115px]">
                <FigmaFrame />
              </div>
            </div>

            <div className="text-center px-8 absolute bottom-8 left-0 right-0">
              <div id="intro-with-cta" className="mx-auto flex flex-col items-center justify-center gap-4 sm:gap-5 2xl:scale-150 2xl:origin-center 2xl:pb-16">
                <ContactButton />
                <p className="text-xl text-[#171413] font-semibold leading-relaxed">
                  I turn confusing products into "Ohhh, now I get it." moments.
                  <br />
                  Also, Figma is my happy place.
                </p>
              </div>
            </div>
          </section>

          

          <section id="about-section" className="min-h-screen py-20 bg-white">
            <div className="mx-auto px-8 w-full flex items-center justify-center">
              <div className="w-full max-w-[1280px]">
                <AboutFrame />
              </div>
            </div>
          </section>

          <section id="case-study-section" className="min-h-screen py-20 bg-brand-cream">
            <div className="mx-auto px-8 w-full flex items-center justify-center">
              <div className="w-full max-w-[1280px]">
                <CaseStudyFrame />
              </div>
            </div>
          </section>

          <section id="contact-section" className="min-h-screen py-20 bg-white">
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
