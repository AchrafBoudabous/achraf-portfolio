'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const roles = ['Software Engineer', 'AI Enthusiast', 'Low-code Developer', 'Problem Solver'];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.gridLines} aria-hidden />
        <div className={styles.heroContent}>

          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeMono}>available for work</span>
          </div>

          <div className={styles.profileRow}>
            <div className={styles.profileImageWrapper}>
              <Image
                src="/images/Me.jpg"
                alt="Achraf Boudabous"
                width={120}
                height={120}
                className={styles.profileImage}
                priority
              />
            </div>
            <div className={styles.heroText}>
              <p className={styles.greeting}>
                <span className={styles.mono}>// Hello, I&apos;m</span>
              </p>
              <h1 className={styles.heroTitle}>
                Achraf <span className={styles.accent}>Boudabous</span>
              </h1>
              <div className={styles.typewriterRow}>
                <span className={styles.typewriterText}>{displayed}</span>
                <span className={styles.cursor} aria-hidden />
              </div>
            </div>
          </div>

          <p className={styles.heroTagline}>
            Building scalable, intelligent digital solutions with code and low-code platforms.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/portfolio" className={styles.primaryButton}>
              <span>./view-work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              <span>./contact</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </Link>
          </div>

          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/achraf-boudabous/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://github.com/AchrafBoudabous" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className={styles.statsRow}>
            {[
              { num: '2+', label: 'yrs_experience' },
              { num: '10+', label: 'projects' },
              { num: '10+', label: 'certifications' },
              { num: '3', label: 'countries' },
            ].map(({ num, label }) => (
              <div key={label} className={styles.stat}>
                <div className={styles.statNum}>{num}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionComment}>// about_me</span>
            <h2 className={styles.sectionTitle}>About Me</h2>
          </div>
          <div className={styles.introContent}>
            <p>
              I am a Tunisian software engineer based in Germany. I recently completed my Master of Science in Global Software
              Development at Fulda University of Applied Sciences. My work bridges AI-driven automation, low-code development,
              and full-stack engineering, combining technical depth with creativity to design intelligent, scalable, and user-centric solutions.
            </p>
            <p>
              Having lived and worked across Tunisia, Bahrain, and Germany, I bring a global perspective to software development and
              problem-solving. My focus lies in building AI-enhanced automation systems using Microsoft Power Platform and Azure AI,
              as well as developing modern web applications that streamline workflows and boost productivity.
            </p>
          </div>
          <div className={styles.skillsPreview}>
            <span className={styles.sectionComment}>// core_stack</span>
            <div className={styles.skillTags}>
              {['Python', 'JavaScript', 'Azure AI', 'Power Platform', 'Next.js', 'FastAPI', 'React', 'Docker', 'Copilot Studio', 'Vue 3'].map(tag => (
                <span key={tag} className={styles.skillTag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className={styles.introActions}>
            <Link href="/about" className={styles.linkBtn}>
              <span>More about me</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}