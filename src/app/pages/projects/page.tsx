'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { FadeIn } from '@/components/MotionDiv';
import { GitHubIcon } from '@/components/icons';

const projects = [
  {
    tag: '操作系统', name: 'BrightS', license: 'GPL-3.0',
    desc: 'BrightS 是一个自研的操作系统内核，专注于简化系统编程学习。我们从零开始构建，旨在为开发者提供一个易于理解、可扩展的操作系统基础。',
    features: ['从零构建的微内核设计', '简化文件系统实现', '易于理解的进程管理', '支持 x86_64 架构'],
    stats: ['⭐ 1 Star', '📂 3 Repository', '👥 2 Contributors'],
    icon: '💻',
    github: 'https://github.com/OpenLight-Studio/BrightS',
  },
  {
    tag: '编程语言', name: 'D-- (D Struct Language)', license: 'MIT',
    desc: 'D-- 是一门为青少年设计的入门级编程语言。语法简洁易懂，结合 C 语言与现代语言的特性，让编程学习变得更加有趣。',
    features: ['简洁易学的语法设计', '编译型语言性能', '完善的错误提示', '配套学习资源'],
    stats: ['⭐ 1 Star', '📂 2 Repository', '👥 3 Contributors'],
    icon: '📝',
    github: 'https://github.com/OpenLight-Studio/D--',
  },
  {
    tag: '数据可视化', name: 'FH Clac', license: 'Apache-2.0',
    desc: 'FH Clac 是一款功能强大的数据可视化工具，帮助用户将复杂数据转化为直观易懂的图表。特别适合教育者和数据分析师使用。',
    features: ['多种图表类型支持', '交互式数据探索', '导出多种格式', '轻量级高性能'],
    stats: ['⭐ 0 Star', '📂 1 Repository', '👥 1 Contributors'],
    icon: '📊',
    github: 'https://github.com/OpenLight-Studio/FH-Clac',
  },
  {
    tag: '工具库', name: 'BrightS-Suite', license: 'MIT',
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
      <Navbar />
      <PageHeader title="核心项目" subtitle="从操作系统到编程语言，探索我们的开源项目" />

      <section className="section section-dark">
        <div className="container">
          <div className="project-list">
            {projects.map((project, index) => (
              <FadeIn key={project.name} delay={index * 0.1}>
                <div className="project-card">
                  <div className="project-card-header">
                    <div className="project-icon">{project.icon}</div>
                    <div className="project-meta" style={{ flex: 1 }}>
                      <span className="project-tag">{project.tag}</span>
                      <h2 className="project-name">{project.name}</h2>
                      <span className="project-license">{project.license}</span>
                    </div>
                  </div>

                  <div className="project-body">
                    <p className="project-desc">{project.desc}</p>

                    <h4 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1rem' }}>特性</h4>
                    <ul className="feature-list">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <div className="stat-tags">
                      {project.stats.map((stat) => (
                        <span key={stat} className="stat-tag">{stat}</span>
                      ))}
                    </div>

                    <a href={project.github} target="_blank" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>
                      <GitHubIcon size={16} /> 查看源码
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
