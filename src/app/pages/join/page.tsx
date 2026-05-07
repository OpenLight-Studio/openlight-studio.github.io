'use client';

import { motion } from 'framer-motion';
import '../../layout.css';

const navLinks = [
  { name: '关于', href: '/pages/about' },
  { name: '项目', href: '/pages/projects' },
  { name: '成员', href: '/pages/members' },
  { name: '加入', href: '/pages/join' },
];

const roles = [
  {
    icon: '⚙️',
    title: '系统开发者',
    desc: '参与 BrightS 内核开发，需要了解操作系统原理和 C/C++ 编程。',
    skills: ['C / C++', '操作系统', 'x86_64', 'Assembly'],
  },
  {
    icon: '📝',
    title: '语言设计师',
    desc: '参与 D-- 编程语言的设计与实现，对编译器/解释器有兴趣。',
    skills: ['编译原理', 'LLVM', 'Go / Rust', '形式语言'],
  },
  {
    icon: '📊',
    title: '前端开发者',
    desc: '负责 FH Clac 和官网的 UI/UX 开发。',
    skills: ['React', 'TypeScript', 'CSS', 'UI/UX'],
  },
  {
    icon: '📚',
    title: '文档编写者',
    desc: '撰写项目文档、教程和博客文章。',
    skills: ['Markdown', '技术写作', '翻译', '整理'],
  },
];

export default function JoinPage() {
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
            加入我们
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)' }}
          >
            与志同道合的开发者一起创造未来
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
                  color: link.name === '加入' ? '#ff6b35' : 'rgba(255,255,255,0.7)',
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
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 3rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              无论你是初学者还是资深开发者，这里都有你的位置。我们欢迎所有热爱技术、愿意学习和贡献的人加入。
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#1a1a2e',
                  padding: '2rem',
                  borderRadius: 24,
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{role.icon}</div>
                <h3 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1.25rem' }}>{role.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '1rem' }}>{role.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {role.skills.map((skill) => (
                    <li key={skill} style={{ padding: '0.35rem 0.75rem', background: '#0f0f1a', borderRadius: 20, fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', background: '#1a1a2e', padding: '3rem', borderRadius: 24 }}
          >
            <h2 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '2rem' }}>准备好加入了吗？</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>通过以下方式联系我们，开始你的开源之旅</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://qm.qq.com/cgi-bin/qm/qr?k=8Y0nZ-6A5O4p3P3pT1vK9I2w5R4yA8V"
                target="_blank"
                style={{ background: '#12b7f5', color: 'white', border: 'none', borderRadius: 16, fontWeight: 600, padding: '1rem 2rem', textDecoration: 'none' }}
              >
                加入 QQ 群
              </a>
              <a
                href="https://github.com/OpenLight-Studio"
                target="_blank"
                style={{ background: '#24292e', color: 'white', border: 'none', borderRadius: 16, fontWeight: 600, padding: '1rem 2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://ifdian.net/a/OpenLight"
                target="_blank"
                style={{ background: 'white', color: '#1a1a2e', border: 'none', borderRadius: 16, fontWeight: 600, padding: '1rem 2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                赞助我们
              </a>
            </div>
          </motion.div>
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