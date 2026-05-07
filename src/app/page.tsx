'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './layout.css';

const navLinks = [
  { name: '关于', href: '/pages/about' },
  { name: '项目', href: '/pages/projects' },
  { name: '成员', href: '/pages/members' },
  { name: '加入', href: '/pages/join' },
];

const previewCards = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: '关于我们',
    desc: '了解 OpenLight Studio 的起源与使命',
    link: '了解更多 →',
    href: '/pages/about',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: '核心项目',
    desc: '探索 BrightS、D--、FH Clac 等项目',
    link: '查看项目 →',
    href: '/pages/projects',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: '团队成员',
    desc: '认识驱动 OpenLight 的人们',
    link: '认识成员 →',
    href: '/pages/members',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: '加入我们',
    desc: '与志同道合的开发者一起创造',
    link: '立即加入 →',
    href: '/pages/join',
  },
];

const statsData = [
  { number: 4, label: '开源项目' },
  { number: 119, label: '代码提交' },
  { number: 4, label: '团队成员' },
  { number: 2, label: 'GitHub Stars' },
];

const techItems = [
  { icon: '⚙️', name: 'C / C++', desc: '系统级编程' },
  { icon: '📜', name: 'Assembly', desc: '底层开发' },
  { icon: '🐧', name: 'Linux', desc: '操作系统' },
  { icon: '📦', name: 'CMake', desc: '构建系统' },
  { icon: '🔧', name: 'Git', desc: '版本控制' },
  { icon: '🐙', name: 'GitHub', desc: '代码托管' },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typedText, setTypedText] = useState('');

  const typewriterTexts = [
    "Building BrightS Kernel...",
    "Designing D-- for Teens...",
    "Visualizing Data with FH Clac...",
    "OpenLight Studio: Est. 2022",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrollPercent);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    const type = () => {
      const currentText = typewriterTexts[textIndex];

      if (isDeleting) {
        setTypedText(currentText.substring(0, charIndex - 1));
        charIndex--;
        typeSpeed = 50;
      } else {
        setTypedText(currentText.substring(0, charIndex + 1));
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterTexts.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = () => {
    document.querySelector('.preview-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation */}
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
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <div style={{
              width: 32,
              height: 32,
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
            }}>
              OL
            </div>
            <span style={{ fontFamily: 'Space Grotesk', fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>OpenLight</span>
          </a>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="nav-links-desktop">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  transition: 'color 0.3s',
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://github.com/OpenLight-Studio"
              target="_blank"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'white',
                color: '#1a1a2e',
                borderRadius: 8,
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'transform 0.3s',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: 5,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
            }}
            className="hamburger-btn"
          >
            <span style={{ width: 24, height: 2, background: 'white', borderRadius: 2 }} />
            <span style={{ width: 24, height: 2, background: 'white', borderRadius: 2 }} />
            <span style={{ width: 24, height: 2, background: 'white', borderRadius: 2 }} />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 70,
          left: 0,
          width: '100%',
          background: '#1a1a2e',
          flexDirection: 'column',
          padding: '1rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
          zIndex: 999,
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                padding: '1rem',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 500,
                borderRadius: 8,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem',
      }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            width: 600,
            height: 600,
            background: 'rgba(255,107,53,0.2)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            top: -200,
            right: -100,
            animation: 'float 20s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute',
            width: 400,
            height: 400,
            background: 'rgba(0,212,170,0.15)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            bottom: -100,
            left: -100,
            animation: 'float 20s ease-in-out infinite',
            animationDelay: '-7s',
          }} />
          <div style={{
            position: 'absolute',
            width: 300,
            height: 300,
            background: 'rgba(102,126,234,0.15)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            top: '40%',
            left: '30%',
            animation: 'float 20s ease-in-out infinite',
            animationDelay: '-14s',
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 50,
              color: '#4aeadc',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '2rem',
            }}
          >
            <span style={{
              width: 8,
              height: 8,
              background: '#00d4aa',
              borderRadius: '50%',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            成立于 2022 · 探索底层技术
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: 'white',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
            }}
          >
            We Build the <span style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Light</span> Behind Code.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}
          >
            透过代码，传递光亮
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontSize: '1rem', color: '#4aeadc', marginBottom: '2.5rem', fontFamily: 'monospace', minHeight: '1.5rem' }}
          >
            {typedText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            className="hero-btns"
          >
            <a
              href="/pages/projects"
              style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                color: 'white',
                border: 'none',
                borderRadius: 16,
                fontWeight: 600,
                fontSize: '1rem',
                padding: '1rem 2rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              探索项目
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="/pages/join"
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: 16,
                fontWeight: 600,
                fontSize: '1rem',
                padding: '1rem 2rem',
                textDecoration: 'none',
              }}
            >
              加入我们
            </a>
          </motion.div>
        </div>

        <div
          onClick={scrollToSection}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s ease-in-out infinite',
            cursor: 'pointer',
          }}
        >
          <span style={{
            display: 'block',
            width: 24,
            height: 40,
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: 12,
            position: 'relative',
          }}>
            <span style={{
              position: 'absolute',
              top: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 4,
              height: 8,
              background: 'white',
              borderRadius: 2,
              animation: 'scrollDown 2s ease-in-out infinite',
            }} />
          </span>
        </div>
      </section>

      <section className="preview-section" style={{ padding: '6rem 0', background: '#0f0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>探索 OpenLight</h2>
            <div style={{ width: 60, height: 4, background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', margin: '0 auto', borderRadius: 2 }} />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {previewCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={card.href}
                  style={{
                    background: '#1a1a2e',
                    padding: '2rem',
                    borderRadius: 24,
                    textAlign: 'center',
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.4s ease',
                    display: 'block',
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#ff6b35' }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'white' }}>{card.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '1rem' }}>{card.desc}</p>
                  <span style={{ color: '#ff6b35', fontWeight: 600, fontSize: '0.9rem' }}>{card.link}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#1a1a2e', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '3rem', fontWeight: 700, color: '#ff6b35', marginBottom: '0.5rem' }}>
                  {stat.number}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#0f0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>技术栈</h2>
            <div style={{ width: 60, height: 4, background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', margin: '0 auto', borderRadius: 2 }} />
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '1rem auto 0' }}>我们使用这些技术构建项目</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {techItems.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  background: '#1a1a2e',
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{tech.icon}</div>
                <h4 style={{ fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem' }}>{tech.name}</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, background: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1rem' }}>准备好加入我们了吗？</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 500, margin: '0 auto 2rem' }}>无论你是初学者还是资深开发者，这里都有你的位置</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/OpenLight-Studio"
              target="_blank"
              style={{ background: 'white', color: '#1a1a2e', border: 'none', borderRadius: 16, fontWeight: 600, padding: '1rem 2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              访问 GitHub
            </a>
            <a
              href="https://ifdian.net/a/OpenLight"
              target="_blank"
              style={{ background: 'white', color: '#1a1a2e', border: 'none', borderRadius: 16, fontWeight: 600, padding: '1rem 2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              爱发电赞助
            </a>
          </div>
        </motion.div>
      </section>

      <footer style={{ background: '#1a1a2e', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>&copy; 2022-2026 OpenLight Studio. All Rights Reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', margin: '1rem 0' }}>
            <a href="https://github.com/OpenLight-Studio" target="_blank" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>GitHub</a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
            <a href="https://ifdian.net/a/OpenLight" target="_blank" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>爱发电</a>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>Designed with Light & Code.</p>
        </div>
      </footer>

      <button
        className={showScrollTop ? 'scroll-to-top visible' : 'scroll-to-top'}
        onClick={scrollToTop}
        aria-label="回到顶部"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      <style jsx global>{`
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}