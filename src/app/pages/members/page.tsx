'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { FadeIn } from '@/components/MotionDiv';
import { GitHubIcon, GlobeIcon, BilibiliIcon } from '@/components/icons';

const members = [
  {
    name: 'Jason_CJ', handle: '@s12mcOvO',
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
    name: 'Computer_漫画君',
    handle: '@Computer_Comic',
    bio: '团队核心成员，为项目注入创意与活力。',
    avatar: '/assets/Pictures/Computer_comic.jpg',
    github: 'https://github.com/Computer-Comic',
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
];

export default function MembersPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="团队成员" subtitle="认识驱动 OpenLight 的人们" />

      <section className="section section-dark">
        <div className="container">
          <div className="members-grid">
            {members.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{
                    width: 100, height: 100, borderRadius: '50%', overflow: 'hidden',
                    marginBottom: '1.5rem', border: '4px solid #0f0f1a',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  }}>
                    <img src={member.avatar} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <span style={{ color: '#ff6b35', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>{member.role}</span>
                  <h3 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1.25rem' }}>{member.name}</h3>
                  <span style={{ color: '#ff6b35', fontSize: '0.9rem', fontWeight: 500, display: 'block', marginBottom: '1rem' }}>{member.handle}</span>
                  <p className="card-desc" style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>{member.bio}</p>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href={member.github} target="_blank"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#0f0f1a', borderRadius: 8, color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', textDecoration: 'none' }}>
                      <GitHubIcon size={16} /> GitHub
                    </a>
                    {member.blog && (
                      <a href={member.blog} target="_blank"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#0f0f1a', borderRadius: 8, color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', textDecoration: 'none' }}>
                        <GlobeIcon size={16} /> 博客
                      </a>
                    )}
                    {member.bilibili && (
                      <a href={member.bilibili} target="_blank"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#0f0f1a', borderRadius: 8, color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', textDecoration: 'none' }}>
                        <BilibiliIcon size={16} /> B站
                      </a>
                    )}
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
