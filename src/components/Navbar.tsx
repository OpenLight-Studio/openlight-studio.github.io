'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navigation';
import { GitHubIcon } from './icons';

export function Navbar() {
  const pathname = usePathname() ?? '';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          background: scrolled ? 'rgba(15, 15, 26, 0.95)' : 'rgba(15, 15, 26, 0.7)',
          backdropFilter: 'blur(20px)',
          zIndex: 1000,
          transition: 'all 0.4s ease',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
          boxShadow: scrolled ? '0 8px 24px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <div className="nav-logo-icon">OL</div>
            <span className="nav-logo-text">OpenLight</span>
          </a>

          <div className="nav-links-desktop">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/pages/about' && pathname.startsWith(link.href));
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="https://github.com/OpenLight-Studio"
              target="_blank"
              className="nav-gh-btn"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`hamburger-btn ${mobileOpen ? 'hamburger-open' : ''}`}
            aria-label="菜单"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileOpen(false)} />
      )}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu-open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="mobile-menu-link" onClick={() => setMobileOpen(false)}>
            {link.name}
          </a>
        ))}
        <a href="https://github.com/OpenLight-Studio" target="_blank" className="mobile-menu-link" onClick={() => setMobileOpen(false)}>
          GitHub
        </a>
      </div>
    </>
  );
}
