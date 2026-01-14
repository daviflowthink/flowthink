'use client';

import Link from 'next/link';
import React, { useState } from 'react';

type Variant = 'dark' | 'light';

interface NavLink {
  label: string;
  href: string;
}

interface SocialIcon {
  title: string;
  href: string;
  svg: React.ReactNode;
}

interface HeaderProps {
  variant?: Variant;
  logoText?: string;
  links?: NavLink[];
  socialIcons?: SocialIcon[];
}

export default function Header({
  variant = 'dark',
  logoText = 'FlowThink',
  links = [
    { label: 'Home', href: '#home' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Quem somos', href: '#quem-somos' },
    { label: 'Contato', href: '#contato' }
  ],
  socialIcons
}: HeaderProps) {
  const isDark = variant === 'dark';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`w-full ${isDark ? 'bg-[#060915] text-white' : 'bg-white text-zinc-900'} py-3 sm:py-4 sticky top-0 z-50`}
      role="banner"
      aria-hidden={false}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-extrabold text-lg sm:text-xl lg:text-2xl">{logoText}</Link>
        </div>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {links.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              className="text-sm lg:text-base font-medium hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden lg:flex items-center gap-2 lg:gap-3">
            {(socialIcons ?? defaultSocials).map((s) => (
              <a
                key={s.href}
                href={s.href}
                title={s.title}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                aria-label={s.title}
              >
                {s.svg}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="2" rx="1" fill="currentColor" />
                  <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
                  <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-[#060915]' : 'bg-white'} border-t ${isDark ? 'border-white/10' : 'border-zinc-200'} mt-3`}>
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {links.map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                className="text-base font-medium hover:opacity-80 transition-opacity py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          
          <div className={`flex items-center justify-center gap-4 px-4 py-4 border-t ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
            {(socialIcons ?? defaultSocials).map((s) => (
              <a
                key={s.href}
                href={s.href}
                title={s.title}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                aria-label={s.title}
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

const defaultSocials: SocialIcon[] = [
  {
    title: 'Twitter',
    href: '#',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.7.4-1.5.7-2.3.9C16.8 6 15.7 5.5 14.5 5.5c-2 0-3.6 1.7-3.6 3.8 0 .3 0 .6.1.9C7.7 10.1 5.2 8.7 3.6 6.6c-.4.7-.6 1.5-.6 2.4 0 1.3.7 2.4 1.7 3-.6 0-1.1-.2-1.5-.4v.1c0 1.9 1.3 3.5 3 3.9-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.2 1.6 2.1 3 2.1C7.8 19 6 19.6 4.2 19.6c-.3 0-.6 0-.8-.1C4.9 20.6 6.9 21.5 9.1 21.5c6.1 0 9.4-5 9.4-9.3v-.4c.6-.4 1-1 1.3-1.6-.6.3-1.2.5-1.9.6z" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'LinkedIn',
    href: '#',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0V8zm7.5 0h4.8v2.2h.07c.67-1.3 2.3-2.7 4.73-2.7 5.06 0 6 3.34 6 7.68V24h-5V16.7c0-1.74-.03-3.98-2.42-3.98-2.42 0-2.79 1.88-2.79 3.82V24h-5V8z" fill="currentColor" />
      </svg>
    )
  }
];
