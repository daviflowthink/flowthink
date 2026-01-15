'use client';

import { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export default function MobileNavbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isHomePage, setIsHomePage] = useState(true);

  const navItems: NavItem[] = [
    {
      label: 'Home',
      href: isHomePage ? '#home' : '/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: 'Quem somos',
      href: isHomePage ? '#quem-somos' : '/#quem-somos',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: 'Contato',
      href: isHomePage ? '#contato' : '/#contato',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  // Detect if we're on homepage and active section based on scroll position
  useEffect(() => {
    const currentPath = window.location.pathname;
    const isHome = currentPath === '/';
    setIsHomePage(isHome);

    if (isHome) {
      const handleScroll = () => {
        const sections = ['home', 'quem-somos', 'contato'];
        const scrollPosition = window.scrollY + 120; // Offset for better detection with top navbar

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Reset active section when not on homepage
      setActiveSection('');
    }
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      // We're on homepage, scroll to section
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 100; // Account for fixed header and mobile navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Navigate to homepage with hash
      window.location.href = href;
    }
  };

  // If not on homepage, show a simple back button
  if (!isHomePage) {
    return (
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#060915]/95 backdrop-blur-lg border-b border-white/10 shadow-xl">
        <div className="flex items-center justify-center px-2 py-3">
          <button
            onClick={() => window.history.back()}
            className="flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 min-w-[60px] text-white/70 hover:text-white hover:bg-white/10"
            aria-label="Voltar"
          >
            <div className="transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xs font-medium mt-1 transition-all duration-300 text-white/70">
              Voltar
            </span>
          </button>
        </div>
      </nav>
    );
  }

  return (
    <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#060915]/95 backdrop-blur-lg border-b border-white/10 shadow-xl mobile-navbar-scroll">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const isActive = isHomePage && activeSection === item.href.substring(1);
          return (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 min-w-[60px] ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-400 scale-110'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              aria-label={item.label}
            >
              <div className={`transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
                {item.icon}
              </div>
              <span className={`text-xs font-medium mt-1 transition-all duration-300 ${
                isActive ? 'text-cyan-400' : 'text-white/70'
              }`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}