'use client';

import { motion } from 'framer-motion';
import '../../layout.css';

const navLinks = [
  { name: '关于', href: '/pages/about' },
  { name: '项目', href: '/pages/projects' },
  { name: '成员', href: '/pages/members' },
  { name: '加入', href: '/pages/join' },
];

const members = [
  {
    name: 'Jason_CJ',
    handle: '@s12mcOvO',
    bio: '"Begin to do, not begin to say." 热爱技术探索与摄影，活跃于多个开源项目。参与 Solian 去中心化社交网络平台的开发，同时运营个人技术博客分享见解。',
    avatar: '/assets/Pictures/s12mcOvO.png',
    github: 'https://github.com/s12mcOvO',
    blog: 'http://s12mc.xyz',
    bilibili: 'https://space.bilibili.com/3493120769526189',
    role: '创始人 / 核心开发者',
  },
  {
    name: '等等个好人',
    handle: '@dengdeng2code',
    bio: '团队核心成员，专注于项目创意贡献。',
    avatar: '/assets/Pictures/dengdeng2code.jpg',
    github: 'https://github.com/dengdeng2code',
    role: '核心成员',
  },
  {
    name: '好心思能有什么小蓝呢',
    handle: '@XiaoLanawa',
    bio: '团队成员，正在学车的途中。运营个人博客记录生活点滴。',
    avatar: '/assets/Pictures/Xiaolan.jpg',
    github: 'https://github.com/XiaoLanawa',
    blog: 'http://xiaolanawa.top',
    role: '成员',
  },
  {
    name: 'Computer_漫画君',
    handle: '@Computer_Comic',
    bio: '团队核心成员，为项目注入创意与活力。',
    avatar: '/assets/Pictures/Computer_comic.jpg',
    github: 'https://github.com/Computer-Comic',
    role: '核心成员',
  },
];

export default function MembersPage() {
  return (
    <>
      <section style={{
        padding: '8rem 0 4rem',
        background: '#1a1a2e',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 30% 20%, rgba(255,107,53,0.15), transparent), radial-gradient(ellipse 40% 30% at 70% 80%, rgba(0,212,170,0.1), transparent)',
          }} />
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem' }}
          >
            团队成员
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)' }}
          >
            认识驱动 OpenLight 的人们
          </motion.p>
        </div>
      </section>

      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(15, 15, 26, 0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>
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
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: link.name === '成员' ? '#ff6b35' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.95rem',
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
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <section style={{ padding: '6rem 0', background: '#0f0f1a', minHeight: '100vh' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#1a1a2e',
                  borderRadius: 24,
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  border: '4px solid #0f0f1a',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                }}>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1.25rem' }}>{member.name}</h3>
                <span style={{ color: '#ff6b35', fontSize: '0.9rem', fontWeight: 500, display: 'block', marginBottom: '1rem' }}>{member.handle}</span>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{member.bio}</p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={member.github}
                    target="_blank"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      background: '#0f0f1a',
                      borderRadius: 8,
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  {member.blog && (
                    <a
                      href={member.blog}
                      target="_blank"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: '#0f0f1a',
                        borderRadius: 8,
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                      博客
                    </a>
                  )}
                  {member.bilibili && (
                    <a
                      href={member.bilibili}
                      target="_blank"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: '#0f0f1a',
                        borderRadius: 8,
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.4 5.6h-2.6c-.5-2.3-2.5-4-4.9-4.2V1.2h-2.4v.2c-2.4.2-4.4 2-4.9 4.2H3.6C1.6 5.6 0 7.2 0 9.2v6.4c0 2 1.6 3.6 3.6 3.6h2.5c.3 1.1 1.3 2 2.5 2h6.8c1.2 0 2.2-.8 2.5-2h2.5c2 0 3.6-1.6 3.6-3.6V9.2c0-2-1.6-3.6-3.6-3.6zM9.2 9.6c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm5.6 8.4h-7v-1.8h7v1.8z"/>
                      </svg>
                      B站
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
    </>
  );
}