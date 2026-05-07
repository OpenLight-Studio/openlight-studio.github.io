'use client';

import { motion } from 'framer-motion';
import '../../layout.css';

const navLinks = [
  { name: '关于', href: '/pages/about' },
  { name: '项目', href: '/pages/projects' },
  { name: '成员', href: '/pages/members' },
  { name: '加入', href: '/pages/join' },
];

const aboutCards = [
  {
    icon: '🎯',
    title: '我们的使命',
    desc: '探索底层技术，简化编程学习，让每个人都能感受创造的乐趣。',
  },
  {
    icon: '🔬',
    title: '技术创新',
    desc: '从零构建操作系统内核，开发专用编程语言，创造独特的数据可视化工具。',
  },
  {
    icon: '🌍',
    title: '开源精神',
    desc: '所有项目开源分享，期待与全球开发者共同成长。',
  },
  {
    icon: '🤝',
    title: '社区协作',
    desc: '无论水平高低，欢迎每一位热爱技术的伙伴加入。',
  },
];

const values = [
  { icon: '💡', title: '创新', desc: '敢于尝试新技术，突破传统边界' },
  { icon: '🎨', title: '美学', desc: '追求代码与视觉的优雅统一' },
  { icon: '🔄', title: '迭代', desc: '小步快跑，持续改进' },
  { icon: '📚', title: '学习', desc: '保持好奇心，探索未知领域' },
];

const timeline = [
  { date: '2022', title: '创立', desc: 'OpenLight Studio 成立' },
  { date: '2022', title: 'BrightS', desc: '发布 BrightS 操作系统内核' },
  { date: '2023', title: 'D--', desc: '推出 D-- 编程语言' },
  { date: '2024', title: 'FH Clac', desc: '发布 FH Clac 数据可视化工具' },
];

export default function AboutPage() {
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
            关于 OpenLight
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)' }}
          >
            成立于 2022，探索底层技术的开源工作室
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
                  color: link.name === '关于' ? '#ff6b35' : 'rgba(255,255,255,0.7)',
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '6rem' }}>
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
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
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{card.icon}</div>
                <h3 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1.25rem' }}>{card.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>核心价值观</h2>
            <div style={{ width: 60, height: 4, background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', margin: '0 auto', borderRadius: 2 }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '6rem' }}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ padding: '2rem', background: '#1a1a2e', borderRadius: 24, textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                <h4 style={{ color: 'white', marginBottom: '0.75rem' }}>{value.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>发展历程</h2>
            <div style={{ width: 60, height: 4, background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', margin: '0 auto', borderRadius: 2 }} />
          </div>

          <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #ff6b35, #00d4aa)' }} />
            {timeline.map((item, index) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ position: 'relative', paddingLeft: 60, paddingBottom: '2rem' }}
              >
                <div style={{ position: 'absolute', left: 12, top: 0, width: 18, height: 18, background: '#ff6b35', borderRadius: '50%', border: '3px solid #0f0f1a' }} />
                <div style={{ background: '#1a1a2e', padding: '1.5rem', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', color: 'white', borderRadius: 20, fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {item.date}
                  </span>
                  <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{item.desc}</p>
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