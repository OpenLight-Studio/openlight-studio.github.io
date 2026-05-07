'use client';

import { motion } from 'framer-motion';
import '../../layout.css';

const navLinks = [
  { name: '关于', href: '/pages/about' },
  { name: '项目', href: '/pages/projects' },
  { name: '成员', href: '/pages/members' },
  { name: '加入', href: '/pages/join' },
];

const projects = [
  {
    tag: '操作系统',
    name: 'BrightS',
    license: 'GPL-3.0',
    desc: 'BrightS 是一个自研的操作系统内核，专注于简化系统编程学习。我们从零开始构建，旨在为开发者提供一个易于理解、可扩展的操作系统基础。',
    features: ['从零构建的微内核设计', '简化文件系统实现', '易于理解的进程管理', '支持 x86_64 架构'],
    stats: ['⭐ 1 Star', '📂 3 Repository', '👥 2 Contributors'],
    icon: '💻',
    github: 'https://github.com/OpenLight-Studio/BrightS',
  },
  {
    tag: '编程语言',
    name: 'D-- (D Struct Language)',
    license: 'MIT',
    desc: 'D-- 是一门为青少年设计的入门级编程语言。语法简洁易懂，结合 C 语言与现代语言的特性，让编程学习变得更加有趣。',
    features: ['简洁易学的语法设计', '编译型语言性能', '完善的错误提示', '配套学习资源'],
    stats: ['⭐ 1 Star', '📂 2 Repository', '👥 3 Contributors'],
    icon: '📝',
    github: 'https://github.com/OpenLight-Studio/D--',
  },
  {
    tag: '数据可视化',
    name: 'FH Clac',
    license: 'Apache-2.0',
    desc: 'FH Clac 是一款功能强大的数据可视化工具，帮助用户将复杂数据转化为直观易懂的图表。特别适合教育者和数据分析师使用。',
    features: ['多种图表类型支持', '交互式数据探索', '导出多种格式', '轻量级高性能'],
    stats: ['⭐ 0 Star', '📂 1 Repository', '👥 1 Contributors'],
    icon: '📊',
    github: 'https://github.com/OpenLight-Studio/FH-Clac',
  },
  {
    tag: '工具库',
    name: 'BrightS-Suite',
    license: 'MIT',
    desc: 'BrightS-Suite 是 BrightS 相关的工具集，包含开发工具、调试辅助和示例代码，帮助开发者更好地使用 BrightS 内核。',
    features: ['命令行工具集', '调试辅助脚本', '丰富的示例代码', '文档与教程'],
    stats: ['⭐ 0 Star', '📂 1 Repository', '👥 1 Contributors'],
    icon: '🛠️',
    github: 'https://github.com/OpenLight-Studio/BrightS-Suite',
  },
];

export default function ProjectsPage() {
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
            核心项目
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)' }}
          >
            从操作系统到编程语言，探索我们的开源项目
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
                  color: link.name === '项目' ? '#ff6b35' : 'rgba(255,255,255,0.7)',
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#1a1a2e',
                  borderRadius: 24,
                  border: '1px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2rem', background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '3.5rem' }}>{project.icon}</div>
                  <div style={{ flex: 1 }}>
                    <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', color: 'white', borderRadius: 20, fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                      {project.tag}
                    </span>
                    <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.25rem' }}>{project.name}</h2>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>{project.license}</span>
                  </div>
                </div>

                <div style={{ padding: '2rem' }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: 1.8 }}>{project.desc}</p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1rem' }}>特性</h4>
                    <ul style={{ listStyle: 'none', display: 'grid', gap: '0.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                      {project.features.map((feature) => (
                        <li key={feature} style={{ color: 'rgba(255,255,255,0.6)', paddingLeft: '1.5rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#00d4aa', fontWeight: 'bold' }}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {project.stats.map((stat) => (
                      <span key={stat} style={{ padding: '0.5rem 1rem', background: '#0f0f1a', borderRadius: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
                        {stat}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    style={{
                      background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: 16,
                      padding: '0.75rem 1.5rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    查看源码
                  </a>
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