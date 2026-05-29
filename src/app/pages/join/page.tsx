'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { FadeIn } from '@/components/MotionDiv';
import { GitHubIcon, HeartIcon } from '@/components/icons';

const roles = [
  {
    icon: '⚙️', title: '系统开发者',
    desc: '参与 BrightS 内核开发，需要了解操作系统原理和 C/C++ 编程。',
    skills: ['C / C++', '操作系统', 'x86_64', 'Assembly'],
  },
  {
    icon: '📝', title: '语言设计师',
    desc: '参与 D-- 编程语言的设计与实现，对编译器/解释器有兴趣。',
    skills: ['编译原理', 'LLVM', 'Go / Rust', '形式语言'],
  },
  {
    icon: '📊', title: '前端开发者',
    desc: '负责 FH Clac 和官网的 UI/UX 开发。',
    skills: ['React', 'TypeScript', 'CSS', 'UI/UX'],
  },
  {
    icon: '📚', title: '文档编写者',
    desc: '撰写项目文档、教程和博客文章。',
    skills: ['Markdown', '技术写作', '翻译', '整理'],
  },
];

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="加入我们" subtitle="与志同道合的开发者一起创造未来" />

      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 3rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              无论你是初学者还是资深开发者，这里都有你的位置。我们欢迎所有热爱技术、愿意学习和贡献的人加入。
            </p>
          </div>

          <div className="roles-grid">
            {roles.map((role, index) => (
              <FadeIn key={role.title} delay={index * 0.1}>
                <div className="card">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{role.icon}</div>
                  <h3 className="card-title">{role.title}</h3>
                  <p className="card-desc" style={{ marginBottom: '1rem' }}>{role.desc}</p>
                  <ul className="skill-tags">
                    {role.skills.map((skill) => (
                      <li key={skill} className="skill-tag">{skill}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div style={{ textAlign: 'center', background: '#1a1a2e', padding: '3rem', borderRadius: 24 }}>
              <h2 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '2rem' }}>准备好加入了吗？</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>通过以下方式联系我们，开始你的开源之旅</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://qm.qq.com/cgi-bin/qm/qr?k=8Y0nZ-6A5O4p3P3pT1vK9I2w5R4yA8V" target="_blank" className="btn btn-qq" style={{ borderRadius: 16 }}>
                  加入 QQ 群
                </a>
                <a href="https://github.com/OpenLight-Studio" target="_blank" className="btn btn-gh-dark" style={{ borderRadius: 16 }}>
                  <GitHubIcon size={20} /> GitHub
                </a>
                <a href="https://ifdian.net/a/OpenLight" target="_blank" className="btn" style={{ background: 'white', color: '#1a1a2e', borderRadius: 16 }}>
                  <HeartIcon size={20} /> 赞助我们
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
